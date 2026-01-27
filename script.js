// --- CONFIGURAÇÃO GLOBAL ---
const countryFlags = { "Brasil": "br", "Portugal": "pt", "Marrocos": "ma", "Japão": "jp", "Austrália": "au" };
const defaultImage = "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop";

/* BANCO DE DADOS */
const worldData = {
    "América do Sul": {
        "Brasil": [
            {
                name: "Salvador",
                imagem: "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?q=80&w=2071&auto=format&fit=crop",
                tags: ["História", "Cultura", "Praia"],
                mapa: "https://goo.gl/maps/salvador",
                clima: "Tropical Quente. Sol o ano todo.",
                
                // CONTEÚDO RICO
                pontos_turisticos: [
                    "Pelourinho: Patrimônio da Humanidade pela UNESCO, repleto de arquitetura colonial e cores vibrantes.",
                    "Elevador Lacerda: O primeiro elevador urbano do mundo (1873), unindo a Cidade Alta e a Baixa com vista para a Baía.",
                    "Farol da Barra: Forte histórico e o melhor local para assistir ao pôr do sol no mar.",
                    "Igreja do Bonfim: Famosa pelas fitinhas e pela lavagem das escadarias (sincretismo puro).",
                    "Ilha dos Frades: Um refúgio de águas cristalinas na Baía de Todos-os-Santos.",
                    "Mercado Modelo: Artesanato local e cultura no coração da cidade baixa."
                ],
                gastronomia: [
                    "Acarajé: Bolinho de feijão fradinho frito no azeite de dendê (Patrimônio Imaterial).",
                    "Moqueca Baiana: Peixe ou camarão com leite de coco, dendê e coentro.",
                    "Vatapá e Caruru: Cremes deliciosos que acompanham pratos principais.",
                    "Cocada de tabuleiro: Doce tradicional feito na hora."
                ],
                curiosidades: "Salvador foi a primeira capital do Brasil (1549-1763). É conhecida como a 'Roma Negra' por ser a cidade com maior população negra fora da África. O carnaval daqui é considerado a maior festa de rua do planeta pelo Guinness Book.",
                estacoes: "Verão (Dez-Mar) é vibrante e lotado. Chuvas ocasionais ocorrem entre Abril e Junho, mas o calor permanece.",
                moeda: "Real (BRL)",
                religiao: "Terra do sincretismo: Onde o Catolicismo e o Candomblé se encontram. Cada orixá tem um correspondente católico.",
                eventos: "Carnaval de Salvador (Fev/Mar), Festa de Iemanjá (02/Fev), Lavagem do Bonfim (Jan).",
                antes_de_ir: "O ritmo da Bahia é 'devagar'. Não tenha pressa. Negocie preços com ambulantes antes de consumir e evite ostentar objetos de valor (celulares, câmeras) em ruas muito movimentadas do Centro Histórico.",
                
                // SEUS LINKS DE AFILIADO
                links: {
                    hotel: "https://www.booking.com/searchresults.pt-br.html?city=-668987&aid=304142", 
                    passeio: "https://www.civitatis.com/br/salvador/", 
                    seguro: "https://www.segurospromo.com.br" 
                }
            },
            {
                name: "Rio de Janeiro",
                imagem: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=2070&auto=format&fit=crop",
                tags: ["Praia", "Calor"],
                mapa: "https://goo.gl/maps/ExemploRio",
                clima: "Tropical Atlântico. Verão 40ºC.",
                pontos_turisticos: ["Cristo Redentor", "Pão de Açúcar", "Copacabana", "Lapa", "Jardim Botânico", "Maracanã"],
                gastronomia: ["Feijoada", "Biscoito Globo e Mate", "Caipirinha", "Podrão"],
                curiosidades: "O Rio tem o céu considerado o mais azul do mundo.",
                estacoes: "Verão: Dez-Mar. Inverno: Jun-Set (Ameno).",
                moeda: "Real (BRL)",
                religiao: "Diversa",
                eventos: "Carnaval, Réveillon, Rock in Rio",
                antes_de_ir: "Use Uber, evite ônibus à noite. Leve protetor solar.",
                links: {
                    hotel: "https://www.booking.com/searchresults.pt-br.html?city=-666610&aid=304142", 
                    passeio: "https://www.civitatis.com/br/rio-de-janeiro/", 
                    seguro: "https://www.segurospromo.com.br" 
                }
            }
        ]
    }
};

/* LÓGICA DO SISTEMA */

function init() { renderSidebar(); }

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
            const flagHTML = code !== 'unknown' ? `<img src="https://flagcdn.com/w40/${code}.png" class="flag-icon">` : `<i class="ri-flag-line"></i>`;
            btnPais.innerHTML = `${flagHTML} <span>${pais}</span>`;
            btnPais.onclick = () => loadCities(pais, paises[pais]);
            countryList.appendChild(btnPais);
        });

        btnContinente.onclick = () => {
            document.querySelectorAll('.continent-group').forEach(el => { if(el !== group) el.classList.remove('open'); });
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
    document.getElementById('pageSubtitle').innerHTML = `${listaCidades.length} Destinos encontrados`;
    const grid = document.getElementById('mainDisplay');
    grid.innerHTML = '';

    listaCidades.forEach(cidade => {
        const card = document.createElement('div');
        card.className = 'city-card';
        const bgImage = cidade.imagem || defaultImage;
        let tagsHTML = '';
        if(cidade.tags) { cidade.tags.forEach(tag => tagsHTML += `<span class="badge azul">${tag}</span>`); }

        card.innerHTML = `
            <div class="card-img-wrapper"><img src="${bgImage}" class="card-img"><div class="card-badges">${tagsHTML}</div></div>
            <div class="card-content">
                <div><h3>${cidade.name}</h3><p>${cidade.curiosidades.substring(0, 60)}...</p></div>
                <span class="view-btn">Explorar <i class="ri-arrow-right-line"></i></span>
            </div>
        `;
        card.onclick = () => openModal(cidade, bgImage);
        grid.appendChild(card);
    });
}

// --- LÓGICA DO MODAL TELA CHEIA ---
const modal = document.getElementById('cityModal');
const modalMenu = document.getElementById('modalMenu');
const modalDetails = document.getElementById('modalDetails');
const detailTitle = document.getElementById('detailTitle');
const detailContent = document.getElementById('detailContent');
let currentCity = null;

function openModal(cidade, imagemUrl) {
    currentCity = cidade; 
    modalMenu.classList.remove('hidden');
    modalDetails.classList.add('hidden');

    document.getElementById('modalTitle').innerText = cidade.name;
    document.getElementById('modalSubtitle').innerText = cidade.clima;
    document.getElementById('modalImg').style.backgroundImage = `url('${imagemUrl}')`;
    document.getElementById('modalMapLink').href = cidade.mapa;
    
    let tagsHTML = '';
    if(cidade.tags) { cidade.tags.forEach(tag => tagsHTML += `<span class="badge azul">${tag}</span>`); }
    document.getElementById('modalBadges').innerHTML = tagsHTML;

    // BOTÕES DE AFILIADO
    const affContainer = document.getElementById('affiliateContainer');
    let affHTML = '';
    if(cidade.links) {
        if(cidade.links.hotel) affHTML += makeAffiliateBtn("ri-hotel-bed-fill", "Reservar Hotel", "Melhores Preços", cidade.links.hotel);
        if(cidade.links.passeio) affHTML += makeAffiliateBtn("ri-ticket-2-fill", "Comprar Passeios", "Sem Filas", cidade.links.passeio);
        if(cidade.links.seguro) affHTML += makeAffiliateBtn("ri-shield-check-fill", "Seguro Viagem", "Viaje Protegido", cidade.links.seguro);
    }
    affContainer.innerHTML = affHTML;

    // MENU DE CATEGORIAS (ICONES)
    const catGrid = document.getElementById('categoryGrid');
    catGrid.innerHTML = `
        <div class="cat-card" onclick="showCategory('turismo')"><i class="ri-camera-3-fill"></i><h4>Pontos Turísticos</h4></div>
        <div class="cat-card" onclick="showCategory('gastronomia')"><i class="ri-restaurant-2-fill"></i><h4>Gastronomia</h4></div>
        <div class="cat-card" onclick="showCategory('religiao')"><i class="ri-book-open-fill"></i><h4>Cultura & Religião</h4></div>
        <div class="cat-card" onclick="showCategory('curiosidades')"><i class="ri-lightbulb-flash-fill"></i><h4>Curiosidades</h4></div>
        <div class="cat-card" onclick="showCategory('eventos')"><i class="ri-calendar-event-fill"></i><h4>Eventos & Estações</h4></div>
        <div class="cat-card" onclick="showCategory('geral')"><i class="ri-coins-fill"></i><h4>Info. Gerais</h4></div>
        <div class="cat-card warning" onclick="showCategory('antes')"><i class="ri-alert-fill"></i><h4>Antes de Ir</h4></div>
    `;
    modal.classList.add('active');
}

function makeAffiliateBtn(icon, title, sub, link) {
    return `<a href="${link}" target="_blank" class="affiliate-btn"><i class="${icon}"></i><div class="affiliate-content"><strong>${title}</strong><span>${sub}</span></div></a>`;
}

function showCategory(type) {
    if(!currentCity) return;
    let title = "", content = "";

    switch(type) {
        case 'turismo': title = "Pontos Turísticos"; content = formatList(currentCity.pontos_turisticos); break;
        case 'gastronomia': title = "Gastronomia Típica"; content = formatList(currentCity.gastronomia); break;
        case 'religiao': title = "Cultura & Religião"; content = `<p>${currentCity.religiao}</p>`; break;
        case 'curiosidades': title = "Curiosidades"; content = `<p>${currentCity.curiosidades}</p>`; break;
        case 'eventos': title = "Eventos & Estações"; content = `<p><strong>Estações:</strong> ${currentCity.estacoes}</p><p><strong>Eventos:</strong> ${currentCity.eventos}</p>`; break;
        case 'geral': title = "Informações Gerais"; content = `<p><strong>Moeda:</strong> ${currentCity.moeda}</p>`; break;
        case 'antes': title = "O Que Saber Antes de Ir"; content = `<p>${currentCity.antes_de_ir || "Sem avisos específicos."}</p>`; break;
    }

    detailTitle.innerText = title;
    detailContent.innerHTML = content;
    modalMenu.classList.add('hidden');
    modalDetails.classList.remove('hidden');
}

function backToMenu() {
    modalDetails.classList.add('hidden');
    modalMenu.classList.remove('hidden');
}

function formatList(data) {
    if(Array.isArray(data)) return `<ul>${data.map(i => `<li>${i}</li>`).join('')}</ul>`;
    return `<p>${data}</p>`;
}

function closeModal() { modal.classList.remove('active'); }
modal.onclick = (e) => { if (e.target === modal) closeModal(); };
init();