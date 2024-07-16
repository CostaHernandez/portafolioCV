document.addEventListener('DOMContentLoaded', function () {
    const projects = [
        {
            imageUrl: './img/p1.png',
            link: 'https://costahernandez.github.io/proyecto_inglesweb/'
        },
        {
            imageUrl: './img/p4.png',
            link: 'https://costahernandez.github.io/Proyecto-de-soporte/'
        },
        {
            imageUrl: './img/p3.png',
            link: 'https://costahernandez.github.io/Portafolio/'
        },
        {
            imageUrl: './img/p2.png',
            link: 'https://costahernandez.github.io/Diegnostico/'
        },
        {
            imageUrl: './img/p5.png',
            link: 'https://costahernandez.github.io/Hamburgesa/'
        },
        {
            imageUrl: './img/p6.png',
            link: 'https://costahernandez.github.io/Burguerweb0.1/'
        },
        // Agregar más proyectos para completar otras páginas
        {
            imageUrl: './img/p7.png',
            link: 'https://costahernandez.github.io/Windows/'
        },
        {
            imageUrl: './img/p8.png',
            link: 'https://costahernandez.github.io/Musica/'
        },
        {
            imageUrl: './img/p9.png',
            link: 'https://costahernandez.github.io/publicaciones/'
        },
        {
            imageUrl: './img/p10.png',
            link: 'https://costahernandez.github.io/red-social/'
        },
        {
            imageUrl: './img/p11.png',
            link: 'https://costahernandez.github.io/Compras/'
        },
        {
            imageUrl: './img/p12.png',
            link: 'https://costahernandez.github.io/los_80/'
        },
        {
            imageUrl: './img/p13.png',
            link: 'https://costahernandez.github.io/artistas-login/'
        },
        {
            imageUrl: './img/p14.png',
            link: 'https://costahernandez.github.io/Juego/'
        },
        {
            imageUrl: './img/p15.png',
            link: 'https://costahernandez.github.io/Valorant/index.html'
        },
        {
            imageUrl: './img/p16.png',
            link: 'https://costahernandez.github.io/twitch.tv/'
        },
        {
            imageUrl: './img/p17.png',
            link: 'https://costahernandez.github.io/Netflix.educativo/'
        },
        {
            imageUrl: './img/p18.png',
            link: 'https://costahernandez.github.io/YouTube.Educacion/'
        },

    ];

    const projectsPerPage = 6;
    let currentPage = 1;

    function renderProjects(page) {
        const start = (page - 1) * projectsPerPage;
        const end = start + projectsPerPage;
        const projectsToRender = projects.slice(start, end);

        const projectsContainer = document.getElementById('projects-container');
        projectsContainer.innerHTML = '';

        projectsToRender.forEach(project => {
            const projectElement = `
                <div class="flip">
                  <div class="front" style="background-image: url(${project.imageUrl})">
                  </div>
                  <div class="back">
                    <h2>WEBSITE</h2>
                    <p>¡Bienvenidos! Los invito a explorar mi sitio web, donde podrán descubrir mi trabajo en detalle. Espero que encuentren inspiración y valor en lo que tengo para compartir.</p>
                    <button class="ibtn" onclick="location.href='${project.link}'"><i class='bx bx-link-external'></i></button>
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
