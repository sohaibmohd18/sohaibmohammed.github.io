(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,660];
exports.modules = {

/***/ 1420:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),
/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),
/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),
/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3185);
/* harmony import */ var next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5244);
/* harmony import */ var next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7182);
/* harmony import */ var next_dist_pages_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2940);
/* harmony import */ var next_dist_pages_document__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_pages_document__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4178);
/* harmony import */ var private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2603);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__]);
private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "default"));
// Re-export methods.
const getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "getStaticProps");
const getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "getStaticPaths");
const getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "getServerSideProps");
const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "config");
const reportWebVitals = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticParams");
const unstable_getServerProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerProps");
const unstable_getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.PAGES,
        page: "/index",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__["default"],
        Document: (next_dist_pages_document__WEBPACK_IMPORTED_MODULE_3___default())
    },
    userland: private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__
});

//# sourceMappingURL=pages.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4980:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ AboutSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var modularize_import_loader_name_CheckCircle_from_default_as_default_join_esm_icons_check_circle_lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9589);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// components/about-section.tsx



const expertise = [
    "Cloud Infrastructure (AWS, Azure, GCP)",
    "CI/CD Pipeline Implementation",
    "Kubernetes & Container Orchestration",
    "Infrastructure as Code (Terraform, Ansible)",
    "Monitoring & Observability",
    "Site Reliability Engineering"
];
function AboutSection() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        id: "about",
        className: "py-24 bg-background text-foreground",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "max-w-7xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                    className: "text-center mb-16",
                    initial: {
                        opacity: 0,
                        y: 50
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.6
                    },
                    viewport: {
                        once: true
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "text-4xl font-bold mb-2",
                            children: "About Me"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-lg text-muted-foreground",
                            children: "Building reliable, scalable infrastructure solutions"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "grid lg:grid-cols-2 gap-12 items-start",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                            className: "space-y-6",
                            initial: {
                                opacity: 0,
                                x: -50
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                duration: 0.6
                            },
                            viewport: {
                                once: true
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-muted-foreground text-lg leading-relaxed",
                                    children: "I'm a passionate DevOps Engineer and Site Reliability Engineer with over 3.5 years of hands-on experience in designing, implementing, and optimizing cloud infrastructure. My expertise spans across major cloud platforms including AWS, Azure, and Google Cloud."
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-muted-foreground text-lg leading-relaxed",
                                    children: "I specialize in automating deployments, managing containerized applications with Kubernetes and Docker, and utilizing Infrastructure as Code (IaC) tools such as Terraform and Ansible. My goal is to drive efficient, scalable, and secure cloud solutions that contribute to organizational success."
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "grid grid-cols-2 gap-6",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                                            className: "text-center p-6 rounded-xl bg-muted",
                                            whileHover: {
                                                scale: 1.05
                                            },
                                            transition: {
                                                duration: 0.2
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text-3xl font-bold text-primary mb-2",
                                                    children: "3.5+"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text-muted-foreground",
                                                    children: "Years Experience"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                                            className: "text-center p-6 rounded-xl bg-muted",
                                            whileHover: {
                                                scale: 1.05
                                            },
                                            transition: {
                                                duration: 0.2
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text-3xl font-bold text-secondary mb-2",
                                                    children: "20+"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text-muted-foreground",
                                                    children: "Projects Delivered"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                            initial: {
                                opacity: 0,
                                x: 50
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                duration: 0.6
                            },
                            viewport: {
                                once: true
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "bg-gradient-to-r from-primary to-secondary p-1 rounded-xl",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "bg-background rounded-lg p-6",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "text-xl font-semibold mb-4",
                                            children: "Core Expertise"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                            className: "space-y-3",
                                            children: expertise.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.li, {
                                                    className: "flex items-center",
                                                    initial: {
                                                        opacity: 0,
                                                        x: 20
                                                    },
                                                    whileInView: {
                                                        opacity: 1,
                                                        x: 0
                                                    },
                                                    transition: {
                                                        duration: 0.4,
                                                        delay: index * 0.1
                                                    },
                                                    viewport: {
                                                        once: true
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_CheckCircle_from_default_as_default_join_esm_icons_check_circle_lucide_react__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                            className: "text-secondary mr-3 h-5 w-5"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-foreground",
                                                            children: item
                                                        })
                                                    ]
                                                }, index))
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1857:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ ContactSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(726);
/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4352);
/* harmony import */ var _components_ui_textarea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7540);
/* harmony import */ var _components_ui_label__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6642);
/* harmony import */ var modularize_import_loader_name_Mail_from_default_as_default_join_esm_icons_mail_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6953);
/* harmony import */ var modularize_import_loader_name_Linkedin_from_default_as_default_join_esm_icons_linkedin_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9560);
/* harmony import */ var modularize_import_loader_name_MapPin_from_default_as_default_join_esm_icons_map_pin_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4976);
/* harmony import */ var modularize_import_loader_name_Send_from_default_as_default_join_esm_icons_send_lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2841);
/* harmony import */ var modularize_import_loader_name_CheckCircle_from_default_as_default_join_esm_icons_check_circle_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9589);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _components_ui_button__WEBPACK_IMPORTED_MODULE_3__, _components_ui_input__WEBPACK_IMPORTED_MODULE_4__, _components_ui_textarea__WEBPACK_IMPORTED_MODULE_5__, _components_ui_label__WEBPACK_IMPORTED_MODULE_6__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _components_ui_button__WEBPACK_IMPORTED_MODULE_3__, _components_ui_input__WEBPACK_IMPORTED_MODULE_4__, _components_ui_textarea__WEBPACK_IMPORTED_MODULE_5__, _components_ui_label__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// components/contact-section.tsx












const whyWorkWithMe = [
    "Proven track record in cloud infrastructure",
    "Strong automation and DevOps expertise",
    "Experience with scalable, secure solutions",
    "Collaborative team player"
];
function ContactSection() {
    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const handleInputChange = (field, value)=>{
        setFormData((prev)=>({
                ...prev,
                [field]: value
            }));
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        id: "contact",
        className: "py-24 bg-background text-foreground",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "max-w-7xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                    className: "text-center mb-16",
                    initial: {
                        opacity: 0,
                        y: 50
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.6
                    },
                    viewport: {
                        once: true
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "text-4xl font-bold mb-2",
                            children: "Get In Touch"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-lg text-muted-foreground",
                            children: "Let's discuss opportunities and collaborations"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "grid lg:grid-cols-2 gap-12",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                            className: "space-y-8",
                            initial: {
                                opacity: 0,
                                x: -50
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                duration: 0.6
                            },
                            viewport: {
                                once: true
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "text-2xl font-semibold mb-6",
                                            children: "Contact Information"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "p-3 bg-primary/10 rounded-lg mr-4",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Mail_from_default_as_default_join_esm_icons_mail_lucide_react__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                                className: "text-primary h-5 w-5"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "text-sm text-muted-foreground",
                                                                    children: "Email"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    href: "mailto:sohaibmohd000@gmail.com",
                                                                    className: "text-base font-semibold text-primary hover:underline",
                                                                    children: "sohaibmohd000@gmail.com"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "p-3 bg-secondary/10 rounded-lg mr-4",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Linkedin_from_default_as_default_join_esm_icons_linkedin_lucide_react__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                                className: "text-secondary h-5 w-5"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "text-sm text-muted-foreground",
                                                                    children: "LinkedIn"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    href: "https://www.linkedin.com/in/sohaib-mohd",
                                                                    target: "_blank",
                                                                    rel: "noopener noreferrer",
                                                                    className: "text-base font-semibold text-secondary hover:underline",
                                                                    children: "linkedin.com/in/sohaib-mohd"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "p-3 bg-accent/10 rounded-lg mr-4",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_MapPin_from_default_as_default_join_esm_icons_map_pin_lucide_react__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                                className: "text-accent h-5 w-5"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "text-sm text-muted-foreground",
                                                                    children: "Location"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "text-base font-semibold",
                                                                    children: "Hayward, CA"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "bg-gradient-to-r from-primary to-secondary p-1 rounded-xl",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "bg-background rounded-lg p-6",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                className: "text-xl font-semibold mb-4",
                                                children: "Why Work With Me?"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                className: "space-y-2 text-muted-foreground",
                                                children: whyWorkWithMe.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.li, {
                                                        className: "flex items-center",
                                                        initial: {
                                                            opacity: 0,
                                                            x: 20
                                                        },
                                                        whileInView: {
                                                            opacity: 1,
                                                            x: 0
                                                        },
                                                        transition: {
                                                            duration: 0.4,
                                                            delay: index * 0.1
                                                        },
                                                        viewport: {
                                                            once: true
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_CheckCircle_from_default_as_default_join_esm_icons_check_circle_lucide_react__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                                className: "text-secondary mr-2 h-4 w-4"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: item
                                                            })
                                                        ]
                                                    }, index))
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                            className: "bg-muted rounded-xl p-8",
                            initial: {
                                opacity: 0,
                                x: 50
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                duration: 0.6
                            },
                            viewport: {
                                once: true
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "text-2xl font-semibold mb-6",
                                    children: "Send a Message"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "grid md:grid-cols-2 gap-6",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_label__WEBPACK_IMPORTED_MODULE_6__/* .Label */ ._, {
                                                            htmlFor: "name",
                                                            children: "Name *"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_input__WEBPACK_IMPORTED_MODULE_4__/* .Input */ .I, {
                                                            id: "name",
                                                            type: "text",
                                                            required: true,
                                                            value: formData.name,
                                                            onChange: (e)=>handleInputChange("name", e.target.value),
                                                            placeholder: "Your Name"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_label__WEBPACK_IMPORTED_MODULE_6__/* .Label */ ._, {
                                                            htmlFor: "email",
                                                            children: "Email *"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_input__WEBPACK_IMPORTED_MODULE_4__/* .Input */ .I, {
                                                            id: "email",
                                                            type: "email",
                                                            required: true,
                                                            value: formData.email,
                                                            onChange: (e)=>handleInputChange("email", e.target.value),
                                                            placeholder: "you@example.com"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_label__WEBPACK_IMPORTED_MODULE_6__/* .Label */ ._, {
                                                    htmlFor: "subject",
                                                    children: "Subject *"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_input__WEBPACK_IMPORTED_MODULE_4__/* .Input */ .I, {
                                                    id: "subject",
                                                    type: "text",
                                                    required: true,
                                                    value: formData.subject,
                                                    onChange: (e)=>handleInputChange("subject", e.target.value),
                                                    placeholder: "Message Subject"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_label__WEBPACK_IMPORTED_MODULE_6__/* .Label */ ._, {
                                                    htmlFor: "message",
                                                    children: "Message *"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_textarea__WEBPACK_IMPORTED_MODULE_5__/* .Textarea */ .g, {
                                                    id: "message",
                                                    rows: 5,
                                                    required: true,
                                                    value: formData.message,
                                                    onChange: (e)=>handleInputChange("message", e.target.value),
                                                    placeholder: "Your message here..."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .z, {
                                            type: "submit",
                                            className: "w-full",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Send_from_default_as_default_join_esm_icons_send_lucide_react__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                    className: "mr-2 h-4 w-4"
                                                }),
                                                "Send Message"
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2762:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ EducationSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var modularize_import_loader_name_Calendar_from_default_as_default_join_esm_icons_calendar_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4622);
/* harmony import */ var modularize_import_loader_name_GraduationCap_from_default_as_default_join_esm_icons_graduation_cap_lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9283);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// components/education-section.tsx




function EducationSection() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        id: "education",
        className: "py-24 bg-background text-foreground",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "max-w-7xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                    className: "text-center mb-16",
                    initial: {
                        opacity: 0,
                        y: 50
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.6
                    },
                    viewport: {
                        once: true
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "text-4xl font-bold mb-2",
                            children: "Education"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-lg text-muted-foreground",
                            children: "Academic background and qualifications"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "max-w-4xl mx-auto",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                        className: "bg-card rounded-xl p-8 shadow-md hover:shadow-lg transition",
                        initial: {
                            opacity: 0,
                            y: 50
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.6
                        },
                        viewport: {
                            once: true
                        },
                        whileHover: {
                            scale: 1.02,
                            y: -5
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col lg:flex-row lg:items-center lg:justify-between",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center mb-4",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "p-3 bg-primary/10 rounded-lg mr-4",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_GraduationCap_from_default_as_default_join_esm_icons_graduation_cap_lucide_react__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                        className: "text-primary h-8 w-8"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            className: "text-2xl font-bold mb-1",
                                                            children: "Master of Science in Business Analytics"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-lg font-semibold text-primary",
                                                            children: "California State University East Bay"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-muted-foreground",
                                                            children: "Hayward, CA"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "text-muted-foreground flex items-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Calendar_from_default_as_default_join_esm_icons_calendar_lucide_react__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                className: "mr-2 h-4 w-4"
                                            }),
                                            "Aug 2022 – May 2024"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                                className: "mt-6 p-4 rounded-lg bg-muted",
                                initial: {
                                    opacity: 0
                                },
                                whileInView: {
                                    opacity: 1
                                },
                                transition: {
                                    duration: 0.6,
                                    delay: 0.2
                                },
                                viewport: {
                                    once: true
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-muted-foreground",
                                    children: "Advanced coursework in data analytics, business intelligence, and statistical modeling. Developed strong analytical skills that complement my technical expertise in DevOps and infrastructure management."
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 221:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ ExperienceSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var modularize_import_loader_name_Calendar_from_default_as_default_join_esm_icons_calendar_lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4622);
/* harmony import */ var modularize_import_loader_name_ChevronRight_from_default_as_default_join_esm_icons_chevron_right_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4998);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// components/experience-section.tsx




const experiences = [
    {
        title: "Infrastructure Engineer",
        company: "Adobe",
        location: "San Jose, CA",
        period: "May 2025 – June 2025",
        color: "text-primary",
        achievements: [
            "Provisioned AWS resources using AWS Controllers for Kubernetes (ACK) and Helm templates to standardize and automate deployment of AWS resources within Adobe's cloud-native ecosystem",
            "Implemented observability stack using Prometheus, Grafana, and YACE exporters, enabling high-availability metrics ingestion and granular monitoring across namespaces",
            "Automated infrastructure deployment workflows, reducing manual intervention by 60% and improving deployment consistency across multi-cluster Kubernetes environments"
        ]
    },
    {
        title: "Site Reliability Engineer",
        company: "Fabs IT Solutions",
        location: "Hayward, CA",
        period: "Sep 2024 – Mar 2025",
        color: "text-secondary",
        achievements: [
            "Deployed and managed scalable AWS Infrastructure, improving system availability to 99.99%",
            "Implemented CI pipelines using Jenkins, reducing build and deployment time by 60%",
            "Automated backend infrastructure provisioning for 15+ microservices using Terraform modules, reducing manual setup time by 80%"
        ]
    },
    {
        title: "DevOps Engineer",
        company: "Compass Group",
        location: "Hayward, CA",
        period: "Aug 2023 – May 2024",
        color: "text-accent",
        achievements: [
            "Provisioned infrastructure for 20+ applications using Terraform, optimizing resource utilization and reducing manual provisioning time",
            "Implemented Argo CD for automated Kubernetes deployments, reducing deployment time by 50%",
            "Maintained 99.9% uptime through regular health checks and load balancer configuration"
        ]
    },
    {
        title: "Application Development Associate",
        company: "Accenture",
        location: "Hyderabad, India",
        period: "Sep 2020 – Aug 2022",
        color: "text-purple-600",
        achievements: [
            "Migrated on-premises infrastructure to AWS, reducing operational costs by 40%",
            "Managed multi-stage CI/CD pipelines using Jenkins, integrating security scanning and automated testing",
            "Implemented monitoring solutions using Prometheus and Grafana, improving issue detection time by 40%"
        ]
    }
];
function ExperienceSection() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        id: "experience",
        className: "py-24 bg-background text-foreground",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "max-w-7xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                    className: "text-center mb-16",
                    initial: {
                        opacity: 0,
                        y: 50
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.6
                    },
                    viewport: {
                        once: true
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "text-4xl font-bold mb-2",
                            children: "Professional Experience"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-lg text-muted-foreground",
                            children: "My journey in DevOps and Site Reliability Engineering"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "space-y-8",
                    children: experiences.map((exp, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                            className: "bg-muted rounded-xl p-8 transition-all duration-300 hover:shadow-md",
                            initial: {
                                opacity: 0,
                                y: 50
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.5,
                                delay: index * 0.1
                            },
                            viewport: {
                                once: true
                            },
                            whileHover: {
                                scale: 1.01,
                                y: -2
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "text-2xl font-bold",
                                                    children: exp.title
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: `text-lg font-semibold ${exp.color}`,
                                                    children: exp.company
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-muted-foreground",
                                                    children: exp.location
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "text-muted-foreground mt-2 lg:mt-0 flex items-center",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Calendar_from_default_as_default_join_esm_icons_calendar_lucide_react__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                    className: "mr-2 h-4 w-4"
                                                }),
                                                exp.period
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                    className: "space-y-3 text-muted-foreground",
                                    children: exp.achievements.map((achievement, achievementIndex)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.li, {
                                            className: "flex items-start",
                                            initial: {
                                                opacity: 0,
                                                x: 20
                                            },
                                            whileInView: {
                                                opacity: 1,
                                                x: 0
                                            },
                                            transition: {
                                                duration: 0.4,
                                                delay: index * 0.1 + achievementIndex * 0.1
                                            },
                                            viewport: {
                                                once: true
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_ChevronRight_from_default_as_default_join_esm_icons_chevron_right_lucide_react__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                    className: `${exp.color} mr-3 mt-1 h-4 w-4 flex-shrink-0`
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    dangerouslySetInnerHTML: {
                                                        __html: achievement.replace(/(\d+%)/g, '<span class="font-semibold text-accent">$1</span>')
                                                    }
                                                })
                                            ]
                                        }, achievementIndex))
                                })
                            ]
                        }, index))
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5926:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var modularize_import_loader_name_Mail_from_default_as_default_join_esm_icons_mail_lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6953);
/* harmony import */ var modularize_import_loader_name_Linkedin_from_default_as_default_join_esm_icons_linkedin_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9560);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function Footer() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        className: "bg-warm-gray-900 text-white py-12",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                className: "text-center",
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.6
                },
                viewport: {
                    once: true
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: "text-2xl font-bold mb-4",
                        children: "Sohaib Ahmed Mohammed"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-warm-gray-300 mb-6",
                        children: "DevOps Engineer & Site Reliability Engineer"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex justify-center space-x-6 mb-8",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.a, {
                                href: "mailto:sohaibmohd000@gmail.com",
                                className: "text-warm-gray-400 hover:text-primary transition-colors duration-200 text-2xl",
                                whileHover: {
                                    scale: 1.1,
                                    y: -2
                                },
                                transition: {
                                    duration: 0.2
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Mail_from_default_as_default_join_esm_icons_mail_lucide_react__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.a, {
                                href: "https://www.linkedin.com/in/sohaib-mohd",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "text-warm-gray-400 hover:text-primary transition-colors duration-200 text-2xl",
                                whileHover: {
                                    scale: 1.1,
                                    y: -2
                                },
                                transition: {
                                    duration: 0.2
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Linkedin_from_default_as_default_join_esm_icons_linkedin_lucide_react__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "border-t border-warm-gray-700 pt-8",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-warm-gray-400",
                            children: "\xa9 2025 Sohaib Ahmed Mohammed. All rights reserved."
                        })
                    })
                ]
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2101:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ HeroSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(726);
/* harmony import */ var modularize_import_loader_name_Mail_from_default_as_default_join_esm_icons_mail_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6953);
/* harmony import */ var modularize_import_loader_name_Briefcase_from_default_as_default_join_esm_icons_briefcase_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8909);
/* harmony import */ var modularize_import_loader_name_Linkedin_from_default_as_default_join_esm_icons_linkedin_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9560);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _components_ui_button__WEBPACK_IMPORTED_MODULE_2__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _components_ui_button__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// components/hero-section.tsx






const techIcons = [
    {
        icon: "☁️",
        label: "AWS",
        delay: 0
    },
    {
        icon: "\uD83D\uDE80",
        label: "Docker",
        delay: 0.5
    },
    {
        icon: "⚡",
        label: "CI/CD",
        delay: 1
    },
    {
        icon: "\uD83D\uDD27",
        label: "DevOps",
        delay: 1.5
    },
    {
        icon: "\uD83D\uDDA5️",
        label: "Infrastructure",
        delay: 2
    },
    {
        icon: "\uD83D\uDCCA",
        label: "Monitoring",
        delay: 2.5
    }
];
function HeroSection() {
    const scrollToSection = (sectionId)=>{
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth"
            });
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        id: "home",
        className: "min-h-screen flex items-center pt-24 bg-background text-foreground",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid lg:grid-cols-2 gap-12 items-center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "space-y-8",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                                initial: {
                                    y: 100,
                                    opacity: 0
                                },
                                animate: {
                                    y: 0,
                                    opacity: 1
                                },
                                transition: {
                                    duration: 0.5
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "text-5xl md:text-6xl font-extrabold leading-tight",
                                        children: [
                                            "Hi, I'm ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-primary",
                                                children: "Sohaib"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-xl text-muted-foreground mt-4",
                                        children: "DevOps Engineer & Site Reliability Engineer"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.p, {
                                className: "text-lg text-muted-foreground leading-relaxed",
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                transition: {
                                    duration: 0.6,
                                    delay: 0.2
                                },
                                children: "With 3.5+ years of experience in building and optimizing cloud infrastructure across AWS, Azure, and GCP. Passionate about automation, scalability, and delivering secure, cost-efficient solutions."
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                                className: "flex flex-col sm:flex-row gap-4",
                                initial: {
                                    y: 100,
                                    opacity: 0
                                },
                                animate: {
                                    y: 0,
                                    opacity: 1
                                },
                                transition: {
                                    duration: 0.5,
                                    delay: 0.4
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .z, {
                                        onClick: ()=>scrollToSection("contact"),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Mail_from_default_as_default_join_esm_icons_mail_lucide_react__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                className: "mr-2 h-4 w-4"
                                            }),
                                            " Get In Touch"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .z, {
                                        variant: "outline",
                                        onClick: ()=>scrollToSection("experience"),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Briefcase_from_default_as_default_join_esm_icons_briefcase_lucide_react__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                className: "mr-2 h-4 w-4"
                                            }),
                                            " View My Work"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                                className: "flex gap-6 text-muted-foreground text-xl",
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                transition: {
                                    duration: 0.6,
                                    delay: 0.6
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "https://www.linkedin.com/in/sohaib-mohd",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "hover:text-primary",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Linkedin_from_default_as_default_join_esm_icons_linkedin_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            className: "h-6 w-6"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "mailto:sohaibmohd000@gmail.com",
                                        className: "hover:text-primary",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Mail_from_default_as_default_join_esm_icons_mail_lucide_react__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                            className: "h-6 w-6"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "hidden lg:block",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "relative w-96 h-96 mx-auto grid grid-cols-3 gap-4",
                            children: techIcons.map((tech)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                                    className: "bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center text-white text-4xl shadow hover:scale-110 transition-transform duration-300 cursor-pointer",
                                    initial: {
                                        scale: 0,
                                        rotate: 180
                                    },
                                    animate: {
                                        scale: 1,
                                        rotate: 0
                                    },
                                    transition: {
                                        duration: 0.5,
                                        delay: tech.delay,
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20
                                    },
                                    whileHover: {
                                        scale: 1.1
                                    },
                                    children: tech.icon
                                }, tech.label))
                        })
                    })
                ]
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7098:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ Navigation)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(726);
/* harmony import */ var _components_ui_sheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7053);
/* harmony import */ var _theme_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3285);
/* harmony import */ var modularize_import_loader_name_Menu_from_default_as_default_join_esm_icons_menu_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7232);
/* harmony import */ var modularize_import_loader_name_Moon_from_default_as_default_join_esm_icons_moon_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(250);
/* harmony import */ var modularize_import_loader_name_Sun_from_default_as_default_join_esm_icons_sun_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8532);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_button__WEBPACK_IMPORTED_MODULE_2__, _components_ui_sheet__WEBPACK_IMPORTED_MODULE_3__]);
([_components_ui_button__WEBPACK_IMPORTED_MODULE_2__, _components_ui_sheet__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const navigationItems = [
    {
        href: "#home",
        label: "Home"
    },
    {
        href: "#about",
        label: "About"
    },
    {
        href: "#skills",
        label: "Skills"
    },
    {
        href: "#experience",
        label: "Experience"
    },
    {
        href: "#education",
        label: "Education"
    },
    {
        href: "#contact",
        label: "Contact"
    }
];
function Navigation() {
    const [activeSection, setActiveSection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("home");
    const { theme, setTheme } = (0,_theme_provider__WEBPACK_IMPORTED_MODULE_4__/* .useTheme */ .F)();
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleScroll = ()=>{
            const sections = navigationItems.map((item)=>item.href.substring(1));
            const currentSection = sections.find((section)=>{
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (currentSection) {
                setActiveSection(currentSection);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
    const scrollToSection = (href)=>{
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth"
            });
            setIsOpen(false);
        }
    };
    const toggleTheme = ()=>{
        setTheme(theme === "light" ? "dark" : "light");
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        className: "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-300",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex justify-between items-center py-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-xl font-bold text-primary",
                        children: "Sohaib Ahmed Mohammed"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "hidden md:flex space-x-8",
                        children: navigationItems.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: ()=>scrollToSection(item.href),
                                className: `transition-colors duration-200 hover:text-primary ${activeSection === item.href.substring(1) ? "text-primary" : "text-foreground"}`,
                                children: item.label
                            }, item.href))
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center space-x-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .z, {
                                variant: "outline",
                                size: "icon",
                                onClick: toggleTheme,
                                className: "transition-colors duration-200",
                                children: theme === "light" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Moon_from_default_as_default_join_esm_icons_moon_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    className: "h-4 w-4"
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Sun_from_default_as_default_join_esm_icons_sun_lucide_react__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    className: "h-4 w-4"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_sheet__WEBPACK_IMPORTED_MODULE_3__/* .Sheet */ .yo, {
                                open: isOpen,
                                onOpenChange: setIsOpen,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_sheet__WEBPACK_IMPORTED_MODULE_3__/* .SheetTrigger */ .aM, {
                                        asChild: true,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .z, {
                                            variant: "outline",
                                            size: "icon",
                                            className: "md:hidden",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Menu_from_default_as_default_join_esm_icons_menu_lucide_react__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                className: "h-4 w-4"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_sheet__WEBPACK_IMPORTED_MODULE_3__/* .SheetContent */ .ue, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "flex flex-col space-y-4 mt-8",
                                            children: navigationItems.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    onClick: ()=>scrollToSection(item.href),
                                                    className: `text-left py-2 transition-colors duration-200 hover:text-primary ${activeSection === item.href.substring(1) ? "text-primary" : "text-foreground"}`,
                                                    children: item.label
                                                }, item.href))
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4909:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ SkillsSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var modularize_import_loader_name_Cloud_from_default_as_default_join_esm_icons_cloud_lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9828);
/* harmony import */ var modularize_import_loader_name_Cog_from_default_as_default_join_esm_icons_cog_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5358);
/* harmony import */ var modularize_import_loader_name_Server_from_default_as_default_join_esm_icons_server_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(443);
/* harmony import */ var modularize_import_loader_name_Activity_from_default_as_default_join_esm_icons_activity_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9062);
/* harmony import */ var modularize_import_loader_name_GitBranch_from_default_as_default_join_esm_icons_git_branch_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8216);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// components/skills-section.tsx







const skillCategories = [
    {
        title: "AWS Cloud",
        icon: modularize_import_loader_name_Cloud_from_default_as_default_join_esm_icons_cloud_lucide_react__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
        color: "text-orange-600",
        bgColor: "bg-orange-100 dark:bg-orange-900/30",
        skills: [
            "EC2",
            "S3",
            "Lambda",
            "RDS",
            "EKS",
            "VPC",
            "CloudWatch",
            "Route 53"
        ]
    },
    {
        title: "Azure Cloud",
        icon: modularize_import_loader_name_Cloud_from_default_as_default_join_esm_icons_cloud_lucide_react__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
        color: "text-blue-600",
        bgColor: "bg-blue-100 dark:bg-blue-900/30",
        skills: [
            "Azure VM",
            "AKS",
            "ACR",
            "Functions",
            "Blob Storage",
            "DevOps Services",
            "Monitor"
        ]
    },
    {
        title: "CI/CD Tools",
        icon: modularize_import_loader_name_GitBranch_from_default_as_default_join_esm_icons_git_branch_lucide_react__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
        color: "text-secondary",
        bgColor: "bg-secondary/20 dark:bg-secondary/30",
        skills: [
            "Jenkins",
            "GitHub Actions",
            "ArgoCD",
            "Circle CI",
            "AWS CodePipeline"
        ]
    },
    {
        title: "Containerization",
        icon: modularize_import_loader_name_Server_from_default_as_default_join_esm_icons_server_lucide_react__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
        color: "text-primary",
        bgColor: "bg-primary/20 dark:bg-primary/30",
        skills: [
            "Kubernetes",
            "Docker",
            "OpenShift",
            "Helm Charts",
            "EKS",
            "AKS"
        ]
    },
    {
        title: "Infrastructure as Code",
        icon: modularize_import_loader_name_Cog_from_default_as_default_join_esm_icons_cog_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
        color: "text-accent",
        bgColor: "bg-accent/20 dark:bg-accent/30",
        skills: [
            "Terraform",
            "Ansible",
            "CloudFormation",
            "Chef",
            "Puppet"
        ]
    },
    {
        title: "Monitoring & Observability",
        icon: modularize_import_loader_name_Activity_from_default_as_default_join_esm_icons_activity_lucide_react__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
        color: "text-red-600",
        bgColor: "bg-red-100 dark:bg-red-900/30",
        skills: [
            "Prometheus",
            "Grafana",
            "Datadog",
            "Splunk",
            "ELK Stack",
            "Kibana"
        ]
    }
];
function SkillsSection() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        id: "skills",
        className: "py-24 bg-background text-foreground",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "max-w-7xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                    className: "text-center mb-16",
                    initial: {
                        opacity: 0,
                        y: 50
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.6
                    },
                    viewport: {
                        once: true
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "text-4xl font-bold mb-2",
                            children: "Technical Skills"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-lg text-muted-foreground",
                            children: "Technologies and tools I work with"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                    children: skillCategories.map((category, index)=>{
                        const IconComponent = category.icon;
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                            className: "bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300",
                            initial: {
                                opacity: 0,
                                y: 50
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.5,
                                delay: index * 0.1
                            },
                            viewport: {
                                once: true
                            },
                            whileHover: {
                                scale: 1.02,
                                y: -5
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-center mb-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `p-3 ${category.bgColor} rounded-lg mr-4`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IconComponent, {
                                                className: `text-2xl ${category.color} h-6 w-6`
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "text-xl font-semibold text-foreground",
                                            children: category.title
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: category.skills.map((skill, skillIndex)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.span, {
                                            className: "px-3 py-1 bg-muted text-foreground rounded-full text-sm transition-colors hover:bg-primary hover:text-primary-foreground",
                                            initial: {
                                                opacity: 0,
                                                scale: 0
                                            },
                                            whileInView: {
                                                opacity: 1,
                                                scale: 1
                                            },
                                            transition: {
                                                duration: 0.3,
                                                delay: index * 0.1 + skillIndex * 0.05
                                            },
                                            viewport: {
                                                once: true
                                            },
                                            whileHover: {
                                                scale: 1.05
                                            },
                                            children: skill
                                        }, skill))
                                })
                            ]
                        }, category.title);
                    })
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3285:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ useTheme)
/* harmony export */ });
/* unused harmony export ThemeProvider */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const initialState = {
    theme: "system",
    setTheme: ()=>null
};
const ThemeProviderContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(initialState);
function ThemeProvider({ children, defaultTheme = "system", storageKey = "vite-ui-theme", ...props }) {
    const [theme, setTheme] = useState(()=>localStorage.getItem(storageKey) || defaultTheme);
    useEffect(()=>{
        const root = window.document.documentElement;
        root.classList.remove("light", "dark");
        if (theme === "system") {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            root.classList.add(systemTheme);
            return;
        }
        root.classList.add(theme);
    }, [
        theme
    ]);
    const value = {
        theme,
        setTheme: (theme)=>{
            localStorage.setItem(storageKey, theme);
            setTheme(theme);
        }
    };
    return /*#__PURE__*/ _jsx(ThemeProviderContext.Provider, {
        ...props,
        value: value,
        children: children
    });
}
const useTheme = ()=>{
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ThemeProviderContext);
    if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider");
    return context;
};


/***/ }),

/***/ 726:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ Button)
/* harmony export */ });
/* unused harmony export buttonVariants */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4338);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6926);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8728);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_2__, class_variance_authority__WEBPACK_IMPORTED_MODULE_3__, _lib_utils__WEBPACK_IMPORTED_MODULE_4__]);
([_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_2__, class_variance_authority__WEBPACK_IMPORTED_MODULE_3__, _lib_utils__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const buttonVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_3__.cva)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_2__.Slot : "button";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Comp, {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    });
});
Button.displayName = "Button";


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4352:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8728);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_utils__WEBPACK_IMPORTED_MODULE_2__]);
_lib_utils__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Input = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
        type: type,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ref: ref,
        ...props
    });
});
Input.displayName = "Input";


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6642:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ Label)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6926);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8728);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_2__, class_variance_authority__WEBPACK_IMPORTED_MODULE_3__, _lib_utils__WEBPACK_IMPORTED_MODULE_4__]);
([_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_2__, class_variance_authority__WEBPACK_IMPORTED_MODULE_3__, _lib_utils__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const labelVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_3__.cva)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_2__.Root, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(labelVariants(), className),
        ...props
    }));
Label.displayName = _radix_ui_react_label__WEBPACK_IMPORTED_MODULE_2__.Root.displayName;


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7053:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aM: () => (/* binding */ SheetTrigger),
/* harmony export */   ue: () => (/* binding */ SheetContent),
/* harmony export */   yo: () => (/* binding */ Sheet)
/* harmony export */ });
/* unused harmony exports SheetPortal, SheetOverlay, SheetClose, SheetHeader, SheetFooter, SheetTitle, SheetDescription */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7715);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6926);
/* harmony import */ var modularize_import_loader_name_X_from_default_as_default_join_esm_icons_x_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1352);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8728);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__, class_variance_authority__WEBPACK_IMPORTED_MODULE_3__, _lib_utils__WEBPACK_IMPORTED_MODULE_4__]);
([_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__, class_variance_authority__WEBPACK_IMPORTED_MODULE_3__, _lib_utils__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* __next_internal_client_entry_do_not_use__ Sheet,SheetPortal,SheetOverlay,SheetTrigger,SheetClose,SheetContent,SheetHeader,SheetFooter,SheetTitle,SheetDescription auto */ 





const Sheet = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.Root;
const SheetTrigger = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.Trigger;
const SheetClose = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.Close;
const SheetPortal = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.Portal;
const SheetOverlay = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.Overlay, {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props,
        ref: ref
    }));
SheetOverlay.displayName = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.Overlay.displayName;
const sheetVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_3__.cva)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500", {
    variants: {
        side: {
            top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
            bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
            left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
            right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
        }
    },
    defaultVariants: {
        side: "right"
    }
});
const SheetContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ side = "right", className, children, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SheetPortal, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SheetOverlay, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.Content, {
                ref: ref,
                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(sheetVariants({
                    side
                }), className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.Close, {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_X_from_default_as_default_join_esm_icons_x_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                className: "h-4 w-4"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "sr-only",
                                children: "Close"
                            })
                        ]
                    })
                ]
            })
        ]
    }));
SheetContent.displayName = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.Content.displayName;
const SheetHeader = ({ className, ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("flex flex-col space-y-2 text-center sm:text-left", className),
        ...props
    });
SheetHeader.displayName = "SheetHeader";
const SheetFooter = ({ className, ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    });
SheetFooter.displayName = "SheetFooter";
const SheetTitle = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.Title, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("text-lg font-semibold text-foreground", className),
        ...props
    }));
SheetTitle.displayName = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.Title.displayName;
const SheetDescription = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.Description, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("text-sm text-muted-foreground", className),
        ...props
    }));
SheetDescription.displayName = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.Description.displayName;


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7540:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ Textarea)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8728);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_utils__WEBPACK_IMPORTED_MODULE_2__]);
_lib_utils__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Textarea = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ref: ref,
        ...props
    });
});
Textarea.displayName = "Textarea";


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8728:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cn: () => (/* binding */ cn)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6593);
/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8097);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([clsx__WEBPACK_IMPORTED_MODULE_0__, tailwind_merge__WEBPACK_IMPORTED_MODULE_1__]);
([clsx__WEBPACK_IMPORTED_MODULE_0__, tailwind_merge__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


function cn(...inputs) {
    return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_1__.twMerge)((0,clsx__WEBPACK_IMPORTED_MODULE_0__.clsx)(inputs));
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
// pages/_app.tsx

 // ✅ adjust path if needed
function App({ Component, pageProps }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        ...pageProps
    });
}


/***/ }),

/***/ 2603:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7098);
/* harmony import */ var _components_hero_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2101);
/* harmony import */ var _components_about_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4980);
/* harmony import */ var _components_skills_section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4909);
/* harmony import */ var _components_experience_section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(221);
/* harmony import */ var _components_education_section__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2762);
/* harmony import */ var _components_contact_section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1857);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5926);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_navigation__WEBPACK_IMPORTED_MODULE_1__, _components_hero_section__WEBPACK_IMPORTED_MODULE_2__, _components_about_section__WEBPACK_IMPORTED_MODULE_3__, _components_skills_section__WEBPACK_IMPORTED_MODULE_4__, _components_experience_section__WEBPACK_IMPORTED_MODULE_5__, _components_education_section__WEBPACK_IMPORTED_MODULE_6__, _components_contact_section__WEBPACK_IMPORTED_MODULE_7__, _components_footer__WEBPACK_IMPORTED_MODULE_8__]);
([_components_navigation__WEBPACK_IMPORTED_MODULE_1__, _components_hero_section__WEBPACK_IMPORTED_MODULE_2__, _components_about_section__WEBPACK_IMPORTED_MODULE_3__, _components_skills_section__WEBPACK_IMPORTED_MODULE_4__, _components_experience_section__WEBPACK_IMPORTED_MODULE_5__, _components_education_section__WEBPACK_IMPORTED_MODULE_6__, _components_contact_section__WEBPACK_IMPORTED_MODULE_7__, _components_footer__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function Home() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "min-h-screen",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_navigation__WEBPACK_IMPORTED_MODULE_1__/* .Navigation */ .W, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_hero_section__WEBPACK_IMPORTED_MODULE_2__/* .HeroSection */ .D, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_about_section__WEBPACK_IMPORTED_MODULE_3__/* .AboutSection */ .e, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_skills_section__WEBPACK_IMPORTED_MODULE_4__/* .SkillsSection */ .U, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_experience_section__WEBPACK_IMPORTED_MODULE_5__/* .ExperienceSection */ .F, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_education_section__WEBPACK_IMPORTED_MODULE_6__/* .EducationSection */ .V, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_contact_section__WEBPACK_IMPORTED_MODULE_7__/* .ContactSection */ .U, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer__WEBPACK_IMPORTED_MODULE_8__/* .Footer */ .$, {})
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 3076:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 7715:
/***/ ((module) => {

"use strict";
module.exports = import("@radix-ui/react-dialog");;

/***/ }),

/***/ 49:
/***/ ((module) => {

"use strict";
module.exports = import("@radix-ui/react-label");;

/***/ }),

/***/ 4338:
/***/ ((module) => {

"use strict";
module.exports = import("@radix-ui/react-slot");;

/***/ }),

/***/ 6926:
/***/ ((module) => {

"use strict";
module.exports = import("class-variance-authority");;

/***/ }),

/***/ 6593:
/***/ ((module) => {

"use strict";
module.exports = import("clsx");;

/***/ }),

/***/ 6197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ }),

/***/ 8097:
/***/ ((module) => {

"use strict";
module.exports = import("tailwind-merge");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [940,815,810], () => (__webpack_exec__(1420)));
module.exports = __webpack_exports__;

})();