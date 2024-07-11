document.addEventListener('DOMContentLoaded', function () {
    const projects = [
        {
            imageUrl: './img/titulo1.jpeg',
            author: 'C.T.P de Aserri',
            date: 'dic. 13, 2023',
            tags: ['Edicacion', 'Bachillerato', 'Logro',],
            title: 'Bachiller Educacion Media',
            subtitle: 'Diego Sandi Hernandez',
            description: 'Título de Bachiller en Educación Media otorgado a Diego Enrique Sandi Hernández por el Colegio Técnico Profesional de Aserrí el 13 de diciembre de 2023. Firmado por Alberto Quirós Abarca y Danis Jiménez Padilla.'
        },
        {
            imageUrl: './img/titulo2.jpeg',
            author: 'C.T.P de Aserri',
            date: 'dic. 13, 2023',
            tags: ['Programacion', 'Diseño web', 'Soporte Ti', 'Emprendimiento', 'Ingles web'],
            title: 'Tecnico Medio En Desarrollo Web',
            subtitle: 'Diego Sandi Hernandez',
            description: 'Título de Técnico en Desarrollo Web otorgado a Diego Enrique Sandi Hernández por el Colegio Técnico Profesional de Aserrí, el 13 de diciembre de 2023. Firmado por el director Alberto Quirós Abarca y el director regional Danis Jiménez Padilla.'
        },
        // Agrega más proyectos aquí...
        {
            imageUrl: './img/titulo3.jpeg',
            author: 'Fundación Parque Metropolitano La Libertad',
            date: 'Jun. 23, 2023',
            tags: ['Photoshop', 'Diseño', 'Edicion'],
            title: 'PHOTOSHOP I',
            subtitle: 'Diego Sandi Hernandez',
            description: 'Certificado de aprovechamiento en Photoshop I otorgado a Diego Enrique Sandi Hernández por la Fundación Parque Metropolitano La Libertad, del 21 de abril al 23 de junio de 2023. Duración: 36 horas. Nota: 100.'
        },
        {
            imageUrl: './img/titulo4.jpeg',
            author: 'Fundación Parque Metropolitano La Libertad',
            date: 'ago. 31, 2023',
            tags: ['Ilustrador', 'Diseño', 'Edicion', 'Vectores',],
            title: 'ILUSTRADOR I',
            subtitle: 'Diego Sandi Hernandez',
            description: 'Certificado de aprovechamiento en Ilustrador I Diego Enrique Sandí Hernández completó el curso de Ilustrador I, con una duración de 36 horas, logrando una nota de 99. Realizado del 20 de julio al 13 de agosto de 2023.'
        },
        {
            imageUrl: './img/titulo5.jpeg',
            author: 'C.T.P de Aserri',
            date: 'dic. 13, 2023',
            tags: ['Empresarial', 'Jornadas', 'Capasitacion'],
            title: 'Coordinación con la Empresa Sección Diurna',
            subtitle: 'Diego Sandi Hernandez',
            description: 'Diego Enrique Sandí Hernández participó en el Taller de Gestión Laboral, con una duración de 6 horas, llevado a cabo el 13 de diciembre de 2023.'
        },
        {
            imageUrl: './img/titulo6.jpeg',
            author: 'fidelitas-Universidad',
            date: 'jun. 27, 2023',
            tags: ['Gestion', 'Trabajo', 'Capasitacion'],
            title: 'TALLER DE GESTIÓN LABORAL',
            subtitle: 'Diego Sandi Hernandez',
            description: 'Diego Enrique Sandí Hernández culminó la práctica profesional supervisada en Desarrollo Web, con una duración de 320 horas, en diciembre de 2023.'
        },
        {
            imageUrl: './img/certificado1.jpg',
            author: 'CISCO',
            date: 'Dec. 07, 2022',
            tags: ['Seguridad', 'Redes', 'Contencion de Riesgos'],
            title: 'Cybersecurity Essentials',
            subtitle: 'Diego Sandi Hernandez',
            description: 'Certificado de finalización del curso "Cybersecurity Essentials" de Cisco Networking Academy. Acredita conocimientos en tácticas cibercriminales, principios de seguridad de la información, tecnologías y leyes relacionadas con la ciberseguridad.'
        },
        {
            imageUrl: './img/certificado2.jpg',
            author: 'CISCO',
            date: 'Oct. 22, 2021',
            tags: ['Red-Colectiva ', 'Dispositivos-Conectados', 'Comunicación'],
            title: 'Introducción a loT',
            subtitle: 'Diego Sandi Hernandez',
            description: 'Certificado de finalización del curso "Introducción a IoT" de Cisco Networking Academy. Demuestra habilidades en transformación digital, automatización, inteligencia artificial, seguridad y redes basadas en la intención.'
        },
        {
            imageUrl: './img/certificado3.jpg',
            author: 'CISCO',
            date: 'Aug. 31, 2022',
            tags: ['Linux', 'Sistemas', 'Back-end'],
            title: 'INDG LINUX UNHATCHED',
            subtitle: 'Diego Sandi Hernandez',
            description: 'Certificado de finalización del curso "NDG Linux Unhatched" en Cisco Networking Academy. Proporciona una introducción a la línea de comandos de Linux y conocimientos esenciales para el crecimiento profesional en IT.'
        },
        {
            imageUrl: './img/certificado4.jpg',
            author: 'CISCO',
            date: 'Jun. 18, 2024',
            tags: ['Certificados', 'Descripcion', 'Informacion'],
            title: 'Completed Courses',
            subtitle: 'Diego Sandi Hernandez',
            description: 'Certificado de Cisco Networking Academy otorgado a Diego Sandi Hernández por completar el curso "Introducción a IoT" en el CTP Aserrí, impartido por Emila Vega Díaz. Completado el 22 de octubre de 2021.'
        },
        {
            imageUrl: './img/certificado5.jpg',
            author: 'CISCO',
            date: 'Jun. 18, 2024',
            tags: ['Certificados', 'Descripcion', 'Informacion'],
            title: 'Completed Courses',
            subtitle: 'Diego Sandi Hernandez',
            description: 'Certificados de Cisco Networking Academy otorgados a Diego Sandi Hernández por completar "NDG Linux Unhatched" el 31 de agosto de 2022 y "Cybersecurity Essentials" el 7 de diciembre de 2022 en CTP Aserrí, con Anthony Vargas Cordero.'
        },
        {
            imageUrl: './img/certificado6.jpg',
            author: 'CISCO',
            date: 'Jun. 18, 2024',
            tags: ['Certificados', 'Descripcion', 'Informacion'],
            title: 'Completed Courses',
            subtitle: 'Diego Sandi Hernandez',
            description: 'IT Essentials, CCNAv7, Programming Essentials in Python, Introduction to Networks, Entrepreneurship. Inscritos por Emila Vega Díaz, Anthony Vargas Cordero y Odette Salas López en CTP Aserrí. Cursos impartidos por ellos para mejorar el aprendizaje y entendimiento en el desarrollo web y la tecnología.'
        }

    ];

    const projectsPerPage = 2;
    let currentPage = 1;

    function renderProjects(page) {
        const start = (page - 1) * projectsPerPage;
        const end = start + projectsPerPage;
        const projectsToRender = projects.slice(start, end);

        const projectsContainer = document.getElementById('projects-container');
        projectsContainer.innerHTML = '';

        projectsToRender.forEach(project => {
            const projectElement = `
                <div class="blog-card">
                    <div class="meta">
                        <div class="photo" style="background-image: url(${project.imageUrl})"></div>
                        <ul class="details">
                            <li class="author"><a href="#">${project.author}</a></li>
                            <li class="date">${project.date}</li>
                            <li class="tags">
                                <ul>
                                    ${project.tags.map(tag => `<li><a href="#">${tag}</a></li>`).join('')}
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="description">
                        <h1>${project.title}</h1>
                        <h2>${project.subtitle}</h2>
                        <p>${project.description}</p>
                        <p class="read-more"></p>
                    </div>
                </div>`;
            projectsContainer.innerHTML += projectElement;
        });
    }

    function renderPagination() {
        const totalPages = Math.ceil(projects.length / projectsPerPage);
        const paginationContainer = document.getElementById('pagination');
        paginationContainer.innerHTML = '';

        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement('button');
            pageButton.textContent = i;
            pageButton.className = i === currentPage ? 'active' : '';
            pageButton.addEventListener('click', () => {
                currentPage = i;
                renderProjects(currentPage);
                renderPagination();
            });
            paginationContainer.appendChild(pageButton);
        }
    }

    renderProjects(currentPage);
    renderPagination();
});

document.getElementById('redirectButton').addEventListener('click', function () {
    window.location.href = 'ventana_principal.html';
});
