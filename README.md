# Sohaib Ahmed Mohammed – Portfolio Website

Welcome to my personal developer portfolio – a modern, fully responsive website built using **React**, **Tailwind CSS**, **JavaScript**, and **Framer Motion**, showcasing my work as a **DevOps Engineer & Site Reliability Engineer**.

## 🌐 Live Website

[https://sohaibmohammed.xyz](https://sohaibmohammed.xyz)

---

##  Features

-  Built with **JavaScript**
-  Styled with **Tailwind CSS** and custom CSS variables
-  Supports **light/dark theme toggle**
-  Smooth animations with **Framer Motion**
-  Fully responsive design
-  Contact form (optional API-ready setup)
-  Deployed via GitHub Pages

---

## 🛠 Tech Stack

- [JavaScript](https://javascript.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/icons/)
- [React Hook Form (optional)](https://react-hook-form.com/)


---

## 📁 Folder Structure

```
sohaibmohammed.github.io/
├── client/                  # Frontend (React + Vite)
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       ├── components/
│       │   ├── navigation.jsx
│       │   ├── hero-section.jsx
│       │   ├── about-section.jsx
│       │   ├── experience-section.jsx
│       │   ├── education-section.jsx
│       │   ├── contact-section.jsx
│       │   ├── footer.jsx
│       │   └── ui/… (shadcn UI components)
│       ├── hooks/
│       ├── lib/
│       └── styles/index.css
│
├── server/                  # Backend (Express + Nodemailer)
│   ├── package.json
│   ├── server.js
│   ├── .env.example
│   └── README.md
│
├── Dockerfile               # Production build (combined client + server)
└── .github/workflows/       # CI/CD workflows for GitHub Pages

---

## Run Locally

1. **Clone the repo**
```bash
git clone https://github.com/sohaibmohd18/sohaibmohammed.portfolio.git
cd sohaibmohammed.portfolio.git
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the development server**
```bash
npm run dev
```

---

## 📦 Build for Production

```bash
npm run build
npm run start
```

To export static files for GitHub Pages:
```bash
npm run build && npm run export
```

---

## 📩 Contact

- Email: [sohaibmohd000@gmail.com](mailto:sohaibmohd000@gmail.com)
- LinkedIn: [linkedin.com/in/sohaib-mohd](https://linkedin.com/in/sohaib-mohd)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
