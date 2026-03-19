const products = [
    {
        id: 1,
        title: 'Carrancas do Rio São Francisco',
        category: 'madeira',
        categoryLabel: 'Madeira & Carrancas',
        desc: 'As tradicionais carrancas protetoras do Rio São Francisco, esculpidas à mão em madeira maciça.',
        img: 'img/carrancas.jpg'
    },
    {
        id: 2,
        title: 'Bonecos de Lampião e Maria Bonita',
        category: 'diversos',
        categoryLabel: 'Cultura Popular',
        desc: 'Bonequinhos típicos do cangaço nordestino, esculpidos em barro com vestimentas de Lampião e Maria Bonita.',
        img: 'img/bonecos.jpg'
    },
    {
        id: 3,
        title: 'Joias e Acessórios Artesanais',
        category: 'couro_fios',
        categoryLabel: 'Couro & Fios',
        desc: 'Colares, pulseiras e brincos confeccionados com sementes, fios e materiais típicos do Sertão.',
        img: 'img/joias.jpg'
    },
    {
        id: 4,
        title: 'Miniaturas Decorativas Regionais',
        category: 'diversos',
        categoryLabel: 'Cultura Popular',
        desc: 'Figuras em miniatura pintadas à mão que retratam o cotidiano e a fé do sertanejo nordestino.',
        img: 'img/miniaturas.jpg'
    },
    {
        id: 5,
        title: 'Interior da Loja — Acervo Completo',
        category: 'couro_fios',
        categoryLabel: 'Couro & Fios',
        desc: 'Prateleiras repletas de arte regional: couro, fios, barro e madeira reunidos no coração do Bodódromo.',
        img: 'img/interior.jpg'
    },
    {
        id: 6,
        title: 'Fachada do Trapiá Artesanato',
        category: 'diversos',
        categoryLabel: 'Cultura Popular',
        desc: 'Nosso ponto iluminado no Bodódromo de Petrolina — venha sentir a arte de perto!',
        img: 'img/hero.jpg'
    }
];

// Elementos do DOM
const productGrid = document.getElementById('productGrid');
const filterBtns = document.querySelectorAll('.filter-btn');

// Função para renderizar produtos
function renderProducts(filterCategory = 'all') {
    productGrid.innerHTML = '';
    
    const filteredProducts = filterCategory === 'all' 
        ? products 
        : products.filter(p => p.category === filterCategory);
        
    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.img}" alt="${product.title}" class="product-img">
            <div class="product-info">
                <span class="product-category">${product.categoryLabel}</span>
                <h3 class="product-title">${product.title}</h3>
                <p class="product-desc">${product.desc}</p>
                <div class="product-footer" style="border-top: none; justify-content: center; padding-top: 5px;">
                    <span class="product-price" style="font-size: 0.9rem; color: var(--primary-color);">Visite a loja para detalhes</span>
                </div>
            </div>
        `;
        productGrid.appendChild(card);
    });
}

// Event Listeners para os botões de filtro
filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Remove a classe active de todos
        filterBtns.forEach(b => b.classList.remove('active'));
        // Adiciona a classe active no clicado
        btn.classList.add('active');
        
        // Filtra
        const filter = btn.getAttribute('data-filter');
        renderProducts(filter);
    });
});

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});
