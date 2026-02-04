
let countryFlags = {};
let categoryEmojis = {};
let realCostData = {}; // New global variable
let worldData = {};

async function loadEmojis() {
    try {
        const response = await fetch('emoji.json');
        const data = await response.json();
        countryFlags = data.countryFlags;
        categoryEmojis = data.categoryEmojis;
    } catch (error) {
        console.error("Erro ao carregar emojis:", error);
    }
}

async function loadRealCostData() {
    try {
        const response = await fetch('cidade1.json');
        realCostData = await response.json();
    } catch (error) {
        console.error("Erro ao carregar cidade1.json:", error);
    }
}

async function loadWorldData() {
    try {
        const response = await fetch('world.json');
        worldData = await response.json();
    } catch (error) {
        console.error("Erro ao carregar world.json:", error);
    }
}
// --- CONFIGURAÇÃO GLOBAL ---

const defaultImage = "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop";

// ========== DADOS DE CUSTO REAL DA VIAGEM ==========
 
        
// ========== FUNÇÃO PARA ATUALIZAR CUSTO REAL ==========
function updateRealCost(cityName) {
    const costData = realCostData[cityName];
    if (costData) {
        document.getElementById('realCostFood').textContent = costData.comida;
        document.getElementById('realCostHotel').textContent = costData.hospedagem;
        document.getElementById('realCostTransport').textContent = costData.transporte;
        document.getElementById('realCostTickets').textContent = costData.atracoes;
        document.getElementById('realCostSection').classList.remove('hidden');
    } else {
        document.getElementById('realCostFood').textContent = "R$ 0 – R$ 0";
        document.getElementById('realCostHotel').textContent = "R$ 0 – R$ 0";
        document.getElementById('realCostTransport').textContent = "R$ 0 – R$ 0";
        document.getElementById('realCostTickets').textContent = "R$ 0 – R$ 0";
    }
}

// ========== NOVO: FUNÇÃO PARA ATUALIZAR O VEREDICTO (VALE A PENA?) ==========
function updateVerdict(cidade) {
    const section = document.getElementById('verdictSection');
    
    if (cidade.veredicto) {
        // 1. Melhor Época
        document.getElementById('verdictBestTime').textContent = cidade.veredicto.melhor_epoca;

        // 2. Prós (Ideal Para)
        const prosList = document.getElementById('verdictPros');
        prosList.innerHTML = '';
        cidade.veredicto.ideal_para.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            prosList.appendChild(li);
        });

        // 3. Contras (Não Ideal Para)
        const consList = document.getElementById('verdictCons');
        consList.innerHTML = '';
        cidade.veredicto.nao_ideal_para.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            consList.appendChild(li);
        });

        // 4. Perfis (Combina Com)
        const profilesGrid = document.getElementById('verdictProfiles');
        profilesGrid.innerHTML = '';
        cidade.veredicto.perfis.forEach(perfil => {
            const div = document.createElement('div');
            div.className = 'profile-card';
            div.innerHTML = `<i class="${perfil.icone}"></i> <span>${perfil.nome}</span>`;
            profilesGrid.appendChild(div);
        });

        section.classList.remove('hidden');
    } else {
        // Se a cidade não tiver dados de veredicto, esconde a seção
        section.classList.add('hidden');
    }
}

/* LÓGICA DO SISTEMA */

async function init() { 
    await Promise.all([loadEmojis(), loadRealCostData(), loadWorldData()]); // Load in parallel
    renderSidebar();
    fixSidebarLayout();
    //   initRightSidebar();
}

function fixSidebarLayout() {
    const style = document.createElement('style');
    style.innerHTML = `
        .sidebar {
            overflow-y: auto !important;
            height: 100vh;
            display: flex;
            flex-direction: column;
        }
        #sidebarMenu {
            overflow: visible !important;
            height: auto !important;
            flex: 0 0 auto;
        }
        /* Garante que os botões de Roteiro e Decisor não fiquem espremidos */
        .sidebar > button, .sidebar > div {
            flex-shrink: 0 !important;
        }
        /* Estilização da barra de rolagem */
        .sidebar::-webkit-scrollbar { width: 5px; }
         .sidebar::-webkit-scrollbar-thumb { background: var(--neon-blue); border-radius: 5px; }
    `;
    document.head.appendChild(style);
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
            
            let flagHTML;
            if (countryFlags[pais]) {
                flagHTML = `<img src="https://flagcdn.com/w40/${countryFlags[pais]}.png" class="flag-icon">`;
            } else if (categoryEmojis[pais]) {
                flagHTML = `<span style="font-size: 1.2rem; width: 22px; display: inline-block; text-align: center;">${categoryEmojis[pais]}</span>`;
            } else {
                flagHTML = `<i class="ri-flag-line"></i>`;
            }

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

// Função para limpar a tela e voltar ao mapa
function resetToMap() {
    document.getElementById('pageTitle').innerText = 'Explore o Mundo';
    document.getElementById('pageSubtitle').innerText = 'Selecione um país para começar';
    document.getElementById('mainDisplay').innerHTML = '';
    
    const backBtn = document.getElementById('btn-voltar-mapa');
    if (backBtn) backBtn.style.display = 'none';
}

function loadCities(nomePais, listaCidades) {
    document.getElementById('pageTitle').innerText = nomePais;
    document.getElementById('pageSubtitle').innerHTML = `${listaCidades.length} Destinos encontrados`;
    const grid = document.getElementById('mainDisplay');
    grid.innerHTML = '';

    // FECHA O MENU SE ESTIVER NO CELULAR
    if(window.innerWidth <= 768) {
        toggleSidebar(); 
    }

    // Adiciona/Exibe o botão de Voltar ao Mapa
    let backBtn = document.getElementById('btn-voltar-mapa');
    if (!backBtn) {
        backBtn = document.createElement('button');
        backBtn.id = 'btn-voltar-mapa';
        backBtn.className = 'back-map-btn';
        backBtn.innerHTML = '<i class="ri-arrow-go-back-line"></i> Voltar ao Mapa';
        backBtn.onclick = resetToMap;
        document.getElementById('pageSubtitle').parentNode.appendChild(backBtn);
    }
    backBtn.style.display = 'inline-flex';

    listaCidades.forEach(cidade => {
        const card = document.createElement('div');
        card.className = 'city-card';
        const bgImage = cidade.imagem || defaultImage;
        let tagsHTML = '';
        if(cidade.tags) { cidade.tags.forEach(tag => tagsHTML += `<span class="badge azul">${tag}</span>`); }

        card.innerHTML = `
            <div class="card-img-wrapper"><img src="${bgImage}" class="card-img"><div class="card-badges">${tagsHTML}</div></div>
            <div class="card-content">
                <div><h3>${cidade.name}</h3><p>${cidade.curiosidades ? (typeof cidade.curiosidades === 'string' ? cidade.curiosidades.substring(0, 60) : cidade.curiosidades[0].substring(0,60)) : ""}...</p></div>
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

    // Atualiza informações básicas
    document.getElementById('modalTitle').innerText = cidade.name;
    document.getElementById('modalSubtitle').innerText = cidade.clima;
    document.getElementById('modalImg').style.backgroundImage = `url('${imagemUrl}')`;
    document.getElementById('modalMapLink').href = cidade.mapa;
    
    // Atualiza tags
    let tagsHTML = '';
    if(cidade.tags) { cidade.tags.forEach(tag => tagsHTML += `<span class="badge azul">${tag}</span>`); }
    document.getElementById('modalBadges').innerHTML = tagsHTML;

    // ========== ATUALIZA CUSTO REAL DA VIAGEM ==========
    updateRealCost(cidade.name);

    // ========== NOVO: ATUALIZA O VEREDICTO ==========
    updateVerdict(cidade);

    // ========== NOVO: ATUALIZA O CHECKLIST (ANTES DE IR) ==========
    renderChecklist(cidade.name);

    // BOTÕES DE AFILIADO
    const affContainer = document.getElementById('affiliateContainer');
    let affHTML = '';
    if(cidade.links) {
        if(cidade.links.hotel) affHTML += makeAffiliateBtn("ri-hotel-bed-fill", "Reservar Hotel", "Melhores Preços", cidade.links.hotel);
        if(cidade.links.passeio) affHTML += makeAffiliateBtn("ri-ticket-2-fill", "Comprar Passeios", "Sem Filas", cidade.links.passeio);
        if(cidade.links.seguro) affHTML += makeAffiliateBtn("ri-shield-check-fill", "Seguro Viagem", "Viaje Protegido", cidade.links.seguro);
    }
    affContainer.innerHTML = affHTML;
    
    // ROTEIRO AUTOMÁTICO
    const roteiroDiv = document.getElementById('roteiroArea') || document.createElement('div');
    roteiroDiv.id = 'roteiroArea';
    roteiroDiv.className = 'roteiro-box';
    
    // Removemos se já existir para recriar limpo
    if(document.getElementById('roteiroArea')) document.getElementById('roteiroArea').remove();

    if(cidade.roteiros) {
        roteiroDiv.innerHTML = `
            <span class="roteiro-label"><i class="ri-calendar-check-line"></i> QUANTOS DIAS VOCÊ TEM?</span>
            <div class="roteiro-options">
                <button class="time-btn" onclick="showRoteiro('curto')">1 a 2 Dias</button>
                <button class="time-btn" onclick="showRoteiro('medio')">3 a 5 Dias</button>
                <button class="time-btn" onclick="showRoteiro('longo')">+7 Dias</button>
            </div>
        `;
        // Insere DEPOIS dos afiliados e ANTES dos ícones
        affContainer.parentNode.insertBefore(roteiroDiv, document.getElementById('categoryGrid'));
    }
    
    // MENU DE CATEGORIAS (ICONES)
    const catGrid = document.getElementById('categoryGrid');
    catGrid.innerHTML = `
        <div class="cat-card" onclick="showCategory('turismo')"><i class="ri-camera-3-fill"></i><h4>Pontos Turísticos</h4></div>
        <div class="cat-card" onclick="showCategory('gastronomia')"><i class="ri-restaurant-2-fill"></i><h4>Gastronomia</h4></div>
        <div class="cat-card" onclick="showCategory('religiao')"><i class="ri-book-open-fill"></i><h4>Cultura & Religião</h4></div>
        <div class="cat-card" onclick="showCategory('curiosidades')"><i class="ri-lightbulb-flash-fill"></i><h4>Curiosidades</h4></div>
        <div class="cat-card" onclick="showCategory('eventos')"><i class="ri-calendar-event-fill"></i><h4>Eventos & Estações</h4></div>
        <div class="cat-card" onclick="showCategory('geral')"><i class="ri-coins-fill"></i><h4>Info. Gerais</h4></div>
        <div class="cat-card" onclick="showCategory('numeros')"><i class="ri-phone-line"></i><h4>SOS & Útil</h4></div>
        <div class="cat-card warning" onclick="showCategory('antes')"><i class="ri-alert-fill"></i><h4>Antes de Ir</h4></div>

        <div class="cat-card warning" onclick="showCategory('riscos')" style="border-color: var(--neon-coral);">
            <i class="ri-alarm-warning-fill" style="color: var(--neon-coral);"></i>
            <h4 style="color: var(--neon-coral);">Riscos & Erros</h4>
        </div>
    `;
    
    document.querySelector('.fab-container').style.display = 'none';
    modal.classList.add('active');
}

function makeAffiliateBtn(icon, title, sub, link) {
    return `<a href="${link}" target="_blank" class="affiliate-btn"><i class="${icon}"></i><div class="affiliate-content"><strong>${title}</strong><span>${sub}</span></div></a>`;
}

// NOVA FUNÇÃO PARA EXIBIR O ROTEIRO
function showRoteiro(tipo) {
    if(!currentCity || !currentCity.roteiros || !currentCity.roteiros[tipo]) return;
    
    const roteiro = currentCity.roteiros[tipo];
    
    detailTitle.innerText = roteiro.titulo;
    let htmlContent = `<ul style="list-style:none; padding:0;">`;
    roteiro.texto.forEach(dia => {
        htmlContent += `<li style="margin-bottom:15px; color:var(--text-muted);"><i class="ri-map-pin-time-line" style="color:var(--neon-gold); margin-right:10px;"></i> ${dia}</li>`;
    });
    htmlContent += `</ul>`;
    
    detailContent.innerHTML = htmlContent;
    
    modalMenu.classList.add('hidden');
    modalDetails.classList.remove('hidden');
}

function showCategory(type) {
    if(!currentCity) return;
    let title = "", content = "";

    switch(type) {
        case 'turismo':
            title = "Pontos Turísticos"; 
            content = formatList(currentCity.pontos_turisticos); 
            break;
        case 'gastronomia': 
            title = "Gastronomia Típica"; 
            content = formatList(currentCity.gastronomia); 
            break;
        case 'religiao': 
            title = "Cultura & Religião"; 
            content = formatList(currentCity.religiao); 
            break;
        case 'curiosidades': 
            title = "Curiosidades"; 
            content = formatList(currentCity.curiosidades); 
            break;
        case 'eventos':
            title = "Calendário & Estações";
            content = currentCity.eventos_estacoes ? formatList(currentCity.eventos_estacoes) : `<p><strong>Estações:</strong> ${currentCity.estacoes}</p><p><strong>Eventos:</strong> ${currentCity.eventos}</p>`;
            break;
        case 'geral':
            title = "Informações Gerais";
            content = currentCity.info_gerais ? formatList(currentCity.info_gerais) : `<p><strong>Moeda:</strong> ${currentCity.moeda}</p>`;
            break;
        case 'antes':
            title = "Antes de Ir (Dicas de Ouro)";
            content = currentCity.antes_de_ir ? formatList(currentCity.antes_de_ir) : `<p><strong>antes:</strong> ${currentCity.antes}</p>`;
            break;
        case 'numeros':
            title = "Números Importantes";
            content = currentCity.numeros ? formatList(currentCity.numeros) : "<p>Números não cadastrados para esta cidade.</p>";
            break;
        case 'riscos':
            title = "⚠️ Riscos & Erros Comuns";
            content = currentCity.riscos ? formatList(currentCity.riscos) : "<p>Dados de riscos ainda não cadastrados para esta cidade.</p>";
            break;
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

function closeModal() {
    modal.classList.remove('active');
    document.querySelector('.fab-container').style.display = 'flex';
}
modal.onclick = (e) => { if (e.target === modal) closeModal(); };

// --- SISTEMA DE BUSCA GLOBAL ---
function searchSystem() {
    const term = document.getElementById('globalSearch').value.toLowerCase();
    const grid = document.getElementById('mainDisplay');
    
    if(term.length === 0) return;

    document.getElementById('pageTitle').innerText = "Resultados da Busca";
    document.getElementById('pageSubtitle').innerText = `Procurando por: "${term}"`;

    // Adiciona/Exibe o botão de Voltar ao Mapa na busca também
    let backBtn = document.getElementById('btn-voltar-mapa');
    if (!backBtn) {
        backBtn = document.createElement('button');
        backBtn.id = 'btn-voltar-mapa';
        backBtn.className = 'back-map-btn';
        backBtn.innerHTML = '<i class="ri-arrow-go-back-line"></i> Voltar ao Mapa';
        backBtn.onclick = resetToMap;
        document.getElementById('pageSubtitle').parentNode.appendChild(backBtn);
    }
    backBtn.style.display = 'inline-flex';

    grid.innerHTML = '';
    let foundCount = 0;

    Object.keys(worldData).forEach(continente => {
        const paises = worldData[continente];
        Object.keys(paises).forEach(pais => {
            const cidades = paises[pais];
            
            cidades.forEach(cidade => {
                if (cidade.name.toLowerCase().includes(term) || 
                    pais.toLowerCase().includes(term) ||
                    (cidade.tags && cidade.tags.some(tag => tag.toLowerCase().includes(term)))) {
                    
                    foundCount++;
                    
                    const card = document.createElement('div');
                    card.className = 'city-card';
                    const bgImage = cidade.imagem || defaultImage;
                    let tagsHTML = '';
                    if(cidade.tags) { cidade.tags.forEach(tag => tagsHTML += `<span class="badge azul">${tag}</span>`); }

                    card.innerHTML = `
                        <div class="card-img-wrapper"><img src="${bgImage}" class="card-img"><div class="card-badges">${tagsHTML}</div></div>
                        <div class="card-content">
                            <div>
                                <span style="font-size:0.7rem; color:var(--neon-blue); text-transform:uppercase; letter-spacing:1px;">${pais}</span>
                                <h3>${cidade.name}</h3>
                                <p>${Array.isArray(cidade.curiosidades) ? cidade.curiosidades[0] : cidade.curiosidades.substring(0,60)}...</p>
                            </div>
                            <span class="view-btn">Explorar <i class="ri-arrow-right-line"></i></span>
                        </div>
                    `;
                    card.onclick = () => openModal(cidade, bgImage);
                    grid.appendChild(card);
                }
            });
        });
    });

    if (foundCount === 0) {
        grid.innerHTML = `
            <div class="empty-state">
                <i class="ri-search-eye-line"></i>
                <h2>Nenhum destino encontrado</h2>
                <p>Tente buscar por outro nome de cidade ou país.</p>
            </div>
        `;
    }
}


// Inicializa o sistema
init();
/* --- ATUALIZAÇÃO FINAL: MENU MOBILE E PESQUISA --- */

// 1. Função para Abrir/Fechar o Menu Lateral
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    
    // Alterna a classe 'active' que criamos no CSS
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

// 2. Função de Fechar o Menu ao Clicar no Link (Melhora a navegação)
// Adiciona evento em todos os botões de continente para fechar o menu ao selecionar (opcional)
document.querySelectorAll('.continent-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Apenas fecha se for mobile (verificando se o botão toggle está visível)
        if (window.getComputedStyle(document.querySelector('.mobile-toggle')).display !== 'none') {
            // Não fechamos imediatamente para dar tempo de ver a animação do submenu
            // Mas se clicar num país específico, aí sim fecha:
        }
    });
});

// 3. Função de Pesquisa (Filtro Instantâneo)
// Procura o input de pesquisa
const searchInput = document.querySelector('.search-wrapper input');

if (searchInput) {
    searchInput.addEventListener('input', function(e) {
        const termo = e.target.value.toLowerCase();
        const navGroups = document.querySelector('.nav-groups');
        const continentes = document.querySelectorAll('.continent-group');
        let encontrouAlgo = false;

        continentes.forEach(grupo => {
            const paises = grupo.querySelectorAll('.country-btn');
            let encontrouNoGrupo = false;

            paises.forEach(pais => {
                const nomePais = pais.innerText.toLowerCase();
                
                // Se o termo está no nome do país
                if (nomePais.includes(termo)) {
                    pais.style.display = 'flex'; // Mostra o país
                    encontrouNoGrupo = true;
                    encontrouAlgo = true;
                } else {
                    pais.style.display = 'none'; // Esconde o país
                }
            });

            // Lógica para abrir/fechar os continentes baseado na pesquisa
            if (termo === "") {
                // Se limpou a busca, reseta a visualização
                grupo.style.display = 'block'; 
                grupo.classList.remove('open'); // Fecha os acordeons
                grupo.querySelector('.country-list').style.maxHeight = null;
            } else {
                if (encontrouNoGrupo) {
                    grupo.style.display = 'block'; // Mostra o continente
                    grupo.classList.add('open'); // Abre o acordeon automaticamente
                    grupo.querySelector('.country-list').style.maxHeight = "1000px";
                } else {
                    grupo.style.display = 'none'; // Esconde o continente inteiro se não tiver o país
                }
            }
        });
        
        // (Opcional) Feedback visual se não encontrar nada
        // Você pode adicionar um aviso aqui se 'encontrouAlgo' for false
    });
}

// --- FUNÇÃO DO CHECKLIST (ANTES DE IR) ---
function renderChecklist(cityKey) {
    const container = document.getElementById('checklistContainer');
    container.innerHTML = ''; // Limpa anterior

    // 1. Busca os dados da cidade
    const city = realCostData[cityKey];
    
    // 2. Dados padrão (caso você ainda não tenha preenchido no banco de dados)
    const defaults = {
        passaporte: "Requerido",
        visto: "Verificar",
        vacinas: "Consultar",
        seguro: "Recomendado",
        tomada: "Universal",
        moeda: "Local",
        idioma: "Inglês/Local"
    };

    // 3. Mescla dados reais com padrão (Segurança contra erros)
    const data = (city && city.checklist) ? city.checklist : defaults;

    // 4. Lista de Itens para desenhar
    const items = [
        { label: "Passaporte", val: data.passaporte, icon: "ri-passport-line", style: "" },
        { label: "Visto", val: data.visto, icon: "ri-visa-fill", style: (data.visto && data.visto.toLowerCase().includes("nenhum")) ? "" : "warning" },
        { label: "Vacinas", val: data.vacinas, icon: "ri-syringe-line", style: "" },
        { label: "Seguro", val: data.seguro, icon: "ri-shield-cross-line", style: (data.seguro && data.seguro.toLowerCase().includes("obrig")) ? "alert" : "" },
        { label: "Tomada", val: data.tomada, icon: "ri-plug-line", style: "" },
        { label: "Moeda", val: data.moeda, icon: "ri-coins-line", style: "" },
        { label: "Idioma", val: data.idioma, icon: "ri-translate-2", style: "" }
    ];

    // 5. Gera o HTML dinâmico
    items.forEach(item => {
        const div = document.createElement('div');
        div.className = `checklist-item ${item.style}`;
        div.innerHTML = `
            <div class="check-icon-box"><i class="${item.icon}"></i></div>
            <div class="check-label">${item.label}</div>
            <div class="check-value">${item.val}</div>
        `;
         container.appendChild(div);
    });
}

/// ... existing code ...
function resetAssistant() {
    userChoices = { budget: null, type: null, vibe: null };
    const steps = ['assistStep2', 'assistStep3', 'assistResult'];
    steps.forEach(id => {
        const el = document.getElementById(id);
        if(el) el.classList.add('hidden');
    });
    
    const step1 = document.getElementById('assistStep1');
    if(step1) step1.classList.remove('hidden');
    
    const grid = document.getElementById('assistGrid');
    if(grid) grid.innerHTML = '';
}

/* =======================================================
   LÓGICA "CIRÚRGICA": CUSTO REAL + TAGS (VERSÃO DEFINITIVA)
   ======================================================= */
function calculateResults() {
    console.log("Iniciando lógica cirúrgica..."); // Para confirmar que carregou
    const resultsContainer = document.getElementById('assistGrid');
    resultsContainer.innerHTML = '<p style="grid-column:1/-1;text-align:center"><i class="ri-loader-4-line ri-spin"></i> Calculando custos...</p>';

    if (typeof worldData === 'undefined' || typeof realCostData === 'undefined') {
        resultsContainer.innerHTML = '<p>Erro: Dados não carregados.</p>';
        return;
    }

    const allDestinations = getAllDestinationsFlatSafe();

    // Função para calcular custo médio diário e adicionar ao objeto
    const addAvgCost = (dest) => {
        let avgDailyCost = 9999; // Valor padrão alto para destinos sem dados
        if (realCostData[dest.name]) {
            const costs = realCostData[dest.name];
            const extractVal = (str) => {
                if (!str) return 0;
                const nums = str.match(/(\d+)/g);
                if (!nums) return 0;
                return nums.length > 1 ? (parseInt(nums[0]) + parseInt(nums[1])) / 2 : parseInt(nums[0]);
            };
            const foodCost = extractVal(costs.comida);
            const stayCost = extractVal(costs.hospedagem);
            if (foodCost > 0 && stayCost > 0) {
                avgDailyCost = foodCost + stayCost;
            }
        }
        dest.avgDailyCost = avgDailyCost;
        return dest;
    };
    
    // Adiciona custo a todos os destinos
    const allDestinationsWithCost = allDestinations.map(addAvgCost);

    // 1. MAPA DE TAGS (Conecta escolha do usuário com tags do banco)
    const tagMap = {
        nature: ["Praia", "Natureza", "Montanha", "Parque", "Cachoeira", "Deserto", "Neve", "Aurora Boreal", "Mergulho"],
        city: ["Cidade", "Urbano", "História", "Museu", "Arquitetura", "Metrópole", "Show", "Compras", "Maravilha do Mundo", "Império"],
        rest: ["Relax", "Vinho", "Romance", "Resort", "Paz", "Gastronomia", "Hotel", "Spa", "All Inclusive", "Praia"],
        adventure: ["Aventura", "Trilha", "Esporte", "Trekking", "Explorar", "Agito", "Noite", "Safari", "Mergulho", "Vela"]
    };

    // 2. FILTRAGEM MATEMÁTICA
    const matches = allDestinationsWithCost.filter(dest => {
        // Verifica se cabe no bolso (com faixas exclusivas)
        let budgetMatch = false;
        if (userChoices.budget === 'low' && dest.avgDailyCost <= 350) {
            budgetMatch = true;
        } else if (userChoices.budget === 'med' && dest.avgDailyCost > 350 && dest.avgDailyCost <= 800) {
            budgetMatch = true;
        } else if (userChoices.budget === 'high' && dest.avgDailyCost > 800) {
            budgetMatch = true;
        }

        // --- B. CONTAGEM DE TAGS ---
        let tagMatches = 0;
        const targetTags = [...(tagMap[userChoices.type] || []), ...(tagMap[userChoices.vibe] || [])];
        const destTagsString = (dest.tags || []).join(" ").toLowerCase() + " " + dest.name.toLowerCase();

        targetTags.forEach(t => {
            if (destTagsString.includes(t.toLowerCase())) tagMatches++;
        });

        // --- C. DECISÃO FINAL ---
        if (budgetMatch && tagMatches > 0) {
            dest.sortScore = tagMatches;
            return true;
        }
        return false;
    });

    // 3. ORDENAR E EXIBIR
    // Ordena: Primeiro pelo MAIS BARATO, depois desempata por quem tem mais tags
    matches.sort((a, b) => a.avgDailyCost - b.avgDailyCost || b.sortScore - a.sortScore);
    
    // Se não achou NADA, pega genéricos do orçamento, já ordenados por preço
    allDestinationsWithCost.sort((a, b) => a.avgDailyCost - b.avgDailyCost);

    let finalResults = matches.length > 0 ? matches.slice(0, 12) : allDestinationsWithCost.slice(0, 12);

    resultsContainer.innerHTML = '';
    
    if (matches.length === 0) {
        resultsContainer.innerHTML = '<p style="grid-column:1/-1;text-align:center;font-size:0.8rem;color:#666">Nenhum destino perfeito encontrado. Veja algumas sugestões gerais, da mais barata para a mais cara:</p>';
    }

    finalResults.forEach(dest => {
        // Pega o preço real para mostrar na etiqueta
        const priceLabel = realCostData[dest.name] ? realCostData[dest.name].hospedagem.split('–')[0] : '$$$';

        const div = document.createElement('div');
        div.className = 'mini-result-card';
        div.onclick = function() { closeAssistant(); openModal(dest); };
        
        div.innerHTML = `
            <div style="position:relative">
                <img src="${dest.imagem}" style="width:100%;height:80px;object-fit:cover;border-radius:8px 8px 0 0;">
                <span style="position:absolute;bottom:0;right:0;background:rgba(0,0,0,0.7);color:#fff;font-size:0.6rem;padding:2px 6px;border-top-left-radius:4px;">
                    Hospedagem: ${priceLabel}
                </span>
            </div>
            <div style="padding:10px">
                <h4 style="margin:0;font-size:0.9rem;color:#001e36">${dest.name}</h4>
                <div style="display:flex;gap:5px;margin-top:5px;flex-wrap:wrap">
                    <span style="font-size:0.65rem;background:#e0f7fa;color:#006064;padding:2px 4px;border-radius:3px">${dest.tags[0]}</span>
                    ${dest.tags[1] ? `<span style="font-size:0.65rem;background:#f3e5f5;color:#4a148c;padding:2px 4px;border-radius:3px">${dest.tags[1]}</span>` : ''}
                </div>
            </div>
        `;
        resultsContainer.appendChild(div);
    });
}

// =======================================================
// FUNÇÕES AUXILIARES DO ASSISTENTE (ADICIONADAS)
// =======================================================

// Garante que a variável global exista
var userChoices = { budget: null, type: null, vibe: null };

function openAssistant() {
    const modal = document.getElementById('assistantModal');
    if (modal) {
        modal.classList.remove('hidden');
        resetAssistant();
    }
}

function closeAssistant() {
    const modal = document.getElementById('assistantModal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

function selectBudget(value) {
    userChoices.budget = value;
    document.getElementById('assistStep1').classList.add('hidden');
    document.getElementById('assistStep2').classList.remove('hidden');
}

function selectType(value) {
    userChoices.type = value;
    document.getElementById('assistStep2').classList.add('hidden');
    document.getElementById('assistStep3').classList.remove('hidden');
}

function selectVibe(value) {
    userChoices.vibe = value;
    document.getElementById('assistStep3').classList.add('hidden');
    document.getElementById('assistResult').classList.remove('hidden');
    calculateResults();
}

function getAllDestinationsFlatSafe() {
    let all = [];
    if (typeof worldData === 'undefined') return [];
    
    Object.keys(worldData).forEach(category => {
        const subCategories = worldData[category];
        if (subCategories) {
            Object.keys(subCategories).forEach(sub => {
                const destinations = subCategories[sub];
                if (Array.isArray(destinations)) {
                    all = all.concat(destinations);
                }
            });
        }
    });
    return all;
}

// ==========================================
// WIDGETS E NOVO MENU FAB
// ==========================================

function toggleFabMenu() {
    const fabContainer = document.querySelector('.fab-container');
    if (fabContainer) {
        fabContainer.classList.toggle('active');
    }
}

function openCurrencyWidget() {
    const currencyWidget = document.getElementById('currency-widget');
    if (currencyWidget) {
        currencyWidget.classList.remove('hidden');
        if (!isRatesLoaded) {
            fetchRates();
        }
    }
    // Fecha o menu FAB ao abrir um widget
    const fabContainer = document.querySelector('.fab-container');
    if (fabContainer && fabContainer.classList.contains('active')) {
        fabContainer.classList.remove('active');
    }
}

function closeCurrencyWidget() {
    const currencyWidget = document.getElementById('currency-widget');
    if (currencyWidget) {
        currencyWidget.classList.add('hidden');
    }
}


// ==========================================
// WIDGET DE CONVERSÃO DE MOEDAS (REAL TIME)
// ==========================================

let currentRates = {}; // Armazena as cotações baixadas
let isRatesLoaded = false;


// Consome a AwesomeAPI
async function fetchRates() {
    const label = document.getElementById('rateLabel');
    label.innerHTML = '<i class="ri-loader-4-line ri-spin"></i> Atualizando valores...';

    // Lista de pares para buscar (Moeda-BRL)
    const pairs = "USD-BRL,EUR-BRL,GBP-BRL,ARS-BRL,CLP-BRL,UYU-BRL,COP-BRL,PEN-BRL,MXN-BRL,JPY-BRL,AED-BRL,CAD-BRL";

    try {
        const response = await fetch(`https://economia.awesomeapi.com.br/last/${pairs}`);
        const data = await response.json();

        // Processa os dados para um formato simples
        // A API retorna algo como "USDBRL": { "bid": "5.05" }
        Object.keys(data).forEach(key => {
            const currencyCode = data[key].code; // Ex: USD
            currentRates[currencyCode] = parseFloat(data[key].bid);
        });

        isRatesLoaded = true;
        label.innerHTML = '<i class="ri-check-double-line"></i> Cotação atualizada agora';
        convertCurrency(); // Recalcula se já tiver número digitado

    } catch (error) {
        console.error("Erro no conversor:", error);
        label.innerText = "Erro ao buscar taxas. Tente mais tarde.";
    }
}

// Realiza o cálculo
function convertCurrency() {
    const amount = parseFloat(document.getElementById('convAmount').value);
    const currency = document.getElementById('convCurrency').value;
    const resultSpan = document.getElementById('convResult');
    
    // Se não tiver valor ou cotação, zera
    if (!amount || isNaN(amount) || !currentRates[currency]) {
        resultSpan.innerText = "R$ 0,00";
        return;
    }

    const rate = currentRates[currency];
    const total = amount * rate;

    // Formata para Real Brasileiro
    resultSpan.innerText = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    
    // Mostra a taxa unitária no rodapé para referência
    document.getElementById('rateLabel').innerText = `1 ${currency} = R$ ${rate.toFixed(2)}`;
}
// ======================================================
// SISTEMA DE MAPA INTERATIVO (LEAFLET.JS) - ATUALIZADO
// ======================================================

// 1. Torna a função GLOBAL para que o HTML dentro do mapa consiga acessá-la
window.openMapCity = function(cityName) {
    console.log("Tentando abrir:", cityName); // Para debug

    let foundCity = null;

    // Busca a cidade no seu banco de dados aninhado (worldData)
    // Verifica se worldData existe
    if (typeof worldData === 'undefined') {
        console.error("Erro: worldData não foi encontrado.");
        return;
    }

    // Usando loops for...of para poder usar 'break'
    for (const cat of Object.keys(worldData)) {
        for (const sub of Object.keys(worldData[cat])) {
            const city = worldData[cat][sub].find(c => c.name === cityName);
            if (city) {
                foundCity = city;
                break; // Encontrou a cidade, sai do loop interno
            }
        }
        if (foundCity) {
            break; // Encontrou a cidade, sai do loop externo
        }
    }

    if (foundCity) {
        console.log("Cidade encontrada:", JSON.stringify(foundCity, null, 2));
        currentCity = foundCity; // Atualiza variável global
        openModal(foundCity, foundCity.imagem); // Abre o modal
    } else {
        console.warn("Cidade não encontrada nos dados:", cityName);
    }
};

const cityCoordinates = {
    "Torre Eiffel": [48.8584, 2.2945],
    "Cristo Redentor": [-22.9519, -43.2105],
    "Coliseu": [41.8902, 12.4922],
    "Estátua da Liberdade": [40.6892, -74.0445],
    "Taj Mahal": [27.1751, 78.0421],
    "Machu Picchu": [-13.1631, -72.5450],
    "Grande Muralha da China": [40.4319, 116.5704],
    "Cidade Proibida": [39.9163, 116.3972],
    "Petra": [30.3285, 35.4444],
    "Chichén Itzá": [20.6843, -88.5678],
    "Sydney Opera House": [-33.8568, 151.2153],
    "Sagrada Família": [41.4036, 2.1744],
    "Stonehenge": [51.1789, -1.8262],
    "Niagara Falls": [43.0962, -79.0377],
    "Monte Fuji": [35.3606, 138.7274],
    "Dubai": [25.1972, 55.2744],
    "Londres": [51.5074, -0.1278],
    "Paris": [48.8566, 2.3522],
    "Nova York": [40.7128, -74.0060],
    "Rio de Janeiro": [-22.9068, -43.1729],
    "Tóquio": [35.6762, 139.6503],
    "Angkor Wat": [13.4125, 103.8670],
    "Pirâmides de Gizé": [29.9792, 31.1342],
    "Buenos Aires": [-34.6037, -58.3816],
    "Santiago": [-33.4489, -70.6693],
    "Cartagena": [10.3910, -75.4794],
    "Bogotá": [4.7110, -74.0721],
    "Lima": [-12.0464, -77.0428],
    "Fernando de Noronha": [-3.8577, -32.4278],
    "Foz do Iguaçu": [-25.5469, -54.5882],
    "Florianópolis": [-27.5954, -48.5480],
    "Salvador": [-12.9777, -38.5016],
    "Jericoacoara": [-2.7933, -40.5136],
    "Gramado": [-29.3746, -50.8764],
    "Maragogi": [-9.0122, -35.2226],
    "Bonito": [-21.1215, -56.4819],
    "Ilhabela": [-23.7781, -45.3577],
    "Ushuaia": [-54.8019, -68.3030],
   
};

let map; 

function initMap() {
    if (!document.getElementById('worldMap')) return;

    map = L.map('worldMap', {
        zoomControl: false,
        scrollWheelZoom: false 
    }).setView([20, -10], 2);

    // --- CAMADAS DO GOOGLE MAPS (Melhor qualidade e interativo) ---
    const googleStreets = L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
        attribution: '© Google Maps'
    });

    const googleHybrid = L.tileLayer('https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
        attribution: '© Google Maps'
    });

    // Adiciona a camada de Ruas como padrão
    googleStreets.addTo(map);

    // Adiciona controle para o usuário trocar entre Mapa e Satélite
    const baseMaps = {
        "Mapa (Google)": googleStreets,
        "Satélite (Google)": googleHybrid
    };
    L.control.layers(baseMaps, null, { position: 'topright' }).addTo(map);

    L.control.zoom({ position: 'bottomright' }).addTo(map);

    const neonIcon = L.divIcon({
        className: 'custom-pin',
        html: `<div style="
            background-color: var(--neon-cyan);
            width: 15px;
            height: 15px;
            border-radius: 50%;
            border: 2px solid white;
            box-shadow: 0 0 10px var(--neon-cyan);
            "></div>`,
        iconSize: [15, 15],
        iconAnchor: [7, 7]
    });

    Object.keys(worldData).forEach(continente => {
        Object.keys(worldData[continente]).forEach(sub => {
            const destinos = worldData[continente][sub];
            
            destinos.forEach(destino => {
                const coords = cityCoordinates[destino.name];
                
                if (coords) {
                    const marker = L.marker(coords, { icon: neonIcon }).addTo(map);
                    
                    // Correção Importante: Protegendo o nome com aspas simples escapadas
                    // e chamando a função window.openMapCity
                    const safeName = destino.name.replace(/'/g, "\\'"); 

                    const popupContent = `
                        <div class="pin-card" onclick="window.openMapCity('${safeName}')">
                            <img src="${destino.imagem || 'https://via.placeholder.com/60'}" class="pin-img">
                            <div class="pin-info">
                                <h4>${destino.name}</h4>
                                <span>${sub} <i class="ri-arrow-right-line"></i></span>
                            </div>
                        </div>
                    `;
                    
                    marker.bindPopup(popupContent);
                }
            });
        });
    });
}

// Inicialização
document.addEventListener('DOMContentLoaded', async () => {
    if(typeof init === 'function') await init(); 
    initMap();
});