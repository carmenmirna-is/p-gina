// Inicializar las animaciones AOS
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar biblioteca de animaciones AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });

    // Código de los contadores y otras funcionalidades...
    // Todo tu código existente...

    // Añadir clase activa a los enlaces de navegación según la sección visible
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            // Verificar si estamos en esta sección durante el scroll
            if (window.scrollY >= (sectionTop - sectionHeight/3)) {
                current = section.getAttribute('id');
            }
        });
        
        // Actualizar clase activa en enlaces de navegación
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
    
});

// Animación para cambiar el contenido de la sección de eventos
const contenedorEventos = document.querySelector('.eventos-destacados');
const contenidoPrimero = document.querySelector('.contenido-primero');
const contenidoSegundo = document.querySelector('.contenido-segundo');

setInterval(() => {
    if (contenidoPrimero.style.opacity === '1') {
        contenidoPrimero.style.opacity = '0';
        contenidoPrimero.style.transform = 'translateX(-100%)';
        contenidoSegundo.style.opacity = '1';
        contenidoSegundo.style.transform = 'translateX(0)';
    } else {
        contenidoPrimero.style.opacity = '1';
        contenidoPrimero.style.transform = 'translateX(0)';
        contenidoSegundo.style.opacity = '0';
        contenidoSegundo.style.transform = 'translateX(100%)';
    }
}, 5000); // Cambia cada 5 segundos// Cierre del addEventListener principal

// Añade esto a tu scripts.js
document.addEventListener('DOMContentLoaded', function() {
    // Lightbox para galería
    const galleryItems = document.querySelectorAll('.galeria-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src;
            const imgAlt = this.querySelector('img').alt;
            
            // Crear lightbox
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <img src="${imgSrc}" alt="${imgAlt}">
                    <span class="close-lightbox">&times;</span>
                </div>
            `;
            
            document.body.appendChild(lightbox);
            
            // Cerrar lightbox
            lightbox.querySelector('.close-lightbox').addEventListener('click', () => {
                lightbox.remove();
            });
            
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) {
                    lightbox.remove();
                }
            });
        });
    });
});