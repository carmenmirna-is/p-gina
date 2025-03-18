document.addEventListener('DOMContentLoaded', function() {
    const eventosGrid = document.getElementById('eventos-grid');
    const eventoForm = document.getElementById('evento-form');

    // Ejemplo de eventos iniciales
    const eventos = [
        { nombre: "Concierto en Vivo", fecha: "2023-12-15", descripcion: "Disfruta de un concierto inolvidable con tus artistas favoritos." },
        { nombre: "Feria de Arte", fecha: "2023-11-20", descripcion: "Explora las obras de artistas locales e internacionales." }
    ];

    function cargarEventos() {
        eventosGrid.innerHTML = '';
        eventos.forEach(evento => {
            const eventoCard = document.createElement('div');
            eventoCard.classList.add('evento-card');
            eventoCard.innerHTML = `
                <h3>${evento.nombre}</h3>
                <p><strong>Fecha:</strong> ${evento.fecha}</p>
                <p>${evento.descripcion}</p>
            `;
            eventosGrid.appendChild(eventoCard);
        });
    }

    eventoForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const nombre = document.getElementById('evento-nombre').value;
        const fecha = document.getElementById('evento-fecha').value;
        const descripcion = document.getElementById('evento-descripcion').value;

        eventos.push({ nombre, fecha, descripcion });
        cargarEventos();

        eventoForm.reset();
    });

    cargarEventos();
});