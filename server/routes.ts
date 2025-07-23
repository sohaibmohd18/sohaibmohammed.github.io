import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { ZodError } from "zod";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // Store the message
      const contactMessage = await storage.createContactMessage(validatedData);

      // Create email transporter
      const transporter = nodemailer.createTransporter({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER || 'your-email@gmail.com',
          pass: process.env.GMAIL_APP_PASSWORD || 'your-app-password'
        }
      });

      // Email content
      const mailOptions = {
        from: validatedData.email,
        to: 'sohaibmohd000@gmail.com',
        subject: `Portfolio Contact: ${validatedData.subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #6366F1; border-bottom: 2px solid #6366F1; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            
            <div style="margin: 20px 0;">
              <p><strong>Name:</strong> ${validatedData.name}</p>
              <p><strong>Email:</strong> ${validatedData.email}</p>
              <p><strong>Subject:</strong> ${validatedData.subject}</p>
            </div>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #374151;">Message:</h3>
              <p style="line-height: 1.6; color: #4B5563;">${validatedData.message.replace(/\n/g, '<br>')}</p>
            </div>
            
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
            
            <div style="text-align: center; color: #6B7280; font-size: 14px;">
              <p>This message was sent from your portfolio website contact form.</p>
              <p>Reply directly to this email to respond to the sender.</p>
            </div>
          </div>
        `,
        replyTo: validatedData.email
      };

      // Send email
      try {
        await transporter.sendMail(mailOptions);
        res.json({ 
          success: true, 
          message: "Message sent successfully!",
          id: contactMessage.id
        });
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        // Still return success since we stored the message
        res.json({ 
          success: true, 
          message: "Message received! (Email notification may be delayed)",
          id: contactMessage.id
        });
      }
      
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        console.error('Contact form error:', error);
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  // Get all contact messages (for potential admin interface)
  app.get("/api/contact", async (_req: Request, res: Response) => {
    try {
      const messages = await storage.getContactMessages();
      res.json({ success: true, messages });
    } catch (error) {
      console.error('Error fetching messages:', error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch messages" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
