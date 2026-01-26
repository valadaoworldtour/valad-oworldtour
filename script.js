// --- CONFIGURAÇÃO GLOBAL ---
const countryFlags = { "Brasil": "br", "Portugal": "pt", "Marrocos": "ma", "Japão": "jp", "Austrália": "au" };
const defaultImage = "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop";

/* BANCO DE DADOS - COM SEUS LINKS DE AFILIADO */
const worldData = {
    "América do Sul": {
        "Brasil": [
            {
                name: "Rio de Janeiro",
                imagem: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=2070&auto=format&fit=crop",
                tags: ["Praia", "Calor"],
                mapa: "https://goo.gl/maps/ExemploRio",
                clima: "Tropical Atlântico. Verão quente e chuvoso.",
                pontos_turisticos: ["Cristo Redentor", "Pão de Açúcar", "Copacabana", "Lapa", "Jardim Botânico"],
                moeda: "Real (BRL)",
                curiosidades: "O Rio tem o céu considerado o mais azul do mundo por cientistas.",
                estacoes: "Verão: Dez-Mar | Inverno: Jun-Set",
                gastronomia: ["Feijoada", "Biscoito Globo", "Mate de Praia", "Podrão"],
                religiao: "Diversa",
                eventos: "Carnaval, Réveillon, Rock in Rio",
                antes_de_ir: "Evite ostentar joias na rua. Use Uber ou Metrô.",
                
                // SEUS LINKS DE DINHEIRO (JÁ COM O ID 304142)
                links: {
                    hotel: "https://www.booking.com/searchresults.pt-br.html?city=-666610&aid=304142", 
                    passeio: "https://www.civitatis.com/br/rio-de-janeiro/", 
                    seguro: "https://www.segurospromo.com.br" 
                }
            },
            {
                name: "São Paulo",
                imagem: "https://images.unsplash.com/photo-1543059080-f9b1272213d5?q=80&w=2069&auto=format&fit=crop",
                tags: ["Urbano", "Gastronomia"],
                mapa: "#",
                clima: "Subtropical úmido.",
                pontos_turisticos: ["Av. Paulista", "Parque Ibirapuera", "MASP", "Liberdade"],
                moeda: "Real (BRL)",
                curiosidades: "Cidade com mais pizzarias fora da Itália.",
                estacoes: "Terra da garoa, clima instável.",
                gastronomia: ["Pizza", "Sanduíche de Mortadela", "Coxinha"],
                religiao: "Católica/Diversa",
                eventos: "Virada Cultural, Fórmula 1",
                antes_de_ir: "O trânsito é intenso, prefira o Metrô.",
                links: {
                    hotel: "https://www.booking.com/searchresults.pt-br.html?city=-671824&aid=304142",
                    passeio: "https://www.civitatis.com/br/sao-paulo/"
                }
            },
            {
                name: "Salvador",
                imagem: "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?q=80&w=2071&auto=format&fit=crop",
                tags: ["História", "Praia"],
                mapa: "#",
                clima: "Tropical Quente.",
                pontos_turisticos: ["Pelourinho", "Elevador Lacerda", "Farol da Barra"],
                moeda: "Real (BRL)",
                curiosidades: "Primeira capital do Brasil.",
                estacoes: "Sol o ano quase todo.",
                gastronomia: ["Acarajé", "Moqueca", "Vatapá"],
                religiao: "Sincretismo",
                eventos: "Carnaval, Lavagem do Bonfim",
                antes_de_ir: "Sorria, você está na Bahia. Ritmo mais leve.",
                links: {
                    // Exemplo genérico se não tiver o ID da cidade, manda pra busca geral com seu ID
                    hotel: "https://www.booking.com/searchresults.pt-br.html?aid=304142" 
                }
            }
        ]
    },
    
    "Europa": {
        "Portugal": [
            {
                name: "Lisboa",
                imagem: "https://images.unsplash.com/photo-1548707304-4eb706130f35?q=80&w=2070&auto=format&fit=crop",
                tags: ["História", "Romântico"],
                mapa: "#",
                clima: "Mediterrâneo.",
                pontos_turisticos: ["Torre de Belém", "Jerónimos", "Praça do Comércio"],
                moeda: "Euro (€)",
                curiosidades: "Mais antiga que Roma.",
                estacoes: "Primavera é linda.",
                gastronomia: ["Pastel de Belém", "Bacalhau"],
                religiao: "Católica",
                eventos: "Santo Antônio",
                antes_de_ir: "Muitas ladeiras, use tênis.",
                links: {
                    hotel: "https://www.booking.com/city/pt/lisbon.pt-br.html?aid=304142",
                    passeio: "https://www.civitatis.com/br/lisboa/"
                }
            },
            {
                name: "Porto",
                imagem: "",
                tags: ["Vinho", "Rio"],
                mapa: "#",
                clima: "Oceânico.",
                pontos_turisticos: ["Ribeira", "Ponte Dom Luís I", "Livraria Lello"],
                moeda: "Euro (€)",
                curiosidades: "Deu nome ao vinho do Porto.",
                estacoes: "Inverno chuvoso.",
                gastronomia: ["Francesinha", "Tripas"],
                religiao: "Católica",
                eventos: "São João",
                antes_de_ir: "Faça o passeio de barco no Douro.",
                links: {
                    hotel: "https://www.booking.com/city/pt/porto.pt-br.html?aid=304142"
                }
            }
        ]
    },

    "África": {
        "Marrocos": [
            {
                name: "Marrakech",
                imagem: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=2070&auto=format&fit=crop",
                tags: ["Exótico", "Deserto"],
                mapa: "#",
                clima: "Semiárido.",
                pontos_turisticos: ["Jemaa el-Fna", "Jardim Majorelle", "Medina"],
                moeda: "Dirham (MAD)",
                curiosidades: "Cidade Vermelha.",
                estacoes: "Verão muito quente.",
                gastronomia: ["Tajine", "Cuscuz"],
                religiao: "Islâmica",
                eventos: "Festival de Cinema",
                antes_de_ir: "Negocie preços nos mercados."
            }
        ]
    },

    "Ásia": {
        "Japão": [
            {
                name: "Tóquio",
                imagem: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1994&auto=format&fit=crop",
                tags: ["Futuro", "Tecnologia"],
                mapa: "#",
                clima: "Temperado.",
                pontos_turisticos: ["Shibuya", "Senso-ji", "Akihabara"],
                moeda: "Iene (¥)",
                curiosidades: "Maior metrópole do mundo.",
                estacoes: "Cerejeiras na primavera.",
                gastronomia: ["Sushi", "Ramen"],
                religiao: "Xintoísmo/Budismo",
                eventos: "Sumidagawa Fireworks",
                antes_de_ir: "Silêncio nos trens."
            }
        ]
    },

    "Oceania": {
        "Austrália": [
            {
                name: "Sydney",
                imagem: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=2070&auto=format&fit=crop",
                tags: ["Praia", "Iconic"],
                mapa: "#",
                clima: "Oceânico.",
                pontos_turisticos: ["Opera House", "Harbour Bridge", "Bondi Beach"],
                moeda: "Dólar (AUD)",
                curiosidades: "Não é a capital.",
                estacoes: "Verão em Dezembro.",
                gastronomia: ["Barbecue", "Fish & Chips"],
                religiao: "Laica",
                eventos: "Ano Novo na Baía",
                antes_de_ir: "Use muito protetor solar."
            }
        ]
    }
};

/* LÓGICA DO SISTEMA */

function init() {
    renderSidebar();
}

function renderSidebar() {
    const menu = document.getElementById('sidebarMenu');
    menu.innerHTML = '';

    Object.keys(worldData).forEach(continente => {
        const group = document.createElement('div');
        group.className = 'continent-group';

        const btnContinente = document.createElement('button');
        btnContinente.className = 'continent-btn';
        btnContinente.innerHTML = `<span>${continente}</span> <i class="ri-arrow-down-s-line"></i>`;
        
        const countryList = document.createElement('div');
        countryList.className = 'country-list';

        const paises = worldData[continente];
        Object.keys(paises).forEach(pais => {
            const btnPais = document.createElement('button');
            btnPais.className = 'country-btn';
            
            const code = countryFlags[pais] || 'unknown';
            const flagHTML = code !== 'unknown' 
                ? `<img src="https://flagcdn.com/w40/${code}.png" class="flag-icon" alt="${pais}">` 
                : `<i class="ri-flag-line"></i>`;

            btnPais.innerHTML = `${flagHTML} <span>${pais}</span>`;
            
            btnPais.onclick = () => loadCities(pais, paises[pais]);
            countryList.appendChild(btnPais);
        });

        btnContinente.onclick = () => {
            document.querySelectorAll('.continent-group').forEach(el => { 
                if(el !== group) el.classList.remove('open'); 
            });
            group.classList.toggle('open');
            btnContinente.classList.toggle('active');
        };

        group.appendChild(btnContinente);
        group.appendChild(countryList);
        menu.appendChild(group);
    });
}

function loadCities(nomePais, listaCidades) {
    document.getElementById('pageTitle').innerText = nomePais;
    document.getElementById('pageSubtitle').innerHTML = `<i class="ri-map-pin-line"></i> ${listaCidades.length} Destinos encontrados`;

    const grid = document.getElementById('mainDisplay');
    grid.innerHTML = '';

    listaCidades.forEach(cidade => {
        const card = document.createElement('div');
        card.className = 'city-card';
        
        const bgImage = (cidade.imagem && cidade.imagem !== "") ? cidade.imagem : defaultImage;

        let tagsHTML = '';
        if(cidade.tags && cidade.tags.length > 0) {
            cidade.tags.forEach(tag => {
                const cores = ['azul', 'laranja', 'verde'];
                const cor = cores[Math.floor(Math.random() * cores.length)];
                tagsHTML += `<span class="badge ${cor}">${tag}</span>`;
            });
        }

        card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${bgImage}" class="card-img" alt="${cidade.name}">
                <div class="card-badges">${tagsHTML}</div>
            </div>
            <div class="card-content">
                <div>
                    <h3>${cidade.name}</h3>
                    <p>${cidade.curiosidades}</p>
                </div>
                <span class="view-btn">Explorar <i class="ri-arrow-right-line"></i></span>
            </div>
        `;

        card.onclick = () => openModal(cidade, bgImage);
        grid.appendChild(card);
    });
}

// 3. MODAL COM MONETIZAÇÃO
const modal = document.getElementById('cityModal');
const modalTitle = document.getElementById('modalTitle');
const modalSubtitle = document.getElementById('modalSubtitle');
const modalImg = document.getElementById('modalImg');
const modalBody = document.getElementById('modalBody');
const modalMapLink = document.getElementById('modalMapLink');
const modalBadges = document.getElementById('modalBadges');

function openModal(cidade, imagemUrl) {
    modalTitle.innerText = cidade.name;
    modalSubtitle.innerText = cidade.clima;
    modalImg.style.backgroundImage = `url('${imagemUrl}')`;
    modalMapLink.href = cidade.mapa;

    let tagsHTML = '';
    if(cidade.tags) {
        cidade.tags.forEach(tag => tagsHTML += `<span class="badge azul">${tag}</span>`);
    }
    modalBadges.innerHTML = tagsHTML;

    const createList = (arr) => {
        if(!arr) return '<li>Sem informações</li>';
        return Array.isArray(arr) ? arr.map(i => `<li>${i}</li>`).join('') : `<li>${arr}</li>`;
    };

    // --- LÓGICA DE MONETIZAÇÃO (LINKS DE AFILIADOS) ---
    // Verifica se existem links e cria os botões automaticamente
    let affiliateHTML = '';
    if (cidade.links) {
        affiliateHTML = `<div class="affiliate-section">`;
        
        if(cidade.links.hotel) {
            affiliateHTML += `
                <a href="${cidade.links.hotel}" target="_blank" class="affiliate-btn">
                    <i class="ri-hotel-bed-fill"></i>
                    <div class="affiliate-content">
                        <strong>Reservar Hotel</strong>
                        <span>Melhores Preços</span>
                    </div>
                </a>`;
        }
        
        if(cidade.links.passeio) {
            affiliateHTML += `
                <a href="${cidade.links.passeio}" target="_blank" class="affiliate-btn">
                    <i class="ri-ticket-2-fill"></i>
                    <div class="affiliate-content">
                        <strong>Comprar Passeios</strong>
                        <span>Evite Filas</span>
                    </div>
                </a>`;
        }

        if(cidade.links.seguro) {
            affiliateHTML += `
                <a href="${cidade.links.seguro}" target="_blank" class="affiliate-btn">
                    <i class="ri-shield-check-fill"></i>
                    <div class="affiliate-content">
                        <strong>Seguro Viagem</strong>
                        <span>Viaje Protegido</span>
                    </div>
                </a>`;
        }
        
        affiliateHTML += `</div>`;
    }

    // Injeta os botões de dinheiro ANTES das informações de texto
    modalBody.innerHTML = `
        ${affiliateHTML}

        <div class="info-box">
            <h4><i class="ri-camera-3-fill"></i> Pontos Turísticos</h4>
            <ul>${createList(cidade.pontos_turisticos)}</ul>
        </div>

        <div class="info-box">
            <h4><i class="ri-restaurant-2-fill"></i> Gastronomia</h4>
            <ul>${createList(cidade.gastronomia)}</ul>
        </div>

        <div class="info-box">
            <h4><i class="ri-lightbulb-flash-fill"></i> Curiosidades</h4>
            <p>${cidade.curiosidades}</p>
        </div>

        <div class="info-box">
            <h4><i class="ri-calendar-event-fill"></i> Eventos & Estações</h4>
            <p><strong>Estações:</strong> ${cidade.estacoes}</p>
            <p><strong>Eventos:</strong> ${cidade.eventos}</p>
        </div>

        <div class="info-box">
            <h4><i class="ri-coins-fill"></i> Informações Gerais</h4>
            <p><strong>Moeda:</strong> ${cidade.moeda}</p>
            <p><strong>Religião:</strong> ${cidade.religiao}</p>
        </div>

        <div class="info-box" style="border: 1px solid var(--neon-orange); padding:10px; border-radius:8px;">
            <h4 style="color: var(--neon-orange);"><i class="ri-alert-fill"></i> Antes de ir</h4>
            <p>${cidade.antes_de_ir || "Nenhuma recomendação específica."}</p>
        </div>
    `;

    modal.classList.add('active');
}

function closeModal() {
    modal.classList.remove('active');
}

modal.onclick = (e) => {
    if (e.target === modal) closeModal();
};

init();