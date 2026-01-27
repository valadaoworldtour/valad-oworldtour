// --- CONFIGURAÇÃO GLOBAL ---
const countryFlags = { "Brasil": "br", "Portugal": "pt", "Marrocos": "ma", "Japão": "jp", "Austrália": "au", "Estados Unidos": "us", "Argentina": "ar", "Espanha": "es", "França": "fr" };
const defaultImage = "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop";
/* BANCO DE DADOS COMPLETO */
const worldData = {
    "América do Sul": {
        "Brasil": [
            {
                name: "Rio de Janeiro",
                imagem: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=2070&auto=format&fit=crop",
                tags: ["Praia", "Cartão Postal", "Agito"],
                mapa: "https://goo.gl/maps/rio",
                clima: "Tropical Atlântico. Verão 40ºC e Inverno ameno.",
                
                pontos_turisticos: [
                    "1. Cristo Redentor: Uma das 7 Maravilhas. Compre ingresso antecipado do trem.",
                    "2. Pão de Açúcar: Suba no final da tarde para ver o pôr do sol mais lindo do mundo.",
                    "3. Copacabana & Ipanema: Caminhe no calçadão e aplauda o sol no Arpoador.",
                    "4. Escadaria Selarón: A obra de arte a céu aberto mais famosa da Lapa.",
                    "5. Jardim Botânico: Palmeiras imperiais e muita paz no meio da cidade.",
                    "6. Museu do Amanhã: Arquitetura futurista na Zona Portuária (Porto Maravilha).",
                    "7. Maracanã: O templo do futebol. O tour é obrigatório para quem ama esportes.",
                    "8. Parque Lage: Café da manhã em um palacete histórico aos pés do Corcovado.",
                    "9. Santa Teresa: O bairro boêmio com bondinho amarelo e ateliês de arte.",
                    "10. Pedra da Gávea: A trilha mais cobiçada para fotos radicais (exige preparo)."
                ],

                gastronomia: [
                    "1. Feijoada Completa: Sextas e sábados são os dias oficiais da feijoada com samba.",
                    "2. Biscoito Globo e Mate: O lanche praiano patrimônio cultural (Salgado ou Doce).",
                    "3. Caipirinha: Nos quiosques da orla, feita com frutas frescas.",
                    "4. Podrão da Lapa: Sanduíche de rua com tudo dentro para fechar a noite.",
                    "5. Açaí: O combustível do carioca, servido com granola e banana.",
                    "6. Filé à Oswaldo Aranha: Filé com muito alho frito, arroz e farofa.",
                    "7. Bolinho de Feijoada: Petisco genial criado nos botecos cariocas.",
                    "8. Camarão no Espeto: Clássico da praia (compre em barracas fixas).",
                    "9. Joelho: Salgado de queijo e presunto (conhecido como italiano em SP).",
                    "10. Sopa Leão Veloso: Caldo de frutos do mar histórico."
                ],
// TOP 10 CULTURA & RELIGIÃO
                religiao: [
                    "1. Cristo Redentor: O maior símbolo do Cristianismo no Brasil, de braços abertos sobre a Guanabara.",
                    "2. São Jorge (O Santo Guerreiro): É imensamente popular no Rio. Dia 23 de abril é feriado estadual e tem festas gigantes.",
                    "3. Sincretismo Religioso: O Rio é o berço da mistura. Muitos católicos também frequentam centros espíritas ou de umbanda.",
                    "4. Candomblé e Umbanda: Religiões de matriz africana têm raízes profundas na cultura carioca (ex: roupas brancas na sexta-feira).",
                    "5. Festa de Iemanjá: No Réveillon, é tradição quase obrigatória pular 7 ondas e jogar flores ao mar para a Rainha do Mar.",
                    "6. Catedral Metropolitana: Um cone gigante e moderno no centro, inspirado nas pirâmides maias, diferente de tudo que você já viu.",
                    "7. Igreja da Penha: Famosa pelos seus 382 degraus esculpidos na pedra, onde fiéis sobem de joelhos pagando promessas.",
                    "8. Mosteiro de São Bento: Um oásis de silêncio no centro. O interior é todo folheado a ouro e tem missas com Canto Gregoriano.",
                    "9. O Samba como Religião: As quadras das Escolas de Samba são chamadas de 'Terreiros' e tratadas com respeito sagrado pela comunidade.",
                    "10. Templo da Humanidade: O Rio abriga o único templo Positivista do mundo que segue preservado (Religião da Humanidade)."
                ],
                curiosidades: [
                    "1. Céu Mais Azul: O Rio tem o céu considerado o mais azul do mundo por cientistas.",
                    "2. Capital Europeia: Foi a única capital europeia fora da Europa (1808).",
                    "3. Floresta Urbana: A Tijuca é a maior floresta urbana replantada do mundo.",
                    "4. Carioca: O nome vem do Tupi 'Casa do homem branco'.",
                    "5. Carnaval: O Cordão da Bola Preta arrasta mais de 1 milhão de pessoas.",
                    "6. Rock in Rio: Nasceu aqui em 1985 e é o maior festival do mundo.",
                    "7. Ponte Rio-Niterói: Maior ponte de concreto do hemisfério sul (13km).",
                    "8. Oscar Niemeyer: Projetou o Sambódromo em tempo recorde.",
                    "9. Capital Federal: Foi a capital do Brasil até 1960.",
                    "10. Bossa Nova: Nasceu nos apartamentos de Copacabana e Ipanema."
                ],

                // NOVA LISTA: 10 ITENS DE EVENTOS E ESTAÇÕES
                eventos_estacoes: [
                    "1. Verão (Dez-Mar): Calor de 40ºC, praias lotadas e vida noturna intensa.",
                    "2. Inverno (Jun-Set): Ameno (20ºC), pouca chuva, ideal para passear.",
                    "3. Réveillon de Copacabana: A maior festa de Ano Novo do planeta.",
                    "4. Carnaval (Sambódromo): O desfile oficial das escolas de samba.",
                    "5. Carnaval de Rua: Blocos gratuitos por toda a cidade em Fevereiro.",
                    "6. Rock in Rio: Acontece a cada 2 anos (Setembro/Outubro).",
                    "7. Primavera (Set-Dez): Cidade florida, perfeita para o Jardim Botânico.",
                    "8. Bienal do Livro: Grande evento cultural no Riocentro.",
                    "9. Festas Juninas: A Feira de São Cristóvão tem a melhor festa nordestina.",
                    "10. Temporada de Baleias: No inverno, é possível avistar baleias na costa."
                ],

                // NOVA LISTA: 10 ITENS DE INFO GERAIS
                info_gerais: [
                    "1. Moeda: Real Brasileiro (BRL).",
                    "2. Voltagem: 110v / 127v (Atenção! Diferente da maioria do Brasil).",
                    "3. Tomada: Tipo N (3 pinos, padrão brasileiro).",
                    "4. DDD: 21.",
                    "5. População: Aprox. 6.7 milhões de habitantes.",
                    "6. Gentílico: Quem nasce na cidade é Carioca; no estado é Fluminense.",
                    "7. Aeroportos: Galeão (GIG - Internacional) e Santos Dumont (SDU - Centro).",
                    "8. Água: Evite beber da torneira. Prefira mineral.",
                    "9. Uber/Táxi: Funcionam muito bem. Evite táxis sem taxímetro.",
                    "10. Gorjeta: 10% é o padrão em restaurantes (opcional)."
                ],

                // TOP 10 DICAS ANTES DE IR (RIO DE JANEIRO)
                antes_de_ir: [
                    "1. Segurança no Centro: Evite andar com correntes de ouro, relógios caros ou celular na mão em áreas movimentadas do Centro e Lapa.",
                    "2. Ingressos Antecipados: Compre o trem do Corcovado e o Bondinho do Pão de Açúcar online. As filas na hora são imensas.",
                    "3. Transporte Seguro: O Metrô Rio é excelente, seguro e limpo. Uber também funciona muito bem. Evite ônibus à noite se não conhecer o trajeto.",
                    "4. O Sol Queima: Mesmo nublado, o sol do Rio é forte. Protetor solar é item de sobrevivência, não vaidade.",
                    "5. Aeroportos: O Santos Dumont (SDU) fica no centro (lindo pouso). O Galeão (GIG) é longe (internacional). Calcule o tempo de deslocamento.",
                    "6. Voltagem 110V: Atenção! Diferente de muitas cidades do Brasil (que são 220V), o Rio é 110V/127V. Cuidado com secadores e chapinhas.",
                    "7. Água da Bica: Evite beber água da torneira ou de filtros duvidosos. O calor exige hidratação, mas prefira água mineral lacrada.",
                    "8. Vestimenta: O carioca é super informal. Chinelo e bermuda são aceitos em quase todos os lugares (exceto repartições públicas e locais de luxo).",
                    "9. Praia à Noite: Evite ficar na areia da praia em trechos escuros ou desertos durante a madrugada.",
                    "10. Natureza: Se for fazer trilhas, leve água, vá em grupo e respeite os animais (não alimente os micos, por mais fofos que sejam)."
                ],
                // --- NOVO: NÚMEROS IMPORTANTES ---
                numeros: [
                    "1. 190 (Polícia Militar): Emergências imediatas, assaltos ou perigo iminente.",
                    "2. (21) 2332-2924 (DEAT): Delegacia Especial de Apoio ao Turismo. Fica no Leblon, atendimento bilíngue.",
                    "3. 192 (SAMU): Ambulância para urgências médicas e acidentes na rua.",
                    "4. 193 (Bombeiros): Incêndios, resgates e acidentes de trânsito com vítimas.",
                    "5. 1746 (Prefeitura do Rio): Canal direto para reclamações de serviços urbanos e informações.",
                    "6. (21) 3004-6050 (Aeroporto Galeão): Informações sobre voos internacionais e achados e perdidos.",
                    "7. (21) 3814-7500 (Aeroporto Santos Dumont): Informações sobre voos domésticos e serviços.",
                    "8. 180 (Central da Mulher): Denúncias e apoio em casos de violência contra a mulher.",
                    "9. 151 (Procon): Para denunciar preços abusivos ou problemas graves com estabelecimentos.",
                    "10. 191 (Polícia Rodoviária): Emergências se você estiver nas estradas federais chegando ou saindo do Rio."
                ],
                links: {
                    hotel: "https://www.booking.com/searchresults.pt-br.html?city=-666610&aid=304142", 
                    passeio: "https://www.civitatis.com/br/rio-de-janeiro/", 
                    seguro: "https://www.segurospromo.com.br" 
                }
            },
            {
                name: "São Paulo",
               imagem: "https://images.unsplash.com/photo-1543059080-f9b1272213d5?q=80&w=2069&auto=format&fit=crop",
                tags: ["Urbano", "Gastronomia", "Cultura"],
                mapa: "https://goo.gl/maps/saopaulo",
                clima: "Subtropical. Conhecida como 'Terra da Garoa', mas o tempo muda rápido.",
                
                // TOP 10 PONTOS TURÍSTICOS
                pontos_turisticos: [
                    "1. Avenida Paulista: O coração financeiro e cultural. Aos domingos fecha para carros e vira um parque.",
                    "2. Parque Ibirapuera: O 'Central Park' paulistano. Perfeito para caminhar, ver museus e arquitetura de Niemeyer.",
                    "3. Beco do Batman: Uma galeria de grafite a céu aberto na Vila Madalena, o bairro mais boêmio.",
                    "4. Mercado Municipal (Mercadão): Templo da gastronomia. Famoso pelas frutas exóticas e sanduíches gigantes.",
                    "5. Pinacoteca do Estado: O museu mais antigo da cidade, com arquitetura incrível e acervo brasileiro impecável.",
                    "6. Bairro da Liberdade: O maior reduto japonês fora do Japão. Lanternas vermelhas, comida asiática e karaokês.",
                    "7. Catedral da Sé: Uma das cinco maiores igrejas neogóticas do mundo, marco zero da cidade.",
                    "8. MASP: O Museu de Arte de São Paulo, famoso pelo seu vão livre gigante na Paulista.",
                    "9. Farol Santander: A melhor vista panorâmica do centro histórico (antigo prédio do Banespa).",
                    "10. Estação da Luz e Museu da Língua Portuguesa: História e arquitetura deslumbrante no centro."
                ],

                // TOP 10 GASTRONOMIA (Capital Mundial da Gastronomia)
                gastronomia: [
                    "1. Pizza Paulistana: Dizem ser a melhor do mundo. Massa média, borda alta e muito recheio.",
                    "2. Sanduíche de Mortadela: O clássico do Mercadão, com 300g de mortadela Ceratti.",
                    "3. Pastel de Feira: Acompanhado de caldo de cana. É uma instituição sagrada em SP.",
                    "4. Virado à Paulista: O prato oficial do estado (arroz, tutu de feijão, bisteca, ovo, couve e banana).",
                    "5. Coxinha: A rainha dos salgados. As das padarias 24h são lendárias.",
                    "6. Comida Japonesa (Liberdade): Sushis e lámens autênticos, muitas vezes melhores que no Japão.",
                    "7. Padarias Artesanais: O paulistano ama 'pão na chapa com média' no café da manhã.",
                    "8. Cantinas Italianas: No Bixiga, massas frescas e fartas servidas com música ao vivo.",
                    "9. Hambúrguer Gourmet: SP vive uma febre de hamburguerias artesanais de altíssimo nível.",
                    "10. Alta Gastronomia: A cidade concentra a maioria dos restaurantes com estrelas Michelin do Brasil."
                ],

                // TOP 10 CURIOSIDADES
                curiosidades: [
                    "1. Maior do Hemisfério: É a maior cidade do Hemisfério Sul e das Américas.",
                    "2. Cidade que não dorme: Existem padarias, academias e mercados abertos 24h por dia.",
                    "3. Helicópteros: Tem a maior frota de helicópteros urbanos do mundo (vence Nova York).",
                    "4. Japão Brasileiro: Tem a maior população de japoneses fora do Japão.",
                    "5. Pizza Gigante: Consome-se mais de 1 milhão de pizzas por dia na cidade.",
                    "6. Diversidade: É possível ouvir mais de 70 idiomas diferentes caminhando pelo centro.",
                    "7. Terra da Garoa: O apelido vem do chuvisco constante que era comum décadas atrás.",
                    "8. Arranha-céus: Possui mais de 6.000 prédios com mais de 10 andares.",
                    "9. Metrô Lotado: A estação Sé é uma das mais movimentadas do mundo nos horários de pico.",
                    "10. Café: A riqueza da cidade foi construída historicamente sobre a exportação de café."
                ],

                // TOP 10 CULTURA & RELIGIÃO
                religiao: [
                    "1. Catedral da Sé: O maior templo católico da cidade, com criptas subterrâneas visitáveis.",
                    "2. Templo de Salomão: Uma réplica gigantesca do templo bíblico, sede da Igreja Universal.",
                    "3. Mesquita Brasil: A primeira mesquita construída na América Latina (Cambuci).",
                    "4. Templo Zu Lai: O maior templo budista da América Latina (fica na região metropolitana).",
                    "5. Sinagogas de Higienópolis: O bairro concentra uma grande e tradicional comunidade judaica.",
                    "6. Mosteiro de São Bento: Famoso pelas missas com Canto Gregoriano e pelos pães dos monges.",
                    "7. Diversidade Protestante: Igrejas evangélicas de todas as denominações em cada esquina.",
                    "8. Espiritismo: Forte presença de centros espíritas kardecistas.",
                    "9. Religiões Afro: Umbanda e Candomblé têm forte representatividade cultural.",
                    "10. Igreja Ortodoxa: Belíssimas igrejas da comunidade russa e armênia próximas ao Paraíso."
                ],

                // TOP 10 EVENTOS E ESTAÇÕES
                eventos_estacoes: [
                    "1. Fórmula 1 (GP Brasil): Acontece em Interlagos (Nov), atraindo turistas do mundo todo.",
                    "2. Lollapalooza: Festival de música gigante no Autódromo (Março/Abril).",
                    "3. Parada do Orgulho LGBT+: A maior do mundo, lota a Avenida Paulista (Junho).",
                    "4. Virada Cultural: 24 horas de shows gratuitos espalhados pela cidade.",
                    "5. Bienal de Arte: Acontece a cada 2 anos no Ibirapuera, referência mundial.",
                    "6. São Paulo Fashion Week: O maior evento de moda da América Latina.",
                    "7. Carnaval de Rua: Cresceu muito e hoje rivaliza com Rio e Salvador em tamanho.",
                    "8. Mostra Internacional de Cinema: Para os amantes da sétima arte (Outubro).",
                    "9. Natal na Paulista: Decoração de luzes e shows gratuitos em Dezembro.",
                    "10. Restaurant Week: Festivais gastronômicos com preços promocionais ocorrem duas vezes ao ano."
                ],

                // TOP 10 INFO GERAIS
                info_gerais: [
                    "1. DDD: 11.",
                    "2. Voltagem: 110V (mas hotéis costumam ter 220V, sempre cheque a tomada).",
                    "3. População: Mais de 12 milhões (cidade) e 22 milhões (Grande SP).",
                    "4. Aeroportos: Guarulhos (GRU - Internacional/Longe) e Congonhas (CGH - Doméstico/Centro).",
                    "5. Trânsito: Famoso pelos engarrafamentos. Evite horários de pico (8h e 18h).",
                    "6. Metrô: Limpo, seguro e eficiente, mas não cobre a cidade toda.",
                    "7. Moeda: Real (BRL). Cartão é aceito até pelo vendedor ambulante.",
                    "8. Água: Potável, mas com gosto de cloro. Prefira filtro ou mineral.",
                    "9. Uber: Essencial para se locomover fora da rota do metrô.",
                    "10. Clima: 'Quatro estações em um dia'. Saia sempre com guarda-chuva e casaco."
                ],

                // TOP 10 DICAS ANTES DE IR
                antes_de_ir: [
                    "1. Bilhete Único/TOP: Compre o cartão de transporte nas estações para integrar metrô e ônibus.",
                    "2. Segurança: Cuidado com o 'gangue da bicicleta' na Paulista e Centro. Não use celular na borda da calçada.",
                    "3. Reservas: Restaurantes famosos têm filas de horas. Reserve com antecedência.",
                    "4. Aeroporto GRU: Fica em outra cidade (Guarulhos). Saia com 3h ou 4h de antecedência devido ao trânsito.",
                    "5. Museus Grátis: Quase todos os museus têm um dia de entrada gratuita (geralmente terça ou quarta).",
                    "6. Paulista Aberta: Aos domingos, a Av. Paulista é só para pedestres. Melhor dia para visitar.",
                    "7. Roupas: O estilo é urbano e casual, mas leve um casaco leve mesmo no verão.",
                    "8. Aplicativos: Baixe o 'Moovit' para transporte e 'iFood' para delivery (funciona 24h).",
                    "9. Hospedagem: Ficar perto de uma estação de metrô (Linha Verde ou Amarela) facilita a vida.",
                    "10. Finais de Semana: A cidade fica mais vazia e o trânsito flui bem melhor (exceto áreas de balada)."
                ],
                // --- NOVO: NÚMEROS IMPORTANTES (SÃO PAULO) ---
                numeros: [
                    "1. 190 (Polícia Militar): Emergência policial, assaltos ou situações de risco.",
                    "2. (11) 3120-4500 (DEATUR): Delegacia Especializada no Atendimento ao Turista.",
                    "3. 192 (SAMU): Ambulância pública para acidentes e emergências médicas.",
                    "4. 193 (Bombeiros): Incêndios, resgates e acidentes com vítimas presas.",
                    "5. 156 (Prefeitura de SP): Informações sobre ônibus, trânsito e serviços municipais.",
                    "6. 199 (Defesa Civil): Para casos de alagamentos ou desabamentos em chuvas fortes.",
                    "7. (11) 2445-2945 (Aeroporto Guarulhos - GRU): Informações de voos e achados e perdidos.",
                    "8. (11) 5090-9000 (Aeroporto Congonhas - CGH): Informações do aeroporto central.",
                    "9. 180 (Central da Mulher): Denúncias e apoio em casos de violência.",
                    "10. 0800 770 7722 (Metrô SP): Informações sobre linhas, estações e objetos perdidos."
                ],
                
                // SEUS LINKS DE AFILIADO (ID 304142)
                links: {
                    hotel: "https://www.booking.com/searchresults.pt-br.html?city=-671824&aid=304142", 
                    passeio: "https://www.civitatis.com/br/sao-paulo/", 
                    seguro: "https://www.segurospromo.com.br" 
                }
            },
           {
                name: "Gramado",
                imagem: "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/02/passagens-aereas-gramado-capa2019-01.jpg",
                tags: ["Romance", "Frio", "Chocolate"],
                mapa: "https://goo.gl/maps/gramado",
                clima: "Temperado. Invernos rigorosos (pode gear) e verões amenos.",
                
                // TOP 10 PONTOS TURÍSTICOS
                pontos_turisticos: [
                    "1. Lago Negro: O cartão-postal da cidade. Caminhe ao redor, ande de pedalinho e aprecie as hortênsias.",
                    "2. Mini Mundo: Um parque a céu aberto com réplicas fiéis de prédios do mundo todo, 24x menores que o real.",
                    "3. Snowland: O primeiro parque de neve indoor das Américas. Esqui, patinação e neve de verdade o ano todo.",
                    "4. Rua Coberta: O charme do centro. Restaurantes, lojas e eventos protegidos por um telhado de vidro.",
                    "5. Igreja Matriz São Pedro: Famosa por sua arquitetura em pedra basalto e os 12 apóstolos na frente.",
                    "6. Fonte do Amor Eterno: Inspirada na Pont des Arts de Paris, onde casais prendem cadeados com seus nomes.",
                    "7. Rua Torta: Uma ladeira sinuosa e florida (Rua Emílio Sorgetz) perfeita para fotos divertidas.",
                    "8. Mundo a Vapor: Um museu interativo sobre a era das máquinas, com a famosa fachada do trem pendurado.",
                    "9. Fábricas de Chocolate: Visitar a Prawer ou Florybal para ver a produção artesanal é obrigatório.",
                    "10. Pórticos de Gramado: As entradas da cidade (via Nova Petrópolis ou Taquara) são lindas construções bávaras."
                ],

                // TOP 10 GASTRONOMIA
                gastronomia: [
                    "1. Sequência de Fondue: O clássico da serra. Queijo, Carne (na pedra) e Chocolate, tudo à vontade.",
                    "2. Café Colonial: Uma refeição que vale por três. Mesas fartas com pães, bolos, tortas, frios e bebidas.",
                    "3. Galeto ao Primo Canto: Franguinho assado na brasa, servido com polenta, massas e salada de maionese.",
                    "4. Chocolate Artesanal: O melhor do Brasil. Chocolate quente cremoso no frio é lei.",
                    "5. Culinária Alemã: Experimente o Joelho de Porco (Eisbein) com chucrute e batatas.",
                    "6. Massas Italianas: A herança italiana é forte, com rodízios de massas e risotos incríveis.",
                    "7. Apfelstrudel: Torta de maçã tradicional, servida quente com nata ou sorvete de creme.",
                    "8. Cuca: Um bolo típico alemão com farofa doce em cima, recheado de frutas ou doce de leite.",
                    "9. Churrasco Gaúcho: As churrascarias de luxo em Gramado oferecem cortes nobres e serviço impecável.",
                    "10. Truta: Peixe de água doce muito comum na região, geralmente servido com molho de amêndoas."
                ],

                // TOP 10 CURIOSIDADES
                curiosidades: [
                    "1. Sem Semáforos: Gramado praticamente não tem semáforos. Os motoristas param religiosamente na faixa.",
                    "2. Natal Luz: É um dos maiores eventos natalinos do mundo, durando mais de 3 meses.",
                    "3. Kikito: O troféu do Festival de Cinema de Gramado é o 'Oscar' brasileiro, e tem uma estátua dele na cidade.",
                    "4. Hortênsias: São o símbolo da região, florescendo e colorindo as estradas de azul na primavera/verão.",
                    "5. Neve no Brasil: É uma das poucas cidades brasileiras onde há chance real de nevar no inverno.",
                    "6. Colonização: A cidade é uma mistura única das culturas alemã, italiana e portuguesa.",
                    "7. Sem Fios: No centro, toda a fiação elétrica é subterrânea, deixando a paisagem limpa e bonita.",
                    "8. Gramado Zoo: Um zoológico que só tem animais da fauna brasileira e foca no bem-estar animal (sem jaulas).",
                    "9. Cidade Jardim: A prefeitura investe pesado em paisagismo, trocando as flores de acordo com a estação.",
                    "10. Arquitetura Bavára: O estilo enxaimel é lei em muitas construções para manter a estética europeia."
                ],

                // TOP 10 CULTURA & RELIGIÃO
                religiao: [
                    "1. Igreja Matriz São Pedro: O coração católico da cidade, construída com 78 mil pedras de basalto.",
                    "2. Igreja do Relógio: Templo luterano no alto de uma colina, com uma vista linda e hortênsias ao redor.",
                    "3. Caminho da Cruz: Uma Via Sacra ao ar livre perto da Igreja Matriz.",
                    "4. Gruta N. Sra. de Lourdes: Um local de silêncio e oração encravado na natureza.",
                    "5. Capela Santa Rita de Cássia: Pequena e histórica, ideal para momentos de reflexão.",
                    "6. Herança Luterana: A forte imigração alemã trouxe o protestantismo, que convive bem com o catolicismo.",
                    "7. Tapetes de Corpus Christi: A comunidade enfeita as ruas com serragem colorida e flores.",
                    "8. Procissão de Ramos: Evento tradicional que movimenta a cidade antes da Páscoa.",
                    "9. Sino Eletrônico: Os sinos da Igreja Matriz tocam melodias famosas em horários pontuais.",
                    "10. Festas de Padroeiros: As comunidades do interior (linhas) fazem festas com muita comida e música típica."
                ],

                // TOP 10 EVENTOS E ESTAÇÕES
                eventos_estacoes: [
                    "1. Natal Luz (Out-Jan): Shows, desfiles e luzes transformam a cidade na casa do Papai Noel.",
                    "2. Festival de Cinema (Agosto): O tapete vermelho mais famoso do Brasil, com celebridades e filmes inéditos.",
                    "3. Páscoa em Gramado (Mar/Abr): Decoração temática de chocolate e paradas lúdicas na avenida.",
                    "4. Festa da Colônia (Abril/Maio): Celebração das raízes alemãs e italianas com muita comida típica barata.",
                    "5. Inverno (Jun-Ago): Alta temporada. Frio, neblina, lareira e vinhos. Prepare o bolso.",
                    "6. Primavera (Set-Nov): A época das hortênsias. A cidade fica azul e rosa. Clima agradável.",
                    "7. Festival de Cultura e Gastronomia (Setembro): Chefs renomados criam pratos de rua sofisticados.",
                    "8. Gramado in Concert (Fevereiro): Festival internacional de música clássica.",
                    "9. Outono (Mar-Jun): O 'veranico' de maio traz dias quentes e noites frias. As árvores plátanos ficam alaranjadas.",
                    "10. Vindima (Fev-Mar): Época da colheita da uva, com festas nas vinícolas da região."
                ],

                // TOP 10 INFO GERAIS
                info_gerais: [
                    "1. Voltagem: 220V (Atenção! A maioria do Brasil é 110V/127V).",
                    "2. DDD: 54.",
                    "3. Aeroportos: Salgado Filho (Porto Alegre - 2h de viagem) ou Caxias do Sul (45min, mas com neblina).",
                    "4. Uber/99: Funcionam bem na cidade e para ir até Canela.",
                    "5. Bustour: Ônibus turístico de dois andares (Hop-on Hop-off) que conecta Gramado e Canela.",
                    "6. Clima: Pode fazer 30ºC de dia e 10ºC à noite no mesmo dia. O tempo muda rápido.",
                    "7. Segurança: Uma das cidades mais seguras do Brasil. Pode andar na rua à noite tranquilamente.",
                    "8. Moeda: Real (BRL). Aceita-se cartão em tudo.",
                    "9. Taxa de Turismo: Hotéis cobram uma pequena taxa diária (opcional, mas comum) para manutenção da cidade.",
                    "10. Internet: 4G/5G funcionam bem no centro, mas oscilam nas áreas rurais (Linhas)."
                ],

                // TOP 10 DICAS ANTES DE IR
                antes_de_ir: [
                    "1. Reservas: Restaurantes famosos de Fondue têm filas de espera de 2h. Reserve antes.",
                    "2. Natal Luz: Compre os ingressos dos shows pagos (Nativitaten, Grande Desfile) meses antes.",
                    "3. Roupas: Leve casaco SEMPRE. Mesmo no verão, a noite pode esfriar na serra.",
                    "4. Carro ou Transfer?: Carro dá liberdade, mas estacionar no centro é caro e difícil. Uber sai mais barato.",
                    "5. Canela: A cidade vizinha é colada (7km). Visite a Catedral de Pedra e o Parque do Caracol.",
                    "6. Pedágios: Se vier de carro de Porto Alegre, prepare-se para pedágios na rota.",
                    "7. Neblina: A serra costuma ter neblina densa à noite. Cuidado redobrado na estrada.",
                    "8. Alta Temporada: Julho, Novembro e Dezembro são meses caros e lotados.",
                    "9. Calçados: Você vai andar muito. Esqueça salto alto nas ruas de paralelepípedo.",
                    "10. Chocolate: Deixe espaço na mala para trazer chocolates. É impossível resistir."
                ],
                // --- NOVO: NÚMEROS IMPORTANTES (GRAMADO) ---
                numeros: [
                    "1. 190 (Brigada Militar): Emergência policial (no Rio Grande do Sul a PM chama-se Brigada).",
                    "2. (54) 3286-0200 (Hospital Arcanjo São Miguel): O principal hospital da cidade (atende urgências 24h).",
                    "3. 192 (SAMU): Ambulância para emergências médicas graves.",
                    "4. 193 (Bombeiros): Incêndios e resgates.",
                    "5. (54) 3286-9533 (Secretaria de Turismo): Informações oficiais e apoio ao visitante.",
                    "6. (54) 3286-1070 (Rodoviária de Gramado): Informações sobre horários de ônibus intermunicipais.",
                    "7. (54) 3295-1795 (Delegacia de Polícia Civil): Para registrar ocorrências e perda de documentos.",
                    "8. 191 (Polícia Rodoviária Federal): Emergências na estrada (Rota Romântica) vindo de Porto Alegre.",
                    "9. 156 (Fala Cidadão): Prefeitura de Gramado (dúvidas sobre a cidade e trânsito).",
                    "10. (54) 3286-8800 (Rádio Táxi Gramado): Serviço de transporte seguro 24 horas."
                ],
                // SEUS LINKS DE AFILIADO (ID 304142)
                links: {
                    hotel: "https://www.booking.com/searchresults.pt-br.html?city=-644910&aid=304142", 
                    passeio: "https://www.civitatis.com/br/gramado/", 
                    seguro: "https://www.segurospromo.com.br" 
                }
            },
            {
                name: "Foz do Iguaçu",
                tags: ["Natureza", "Aventura", "Fronteira"],
                imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Sunset_over_Iguazu2.jpg/960px-Sunset_over_Iguazu2.jpg",
                mapa: "https://goo.gl/maps/foz",
                clima: "Subtropical. Verões quentes e invernos amenos (mas pode fazer frio!).",
                
                // TOP 10 PONTOS TURÍSTICOS
                pontos_turisticos: [
                    "1. Cataratas do Iguaçu (Brasil): A vista panorâmica mais bonita. A trilha leva até a 'Garganta do Diabo'.",
                    "2. Parque das Aves: O maior viveiro de aves da América Latina. Tucanos e araras voam sobre sua cabeça.",
                    "3. Itaipu Binacional: Visita à maior usina geradora de energia do mundo. O tour panorâmico é grandioso.",
                    "4. Marco das Três Fronteiras: O encontro mágico entre Brasil, Argentina e Paraguai, com show de luzes ao pôr do sol.",
                    "5. Macuco Safari: Aventura radical de barco que sobe o rio e entra debaixo das quedas d'água (molha muito!).",
                    "6. Cataratas (Lado Argentino): Outra perspectiva. Trilhas mais longas e passarelas que ficam em cima das quedas.",
                    "7. Templo Budista Chen Tien: Um pedaço da Ásia no Paraná. Jardins zen e mais de 120 estátuas.",
                    "8. Dreamland (Museu de Cera): Diversão para família com réplicas perfeitas de famosos e cenários de filmes.",
                    "9. Yup Star (Roda Gigante): Uma das maiores da América Latina, com vista para os 3 países.",
                    "10. Mesquita Omar Ibn Al-Khattab: Uma construção belíssima que mostra a força da comunidade árabe na cidade."
                ],

                // TOP 10 GASTRONOMIA
                gastronomia: [
                    "1. Pirá de Foz: O prato típico oficial. Peixe surubim com molho de gengibre e purê de mandioca.",
                    "2. Churrasco (Brasil e Argentina): A região tem carnes de elite. O 'Bife de Chorizo' argentino é obrigatório.",
                    "3. Shawarma: Devido à grande colônia árabe, é o lanche de rua mais popular (pão sírio recheado).",
                    "4. Chipa Paraguaia: O 'pão de queijo' do Paraguai, feito com polvilho e queijo, em formato de ferradura.",
                    "5. Peixes do Rio Paraná: Dourado e Pacu assados na brasa são clássicos da região.",
                    "6. Comida Árabe Autêntica: Restaurantes libaneses de altíssimo nível, com homus, kibe cru e esfihas.",
                    "7. Doce de Leite Argentino: Em Puerto Iguazú, é item obrigatório de compra e sobremesa.",
                    "8. Empanadas Argentinas: Pastel de forno com recheios variados (carne cortada na faca é a melhor).",
                    "9. Tereré: Bebida típica gelada de erva-mate, muito consumida devido ao calor.",
                    "10. Jantar Show (Rafain): Churrascaria famosa que serve jantar com show de danças latino-americanas."
                ],

                // TOP 10 CURIOSIDADES
                curiosidades: [
                    "1. Tríplice Fronteira: É um dos poucos lugares do mundo onde você pode estar em 3 países no mesmo dia.",
                    "2. Volume de Água: As Cataratas têm o maior fluxo médio de água do mundo (1.5 milhão de litros por segundo).",
                    "3. Energia Gigante: A energia gerada por Itaipu poderia abastecer o mundo inteiro por 2 dias.",
                    "4. Lenda Indígena: Diz a lenda que as quedas foram criadas por uma serpente gigante (M'Boi) furiosa de amor.",
                    "5. Comunidade Árabe: Foz tem a 2ª maior comunidade árabe do Brasil, perdendo apenas para SP.",
                    "6. Sete Maravilhas: As Cataratas foram eleitas uma das 7 Maravilhas Naturais do Mundo.",
                    "7. Ponte da Amizade: É a fronteira mais movimentada do Brasil (milhares de pessoas cruzam para o Paraguai todo dia).",
                    "8. Cidade Cosmopolita: Mais de 80 etnias vivem em harmonia na cidade.",
                    "9. Parque Nacional: É Patrimônio Natural da Humanidade pela UNESCO.",
                    "10. Quatis Ladrões: Cuidado com os quatis no parque! Eles abrem zíperes de mochilas para roubar comida."
                ],

                // TOP 10 CULTURA & RELIGIÃO
                religiao: [
                    "1. Diversidade Única: Católicos, Muçulmanos, Budistas e Espíritas convivem em paz exemplar.",
                    "2. Mesquita Omar Ibn Al-Khattab: Uma das maiores do Brasil. O interior tem arabescos incríveis (precisa usar véu).",
                    "3. Templo Budista Chen Tien: Fica no alto de uma colina com vista para o Paraguai. Tem um Buda de 7 metros.",
                    "4. Catedral São João Batista: O padroeiro da cidade. A festa junina da catedral é famosa.",
                    "5. Comunidade Islâmica: É comum ver mulheres de hijab e ouvir o chamado para oração na região da Mesquita.",
                    "6. Capela da Nossa Senhora de Caacupé: Padroeira do Paraguai, muito venerada na fronteira.",
                    "7. Lendas Guaranis: A cultura indígena local é forte e preservada nas histórias das tribos.",
                    "8. Igrejas Evangélicas: Grande crescimento e presença nos bairros.",
                    "9. Centro de Cultura Árabe: Promove aulas de língua e culinária para integrar a comunidade.",
                    "10. Natal de Águas e Luzes: Evento ecumênico que une a cidade no final do ano."
                ],

                // TOP 10 EVENTOS E ESTAÇÕES
                eventos_estacoes: [
                    "1. Verão (Dez-Mar): Calor intenso (35ºC+) e chuvas rápidas. As cataratas ficam com vazão máxima (barrentas).",
                    "2. Inverno (Jun-Ago): Ameno a frio (10ºC-20ºC). Água mais limpa e definida nas quedas. Ótimo para caminhar.",
                    "3. Natal de Águas e Luzes (Dez): Decoração linda na cidade e na Usina de Itaipu.",
                    "4. Black Friday (Nov): O comércio do Paraguai faz promoções gigantescas.",
                    "5. Meia Maratona das Cataratas: Corrida famosa que passa dentro do Parque Nacional.",
                    "6. Primavera (Set-Nov): Clima agradável e o parque cheio de borboletas.",
                    "7. Festival de Turismo das Cataratas (Jun): Grande evento de negócios do setor.",
                    "8. Outono (Mar-Jun): Considerada por muitos a melhor época (menos calor, menos chuva).",
                    "9. Feriados: A cidade lota. Reserve hotel com antecedência.",
                    "10. Vazão das Águas: Varia o ano todo. Na seca as quedas ficam definidas; na cheia, vira um 'mar' de água."
                ],

                // TOP 10 INFO GERAIS
                info_gerais: [
                    "1. Voltagem: 110V/127V (Diferente de muitas cidades do sul que são 220V).",
                    "2. Moeda: Real (BR), Peso (AR), Guarani (PY) e Dólar (US) são aceitos em quase todo lugar.",
                    "3. Documentos: RG (menos de 10 anos) ou Passaporte para cruzar fronteiras. CNH vale só para dirigir (não serve para imigração em alguns casos).",
                    "4. DDD: 45.",
                    "5. Aeroporto: IGU (Foz do Iguaçu). Tem também o de Puerto Iguazú (IGR) na Argentina.",
                    "6. Compras Paraguai: Cota de isenção é US$ 500 via terrestre (sujeito a mudança, verifique).",
                    "7. Transporte: Uber funciona bem no Brasil. Para cruzar fronteira, melhor usar táxi, transfer ou ônibus internacional.",
                    "8. Carta Verde: Seguro obrigatório para dirigir carro brasileiro na Argentina ou Paraguai.",
                    "9. Clima: Úmido. A sensação térmica no verão é de 'sauna'.",
                    "10. Idioma: Português, mas o 'Portunhol' é a língua não-oficial da fronteira."
                ],

                // TOP 10 DICAS ANTES DE IR
                antes_de_ir: [
                    "1. Capa de Chuva: Leve de casa. No parque custa o triplo e você VAI se molhar na passarela.",
                    "2. Paraguai: Vá de manhã cedo (7h) para evitar filas na ponte e calor. Cuide da bolsa nas ruas cheias.",
                    "3. Lado Argentino: Reserve um dia inteiro. É maior que o lado brasileiro e exige muita caminhada.",
                    "4. Protetor e Repelente: O parque é mata fechada. Tem sol forte e insetos.",
                    "5. Roupas: Tênis confortável é obrigatório. Roupas que secam rápido (Dri-fit) ajudam.",
                    "6. Câmbio: Não troque dinheiro no aeroporto. Casas de câmbio no centro têm cotação melhor.",
                    "7. Itaipu: O passeio 'Circuito Especial' entra dentro da usina (exige calça comprida e sapato fechado).",
                    "8. Quatis: Não coma nada nas trilhas das Cataratas. Os quatis sentem cheiro e atacam em bando.",
                    "9. Duty Free: O Duty Free da Argentina (antes da aduana) é lindo e climatizado, vale o passeio.",
                    "10. Vacina: Tenha a vacina de Febre Amarela em dia (recomendado para áreas de mata)."
                ],
                // --- NOVO: NÚMEROS IMPORTANTES (FOZ DO IGUAÇU) ---
                numeros: [
                    "1. 190 (Polícia Militar): Emergência e segurança pública geral.",
                    "2. (45) 2105-8135 (Polícia Turística): Batalhão especializado no atendimento ao visitante (PMPR).",
                    "3. 192 (SAMU): Urgências médicas, mal súbito e acidentes.",
                    "4. 193 (Bombeiros/SIATE): Resgate de traumas e incêndios.",
                    "5. 0800 045 1516 (Teletur): Central de informações turísticas 24h gratuita.",
                    "6. (45) 3576-5700 (Polícia Federal): Dúvidas sobre imigração, fronteiras e passaportes.",
                    "7. (45) 3521-4200 (Aeroporto IGU): Informações sobre voos e achados e perdidos.",
                    "8. (45) 3522-2590 (Rodoviária Internacional): Ônibus para o Brasil, Paraguai e Argentina.",
                    "9. (45) 3521-1951 (Hospital Municipal): O Padre Germano Lauck é a referência pública de emergência.",
                    "10. (45) 3522-1315 (Aduana/Receita Federal): Informações sobre cotas de compras e impostos na Ponte da Amizade."
                ],
                // SEUS LINKS DE AFILIADO (ID 304142)
                links: {
                    hotel: "https://www.booking.com/searchresults.pt-br.html?city=-643449&aid=304142", 
                    passeio: "https://www.civitatis.com/br/foz-do-iguacu/", 
                    seguro: "https://www.segurospromo.com.br" 
                }
            },
            {
                name: "Florianópolis",
                // FOTO: Ponte Hercílio Luz (Wikimedia - Link Estável)
                imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Morro_da_Cruz%2C_Florian%C3%B3polis_-_SC%2C_Brazil_-_panoramio_%28cropped%29.jpg/1280px-Morro_da_Cruz%2C_Florian%C3%B3polis_-_SC%2C_Brazil_-_panoramio_%28cropped%29.jpg",
                tags: ["Praia", "Ilha da Magia", "Surf"],
                mapa: "https://goo.gl/maps/floripa",
                clima: "Subtropical Úmido. Verões quentes (e chuvosos) e invernos amenos com vento sul gelado.",
                
                // TOP 10 PONTOS TURÍSTICOS
                pontos_turisticos: [
                    "1. Ponte Hercílio Luz: O ícone da cidade. Atravesse a pé no pôr do sol para uma vista incrível.",
                    "2. Ilha do Campeche: O 'Caribe Brasileiro'. Águas cristalinas e areia branca (acesso só de barco).",
                    "3. Lagoa da Conceição: O coração da ilha. Esportes náuticos, dunas de areia e vida noturna agitada.",
                    "4. Jurerê Internacional: O bairro do luxo, mansões sem muros, carrões e baladas famosas (beach clubs).",
                    "5. Santo Antônio de Lisboa: Bairro histórico açoriano, com arquitetura colonial e pôr do sol imperdível.",
                    "6. Praia da Joaquina: Famosa mundialmente pelas dunas (sandboard) e ondas perfeitas para o surf.",
                    "7. Centro Histórico: Mercado Público, a Figueira Centenária e a Catedral Metropolitana.",
                    "8. Mirante do Morro da Cruz: A melhor vista panorâmica da ilha e do continente.",
                    "9. Praia Mole: O point da juventude, surfistas e da comunidade LGBT+. Clima descontraído.",
                    "10. Projeto Tamar: Na Barra da Lagoa, um centro de visitação focado na preservação das tartarugas marinhas."
                ],

                // TOP 10 GASTRONOMIA (Cidade Criativa da UNESCO)
                gastronomia: [
                    "1. Ostras: Floripa é a capital nacional da ostra. Prove gratinada ou in natura no Ribeirão da Ilha.",
                    "2. Sequência de Camarão: Vários pratos de camarão (frito, ao bafo, milanesa) servidos de uma vez.",
                    "3. Tainha Assada: No inverno, é o prato rei. A pesca da tainha é tradição cultural.",
                    "4. Pirão de Peixe: Acompanhamento obrigatório da culinária 'manezinha' (nativa).",
                    "5. Pastel de Berbigão: Clássico do Mercado Público. Berbigão é um molusco típico da região.",
                    "6. Café Colonial: Muito comum nas áreas de colonização alemã próximas, mas forte na ilha também.",
                    "7. Cervejas Artesanais: A região é um polo cervejeiro premiado mundialmente.",
                    "8. Anchova Grelhada: Peixe saboroso e muito comum nos restaurantes pé na areia.",
                    "9. Cucas e Pães: Herança dos colonizadores, encontradas em padarias tradicionais.",
                    "10. Alta Gastronomia: A cidade explodiu com restaurantes de chefs renomados nos últimos anos."
                ],

                // TOP 10 CURIOSIDADES
                curiosidades: [
                    "1. Ilha da Magia: Lendas dizem que bruxas habitavam a ilha e davam festas nas pedras de Itaguaçu.",
                    "2. 42 Praias?: Dizem que são 42, mas os nativos garantem que passa de 100 se contar as pequenas baías.",
                    "3. Manezinho da Ilha: É como se chama quem nasce em Floripa. Eles têm um sotaque rápido e único.",
                    "4. Bernunça: Um bicho folclórico (parece um dragão) que engole crianças nas festas do Boi de Mamão.",
                    "5. Gustavo Kuerten (Guga): O maior tenista do Brasil nasceu e mora aqui.",
                    "6. Ponte Fechada: A Hercílio Luz ficou 28 anos interditada por risco de queda antes de reabrir em 2019.",
                    "7. Duas Cidades: Floripa tem uma parte na Ilha (maioria) e uma parte no Continente.",
                    "8. Renda de Bilro: Tradição trazida pelos Açores, ainda feita por rendeiras na Lagoa e Ribeirão.",
                    "9. Garapuvu: É a árvore símbolo da cidade, usada antigamente para fazer canoas de um tronco só.",
                    "10. Ostravaganza: A cidade produz mais de 90% das ostras consumidas no Brasil."
                ],

                // TOP 10 CULTURA & RELIGIÃO
                religiao: [
                    "1. Festa do Divino: A maior tradição açoriana. Cortejos imperiais e muita comida grátis nas comunidades.",
                    "2. Catedral Metropolitana: No ponto mais alto do centro, belíssima arquitetura colonial.",
                    "3. Procissão do Senhor dos Passos: Uma das maiores manifestações religiosas do sul do país.",
                    "4. Bruxaria e Misticismo: Franklin Cascaes registrou as lendas de bruxas que permeiam a cultura local.",
                    "5. Igrejas de Ribeirão da Ilha: Pequenas capelas de frente para o mar, preservadas desde o séc XVIII.",
                    "6. Iemanjá: O réveillon na ilha é marcado por muitas oferendas ao mar.",
                    "7. Boi de Mamão: Teatro folclórico de rua, mistura de dança e música, amado pelas crianças.",
                    "8. Diversidade: A ilha atrai pessoas do mundo todo, criando um ambiente de tolerância religiosa.",
                    "9. Espiritismo: Forte presença de centros e obras sociais na região.",
                    "10. Capelas de Santo Antônio: O santo casamenteiro é muito venerado nos bairros históricos."
                ],

                // TOP 10 EVENTOS E ESTAÇÕES
                eventos_estacoes: [
                    "1. Verão (Dez-Mar): A cidade lota. Praias cheias, festas em Jurerê e muito trânsito (Fila).",
                    "2. Carnaval: As escolas de samba desfilam na passarela e o 'Bloco dos Sujos' toma o centro.",
                    "3. Ironman Brasil (Maio): A maior prova de triathlon da América Latina acontece em Jurerê.",
                    "4. Fenaostra (Set/Out): Festa Nacional da Ostra, com muita gastronomia e shows.",
                    "5. Inverno (Jun-Ago): Época da Tainha. Praias vazias, dias lindos de céu azul, mas água gelada.",
                    "6. Réveillon: O show de fogos na Ponte Hercílio Luz e na Beira-Mar Norte é espetacular.",
                    "7. Maratona de Floripa (Ago): Corrida plana e rápida que atrai corredores do país todo.",
                    "8. Planeta Atlântida: Festival de música gigante que ocorre no verão (próximo à ilha).",
                    "9. Primavera (Set-Nov): Época de avistar baleias-francas no sul da ilha.",
                    "10. Vento Sul: Fenômeno meteorológico que limpa o céu, esfria a temperatura e arrepia o mar."
                ],

                // TOP 10 INFO GERAIS
                info_gerais: [
                    "1. Voltagem: 220V (Atenção! Maioria dos secadores de SP/RJ vai queimar aqui).",
                    "2. DDD: 48.",
                    "3. Aeroporto: FLN (Florianópolis). O novo terminal é moderno e eficiente.",
                    "4. Transporte: Uber funciona bem. Ônibus são integrados por terminais (TICEN, TIRIO, etc).",
                    "5. Trânsito: No verão, o trânsito para as praias (Norte e Sul) é caótico. Saia cedo.",
                    "6. Segurança: Capital mais segura do Brasil, mas não descuide de celulares na praia.",
                    "7. Água do Mar: É fria! Mesmo no verão, a corrente das Malvinas deixa a água refrescante.",
                    "8. Norte vs Sul: Norte (águas quentes, calmas, luxo); Sul (águas frias, rústico, natureza); Leste (ondas, surf).",
                    "9. Moeda: Real (BRL). Aceita cartão em tudo, até no vendedor de queijo coalho na areia.",
                    "10. Custo: Jurerê é caríssimo. Outras praias têm preços justos. Pesquise antes de sentar."
                ],

                // TOP 10 DICAS ANTES DE IR
                antes_de_ir: [
                    "1. Planeje o Trânsito: Em alta temporada, escolha uma região (Norte ou Sul) e fique nela para não perder horas na fila.",
                    "2. Vento Sul: Se ventar Sul, a praia fica ruim. Vá para o norte da ilha ou passeios culturais.",
                    "3. Ilha do Campeche: Tem cota diária de visitantes. Reserve o barco com antecedência.",
                    "4. Ponte Hercílio Luz: Atravesse a pé. É grátis e a vista é linda, especialmente no fim de tarde.",
                    "5. Uber no Aeroporto: Tem local específico para embarque (piso inferior).",
                    "6. Trilhas: A ilha tem trilhas incríveis (Lagoinha do Leste é a mais famosa/difícil). Leve água.",
                    "7. Praias Impróprias: Confira o relatório de balneabilidade (especialmente Canasvieiras e Ingleses) antes de entrar.",
                    "8. Protetor Solar: O sol do sul queima muito, mesmo com vento fresco.",
                    "9. Dinheiro: Leve espécie para pagar estacionamentos e vendedores de praia (o sinal de máquina pode falhar).",
                    "10. Deixe Limpo: O manezinho cuida muito da natureza. Leve seu lixo embora da praia."
                ],
                // --- NOVO: NÚMEROS IMPORTANTES (FLORIANÓPOLIS) ---
                numeros: [
                    "1. 190 (Polícia Militar): Emergência, segurança pública e policiamento nas praias.",
                    "2. (48) 3665-5700 (DPTUR): Delegacia de Proteção ao Turista (atendimento especializado).",
                    "3. 192 (SAMU): Urgências médicas, mal súbito e acidentes.",
                    "4. 193 (Bombeiros / Salva-Vidas): Incêndios e, principalmente, afogamentos ou resgates no mar/trilhas.",
                    "5. (48) 3331-4000 (Aeroporto Hercílio Luz): Informações de voos e achados e perdidos.",
                    "6. (48) 3212-3035 (Rodoviária Rita Maria): Informações sobre ônibus para outras cidades/estados.",
                    "7. 153 (Guarda Municipal): Trânsito e apoio ao cidadão na ilha.",
                    "8. (48) 3251-9000 (Hospital Celso Ramos): Principal hospital de emergência (trauma) no centro da cidade.",
                    "9. (48) 3025-6868 (Consórcio Fênix): Horários e linhas dos ônibus urbanos (TICEN, TIRIO, etc).",
                    "10. 199 (Defesa Civil): Para emergências em dias de chuva forte (deslizamentos ou alagamentos)."
                ],
                // SEUS LINKS DE AFILIADO (ID 304142)
                links: {
                    hotel: "https://www.booking.com/searchresults.pt-br.html?city=-643260&aid=304142", 
                    passeio: "https://www.civitatis.com/br/florianopolis/", 
                    seguro: "https://www.segurospromo.com.br" 
                }
            },
            {
                name: "Salvador",
                // FOTO: Pelourinho (Wikimedia - Link Estável e Clássico)
                imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Entardecer_elevedor_lacerda.jpg/960px-Entardecer_elevedor_lacerda.jpg",
                tags: ["História", "Axé", "Praia"],
                mapa: "https://goo.gl/maps/salvador",
                clima: "Tropical Quente. Sol o ano todo, com chuvas de Abril a Junho. Vento constante.",
                
                // TOP 10 PONTOS TURÍSTICOS
                pontos_turisticos: [
                    "1. Pelourinho: O centro histórico, patrimônio da UNESCO. Casas coloridas, igrejas e o som do Olodum.",
                    "2. Elevador Lacerda: O primeiro elevador urbano do mundo. Liga a Cidade Alta à Cidade Baixa (vista incrível).",
                    "3. Farol da Barra: O lugar clássico para ver o pôr do sol. Abriga o Museu Náutico.",
                    "4. Igreja do Bonfim: Onde se amarram as fitinhas. A grade colorida é a foto mais tradicional da Bahia.",
                    "5. Mercado Modelo: Artesanato, capoeira e cultura na Cidade Baixa, em frente ao mar.",
                    "6. Igreja de São Francisco: Conhecida como 'Igreja de Ouro'. O interior é coberto por toneladas de ouro barroco.",
                    "7. Praia do Porto da Barra: Eleita uma das melhores do mundo. Águas calmas e cristalinas dentro da cidade.",
                    "8. Casa do Rio Vermelho: A antiga casa onde moraram Jorge Amado e Zélia Gattai. Emocionante e linda.",
                    "9. Ponta de Humaitá: Um visual panorâmico da Baía de Todos os Santos, perfeito para o fim de tarde.",
                    "10. Dique do Tororó: Um lago no meio da cidade com estátuas gigantes dos Orixás flutuando na água."
                ],

                // TOP 10 GASTRONOMIA (Acarajé é Lei!)
                gastronomia: [
                    "1. Acarajé: Bolinho de feijão fradinho frito no dendê. Peça 'quente' (com pimenta) ou 'frio' (sem).",
                    "2. Moqueca Baiana: Feita com azeite de dendê, leite de coco e coentro. A de camarão é a favorita.",
                    "3. Vatapá: Creme amarelo feito de pão, camarão seco e amendoim. Acompanha o acarajé ou pratos.",
                    "4. Cocada: Branca (tradicional) ou Preta (queimada). Vendida em tabuleiros pelas baianas.",
                    "5. Bobó de Camarão: Creme de mandioca (aipim) com camarão e dendê. Super cremoso.",
                    "6. Sorvete da Ribeira: Sorveteria histórica (1931) com sabores de frutas tropicais exóticas.",
                    "7. Lambreta: Molusco típico servido em bares, geralmente cozido no vapor.",
                    "8. Caruru: Quiabo cortadinho com camarão seco e dendê. Comida de santo e de festa.",
                    "9. Cravinho: Bebida típica do Pelourinho (cachaça com cravo e mel). Forte e saborosa.",
                    "10. Pãozinho Delícia: Um pão super macio com queijo, típico das festas de aniversário baianas."
                ],

                // TOP 10 CURIOSIDADES
                curiosidades: [
                    "1. Primeira Capital: Salvador foi a primeira capital do Brasil (de 1549 a 1763).",
                    "2. Roma Negra: É a cidade com maior população negra fora da África, pulsando cultura afro em tudo.",
                    "3. 365 Igrejas?: Diz a lenda que a Bahia tem uma igreja para cada dia do ano (na verdade, são quase 400).",
                    "4. Elevador de Transporte: O Lacerda não é turístico, é transporte público real (custa centavos).",
                    "5. Carnaval: É o maior carnaval de rua do planeta (Guinness Book), com trios elétricos gigantes.",
                    "6. Michael Jackson: O rei do pop gravou o clipe de 'They Don't Care About Us' no Pelourinho com o Olodum.",
                    "7. Baía Gigante: A Baía de Todos os Santos é a segunda maior do mundo (cabe o Rio de Janeiro dentro).",
                    "8. Capoeira: A arte marcial disfarçada de dança nasceu aqui como resistência dos escravizados.",
                    "9. Irmã Dulce: A primeira santa brasileira viveu e fez sua obra de caridade em Salvador.",
                    "10. Axé Music: Gênero musical que nasceu aqui nos anos 80, misturando frevo, reggae e percussão."
                ],

                // TOP 10 CULTURA & RELIGIÃO
                religiao: [
                    "1. Sincretismo: A mistura única. Senhor do Bonfim é associado a Oxalá; Santa Bárbara a Iansã.",
                    "2. Candomblé: A religião de matriz africana é fortíssima. Respeite os Terreiros e as roupas brancas na sexta.",
                    "3. Lavagem do Bonfim: Uma festa religiosa onde baianas lavam as escadarias da igreja com água de cheiro.",
                    "4. Festa de Iemanjá (02/Fev): Milhares de pessoas levam flores e presentes para o mar no Rio Vermelho.",
                    "5. Baianas de Acarajé: O ofício das baianas é considerado Patrimônio Imaterial do Brasil.",
                    "6. Missa do Rosário dos Pretos: Uma missa católica no Pelourinho que usa atabaques e ritmos africanos.",
                    "7. Orixás: As estátuas no Dique do Tororó representam as divindades africanas que protegem a cidade.",
                    "8. Fitinhas do Bonfim: Tradição de amarrar no pulso com 3 nós (3 pedidos). Só rompe quando o pedido realiza.",
                    "9. Terça da Benção: Festa tradicional no Pelourinho às terças-feiras, após a missa.",
                    "10. Santa Dulce dos Pobres: O santuário da santa brasileira é local de muita peregrinação e fé."
                ],

                // TOP 10 EVENTOS E ESTAÇÕES
                eventos_estacoes: [
                    "1. Carnaval (Fev/Mar): A cidade para. Circuitos Barra-Ondina e Campo Grande arrastam multidões.",
                    "2. Verão (Dez-Mar): A cidade ferve. Ensaios de verão, festas de largo e muito sol.",
                    "3. Festa de Iemanjá (2 de Fevereiro): A maior celebração pública do Candomblé.",
                    "4. Lavagem do Bonfim (Janeiro): Cortejo de 8km com muita fé e festa profana misturadas.",
                    "5. Festival de Verão (Janeiro): Um dos maiores festivais de música do Brasil.",
                    "6. Santa Bárbara (4 de Dezembro): Abre o calendário de festas populares com muito caruru (comida).",
                    "7. Ensaio do Olodum: Acontece no Pelourinho (terças e domingos). Energia surreal.",
                    "8. São João (Junho): Embora a festa maior seja no interior, o Pelourinho fica todo decorado e com forró.",
                    "9. Inverno (Maio-Julho): É a época chuvosa. Pode chover dias seguidos, atrapalhando a praia.",
                    "10. Dia do Samba (2 de Dezembro): Festas gratuitas celebram o ritmo que nasceu na Bahia."
                ],

                // TOP 10 INFO GERAIS
                info_gerais: [
                    "1. Voltagem: 127V (110V). Diferente de outras capitais do Nordeste que são 220V. Confira sempre!",
                    "2. DDD: 71.",
                    "3. Soteropolitano: É quem nasce em Salvador (vem do grego 'Soteropolis' - Cidade do Salvador).",
                    "4. Aeroporto: SSA (Deputado Luís Eduardo Magalhães). Tem metrô ligando ao centro.",
                    "5. Metrô: Limpo e moderno, liga o Aeroporto até a Lapa (perto do centro histórico).",
                    "6. Trânsito: Intenso nos horários de pico. Uber funciona bem, mas evite em dias de grandes festas.",
                    "7. Segurança: Exige atenção redobrada. Não ande com celular na mão ou correntes de ouro na rua.",
                    "8. Topografia: A cidade é dividida em Cidade Alta (histórica/residencial) e Cidade Baixa (comércio/porto).",
                    "9. Ritmo: 'Sorria, você está na Bahia'. O ritmo aqui é mais lento e relaxado (Balanço da rede).",
                    "10. Hospitalidade: O baiano é conhecido por ser um dos povos mais acolhedores do mundo."
                ],

                // TOP 10 DICAS ANTES DE IR
                antes_de_ir: [
                    "1. Assédio de Vendedores: No Pelourinho, vendedores de 'fitinha' e pintura corporal são insistentes. Diga 'não, obrigado' firme.",
                    "2. Golpe da Fitinha: Se alguém tentar amarrar uma fita no seu braço 'de presente', recuse. Eles vão cobrar caro depois.",
                    "3. Uber x Táxi: Uber costuma ser mais barato e seguro para turistas.",
                    "4. Protetor Solar: O sol da Bahia é implacável. Use chapéu e hidrate-se (água de coco).",
                    "5. Roupas Leves: O calor é úmido. Tecidos naturais (algodão/linho) são os melhores.",
                    "6. Pimenta: Se não está acostumado, NUNCA peça acarajé 'quente'. A pimenta baiana é muito forte.",
                    "7. Terça-Feira: É um dia agitado no Pelourinho (Terça da Benção). Ótimo dia para visitar.",
                    "8. Elevador Lacerda: Custa centavos. Tenha moedas trocadas para facilitar.",
                    "9. Praia no Centro: O Porto da Barra é lindo, mas lota muito no fim de semana. Vá dia de semana.",
                    "10. Respeito: Ao entrar em igrejas ou terreiros, vista-se adequadamente (evite trajes de banho)."
                ],
                // --- NOVO: NÚMEROS IMPORTANTES (SALVADOR) ---
                numeros: [
                    "1. 190 (Polícia Militar): Emergência policial, assaltos ou situações de perigo iminente.",
                    "2. (71) 3116-6817 (DELTUR): Delegacia de Proteção ao Turista. Fica no Pelourinho, essencial para quem visita o centro histórico.",
                    "3. 192 (SAMU): Ambulância para urgências médicas na rua ou residência.",
                    "4. 193 (Bombeiros): Incêndios, resgates e acidentes com vítimas presas nas ferragens.",
                    "5. 118 (Transalvador): Emergências de trânsito, acidentes sem vítima ou denúncia de estacionamento irregular.",
                    "6. (71) 3204-1000 (Aeroporto de Salvador): Informações sobre voos e o metrô que liga ao aeroporto.",
                    "7. (71) 3616-8300 (Rodoviária): Informações sobre ônibus para o interior da Bahia e outros estados.",
                    "8. (71) 3117-5600 (HGE - Hospital Geral do Estado): A maior referência pública para traumas e emergências graves.",
                    "9. 156 (Fala Salvador): Canal da Prefeitura para reclamar de serviços, limpeza urbana ou barulho.",
                    "10. (71) 3235-0000 (Elevador Lacerda/Transporte): Informações turísticas e de mobilidade na Cidade Alta/Baixa."
                ],
                // SEUS LINKS DE AFILIADO
                links: {
                    hotel: "https://www.booking.com/searchresults.pt-br.html?city=-667953&aid=304142", 
                    passeio: "https://www.civitatis.com/br/salvador/", 
                    seguro: "https://www.segurospromo.com.br" 
                }
            },
            {
                name: "Brasília",
                // FOTO: Congresso Nacional (Wikimedia - Link Estável)
                imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Congresso_Nacional_do_Brasil_em_noite_de_lua_cheia.jpg/960px-Congresso_Nacional_do_Brasil_em_noite_de_lua_cheia.jpg",
                tags: ["Arquitetura", "História", "Política"],
                mapa: "https://goo.gl/maps/brasilia",
                clima: "Tropical de Altitude. Seca extrema no inverno (Jun-Set) e chuvas no verão.",
                
                // TOP 10 PONTOS TURÍSTICOS
                pontos_turisticos: [
                    "1. Praça dos Três Poderes: O centro das decisões do país. Veja o Congresso, o Planalto e o STF de perto.",
                    "2. Catedral Metropolitana: Obra-prima de Niemeyer. Por fora parece pequena, por dentro é grandiosa e colorida.",
                    "3. Pontão do Lago Sul: O 'mar' de Brasília. Calçadão na beira do lago, cheio de restaurantes e clima de praia.",
                    "4. Ponte JK: Uma das pontes mais bonitas do mundo, premiada arquitetonicamente. Linda iluminada à noite.",
                    "5. Torre de TV: Suba no mirante para ver o formato de 'avião' da cidade. Tem uma feira de artesanato ótima embaixo.",
                    "6. Parque da Cidade: Um dos maiores parques urbanos do mundo (maior que o Central Park). Perfeito para bicicletas.",
                    "7. Memorial JK: O museu onde descansa Juscelino Kubitschek. Arquitetura e história emocionantes.",
                    "8. Palácio da Alvorada: Residência oficial do presidente. É possível ver as emas no gramado e a arquitetura flutuante.",
                    "9. Santuário Dom Bosco: A igreja 'azul'. Composta por milhares de vitrais em 12 tons de azul. Hipnotizante.",
                    "10. Banco Central (Museu de Valores): Veja a maior pepita de ouro do Brasil e entre numa caixa-forte gigante."
                ],

                // TOP 10 GASTRONOMIA
                gastronomia: [
                    "1. Pizza Dom Bosco: Patrimônio da cidade. Fatia dupla (queijo e molho) que se come dobrada no guardanapo.",
                    "2. Pastel da Viçosa: Eleito várias vezes o melhor pastel de feira do Brasil (na Rodoviária ou feiras).",
                    "3. Restaurantes do Pontão: Gastronomia variada com vista para o Lago Paranoá (ideal para pôr do sol).",
                    "4. Frutas do Cerrado: Sorvetes de Cagaita, Pequi, Mangaba e Baru. Sabores que você só acha aqui.",
                    "5. Arroz com Pequi: Prato goiano muito amado na capital (atenção: não morda o caroço do pequi!).",
                    "6. Alta Gastronomia: A cidade tem chefs renomados e restaurantes internacionais na Asa Sul e Norte.",
                    "7. Cachorro-Quente da 105 Sul: Os 'dogueiros' de Brasília são famosos pelas pastas de alho e molhos.",
                    "8. Feira da Torre: Comida típica de todo o Brasil (Acarajé, Pamonha, Tacacá) num só lugar.",
                    "9. Cafés Especiais: Brasília vive um boom de cafeterias artesanais de altíssimo nível.",
                    "10. Pão de Queijo do Mercadinho: Tradicional nas padarias das quadras residenciais."
                ],

                // TOP 10 CURIOSIDADES
                curiosidades: [
                    "1. Formato de Avião: A cidade foi desenhada no formato de um avião (ou borboleta). Asa Sul e Asa Norte.",
                    "2. Sem Esquinas: Brasília quase não tem esquinas tradicionais, e sim curvas e 'tesourinhas' (retornos).",
                    "3. 1000 Dias: A cidade foi construída do zero no meio do cerrado em apenas 1000 dias.",
                    "4. Lago Artificial: O Lago Paranoá foi criado para aumentar a umidade. Tem o tamanho de uma baía.",
                    "5. Endereços Loucos: SQS 302, CLN 405... Parece código, mas é um sistema de coordenadas lógico.",
                    "6. Misticismo: Dizem que a cidade foi construída sobre uma grande jazida de cristais, atraindo místicos.",
                    "7. Patrimônio Cultural: É a maior área tombada do mundo pela UNESCO como Patrimônio Cultural da Humanidade.",
                    "8. Rock Brasília: Nos anos 80, foi o berço do rock nacional (Legião Urbana, Capital Inicial).",
                    "9. Céu de Brasília: Considerado o 'mar' do brasiliense. O horizonte é infinito e o pôr do sol, espetacular.",
                    "10. Semáforos: Nas tesourinhas e eixões não há semáforos, o trânsito flui (ou deveria fluir) direto."
                ],

                // TOP 10 CULTURA & RELIGIÃO
                religiao: [
                    "1. Templo da LBV: Uma pirâmide de 7 faces aberta à visitação, com uma sala de meditação egípcia.",
                    "2. Catedral Metropolitana: Ecumênica e aberta. A entrada é por um túnel escuro para sair na luz da nave.",
                    "3. Vale do Amanhecer: Uma comunidade religiosa esotérica famosa mundialmente pelas roupas e rituais coloridos.",
                    "4. Santuário Dom Bosco: Impressionante jogo de luzes azuis. Padroeiro da cidade (ele sonhou com Brasília em 1883).",
                    "5. Igrejinha (N. Sra. de Fátima): A primeira igreja construída, desenhada por Niemeyer com azulejos de Athos Bulcão.",
                    "6. Templo Shin Budista: Um pedaço do Japão no cerrado, com arquitetura tradicional e feiras anuais.",
                    "7. Mesquita de Brasília: Centro Islâmico na Asa Norte, arquitetura árabe clássica.",
                    "8. Ermida Dom Bosco: Uma capela à beira do lago com uma das vistas mais bonitas do pôr do sol.",
                    "9. Misticismo: A cidade atrai muitos grupos espiritualistas, ufólogos e esotéricos devido à 'energia'.",
                    "10. Diversidade: Pessoas de todo o Brasil vivem aqui, criando uma mistura religiosa única."
                ],

                // TOP 10 EVENTOS E ESTAÇÕES
                eventos_estacoes: [
                    "1. Seca (Jun-Set): Umidade desce a 10% (nível deserto). O céu fica azulão, mas o nariz sangra. Hidrate-se!",
                    "2. Florada dos Ipês: Entre julho e setembro, a cidade fica colorida (Roxo, Amarelo, Branco e Rosa). É lindo.",
                    "3. 7 de Setembro: O desfile da Independência na Esplanada é o maior evento cívico do país.",
                    "4. Na Praia (Jul-Set): Um festival gigante que cria uma praia artificial com shows nacionais à beira do lago.",
                    "5. Chuvas (Out-Abr): Chove forte, as áreas verdes explodem de vida e o calor diminui.",
                    "6. Natal Monumental: A Torre de TV e a Esplanada ganham iluminação especial.",
                    "7. Festival de Cinema: Um dos mais antigos e respeitados do cinema brasileiro.",
                    "8. Porão do Rock: Festival de música pesado que mantém viva a tradição roqueira da cidade.",
                    "9. Aniversário de Brasília (21 de Abril): Shows e festas na Esplanada dos Ministérios.",
                    "10. Eixão do Lazer: Aos domingos e feriados, a avenida principal fecha para carros e vira parque."
                ],

                // TOP 10 INFO GERAIS
                info_gerais: [
                    "1. Voltagem: 220V. Atenção, pois a maioria do Brasil é 110V. Aparelhos podem queimar!",
                    "2. DDD: 61.",
                    "3. Candango: Nome dado aos pioneiros que construíram a cidade (e usado para quem nasce lá).",
                    "4. Aeroporto: BSB (Presidente JK). Um dos maiores e mais modernos hubs do país.",
                    "5. Transporte: Dependente de carro. O metrô é limitado (só uma linha em Y). Uber é essencial.",
                    "6. Setores: Tudo é setorizado. Setor de Hotéis, Setor de Clubes, Setor de Embaixadas, etc.",
                    "7. Segurança: O Plano Piloto (centro) é seguro, mas evite áreas desertas à noite.",
                    "8. Custo de Vida: Alto. Alimentação e hospedagem costumam ser mais caros que a média.",
                    "9. Clima: O 'Deserto' brasileiro. Traga soro fisiológico e muito hidratante labial.",
                    "10. Fim de Semana: A cidade esvazia politicamente e os locais vão para o Lago ou parques."
                ],

                // TOP 10 DICAS ANTES DE IR
                antes_de_ir: [
                    "1. Beba Água: A secura não é brincadeira. Você vai sentir sede e pele seca em 1 hora.",
                    "2. Hidratante: Traga manteiga de cacau e hidratante corporal. O ar condicionado dos hotéis piora a secura.",
                    "3. Fim de Semana: A cidade é ótima no fim de semana (sem trânsito político e hotéis mais baratos).",
                    "4. Roupa: De dia é quente, à noite venta frio (no inverno). Traga um casaco leve.",
                    "5. Visita ao Congresso: É gratuita, mas precisa agendar no site deles. Vale muito a pena.",
                    "6. Pôr do Sol: Reserve um fim de tarde para o Pontão ou Ermida Dom Bosco. É sagrado.",
                    "7. Aluguel de Carro: Facilita muito. As distâncias são longas e as avenidas largas.",
                    "8. Fique no Plano: Hospede-se nos Setores Hoteleiros (SHN ou SHS) para ficar perto de tudo.",
                    "9. Tesourinhas: Se dirigir, cuidado nos retornos (tesourinhas). A preferência é de quem está na tesourinha!",
                    "10. Documentos: Para entrar nos prédios públicos (Congresso, Planalto), bermuda e chinelo são proibidos."
                ],
                // --- NOVO: NÚMEROS IMPORTANTES (BRASÍLIA) ---
                numeros: [
                    "1. 190 (Polícia Militar): Emergência e segurança nas superquadras e pontos turísticos.",
                    "2. (61) 3207-4856 (DEATUR): Delegacia de Atendimento ao Turista (fica no Aeroporto JK).",
                    "3. 192 (SAMU): Urgências médicas e ambulância.",
                    "4. 193 (Bombeiros): Incêndios, acidentes de trânsito e resgates.",
                    "5. (61) 3364-9000 (Aeroporto JK): Informações de voos internacionais/nacionais e achados e perdidos.",
                    "6. 156 (Governo do DF): Central de atendimento para transporte, limpeza e serviços públicos.",
                    "7. (61) 3550-8900 (Hospital de Base): O maior hospital público de emergência e trauma do Centro-Oeste.",
                    "8. (61) 3234-2185 (Rodoviária Interestadual): Ônibus para Goiânia e outros estados (fica na saída da cidade).",
                    "9. (61) 3353-7373 (Metrô DF): Informações sobre as linhas Verde e Laranja.",
                    "10. 191 (Polícia Rodoviária Federal): Emergências nas BRs que ligam o DF ao entorno (saídas da cidade)."
                ],
                // SEUS LINKS DE AFILIADO
                links: {
                    hotel: "https://www.booking.com/searchresults.pt-br.html?city=-631243&aid=304142", 
                    passeio: "https://www.civitatis.com/br/brasilia/", 
                    seguro: "https://www.segurospromo.com.br" 
                }
            },
            {
                name: "Recife",
                // FOTO: Marco Zero e Parque das Esculturas (Wikimedia - Link Estável)
                imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Praia_do_Pina_-_Recife%2C_Pernambuco%2C_Brasil_%28cropped%29.jpg/1280px-Praia_do_Pina_-_Recife%2C_Pernambuco%2C_Brasil_%28cropped%29.jpg",
                tags: ["História", "Gastronomia", "Praia"],
                mapa: "https://goo.gl/maps/recife",
                clima: "Tropical Úmido. Sol e calor o ano todo. Chuvas intensas entre Maio e Julho.",
                
                // TOP 10 PONTOS TURÍSTICOS
                pontos_turisticos: [
                    "1. Recife Antigo (Marco Zero): O coração da cidade. Tire a clássica foto na rosa dos ventos e pegue o barquinho para as esculturas.",
                    "2. Instituto Ricardo Brennand: Eleito várias vezes o melhor museu da América do Sul. Um castelo com coleção de armas brancas e arte.",
                    "3. Oficina Francisco Brennand: Um templo de cerâmica e arte a céu aberto, misterioso e deslumbrante.",
                    "4. Praia de Boa Viagem: A orla urbana mais famosa. Caminhe no calçadão, tome água de coco, mas respeite as placas de tubarão.",
                    "5. Embaixada dos Bonecos Gigantes: Fica na Rua do Bom Jesus (eleita a 3ª mais bonita do mundo). Veja os bonecos de perto.",
                    "6. Paço do Frevo: Museu interativo dedicado ao ritmo patrimônio da humanidade. Colorido e vibrante.",
                    "7. Capela Dourada: O auge do barroco. Do chão ao teto, tudo é coberto de ouro. Impactante.",
                    "8. Sinagoga Kahal Zur Israel: A primeira sinagoga das Américas (séc XVII), herança dos judeus holandeses.",
                    "9. Catamarã no Rio Capibaribe: Passeio de barco que passa por baixo das pontes e mostra a cidade de outro ângulo.",
                    "10. Olinda (Vizinha): Basta subir a ladeira. O Centro Histórico de Olinda é Patrimônio da UNESCO e tem a vista mais linda da Sé."
                ],

                // TOP 10 GASTRONOMIA
                gastronomia: [
                    "1. Bolo de Rolo: Não é rocambole! É patrimônio de Pernambuco. Camadas finíssimas de massa e goiabada.",
                    "2. Cartola: A sobremesa mais famosa. Banana frita, queijo manteiga assado, açúcar e canela.",
                    "3. Caldinho: Na praia ou no bar, é obrigatório. De feijão, camarão ou peixe, servido no copinho.",
                    "4. Carne de Sol com Queijo Coalho: Clássico nordestino, servido com macaxeira frita ou cozida.",
                    "5. Bolo Souza Leão: Um bolo cremoso (parece pudim) feito de massa de mandioca e ovos, receita de engenho.",
                    "6. Tapioca: No Alto da Sé (em Olinda) é a melhor do mundo, feita na hora pelas tapioqueiras tradicionais.",
                    "7. Arrumadinho: Prato com feijão verde, farofa, vinagrete e carne de sol (ou charque) picadinha.",
                    "8. Peixada Pernambucana: Cozido de peixe com leite de coco e legumes, servido com pirão.",
                    "9. Buchada de Bode: Para os fortes. Prato típico do sertão, mas muito encontrado nos mercados da capital.",
                    "10. Cerveja Artesanal: O Recife Antigo é um polo de cervejarias locais premiadas (ex: Ekäut, Babylon)."
                ],

                // TOP 10 CURIOSIDADES
                curiosidades: [
                    "1. Veneza Brasileira: A cidade é cortada por rios e dezenas de pontes que ligam as ilhas do centro.",
                    "2. Tubarões: Devido a um desequilíbrio ambiental e correntes, a praia de Boa Viagem tem risco real de ataque. Respeite as placas!",
                    "3. Holandeses: Recife foi capital do 'Brasil Holandês' (1630-1654), governada por Maurício de Nassau.",
                    "4. Galo da Madrugada: É o maior bloco de carnaval do mundo, arrastando 2 milhões de pessoas no sábado de Zé Pereira.",
                    "5. Manguebeat: Movimento cultural dos anos 90 (Chico Science) que misturou rock com maracatu.",
                    "6. Prédio Mais Alto: O Recife tem alguns dos prédios mais altos do Brasil fora de Balneário Camboriú.",
                    "7. Judaísmo: A cidade abrigou a primeira comunidade judaica organizada das Américas.",
                    "8. Assombrações: Dizem que Recife é a cidade mais mal-assombrada do Brasil (lendas da Emparedada, Perna Cabeluda).",
                    "9. Frevo: É o único ritmo que se dança com uma sombrinha (usada antigamente como arma de defesa e ataque).",
                    "10. Rivalidade: Pernambucano tem um orgulho imenso. Dizem que lá tudo é 'o maior do mundo em linha reta'."
                ],

                // TOP 10 CULTURA & RELIGIÃO
                religiao: [
                    "1. Sinagoga Kahal Zur Israel: Marco zero do judaísmo no continente, hoje é um museu emocionante.",
                    "2. Pátio de São Pedro: Cercado de casas coloniais e a imponente Catedral de São Pedro dos Clérigos.",
                    "3. Maracatu: Cortejo real de origem afro-brasileira. O som dos tambores (alfaias) treme o chão.",
                    "4. Capela Dourada: Pertence à Ordem Terceira de São Francisco. É o maior exemplo de arte sacra da cidade.",
                    "5. Festa do Morro (N. Sra. da Conceição): Em dezembro, multidões sobem o Morro da Conceição vestidas de azul e branco.",
                    "6. Frevo: Mais que dança, é a alma do carnaval pernambucano. Patrimônio Imaterial da Humanidade.",
                    "7. Bonecos Gigantes: Tradição que veio da Europa, mas ganhou cara própria em Olinda (o 'Homem da Meia-Noite' é sagrado).",
                    "8. Basílica da Penha: No centro comercial, uma igreja belíssima onde as pessoas pedem bençãos rápidas.",
                    "9. Terreiros: A presença do Xangô do Recife (religião afro) é fortíssima e respeitada.",
                    "10. Paixão de Cristo: A maior encenação ao ar livre do mundo acontece em Nova Jerusalém (brejo), perto de Recife."
                ],

                // TOP 10 EVENTOS E ESTAÇÕES
                eventos_estacoes: [
                    "1. Carnaval (Fev/Mar): Multicultural. Frevo no Recife Antigo e ladeiras de Olinda. Não tem cordão, é tudo misturado.",
                    "2. São João (Junho): A capital tem festa, mas o foco vai para o interior (Caruaru). Muita comida de milho.",
                    "3. Inverno (Maio-Julho): É a estação da chuva. Chove pesado e pode alagar ruas. O calor diminui um pouco.",
                    "4. Abril Pro Rock: Festival de música independente que mantém viva a cena rock/manguebeat.",
                    "5. Fenearte (Julho): A maior feira de artesanato da América Latina. Imperdível para comprar arte popular.",
                    "6. Rec-Beat: Festival alternativo que acontece durante o carnaval no Cais da Alfândega.",
                    "7. Regata Recife-Noronha (Setembro): Evento náutico tradicional que parte rumo ao paraíso de Noronha.",
                    "8. Verão (Dez-Mar): Sol forte, mar azul (na maré baixa) e cidade cheia de turistas.",
                    "9. Aniversário do Recife (12 de Março): Shows e bolo gigante (literalmente) na praça.",
                    "10. O Maior Cozido do Mundo: Festas de bairro que tentam quebrar recordes de comida gigante são comuns."
                ],

                // TOP 10 INFO GERAIS
                info_gerais: [
                    "1. Voltagem: 220V. Cuidado, pois Salvador é 110V, mas Recife é 220V!",
                    "2. DDD: 81.",
                    "3. Aeroporto: REC (Guararapes/Gilberto Freyre). Moderno e dentro da área urbana (perto de Boa Viagem).",
                    "4. Maré: A praia de Boa Viagem muda muito. Na maré baixa formam-se piscinas naturais nos recifes.",
                    "5. Tubarão: NÃO entre no mar além do joelho, especialmente na maré alta ou se a água estiver turva. É sério.",
                    "6. Trânsito: O trânsito do Recife é considerado um dos piores do Brasil. Evite horários de pico.",
                    "7. Metrô: Existe, mas atende mais a periferia e rodoviária. Para turismo, Uber é melhor.",
                    "8. Rodoviária: TIP (Terminal Integrado de Passageiros). Fica muito longe do centro, vá de metrô ou Uber.",
                    "9. Segurança: O Recife Antigo é policiado, mas evite ruas desertas no centro (Santo Antônio/São José) à noite.",
                    "10. Táxi: Convencionais são confiáveis e usam taxímetro. No aeroporto, há táxis especiais tabelados."
                ],

                // TOP 10 DICAS ANTES DE IR
                antes_de_ir: [
                    "1. Tábua de Marés: Consulte todo dia. Praia só vale a pena na maré baixa (0.0 a 0.4). Na alta, a onda bate na pedra.",
                    "2. Recife x Olinda: Hospede-se em Boa Viagem (conforto/praia) e vá passar o dia em Olinda. Ou fique em Olinda para viver a arte.",
                    "3. Instituto Brennand: Reserve uma tarde inteira (13h às 17h). É longe e enorme. O pôr do sol lá é lindo.",
                    "4. Domingo no Antigo: Aos domingos, o Recife Antigo fecha para carros e vira um parque com feirinha. Melhor dia.",
                    "5. Catamarã: Faça o passeio das 16h para pegar o pôr do sol e o acender das luzes da cidade.",
                    "6. Cuidado com Celular: No carnaval ou locais cheios, use doleira. Furtos são comuns.",
                    "7. Uber no Aeroporto: Tem um local específico para embarque (piso superior ou sinalizado).",
                    "8. Protetor Solar: O sol de Pernambuco 'queima com força'.",
                    "9. Compras: A Feirinha de Boa Viagem (tarde/noite) é ótima para souvenirs e comida.",
                    "10. Beba Água de Coco: É barata e tem em todo lugar na orla."
                ],

                // --- NOVO: NÚMEROS IMPORTANTES (RECIFE) ---
                numeros: [
                    "1. 190 (Polícia Militar): Emergência e segurança pública.",
                    "2. (81) 3184-3438 (Delegacia do Turista): Atendimento especializado, fica no Recife Antigo (Praça do Arsenal).",
                    "3. 192 (SAMU): Emergências médicas e acidentes.",
                    "4. 193 (Bombeiros): Incêndios e resgates (inclusive em áreas de praia não supervisionadas).",
                    "5. (81) 3322-4188 (Aeroporto dos Guararapes): Informações de voos e setor de achados e perdidos.",
                    "6. (81) 3452-9800 (TIP - Rodoviária): Informações sobre ônibus intermunicipais e interestaduais.",
                    "7. 0800 081 1078 (CTTU - Trânsito): Para reportar acidentes sem vítimas ou semáforos quebrados.",
                    "8. (81) 3181-7000 (Hospital da Restauração): O maior hospital público de trauma e emergência do Norte/Nordeste.",
                    "9. (81) 3355-0199 (Centro de Atendimento ao Turista): Informações turísticas e mapas.",
                    "10. 190 (CIODS): Centro Integrado de Defesa Social, coordena todas as forças de segurança."
                ],
                
                // SEUS LINKS DE AFILIADO
                links: {
                    hotel: "https://www.booking.com/searchresults.pt-br.html?city=-665565&aid=304142", 
                    passeio: "https://www.civitatis.com/br/recife/", 
                    seguro: "https://www.segurospromo.com.br" 
                }
            },
            {
                name: "Porto Alegre",
                // FOTO: Usina do Gasômetro no Pôr do Sol (Wikimedia - Link Estável)
                imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/IBPA_17398_-_Vista_a%C3%A9rea_da_Orla_Moacyr_Scliar%2C_na_capital._O_-_2018-10-02_-_Luciano_Lanes-PMPA_%28cropped%29.jpg/1280px-IBPA_17398_-_Vista_a%C3%A9rea_da_Orla_Moacyr_Scliar%2C_na_capital._O_-_2018-10-02_-_Luciano_Lanes-PMPA_%28cropped%29.jpg",
                tags: ["Cultura Gaúcha", "Churrasco", "Parques"],
                mapa: "https://goo.gl/maps/portoalegre",
                clima: "Subtropical. Verão muito quente (abafado) e Inverno rigoroso e úmido.",
                
                // TOP 10 PONTOS TURÍSTICOS
                pontos_turisticos: [
                    "1. Orla do Guaíba: O ponto de encontro oficial. Calçadão revitalizado, perfeito para ver o pôr do sol (o mais bonito do mundo).",
                    "2. Parque da Redenção (Farroupilha): Aos domingos, o Brique da Redenção (feira de antiguidades e artesanato) é obrigatório.",
                    "3. Mercado Público: O coração gastronômico. Compre erva-mate, charque e almoce no Gambrinus ou Naval.",
                    "4. Casa de Cultura Mario Quintana: O antigo Hotel Majestic onde viveu o poeta. O jardim no terraço tem uma vista linda.",
                    "5. Fundação Iberê Camargo: Um prédio arquitetônico premiado (Álvaro Siza) na beira do rio, focado em arte moderna.",
                    "6. Estátua do Laçador: O símbolo do gaúcho pilchado, fica na entrada da cidade (perto do aeroporto).",
                    "7. Arena do Grêmio / Beira-Rio (Inter): Visitar os estádios da dupla Grenal é sagrado para quem ama futebol.",
                    "8. Rua Gonçalo de Carvalho: Apelidada de 'A Rua Mais Bonita do Mundo', formou um túnel verde incrível com as árvores.",
                    "9. Moinhos de Vento (Parcão): O bairro nobre e seu parque, cercado de cafés chiques e gente bonita.",
                    "10. Santander Cultural: Um cofre antigo que virou centro cultural no Centro Histórico, arquitetura deslumbrante."
                ],

                // TOP 10 GASTRONOMIA
                gastronomia: [
                    "1. Churrasco Gaúcho: O verdadeiro. Costela na vala ou rodízio de espeto corrido. É religião.",
                    "2. Xis Gaúcho: Não é hambúrguer! É um sanduíche prensado gigante (tamanho de um prato). Prove o Xis Coração ou Xis Tudo.",
                    "3. Chimarrão: Não é comida, mas é o 'alimento' social. Compartilhar a cuia é sinal de amizade.",
                    "4. Arroz Carreteiro: Feito com charque (carne seca) e tempero verde. Simples e delicioso.",
                    "5. Tainha na Taquara: Peixe assado no bambu, muito comum na época da Festa do Peixe.",
                    "6. Sagu com Creme: A sobremesa clássica da casa de vó. Bolinhas de vinho tinto com creme de baunilha.",
                    "7. Cachorro-Quente do Rosário: Pão cacetinho (francês), salsicha, molho vermelho e muito tempero verde.",
                    "8. Costelão 12 Horas: Assado lentamente até a carne desmanchar do osso.",
                    "9. Cuca: Um bolo de origem alemã com farofa doce em cima, herança da colonização.",
                    "10. Café Colonial: Mesas fartas com pães, frios e bolos, muito comum nos arredores da capital."
                ],

                // TOP 10 CURIOSIDADES
                curiosidades: [
                    "1. Voltagem Traiçoeira: Porto Alegre é 110V (127V), mas o resto do Rio Grande do Sul é 220V. Cuidado!",
                    "2. Pôr do Sol: Os porto-alegrenses aplaudem o pôr do sol no Guaíba. É um ritual local.",
                    "3. Gre-Nal: A rivalidade entre Grêmio e Internacional divide a cidade (e as famílias) ao meio.",
                    "4. Vocabulário Próprio: Cacetinho (pão francês), Sinaleira (semáforo), Lomba (ladeira), Bergamota (mexerica).",
                    "5. Feira do Livro: A maior a céu aberto da América Latina, acontece na Praça da Alfândega.",
                    "6. Capital mais fria: É a capital estadual mais fria do Brasil (em sensação térmica e umidade).",
                    "7. Mais Árvores: É uma das cidades mais arborizadas do país (túneis verdes).",
                    "8. Ronaldinho Gaúcho: O craque nasceu e começou a carreira aqui (no Grêmio).",
                    "9. Revolução Farroupilha: A guerra contra o Império (1835-1845) é celebrada com orgulho todo 20 de setembro.",
                    "10. Usina: O prédio da Usina do Gasômetro gerava energia a carvão, hoje é centro cultural."
                ],

                // TOP 10 CULTURA & RELIGIÃO
                religiao: [
                    "1. Catedral Metropolitana: Inspirada na Renascença italiana, com uma cúpula gigante no centro.",
                    "2. Nossa Senhora dos Navegantes: A maior festa religiosa da cidade (2 de fevereiro), sincretizada com Iemanjá.",
                    "3. Batuque e Umbanda: O RS tem a maior proporção de terreiros e praticantes de religiões afro do Brasil.",
                    "4. Lutheranismo: Forte presença de igrejas luteranas devido à colonização alemã.",
                    "5. Igreja das Dores: A mais antiga da cidade, com uma escadaria famosa e lendas de maldição.",
                    "6. Tradicionalismo (CTG): O 'culto' às tradições gaúchas é quase uma religião cívica (bombacha, cavalo, lenço).",
                    "7. Santuário Santa Rita: Local de peregrinação na zona sul.",
                    "8. Templo Positivista: Raro no mundo, reflete a filosofia que influenciou a bandeira do Brasil ('Ordem e Progresso').",
                    "9. Elis Regina: A maior cantora do Brasil nasceu aqui e é venerada culturalmente.",
                    "10. Laçador: A estátua representa Paixão Côrtes, folclorista que serviu de modelo para o gaúcho ideal."
                ],

                // TOP 10 EVENTOS E ESTAÇÕES
                eventos_estacoes: [
                    "1. Semana Farroupilha (Setembro): O Acampamento Farroupilha monta uma 'cidade' de madeira no parque. Churrasco 24h por dia.",
                    "2. Feira do Livro (Out/Nov): A praça enche de bancas. É tradição comprar livro e comer 'Xis' depois.",
                    "3. Porto Verão Alegre (Janeiro): Festival de teatro e comédia para animar o verão vazio.",
                    "4. Festa de Navegantes (Fevereiro): Procissão fluvial e terrestre que para a cidade.",
                    "5. Inverno (Jun-Ago): Frio de verdade. Use casaco pesado, cachecol e botas. A cidade fica elegante (e cinza).",
                    "6. Expointer (Agosto/Setembro): A maior feira agropecuária da América Latina (acontece na vizinha Esteio).",
                    "7. Verão (Dez-Mar): A cidade esvazia (todos vão para o litoral). O calor é sufocante.",
                    "8. South Summit (Março): Um dos maiores eventos de inovação e startups do mundo acontece no Cais Mauá.",
                    "9. Bienal do Mercosul: Grande evento de arte contemporânea que usa vários espaços da cidade.",
                    "10. Clássico Gre-Nal: Quando tem jogo, a cidade para. Evite andar perto do estádio com a cor do time rival."
                ],

                // TOP 10 INFO GERAIS
                info_gerais: [
                    "1. Voltagem: 110V/127V. (Atenção: Gramado e Canela são 220V. Porto Alegre é 110V).",
                    "2. DDD: 51.",
                    "3. Aeroporto: Salgado Filho (POA). O principal do estado.",
                    "4. Transporte: Uber funciona bem. Ônibus (Carris) cobre tudo, e tem os Lotação (micro-ônibus vermelhos mais caros e rápidos).",
                    "5. Segurança: O Centro Histórico à noite é perigoso. Evite andar a pé com celular exposto.",
                    "6. Clima: 'De forno a freezer'. Pode fazer 30ºC e 10ºC no mesmo dia. Traga roupas para tudo.",
                    "7. Moeda: Real (BRL).",
                    "8. Gentileza: O gaúcho pode parecer grosso pelo jeito de falar direto, mas é muito hospitaleiro.",
                    "9. Água: Potável, mas muitos preferem mineral. A água do Guaíba não é para banho!",
                    "10. Rodoviária: Fica na entrada da cidade, fácil acesso para ir a Gramado ou litoral."
                ],

                // TOP 10 DICAS ANTES DE IR
                antes_de_ir: [
                    "1. Roupas: Se for no inverno, traga casaco pesado MESMO. A umidade faz o frio doer nos ossos.",
                    "2. Chimarrão: Se te oferecerem, aceite. Não mexa na bomba (canudo) e beba até fazer o ronco no final.",
                    "3. Voltagem: Verifique a chave do seu secador. POA é 110V, mas hotéis podem ter tomadas 220V identificadas.",
                    "4. Domingo: O porto-alegrense vai para a Orla ou Redenção. O trânsito nessas áreas fica lento.",
                    "5. Xis: Um Xis alimenta duas pessoas com fome moderada. É gigante.",
                    "6. Mosquito: No verão, perto do rio, tem muito mosquito. Repelente ajuda.",
                    "7. Centro: Visite o Mercado Público e museus de dia. À noite, prefira a Cidade Baixa ou Moinhos.",
                    "8. Cidade Baixa (CB): É o bairro boêmio, dos bares e baladas alternativos.",
                    "9. Moinhos de Vento: É o bairro chique, dos restaurantes caros e lojas de grife.",
                    "10. Uber no Aeroporto: Tem andar específico para chamar (siga as placas)."
                ],

                // --- NOVO: NÚMEROS IMPORTANTES (PORTO ALEGRE) ---
                numeros: [
                    "1. 190 (Brigada Militar): Emergência policial. No RS, a PM chama-se Brigada.",
                    "2. (51) 3288-2668 (Delegacia do Turista): Atendimento especializado para quem visita a cidade.",
                    "3. 192 (SAMU): Urgências médicas e acidentes na rua.",
                    "4. 193 (Bombeiros): Incêndios e resgates.",
                    "5. (51) 3289-8000 (HPS - Pronto Socorro): O Hospital de Pronto Socorro (municipal) é referência em traumas.",
                    "6. 118 (EPTC): Para emergências de trânsito, acidentes sem vítima ou bloqueios.",
                    "7. 156 (Fala Porto Alegre): Informações da prefeitura, linhas de ônibus e serviços.",
                    "8. (51) 3358-2000 (Aeroporto Salgado Filho): Informações de voos e terminal.",
                    "9. (51) 3210-0101 (Rodoviária de POA): Informações sobre ônibus para interior e Mercosul.",
                    "10. 199 (Defesa Civil): Em caso de cheias do Guaíba ou temporais severos."
                ],
                
                // SEUS LINKS DE AFILIADO (ID 304142)
                links: {
                    hotel: "https://www.booking.com/searchresults.pt-br.html?city=-663673&aid=304142", 
                    passeio: "https://www.civitatis.com/br/porto-alegre/", 
                    seguro: "https://www.segurospromo.com.br" 
                }
            },
        ],
        "Argentina": [
            {
                name: "Buenos Aires",
                // FOTO: Obelisco e Av. 9 de Julho (Wikimedia - Link Estável)
                imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/A_View_of_the_Obelisk%2C_in_Buenos_Aires%2C_Argentina%2C_the_Host_Site_for_the_2018_G-20_Leaders%27_Summit_%2846114415381%29.jpg/500px-A_View_of_the_Obelisk%2C_in_Buenos_Aires%2C_Argentina%2C_the_Host_Site_for_the_2018_G-20_Leaders%27_Summit_%2846114415381%29.jpg",
                tags: ["Tango", "Gastronomia", "Romance"],
                mapa: "https://goo.gl/maps/buenosaires",
                clima: "Temperado. Verões quentes e úmidos, invernos frios (mas sem neve na capital).",
                
                // TOP 10 PONTOS TURÍSTICOS
                pontos_turisticos: [
                    "1. Obelisco e Av. 9 de Julho: O ícone da cidade na avenida mais larga do mundo.",
                    "2. Casa Rosada e Plaza de Mayo: O coração político. Veja a varanda de onde Evita Perón discursava.",
                    "3. Caminito (La Boca): A rua museu colorida, berço do tango. Turístico, mas obrigatório.",
                    "4. Cemitério da Recoleta: Um museu a céu aberto com mausoléus incríveis, incluindo o de Evita Perón.",
                    "5. Teatro Colón: Um dos teatros de ópera com melhor acústica do mundo. O tour guiado é fascinante.",
                    "6. Puerto Madero: A área moderna e renovada, cheia de restaurantes chiques e a Ponte da Mulher.",
                    "7. Feira de San Telmo: Aos domingos, o bairro antigo enche de antiguidades, tango na rua e artesanato.",
                    "8. Livraria El Ateneo: Um antigo teatro que virou livraria. Eleita uma das mais bonitas do mundo.",
                    "9. Bosques de Palermo: O pulmão verde da cidade, com o Rosedal (jardim de rosas) e lagos.",
                    "10. Floralis Genérica: Uma flor gigante de metal que abre e fecha suas pétalas dependendo do sol."
                ],

                // TOP 10 GASTRONOMIA
                gastronomia: [
                    "1. Bife de Chorizo: O corte de carne mais famoso. Alto, suculento e macio. Don Julio é a churrascaria (parrilla) mais famosa.",
                    "2. Empanadas: Pastel de forno com recheios variados (carne cortada a cuchillo é a melhor).",
                    "3. Alfajor: O doce nacional. Duas bolachas com muito doce de leite no meio, coberto de chocolate.",
                    "4. Doce de Leite: O argentino é mais escuro e intenso que o brasileiro. Prove o sorvete de Dulce de Leche.",
                    "5. Milanesa com Papas Fritas: O prato do dia a dia. Bife à milanesa (enorme) com batata frita.",
                    "6. Choripán: Pão com linguiça (chorizo) e molho chimichurri. Clássico de comida de rua.",
                    "7. Pizza Argentina: Massa grossa (media masa) e MUITO queijo (muzza). A pizzaria Güerrin é lendária.",
                    "8. Provoleta: Queijo provolone grelhado na brasa até ficar crocante por fora e derretido por dentro.",
                    "9. Medialunas: O croissant argentino. As 'de grasa' (salgadas) ou 'de manteca' (doces) são perfeitas com café.",
                    "10. Vinhos (Malbec): A uva ícone do país. O vinho é barato e excelente em qualquer restaurante."
                ],

                // TOP 10 CURIOSIDADES
                curiosidades: [
                    "1. Paris da América: A arquitetura do centro e Recoleta lembra muito Paris e Madri.",
                    "2. Jantar Tarde: Argentinos jantam muito tarde. Restaurantes enchem depois das 22h.",
                    "3. Psicólogos: É a cidade com maior número de psicólogos por habitante no mundo.",
                    "4. Livrarias: Também é a cidade com mais livrarias per capita do mundo.",
                    "5. Papa Francisco: O Papa nasceu e viveu aqui (Jorge Bergoglio) e pegava metrô como um cidadão comum.",
                    "6. Futebol Religião: A paixão por Boca Juniors e River Plate (e Messi/Maradona) é algo inexplicável.",
                    "7. Avenida Mais Larga: Dizem que a 9 de Julho é a mais larga do mundo (mas há controvérsias).",
                    "8. Tango: Nasceu nos subúrbios pobres e bordéis antes de virar dança de salão elegante.",
                    "9. Passeadores de Cães: Você vai ver passeadores com 15 ou 20 cachorros ao mesmo tempo nos parques.",
                    "10. Dia do Amigo: É levado muito a sério (20 de julho). Os restaurantes lotam de grupos de amigos."
                ],

                // TOP 10 CULTURA & RELIGIÃO
                religiao: [
                    "1. Catedral Metropolitana: Onde o Papa Francisco celebrava missas. O exterior parece um templo grego, não uma igreja.",
                    "2. Terra Santa: O primeiro parque temático religioso do mundo, recriando a Jerusalém bíblica.",
                    "3. Cemitério da Recoleta: A relação com a morte e a memória é forte. O túmulo de Evita é local de peregrinação.",
                    "4. Comunidade Judaica: Buenos Aires tem a maior comunidade judaica da América Latina (visite o bairro Once).",
                    "5. Gauchito Gil: Um santo popular (não reconhecido pela igreja) muito venerado, com altares vermelhos nas estradas.",
                    "6. Tango como Ritual: As 'Milongas' (locais de dança) têm códigos de conduta e respeito sagrados.",
                    "7. Mães da Praça de Maio: O protesto semanal das mães dos desaparecidos na ditadura é um ato de fé e resistência.",
                    "8. Basílica de Luján: A padroeira da Argentina. Fica a 70km da capital e recebe milhões de peregrinos.",
                    "9. Maradona: Existe literalmente a 'Igreja Maradoniana', que adora o jogador como um deus.",
                    "10. Diversidade: A cidade é muito aberta e tolerante a diferentes crenças e estilos de vida."
                ],

                // TOP 10 EVENTOS E ESTAÇÕES
                eventos_estacoes: [
                    "1. Mundial de Tango (Agosto): O maior evento do gênero, com dançarinos do mundo todo e shows grátis.",
                    "2. Campeonato de Polo (Novembro): O esporte da elite argentina. O Aberto de Palermo é o mais importante do mundo.",
                    "3. Primavera (Set-Dez): A cidade fica roxa com a florada dos Jacarandás. Clima perfeito.",
                    "4. Inverno (Jun-Ago): Frio (média 10ºC), ideal para vinhos e cafés. Não neva na cidade.",
                    "5. Lollapalooza Argentina (Março): Um dos maiores festivais de música da região.",
                    "6. Carnaval Portenho (Fevereiro): As 'Murgas' (blocos de bairro) desfilam com tambores e danças típicas.",
                    "7. Feira do Livro (Abril/Maio): Uma das maiores do mundo hispânico, acontece na La Rural.",
                    "8. Verão (Dez-Mar): Muito quente e úmido. A cidade fica mais vazia pois os locais vão para a praia.",
                    "9. Noche de los Museos (Out/Nov): Museus abrem de graça até de madrugada com transporte livre.",
                    "10. Outono (Mar-Jun): As folhas das árvores caem e a cidade ganha um tom dourado e melancólico lindo."
                ],

                // TOP 10 INFO GERAIS
                info_gerais: [
                    "1. Moeda: Peso Argentino (ARS). A inflação é alta, os preços mudam rápido.",
                    "2. Câmbio Blue: Existe o câmbio oficial e o paralelo (Blue/Western Union), que paga quase o dobro. Use Western Union!",
                    "3. Voltagem: 220V. Tomada tipo I (três pinos chatos na diagonal, 'carinha triste'). Leve adaptador universal.",
                    "4. Documentos: Brasileiros entram só com RG (menos de 10 anos de emissão) ou Passaporte.",
                    "5. Idioma: Espanhol (Castelhano). O sotaque é único ('x' no lugar do 'y' ou 'll').",
                    "6. Transporte: Metrô (Subte) é velho mas eficiente. Uber e Cabify funcionam bem. Táxi é barato.",
                    "7. Gorjeta (Propina): 10% é o padrão em restaurantes.",
                    "8. Aeroportos: Ezeiza (EZE - Internacional/Longe) e Aeroparque (AEP - Doméstico/Dentro da cidade).",
                    "9. Segurança: Zona turística é segura, mas cuidado com 'motos' puxando celular e batedores de carteira no centro.",
                    "10. Água: Potável, mas com gosto forte. A maioria dos turistas prefere mineral."
                ],

                // TOP 10 DICAS ANTES DE IR
                antes_de_ir: [
                    "1. Dinheiro Vivo: Leve Reais e envie dinheiro por Western Union para sacar lá em Pesos. O cartão de crédito usa uma cotação pior (dólar MEP).",
                    "2. Adaptador: A tomada argentina é diferente da brasileira e da americana. Compre um adaptador universal.",
                    "3. Aeroparque: Se puder, escolha voos que chegam no Aeroparque (AEP). Você já desce dentro da cidade.",
                    "4. Uber no Aeroporto: Em Ezeiza, o Uber não pode pegar passageiro na porta. Tem que ir ao estacionamento.",
                    "5. Não Troque no Aeroporto: As casas de câmbio do aeroporto têm as piores cotações. Troque o mínimo para o táxi.",
                    "6. Chip de Celular: Compre um chip 'Claro' ou 'Personal' nos kioscos (bancas) da cidade para ter internet.",
                    "7. Restaurantes Famosos: O Don Julio libera reservas 2 ou 3 meses antes e esgota em minutos. Planeje-se.",
                    "8. Caminhe: A melhor forma de conhecer o centro e Recoleta é a pé. A arquitetura é a atração.",
                    "9. Domingo em San Telmo: A feira é gigante. Vá cedo (10h) para conseguir andar, depois do almoço fica lotado.",
                    "10. Tax Free: Estrangeiros têm isenção de imposto (IVA) em hotéis se pagarem com cartão internacional (verifique a regra atual)."
                ],
                // --- NOVO: NÚMEROS IMPORTANTES (BUENOS AIRES) ---
                numeros: [
                    "1. 911 (Emergência Geral): Central unificada para Polícia, Bombeiros e Emergências Médicas.",
                    "2. 107 (SAME): Serviço de ambulância pública de emergência (muito eficiente na capital).",
                    "3. 0800-999-5000 (Polícia Turística): Atendimento especializado para estrangeiros (falam português/inglês).",
                    "4. (+54 11) 4515-6500 (Consulado do Brasil): Ligue aqui se perder o passaporte ou tiver problemas legais graves.",
                    "5. (+54 11) 5480-6111 (Aeroporto Ezeiza - EZE): Informações sobre voos internacionais.",
                    "6. (+54 11) 3987-4150 (Aeroporto Aeroparque - AEP): Informações do aeroporto dentro da cidade.",
                    "7. (+54 9 11) 4074-3431 (Defensoria do Turista): Apoio jurídico e orientação via WhatsApp.",
                    "8. 147 (Governo da Cidade): Informações gerais sobre a cidade, trânsito e serviços.",
                    "9. (+54 11) 4323-0100 (Hospital Fernández): Um dos principais hospitais públicos de referência em Palermo.",
                    "10. (+54 11) 4310-0700 (Terminal Retiro): Informações sobre a rodoviária principal (ônibus para outras cidades)."
                ],
                // SEUS LINKS DE AFILIADO
                links: {
                    hotel: "https://www.booking.com/searchresults.pt-br.html?ss=Buenos+Aires&aid=304142", 
                    passeio: "https://www.civitatis.com/br/buenos-aires/", 
                    seguro: "https://www.segurospromo.com.br" 
                }
            }
        ]
        
        
        
    },
    "América do Norte": {
        "Estados Unidos": [
            {
                name: "Orlando",
                // FOTO: Castelo da Cinderela (Wikimedia - Link Estável)
                imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Cinderella_Castle%2C_Magic_Kingdom_Walt_Disney_World_2024_%28square_crop%29.jpg/960px-Cinderella_Castle%2C_Magic_Kingdom_Walt_Disney_World_2024_%28square_crop%29.jpg",
                tags: ["Magia", "Parques", "Compras"],
                mapa: "https://goo.gl/maps/orlando",
                clima: "Subtropical. Verão muito quente e chuvoso (Jun-Set). Inverno seco e ameno.",
                
                // TOP 10 PONTOS TURÍSTICOS
                pontos_turisticos: [
                    "1. Magic Kingdom: Onde fica o Castelo da Cinderela. O parque clássico da Disney, obrigatório para a primeira vez.",
                    "2. Universal Studios: O parque do cinema. Destaque para o Beco Diagonal (Harry Potter) e a montanha-russa da Múmia.",
                    "3. Islands of Adventure: O parque da aventura da Universal. Tem o Castelo de Hogwarts e a VelociCoaster (melhor montanha-russa).",
                    "4. EPCOT: O parque da tecnologia e cultura. A famosa 'bola' da Disney e a volta ao mundo pelos pavilhões dos países.",
                    "5. Animal Kingdom: O parque da natureza. A área de Pandora (Avatar) é a coisa mais impressionante de Orlando.",
                    "6. Hollywood Studios: O parque de Star Wars (Galaxy's Edge) e Toy Story Land. Imperdível para fãs de filmes.",
                    "7. Disney Springs: Centro de compras e restaurantes da Disney. Entrada gratuita, lindo para passear à noite.",
                    "8. SeaWorld: Focado na vida marinha e, hoje em dia, nas montanhas-russas radicais (Mako, Kraken).",
                    "9. Outlets (Premium Vineland/Intl): O paraíso das compras com descontos reais de marcas famosas.",
                    "10. ICON Park: Complexo na International Drive com a roda-gigante (The Wheel), Museu Madame Tussauds e Aquário."
                ],

                // TOP 10 GASTRONOMIA
                gastronomia: [
                    "1. Cerveja Amanteigada (Butterbeer): A bebida clássica de Harry Potter na Universal (prove a frozen!).",
                    "2. Turkey Leg: A coxa de peru gigante defumada, vendida nos parques da Disney.",
                    "3. Cheesecake Factory: Restaurante favorito dos brasileiros. Cardápio gigante e fatias de torta enormes.",
                    "4. Five Guys: Hambúrguer simples, mas considerado um dos melhores 'fast-food premium' dos EUA.",
                    "5. Olive Garden: Massas e saladas ilimitadas a um preço acessível. Clássico jantar de turista.",
                    "6. Dole Whip: Sorvete de abacaxi refrescante, um ícone da Disney (encontre no Magic Kingdom).",
                    "7. Mickey Premium Bar: O sorvete de palito com formato do Mickey coberto de chocolate.",
                    "8. Restaurantes Brasileiros: Camila's, Gilson's ou Fogo de Chão para quem sente saudade do feijão com arroz.",
                    "9. Krispy Kreme: Donuts que derretem na boca. Se a luz vermelha da loja estiver acesa, tem donut quente saindo.",
                    "10. Shake Shack: Hambúrguer e batata com queijo deliciosos. Rivaliza com o Five Guys."
                ],

                // TOP 10 CURIOSIDADES
                curiosidades: [
                    "1. Túneis Subterrâneos: O Magic Kingdom tem uma rede de túneis embaixo dele para os funcionários se moverem sem serem vistos.",
                    "2. Cidade Fantasma?: Walt Disney queria que o EPCOT fosse uma cidade futurista real para pessoas morarem, não um parque.",
                    "3. Crocodilos: A Flórida é cheia de pântanos. Nunca entre em lagos ou canais, há jacarés em todo lugar.",
                    "4. Maior McDonald's: O maior McDonald's do mundo fica em Orlando, na International Drive (tem pizza e macarrão!).",
                    "5. Visitantes: É a cidade mais visitada dos EUA, recebendo mais de 70 milhões de turistas por ano.",
                    "6. Tamanho da Disney: O complexo da Disney tem o tamanho da cidade de São Francisco ou duas vezes Manhattan.",
                    "7. Castelo: O castelo da Cinderela é feito de fibra de vidro, não de pedra. E tem uma suíte secreta dentro.",
                    "8. NASA: O Cabo Canaveral (lançamento de foguetes) fica a apenas 1 hora de carro de Orlando.",
                    "9. Árvore da Vida: A árvore do Animal Kingdom é artificial e tem mais de 300 animais esculpidos no tronco.",
                    "10. Troca de Bottons: Você pode trocar pins (bottons) com funcionários da Disney. É uma 'caça ao tesouro' divertida."
                ],

                // TOP 10 CULTURA & RELIGIÃO
                religiao: [
                    "1. Basílica Maria, Rainha do Universo: Construída especificamente para turistas católicos, é linda e enorme.",
                    "2. Holy Land Experience: Era um parque bíblico famoso (fechou, mas marcou a história religiosa da cidade).",
                    "3. Diversidade: Orlando tem templos de quase todas as religiões devido à população imigrante.",
                    "4. Igrejas Brasileiras: Existem dezenas de igrejas evangélicas com cultos em português (Lagoinha, Bola de Neve, etc).",
                    "5. Mega-Igrejas: A cultura americana de igrejas gigantescas (estilo estádio) é forte na Flórida.",
                    "6. Natal Mágico: A celebração do Natal nos parques é quase uma religião à parte, com corais e procissões.",
                    "7. Comunidade Judaica: Forte presença, com sinagogas e mercados kosher.",
                    "8. Espiritismo: A comunidade brasileira mantém centros espíritas ativos na região.",
                    "9. Casamentos na Disney: Muitas pessoas se casam no pavilhão de casamentos da Disney com vista para o castelo.",
                    "10. Celebração da Vida: O cemitério de Celebração (cidade criada pela Disney) não permite lápides verticais para não parecer triste."
                ],

                // TOP 10 EVENTOS E ESTAÇÕES
                eventos_estacoes: [
                    "1. Halloween (Set-Out): 'Mickey's Not-So-Scary' (leve/infantil) e 'Halloween Horror Nights' da Universal (assustador/adulto).",
                    "2. Natal (Nov-Dez): Decorações incríveis, paradas especiais e shows de fogos temáticos.",
                    "3. EPCOT Food & Wine (Ago-Nov): Festival gastronômico onde você prova comidas e bebidas do mundo todo.",
                    "4. Spring Break (Março): Feriado escolar americano. Os parques lotam absurdamente. Evite se puder.",
                    "5. Verão (Jun-Ago): Muito calor e chuva todo dia à tarde. Filas longas.",
                    "6. Furacões (Ago-Out): É a temporada oficial, mas Orlando fica no centro do estado e raramente sofre danos graves.",
                    "7. Maratona Disney (Janeiro): Corridas que passam por dentro dos parques. Os corredores usam fantasias.",
                    "8. Mardi Gras (Fev-Abr): O carnaval da Universal, com shows famosos e colares jogados dos carros alegóricos.",
                    "9. Black Friday (Nov): Os outlets viram campo de guerra, mas as promoções são reais.",
                    "10. Baixa Temporada (Maio/Set): Historicamente os meses mais vazios (mas Orlando nunca fica 100% vazia)."
                ],

                // TOP 10 INFO GERAIS
                info_gerais: [
                    "1. Visto: Brasileiros PRECISAM de visto americano (B1/B2) e passaporte válido.",
                    "2. Gorjeta (Tip): É cultural e praticamente obrigatória. Calcule 18% a 20% em restaurantes.",
                    "3. Imposto (Tax): O preço na etiqueta NÃO é o final. O imposto (aprox 6.5%) é somado no caixa.",
                    "4. Tomada: Padrão americano (dois pinos chatos). Leve adaptador universal. Voltagem 110V.",
                    "5. Água: Da torneira é potável, mas tem gosto forte de cloro. Compre fardos de garrafa no Walmart.",
                    "6. Carro: Alugar carro é essencial. O transporte público é fraco. Use GPS (Waze/Google Maps).",
                    "7. SunPass: É o 'Sem Parar' dos pedágios. Já peça incluso no aluguel do carro.",
                    "8. Internet: Compre um chip internacional ou e-sim. Wifi dos parques funciona, mas cai.",
                    "9. Idade para Beber: 21 anos. Eles pedem identidade para todos, mesmo se você parecer ter 50.",
                    "10. Medidas: Prepare-se para Milhas, Libras (peso) e Fahrenheit (temperatura)."
                ],

                // TOP 10 DICAS ANTES DE IR
                antes_de_ir: [
                    "1. Baixe os Apps: 'My Disney Experience' e 'Universal Orlando'. Tudo é feito por lá (mapas, filas, comida).",
                    "2. Genie+ / Express Pass: Considere comprar os fura-filas. Sem eles, você fica 2h em uma atração.",
                    "3. Tênis Confortável: Você vai andar de 10km a 15km por dia. Não vá de chinelo ou sapato novo.",
                    "4. Seguro Viagem: OBRIGATÓRIO (moralmente). Uma consulta nos EUA custa 500 dólares. Uma cirurgia faliría você.",
                    "5. Reservas de Restaurante: Restaurantes temáticos (com personagens) abrem reserva 60 dias antes e esgotam em minutos.",
                    "6. Mochila: Leve capa de chuva (poncho), garrafa de água (tem bebedouros), carregador portátil e remédios.",
                    "7. Outlets: Cadastre-se no site do 'Simon Premium Outlets' para ganhar o livreto de descontos extras.",
                    "8. Chegue Cedo: 'Rope Drop' é chegar antes do parque abrir. É a única hora de pegar filas pequenas.",
                    "9. Walmart/Target: Faça uma compra de mercado no primeiro dia (água, lanches) para economizar no parque.",
                    "10. Descanso: Não tente fazer 10 dias seguidos de parque. Intercale dias de compras/piscina ou vai exaustar."
                ],
                // --- NOVO: NÚMEROS IMPORTANTES (ORLANDO) ---
                numeros: [
                    "1. 911 (Emergência Geral): Polícia, Bombeiros e Ambulância (só ligue se for vida ou morte/crime em andamento).",
                    "2. (407) 545-3844 (Consulado do Brasil): Emergências consulares, como morte, prisão ou perda de passaporte.",
                    "3. (407) 246-2414 (Polícia de Orlando - Non-Emergency): Para registrar furtos simples ou ocorrências sem risco imediato.",
                    "4. (407) 303-5600 (AdventHealth Orlando): Um dos principais hospitais da região. O 'Celebration Health' é o mais próximo da Disney.",
                    "5. (407) 825-2001 (Aeroporto MCO): Informações sobre voos e o setor de 'Lost & Found' (Achados e Perdidos).",
                    "6. (407) 560-7959 (Segurança Disney): Número direto de segurança para quem está dentro dos parques ou hotéis Disney.",
                    "7. (407) 224-4233 (Universal Guest Services): Ajuda e emergências dentro dos parques da Universal.",
                    "8. 1-800-222-1222 (Poison Control): Central de intoxicação (caso alguém ingira algo químico ou tenha alergia grave).",
                    "9. 511 (Florida Traffic): Informações em tempo real sobre acidentes e trânsito nas estradas (I-4, Turnpike).",
                    "10. CVS MinuteClinic: Para coisas simples (dor de garganta, febre), vá às farmácias CVS, é muito mais barato que hospital."
                ],
                // SEUS LINKS DE AFILIADO
                links: {
                    hotel: "https://www.booking.com/searchresults.pt-br.html?ss=Orlando&aid=304142", 
                    passeio: "https://www.civitatis.com/br/orlando/", 
                    seguro: "https://www.segurospromo.com.br" 
                }
            },
            {
                name: "Miami",
                // FOTO: Ocean Drive / Art Deco (Wikimedia - Link Estável)
                imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Miami_Skyline_2020.jpg/960px-Miami_Skyline_2020.jpg",
                tags: ["Praia", "Vida Noturna", "Compras"],
                mapa: "https://goo.gl/maps/miami",
                clima: "Tropical. Verão quente e úmido. Inverno seco e muito agradável (Alta Temporada).",
                
                // TOP 10 PONTOS TURÍSTICOS
                pontos_turisticos: [
                    "1. South Beach & Ocean Drive: O coração de Miami. Prédios Art Deco, neons, carrões e a praia mais famosa.",
                    "2. Wynwood Walls: O maior museu de arte de rua ao ar livre do mundo. Paredes grafitadas incríveis para fotos.",
                    "3. Vizcaya Museum and Gardens: Uma mansão estilo renascentista italiano com jardins deslumbrantes na beira da baía.",
                    "4. Little Havana (Calle Ocho): O bairro cubano. Jogue dominó no parque, tome café cubano e sinta a cultura.",
                    "5. Bayside Marketplace: Shopping ao ar livre na marina. Ótimo para passear de barco e ver o skyline.",
                    "6. Miami Design District: O bairro do luxo extremo. Arquitetura futurista e as grifes mais caras do mundo.",
                    "7. Everglades National Park: Passeio de aerobarco para ver jacarés livres nos pântanos (fica pertinho da cidade).",
                    "8. Key Biscayne: Uma ilha mais tranquila e familiar, com praias calmas e o farol histórico de Cape Florida.",
                    "9. Brickell City Centre: O 'Manhattan' de Miami. Prédios espelhados, rooftop bars e vida urbana moderna.",
                    "10. Frost Museum of Science: Museu de ciência incrível com um aquário gigante suspenso no teto."
                ],

                // TOP 10 GASTRONOMIA
                gastronomia: [
                    "1. Joe's Stone Crab: O restaurante mais lendário (e caro). Famoso pelas patolas de caranguejo gigantes.",
                    "2. Sanduíche Cubano: Presunto, porco assado, queijo suíço, picles e mostarda no pão prensado. Clássico.",
                    "3. Ceviche: Devido à influência latina (peruana), Miami tem alguns dos melhores ceviches dos EUA.",
                    "4. Brunch de Domingo: É uma religião em Miami. Mimosas e ovos benedict em hotéis de luxo.",
                    "5. Key Lime Pie: A torta de limão típica da Flórida. Doce, azedinha e cremosa.",
                    "6. Arepas Venezuelanas: Muito comuns em Doral e Miami Beach. Lanche rápido e delicioso.",
                    "7. Cafecito (Café Cubano): Um expresso doce e fortíssimo. Bebe-se de gole em gole para dar energia.",
                    "8. Haitian Griot: Carne de porco frita marinada, típica da grande comunidade haitiana (Little Haiti).",
                    "9. Steakhouse: Churrascarias americanas de elite (como Prime 112) onde celebridades jantam.",
                    "10. Croquetas: Salgadinho de presunto ou frango, vendido em qualquer janelinha (ventanita) de café."
                ],

                // TOP 10 CURIOSIDADES
                curiosidades: [
                    "1. Cidade Espanhola: Mais de 70% da população fala espanhol em casa. É a 'Capital da América Latina'.",
                    "2. Art Deco: Miami Beach tem a maior coleção de arquitetura Art Deco do mundo (mais de 800 prédios).",
                    "3. A Única: É a única grande cidade dos EUA fundada por uma mulher (Julia Tuttle).",
                    "4. Cruzeiros: O Porto de Miami é conhecido como a 'Capital Mundial dos Cruzeiros'.",
                    "5. Neve?: A neve só foi registrada uma vez na história de Miami (19 de janeiro de 1977).",
                    "6. Ilhas Artificiais: Muitas ilhas famosas (como Star Island, onde moram os famosos) foram construídas pelo homem.",
                    "7. Areia Importada: A areia de South Beach é reposta artificialmente para combater a erosão.",
                    "8. Tesouro Pirata: Lendas dizem que piratas como Barba Negra enterraram tesouros nas ilhas da região.",
                    "9. Protetor Solar: O farmacêutico Benjamin Green inventou o protetor solar moderno em Miami (1944).",
                    "10. Parque Subaquático: Biscayne National Park é 95% debaixo d'água, um paraíso para mergulho."
                ],

                // TOP 10 CULTURA & RELIGIÃO
                religiao: [
                    "1. Santería: Religião afro-cubana muito presente. É comum ver oferendas ou lojas de artigos religiosos (Botánicas).",
                    "2. Judaísmo: Miami tem uma das maiores comunidades judaicas dos EUA (especialmente em Miami Beach e Aventura).",
                    "3. Ancient Spanish Monastery: Um mosteiro do século 12 trazido pedra por pedra da Espanha para Miami.",
                    "4. Gesu Catholic Church: A igreja católica mais antiga da cidade, no centro, belíssima.",
                    "5. Cultura Haitiana: O Vodu haitiano também tem presença cultural, especialmente em Little Haiti.",
                    "6. Art Basel: A maior feira de arte das Américas transforma a cidade num museu gigante em Dezembro.",
                    "7. Holocaust Memorial: Um monumento impactante em Miami Beach em memória às vítimas do Holocausto.",
                    "8. Ermita de la Caridad: Santuário dedicado à padroeira de Cuba, ponto de encontro dos exilados.",
                    "9. Diversidade Protestante: Igrejas batistas e pentecostais vibrantes na comunidade afro-americana.",
                    "10. Espiritualidade New Age: Muito forte em Miami Beach, com estúdios de yoga e meditação por todo lado."
                ],

                // TOP 10 EVENTOS E ESTAÇÕES
                eventos_estacoes: [
                    "1. Art Basel (Dezembro): O evento mais chique do ano. Arte, festas exclusivas e celebridades.",
                    "2. Ultra Music Festival (Março): Um dos maiores festivais de música eletrônica do mundo.",
                    "3. Miami Open (Março/Abril): Torneio de tênis que reúne os melhores jogadores do ranking.",
                    "4. Spring Break (Março): Estudantes invadem a cidade. Caos, festas na praia e hotéis lotados.",
                    "5. Furacões (Ago-Out): Temporada de alerta. Fique de olho na previsão se viajar nessa época.",
                    "6. Miami Boat Show (Fevereiro): Exposição de iates de luxo que movimenta bilhões.",
                    "7. Carnaval de Miami (Calle Ocho): O maior festival de rua latino dos EUA.",
                    "8. Inverno (Dez-Fev): A melhor época. Sol, 24ºC, zero umidade. A cidade fica cheia de ricos fugindo do frio.",
                    "9. Verão (Jun-Set): Muito quente e chuvoso. A umidade é sufocante para quem não está acostumado.",
                    "10. Miami Fashion Week (Maio): Desfiles de moda praia e verão."
                ],

                // TOP 10 INFO GERAIS
                info_gerais: [
                    "1. Idioma: 'Portunhol' e Inglês. Você sobrevive 100% só com espanhol em Miami.",
                    "2. Gorjeta (Tip): Muitas vezes já vem incluída na conta como 'Service Charge' (18% ou 20%). Confira antes de pagar!",
                    "3. Carro: Alugar é essencial, mas estacionamento (Valet) é caríssimo ($30-$50 por noite).",
                    "4. Brightline: Trem de alta velocidade que conecta Miami a Orlando em 3h30.",
                    "5. Uber/Lyft: Funcionam bem, mas em South Beach o trânsito pode fazer a corrida ficar cara e lenta.",
                    "6. Segurança: Segura nas áreas turísticas, mas evite andar a pé em áreas desertas do Downtown à noite.",
                    "7. Resort Fee: Taxa extra obrigatória cobrada pelos hotéis por dia (pode chegar a $40/dia).",
                    "8. Dress Code: Baladas e restaurantes chiques barram quem está de bermuda ou chinelo à noite.",
                    "9. Aeroporto: MIA (Internacional). Fica perto de tudo. FLL (Fort Lauderdale) é opção mais barata a 40min.",
                    "10. Água: Potável, mas leve garrafinha para não pagar $5 numa água na praia."
                ],

                // TOP 10 DICAS ANTES DE IR
                antes_de_ir: [
                    "1. Escolha o Bairro: South Beach (agito/praia), Brickell (urbano/chique), Mid-Beach (hotéis resort).",
                    "2. Evite Spring Break: Se for viagem em família, evite março. South Beach fica impossível.",
                    "3. Metromover: É um trem gratuito e automatizado que circula pelo centro e Brickell. Use para economizar Uber.",
                    "4. Lincoln Road: Rua de pedestres cheia de lojas e restaurantes. Cuidado com as 'armadilhas de turista' (comida ruim e cara).",
                    "5. Sol: O sol da Flórida é violento. Use chapéu e protetor mesmo em dias nublados.",
                    "6. Cupons: Procure cupons de desconto para passeios de barco e museus no Groupon.",
                    "7. Happy Hour: É a melhor hora para comer e beber barato em lugares caros.",
                    "8. Trânsito: A I-95 trava nos horários de pico. Use o Waze sempre.",
                    "9. Mosquito: No verão e perto dos Everglades, repelente é o seu melhor amigo.",
                    "10. Compras: Sawgrass Mills (maior outlet, fica a 45min) é melhor que o Dolphin Mall para preços."
                ],
                // --- NOVO: NÚMEROS IMPORTANTES (MIAMI) ---
                numeros: [
                    "1. 911 (Emergência Geral): Polícia, Bombeiros e Ambulância. Use apenas em risco de vida.",
                    "2. (305) 285-6200 (Consulado do Brasil): Fica em Coral Gables. Essencial para perda de passaporte.",
                    "3. (305) 476-5423 (Polícia Não-Emergencial): Para furtos simples ou ocorrências sem perigo imediato.",
                    "4. (305) 585-1111 (Jackson Memorial Hospital): O maior hospital público de referência em traumas.",
                    "5. (305) 674-2121 (Mount Sinai Medical Center): Hospital referência em Miami Beach (perto dos hotéis).",
                    "6. (305) 876-7000 (Aeroporto MIA): Informações sobre voos, terminal e achados e perdidos.",
                    "7. 311 (Miami-Dade Contact Center): Informações sobre transporte público, lixo e serviços da cidade.",
                    "8. (305) 888-8800 (Brightline): Atendimento do trem de alta velocidade que liga Miami a Orlando.",
                    "9. 1-800-342-3557 (Hurricane Hotline): Linha de emergência estadual para informações sobre furacões.",
                    "10. Urgent Care (CVS/Walgreens): Procure 'Walk-In Clinics' em farmácias para febre ou dor leve (muito mais barato que ER)."
                ],
                // SEUS LINKS DE AFILIADO
                links: {
                    hotel: "https://www.booking.com/searchresults.pt-br.html?ss=Miami&aid=304142", 
                    passeio: "https://www.civitatis.com/br/miami/", 
                    seguro: "https://www.segurospromo.com.br" 
                }
            }
        ]
    },
    "Europa": {
        "Portugal": [
            {
                name: "Lisboa",
                // FOTO: Elétrico 28 e a Sé de Lisboa (Wikimedia - Link Clássico e Estável)
                imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Lisbon_%2836831596786%29_%28cropped%29.jpg/1280px-Lisbon_%2836831596786%29_%28cropped%29.jpg",
                tags: ["História", "Gastronomia", "Fado"],
                mapa: "https://goo.gl/maps/lisboa",
                clima: "Mediterrânico. Verões quentes e secos, invernos chuvosos mas amenos (raramente gela).",
                
                // TOP 10 PONTOS TURÍSTICOS
                pontos_turisticos: [
                    "1. Torre de Belém: O ícone da Era dos Descobrimentos. A vista do rio Tejo é linda.",
                    "2. Mosteiro dos Jerónimos: Obra-prima da arquitetura manuelina. É imponente e fica perto da Torre.",
                    "3. Castelo de São Jorge: Fica no topo da colina mais alta. O pôr do sol lá de cima vendo a cidade é mágico.",
                    "4. Praça do Comércio: A sala de visitas da cidade, de frente para o rio. Ótima para caminhar.",
                    "5. Elétrico 28: O bondinho amarelo clássico que sobe e desce as ladeiras estreitas de Alfama.",
                    "6. Oceanário de Lisboa: Um dos maiores e mais bonitos aquários do mundo (no Parque das Nações).",
                    "7. LX Factory: Um complexo industrial antigo que virou centro de lojas descoladas, arte e restaurantes.",
                    "8. Elevador de Santa Justa: Um elevador de ferro antigo no meio da rua que liga a Baixa ao Chiado.",
                    "9. Time Out Market (Mercado da Ribeira): O paraíso da comida. Os melhores chefs da cidade têm quiosques lá.",
                    "10. Sintra (Bate-volta): Fica a 40min de trem. O Palácio da Pena parece um castelo de conto de fadas colorido."
                ],

                // TOP 10 GASTRONOMIA
                gastronomia: [
                    "1. Pastel de Belém: O original (com receita secreta) só vende na fábrica em Belém. Coma quente com canela.",
                    "2. Bacalhau à Brás: Desfiado com batata palha, cebola e ovo. É o prato de bacalhau mais amado.",
                    "3. Sardinha Assada: No verão (especialmente junho), o cheiro de sardinha na brasa toma conta das ruas.",
                    "4. Bifana: O sanduíche nacional. Carne de porco marinada no pão com mostarda. Barato e delicioso.",
                    "5. Caldo Verde: Sopa de batata, couve e chouriço. A entrada perfeita para qualquer jantar.",
                    "6. Polvo à Lagareiro: Polvo assado no forno com muito azeite e batatas a murro.",
                    "7. Ginjinha: Licor de ginja (uma cereja ácida). Tome no copinho de chocolate na Praça do Rossio.",
                    "8. Travesseiro de Sintra: Doce folhado com creme de amêndoas. O rival do pastel de nata.",
                    "9. Queijo da Serra da Estrela: Um queijo cremoso que se come de colher. Imperdível.",
                    "10. Arroz de Pato: Arroz caldoso assado no forno com pedaços de pato e chouriço por cima."
                ],

                // TOP 10 CURIOSIDADES
                curiosidades: [
                    "1. Mais antiga que Roma: Lisboa é uma das cidades mais antigas da Europa Ocidental, 4 séculos mais velha que Roma.",
                    "2. Terremoto de 1755: A cidade foi quase toda destruída por um terremoto e tsunami, renascendo com a arquitetura atual (Baixa Pombalina).",
                    "3. Sete Colinas: Assim como Roma, Lisboa foi construída sobre 7 colinas (prepare as pernas!).",
                    "4. Corvos: O símbolo da cidade traz dois corvos numa barca (lenda de São Vicente).",
                    "5. Ponte 'Americana': A Ponte 25 de Abril foi feita pela mesma empresa da Golden Gate (San Francisco) e é igualzinha.",
                    "6. Calçada Portuguesa: Os desenhos de pedras brancas e pretas no chão inspiraram o calçadão de Copacabana.",
                    "7. Espionagem: Durante a 2ª Guerra, Lisboa (neutra) era o centro mundial de espiões (inspiração para 007).",
                    "8. Livraria Mais Antiga: A Bertrand (no Chiado) é a livraria em funcionamento mais antiga do mundo (desde 1732).",
                    "9. Alfacinhas: É o apelido carinhoso de quem nasce em Lisboa (antigamente havia muita plantação de alface).",
                    "10. Cristo Rei: A estátua gigante na outra margem do rio foi inspirada no Cristo Redentor do Rio de Janeiro."
                ],

                // TOP 10 CULTURA & RELIGIÃO
                religiao: [
                    "1. Santo Antônio: Ele não é de Pádua, é de Lisboa! Nasceu aqui (perto da Sé) e é o santo mais festejado.",
                    "2. Sé de Lisboa: A catedral mais antiga, que parece uma fortaleza (sobreviveu a muitos terremotos).",
                    "3. Fátima: O santuário, um dos maiores do mundo, fica a apenas 1h30 de Lisboa.",
                    "4. Festas dos Santos Populares: Em junho, a cidade vira um arraial gigante com manjericos e música.",
                    "5. Igreja de São Roque: A fachada é simples, mas o interior é a capela mais rica do mundo (muito ouro).",
                    "6. Convento do Carmo: As ruínas da igreja gótica que ficou sem teto no terremoto de 1755. Cenário incrível.",
                    "7. Fado: A música da alma portuguesa. Ouvir fado vadio em Alfama é uma experiência quase religiosa.",
                    "8. Azulejos: Estão em igrejas, palácios e estações de metrô, contando histórias bíblicas e históricas.",
                    "9. Mosteiro dos Jerónimos: Onde estão os túmulos de Vasco da Gama e Luís de Camões.",
                    "10. Panteão Nacional: Onde estão enterradas as maiores personalidades portuguesas, numa antiga igreja barroca."
                ],

                // TOP 10 EVENTOS E ESTAÇÕES
                eventos_estacoes: [
                    "1. Santos Populares (Junho): A maior festa da cidade. Alfama fica lotada, come-se sardinha e bebe-se vinho na rua.",
                    "2. Web Summit (Novembro): O maior evento de tecnologia da Europa acontece aqui todo ano.",
                    "3. Rock in Rio Lisboa (Maio/Junho): Acontece nos anos pares. O clima é igual ao do Brasil.",
                    "4. Natal: A Baixa e o Chiado ganham luzes lindas e o 'Wonderland Lisboa' (parque) é montado no Parque Eduardo VII.",
                    "5. Verão (Jun-Set): Dias longos (sol até 21h30) e muito calor. Ótimo para as praias de Cascais.",
                    "6. Primavera (Mar-Mai): A cidade fica roxa com os Jacarandás em flor. Clima perfeito.",
                    "7. Inverno (Dez-Fev): Chove bastante, mas raramente faz menos de 5ºC. Bom para museus.",
                    "8. ModaLisboa: A semana de moda mais importante de Portugal.",
                    "9. IndieLisboa (Abril): Festival internacional de cinema independente.",
                    "10. Meia Maratona (Março): Atravessa a Ponte 25 de Abril a pé (único dia permitido)."
                ],

                // TOP 10 INFO GERAIS
                info_gerais: [
                    "1. Moeda: Euro (€).",
                    "2. Visto: Brasileiros não precisam de visto para turismo (até 90 dias). Apenas passaporte válido.",
                    "3. Idioma: Português (de Portugal, claro!). Cuidado com as diferenças de palavras (ex: autoclismo = descarga).",
                    "4. Voltagem: 230V. Tomada tipo C ou F (dois pinos redondos). Leve adaptador.",
                    "5. Transporte: O cartão 'Navegante' serve para metrô, ônibus e elétrico. O metrô é excelente.",
                    "6. Uber/Bolt: Muito barato em comparação a outras capitais europeias.",
                    "7. Segurança: Uma das capitais mais seguras da Europa. Cuidado apenas com carteiristas no Elétrico 28.",
                    "8. Tax Free: Guarde notas de compras acima de certo valor para pedir reembolso do imposto no aeroporto.",
                    "9. Gorjeta: Não é obrigatória como nos EUA, mas deixar 1 ou 2 euros é educado.",
                    "10. Água: Da torneira é excelente e potável. Peça 'jarro de água' nos restaurantes (costuma ser grátis)."
                ],

                // TOP 10 DICAS ANTES DE IR
                antes_de_ir: [
                    "1. Calçado Confortável: Lisboa é feita de pedras (calçada portuguesa) e morros. Esqueça o salto alto.",
                    "2. Cuidado no 28: O bondinho 28 é lindo, mas é o local preferido dos batedores de carteira. Mochila para frente!",
                    "3. Belém Cedo: A fila dos Pastéis de Belém assusta, mas anda rápido. A fila do Mosteiro demora horas (compre online).",
                    "4. Restaurantes Turísticos: Evite os restaurantes da Rua Augusta (garçons puxando na rua). Coma nas ruas paralelas.",
                    "5. Sintra: Vá de trem (comboio) saindo da estação Rossio. Ir de carro é pesadelo para estacionar.",
                    "6. Entradas Grátis: A maioria dos museus é grátis aos domingos e feriados de manhã (para residentes, mas às vezes passa).",
                    "7. Aeroporto: O metrô chega dentro do aeroporto. É a forma mais barata de ir ao centro.",
                    "8. Onde Ficar: Chiado e Baixa (perto de tudo), Alfama (histórico/difícil acesso), Avenidas Novas (moderno/plano).",
                    "9. Jantar Tarde: Portugueses jantam tarde (20h ou 21h). Restaurantes abrem para jantar as 19h ou 19h30.",
                    "10. Pedir Café: 'Uma bica' é o expresso. 'Meia de leite' é café com leite. 'Galão' é o copo grande com leite."
                ],
                // --- NOVO: NÚMEROS IMPORTANTES (LISBOA) ---
                numeros: [
                    "1. 112 (Emergência Europeia): O número único para Polícia, Ambulância (INEM) e Bombeiros (funciona em toda Europa).",
                    "2. 808 24 24 24 (SNS 24 - Saúde): LIGUE ANTES de ir ao hospital. Eles fazem triagem e encaminham para o local certo.",
                    "3. (+351) 211 358 587 (Consulado do Brasil): Para emergências graves (prisão, morte, perda de passaporte).",
                    "4. (+351) 213 421 623 (Polícia de Turismo - PSP): Esquadra especializada na Praça dos Restauradores (falam idiomas).",
                    "5. (+351) 218 413 500 (Aeroporto Humberto Delgado): Informações de voos e perdidos e achados.",
                    "6. (+351) 213 500 115 (CP - Comboios): Informações sobre trens para Sintra, Cascais ou Porto.",
                    "7. (+351) 218 842 200 (Hospital de São José): Principal hospital de emergência no centro da cidade (Martim Moniz).",
                    "8. (+351) 218 111 100 (Rádio Táxis): Central confiável para pedir táxi (útil se o Uber estiver muito caro).",
                    "9. (+351) 210 312 700 (Turismo de Lisboa): Postos de informação oficial (Ask Me Lisboa).",
                    "10. 117 (Incêndios Florestais): Número específico para reportar fumaça ou fogo em matas (comum no verão)."
                ],
                // SEUS LINKS DE AFILIADO
                links: {
                    hotel: "https://www.booking.com/searchresults.pt-br.html?ss=Lisbon&aid=304142", 
                    passeio: "https://www.civitatis.com/br/lisboa/", 
                    seguro: "https://www.segurospromo.com.br" 
                }
            }
        ],
        "Espanha": [
            {
                name: "Madrid",
                // FOTO: Gran Vía e Edifício Metropolis (Wikimedia - Link Estável)
                imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Palacio_de_Comunicaciones_-_07.jpg/960px-Palacio_de_Comunicaciones_-_07.jpg",
                tags: ["Arte", "Tapas", "História"],
                mapa: "https://goo.gl/maps/madrid",
                clima: "Continental Mediterrânico. Verão muito quente e seco (Jul/Ago). Inverno frio, mas ensolarado.",
                
                // TOP 10 PONTOS TURÍSTICOS
                pontos_turisticos: [
                    "1. Museu do Prado: Um dos museus de arte mais importantes do mundo (Goya, Velázquez). Reserve horas.",
                    "2. Parque do Retiro: O pulmão verde. Alugue um barquinho no lago e visite o Palácio de Cristal.",
                    "3. Palácio Real: O maior palácio real da Europa Ocidental. O luxo dos salões internos é impressionante.",
                    "4. Plaza Mayor: A praça mais icônica, cercada de prédios vermelhos. Coma um sanduíche de lula por lá.",
                    "5. Puerta del Sol: O marco zero das estradas espanholas (Km 0) e onde fica a estátua do Urso e o Medronheiro.",
                    "6. Gran Vía: A 'Broadway' de Madrid. Teatros, lojas de departamento e arquitetura monumental.",
                    "7. Santiago Bernabéu: O estádio do Real Madrid. O tour é obrigatório para fãs de futebol.",
                    "8. Templo de Debod: Um templo egípcio real de 2.200 anos doado à Espanha. O pôr do sol lá é mágico.",
                    "9. Mercado de San Miguel: Gastronomia gourmet num prédio de ferro antigo. Caro, mas lindo e delicioso.",
                    "10. Reina Sofia: Museu de arte moderna onde está o quadro 'Guernica', de Picasso."
                ],

                // TOP 10 GASTRONOMIA
                gastronomia: [
                    "1. Bocadillo de Calamares: Sanduíche de lula frita. O clássico 'podrão' madrilenho na Plaza Mayor.",
                    "2. Cocido Madrileño: Um cozido potente de grão de bico, carnes e linguiça. Come-se em etapas (sopa, depois grãos e carne).",
                    "3. Churros com Chocolate: Na San Ginés (aberta 24h). O chocolate é grosso, parece um pudim quente.",
                    "4. Jamón Ibérico: O presunto curado espanhol é o melhor do mundo. O 'Bellota' é o mais caro e saboroso.",
                    "5. Tortilla de Patata: Omelete alta de batatas. A eterna briga na Espanha é: com cebola ou sem cebola?",
                    "6. Huevos Rotos: Ovos fritos com a gema mole jogados sobre batatas fritas e presunto. Simples e genial.",
                    "7. Tapas: Pequenas porções para acompanhar a bebida. Em alguns bares tradicionais, a tapa é grátis ao pedir cerveja.",
                    "8. Vermut de Grifo: A bebida do domingo de manhã. Vinho fortificado com ervas, servido com gelo e azeitona.",
                    "9. Callos a la Madrileña: Dobradinha (bucho) picante com chouriço. Prato de inverno.",
                    "10. Paella: Cuidado! Paella é de Valência. Em Madrid, procure lugares autênticos para não comer 'arroz com coisas'."
                ],

                // TOP 10 CURIOSIDADES
                curiosidades: [
                    "1. Restaurante Mais Antigo: O 'Sobrino de Botín' (1725) é certificado pelo Guinness como o mais antigo do mundo em operação.",
                    "2. O Urso é Fêmea?: O símbolo da cidade é 'El Oso y el Madroño', mas alguns historiadores dizem que era uma ursa.",
                    "3. Água da Torneira: Os madrilenhos se orgulham de ter a melhor água da torneira da Espanha (vem da Serra de Guadarrama).",
                    "4. Capital Mais Alta: É a capital mais alta da União Europeia (657m acima do mar), por isso o ar é seco.",
                    "5. Siesta?: Em Madrid, a vida não para tanto quanto no interior, mas muitas lojas pequenas fecham das 14h às 17h.",
                    "6. Metrô Invertido: Na Espanha, os trens andam na mão esquerda (herança inglesa nos primeiros trilhos).",
                    "7. Km 0: Fica na Puerta del Sol. Dizem que pisar nele garante o retorno à cidade.",
                    "8. Museu do Presunto: 'Museo del Jamón' não é um museu, é uma rede de bares baratos com presuntos pendurados no teto.",
                    "9. Vida Noturna: Madrid é famosa por ter a noite mais longa da Europa. As baladas só enchem às 3 da manhã.",
                    "10. Sem Praia: Madrid não tem mar, mas dizem que tem o melhor porto de peixes frescos do mundo (chegam de avião diariamente)."
                ],

                // TOP 10 CULTURA & RELIGIÃO
                religiao: [
                    "1. Catedral de Almudena: Diferente das catedrais góticas escuras, o teto é super colorido e 'pop art'.",
                    "2. San Isidro: O padroeiro da cidade. Em maio, a cidade para para a festa com trajes típicos (chulapos).",
                    "3. Semana Santa: As procissões são solenes, com passos (imagens) pesados e bandas de tambores.",
                    "4. Tourada (Las Ventas): Madrid tem a praça de touros mais importante do mundo. Polêmico, mas parte da cultura.",
                    "5. Flamenco: Embora seja do sul (Andaluzia), Madrid é a capital da indústria. Os melhores 'tablaos' estão aqui.",
                    "6. Monastério das Descalças Reais: Um convento escondido no centro cheio de tesouros de arte.",
                    "7. Reis Magos: Na Espanha, quem traz presente são os Reis Magos (6 de janeiro), com desfiles gigantes.",
                    "8. Templo de Debod: Um templo pagão egípcio no meio de uma cidade católica.",
                    "9. Valle de los Caídos: Monumento polêmico da Guerra Civil (fica nos arredores), escavado na rocha.",
                    "10. El Rastro: O mercado de pulgas de domingo é uma tradição sagrada para os locais."
                ],

                // TOP 10 EVENTOS E ESTAÇÕES
                eventos_estacoes: [
                    "1. Festas de San Isidro (Maio): A festa mais castiça. Piqueniques na pradaria, música e trajes típicos.",
                    "2. Orgulho LGBT (MADO) (Julho): A Parada Gay de Madrid é a maior da Europa. O bairro Chueca ferve.",
                    "3. Natal e Luzes (Dezembro): A cidade investe milhões em luzes. O mercado da Plaza Mayor é lindo.",
                    "4. Verão (Jul-Ago): Calor infernal (40ºC). A cidade esvazia em Agosto. Se puder, evite.",
                    "5. Outono (Out-Nov): A melhor época. O Parque do Retiro fica laranja e o clima é perfeito.",
                    "6. Cavalgada dos Reis (5 de Janeiro): Desfile gigante para as crianças esperarem os presentes.",
                    "7. Mad Cool Festival (Julho): Festival de rock e indie gigante que atrai gente do mundo todo.",
                    "8. Ano Novo (Nochevieja): A tradição é comer 12 uvas nas 12 badaladas do relógio da Puerta del Sol.",
                    "9. Inverno (Jan-Fev): Faz frio (0ºC a 10ºC), mas raramente neva ou chove. O céu é azul cristalino.",
                    "10. Feira do Livro (Maio/Junho): Ocupa o Parque do Retiro com centenas de barracas."
                ],

                // TOP 10 INFO GERAIS
                info_gerais: [
                    "1. Moeda: Euro (€).",
                    "2. Visto: Schengen. Brasileiros não precisam de visto (90 dias), mas precisam de seguro saúde obrigatório.",
                    "3. Fuso Horário: +4h ou +5h em relação ao Brasil (dependendo do horário de verão).",
                    "4. Jantar Tarde: Madrilenho janta às 22h. Restaurante vazio às 20h é normal.",
                    "5. Gorjeta: Não é obrigatória. Arredondar a conta ou deixar moedas é simpático, mas ninguém exige 10%.",
                    "6. Transporte: O Metrô é fantástico e vai a todo lugar. Compre o cartão 'Multi' recarregável.",
                    "7. Aeroporto: Barajas (MAD). O metrô (Linha 8) liga o aeroporto ao centro em 20 minutos.",
                    "8. Tomada: Tipo C ou F (dois pinos redondos). Voltagem 230V.",
                    "9. Tax Free: Compras acima de qualquer valor dão direito a devolução do imposto (DIVA) no aeroporto.",
                    "10. Idioma: Espanhol. Eles falam rápido e alto, mas adoram brasileiros."
                ],

                // TOP 10 DICAS ANTES DE IR
                antes_de_ir: [
                    "1. Museu Grátis: Prado e Reina Sofia têm horários gratuitos (geralmente nas 2 últimas horas do dia). A fila é grande.",
                    "2. Cuidado na Plaza Mayor: Não coma nos restaurantes da praça (são caros e ruins). Coma nas ruas laterais.",
                    "3. Carteiristas: Madrid é segura, mas batedores de carteira no Metrô e Puerta del Sol são profissionais. Zíper fechado!",
                    "4. Uber x Táxi: Os táxis brancos são honestos, usam taxímetro e podem andar nas faixas de ônibus (mais rápidos).",
                    "5. Toledo e Segóvia: Reserve um dia para fazer bate-volta nessas cidades medievais (30min de trem).",
                    "6. Ingressos: Compre Palácio Real e Sagrada Família (se for a BCN) online. Esgota rápido.",
                    "7. Água nos Restaurantes: Pedir 'una jarra de agua' (torneira) é grátis e comum.",
                    "8. Lojas Fechadas: Lembre-se que o comércio de bairro fecha para o almoço (14h-17h). Grandes lojas não fecham.",
                    "9. Barajas T4: Se seu voo é no Terminal 4, saia cedo. Ele é gigantesco e longe dos outros (T1, T2, T3).",
                    "10. Caminhe: O eixo Prado-Retiro-Sol-Palácio dá para fazer tudo a pé e é lindo."
                ],

                // --- NOVO: NÚMEROS IMPORTANTES (MADRID) ---
                numeros: [
                    "1. 112 (Emergência Europeia): Polícia, Bombeiros e Ambulância (atendimento em vários idiomas).",
                    "2. 091 (Polícia Nacional): Para reportar roubos, furtos ou crimes graves.",
                    "3. (+34) 902 102 112 (SATE): Serviço de Atenção ao Turista Estrangeiro. Delegacia especializada onde se fala inglês/português.",
                    "4. 061 (Urgências Médicas): Ambulância e socorro médico rápido.",
                    "5. (+34) 91 702 12 20 (Consulado do Brasil): Fica na Calle Goya. Essencial para perda de passaporte.",
                    "6. (+34) 91 321 10 00 (Aeroporto Barajas): Informações sobre voos e terminais.",
                    "7. 092 (Polícia Municipal): Problemas de trânsito, multas e barulho.",
                    "8. (+34) 91 232 03 20 (Renfe): Informações sobre trens de alta velocidade (AVE) e cercanías.",
                    "9. (+34) 91 547 82 00 (Rádio Táxi): Para pedir táxi por telefone (ou use o app FreeNow).",
                    "10. 010 (Línea Madrid): Informações gerais sobre a cidade, objetos perdidos nos transportes e serviços."
                ],
                
                // SEUS LINKS DE AFILIADO
                links: {
                    hotel: "https://www.booking.com/searchresults.pt-br.html?ss=Madrid&aid=304142", 
                    passeio: "https://www.civitatis.com/br/madrid/", 
                    seguro: "https://www.segurospromo.com.br" 
                }
            }
       ], // <--- VÍRGULA DEPOIS DO PAÍS ANTERIOR (ESPANHA OU PORTUGAL)

        "França": [
            {
                name: "Paris",
                // FOTO: Torre Eiffel e Rio Sena (Wikimedia - Link Estável)
                imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Tour_eiffel_at_sunrise_from_the_trocadero.jpg/1280px-Tour_eiffel_at_sunrise_from_the_trocadero.jpg",
                tags: ["Romance", "Arte", "Gastronomia"],
                mapa: "https://goo.gl/maps/paris",
                clima: "Temperado. Verão agradável (dias longos). Inverno cinza, chuvoso e frio (mas raramente neva muito).",
                
                // TOP 10 PONTOS TURÍSTICOS
                pontos_turisticos: [
                    "1. Torre Eiffel: O ícone mundial. Suba ao topo ou faça um piquenique no Champ de Mars vendo ela piscar à noite.",
                    "2. Museu do Louvre: O maior museu de arte do mundo. A Mona Lisa é pequena, mas o prédio é grandioso.",
                    "3. Arco do Triunfo: A vista lá de cima é a melhor da cidade, vendo as 12 avenidas se encontrarem.",
                    "4. Sacré-Cœur e Montmartre: A basílica branca no topo da colina e o bairro dos artistas e pintores.",
                    "5. Catedral de Notre-Dame: Renascendo das cinzas. A arquitetura gótica é emocionante (reabertura gradual).",
                    "6. Rio Sena: Faça o passeio de barco (Bateaux Mouches) ao pôr do sol. É clichê, mas é lindo.",
                    "7. Museu d'Orsay: Fica numa antiga estação de trem e tem a maior coleção impressionista (Van Gogh, Monet).",
                    "8. Palácio de Versalhes: Bate-volta obrigatório. O luxo da realeza francesa e jardins infinitos.",
                    "9. Champs-Élysées: A avenida mais famosa, cheia de lojas de luxo e cafés, ligando o Arco à praça da Concórdia.",
                    "10. Galeries Lafayette: Mesmo sem comprar nada, entre para ver a cúpula de vidro maravilhosa."
                ],

                // TOP 10 GASTRONOMIA
                gastronomia: [
                    "1. Croissant: O verdadeiro é amanteigado e desmancha na boca. Coma no café da manhã de qualquer 'boulangerie'.",
                    "2. Macarons: O doce colorido e delicado feito de farinha de amêndoas. A Ladurée e Pierre Hermé são as grifes.",
                    "3. Escargot: Caracóis cozidos na manteiga de alho e ervas. Supera o preconceito, é delicioso.",
                    "4. Baguette Tradition: Patrimônio da humanidade. Compre uma e saia comendo a pontinha (le quignon) na rua.",
                    "5. Sopa de Cebola (Soupe à l'Oignon): Gratinada com muito queijo e pão. Perfeita para o inverno.",
                    "6. Steak Tartare: Carne crua picada na ponta da faca e temperada. Um clássico dos bistrôs.",
                    "7. Crêpes: Os de rua (com Nutella) são baratos e salvam a fome. As Galettes (salgadas) são refeição.",
                    "8. Queijos: Camembert, Brie, Roquefort... São mais de 400 tipos. Coma com vinho.",
                    "9. Pato (Confit de Canard): Coxa de pato cozida na própria gordura até ficar macia e com pele crocante.",
                    "10. Profiteroles: Carolinas recheadas de sorvete e cobertas com calda de chocolate quente."
                ],

                // TOP 10 CURIOSIDADES
                curiosidades: [
                    "1. Síndrome de Paris: Turistas japoneses às vezes passam mal de decepção porque a cidade real é mais suja que a dos filmes.",
                    "2. Torre Temporária: A Torre Eiffel era para ser desmontada 20 anos após a construção. Os parisienses a odiavam.",
                    "3. Catacumbas: Existe uma 'cidade dos mortos' subterrânea com ossos de 6 milhões de pessoas (visitável).",
                    "4. Pão Grátis: A água e o pão (cestinha) são gratuitos e ilimitados nos restaurantes.",
                    "5. Menor Rua: A 'Rue des Degrés' tem apenas 5 metros de comprimento (só uma escada).",
                    "6. Cidade Luz: O apelido veio porque Paris foi uma das primeiras a ter iluminação pública (a gás) na rua.",
                    "7. Pont des Arts: Os cadeados do amor pesavam tanto (45 toneladas) que estavam derrubando a ponte e foram removidos.",
                    "8. Louvre Gigante: Se você olhasse cada obra por 30 segundos, levaria 100 dias para ver tudo.",
                    "9. Fantasma da Ópera: A lenda nasceu na Ópera Garnier, que realmente tem um lago subterrâneo.",
                    "10. Champanhe: Só é Champanhe se vier da região de Champagne. O resto é espumante (Crémant)."
                ],

                // TOP 10 CULTURA & RELIGIÃO
                religiao: [
                    "1. Catedral de Notre-Dame: O coração do catolicismo francês e ponto zero das estradas da França.",
                    "2. Sacré-Cœur: Basílica dedicada ao Sagrado Coração. A adoração eucarística lá não para há mais de 100 anos (24h/dia).",
                    "3. Sainte-Chapelle: Tem os vitrais mais bonitos do mundo. Parece que você está dentro de uma joia.",
                    "4. Grande Mesquita de Paris: Um oásis muçulmano com jardins lindos e um salão de chá com doces árabes.",
                    "5. Igreja da Madeleine: Parece um templo grego gigante, sem cruz no topo, mas é uma igreja católica.",
                    "6. Panteão: Onde a França 'adora' seus heróis nacionais (Voltaire, Rousseau, Victor Hugo estão enterrados lá).",
                    "7. Laicidade: A religião é assunto privado na França. Símbolos religiosos ostensivos são proibidos em escolas.",
                    "8. Cemitério Père Lachaise: O túmulo de Allan Kardec (Espiritismo) é o mais florido e visitado do cemitério.",
                    "9. Abadia de Saint-Germain-des-Prés: A igreja mais antiga de Paris (séc VI), cheia de história medieval.",
                    "10. Natal: As missas de Natal em Notre-Dame (ou Saint-Sulpice enquanto reforma) são espetaculares."
                ],

                // TOP 10 EVENTOS E ESTAÇÕES
                eventos_estacoes: [
                    "1. Dia da Bastilha (14 de Julho): O feriado nacional. Desfile militar e fogos na Torre Eiffel.",
                    "2. Fashion Week (Set/Mar): A cidade enche de modelos e celebridades. É difícil conseguir hotel.",
                    "3. Roland Garros (Maio/Junho): O torneio de tênis mais charmoso do mundo, no saibro.",
                    "4. Tour de France (Julho): A chegada da maior prova de ciclismo do mundo acontece na Champs-Élysées.",
                    "5. Primavera (Abr-Jun): A cidade fica rosa com as cerejeiras. Clima instável, mas lindo.",
                    "6. Nuit Blanche (Outubro): Arte contemporânea invade as ruas a noite toda de graça.",
                    "7. Natal: As vitrines das Galeries Lafayette e Printemps são atrações turísticas animadas.",
                    "8. Verão (Jun-Set): Anoitece às 22h. Os parisienses fazem piquenique na beira do Sena.",
                    "9. Vindima (Outubro): Festa da colheita da uva em Montmartre (sim, tem um vinhedo dentro de Paris!).",
                    "10. Inverno (Jan-Fev): Promoções (Soldes). As lojas dão descontos reais regulados pelo governo."
                ],

                // TOP 10 INFO GERAIS
                info_gerais: [
                    "1. Moeda: Euro (€).",
                    "2. Visto: Schengen (não precisa para turismo até 90 dias). Passaporte válido por 6 meses.",
                    "3. Bonjour: É OBRIGATÓRIO. Se você não disser 'Bonjour' ao entrar na loja, será mal atendido. É a regra de ouro.",
                    "4. Gorjeta (Pourboire): O serviço já está incluído. Deixar moedinhas é gentileza, não obrigação.",
                    "5. Água (Carafe d'eau): Peça sempre 'une carafe d'eau'. É água da torneira, gelada e GRÁTIS por lei.",
                    "6. Metrô: O sistema é velho (tem cheiro forte), mas te leva a qualquer lugar. Guarde o bilhete até sair!",
                    "7. Tomada: Tipo E (dois pinos com um buraco para o terra da tomada). Leve adaptador universal.",
                    "8. Banheiros: Públicos na rua são autolimpantes (Sanisette). Muitos cafés cobram se você não consumir.",
                    "9. Elevador (Rez-de-chaussée): O térreo é o '0' ou 'RC'. O primeiro andar é o que subimos de escada.",
                    "10. Domingo: Quase tudo fecha (mercados, lojas). Só o Marais e áreas turísticas funcionam."
                ],

                // TOP 10 DICAS ANTES DE IR
                antes_de_ir: [
                    "1. Golpe do Anel: Se alguém achar um anel de ouro no chão e te oferecer, SAIA. É golpe para tirar dinheiro.",
                    "2. Golpe da Pulseira: Em Montmartre, homens tentam amarrar uma fita no seu braço à força. Mantenha as mãos nos bolsos.",
                    "3. Navigo Découverte: Se chegar na segunda ou terça, faça o cartão semanal de transporte. Economiza muito.",
                    "4. Museum Pass: Vale a pena se você for 'ratinho de museu' e quiser furar filas de bilheteria.",
                    "5. Jantar Cedo: Restaurantes abrem 19h e fecham cozinha as 22h. Não atrase.",
                    "6. Piquenique: Compre queijo, vinho e pão no mercado e coma na praça. É parisiense e barato.",
                    "7. Uber: Funciona, mas em horários de pico o Metrô é muito mais rápido.",
                    "8. Café no Balcão: O café bebido em pé no balcão custa metade do preço do que sentado na mesa.",
                    "9. Escada Rolante: Mantenha-se à DIREITA. Se ficar na esquerda parado, será atropelado por um local apressado.",
                    "10. Agosto: A cidade para. Muitos restaurantes pequenos fecham para férias."
                ],

                // --- NOVO: NÚMEROS IMPORTANTES (PARIS) ---
                numeros: [
                    "1. 112 (Emergência Europeia): Número único para qualquer emergência (funciona mesmo sem crédito).",
                    "2. 15 (SAMU): Emergências médicas graves e ambulância.",
                    "3. 17 (Polícia - Police Secours): Para crimes em andamento ou perigo imediato.",
                    "4. 18 (Bombeiros - Pompiers): Incêndios, vazamento de gás e acidentes de trânsito graves.",
                    "5. (+33) 1 45 61 63 00 (Consulado do Brasil): Fica na 65 Avenue Franklin Roosevelt. Perda de passaporte e auxílio.",
                    "6. 36 24 (SOS Médecins): Médicos que vão até o seu hotel 24h (serviço pago, mas excelente se não for risco de vida).",
                    "7. (+33) 1 53 71 53 71 (Achados e Perdidos - Préfecture): Central de objetos perdidos de Paris.",
                    "8. 39 93 (Aeroportos de Paris): Informações sobre Charles de Gaulle (CDG) e Orly (ORY).",
                    "9. (+33) 1 40 05 48 48 (Centro Antiveneno): Em caso de intoxicação alimentar grave ou produtos químicos.",
                    "10. 34 30 (Farmácias de Plantão): Para descobrir qual farmácia está aberta de madrugada na sua região."
                ],
                
                // SEUS LINKS DE AFILIADO
                links: {
                    hotel: "https://www.booking.com/searchresults.pt-br.html?ss=Paris&aid=304142", 
                    passeio: "https://www.civitatis.com/br/paris/", 
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
        <div class="cat-card" onclick="showCategory('numeros')"><i class="ri-phone-line"></i><h4>SOS & Útil</h4></div>
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
            // Agora usa formatList para garantir a lista
            content = formatList(currentCity.religiao); 
            break;
        case 'curiosidades': 
            title = "Curiosidades"; 
            // Agora usa formatList para garantir a lista
            content = formatList(currentCity.curiosidades); 
            break;
       case 'eventos':
            title = "Calendário & Estações";
            // Se tiver a lista nova (eventos_estacoes), usa ela. Se não, usa o antigo.
            content = currentCity.eventos_estacoes ? formatList(currentCity.eventos_estacoes) : `<p><strong>Estações:</strong> ${currentCity.estacoes}</p><p><strong>Eventos:</strong> ${currentCity.eventos}</p>`;
            break;
        case 'geral':
            title = "Informações Gerais";
            // Se tiver a lista nova (info_gerais), usa ela. Se não, usa a antiga moeda.
            content = currentCity.info_gerais ? formatList(currentCity.info_gerais) : `<p><strong>Moeda:</strong> ${currentCity.moeda}</p>`;
            break;
    case 'antes':
            title = "Antes de Ir (Dicas de Ouro)";
            // CORRIGIDO: Agora usa o 'format' para garantir que os 10 itens apareçam
           content = currentCity.antes_de_ir ? formatList(currentCity.antes_de_ir) : `<p><strong>antes:</strong> ${currentCity.antes}</p>`;
            break;
            case 'numeros':
            title = "Números Importantes";
            content = currentCity.numeros ? formatList(currentCity.numeros) : "<p>Números não cadastrados para esta cidade.</p>";
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

function closeModal() { modal.classList.remove('active'); }
modal.onclick = (e) => { if (e.target === modal) closeModal(); };
init();
// --- SISTEMA DE BUSCA GLOBAL ---
function searchSystem() {
    const term = document.getElementById('globalSearch').value.toLowerCase();
    const grid = document.getElementById('mainDisplay');
    
    // Se o campo estiver vazio, não faz nada (ou você pode resetar para uma tela inicial)
    if(term.length === 0) return;

    // Atualiza Títulos
    document.getElementById('pageTitle').innerText = "Resultados da Busca";
    document.getElementById('pageSubtitle').innerText = `Procurando por: "${term}"`;

    grid.innerHTML = ''; // Limpa a tela
    let foundCount = 0;

    // Varre o Banco de Dados Inteiro
    Object.keys(worldData).forEach(continente => {
        const paises = worldData[continente];
        Object.keys(paises).forEach(pais => {
            const cidades = paises[pais];
            
            cidades.forEach(cidade => {
                // Verifica se o termo digitado bate com o Nome da Cidade, País ou Tags
                if (cidade.name.toLowerCase().includes(term) || 
                    pais.toLowerCase().includes(term) ||
                    (cidade.tags && cidade.tags.some(tag => tag.toLowerCase().includes(term)))) {
                    
                    foundCount++;
                    
                    // Cria o Card (Reutilizando a lógica visual)
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

    // Se não achar nada
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
// --- FUNÇÃO PARA O MENU MOBILE ---
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

// ATUALIZE A FUNÇÃO loadCities PARA FECHAR O MENU AUTOMATICAMENTE
function loadCities(nomePais, listaCidades) {
    // ... (código anterior igual) ...
    document.getElementById('pageTitle').innerText = nomePais;
    document.getElementById('pageSubtitle').innerHTML = `${listaCidades.length} Destinos encontrados`;
    const grid = document.getElementById('mainDisplay');
    grid.innerHTML = '';

    // FECHA O MENU SE ESTIVER NO CELULAR
    if(window.innerWidth <= 768) {
        toggleSidebar(); 
    }

    listaCidades.forEach(cidade => {
        // ... (código de criar card igual) ...
        const card = document.createElement('div');
        card.className = 'city-card';
        // ... resto do código do card ...
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