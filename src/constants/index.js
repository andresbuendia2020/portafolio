import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    reactjs,
    threejs,
    github,
    video,
    c,
    aframe,
    colab,
    maya,
    python,
    unity,
    vagrant,
    vuforia,
    githubblack,
    boga,
    wiedii,
    trust4p,
    tul,
    banistmo
} from "../assets";

import joelPaez from "../assets/joelPaez.jpeg";
import joseRestrepo from "../assets/joseRestrepo.jpeg";
import melerCarranza from "../assets/melerCarranza.jpeg";
import solAngie from "../assets/solAngie.jpeg";
import efraMancilla from "../assets/efraMancilla.jpeg";

export const navLinks = [
    {
        id: "#about",
        title: "Sobre Mi",
    },
    {
        id: "#work",
        title: "Proyectos",
    },
    {
        id: "#contact",
        title: "Contacto",
    },
];

export const linkTreeNavLinks = [
    {
        id: "/",
        title: "Portfolio",
    },
    {
        id: "",
        title: "Connect",
    },
    {
        id: "#contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Front End Senior Developer",
        icon: web,
    },
    {
        title: "Analista de desarrollo",
        icon: mobile,
    },
    {
        title: "Desarrollador en Angular y React",
        icon: backend,
    },
    {
        title: "Desarrollador en Python y TypeScript",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "C",
        icon: c,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Unity",
        icon: unity,
    },
    {
        name: "Vagrant",
        icon: vagrant,
    },
    {
        name: "Vuforia",
        icon: vuforia,
    },
    {
        name: "A-frame",
        icon: aframe,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "GitHub",
        icon: githubblack,
    },
    {
        name: "Colab",
        icon: colab,
    },
    {
        name: "Maya",
        icon: maya,
    },
];

const experiences = [
    {
        title: "Fire Detection| A.I",
        company_name: "Docker, Vagrant, Kaggle, Edge Impulse, ML Flow, API Rest, JS, Python, React, CSS, HTML, MUI",
        icon: github,
        iconBg: "radial-gradient(circle at center, #383076, #4a37de)",
        iconLink: "https://github.com/andresbuendia2020/EntrenamientoIA",
        date: "January 2024 - June 2024",
        points: [
            "Effortlessly monitor and predict wildfire activity using satellite imagery. Analyze satellite images to identify fire-prone areas, enabling the development of predictive models for early detection and control of wildfires. Each image is labeled with binary annotations indicating the presence or absence of fires (1 or 0). This dataset facilitates research in wildfire prediction by training and evaluating various algorithms on labeled satellite imagery.",
        ],
    },
    {
        title: "AcademIA | Scrum Master",
        company_name:
            "Scrum, Jira, Miro, Taiga, Slack, Notion, KPIs, User Stories, Metrics, Daily Scrum, Sprints, soft skills",
        icon: github,
        iconBg: "radial-gradient(circle at center, #383076, #4a37de)",
        iconLink: "https://github.com/andresbuendia2020",
        date: "February 2023 - June 2023",
        points: [
            "LMS-type open-source collaborative project where the user (teacher, student) can access their academic courses, upload and review multimedia content.",
            "It also has Hangouts-style chat, with a plus of AItype virtual assistant integrated inside the system.",
        ],
    },
    {
        title: "Lecturando | A.I. & Game Dev",
        company_name: "Unity, GitHub, GitLab, Miro, Scrum, Doc & Testing, Tesseract OCR, ONNX, Barracuda, Firebase, C#",
        icon: github,
        iconBg: "radial-gradient(circle at center, #383076, #4a37de)",
        iconLink: "https://github.com/andresbuendia2020",
        date: "February 2022 - December 2022",
        points: [
            "Unity game focused on solving the letter inversion problem (p,q,b,d) detected in kids from schools from Cali, Colombia.",
            "Using image recognition and database in this gamification-based videogame, we offered solutions for teachers to help solving this problem.",
        ],
    },
    {
        title: "GoPance | Front-end Dev",
        company_name: "React, HTML, CSS, JavaScript, Bootstrap, Canva, Netlify, Firebase, Node.js, Postman.",
        icon: github,
        iconBg: "radial-gradient(circle at center, #383076, #4a37de)",
        iconLink: "https://github.com/andresbuendia2020",
        date: "August 2022 - December 2022",
        points: [
            "Web application similar to Rappi or Uber Eats, focused on Pance town in Cali, Colombia.",
            "The purpose is to connect the different business and services located here with people around the city to impulse its economy and development.",
        ],
    },
    {
        title: "Minecraft Speech to Text",
        company_name: "Python, CNN, Colab, Jupyter Notebook, ursina, h5py, keras, Speech recognizer, TensorFlow.",
        icon: github,
        iconBg: "radial-gradient(circle at center, #383076, #4a37de)",
        iconLink: "https://github.com/andresbuendia2020",
        date: "August 2022 - December 2022",
        points: [
            "Python-based Minecraft with words recognizer (Convolutional Neural Network), with our own dataset and training.",
            "By saying one of the five words, it changes the block to use within the game.",
            "Great project to learn about speech recognition and A.I. from training to implementation.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "Un desarrollador con habilidades sobresalientes en Angular y React puede beneficiarse significativamente al explorar tecnologías de vanguardia para optimizar aplicaciones , mfe, etc.....",
        name: "Joel Paez",
        designation: "Director de TI y Operaciones | AI Generativa, Blockchain, Open Banking, ECommerce, B2b, MBA, Magister Fintech y Transformación Digital",
        company: "Tul.sas",
        image: joelPaez,
        linkedin: "https://www.linkedin.com/in/joel-alberto-paez-rodriguez/",
    },
    {
        testimonial:
            "Andres siempre demostró compromiso y profesionalismo en el desarrollo de actividades que le fueron asignadas. Es muy receptivo con el feedback que se le da y le gusta estar en constante aprendizaje.",
        name: "Meler Carranza",
        designation: "Sr Frontend Developer | Angular",
        company: "Tul.sas",
        image: melerCarranza,
        linkedin: "https://www.linkedin.com/in/melercarranza/",
    },
    {
        testimonial:
            "Andrés es un profesional comprometido y siempre dispuesto a aprender. Su capacidad para colaborar y aceptar feedback es ejemplar. Es un valioso miembro del equipo.",
        name: "Jose Restrepo",
        designation: "Frontend Developer | Angular Developer | React | JavaScript",
        company: "Simetrik",
        image: joseRestrepo,
        linkedin: "https://www.linkedin.com/in/jose-restrepo-9489a117a/",
    },
    {
        testimonial:
            "Profesional proactivo y responsable, con gran habilidad para trabajar en equipo y aprender de forma autónoma. Sus técnicas en desarrollo frontend mejoraron la calidad de nuestros proyectos, siendo su experiencia y compromiso un aporte valioso.",
        name: "Solangie Paola Garavito",
        designation: "Ingeniera de Sistemas | Especialista en Desarrollo de Software, Marketing Digital y Analítica Web.",
        company: "Directora de Innovación y Transformación Digital Trust4p",
        image: solAngie,
        linkedin: "https://www.linkedin.com/in/solangie-paola-garavito-mendivelso-86177376/",
    },
    {
        testimonial:
            "Siempre dispuesto a aprender, demuestra mejoras continuas en sus procesos de desarrollo y aprendizaje, buen trabajo en equipo",
        name: "Efraín José Mancilla",
        designation: "Senior Development Engineer ",
        company: "Bold",
        image: efraMancilla,
        linkedin: "https://www.linkedin.com/in/solangie-paola-garavito-mendivelso-86177376/",
    },
];

const projects = [
    {
        upper_title: "",
        date: "Septiembre 2024 - Presente",
        name: "Seti - Banistmo",
        description:
            "Banistmo, donde estoy trabajando con tecnologías como AWS Lambda y JavaScript. Mi enfoque principal es el desarrollo de soluciones en la nube, creando y gestionando funciones serverless, optimizando arquitecturas basadas en la nube y desarrollando aplicaciones que priorizan el alto rendimiento y la escalabilidad.",
        tags: [
            {
                name: "Aws",
                color: "blue-text-gradient",
            },
            {
                name: "Lambda",
                color: "pink-text-gradient",
            },
            {
                name: "javascript",
                color: "text-yellow-500",
            },
            {
                name: "Azure",
                color: "text-gray-300",
            },
            {
                name: "Ngrx",
                color: "text-green-300",
            },
            {
                name: "Angular",
                color: "orange-text-gradient",
            },
            {
                name: "node.js",
                color: "text-green-500",
            },
            {
                name: "serverless",
                color: "text-yellow-500",
            },
            {
                name: "Unit tests",
                color: "orange-text-gradient",
            },
        ],
        image: banistmo,
        source_code_link: "https://videface.app",
    },
    {
        upper_title: "",
        date: "Mayo 2024 - Junio 2024",
        name: "Trust4p",
        description:
            "Trust4P, donde se especializó en la creación de aplicaciones de empleo utilizando Angular 17. Durante su periodo en la empresa, contribuyó activamente al diseño, desarrollo y mantenimiento de plataformas web avanzadas para la gestión y búsqueda de empleo, aplicando metodologías ágiles y utilizando tecnologías como Angular, así como otras herramientas y bibliotecas relevantes para asegurar la eficiencia y la experiencia del usuario.",
        tags: [
            {
                name: "Scrum",
                color: "blue-text-gradient",
            },
            {
                name: "firebase",
                color: "pink-text-gradient",
            },
            {
                name: "javascript",
                color: "text-yellow-500",
            },
            {
                name: "Automatizacion",
                color: "text-gray-300",
            },
            {
                name: "Ngrx",
                color: "text-green-300",
            },
            {
                name: "Angular",
                color: "orange-text-gradient",
            },
            {
                name: "node.js",
                color: "text-green-500",
            },
        ],
        image: trust4p,
        source_code_link: "https://videface.app",
    },
    {
        upper_title: "",
        date: "Febrero 2022 - Febrero 2024",
        name: "Tul.Sas",
        description:
            "Tul.Sas como Desarrollador Frontend desde febrero de 2022 hasta febrero de 2024. Durante este periodo, además de diseñar protocolos de pruebas automatizadas, desarrolló funcionalidades tanto para aplicaciones internas como externas utilizando metodologías ágiles como Scrum. Implementó técnicas avanzadas de SEO para optimizar el rendimiento y posicionamiento de los productos desarrollados.",
        tags: [
            {
                name: "Pruebas e2e",
                color: "blue-text-gradient",
            },
            {
                name: "Rxjs",
                color: "green-text-gradient",
            },
            {
                name: "node.js",
                color: "pink-text-gradient",
            },
            {
                name: "Typescript",
                color: "text-yellow-500",
            },
            {
                name: "react",
                color: "text-orange-500",
            },
            {
                name: "material-ui",
                color: "text-gray-300",
            },
            {
                name: "Angular",
                color: "green-text-gradient",
            },
        ],
        image: tul,
        source_code_link: "https://videface.app/",
    },
    {
        upper_title: "",
        date: "Enero 2020 - Febrero 2022",
        name: "Wiedii.Us",
        description:
            "En WIEDII SAS, trabajé durante 2 años y 1 mes como Desarrollador de front-end y Analista de desarrollo (nov. 2019 - feb. 2022). Implementé técnicas de SEO, lideré la creación de aplicaciones Angular, y supervisé el despliegue y mantenimiento de aplicaciones y código interno. Además, desarrollé plataformas de ferias virtuales y aplicaciones internas usando Angular y WordPress.",
        tags: [
            {
                name: "HTML",
                color: "blue-text-gradient",
            },
            {
                name: "Wordpress",
                color: "green-text-gradient",
            },
            {
                name: "Git",
                color: "pink-text-gradient",
            },
            {
                name: "Angular",
                color: "blue-text-gradient",
            },
            {
                name: "Javascript",
                color: "text-yellow-400",
            },
            {
                name: "Scss-BEM",
                color: "pink-text-gradient",
            },
            {
                name: "Php",
                color: "text-gray-300",
            },
            {
                name: "Scrum",
                color: "green-text-gradient",
            },
        ],
        image: wiedii,
        source_code_link: "https://instagram.com/boga.peluqueria",
    },
];

export { services, technologies, experiences, testimonials, projects };
