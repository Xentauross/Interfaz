const artworks = [
    {
        id: 1,
        title: "Ecos del Silencio",
        artist: "Elena Voronova",
        year: 2023,
        price: "€3,400",
        description: "Una exploración abstracta de la soledad moderna a través de texturas monocromáticas y formas fluidas que evocan el movimiento del agua en la oscuridad.",
        image: "https://images.unsplash.com/photo-1549887534-1541e9326642?q=80&w=2670&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Geometría Urbana",
        artist: "Marcus Chen",
        year: 2024,
        price: "€2,850",
        description: "La rigidez de la arquitectura brutalista contrastada con la luz orgánica del atardecer. Óleo sobre lienzo con técnica de espátula.",
        image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=2572&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Susurros Cromáticos",
        artist: "Sarah Jemima",
        year: 2022,
        price: "€4,200",
        description: "Una explosión vibrante de color que desafía la percepción espacial. Esta obra invita al espectador a encontrar su propio significado en el caos organizado.",
        image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=2576&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Desvanecimiento",
        artist: "Alexandre Dubois",
        year: 2023,
        price: "€1,900",
        description: "Retrato conceptual que explora la memoria y el olvido. Las facciones borrosas sugieren la naturaleza efímera de la identidad.",
        image: "https://images.unsplash.com/photo-1515405295579-ba7b45403062?q=80&w=2680&auto=format&fit=crop"
    },
    {
        id: 5,
        title: "Naturaleza Sintética",
        artist: "Maria Solano",
        year: 2024,
        price: "€5,100",
        description: "Una crítica a la artificialidad de nuestro entorno. Elementos botánicos creados con materiales industriales reciclados y pintura acrílica.",
        image: "https://images.unsplash.com/photo-1491245338813-c6832976196e?q=80&w=2574&auto=format&fit=crop"
    },
    {
        id: 6,
        title: "Horizonte Fragmentado",
        artist: "David K.",
        year: 2022,
        price: "€3,750",
        description: "Paisaje deconstruido donde el cielo y la tierra se mezclan en una danza de formas geométricas y colores tierra.",
        image: "https://images.unsplash.com/photo-1578301978693-85ea400056e4?q=80&w=2535&auto=format&fit=crop"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const galleryGrid = document.getElementById('gallery-grid');
    const detailContainer = document.getElementById('artwork-detail');

    // Render Gallery
    if (galleryGrid) {
        artworks.forEach((art, index) => {
            const card = document.createElement('article');
            card.className = 'art-card';
            card.style.animationDelay = `${index * 0.1}s`;

            card.innerHTML = `
                <div class="card-image-wrapper">
                    <img src="${art.image}" alt="${art.title}" class="card-image">
                    <div class="card-overlay">
                        <a href="detail.html?id=${art.id}" class="btn-view">Ver Obra</a>
                    </div>
                </div>
                <div class="card-info">
                    <h3 class="card-title">${art.title}</h3>
                    <p class="card-artist">${art.artist}</p>
                </div>
            `;
            galleryGrid.appendChild(card);
        });
    }

    // Render Detail
    if (detailContainer) {
        const urlParams = new URLSearchParams(window.location.search);
        const artId = parseInt(urlParams.get('id'));
        const art = artworks.find(a => a.id === artId);

        if (art) {
            document.title = `${art.title} | Lumière Gallery`;
            detailContainer.innerHTML = `
                <div class="detail-grid">
                    <div class="detail-image-col">
                        <img src="${art.image}" alt="${art.title}" class="detail-image">
                    </div>
                    <div class="detail-info-col">
                        <span class="detail-year">${art.year}</span>
                        <h1 class="detail-title">${art.title}</h1>
                        <h2 class="detail-artist">por ${art.artist}</h2>
                        
                        <div class="detail-description">
                            <p>${art.description}</p>
                        </div>
                        
                        <div class="detail-price-box">
                            <span class="detail-price">${art.price}</span>
                            <button class="btn-primary" onclick="alert('Gracias por su interés. Nos pondremos en contacto brevemente.')">Adquirir Obra</button>
                        </div>
                        
                        <a href="gallery.html" class="back-link">← Volver a la Galería</a>
                    </div>
                </div>
            `;
        } else {
            detailContainer.innerHTML = `
                <div class="error-container">
                    <h2>Obra no encontrada</h2>
                    <a href="gallery.html" class="btn-primary">Volver a la Galería</a>
                </div>
            `;
        }
    }

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});
