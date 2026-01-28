// --- CONFIGURAÇÃO GLOBAL ---
const countryFlags = { "Brasil": "br", "Portugal": "pt", "Marrocos": "ma", "Japão": "jp", "Austrália": "au", "Estados Unidos": "us", "Argentina": "ar", "Espanha": "es", "França": "fr", "Chile": "cl", "Inglaterra": "gb", "Itália": "it", "República Dominicana": "do", "México": "mx", "Colômbia": "co" };
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
                name: "Rio de Janeiro",
                estimativa_custos: {
                    alimentacao: "R$ 120",
                    hospedagem: "R$ 280",
                    transporte: "R$ 45",
                    atracoes: "R$ 90"
                },
                
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
                // --- NOVO: RISCOS E ERROS (RIO DE JANEIRO) ---
                riscos: [
                    "1. Gangue da Bicicleta: No Centro e Copacabana, evite usar o celular na borda da calçada. Eles passam de bike e puxam.",
                    "2. Praias à Noite: Não fique na areia de Copacabana ou Ipanema de madrugada. É escuro e alvo fácil para assaltos.",
                    "3. Golpe da Caipirinha: Em quiosques, pergunte o preço ANTES. Eles oferecem 'prova grátis' e cobram R$ 50 depois.",
                    "4. Centro no Domingo: Evite a região da Candelária e Centro Financeiro no fim de semana. Fica deserto e perigoso.",
                    "5. GPS na Favela: Cuidado ao usar Waze/Google Maps na Linha Vermelha ou Amarela. Não entre em ruas desconhecidas para cortar caminho.",
                    "6. Táxi sem Taxímetro: Recuse táxis que querem cobrar preço fechado 'no grito'. Exija o taxímetro ou use Uber.",
                    "7. Trilhas Sozinho: Não faça trilhas desertas (como a do Morro da Urca ou Corcovado) sozinho e com equipamentos caros.",
                    "8. Cambistas: Nunca compre ingressos de desconhecidos na porta do Maracanã ou Bondinho. São quase sempre falsos.",
                    "9. Pedintes Agressivos: Na Lapa, alguns vendedores de balas podem ser agressivos se você negar. Seja firme, mas educado e siga andando.",
                    "10. Maré Alta: Respeite a bandeira vermelha. O mar do Rio tem correntes de retorno que puxam até nadadores experientes."
                ],
                // COLE ISSO AQUI:
                roteiros: {
                    "curto": {
                        titulo: "Roteiro Express (1 a 2 Dias)",
                        texto: [
                            "Dia 1 (Clássico): Comece cedo no Cristo Redentor (trem). Almoce em Copacabana. Final de tarde no Pão de Açúcar para o pôr do sol.",
                            "Dia 1 (Noite): Jantar e drinks em Ipanema (Rua Garcia d'Ávila).",
                            "Dia 2 (Vibe Carioca): Manhã no Forte de Copacabana (Confeitaria Colombo). Tarde na praia (Posto 9 ou 10). Fim de tarde no Arpoador."
                        ]
                    },
                    "medio": {
                        titulo: "Roteiro Essencial (3 a 5 Dias)",
                        texto: [
                            "Dia 1 e 2: Siga o Roteiro Express acima.",
                            "Dia 3 (História e Boemia): Centro Histórico (Museu do Amanhã + Mural Kobra). Almoço na Confeitaria Colombo (Centro). Tarde em Santa Teresa (Bondinho) e noite na Lapa (Rio Scenarium).",
                            "Dia 4 (Natureza): Jardim Botânico + Parque Lage (café da manhã). Tarde na Lagoa Rodrigo de Freitas (pedalinho ou bike).",
                            "Dia 5 (Lado B): Prainha e Grumari (praias selvagens na zona oeste) se estiver de carro. Ou trilha da Pedra Bonita (fácil e vista incrível)."
                        ]
                    },
                    "longo": {
                        titulo: "Roteiro Completo (7+ Dias)",
                        texto: [
                            "Dias 1 a 5: Siga o Roteiro Essencial acima.",
                            "Dia 6 (Serra ou Mar): Bate-volta para Arraial do Cabo (Caribe Brasileiro) ou Petrópolis (Imperial). Escolha um!",
                            "Dia 7 (Esporte e Visual): Trilha da Pedra da Gávea (para fortes) ou Voo de Asa Delta em São Conrado.",
                            "Dia 8 (Despedida): Compras no Barra Shopping ou dia relax na praia do Leblon."
                        ]
                        
                    },
                },
                
                
                links: {
                    hotel: "https://www.booking.com/searchresults.pt-br.html?city=-666610&aid=304142", 
                    passeio: "https://www.civitatis.com/br/rio-de-janeiro/", 
                    seguro: "https://www.segurospromo.com.br" 
                },
                
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
                // --- NOVO: RISCOS E ERROS (SÃO PAULO) ---
                riscos: [
                    "1. Gangue da Bike (Paulista): Na Av. Paulista, NUNCA use o celular na beira da calçada. Eles passam de bicicleta e arrancam da mão em segundos.",
                    "2. Vidro Aberto no Trânsito: Em engarrafamentos ou semáforos, mantenha os vidros fechados. Assaltantes quebram o vidro para pegar o celular no painel.",
                    "3. Golpe do Tinder: Cuidado extremo ao marcar encontros por apps. O 'Golpe do Amor' (sequestro relâmpago) aumentou muito em SP.",
                    "4. Centro Histórico (Sé/República): A região da Praça da Sé e arredores é muito perigosa devido ao alto número de usuários de drogas e furtos. Evite.",
                    "5. Cracolândia: O fluxo de usuários muda de lugar no centro (Santa Ifigênia/Campos Elíseos). Se ver aglomeração na rua, dê meia volta imediatamente.",
                    "6. Pix na Rua: Evite andar com o app do banco principal no celular de rua. Tenha um celular 'do ladrão' ou limite de Pix baixo.",
                    "7. Falso Entregador: Motoqueiros com mochila de iFood abordam pedestres ou carros parados. Fique atento a motos com duas pessoas.",
                    "8. Golpe da Maquininha (Táxi/Ambulante): Confira sempre o valor no visor antes de aproximar o cartão. Eles digitam um valor maior ou trocam o cartão.",
                    "9. Vila Madalena à Noite: Bairro boêmio seguro, mas na saída das baladas, fique atento ao esperar Uber na calçada escura.",
                    "10. Trânsito na Chuva: SP para quando chove. Não marque voos ou compromissos com horário justo em dias de tempestade, você vai perder."
                ],
                // COLE O ROTEIRO ABAIXO:
                roteiros: {
                    "curto": {
                        titulo: "Roteiro Express (1 a 2 Dias)",
                        texto: [
                            "Dia 1 (O Clássico): Comece na Av. Paulista (MASP, Sesc, Japan House). Almoce por lá. Tarde no Parque Ibirapuera. Jantar: Uma pizza paulistana tradicional.",
                            "Dia 2 (Centro Histórico): Farol Santander (vista), Pátio do Colégio e o famoso sanduíche de mortadela no Mercadão Municipal.",
                            "Dica Extra: Se sobrar tempo, dê um pulo no Beco do Batman (Vila Madalena) para fotos incríveis."
                        ]
                    },
                    "medio": {
                        titulo: "Roteiro Essencial (3 a 5 Dias)",
                        texto: [
                            "Dias 1 e 2: Siga o Roteiro Express acima.",
                            "Dia 3 (Cultura e Luz): Estação da Luz, Museu da Língua Portuguesa e Pinacoteca (almoce no café da Pina). Tarde no Bairro da Liberdade (compras e comida asiática).",
                            "Dia 4 (Lado B e Boemia): Manhã no Museu do Futebol (Pacaembu). Tarde de compras na Oscar Freire ou 25 de Março (opostos!). Noite na Vila Madalena (bares).",
                            "Dia 5 (Gastronomia): Almoço no Eataly ou em uma cantina do Bixiga. Tarde no MIS (Museu da Imagem e do Som) ou Instituto Moreira Salles."
                        ]
                    },
                    "longo": {
                        titulo: "Roteiro Completo (7+ Dias)",
                        texto: [
                            "Dias 1 a 5: Siga o Roteiro Essencial acima.",
                            "Dia 6 (Bate-volta Vinho): Roteiro do Vinho em São Roque (1h de SP). Almoço italiano e degustação em vinícolas.",
                            "Dia 7 (Bate-volta Arte ou Praia): Visite Embu das Artes (domingo é melhor) para artesanato OU desça a serra para Santos (Museu do Café e orla).",
                            "Dia 8 (Descanso Urbano): Brunch em uma padaria artesanal (Padoca do Maní ou similar) e tarde tranquila no Parque Villa-Lobos."
                        ]
                    }
                },
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
                // --- NOVO: RISCOS E ERROS (GRAMADO) ---
                riscos: [
                    "1. Subestimar o Frio: A umidade da serra faz a sensação térmica ser muito menor que o termômetro. Leve casaco pesado mesmo se a previsão for 10ºC.",
                    "2. Filas de Fondue: Em alta temporada (julho), chegar num restaurante famoso sem reserva às 20h significa esperar 2 horas na rua gelada. Reserve!",
                    "3. Neblina na Estrada: A subida da serra à noite ou de manhã cedo costuma ter neblina (cerração) zero visibilidade. Dirija com muito cuidado.",
                    "4. Voltagem Errada: Gramado é 220V (diferente de Porto Alegre que é 110V). Cuidado para não queimar secadores e chapinhas.",
                    "5. Estacionamento no Centro: É caro e difícil de achar. O sistema rotativo tem fiscais rigorosos. Use Uber ou estacione mais longe.",
                    "6. Fondue Muito Barato: Desconfie de promoções agressivas na rua (ex: R$ 39,90). Geralmente a qualidade do queijo e chocolate é baixa.",
                    "7. Natal Luz em Cima da Hora: Os ingressos para os grandes shows esgotam meses antes. Não deixe para comprar na bilheteria na hora.",
                    "8. Achar que Neva Sempre: Neve é um fenômeno raro. Não viaje com a certeza absoluta de ver neve para não se frustrar (mas geada é comum!).",
                    "9. Chocolate 'Pega Turista': Existem dezenas de marcas. Prove antes de comprar caixas grandes. Algumas têm mais gordura hidrogenada que cacau.",
                    "10. Uber na Chuva: Quando chove ou acaba um show do Natal Luz, conseguir um Uber pode demorar muito. Tenha o telefone de um Rádio Táxi salvo."
                ],
                // COLE O ROTEIRO ABAIXO:
                roteiros: {
                    "curto": {
                        titulo: "Roteiro Express (1 a 2 Dias)",
                        texto: [
                            "Dia 1 (O Charme do Centro): Comece na Av. Borges de Medeiros, Rua Coberta e Igreja São Pedro. Tarde no Lago Negro (pedalinho). Jantar: Sequência de Fondue obrigatória.",
                            "Dia 2 (Clássicos): Manhã no Mini Mundo. Tarde: Visite uma Fábrica de Chocolate (Florybal ou Prawer) e tire foto no Pórtico de entrada.",
                            "Dica Extra: Se der tempo, uma passada rápida na Catedral de Pedra em Canela (7km ao lado)."
                        ]
                    },
                    "medio": {
                        titulo: "Roteiro Essencial (3 a 5 Dias)",
                        texto: [
                            "Dias 1 e 2: Siga o Roteiro Express acima.",
                            "Dia 3 (Aventura na Neve): Dia dedicado ao Snowland (roupa térmica inclusa) ou Acquamotion (águas termais), dependendo do seu estilo.",
                            "Dia 4 (Explorando Canela): Bondinhos Aéreos (Cascata do Caracol) e Skyglass (plataforma de vidro). Almoço em Canela. Fim de tarde no Castelinho Caracol.",
                            "Dia 5 (Vistas Incríveis): Olivas de Gramado (pôr do sol com piquenique e música) ou Le Jardin (Parque de Lavanda)."
                        ]
                    },
                    "longo": {
                        titulo: "Roteiro Completo (7+ Dias)",
                        texto: [
                            "Dias 1 a 5: Siga o Roteiro Essencial acima.",
                            "Dia 6 (Uva e Vinho): Bate-volta para Bento Gonçalves. Passeio de Maria Fumaça e visita às vinícolas do Vale dos Vinhedos (Miolo ou Casa Valduga).",
                            "Dia 7 (Raízes): Nova Petrópolis (Labirinto Verde e Praça das Flores). Almoço alemão tradicional.",
                            "Dia 8 (Gula Final): Manhã de compras na Rua Coberta e despedida com um Café Colonial farto (Bela Vista ou Coelho)."
                        ]
                    }
                },
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
                // --- NOVO: RISCOS E ERROS (FOZ DO IGUAÇU) ---
                riscos: [
                    "1. 'Guias' de Rua no Paraguai: Ao cruzar a ponte, homens vão te abordar oferecendo ajuda ou estacionamento. IGNORE. Eles ganham comissão para te levar em lojas ruins.",
                    "2. Quatis nas Cataratas: Eles parecem fofos, mas são agressivos e mordem se sentirem cheiro de comida. Não abra lanches nas trilhas, eles atacam em bando.",
                    "3. Eletrônicos na Rua: Nunca compre pen drives, perfumes ou celulares de ambulantes na rua em Ciudad del Este. São 100% falsificados ou golpe (caixa vazia).",
                    "4. Molhar Eletrônicos: Na passarela da Garganta do Diabo, o spray de água é violento. Se seu celular não for à prova d'água, use capinha ou vai perder o aparelho.",
                    "5. Cota de Compras: A cota é de US$ 500 via terrestre. Se passar disso, declare! A fiscalização na aduana brasileira é frequente e a multa é alta.",
                    "6. Táxi x Uber na Fronteira: Uber brasileiro não pode cruzar a fronteira (o seguro não cobre). Para ir ao Paraguai/Argentina, use ônibus internacional, táxi ou transfer.",
                    "7. Documento Vencido: RG com mais de 10 anos ou em mau estado é barrado na imigração da Argentina. Leve Passaporte ou RG novo.",
                    "8. Lojas sem Garantia: No Paraguai, teste o produto NA LOJA antes de sair. A garantia 'soy yo' não existe. Exija testar na hora.",
                    "9. Câmbio no Aeroporto: A cotação dentro do aeroporto é péssima. Troque o mínimo possível e deixe para trocar o resto nas casas de câmbio da cidade.",
                    "10. Macuco Safari: Se tiver problemas de coluna ou estiver grávida, evite. O barco bate muito na água e a aventura é radical de verdade."
                ],
                // --- NOVO: ROTEIRO AUTOMÁTICO (FOZ DO IGUAÇU) ---
                roteiros: {
                    "curto": {
                        titulo: "Roteiro Express (1 a 2 Dias)",
                        texto: [
                            "Dia 1 (Obrigatório): Manhã nas Cataratas Brasileiras (trilha + almoço no Porto Canoas). Tarde no Parque das Aves (logo na frente). Noite: Marco das 3 Fronteiras (show e pôr do sol).",
                            "Dia 2 (Compras e Energia): Manhã de compras no Paraguai (vá cedo, volte 13h). Tarde na Usina de Itaipu (Panorâmica). Noite: Jantar árabe ou Churrascaria Rafain."
                        ]
                    },
                    "medio": {
                        titulo: "Roteiro Essencial (3 a 5 Dias)",
                        texto: [
                            "Dias 1 e 2: Siga o Roteiro Express acima.",
                            "Dia 3 (Lado Argentino): Dedique o dia todo às Cataratas Argentinas. É muita caminhada. Jante em Puerto Iguazú (Bife de Chorizo).",
                            "Dia 4 (Aventura): Macuco Safari (barco nas cataratas) pela manhã. Tarde livre para piscina do hotel ou Museu de Cera (se tiver crianças).",
                            "Dia 5 (Cultura): Templo Budista e Mesquita pela manhã. Almoço no Rafaian (costelão). Tarde relax no Blue Park ou compras no Duty Free (AR)."
                        ]
                    },
                    "longo": {
                        titulo: "Roteiro Completo (7+ Dias)",
                        texto: [
                            "Dias 1 a 5: Siga o Roteiro Essencial acima.",
                            "Dia 6 (Exploração): Kattamaram (passeio de barco no lago de Itaipu ao pôr do sol) ou Refúgio Biológico Bela Vista.",
                            "Dia 7 (Compras VIP): Dia focado em compras de luxo no Duty Free Puerto Iguazú e vinhos nas vinotecas argentinas.",
                            "Dia 8 (Natureza Secreta): Aguaray Eco Esportes (canoagem e trilha) ou Cachoeiras Secretas de Foz."
                        ]
                    }
                },
            
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
                // --- NOVO: RISCOS E ERROS (FLORIANÓPOLIS) ---
                riscos: [
                    "1. Fila de Trânsito: O erro nº 1. No verão, cruzar a ilha (Centro -> Norte ou Lagoa) pode levar 3 horas. Escolha um lado da ilha e fique nele.",
                    "2. Vento Sul: O 'Vento Sul' estraga a praia (esfria e joga areia). Se ventar sul, fuja para o Norte da ilha ou passeios fechados.",
                    "3. Água Imprópria (Vírus): No pico da temporada, praias movimentadas (Canasvieiras/Ingleses) podem ficar impróprias. Consulte o site do IMA (Balneabilidade) antes de entrar.",
                    "4. Choque Térmico: Não espere água quentinha do Nordeste. A água é gelada (corrente das Malvinas). Entre devagar para evitar cãibras.",
                    "5. Preços de Jurerê: Sentar em um Beach Club sem perguntar o preço antes pode custar uma fortuna. Uma água pode custar R$ 15 e uma porção R$ 200.",
                    "6. Trilhas de Chinelo: A trilha da Lagoinha do Leste é difícil e íngreme. Turistas de chinelo frequentemente torcem o pé e precisam de resgate.",
                    "7. Furto em Carros: Ao estacionar nas praias (especialmente Joaquina e Mole), NUNCA deixe mochilas ou eletrônicos visíveis dentro do carro.",
                    "8. Golpe do Aluguel: Cuidado com casas de temporada incríveis e baratas no OLX/Facebook. O golpe do aluguel falso explode no verão.",
                    "9. Uber Cancelando: Com o trânsito parado, motoristas cancelam muito. Em dias de chuva ou horários de pico, é difícil conseguir carro.",
                    "10. Tainha 'Falsa': Na época da tainha, alguns restaurantes vendem tainha congelada do ano passado como fresca. Pergunte se é 'pesca do dia'."
                ],
                // --- NOVO: ROTEIRO AUTOMÁTICO (FLORIPA) ---
                roteiros: {
                    "curto": {
                        titulo: "Roteiro Express (1 a 2 Dias)",
                        texto: [
                            "Dia 1 (Cartões-Postais): Manhã no Centro (Mercado Público + Praça XV). Tarde na Lagoa da Conceição (mirante) e Joaquina (dunas). Pôr do sol na Ponte Hercílio Luz.",
                            "Dia 2 (Norte ou Sul): Escolha um lado para não perder tempo no trânsito. Norte: Jurerê Internacional e Forte São José. OU Sul: Ilha do Campeche (reserve antes) e Ribeirão da Ilha."
                        ]
                    },
                    "medio": {
                        titulo: "Roteiro Essencial (3 a 5 Dias)",
                        texto: [
                            "Dias 1 e 2: Siga o Roteiro Express acima.",
                            "Dia 3 (História e Gastronomia): Santo Antônio de Lisboa (caminhada e almoço). Tarde em Sambaqui (pôr do sol mais bonito).",
                            "Dia 4 (Natureza): Trilha da Lagoinha do Leste (se tiver fôlego) ou Praia do Matadeiro + Armação.",
                            "Dia 5 (Família/Relax): Projeto Tamar na Barra da Lagoa. Almoço na Costa da Lagoa (vá de barquinho, é lindo)."
                        ]
                    },
                    "longo": {
                        titulo: "Roteiro Completo (7+ Dias)",
                        texto: [
                            "Dias 1 a 5: Siga o Roteiro Essencial acima.",
                            "Dia 6 (Bate-volta): Guarda do Embaú (rio encontrando o mar) ou Bombinhas (mergulho).",
                            "Dia 7 (Aventura): Mergulho na Ilha do Arvoredo ou Sandboard nas dunas da Joaquina.",
                            "Dia 8 (Despedida): Café da manhã colonial e compras de artesanato no centro."
                        ]
                    }
                },
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
                // --- NOVO: RISCOS E ERROS (SALVADOR) ---
                riscos: [
                    "1. 'Pintura' no Pelourinho: Cuidado com rapazes que chegam pintando seu braço dizendo ser 'presente'. Eles vão cobrar R$ 50 de forma intimidada depois. Recuse firme.",
                    "2. Fita do Bonfim 'Amarrada': Nunca deixe ninguém amarrar uma fita no seu braço 'de graça'. É a isca para pedir dinheiro ou vender algo. Pegue a fita na igreja.",
                    "3. Celular no Carnaval/Festas: Em aglomerações (como no Porto da Barra ou festas de largo), use doleira. Furtos de celular do bolso são extremamente comuns.",
                    "4. Corrente de Ouro: Evite ostentar joias, relógios caros ou correntes de ouro no Centro Histórico e Cidade Baixa. Chama muita atenção.",
                    "5. Acarajé 'Quente': Se você não é baiano, NUNCA peça acarajé 'quente' (com muita pimenta). A pimenta baiana é fortíssima e pode estragar seu dia (e estômago).",
                    "6. Ruas Desertas no Pelourinho: O Pelourinho é seguro nas ruas principais policiadas. Evite entrar em becos laterais vazios, principalmente à noite.",
                    "7. Tabuleiros sem Higiene: Observe a limpeza da baiana de acarajé. Evite tabuleiros sujos ou em locais duvidosos para não ter infecção alimentar.",
                    "8. Taxista no Aeroporto: Ao desembarcar, muitos taxistas abordam no saguão cobrando preço fechado caro. Use o metrô (que sai do aeroporto) ou Uber.",
                    "9. Mar Aberto: Algumas praias (como Jaguaribe ou trechos de Stella Maris) têm ondas fortes e buracos. Se beber, não entre no mar.",
                    "10. Elevador Lacerda à Noite: A região da Cidade Baixa (Comércio) fica muito deserta e perigosa após o horário comercial. Evite andar a pé por ali à noite."
                ],
                // COLE O ROTEIRO ABAIXO:
                roteiros: {
                    "curto": {
                        titulo: "Roteiro Express (1 a 2 Dias)",
                        texto: [
                            "Dia 1 (História Viva): Pelourinho (Fundação Casa de Jorge Amado e Igreja de São Francisco). Desça o Elevador Lacerda. Mercado Modelo. Pôr do sol no Farol da Barra.",
                            "Dia 2 (Fé e Praia): Igreja do Bonfim (amarre a fitinha). Almoço na Pedra Furada. Tarde na praia do Porto da Barra (água calma).",
                            "Dica: Coma um Acarajé da Cira ou da Dinha no Rio Vermelho à noite."
                        ]
                    },
                    "medio": {
                        titulo: "Roteiro Essencial (3 a 5 Dias)",
                        texto: [
                            "Dias 1 e 2: Siga o Roteiro Express acima.",
                            "Dia 3 (Cultura Afro): Museu Afro-Brasileiro e Casa do Carnaval. Almoço no Santo Antônio Além do Carmo (vista linda da baía).",
                            "Dia 4 (Praias do Norte): Dia de praia em Stella Maris ou Flamengo (barracas com estrutura, como a do Lôro).",
                            "Dia 5 (Boemia Literária): Casa do Rio Vermelho (memorial Jorge Amado). Noite no Largo da Mariquita (Rio Vermelho) para comer e beber."
                        ]
                    },
                    "longo": {
                        titulo: "Roteiro Completo (7+ Dias)",
                        texto: [
                            "Dias 1 a 5: Siga o Roteiro Essencial acima.",
                            "Dia 6 (Bate-volta Tartarugas): Vá até a Praia do Forte (Litoral Norte). Visite o Projeto Tamar e o Castelo Garcia D'Ávila.",
                            "Dia 7 (Navegar): Passeio de escuna pela Baía de Todos os Santos (Ilha dos Frades e Itaparica).",
                            "Dia 8 (Relax): Sorveteria da Ribeira e Ponta do Humaitá para o último pôr do sol."
                        ]
                    }
                },
                
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
                // --- NOVO: RISCOS E ERROS (BRASÍLIA) ---
                riscos: [
                    "1. A Seca do Deserto: Entre agosto e setembro, a umidade cai para 10%. O nariz sangra e a pele racha. Tenha sempre soro fisiológico e hidratante na mochila.",
                    "2. Ilusão da Esplanada: Não tente andar do Congresso até a Torre de TV a pé achando que é perto. São quilômetros de sol na cabeça sem sombra. Use Uber ou ônibus.",
                    "3. Atravessar o Eixão: NUNCA tente atravessar as pistas largas do Eixão correndo. Os carros passam a 80km/h e não param. Use as passagens subterrâneas (mas com cuidado à noite).",
                    "4. Setor Comercial Sul à Noite: De dia é movimentado, à noite vira local de tráfico e prostituição. Evite transitar a pé ali ou perto da Rodoviária do Plano Piloto após as 19h.",
                    "5. As Tesourinhas: Se alugar carro, cuidado. As entradas e saídas (tesourinhas) confundem o GPS e motoristas novatos. Se errar uma, vai andar 5km para voltar.",
                    "6. Capivaras e Carrapatos: Na orla do Lago Paranoá, não chegue muito perto das capivaras e evite sentar na grama alta devido ao risco de carrapatos (Febre Maculosa).",
                    "7. Cidade Fantasma no Fim de Semana: Brasília setoriza tudo. Restaurantes em áreas comerciais ou bancárias podem fechar no fim de semana. Cheque o horário antes de ir.",
                    "8. Norte x Sul: Entenda a lógica (Asa Sul e Asa Norte). Se você confundir SQS (Sul) com SQN (Norte), vai parar a 15km de distância do seu destino.",
                    "9. Manifestações na Esplanada: Em dias de protesto político, a Esplanada dos Ministérios é fechada e o trânsito para. Fique de olho no noticiário se for visitar o Congresso.",
                    "10. Amplitude Térmica: No inverno, faz muito calor de dia e 10ºC à noite. Se sair de manhã para voltar só à noite, leve casaco ou vai passar frio."
                ],
                // --- NOVO: ROTEIRO AUTOMÁTICO (BRASÍLIA) ---
                roteiros: {
                    "curto": {
                        titulo: "Roteiro Express (1 a 2 Dias)",
                        texto: [
                            "Dia 1 (Cívico): Manhã na Catedral e Esplanada. Visita guiada ao Congresso. Almoço no Pontão do Lago Sul. Pôr do sol na Ermida Dom Bosco.",
                            "Dia 2 (Juscelino): Memorial JK pela manhã. Subida na Torre de TV (vista). Tarde: Igrejinha da 308 Sul e Quadra Modelo (para entender como vivem os locais)."
                        ]
                    },
                    "medio": {
                        titulo: "Roteiro Essencial (3 a 5 Dias)",
                        texto: [
                            "Dias 1 e 2: Siga o Roteiro Express acima.",
                            "Dia 3 (Arquitetura e Arte): Palácio do Itamaraty (agende!) e CCBB. Almoço na Asa Sul (gastronomia).",
                            "Dia 4 (Natureza e Místico): Templo da LBV e Parque da Cidade. Tarde relax no Calçadão da Asa Norte (alugue um caiaque).",
                            "Dia 5 (Lado B): Santuário Dom Bosco (o azul) e Feira da Torre de TV para comprar pastel e artesanato."
                        ]
                    },
                    "longo": {
                        titulo: "Roteiro Completo (7+ Dias)",
                        texto: [
                            "Dias 1 a 5: Siga o Roteiro Essencial acima.",
                            "Dia 6 (Cachoeira): Bate-volta para Pirenópolis-GO (cidade colonial linda com cachoeiras) ou Salto do Itiquira (uma queda d'água gigante perto de Formosa).",
                            "Dia 7 (Chapada): Se tiver disposição, estique até a Chapada dos Veadeiros (Alto Paraíso) e fique uma noite lá.",
                            "Dia 8 (Despedida): Café da manhã na Torre de TV Digital (Flor do Cerrado) e últimas compras."
                        ]
                    }
                },
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
                // --- NOVO: RISCOS E ERROS (RECIFE) ---
                riscos: [
                    "1. Tubarões em Boa Viagem: NÃO é lenda urbana. Respeite as placas. Só entre no mar na maré baixa e protegido pelos arrecifes. Nunca nade em mar aberto ali.",
                    "2. Falsos Guias em Olinda: Ao chegar no Alto da Sé, rapazes vão pular na frente do carro ou te seguir insistindo para serem guias. Seja firme no 'NÃO' e continue andando.",
                    "3. Maré Alta nas Piscinas: Ir a Porto de Galinhas ou Carneiros na maré alta é jogar dinheiro fora. As piscinas naturais somem. Consulte a Tábua de Marés (tem que estar abaixo de 0.5).",
                    "4. Recife Antigo Deserto: O bairro é lindo e seguro de quinta a domingo. Segunda e terça à noite costuma ficar deserto e perigoso. Evite ruas escuras.",
                    "5. Celular no Galo: No Carnaval (Galo da Madrugada) ou em blocos cheios, celular na mão é perda certa. Use doleira por dentro da roupa.",
                    "6. Ouriços do Mar: Ao andar nos arrecifes (pedras), use chinelo ou sapatilha de neoprene. Pisar em um ouriço dói muito e estraga a viagem.",
                    "7. Trânsito para Porto de Galinhas: Sair do Recife para Porto de Galinhas sexta à tarde ou sábado de manhã leva horas. Saia de madrugada ou em horários alternativos.",
                    "8. Metrô: O metrô do Recife não é muito turístico e pode ser perigoso/lotado em horários de pico. Prefira Uber ou Táxi para se deslocar entre as atrações.",
                    "9. Sol de 'Rachar': O índice UV em Pernambuco é extremo. Protetor solar não é cosmético, é item de sobrevivência, ou você terá insolação no primeiro dia.",
                    "10. Flanelinhas Agressivos: Em dias de festa ou no centro, guardadores de carro podem cobrar adiantado e caro. Tente estacionar em locais privados ou ruas movimentadas."
                ],
                // COLE O ROTEIRO ABAIXO:
                roteiros: {
                    "curto": {
                        titulo: "Roteiro Express (1 a 2 Dias)",
                        texto: [
                            "Dia 1 (Recife Antigo): Marco Zero, Rua do Bom Jesus (Sinagoga) e Paço do Frevo. Almoço nos Armazéns do Porto. Fim de tarde: Passeio de Catamarã pelo rio (imperdível).",
                            "Dia 2 (Olinda): Vá para a cidade vizinha. Suba o Alto da Sé (Tapioca com vista), Mosteiro de São Bento e caminhe pelas ladeiras coloridas."
                        ]
                    },
                    "medio": {
                        titulo: "Roteiro Essencial (3 a 5 Dias)",
                        texto: [
                            "Dias 1 e 2: Siga o Roteiro Express acima.",
                            "Dia 3 (Os Brennand): Manhã no Instituto Ricardo Brennand (Castelo de armas incrível). Tarde na Oficina Francisco Brennand (esculturas misteriosas). Vá de Uber.",
                            "Dia 4 (Praia Urbana): Manhã na Praia de Boa Viagem (fique nas piscinas naturais protegidas, nada de fundo!). Tarde no Shopping RioMar (vista do terraço).",
                            "Dia 5 (Litoral Norte): Bate-volta para a Ilha de Itamaracá. Visite o Forte Orange e atravesse de barquinho para a Coroa do Avião."
                        ]
                    },
                    "longo": {
                        titulo: "Roteiro Completo (7+ Dias)",
                        texto: [
                            "Dias 1 a 5: Siga o Roteiro Essencial acima.",
                            "Dia 6 (Litoral Sul): Bate-volta para o Cabo de Santo Agostinho (Praia de Calhetas e Banho de Argila).",
                            "Dia 7 (Paraíso Vizinho): Bate-volta para a Praia dos Carneiros (Igrejinha verde).",
                            "Dia 8 (Raiz): Mercado de São José (artesanato barato) e Casa da Cultura (antiga prisão que virou centro comercial)."
                        ]
                    }
                },
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
                // --- NOVO: RISCOS E ERROS (PORTO ALEGRE) ---
                riscos: [
                    "1. Centro Histórico à Noite: De dia é o coração da cultura, mas após as 19h e aos domingos fica deserto e perigoso. Evite andar a pé sozinho perto do Mercado Público à noite.",
                    "2. Camisa de Time (Gre-Nal): A rivalidade é séria. Evite usar camisa do Grêmio perto do Beira-Rio ou do Inter perto da Arena em dias de jogo. Na dúvida, não use cores de times.",
                    "3. Voltagem 110V: Porto Alegre é 110V (127V), mas Gramado e o interior são 220V. Se você levar seu secador de POA para a Serra, vai queimar. Fique atento!",
                    "4. Banho no Guaíba: A Orla é linda para ver o pôr do sol, mas a água em muitos pontos é imprópria para banho. Não entre, a menos que haja sinalização explícita de balneabilidade.",
                    "5. Achar que Gramado é Perto: Gramado fica a 2h de carro (com trânsito bom). Não planeje 'jantar em Gramado' e voltar para dormir em POA na mesma noite, é cansativo e perigoso com neblina.",
                    "6. Parque da Redenção à Noite: O parque é maravilhoso de dia, mas evite atravessá-lo após o pôr do sol. A iluminação é precária em alguns pontos e há risco de assaltos.",
                    "7. Mosquitos na Orla: No verão, o final da tarde na beira do rio tem muito mosquito. Leve repelente se for assistir ao pôr do sol.",
                    "8. Lotação x Ônibus: O transporte 'Lotação' (micro-ônibus vermelho) é excelente e tem ar-condicionado, mas custa bem mais que o ônibus comum. Não entre achando que é o mesmo preço.",
                    "9. Pardais (Radares): A fiscalização eletrônica é rigorosa (geralmente 60km/h). Cuidado nas Avenidas Ipiranga e Beira-Rio, a multa chega mesmo.",
                    "10. 'Friagem' e Rinite: A mudança de temperatura é brutal (pode variar 15ºC no mesmo dia). Quem tem rinite ou asma sofre muito. Traga sempre um casaco e remédios de alergia."
                ],
                // COLE O ROTEIRO ABAIXO:
                roteiros: {
                    "curto": {
                        titulo: "Roteiro Express (1 a 2 Dias)",
                        texto: [
                            "Dia 1 (Centro e Orla): Manhã no Centro Histórico (Mercado Público, Santander Cultural e MARGS). Almoço no Mercado. Fim de tarde: Pôr do sol na Orla do Guaíba (Usina do Gasômetro).",
                            "Dia 2 (Cultura): Manhã no Parque da Redenção (se for domingo, tem o Brique). Tarde: Casa de Cultura Mario Quintana (tome um café no jardim do terraço)."
                        ]
                    },
                    "medio": {
                        titulo: "Roteiro Essencial (3 a 5 Dias)",
                        texto: [
                            "Dias 1 e 2: Siga o Roteiro Express acima.",
                            "Dia 3 (Arte e Rio): Fundação Iberê Camargo (arquitetura incrível). Tarde: Passeio de barco (Cisne Branco ou Noiva do Caí) pelas ilhas do Guaíba.",
                            "Dia 4 (Sofisticação): Bairro Moinhos de Vento. Caminhada no Parcão e almoço na Rua Padre Chagas. Noite: Churrascaria tradicional (Barranco ou Giovanaz).",
                            "Dia 5 (Paixão Nacional): Tour no estádio da Arena do Grêmio ou Beira-Rio (Inter). Tarde na orla de Ipanema (Zona Sul) para um clima de praia de rio."
                        ]
                    },
                    "longo": {
                        titulo: "Roteiro Completo (7+ Dias)",
                        texto: [
                            "Dias 1 a 5: Siga o Roteiro Essencial acima.",
                            "Dia 6 (Ciência ou Fé): Museu da PUCRS (interativo e incrível para crianças) OU Bate-volta ao Templo Budista de Três Coroas.",
                            "Dia 7 (Raiz): Almoço em um CTG (Centro de Tradições Gaúchas) e noite boêmia na Cidade Baixa (bares alternativos). Despedida com um Xis Gaúcho."
                        ]
                    }
                },
                // SEUS LINKS DE AFILIADO (ID 304142)
                links: {
                    hotel: "https://www.booking.com/searchresults.pt-br.html?city=-663673&aid=304142", 
                    passeio: "https://www.civitatis.com/br/porto-alegre/", 
                    seguro: "https://www.segurospromo.com.br" 
                }
            },
            {
                name: "Curitiba",
                // FOTO: Jardim Botânico (Estufa) - Clássica (Wikimedia)
                imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Estufa_principal_do_Jardim_Bot%C3%A2nico_de_Curitiba_02_%28cropped%29.jpg/500px-Estufa_principal_do_Jardim_Bot%C3%A2nico_de_Curitiba_02_%28cropped%29.jpg",
                tags: ["Parques", "Frio", "Organização"],
                mapa: "https://goo.gl/maps/curitiba",
                clima: "Subtropical Úmido. O tempo muda rápido: pode fazer sol, chover e gear no mesmo dia. Traga casaco sempre.",
                
                // TOP 10 PONTOS TURÍSTICOS
                pontos_turisticos: [
                    "1. Jardim Botânico: O cartão-postal. A estufa de vidro estilo Art Nouveau e os jardins franceses são lindos.",
                    "2. Ópera de Arame: Um teatro construído em estrutura tubular e vidro sobre um lago. Visual único.",
                    "3. Parque Tanguá: Antiga pedreira desativada que virou um parque deslumbrante. O pôr do sol no mirante é obrigatório.",
                    "4. Museu Oscar Niemeyer (MON): Conhecido como 'Museu do Olho'. Arquitetura futurista e grandes exposições de arte.",
                    "5. Feira do Largo da Ordem: Aos domingos de manhã. Gigantesca, tem artesanato, antiguidades e o famoso pastel de feira.",
                    "6. Torre Panorâmica: Vista 360º da cidade. Dá para entender o planejamento urbano lá de cima.",
                    "7. Bosque do Alemão: Tem a trilha de João e Maria e uma vista linda da cidade. Ótimo para crianças.",
                    "8. Santa Felicidade: O bairro italiano gastronômico. Restaurantes gigantes (como o Madalosso) servem rodízio de massas e frango.",
                    "9. Parque Barigui: A 'praia' do curitibano. Capivaras vivem livres no lago e as pessoas fazem churrasco nos quiosques.",
                    "10. Unilivre (Universidade Livre do Meio Ambiente): Uma rampa de madeira em espiral no meio da mata. Lugar de paz e arquitetura sustentável."
                ],

                // TOP 10 GASTRONOMIA
                gastronomia: [
                    "1. Carne de Onça: Patrimônio da cidade. Não é onça! É carne bovina crua super temperada sobre broa preta (tipo um steak tartare rústico).",
                    "2. Pinhão: No inverno (maio-julho), come-se pinhão cozido em todo lugar. É a semente da araucária.",
                    "3. Barreado: Prato típico do litoral (Morretes), mas muito consumido na capital. Carne cozida por horas até desmanchar, comida com farinha e banana.",
                    "4. Pierogi: Pastel cozido de origem polonesa, geralmente recheado de batata e requeijão com molho de nata.",
                    "5. Frango com Polenta: Clássico de Santa Felicidade. A polenta frita e o frango a passarinho são servidos à vontade.",
                    "6. Quentão de Vinho: No inverno, é a bebida oficial das feiras. Feito com vinho tinto, gengibre e especiarias (e às vezes marshmallow).",
                    "7. Submarino: Famoso no 'Bar do Alemão'. Um chopp com uma canequinha de Steinhäger mergulhada dentro. Você pode levar a canequinha de brinde.",
                    "8. Café Colonial: Herança dos imigrantes. Mesas fartas com tortas, pães, geléias e frios à tarde.",
                    "9. Chucrute e Eisbein: Joelho de porco com repolho fermentado, influência forte da colonização alemã.",
                    "10. Pastel de Feira: Na feira do Largo da Ordem, o pastel é gigante e super recheado."
                ],

                // TOP 10 CURIOSIDADES
                curiosidades: [
                    "1. É Vina, não Salsicha: Se pedir cachorro-quente com 'salsicha', vão te corrigir. Em Curitiba chama-se Vina (do alemão Wiener).",
                    "2. Penal: Estojo escolar aqui chama-se 'Penal'.",
                    "3. Capivaras: Elas são as donas dos parques. São fofas, mas são animais selvagens. Não tente fazer carinho!",
                    "4. Capital Mais Fria: É considerada a capital mais fria do Brasil. Geada é comum no inverno.",
                    "5. Oil Man: Uma lenda urbana real. Um homem que anda de sunga e coberto de óleo pela cidade, mesmo no frio.",
                    "6. Tubos de Ônibus: As estações de ônibus parecem tubos futuristas. Você paga antes de entrar para agilizar o embarque.",
                    "7. Cidade Sorriso?: Curitibano tem fama de fechado. Dizem que não falam com estranhos no elevador, mas são educados se você pedir ajuda.",
                    "8. Reciclagem: A cultura de separar o lixo ('Lixo que não é Lixo') é muito forte e antiga na cidade.",
                    "9. Rua 24 Horas: Foi a primeira rua coberta a funcionar 24h no Brasil (hoje não é mais 100% 24h, mas a arquitetura segue linda).",
                    "10. Palácio Avenida: No Natal, crianças cantam nas janelas desse prédio histórico. É um espetáculo emocionante."
                ],

                // TOP 10 CULTURA & RELIGIÃO
                religiao: [
                    "1. Bosque do Papa: Memorial da imigração polonesa, com casas de madeira originais montadas sem pregos. O Papa João Paulo II visitou.",
                    "2. Catedral Basílica Menor: Na Praça Tiradentes (marco zero). Estilo neogótico imponente.",
                    "3. Mesquita Imam Ali: Uma bela mesquita com cúpula e minaretes no centro cívico, aberta à visitação guiada.",
                    "4. Memorial Ucraniano: Fica no Parque Tingui. Tem uma réplica de uma igreja ortodoxa de madeira com cúpula dourada lindíssima.",
                    "5. Ordem Rosacruz: O Templo das Musas e o portal egípcio são impressionantes e misteriosos.",
                    "6. Santuário Nossa Senhora do Perpétuo Socorro: As novenas de quarta-feira reúnem multidões o dia todo.",
                    "7. Praça do Japão: Homenagem à imigração japonesa, com lago de carpas, cerejeiras e casa de chá.",
                    "8. Museu do Holocausto: O primeiro do Brasil. Pequeno, mas extremamente tocante e educativo.",
                    "9. Igrejas Luteranas: Muitas igrejas de estilo gótico alemão espalhadas pela cidade.",
                    "10. Solar do Rosário: Centro cultural no coração histórico, focado em artes plásticas."
                ],

                // TOP 10 EVENTOS E ESTAÇÕES
                eventos_estacoes: [
                    "1. Natal de Curitiba (Dezembro): A cidade vira luz pura. O coral do Palácio Avenida e as decorações nos parques são famosos no país.",
                    "2. Festival de Teatro (Março): Um dos maiores festivais de teatro da América Latina. A cidade respira arte, com peças na rua e nos palcos.",
                    "3. Inverno (Jun-Ago): É frio de verdade (pode chegar a 0ºC ou menos). É a época charmosa de comer pinhão e usar casaco de lã.",
                    "4. Feira de Inverno (Praças): Barraquinhas vendendo artesanato de lã e quentão nas praças Santos Andrade e Osório.",
                    "5. Oficina de Música (Janeiro): Cursos e shows de música erudita e popular (MPB) pela cidade toda.",
                    "6. Florada das Cerejeiras (Julho): Na Praça do Japão e Jardim Botânico, as árvores ficam rosas. Dura poucos dias.",
                    "7. Primavera (Set-Nov): Os parques ficam floridos, mas o tempo é instável (chuva e sol no mesmo dia).",
                    "8. Carnaval Zombie Walk: No carnaval, o destaque não é o samba, mas a marcha de zumbis que reúne milhares de pessoas.",
                    "9. Verão (Dez-Mar): Dias quentes, mas noites frescas. Chove bastante no final da tarde.",
                    "10. Restaurant Week: Acontece duas vezes ao ano, ótimo para comer em restaurantes caros por preço fixo."
                ],

                // TOP 10 INFO GERAIS
                info_gerais: [
                    "1. Voltagem: 110V (127V). Atenção, pois o litoral e o interior costumam ser 220V, mas Curitiba é 110V.",
                    "2. DDD: 41.",
                    "3. Aeroporto: Afonso Pena (CWB). Fica na cidade vizinha (São José dos Pinhais), a 30min do centro.",
                    "4. Linha Turismo: O ônibus de dois andares que passa em 26 pontos turísticos. Paga-se um valor e pode descer e subir 4 vezes.",
                    "5. Rodoferroviária: Moderna e organizada. Tem ônibus para todo o Brasil e o trem para Morretes.",
                    "6. Uber/99: Funciona muito bem e é mais barato que a Linha Turismo se você estiver em 3 ou 4 pessoas.",
                    "7. Clima: 'Cebola'. Você sai de casaco, tira ao meio-dia, põe de novo à tarde e põe um mais pesado à noite.",
                    "8. Segurança: O Centro Histórico à noite exige cuidado. Batel e Água Verde são mais tranquilos.",
                    "9. Trânsito: A 'Faixa Exclusiva' de ônibus é sagrada. Se dirigir, nunca invada a canaleta, a multa é certa.",
                    "10. Água: Potável e de boa qualidade."
                ],

                // TOP 10 DICAS ANTES DE IR
                antes_de_ir: [
                    "1. Mala Inteligente: Traga camiseta, casaco leve E casaco pesado. Você vai usar os três no mesmo dia.",
                    "2. Linha Turismo: Se tiver só 1 dia, é a melhor opção. Sente no andar de cima (lado direito) para as melhores vistas.",
                    "3. Domingo de Manhã: Reserve para a Feira do Largo da Ordem. Vá cedo (9h) para evitar a multidão das 11h.",
                    "4. Segunda-Feira: Quase todos os museus e parques (como o Tanguá e o MON) fecham ou abrem mais tarde para manutenção. Confira antes.",
                    "5. Trem de Morretes: O passeio de trem pela Serra do Mar é lindo. Compre o bilhete com antecedência e sente do lado esquerdo na ida.",
                    "6. Pôr do Sol: O melhor é no Parque Tanguá ou na Praça das Nações (alto da XV).",
                    "7. Batel: É o bairro da vida noturna chique e dos restaurantes caros.",
                    "8. Rua 24h: Boa para uma passada rápida ou almoço, mas não tem mais o agito da madrugada de antigamente.",
                    "9. Hotel: Ficar no Centro é prático, mas o Batel é mais bonito e seguro à noite.",
                    "10. Respeite a Fila: O curitibano respeita muito a fila do ônibus. Não tente furar."
                ],

                // --- NOVO: NÚMEROS IMPORTANTES (CURITIBA) ---
                numeros: [
                    "1. 190 (Polícia Militar): Emergência e segurança.",
                    "2. (41) 3326-3600 (DPTUR): Delegacia de Proteção ao Turista (atendimento especializado).",
                    "3. 192 (SAMU): Urgências médicas de saúde.",
                    "4. 193 (Bombeiros/SIATE): Resgate de trauma e acidentes de trânsito.",
                    "5. 156 (Central da Prefeitura): Informações sobre ônibus, turismo e serviços municipais (funciona muito bem).",
                    "6. (41) 3381-1515 (Aeroporto Afonso Pena): Informações de voos e achados e perdidos.",
                    "7. (41) 3320-3000 (Rodoferroviária): Informações sobre ônibus estaduais e interestaduais.",
                    "8. (41) 3240-1103 (Hospital do Trabalhador): Referência em trauma e emergências.",
                    "9. 118 (Trânsito): Para reportar acidentes sem vítima ou semáforos estragados.",
                    "10. 0800 41 1512 (Copel): Emergência de energia elétrica (queda de luz ou fios soltos)."
                ],

                // --- NOVO: RISCOS E ERROS (CURITIBA) ---
                riscos: [
                    "1. As 4 Estações: O maior erro é sair do hotel de manhã só de camiseta porque está sol. Às 16h vai esfriar bruscamente. Leve sempre um agasalho na mochila.",
                    "2. Centro à Noite: A região da Praça Tiradentes, Rua XV e Paço da Liberdade fica deserta e perigosa após as 20h. Há muitos moradores de rua e risco de assalto. Use Uber.",
                    "3. Radares de Trânsito: Curitiba tem fiscalização eletrônica rigorosa (50km/h ou 60km/h). Os radares muitas vezes não são visíveis. Respeite o limite ou a multa chega.",
                    "4. Canaleta de Ônibus: Se estiver dirigindo, NUNCA entre na pista exclusiva dos ônibus expressos (canaleta). É infração gravíssima e risco de acidente fatal.",
                    "5. Furtos na Feira do Largo: A feira de domingo é lotada. Mochilas para frente e cuidado com o celular no bolso de trás. Batedores de carteira aproveitam o 'empurra-empurra'.",
                    "6. Capivaras com Carrapatos: Elas são lindas, mas transmitem o carrapato-estrela (Febre Maculosa). Admire de longe e evite sentar na grama onde elas pastam.",
                    "7. Vento Encanado: O centro da cidade tem 'corredores de vento' entre os prédios que deixam a sensação térmica muito baixa. Cachecol ajuda muito.",
                    "8. Uber no Aeroporto: O Aeroporto fica em São José dos Pinhais. O Uber para Curitiba é tranquilo, mas em horários de pico pode ficar caro (dinâmico).",
                    "9. Horário de Ônibus: O sistema é bom, mas domingo os ônibus demoram muito. Use o app 'Curitiba 156' para ver o horário real e não ficar 40 min no tubo.",
                    "10. Ciclovias: Cuidado ao caminhar nas calçadas compartilhadas (vermelhas). Ciclistas passam rápido. Pedestre na calçada, bicicleta na ciclovia."
                ],
                // COLE O ROTEIRO ABAIXO:
                roteiros: {
                    "curto": {
                        titulo: "Roteiro Express (1 a 2 Dias)",
                        texto: [
                            "Dia 1 (Cartões-Postais): Comece no Jardim Botânico (Estufa de vidro). Almoço em Santa Felicidade (Madalosso). Tarde na Ópera de Arame e pôr do sol no Parque Tanguá.",
                            "Dia 2 (Cultura e Vista): Manhã no Museu Oscar Niemeyer (Museu do Olho). Suba na Torre Panorâmica. Fim de tarde no Largo da Ordem (Centro Histórico)."
                        ]
                    },
                    "medio": {
                        titulo: "Roteiro Essencial (3 a 5 Dias)",
                        texto: [
                            "Dias 1 e 2: Siga o Roteiro Express acima.",
                            "Dia 3 (Serra do Mar): O passeio mais famoso. Desça de Trem para Morretes pela Serra Verde Express (paisagem linda). Coma Barreado lá e volte de van/ônibus pela Estrada da Graciosa.",
                            "Dia 4 (Parques): Pegue a Linha Turismo (ônibus de 2 andares) e pare no Parque Barigui (capivaras!) e Bosque do Papa.",
                            "Dia 5 (Lado B): Mercado Municipal (café da manhã). Tarde no Unilivre (Universidade Livre do Meio Ambiente) - arquitetura incrível na mata."
                        ]
                    },
                    "longo": {
                        titulo: "Roteiro Completo (7+ Dias)",
                        texto: [
                            "Dias 1 a 5: Siga o Roteiro Essencial acima.",
                            "Dia 6 (Arenitos): Bate-volta para o Parque Estadual de Vila Velha (Ponta Grossa). Veja as formações rochosas milenares.",
                            "Dia 7 (Praia e Trem): Se for verão, estique até a Ilha do Mel (pegue o trem até Paranaguá e depois o barco).",
                            "Dia 8 (Relax): Brunch no Batel (bairro chique) e compras no Shopping Pátio Batel ou Feirinha do Largo (se for domingo)."
                        ]
                    }
                },

                // SEUS LINKS DE AFILIADO
                links: {
                    hotel: "https://www.booking.com/searchresults.pt-br.html?city=-639714&aid=304142", 
                    passeio: "https://www.civitatis.com/br/curitiba/", 
                    seguro: "https://www.segurospromo.com.br" 
                }
            },
            {
                name: "Fortaleza",
                // FOTO: Beira Mar e Espigão (Wikimedia)
                imagem: "https://upload.wikimedia.org/wikipedia/commons/7/73/Fortaleza%2C_Brazil_%284%29_%28cropped%29.jpg",
                tags: ["Sol", "Praias", "Humor"],
                mapa: "https://goo.gl/maps/fortaleza",
                clima: "Tropical. Calor o ano todo (28ºC a 32ºC) e vento constante. Chuvas rápidas entre fev-mai.",
                
                // TOP 10 PONTOS TURÍSTICOS
                pontos_turisticos: [
                    "1. Praia do Futuro: A melhor praia urbana para banho, famosa pelas megabarracas (Crocobeach, Chico do Caranguejo) com piscinas e shows.",
                    "2. Avenida Beira Mar: O calçadão clássico. Ótimo para caminhar no fim da tarde, ver a Feirinha de Artesanato e o pôr do sol.",
                    "3. Beach Park: Fica na vizinha Aquiraz (20km). O maior parque aquático da América Latina. O toboágua 'Insano' (41m) é para os corajosos.",
                    "4. Mercado Central: Um paraíso de 4 andares para comprar redes, bordados, castanhas e cachaça. Pechinche!",
                    "5. Dragão do Mar: Centro cultural com arquitetura moderna, museus, cinema e o Planetário. A noite ao redor é agitada.",
                    "6. Theatro José de Alencar: Uma joia da arquitetura Art Nouveau com vitrais coloridos. Faça a visita guiada.",
                    "7. Ponte dos Ingleses (Metálica): Lugar clássico para ver o pôr do sol e os golfinhos (se der sorte). (Verifique se a reforma acabou).",
                    "8. Praia de Iracema: Onde fica a Estátua de Iracema. A praia não é boa para banho, mas é o coração boêmio e histórico.",
                    "9. Museu da Cachaça (iPark): Fica em Maranguape (perto). Passeio histórico pela Ypióca com arvorismo e pedalinho.",
                    "10. Catedral Metropolitana: Uma igreja imensa em estilo gótico-romano, a terceira maior do Brasil."
                ],

                // TOP 10 GASTRONOMIA
                gastronomia: [
                    "1. Caranguejo (Quinta-feira): É lei. Quinta à noite é dia de comer caranguejo (toc-toc) nas barracas da Praia do Futuro.",
                    "2. Baião de Dois: Arroz e feijão de corda misturados, com queijo coalho e cheiro verde. Acompanha carne de sol.",
                    "3. Carne de Sol com Macaxeira: A carne seca ao sol (super macia) servida com mandioca frita ou cozida.",
                    "4. Peixada Cearense: Cozido de peixe com legumes, ovos cozidos e pirão. Leve e saboroso.",
                    "5. Tapioca: No Centro das Tapioqueiras (Messejana) tem os melhores recheios (carne de sol com nata é o clássico).",
                    "6. Panelada: Prato forte (bucho e tripas de boi) consumido tradicionalmente no Mercado São Sebastião para curar ressaca.",
                    "7. Camarão no Alho e Óleo: Nas praias, os vendedores passam com baldes de camarão frito na hora. (Cuidado com a higiene).",
                    "8. Castanha de Caju: O Ceará é o maior produtor. Compre no Mercado Central (a torrada com sal é viciante).",
                    "9. Paçoca de Carne Seca: Carne de sol desfiada e socada no pilão com farinha e cebola roxa.",
                    "10. Sorvete de Rapadura: Ou de frutas regionais (cajá, graviola, sapoti). A sorveteria 50 Sabores é a mais famosa."
                ],

                // TOP 10 CURIOSIDADES
                curiosidades: [
                    "1. Terra do Humor: O Ceará exporta humoristas (Tom Cavalcante, Renato Aragão). Shows de humor acontecem toda noite nos restaurantes.",
                    "2. Cabeça Chata?: O cearense brinca com a própria 'cabeça chata'. É um povo extremamente hospitaleiro e resiliente.",
                    "3. Vento Forte: Fortaleza é um dos melhores lugares do mundo para Kitesurf e Windsurf devido aos ventos alísios constantes.",
                    "4. Não tem Horário de Verão: O sol nasce às 5h30 e se põe às 17h30 o ano todo. Aproveite o dia cedo!",
                    "5. 'Aí Dentu': Expressão multiuso cearense. Pode ser negação, xingamento ou brincadeira, dependendo da entonação.",
                    "6. Rendeiras: A renda de bilro é uma arte passada de mãe para filha. Em Aquiraz, há o Centro das Rendeiras.",
                    "7. Verde Mares: O mar de Fortaleza é conhecido pelo tom verde esmeralda único.",
                    "8. Padaria Espiritual: Foi um movimento literário (e não uma padaria) que agitou a cultura da cidade no século XIX.",
                    "9. O Ceará aboliu a escravidão antes: Foi a primeira província a libertar os escravos (1884), 4 anos antes da Lei Áurea.",
                    "10. Internet do Brasil: Fortaleza é onde chegam os cabos de fibra óptica submarinos que conectam o Brasil à Europa e África."
                ],

                // TOP 10 CULTURA & RELIGIÃO
                religiao: [
                    "1. Estátua de Padre Cícero: Fica em Juazeiro do Norte (interior), mas a devoção ao 'Padim Ciço' está em todo lugar em Fortaleza.",
                    "2. Procissão de São Pedro: Em junho, os pescadores saem com seus barcos enfeitados no mar do Mucuripe.",
                    "3. Maracatu Cearense: Diferente do pernambucano, o ritmo é mais cadenciado e usam o 'negrume' (pintura preta) no rosto.",
                    "4. Forró Pé de Serra: A cultura do forró é sagrada. Casas como o 'Kukukaya' tocam o ritmo autêntico.",
                    "5. Artesanato de Barro: As garrafinhas de areia colorida (ciclogravura) são a lembrancinha número 1.",
                    "6. Catedral Metropolitana: Tem capacidade para 5.000 pessoas e lembra a Catedral de Colônia (Alemanha).",
                    "7. Iemanjá: A festa de 15 de agosto na Praia do Futuro reúne milhares de fiéis de umbanda e candomblé.",
                    "8. São José: O padroeiro do Ceará. Diz a lenda que se chover no dia dele (19 de março), a colheita do ano será boa.",
                    "9. Museu da Cultura Cearense: No Dragão do Mar, explica a vida do vaqueiro e a seca.",
                    "10. Literatura de Cordel: Folhetos com rimas e xilogravuras vendidos nas feiras e mercados."
                ],

                // TOP 10 EVENTOS E ESTAÇÕES
                eventos_estacoes: [
                    "1. Fortal (Julho): O maior carnaval fora de época do Brasil. A cidade para e os hotéis lotam.",
                    "2. São João (Junho): Festas juninas gigantescas, com quadrilhas profissionais que parecem escolas de samba.",
                    "3. Réveillon: A festa no Aterro da Praia de Iracema é a segunda maior do Brasil (só perde para Copacabana).",
                    "4. Alta Temporada (Dez-Jan/Jul): Muito sol, cidade cheia, preços altos e muito vento.",
                    "5. Estação das Chuvas (Fev-Mai): Chove rápido e forte, depois abre sol. É a época mais barata.",
                    "6. Temporada dos Ventos (Ago-Nov): O auge para quem pratica Kitesurf e Windsurf.",
                    "7. Festival de Jazz e Blues (Carnaval): Acontece em Guaramiranga (serra), mas movimenta músicos em Fortaleza também.",
                    "8. Ceará Music (Varia): Festival de pop rock que costuma atrair grandes bandas nacionais.",
                    "9. Canoa Quebrada (Bate-volta): Passeio obrigatório para ver as falésias vermelhas (melhor na maré baixa).",
                    "10. Quinta do Caranguejo (Semanal): Toda quinta-feira o evento é gastronômico e musical nas barracas."
                ],

                // TOP 10 INFO GERAIS
                info_gerais: [
                    "1. Voltagem: 220V. Cuidado, pois a maioria do Brasil é 110V ou misto, mas lá é tudo 220V.",
                    "2. DDD: 85.",
                    "3. Aeroporto: Pinto Martins (FOR). Moderno e ampliado recentemente.",
                    "4. Uber/99: Funciona muito bem e é barato. Evite táxis na porta de hotéis sem taxímetro.",
                    "5. Água: Beba apenas água mineral. O calor exige hidratação constante.",
                    "6. Sol: O índice UV é extremo (perto da linha do Equador). Protetor solar fator 50 é o mínimo.",
                    "7. Roupas: Leves, de algodão ou linho. Jeans é tortura. À noite venta, mas não faz frio.",
                    "8. Trânsito: O trânsito no final da tarde na Beira Mar e na saída para as praias pode ser pesado.",
                    "9. Segurança: Evite andar com correntes de ouro ou celular na mão no calçadão.",
                    "10. Gorjeta: 10% é padrão. Músicos nos restaurantes cobram 'couvert artístico' (R$ 10 a R$ 20)."
                ],

                // TOP 10 DICAS ANTES DE IR
                antes_de_ir: [
                    "1. Reserve Beach Park: Compre o ingresso online antecipado, é mais barato que na bilheteria.",
                    "2. Tábua de Marés: Para visitar piscinas naturais ou Canoa Quebrada, a maré precisa estar BAIXA. Consulte antes de ir.",
                    "3. Não alugue carro só para ficar na cidade: Uber resolve tudo. Alugue só se for para Jericoacoara ou praias distantes.",
                    "4. Jericoacoara é Longe: São 4h a 5h de viagem (300km). Não tente fazer bate-volta de 1 dia, é cansativo demais.",
                    "5. Feirinha da Beira Mar: Começa às 17h. É o melhor lugar para comprar lembrancinhas, mas pesquise preços.",
                    "6. Barracas da Praia do Futuro: Algumas cobram entrada ou consumação mínima nas áreas VIP (lounges). Pergunte antes.",
                    "7. Hidratação: Compre água no supermercado (garrafas de 1,5L) para deixar no hotel. No frigobar é caro.",
                    "8. Show de Humor: Reserve mesa. O 'Lupus Bier' e o 'Beira Mar Grill' são os mais tradicionais.",
                    "9. Segunda-Feira: O Dragão do Mar e muitos museus fecham. Use a segunda para praia ou compras.",
                    "10. Vento: O vento levanta saias e vestidos leves. Mulheres preferem shortinhos por baixo."
                ],

                // --- NOVO: NÚMEROS IMPORTANTES (FORTALEZA) ---
                numeros: [
                    "1. 190 (Polícia Militar): Emergência e assaltos.",
                    "2. (85) 3101-2488 (DEPROTUR): Delegacia de Proteção ao Turista (Fica na Rua Costa Barros).",
                    "3. 192 (SAMU): Ambulância e emergência médica.",
                    "4. 193 (Bombeiros): Afogamentos e resgate.",
                    "5. (85) 3392-1030 (Aeroporto): Informações de voos.",
                    "6. 191 (Polícia Rodoviária): Para emergências nas estradas (BR-116, acesso às praias).",
                    "7. (85) 3101-5353 (Hospital Geral - HGF): Grande hospital público de referência.",
                    "8. (85) 3452-6900 (Rodoviária): Terminal São Tomé.",
                    "9. 156 (AMC - Trânsito): Para reportar acidentes de trânsito sem vítimas.",
                    "10. 0800 285 0196 (Enel): Emergência de falta de luz."
                ],

                // --- NOVO: RISCOS E ERROS (FORTALEZA) ---
                riscos: [
                    "1. Praia do Futuro (Correnteza): O mar é violento e tem muitos buracos. Só entre onde houver salva-vidas e bandeira verde/amarela. Afogamentos são comuns.",
                    "2. Assaltos na Beira Mar: Embora policiada, a orla tem furtos rápidos (bicicleta/corrida) de celulares e correntes. Não dê bobeira tirando selfies na borda da calçada.",
                    "3. Centro e Iracema à Noite: O Centro histórico e o entorno do Dragão do Mar podem ficar desertos e perigosos de madrugada. Use Uber de porta a porta.",
                    "4. Golpe do Camarão: Na praia, vendedores oferecem 'prova grátis' e depois cobram o prato inteiro. Pergunte o preço antes de tocar na comida.",
                    "5. Jeri de Carro Comum: Não tente ir até a vila de Jericoacoara com seu carro alugado (sedan/hatch). Você vai atolar na areia. Precisa de 4x4 ou Jardineira.",
                    "6. Insolação: O sol do Ceará não perdoa. Turistas desavisados vão parar no hospital com queimaduras de 2º grau no primeiro dia. Reaplique protetor a cada 2h.",
                    "7. Águas Vivas (Caravelas): Em certas épocas, aparecem caravelas na areia (parecem balões roxos). Não toque, a queimadura é química e grave.",
                    "8. Trânsito de Quinta: Na quinta-feira do caranguejo, a Av. Santos Dumont e acessos à Praia do Futuro travam. Saia cedo (19h) ou vá de Uber.",
                    "9. Flanelinhas: Em locais de show ou praias lotadas, guardadores cobram caro adiantado. Tente parar em estacionamento fechado ou oficial.",
                    "10. Guia Credenciado: Em passeios de buggy (Cumbuco/Canoa), exija bugueiro credenciado ('com emoção ou sem emoção'). Bugueiros piratas causam acidentes."
                ],
                // COLE O ROTEIRO ABAIXO:
                roteiros: {
                    "curto": {
                        titulo: "Roteiro Express (1 a 2 Dias)",
                        texto: [
                            "Dia 1 (Clássico): Manhã no Mercado Central (artesanato). Almoço na Praia do Futuro (barracas gigantes como Crocobeach). Fim de tarde na Feirinha da Beira-Mar.",
                            "Dia 2 (Cultura e História): Centro Dragão do Mar. Caminhada no Espigão do Náutico para ver o pôr do sol. Noite: Show de Humor (tradição local)."
                        ]
                    },
                    "medio": {
                        titulo: "Roteiro Essencial (3 a 5 Dias)",
                        texto: [
                            "Dias 1 e 2: Siga o Roteiro Express acima.",
                            "Dia 3 (Adrenalina): Dia inteiro no Beach Park (Aquiraz). É caro, mas é o melhor parque aquático da América Latina.",
                            "Dia 4 (Falésias): Bate-volta para Morro Branco e Praia das Fontes. O Labirinto das Falésias (areias coloridas) é cenário de novela.",
                            "Dia 5 (Dunas): Bate-volta para Cumbuco. Passeio de Buggy 'com emoção' e esquibunda nas dunas. Almoço na beira da lagoa."
                        ]
                    },
                    "longo": {
                        titulo: "Roteiro Completo (7+ Dias)",
                        texto: [
                            "Dias 1 a 5: Siga o Roteiro Essencial acima.",
                            "Dia 6 (Litoral Leste): Canoa Quebrada. Veja o símbolo da Lua e Estrela nas falésias e almoce na rua Broadway.",
                            "Dia 7 (Litoral Oeste): Lagoinha. Uma das praias mais bonitas do estado, formato de meia-lua e coqueiros a perder de vista.",
                            "Dia 8 (Despedida): Compras na Av. Monsenhor Tabosa e última caranguejada à noite."
                        ]
                    }
                },

                // SEUS LINKS DE AFILIADO
                links: {
                    hotel: "https://www.booking.com/searchresults.pt-br.html?city=-643662&aid=304142", 
                    passeio: "https://www.civitatis.com/br/fortaleza/", 
                    seguro: "https://www.segurospromo.com.br" 
                }
            },
            {
                name: "Campos do Jordão",
                // FOTO: Vila Capivari (Wikimedia)
                imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Rua_Djalma_Forjaz%2C_Campos_do_Jord%C3%A3o%2C_SP.jpg/960px-Rua_Djalma_Forjaz%2C_Campos_do_Jord%C3%A3o%2C_SP.jpg",
                tags: ["Inverno", "Romance", "Montanha"],
                mapa: "https://goo.gl/maps/camposdojordao",
                clima: "Tropical de Altitude. É a cidade mais alta do Brasil. Inverno gela (pode chegar a -2ºC) e verão é fresco.",
                
                // TOP 10 PONTOS TURÍSTICOS
                pontos_turisticos: [
                    "1. Vila Capivari: O centrinho turístico. Arquitetura europeia, restaurantes, lojas de grife e a famosa Cervejaria Baden Baden.",
                    "2. Parque Amantikir: Jardins que falam. Um paisagismo incrível com labirintos de arbustos e flores do mundo todo.",
                    "3. Horto Florestal: Natureza pura. Trilhas, lagos, tirolesa e muito ar puro longe do agito da cidade.",
                    "4. Morro do Elefante: Suba de teleférico (o antigo de cadeirinha ou o novo fechado) para ver a vista clássica da cidade.",
                    "5. Palácio Boa Vista: A residência de inverno do governador. Tem um acervo de arte incrível (Tarsila do Amaral) e visita guiada.",
                    "6. Museu Felícia Leirner: Esculturas gigantes de bronze a céu aberto num jardim lindo. O pôr do sol aqui é emocionante.",
                    "7. Pico do Itapeva: Fica tecnicamente em Pindamonhangaba, mas o acesso é por Campos. Dá para ver 15 cidades do Vale do Paraíba lá de cima.",
                    "8. Ducha de Prata: Uma canalização de cachoeiras artificiais com decks de madeira. Clássico para fotos (e compras de malhas).",
                    "9. Tarundu: Centro de lazer com patinação no gelo, hipismo e atividades radicais. Ótimo para crianças.",
                    "10. Portal da Cidade: A entrada clássica estilo 'Alpes Suíços'. Parada obrigatória para a foto de chegada."
                ],

                // TOP 10 GASTRONOMIA
                gastronomia: [
                    "1. Fondue: O rei da cidade. Queijo, Carne e Chocolate. No Capivari tem rodízios (sequência) em cada esquina.",
                    "2. Truta: O peixe da região. Servida grelhada com molho de alcaparras ou amêndoas. Fresquíssima.",
                    "3. Pinhão: Símbolo da cidade. Come-se cozido, em farofas, em pratos sofisticados ou até em sorvete.",
                    "4. Chocolate Artesanal: Existem dezenas de fábricas (Araucária, Spinassi). O chocolate quente cremoso é lei.",
                    "5. Cerveja Baden Baden: A cervejaria nasceu aqui. Visite a fábrica ou tome um chopp no bar oficial do Capivari.",
                    "6. Comida Alemã: Joelho de porco (Eisbein) e salsichões (Wurst) são muito comuns nos restaurantes.",
                    "7. Pastelão do Maluf: Um pastel gigante (quase uma refeição) muito famoso no centro turístico.",
                    "8. Café Colonial: Mesas fartas à tarde com pães, geleias, bolos e frios.",
                    "9. Fondue de Coxinha: Invenção recente que virou febre. Um balde de queijo derretido para mergulhar coxinhas.",
                    "10. Raclette: Queijo derretido na hora sobre batatas e frios. Prato suíço muito servido no inverno."
                ],

                // TOP 10 CURIOSIDADES
                curiosidades: [
                    "1. Cidade Mais Alta: É o núcleo urbano mais alto do Brasil, a 1.628 metros de altitude.",
                    "2. Suíça Brasileira: Ganhou o apelido pelo clima e arquitetura (embora o estilo enxaimel seja muitas vezes 'fake' decorativo).",
                    "3. Cura da Tuberculose: Antes do turismo, a cidade era um sanatório gigante devido ao ar puro que ajudava na cura.",
                    "4. Festival de Inverno: É o maior evento de música erudita da América Latina (acontece em julho).",
                    "5. Plátanos: As árvores que perdem as folhas no outono (ficam laranjas) são plátanos importados para dar ar europeu.",
                    "6. Trânsito de SP: Em feriados, o trânsito no Capivari é tão intenso que parece a Av. Paulista na hora do rush.",
                    "7. Bondinho: Existe um trem turístico que cruza a cidade (e vai até Santo Antônio do Pinhal).",
                    "8. Araucárias: A árvore símbolo está ameaçada, mas Campos ainda preserva grandes matas dela.",
                    "9. Preços: É considerada uma das cidades mais caras do Brasil para turismo na alta temporada.",
                    "10. Estrada de Ferro: A ferrovia foi construída para subir os doentes de tuberculose, não para turistas."
                ],

                // TOP 10 CULTURA & RELIGIÃO
                religiao: [
                    "1. Mosteiro de São João: Lar das monjas beneditinas. Elas cantam Canto Gregoriano todos os dias às 17h45 (lindo demais).",
                    "2. Igreja de São Benedito: A igreja do Capivari. Pequena, charmosa e disputadíssima para casamentos.",
                    "3. Auditório Cláudio Santoro: A casa do Festival de Inverno. Acústica perfeita no meio da mata.",
                    "4. Casa da Xilogravura: O único museu do Brasil dedicado apenas a essa arte (gravura em madeira).",
                    "5. Palácio Boa Vista: Além de sede do governo, é um museu de arte sacra e modernista (tem quadros valiosos).",
                    "6. Capela de São Pedro Apóstolo: Fica dentro do Palácio, projetada por Paulo Mendes da Rocha.",
                    "7. Comunidade Espiritual: A cidade atrai muitos retiros de yoga e meditação devido à altitude e silêncio.",
                    "8. Lendas da Mantiqueira: Histórias de luzes misteriosas e povos antigos da serra.",
                    "9. Artesanato em Lã: As malharias são parte da cultura local (e da economia).",
                    "10. Festa da Cerejeira: A colônia japonesa celebra a florada das Sakuras (julho/agosto) com muita cultura nipônica."
                ],

                // TOP 10 EVENTOS E ESTAÇÕES
                eventos_estacoes: [
                    "1. Festival de Inverno (Julho): A cidade lota. Concertos gratuitos na praça e pagos no auditório. Preços triplicam.",
                    "2. Festa da Cerejeira (Jul/Ago): No Parque das Cerejeiras. Comida japonesa e árvores rosas floridas.",
                    "3. Natal dos Sonhos (Dez): A decoração de Natal de Campos é famosa, com desfiles e Papai Noel. A cidade fica mágica.",
                    "4. Outono (Abr-Jun): Para muitos, a melhor época. Frio, folhas caindo, céu azul e preços médios.",
                    "5. Temporada do Pinhão (Maio): Os restaurantes criam pratos especiais com pinhão.",
                    "6. Verão (Dez-Mar): Chove bastante à tarde, mas é quando as hortênsias estão floridas e lindas.",
                    "7. Feriados Prolongados: A cidade sempre enche. Se quiser paz, evite Corpus Christi e Carnaval.",
                    "8. Primavera (Set-Nov): O Parque Amantikir fica no auge das flores.",
                    "9. Temporada de Malhas (Maio-Jul): As feiras de malha ficam lotadas de gente comprando roupa de frio.",
                    "10. Reveillon: Tranquilo, focado em ceias em família e hotéis. Não tem grandes festas de rua como na praia."
                ],

                // TOP 10 INFO GERAIS
                info_gerais: [
                    "1. Voltagem: 127V (110V). Diferente de outras cidades de serra que podem ser 220V. Confira sempre.",
                    "2. DDD: 12.",
                    "3. Acesso: Pela Rodovia Floriano Rodrigues Pinheiro (SP-123). Estrada sinuosa, mas excelente e linda.",
                    "4. Pedágio: Tem pedágio na subida da serra e é caro.",
                    "5. Uber: Funciona bem, mas em alta temporada o preço dispara (dinâmico) e o trânsito trava.",
                    "6. Estacionamento: No Capivari, estacionar na rua é Zona Azul digital (caro) e estacionamentos privados custam uma fortuna.",
                    "7. Clima: À noite sempre esfria, mesmo no verão. Traga casaco leve sempre.",
                    "8. Moeda: Real (BRL). Cartão aceito em 100% dos lugares.",
                    "9. Hospedagem: Ficar no Capivari é prático (faz tudo a pé) mas caro. Ficar longe é barato, mas depende de carro.",
                    "10. Neblina: Comum na serra ao cair da tarde. Redobre a atenção dirigindo."
                ],

                // TOP 10 DICAS ANTES DE IR
                antes_de_ir: [
                    "1. Mala de Frio: Traga botas, cachecol e casaco pesado se vier entre maio e agosto. O frio dói.",
                    "2. Reserve Restaurantes: No jantar de sexta e sábado, filas de espera passam de 2 horas no Capivari. Reserve.",
                    "3. Não suba a serra sexta à noite: O trânsito na SP-123 para. Tente subir sexta de manhã ou sábado de madrugada.",
                    "4. Economize na Comida: Restaurantes no Capivari são caros. Em Abernéssia (bairro comercial) come-se bem pela metade do preço.",
                    "5. Amantikir Cedo: Vá assim que abrir (9h). Depois das 11h, vira fila para tirar foto.",
                    "6. Malhas: Compre malhas no bairro 'Abernéssia' ou na entrada da cidade. No Capivari é preço de grife.",
                    "7. Lareira: Se o hotel tem lareira, pergunte se a lenha é cobrada à parte (geralmente é).",
                    "8. Hidratação: A altitude e o frio ressecam a pele e lábios. Leve manteiga de cacau.",
                    "9. Chocolate Quente: O do 'Montanhês' é o mais famoso (e denso). Vale a caloria.",
                    "10. Pôr do Sol: O Museu Felícia Leirner tem o pôr do sol mais bonito, com música clássica de fundo às vezes."
                ],

                // --- NOVO: NÚMEROS IMPORTANTES (CAMPOS DO JORDÃO) ---
                numeros: [
                    "1. 190 (Polícia Militar): Emergência e segurança.",
                    "2. 193 (Bombeiros): Resgate em trilhas, acidentes e incêndios (comum em mata seca no inverno).",
                    "3. 192 (SAMU): Urgência médica e ambulância.",
                    "4. (12) 3662-1904 (Hospital Municipal): O Complexo Municipal de Saúde é o atendimento público.",
                    "5. (12) 3664-3524 (Rodoviária): Informações sobre ônibus (Pássaro Marron) para SP e Vale.",
                    "6. 153 (Guarda Civil): Apoio ao turista e trânsito municipal.",
                    "7. (12) 3663-1235 (Portal de Entrada): Centro de Informações Turísticas.",
                    "8. 199 (Defesa Civil): Para deslizamentos em época de chuva de verão.",
                    "9. (12) 3662-5400 (Delegacia de Polícia): Para registrar furtos ou perda de documentos.",
                    "10. 0800 055 5510 (DER): Emergência nas rodovias estaduais de acesso (SP-123)."
                ],

                // --- NOVO: RISCOS E ERROS (CAMPOS DO JORDÃO) ---
                riscos: [
                    "1. Preços 'Suíços': Em Julho, tudo custa o triplo. Um fondue para dois pode passar de R$ 400. Pesquise o cardápio na porta antes de entrar.",
                    "2. Trânsito no Capivari: Entrar de carro no centrinho sábado à noite é pedir para ficar preso 1h em 500 metros. Estacione longe e vá a pé.",
                    "3. Neblina na Serra: A neblina desce rápido e a visibilidade zera na rodovia. Não pare no acostamento (é perigoso). Reduza e siga as faixas.",
                    "4. 'Couvert' Artístico: Quase todo restaurante tem música ao vivo e cobra caro por pessoa. Pergunte se é obrigatório ou se tem área sem música.",
                    "5. Golpe do Aluguel: Casas de temporada falsas ou muito diferentes da foto são comuns no inverno. Use plataformas confiáveis (Airbnb/Booking) e desconfie de PIX direto.",
                    "6. Calçadas Escorregadias: No inverno, o orvalho congela ou cria limo. Cuidado ao andar nas calçadas de pedra, escorrega muito.",
                    "7. Quatis no Horto: Eles são fofos, mas roubam comida e mordem. Não tente alimentar nem fazer carinho.",
                    "8. Frio na Sombra: Ao sol é agradável, na sombra é gelado. O erro é sair sem casaco porque viu sol. Você vai passar frio.",
                    "9. Compras por Impulso: O chocolate e a malha no centro turístico são muito mais caros. Pesquise no bairro Abernéssia ou Portal.",
                    "10. Hospedagem sem Aquecedor: Erro fatal. Verifique se o hotel tem aquecedor ou lençol térmico. O isolamento das casas no Brasil é ruim e faz muito frio dentro do quarto."
                ],
                // COLE O ROTEIRO ABAIXO:
                roteiros: {
                    "curto": {
                        titulo: "Roteiro Express (1 a 2 Dias)",
                        texto: [
                            "Dia 1 (O Clássico): Manhã no Parque Amantikir (chegue cedo). Almoço no Capivari (Baden Baden). Tarde: Teleférico e Morro do Elefante. Noite: Fondue.",
                            "Dia 2 (Vista e Chocolate): Pico do Itapeva (vista do vale). Visita a uma fábrica de chocolate (Araucária ou Spinassi). Tarde: Ducha de Prata e fotos no Portal."
                        ]
                    },
                    "medio": {
                        titulo: "Roteiro Essencial (3 a 5 Dias)",
                        texto: [
                            "Dias 1 e 2: Siga o Roteiro Express acima.",
                            "Dia 3 (Natureza e Arte): Manhã no Horto Florestal (trilhas leves). Almoço no restaurante do parque. Fim de tarde: Museu Felícia Leirner (esculturas e o pôr do sol mais bonito).",
                            "Dia 4 (Cultura): Palácio Boa Vista (residência de inverno). Café no Sans Souci. Noite: Pizza ou truta no bairro Jaguaribe (mais barato que Capivari).",
                            "Dia 5 (Diversão): Dia no Tarundu (patinação, tirolesa) se tiver crianças, ou Parque das Cerejeiras (se for época) + Cervejaria local."
                        ]
                    },
                    "longo": {
                        titulo: "Roteiro Completo (7+ Dias)",
                        texto: [
                            "Dias 1 a 5: Siga o Roteiro Essencial acima.",
                            "Dia 6 (Bate-volta Vizinho): Santo Antônio do Pinhal. Visite o Pico Agudo e a estação de trem Eugênio Lefèvre. Almoço rural.",
                            "Dia 7 (Compras e Malhas): Dia de compras no bairro Abernéssia (muito mais barato que o centro turístico) e Galeria das Malhas.",
                            "Dia 8 (Slow Travel): Café colonial demorado pela manhã e tarde livre para curtir a lareira do hotel ou o Bondinho Urbano."
                        ]
                    }
                },

                // SEUS LINKS DE AFILIADO
                links: {
                    hotel: "https://www.booking.com/searchresults.pt-br.html?city=-634788&aid=304142", 
                    passeio: "https://www.civitatis.com/br/campos-do-jordao/", 
                    seguro: "https://www.segurospromo.com.br" 
                }
            },
            {
                name: "Porto de Galinhas",
                // FOTO: Piscinas Naturais e Jangadas (Wikimedia)
                imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Piscinas_Naturais.tif/lossy-page1-1800px-Piscinas_Naturais.tif.jpg",
                tags: ["Piscinas Naturais", "Mergulho", "Romance"],
                mapa: "https://goo.gl/maps/portodegalinhas",
                clima: "Tropical. Sol o ano todo. Chuvas concentradas entre maio e julho. A água é sempre morna (28ºC).",
                
                // TOP 10 PONTOS TURÍSTICOS
                pontos_turisticos: [
                    "1. Piscinas Naturais: O cartão-postal. Vá de jangada na maré baixa para nadar com os peixinhos coloridos.",
                    "2. Pontal de Maracaípe: O encontro do rio com o mar. O pôr do sol aqui é o mais famoso da região.",
                    "3. Praia de Muro Alto: Um 'piscinão' gigante protegido por uma barreira de corais. Águas paradas, perfeitas para crianças e caiaque.",
                    "4. Passeio de Buggy (Ponta a Ponta): Percorre todas as praias, de Muro Alto até Maracaípe. Obrigatório para entender a geografia.",
                    "5. Projeto Hippocampus: Um centro de preservação de cavalos-marinhos. Você vê eles de pertinho nos aquários.",
                    "6. Vila de Porto: O centrinho cheio de lojas de artesanato, as famosas estátuas de galinhas e restaurantes.",
                    "7. Praia de Maracaípe: O point do surf. Ondas fortes e campeonatos mundiais. Ótimo para sentar num bar e ver o mar.",
                    "8. Praia de Calhetas: Fica no município vizinho (Cabo), mas é passeio clássico. Praia pequena em formato de coração com tirolesa.",
                    "9. Ilha de Santo Aleixo: Passeio de barco imperdível. Uma ilha vulcânica paradisíaca que parece cenário de filme.",
                    "10. Voo de Paramotor: Sobrevoar as piscinas naturais dá uma dimensão real da beleza dos recifes de corais."
                ],

                // TOP 10 GASTRONOMIA
                gastronomia: [
                    "1. Beijupirá: O restaurante mais famoso (e caro) da vila. Peixes com molhos de frutas locais. Experiência gastronômica.",
                    "2. Peixe na Telha: Filé de peixe com molho servido borbulhando dentro de uma telha de barro.",
                    "3. Bolo de Rolo: Patrimônio de Pernambuco. Camadas finíssimas de massa e goiabada derretida. Leve de lembrança.",
                    "4. Cartola: Banana frita, queijo manteiga (ou coalho), açúcar e canela. A sobremesa oficial.",
                    "5. Camarão no Abacaxi: Clássico servido nos restaurantes à beira-mar (como o Barcaxeira).",
                    "6. Agulhinha Frita: Peixinho pequeno frito inteiro, crocante como batata frita. Petisco perfeito na praia.",
                    "7. Tapioca da Vila: Nas ruas do centro, as tapioqueiras fazem na hora com muito coco fresco.",
                    "8. Caldinho de Feijão/Peixe: Na areia da praia, os vendedores passam com garrafas térmicas. É viciante.",
                    "9. Lagosta: Por ser vila de pescadores, é possível comer lagosta fresca por preços melhores que nas capitais.",
                    "10. Arrumadinho: Carne de sol, feijão verde, farofa e vinagrete. Almoço forte para dar sustância."
                ],

                // TOP 10 CURIOSIDADES
                curiosidades: [
                    "1. Nome Sombrio: O nome 'Porto de Galinhas' era um código do tráfico de escravos. 'Tem galinha nova no porto' significava que chegaram escravos ilegalmente.",
                    "2. Galinhas Esculpidas: As galinhas espalhadas pela cidade são obra do artista Gilberto Carcará. Elas usam óculos, biquíni e fantasias.",
                    "3. Piscinas Temporárias: As piscinas naturais só existem na maré baixa. Na maré alta, elas somem e o mar bate nas pedras.",
                    "4. Muro Alto: Tem esse nome por causa do paredão de areia e coqueiros de 3 metros que cerca a praia.",
                    "5. Cavalos-Marinhos: O manguezal de Maracaípe é um berçário natural. O passeio de jangada lá leva para vê-los no habitat (sem tocar!).",
                    "6. Maracaípe: Significa 'Rio dos Maracás' (chocalhos indígenas) em Tupi.",
                    "7. Destino de Mel: É um dos destinos mais procurados por casais em lua de mel no Brasil.",
                    "8. Proibido Alimentar: É estritamente proibido dar comida aos peixes nas piscinas (eles adoecem).",
                    "9. Ipojuca: Porto de Galinhas não é cidade, é um distrito do município de Ipojuca.",
                    "10. Coqueirais: A região já foi dominada por engenhos de açúcar, mas hoje os coqueiros reinam na paisagem."
                ],

                // TOP 10 CULTURA & RELIGIÃO
                religiao: [
                    "1. Convento de Santo Cristo: Fica no centro de Ipojuca (cidade). Uma relíquia histórica com uma imagem sagrada que veio de Portugal.",
                    "2. Artesanato de Galinhas: As galinhas de cabaça ou cerâmica são a identidade cultural local.",
                    "3. Gilberto Carcará: O ateliê do artista que criou a identidade visual da vila é visitável.",
                    "4. Capela de São Benedito: A igrejinha famosa na Praia dos Carneiros (vizinha) é cartão postal religioso da região.",
                    "5. Forró Pé de Serra: A cultura nordestina é forte. À noite, bares no centro tocam forró autêntico.",
                    "6. Xilogravura: A arte de J. Borges (famoso xilogravurista pernambucano) é vendida nas lojas de souvenirs.",
                    "7. Pesca Artesanal: A cultura da jangada é passada de pai para filho e sustenta muitas famílias.",
                    "8. Maracatu: Grupos locais se apresentam na vila em épocas festivas.",
                    "9. Festa de Nossa Senhora do Desterro: Padroeira da região, com procissões tradicionais.",
                    "10. Renda Renascença: Trabalho manual delicadíssimo típico de Pernambuco, encontrado nas lojas chiques."
                ],

                // TOP 10 EVENTOS E ESTAÇÕES
                eventos_estacoes: [
                    "1. Verão (Dez-Mar): A vila ferve. Sol forte, água clara, preços altos e filas para a jangada.",
                    "2. Inverno (Maio-Jul): Chove. E quando chove, a água das piscinas turva e perde a beleza. Evite se possível.",
                    "3. Festival Gastronômico (Novembro): Os restaurantes criam pratos exclusivos com desconto (Porto Gastrô).",
                    "4. Festa da Galinha (Outubro/Novembro): Shows populares e trio elétrico em Ipojuca.",
                    "5. Ano Novo: A vila fica intransitável de tanta gente. As festas nos hotéis são luxuosas.",
                    "6. Maré Baixa (Lua Cheia/Nova): As melhores épocas do mês. Nas luas Crescente/Minguante a maré não baixa tanto (maré morta).",
                    "7. Nordeste Surf (Varia): Campeonatos de surf em Maracaípe atraem gente bonita e festas na praia.",
                    "8. Jazz Porto (Setembro): Festival de Jazz e Blues que traz música de qualidade para a vila.",
                    "9. Tartarugas (Set-Mar): Época de desova. Às vezes o projeto Ecoassociados libera filhotes ao mar (lindo de ver).",
                    "10. Baixa Temporada (Abril/Agosto): Preços despencam. Se pegar dias de sol, é o melhor custo-benefício."
                ],

                // TOP 10 INFO GERAIS
                info_gerais: [
                    "1. Voltagem: 220V. Cuidado com eletrônicos de 110V.",
                    "2. DDD: 81.",
                    "3. Aeroporto: O mais próximo é Recife (REC), a 60km (cerca de 1h a 1h30 de carro).",
                    "4. Transfer: É a melhor forma de chegar. Uber pode sair caro ou cancelar. Ônibus (Vera Cruz) é barato mas demora.",
                    "5. Tábua de Marés: É a Bíblia de Porto de Galinhas. Baixe o app ou consulte o Google. Passeios só na maré baixa (0.0 a 0.5).",
                    "6. Pulseira: Para descer nas piscinas naturais, precisa pegar uma pulseira gratuita na praça (controle de fluxo).",
                    "7. Moeda: Real (BRL). Leve dinheiro vivo para jangadeiros e vendedores de praia.",
                    "8. Caminhar: No centro (Vila), carro é proibido. Faz-se tudo a pé.",
                    "9. Segurança: Tranquilo para turistas, mas evite ruas escuras fora da vila tarde da noite.",
                    "10. Internet: 4G funciona bem na vila, mas falha em praias mais afastadas como Muro Alto."
                ],

                // TOP 10 DICAS ANTES DE IR
                antes_de_ir: [
                    "1. Chinelo nas Pedras: NUNCA ande nos arrecifes descalço. Os ouriços do mar estão escondidos e pisar neles acaba com a viagem.",
                    "2. Consulte a Maré: Se a maré baixa for às 9h da manhã, chegue às 8h. A piscina natural só dura umas 2 horas.",
                    "3. Lua Cheia ou Nova: São as semanas de 'Maré Viva', quando a água seca mais e as piscinas ficam mais bonitas.",
                    "4. Buggy Ponta a Ponta: Faça no primeiro dia para conhecer tudo e escolher sua praia favorita para voltar depois.",
                    "5. Muro Alto com Criança: É a melhor praia para quem tem filhos. Sem ondas, parece uma lagoa.",
                    "6. Pôr do Sol no Pontal: Vá ver o pôr do sol em Maracaípe, mas leve repelente. O mangue tem maruim.",
                    "7. Não compre coral: É crime ambiental e incentiva a destruição dos recifes.",
                    "8. Fotos Subaquáticas: Os jangadeiros oferecem fotos com peixes (pagas à parte). Negocie o preço antes.",
                    "9. Carneiros: Vale o bate-volta (1h de viagem). É uma das praias mais lindas do Brasil.",
                    "10. Evite Finais de Semana: O pessoal de Recife desce em peso. As praias ficam lotadas. Dia de semana é o paraíso."
                ],

                // --- NOVO: NÚMEROS IMPORTANTES (PORTO DE GALINHAS) ---
                numeros: [
                    "1. 190 (Polícia Militar): Emergência e segurança na vila.",
                    "2. (81) 3552-1480 (Delegacia de Ipojuca): Para ocorrências policiais.",
                    "3. (81) 3561-1937 (UPA Ipojuca): Unidade de Pronto Atendimento 24h mais próxima.",
                    "4. 193 (Bombeiros/Salva-Vidas): Afogamentos (atenção às correntes) e resgates.",
                    "5. (81) 3552-1476 (Posto de Saúde de Porto): Para atendimentos simples na própria vila.",
                    "6. (81) 3322-4188 (Aeroporto Recife): Informações de voos.",
                    "7. (81) 3552-1262 (Associação dos Jangadeiros): Informações oficiais sobre os passeios de jangada.",
                    "8. 192 (SAMU): Ambulância de emergência.",
                    "9. (81) 3552-2274 (Centro de Informações Turísticas): Apoio ao visitante na entrada da vila.",
                    "10. (81) 3452-9800 (Rodoviária de Recife): Para quem vai de ônibus de linha."
                ],

                // --- NOVO: RISCOS E ERROS (PORTO DE GALINHAS) ---
                riscos: [
                    "1. Maré Errada: O ERRO Nº 1. Ir às piscinas na maré alta (acima de 0.6) é jogar dinheiro fora. A água fica turva e as piscinas somem. Consulte a Tábua de Marés.",
                    "2. Pisar em Ouriços: Os arrecifes estão cheios de ouriços pretos nos buracos. Se pisar, o espinho entra, infecciona e dói muito. Use chinelo ou sapatilha de neoprene (aquashoes).",
                    "3. Guias Falsos na Estrada: Na rodovia chegando em Porto, homens de bicicleta pulam na frente do carro oferecendo 'atalho' ou 'estacionamento'. IGNORE. Eles te levam para lugares caros e longe.",
                    "4. Consumação em Muro Alto: As barracas em Muro Alto cobram consumação mínima alta ou aluguel de mesa caro. Pergunte o preço antes de sentar.",
                    "5. Jangada Pirata: Compre o ingresso da jangada no guichê oficial da Associação (na praça). Não pague direto a estranhos na areia.",
                    "6. Correntes de Retorno: Em praias de tombo (como Cupe ou Maracaípe), a corrente puxa forte. Se não sabe nadar, não passe da cintura.",
                    "7. Protetor Solar na Piscina: Passar protetor e entrar na água logo em seguida solta óleo e mata os corais. Passe 30 min antes ou use roupas UV.",
                    "8. Bugueiro Credenciado: Só faça passeios com bugueiros credenciados (placa vermelha/cadastro). Buggy pirata não tem seguro em caso de acidente.",
                    "9. Trânsito de Retorno: Voltar para Recife no domingo à tarde pode levar 3 horas engarrafado. Saia cedo ou bem tarde.",
                    "10. Vendedores Insistentes: Na praia principal, o assédio de vendedores é intenso. Um 'não, obrigado' firme resolve, mas eles cansam."
                ],
                // COLE O ROTEIRO ABAIXO:
                roteiros: {
                    "curto": {
                        titulo: "Roteiro Express (1 a 2 Dias)",
                        texto: [
                            "Dia 1 (O Básico Perfeito): Manhã nas Piscinas Naturais (consulte a maré!). Tarde: Passeio de Buggy 'Ponta a Ponta' (conhece Muro Alto, Cupe e Maracaípe). Pôr do sol no Pontal de Maracaípe.",
                            "Dia 2 (Relax): Manhã na Praia de Muro Alto (o piscinão sem ondas). Tarde: Caminhada na Vila, compras de artesanato (galinhas) e jantar no Beijupirá ou Barcaxeira."
                        ]
                    },
                    "medio": {
                        titulo: "Roteiro Essencial (3 a 5 Dias)",
                        texto: [
                            "Dias 1 e 2: Siga o Roteiro Express acima.",
                            "Dia 3 (Carneiros): Bate-volta para a Praia dos Carneiros (é perto). Faça o passeio de catamarã, banho de argila e veja a igrejinha verde.",
                            "Dia 4 (Natureza): Passeio de Jangada no Manguezal (ver cavalos-marinhos) e tarde na praia do Cupe (no bar do Pontal do Cupe que é tranquilo).",
                            "Dia 5 (Aventura): Mergulho de cilindro nas piscinas (batismo) ou passeio para a Ilha de Santo Aleixo (cenário de filme)."
                        ]
                    },
                    "longo": {
                        titulo: "Roteiro Completo (7+ Dias)",
                        texto: [
                            "Dias 1 a 5: Siga o Roteiro Essencial acima.",
                            "Dia 6 (História): Bate-volta para Recife e Olinda (Recife Antigo + Ladeiras de Olinda). É cansativo, mas vale a pena.",
                            "Dia 7 (Litoral Sul): Calhetas e Cabo de Santo Agostinho. A praia de Calhetas é pequena e linda, com tirolesa.",
                            "Dia 8 (Despedida): Dia livre para repetir sua praia favorita (provavelmente Muro Alto ou a piscininha da Vila) e últimas compras."
                        ]
                    }
                },

                // SEUS LINKS DE AFILIADO
                links: {
                    hotel: "https://www.booking.com/searchresults.pt-br.html?city=-662973&aid=304142", 
                    passeio: "https://www.civitatis.com/br/porto-de-galinhas/", 
                    seguro: "https://www.segurospromo.com.br" 
                }
            },
            {
                name: "Porto Seguro",
                // FOTO: Centro Histórico ou Praia (Wikimedia)
                imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Porto_Seguro.1.jpg/960px-Porto_Seguro.1.jpg",
                tags: ["Praias", "História", "Festas"],
                mapa: "https://goo.gl/maps/portoseguro",
                clima: "Tropical quente. Sol o ano todo. Chuvas rápidas podem ocorrer, mas o 'verão eterno' é real.",
                
                // TOP 10 PONTOS TURÍSTICOS
                pontos_turisticos: [
                    "1. Centro Histórico (Cidade Alta): Onde o Brasil começou. Visite o Marco do Descobrimento, a Igreja N.S. da Pena e o Farol. Vista linda do mar.",
                    "2. Praia de Taperapuã: O agito. Onde ficam as mega barracas (Axé Moi, Toa Toa) com shows de dança e lambaeróbica o dia todo.",
                    "3. Passarela do Descobrimento (Álcool): À noite, é o point. Barracas de drinks ('Capeta'), artesanato e restaurantes. Jantar e comprinhas.",
                    "4. Arraial d'Ajuda: Atravesse a balsa. O centrinho (Rua do Mucugê) é charmoso e as praias (Pitinga, Parracho) são lindas.",
                    "5. Trancoso: A vila chique e rústica. O 'Quadrado' (gramado com a igrejinha e casinhas coloridas) é cartão-postal mundial.",
                    "6. Praia do Espelho (Curuipe): Eleita uma das mais bonitas do Brasil. Falésias, corais e piscinas naturais. Vá na maré baixa.",
                    "7. Coroa Vermelha: Onde foi rezada a primeira missa. Mar calmo (sem ondas), ideal para crianças e idosos. Tem uma feira indígena grande.",
                    "8. Recife de Fora: Parque Marinho em alto mar. Vai de escuna na maré baixa para mergulhar com peixes nos corais.",
                    "9. Caraíva: Vila de pescadores onde não entra carro (chão de areia) e o rio encontra o mar. Um paraíso isolado (bate-volta cansativo, melhor dormir lá).",
                    "10. Eco Parque Arraial d'Ajuda: Parque aquático integrado à natureza em Arraial. Ótimo para família."
                ],

                // TOP 10 GASTRONOMIA
                gastronomia: [
                    "1. Moqueca Baiana: Com dendê, leite de coco e coentro. Acompanha pirão e farofa. Obrigatória.",
                    "2. Capeta: O drink símbolo da Passarela. Leva vodka, guaraná em pó, leite condensado e frutas. Cuidado, é doce mas derruba!",
                    "3. Acarajé: Bolinho de feijão frito no dendê. Tem em toda esquina. Peça 'frio' (sem pimenta) se não for acostumado.",
                    "4. Tapioca da Passarela: Recheios generosos doces e salgados. Jantar barato e clássico.",
                    "5. Peixe na Telha: Peixe assado servido na telha de barro, mantém o calor e o sabor.",
                    "6. Bobó de Camarão: Creme de mandioca com camarão e dendê. Cremoso e forte.",
                    "7. Lambreta: Um molusco (parece marisco) servido cozido no caldo. Dizem que cura ressaca.",
                    "8. Cocada: As baianas vendem no tabuleiro. Branca, queimada, com maracujá... todas boas.",
                    "9. Chocolate de Origem: A região produz muito cacau. Prove os chocolates artesanais locais.",
                    "10. Sorvete de Coquinho: Feito da fruta local, muito refrescante no calor."
                ],

                // TOP 10 CURIOSIDADES
                curiosidades: [
                    "1. 1500: Cabral chegou aqui, mas a primeira missa foi em Coroa Vermelha (cidade vizinha Santa Cruz Cabrália), embora tudo seja 'Porto Seguro' para o turista.",
                    "2. Lambada: O ritmo explodiu aqui nos anos 80/90 antes de ganhar o mundo. A dança ainda é forte nas barracas.",
                    "3. Tombado: O Centro Histórico é Patrimônio Histórico Nacional desde 1968. Não pode mudar as fachadas.",
                    "4. Monte Pascoal: É possível ver o monte (que os portugueses avistaram) em dias claros a partir de alguns pontos da costa.",
                    "5. Pataxós: A presença indígena é forte. Muitos vendem artesanato e têm reservas que podem ser visitadas (Reserva da Jaqueira).",
                    "6. Pau-Brasil: Ainda existem árvores de Pau-Brasil preservadas na Estação Veracel.",
                    "7. Trancoso 'Hipster': Era uma vila de pescadores desconhecida até os anos 70, descoberta pelos 'biribandos' (hippies). Hoje recebe celebridades internacionais.",
                    "8. Buraco da Veia: Apelido carinhoso de uma praia em Arraial d'Ajuda, protegida por arrecifes.",
                    "9. Axé Music: Porto Seguro foi o berço que popularizou o Axé para o resto do Brasil nos anos 90.",
                    "10. Balsa: A balsa Porto-Arraial funciona 24h e cruza o Rio Buranhém. A vista do pôr do sol nela é linda."
                ],

                // TOP 10 CULTURA & RELIGIÃO
                religiao: [
                    "1. Igreja Nossa Senhora da Pena: Padroeira da cidade (pena de caneta/escrita, e não de dó). Fica no Centro Histórico (1535).",
                    "2. Igreja do Quadrado (Trancoso): São João Batista. Pequena, branca, de costas para o mar. Cenário de casamentos famosos.",
                    "3. Primeira Missa: A cruz simbólica em Coroa Vermelha marca o local da celebração de 1500.",
                    "4. Sincretismo: O Candomblé é forte. Respeite as oferendas que vir nas praias ou encruzilhadas.",
                    "5. Igreja Nossa Senhora d'Ajuda: Em Arraial. Tem uma fonte de 'água milagrosa' nos fundos e a sala dos milagres.",
                    "6. Festas Juninas: O São João elétrico em Porto Seguro é gigante.",
                    "7. Festa de Iemanjá (2 de Fev): Procissão marítima linda em Arraial e Trancoso.",
                    "8. Capela de São Benedito: Ao lado das ruínas da primeira escola jesuíta do Brasil.",
                    "9. Rituais Pataxós: Na Reserva da Jaqueira, é possível participar de rituais de purificação e danças sagradas.",
                    "10. Cemitério Bizantino: No pé da ladeira do Centro Histórico, tem túmulos antigos e curiosos."
                ],

                // TOP 10 EVENTOS E ESTAÇÕES
                eventos_estacoes: [
                    "1. Verão (Dez-Mar): Cidade lotada, trânsito na balsa, festas todo dia. Preços altos.",
                    "2. Carnaval: Um dos maiores do Brasil. Trios elétricos na Passarela.",
                    "3. Carnaporto: Começa na Quarta-feira de Cinzas (quando o resto do Brasil para). A festa continua na Arena Axé Moi.",
                    "4. Julho (Férias): Lota de famílias e grupos de formatura de colégio. Clima bom, chove pouco.",
                    "5. Baleias Jubarte (Jul-Out): Elas vêm para o mar da Bahia procriar. Tem passeio de barco para avistamento.",
                    "6. Baixa Temporada (Mai-Jun/Ago-Nov): Preços ótimos, cidade tranquila, mas risco de chuvas passageiras.",
                    "7. São João (Junho): Festa junina com forró pé de serra e elétrico.",
                    "8. Réveillon: Festas pagas caríssimas (principalmente em Trancoso) e festa popular na Passarela.",
                    "9. Semana do Saco Cheio (Out): Outubro lota de estudantes universitários.",
                    "10. Maré Baixa (Lua Cheia/Nova): As melhores semanas para visitar, pois formam as piscinas naturais."
                ],

                // TOP 10 INFO GERAIS
                info_gerais: [
                    "1. Aeroporto: BPS (Porto Seguro). Fica perto do centro (5 min de Uber).",
                    "2. Balsa: Para ir a Arraial/Trancoso. Pedestres pagam barato, carros pagam mais e pegam fila. De madrugada é mais caro.",
                    "3. Voltagem: 220V. Cuidado com secadores e chapinhas.",
                    "4. Transporte: Uber funciona bem em Porto e Arraial. Em Trancoso é mais difícil. Em Caraíva, só carroça ou a pé.",
                    "5. Tábua de Marés: O guia da sua viagem. Maré 0.0 a 0.5 = Piscinas Naturais. Maré acima de 0.8 = Praia normal.",
                    "6. Estradas: Para Trancoso/Caraíva tem trechos de terra. Se chover, atola carro comum. Vá de transfer ou 4x4.",
                    "7. Segurança: Zonas turísticas são policiadas. Evite ruas escuras fora do centro à noite.",
                    "8. Dinheiro: Leve espécie para Trancoso, Caraíva e feirinhas. O sinal de máquina de cartão falha nas praias afastadas.",
                    "9. Água: Muito calor = desidratação. Água de coco é barata e tem em todo lugar.",
                    "10. Consumação: Barracas de praia famosas não cobram entrada, mas exigem consumação mínima ou cobram aluguel de cadeira."
                ],

                // TOP 10 DICAS ANTES DE IR
                antes_de_ir: [
                    "1. Golpes de Rua: Não aceite 'presentes' na rua (fitinhas, degustação). É isca para te venderem time-sharing (cotas de resort) ou cobrar caro depois.",
                    "2. Hospedagem: Se quer agito, fique em Taperapuã. Se quer charme, Arraial. Se quer luxo rústico, Trancoso. Se quer economia e história, Centro.",
                    "3. Protetor Solar: O sol da Bahia queima diferente. O vento fresco engana.",
                    "4. Transfer x Carro: Se for ficar só em Porto/Arraial, Uber resolve. Se for para Trancoso/Espelho, melhor alugar carro ou fechar passeio.",
                    "5. Maré: Baixe um app de 'Tábua de Marés' e programe os passeios de piscina natural (Recife de Fora/Espelho) no horário mais baixo do dia.",
                    "6. Balsa a pé: Se estiver hospedado em Porto e quiser jantar em Arraial, atravesse a balsa a pé e pegue uma van do outro lado. Economiza tempo e dinheiro.",
                    "7. Repelente: Tem mosquito, principalmente nas praias com muito verde (Espelho/Caraíva).",
                    "8. Cuidado com o Coco: Em praias desertas, não fique debaixo de coqueiros carregados. Um coco na cabeça é acidente grave.",
                    "9. Lixo: Muitas praias são áreas de preservação. Traga seu lixo de volta.",
                    "10. Ritmo Baiano: O serviço pode ser mais lento que no Sul/Sudeste. Relaxe, você está na Bahia. Não tenha pressa."
                ],

                // --- NOVO: NÚMEROS IMPORTANTES (PORTO SEGURO) ---
                numeros: [
                    "1. 190 (Polícia Militar): Emergência.",
                    "2. 192 (SAMU): Ambulância.",
                    "3. 193 (Bombeiros): Resgate.",
                    "4. (73) 3288-1880 (Aeroporto): Informações de voos.",
                    "5. (73) 3288-3907 (Delegacia do Turista - DELTUR): Apoio ao visitante.",
                    "6. (73) 3288-2516 (Balsa): Informações sobre travessia.",
                    "7. (73) 3288-4665 (Rodoviária): Ônibus intermunicipais.",
                    "8. (73) 3288-5183 (Hospital Luís Eduardo Magalhães): Hospital público de referência.",
                    "9. 199 (Defesa Civil): Chuvas fortes.",
                    "10. (73) 3012-4217 (UPA): Unidade de Pronto Atendimento."
                ],

                // --- NOVO: RISCOS E ERROS (PORTO SEGURO) ---
                riscos: [
                    "1. O Golpe da 'Fitinha Grátis': O ERRO Nº 1. Vendedores colocam a fitinha no seu braço ou dão uma 'amostra grátis' de algo e depois exigem dinheiro ou te seguram por 1 hora tentando vender cota de hotel. Diga NÃO firme e não pare.",
                    "2. Maré Alta no Espelho: Ir para a Praia do Espelho na maré alta é jogar dinheiro fora. As piscinas somem e a praia fica comum. Consulte a tábua!",
                    "3. Bebida Batizada: Na balada ou passarela, cuidado com copos abertos. O 'Boa Noite Cinderela' existe.",
                    "4. Beber e Nadar: O mar de Taperapuã é fundo logo no começo (praia de tombo em alguns pontos). Álcool e mar não combinam.",
                    "5. Estrada de Trancoso: Tentar ir de carro baixo (Gol/Onix) para Trancoso em dia de chuva. Você VAI atolar. Vá pelo asfalto (volta maior) ou use transfer 4x4.",
                    "6. Preços em Trancoso: Comer no Quadrado custa preço de restaurante de luxo em SP. Olhe o cardápio antes de sentar.",
                    "7. Ouriço do Mar: Nos recifes (piscinas naturais), cuidado onde pisa. Espinho de ouriço dói muito e infecciona. Use sapatilha aquática (Crocs/Papete).",
                    "8. Balsa na Volta: Domingo à tarde, a fila da balsa para voltar de Arraial para Porto pode levar 2 horas.",
                    "9. Sol da Ressaca: Dormir na praia depois de beber. A insolação é garantida e severa.",
                    "10. Van Clandestina: Use as vans oficiais que saem da balsa. Cuidado com transporte pirata."
                ],

                // --- NOVO: ROTEIRO AUTOMÁTICO (PORTO SEGURO) ---
                roteiros: {
                    "curto": {
                        titulo: "Roteiro Express (1 a 2 Dias)",
                        texto: [
                            "Dia 1 (Agito e Clássico): Manhã na Praia de Taperapuã (Barracas Axé Moi ou Toa Toa). Tarde: Centro Histórico (Cidade Alta) para ver o Marco do Descobrimento e o farol. Noite: Passarela do Álcool.",
                            "Dia 2 (Relax): Coroa Vermelha (onde foi a 1ª missa). Águas calmas e feirinha indígena. Almoço por lá (barraca do Macuco)."
                        ]
                    },
                    "medio": {
                        titulo: "Roteiro Essencial (3 a 5 Dias)",
                        texto: [
                            "Dias 1 e 2: Siga o Roteiro Express acima.",
                            "Dia 3 (Arraial d'Ajuda): Pegue a balsa. Vá para a Praia do Mucugê ou Pitinga. Fim de tarde na Rua do Mucugê (a rua mais charmosa do Brasil).",
                            "Dia 4 (Natureza): Recife de Fora (piscinas naturais). Consulte a tábua de marés! Tarde livre em Taperapuã.",
                            "Dia 5 (Trancoso): Bate-volta OBRIGATÓRIO. Conheça o Quadrado de Trancoso (igrejinha) e desça para a Praia dos Nativos ou Coqueiros."
                        ]
                    },
                    "longo": {
                        titulo: "Roteiro Completo (7+ Dias)",
                        texto: [
                            "Dias 1 a 5: Siga o Roteiro Essencial acima.",
                            "Dia 6 (A Praia Perfeita): Bate-volta para a Praia do Espelho (Curuipe). É eleita frequentemente uma das mais bonitas do Brasil. Vá na maré baixa.",
                            "Dia 7 (Raiz): Caraíva. É longe (estrada de terra), mas o encontro do rio com o mar e as ruas de areia são mágicos.",
                            "Dia 8 (Diversão): Arraial d'Ajuda Eco Parque (toboáguas) ou Parque Marinho da Coroa Alta."
                        ]
                    }
                },

                // SEUS LINKS DE AFILIADO
                links: {
                    hotel: "https://www.booking.com/searchresults.pt-br.html?city=-663243&aid=304142", 
                    passeio: "https://www.civitatis.com/br/porto-seguro/", 
                    seguro: "https://www.segurospromo.com.br" 
                }
            },
            {
                name: "Búzios",
                // FOTO: Orla Bardot ou Rua das Pedras (Wikimedia)
                imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Buzios_11_2006_03.JPG/960px-Buzios_11_2006_03.JPG",
                tags: ["Praias", "Luxo", "Gastronomia"],
                mapa: "https://goo.gl/maps/buzios",
                clima: "Tropical Seco. Chove menos que no Rio de Janeiro. Venta bastante. A água do mar é fria o ano todo.",
                
                // TOP 10 PONTOS TURÍSTICOS
                pontos_turisticos: [
                    "1. Rua das Pedras: O coração da cidade. Lojas de grife, restaurantes e bares badalados. O charme acontece à noite.",
                    "2. Orla Bardot: A continuação da Rua das Pedras na beira do mar. Tem a estátua da Brigitte Bardot e os barcos de pesca.",
                    "3. Praia de Geribá: A praia dos jovens e do surf. Extensa, areia branca e muita gente bonita. O Fishbone é o point do fim de tarde.",
                    "4. Praia da Ferradura: Formato de 'U', mar sem ondas, parece uma lagoa. Perfeita para famílias, caiaque e stand-up paddle.",
                    "5. Azeda e Azedinha: Acesso por uma escadaria de madeira ou táxi-boat. Pequenas, charmosas e com água cristalina.",
                    "6. Praia de João Fernandes: A preferida dos argentinos. Água transparente, peixinhos visíveis e muitos hotéis/restaurantes na encosta.",
                    "7. Praia Brava: Mar agitado e visual selvagem. É onde ficam os Beach Clubs mais luxuosos (Silk, Rocka).",
                    "8. Porto da Barra (Manguinhos): O melhor lugar para ver o pôr do sol. Um complexo gastronômico na beira do cais com restaurantes incríveis.",
                    "9. Praia da Tartaruga: Água mais quente (ou menos fria) e verde. Ótima para mergulho livre e ver tartarugas.",
                    "10. Mirante do Forno: Uma vista panorâmica espetacular da região. Pouca gente vai, mas rende a melhor foto."
                ],

                // TOP 10 GASTRONOMIA
                gastronomia: [
                    "1. Crepe do Chez Michou: Um clássico da Rua das Pedras há décadas. O ambiente é barulhento e divertido.",
                    "2. Gastronomia do Porto da Barra: Jantar no cais de Manguinhos vendo o pôr do sol é obrigatório. Restaurantes de frutos do mar e italianos.",
                    "3. Rocka Beach Lounge: Na Praia Brava. Comida sofisticada com pé na areia e colchões para deitar.",
                    "4. Pizza Quadrada: Vários locais vendem pizza por metro ou quadrada, típica da região.",
                    "5. Peixe com Banana: Prato caiçara muito comum nos restaurantes locais.",
                    "6. O Barco: Restaurante tradicional na Orla Bardot, especializado em moquecas e peixes frescos.",
                    "7. Sorvete na Rua das Pedras: Caminhar tomando um gelato italiano (Sorvete Mil Frutas ou Itália) é tradição.",
                    "8. Empanadas Argentinas: Devido à enorme comunidade argentina em Búzios, as empanadas são autênticas.",
                    "9. Frutos do Mar na Telha: Servido em muitos quiosques de João Fernandes.",
                    "10. Caipirinha de Frutas Tropicais: Kiwi, Maracujá e Frutas Vermelhas são as mais pedidas nos quiosques."
                ],

                // TOP 10 CURIOSIDADES
                curiosidades: [
                    "1. Brigitte Bardot: A atriz francesa 'descobriu' Búzios nos anos 60 quando era só uma vila de pescadores. Ela colocou a cidade no mapa mundial.",
                    "2. 23 Praias: A península é pequena, mas tem 23 praias com características totalmente diferentes (umas com onda, outras piscinas).",
                    "3. Vento Constante: Búzios venta muito, o que atrai praticantes de Kitesurf e Windsurf (principalmente na Rasa e Manguinhos).",
                    "4. Invasão Argentina: É chamada de 'Búzios Aires'. Muitos argentinos moram e têm negócios lá. O espanhol é a segunda língua.",
                    "5. Ressurgência: Fenômeno oceanográfico que faz as águas profundas e geladas da Antártida subirem aqui. Por isso a água é trincando de fria.",
                    "6. Sem Prédios: Uma lei proíbe construções altas. Isso mantém o charme de vila com telhados coloniais.",
                    "7. Rua das Pedras: As pedras 'pés-de-moleque' são originais e irregulares. Salto alto aqui é impossível (e perigoso).",
                    "8. Três Castelos: A formação rochosa da Ponta da Lagoinha parece ruínas de castelos e tem piscinas naturais secretas.",
                    "9. Nudismo: A praia Olho de Boi é naturista. O acesso é por trilha saindo da Praia Brava.",
                    "10. Mick Jagger: O vocalista dos Stones também passou por lá nos anos 70 e tem uma música supostamente inspirada na cidade."
                ],

                // TOP 10 CULTURA & RELIGIÃO
                religiao: [
                    "1. Igreja de Sant'Ana: Padroeira da cidade. A igrejinha fica num morro entre a Armação e os Ossos. Vista linda.",
                    "2. Capela de Santa Rita de Cássia: No cais de Manguinhos. Pequena e histórica.",
                    "3. Festa de Sant'Ana (Julho): Procissão marítima onde os barcos dos pescadores são decorados.",
                    "4. Quilombo da Rasa: Uma comunidade remanescente de quilombo que preserva a cultura afro-brasileira na entrada da cidade.",
                    "5. Arte na Rua: A Orla Bardot é cheia de esculturas de bronze (Brigitte, Os Pescadores, Juscelino Kubitschek).",
                    "6. Cine Bardot: Um cinema pequeno e charmoso que exibe filmes cult e sedia o Festival de Cinema de Búzios.",
                    "7. Artesanato Local: Na Praça Santos Dumont tem uma feirinha de artesanato diária à noite.",
                    "8. Galerias de Arte: A Rua das Pedras tem várias galerias com obras de artistas plásticos renomados.",
                    "9. Pesca Artesanal: Ainda é possível ver os pescadores chegando com as redes na Praia da Armação pela manhã.",
                    "10. Festival de Jazz e Blues: Evento anual que espalha palcos pela cidade com música de graça."
                ],

                // TOP 10 EVENTOS E ESTAÇÕES
                eventos_estacoes: [
                    "1. Verão (Dez-Mar): Cidade lotada, trânsito parado, vida noturna intensa. Água fria refresca o calor.",
                    "2. Inverno (Jun-Set): Melhor época gastronômica (Festival Gastronômico). Água muito gelada, mas dias de céu azul.",
                    "3. Reveillon: Um dos mais caros do Brasil. Festas privadas custam R$ 3.000+ o ingresso.",
                    "4. Búzios Jazz Festival (Julho): Shows de jazz nas ruas e praças.",
                    "5. Degusta Búzios (Agosto/Out): Festival onde os restaurantes montam barracas na rua com pratos pequenos a preços populares.",
                    "6. Feriadões: A entrada da cidade trava. O trajeto de 10km pode levar 2 horas.",
                    "7. Vento Sudoeste: Quando entra esse vento, o mar fica mexido e a temperatura cai. Atenção à previsão.",
                    "8. Março/Abril: O 'segredo'. Água mais clara, cidade vazia e preços de baixa temporada.",
                    "9. XC Búzios: Prova de maratona aquática e corrida que movimenta a cidade.",
                    "10. Pride Búzios: Parada LGBTQIA+ que acontece geralmente em setembro/outubro."
                ],

                // TOP 10 INFO GERAIS
                info_gerais: [
                    "1. Transporte: Carro é útil para ir de uma praia a outra, mas estacionar é caro e difícil (Zona Azul 'Búzios Digital'). Uber funciona bem.",
                    "2. Trolley: Um caminhão aberto turístico que percorre 12 praias. Ótimo para o primeiro dia para conhecer tudo.",
                    "3. Táxi-Boat: O meio mais divertido de se locomover. Barquinhos que levam de uma praia a outra (ex: Ossos -> Azeda).",
                    "4. Preços: Búzios é caro. Comida e bebida têm preços de Rio de Janeiro ou mais altos.",
                    "5. Água Fria: Esteja avisado. A água varia de 18ºC a 21ºC. É revigorante, mas choca na primeira entrada.",
                    "6. Voltagem: 110V. A maioria dos hotéis oferece secador.",
                    "7. Pôr do Sol: O espetáculo diário. O sol se põe no mar na Orla Bardot e Porto da Barra.",
                    "8. Caminhada: As distâncias enganam. De Geribá até a Rua das Pedras são 4km (longe para ir a pé).",
                    "9. Segurança: Considerada segura para caminhar à noite no centro e orlas. Cuidado com pertences na areia.",
                    "10. Aeroporto: O de Búzios (BZC) recebe poucos voos privados. O turista comum chega pelo Galeão (Rio) e pega transfer (2h30 de viagem)."
                ],

                // TOP 10 DICAS ANTES DE IR
                antes_de_ir: [
                    "1. Calçado: Leve rasteirinha ou tênis. Esqueça salto alto para a Rua das Pedras ou vai torcer o pé.",
                    "2. Trânsito na Chegada: Se for feriado, saia do Rio de madrugada. Se sair às 10h da manhã, vai pegar 5 horas de engarrafamento.",
                    "3. Zona Azul: Baixe o app 'Búzios Digital' para pagar estacionamento na rua. Os fiscais multam rápido.",
                    "4. Vento: Leve um casaco corta-vento ou pashmina. À noite venta frio, mesmo no verão.",
                    "5. Praias com Sombra: Azeda e João Fernandes têm pouca areia e enchem rápido. Chegue cedo.",
                    "6. Cadeira de Praia: Em Geribá e João Fernandes, se sentar na cadeira da barraca, prepare-se para consumação mínima ou aluguel caro.",
                    "7. Arraial do Cabo: Reserve um dia para ir a Arraial. Fica a 40min e a água é azul caribe (mas ainda mais gelada).",
                    "8. Tartaruga no Fim de Tarde: O pôr do sol na Praia da Tartaruga é lindo e a água é a menos fria da cidade.",
                    "9. Dinheiro: Leve um pouco de espécie para os táxi-boats e vendedores de mate/milho.",
                    "10. Mergulho: Se gosta, faça o 'Batismo' em João Fernandes. A vida marinha é rica."
                ],

                // --- NOVO: NÚMEROS IMPORTANTES (BÚZIOS) ---
                numeros: [
                    "1. 190 (Polícia Militar): Emergência.",
                    "2. 199 (Guarda Municipal): Muito atuante no trânsito e centro.",
                    "3. 193 (Bombeiros): Resgate no mar.",
                    "4. (22) 2623-1000 (Hospital Municipal Rodolpho Perissé): Principal emergência pública.",
                    "5. (22) 2623-2093 (Delegacia de Turismo): Atendimento especializado.",
                    "6. (22) 2620-8080 (Rodoviária de Búzios): Ônibus 1001 para o Rio.",
                    "7. 192 (SAMU): Ambulância.",
                    "8. (22) 2623-6447 (Informações Turísticas): Pórtico de entrada.",
                    "9. (22) 2623-1300 (Prefeitura): Geral.",
                    "10. Táxi Boat (Associação): Geralmente ficam nos píeres dos Ossos e Centro."
                ],

                // --- NOVO: RISCOS E ERROS (BÚZIOS) ---
                riscos: [
                    "1. O Choque Térmico: O ERRO Nº 1. Achar que a água é 'quentinha' como no Nordeste. É gelada! Entre devagar para não ter cãibra.",
                    "2. Salto Alto nas Pedras: Você vai ver turistas tropeçando na Rua das Pedras. Não seja essa pessoa. Use rasteirinha.",
                    "3. Trânsito da Estrada da Usina: Em feriados, o trecho entre a entrada da cidade e o centro para totalmente. Tenha paciência ou alugue bicicleta.",
                    "4. Consumação Mínima Abusiva: Algumas barracas (principalmente em João Fernandes) exigem consumação altíssima para sentar. Pergunte ANTES.",
                    "5. Ouriços: Nas pedras laterais das praias (Ferradura/Tartaruga) têm muitos ouriços. Cuidado ao pisar.",
                    "6. Bebida e Direção: A Lei Seca na saída de Búzios é frequente e rigorosa. Se beber, vá de Uber.",
                    "7. Preço do Uber Dinâmico: Na saída de festas (Privilège/Silk), o Uber pode custar R$ 100 por trechos curtos. Combine táxi antes se possível.",
                    "8. Insolação com Vento: O vento constante mascara o calor do sol. Você queima sem sentir. O índice UV é alto.",
                    "9. Água Viva: Às vezes aparecem correntes de água viva (mães d'água). Se ver bandeira roxa ou avisos, não entre.",
                    "10. Furtos na Areia: Em Geribá lotada, não deixe celular na canga e vá para o mar. Ocorrem furtos de oportunidade."
                ],

                // --- NOVO: ROTEIRO AUTOMÁTICO (BÚZIOS) ---
                roteiros: {
                    "curto": {
                        titulo: "Roteiro Express (1 a 2 Dias)",
                        texto: [
                            "Dia 1 (O Clássico): Manhã nas praias Azeda e Azedinha (vá de táxi-boat saindo do centro). Almoço na Orla Bardot. Fim de tarde: Estátua da Brigitte Bardot e Rua das Pedras à noite.",
                            "Dia 2 (Escolha seu Vibe): Se quer agito/surf: Praia de Geribá. Se quer calmaria/família: Praia da Ferradura. Pôr do sol no Porto da Barra (Manguinhos)."
                        ]
                    },
                    "medio": {
                        titulo: "Roteiro Essencial (3 a 5 Dias)",
                        texto: [
                            "Dias 1 e 2: Siga o Roteiro Express acima.",
                            "Dia 3 (Águas Cristalinas): Praia de João Fernandes e João Fernandinho. Ótimo para snorkel. Almoço nos restaurantes com vista para o mar ali mesmo.",
                            "Dia 4 (Passeio Geral): Passeio de Trolley (caminhão aberto) que passa por 12 praias e mirantes ou passeio de Escuna/Catamarã.",
                            "Dia 5 (Chic & Wild): Praia Brava. É mais selvagem, mas tem os Beach Clubs mais chiques (Silk, Rocka). Se sobrar tempo, Olho de Boi (nudismo) fica ali perto."
                        ]
                    },
                    "longo": {
                        titulo: "Roteiro Completo (7+ Dias)",
                        texto: [
                            "Dias 1 a 5: Siga o Roteiro Essencial acima.",
                            "Dia 6 (Caribe Vizinho): Bate-volta OBRIGATÓRIO para Arraial do Cabo (40 min de carro). As praias lá são ainda mais azuis (Pontal do Atalaia).",
                            "Dia 7 (Natureza): Praia da Tartaruga (água quente e verde). Alugue um caiaque.",
                            "Dia 8 (Despedida): Café da manhã no Chez Michou (crepe) e últimas compras nas butiques da Rua das Pedras."
                        ]
                    }
                },

                // SEUS LINKS DE AFILIADO
                links: {
                    hotel: "https://www.booking.com/searchresults.pt-br.html?city=-626938&aid=304142", 
                    passeio: "https://www.civitatis.com/br/buzios/", 
                    seguro: "https://www.segurospromo.com.br" 
                }
            },
            {
                name: "Natal",
                // FOTO: Ponta Negra e Morro do Careca
                imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Alex_Regis_Morro_do_Careca_Ponta_Negra_Natal_RN_%2840261556354%29.jpg/960px-Alex_Regis_Morro_do_Careca_Ponta_Negra_Natal_RN_%2840261556354%29.jpg",
                tags: ["Dunas", "Praias", "Sol"],
                mapa: "https://goo.gl/maps/natal",
                clima: "Tropical. Sol 300 dias por ano. Venta bastante (a 'Noiva do Sol'). Chuvas concentradas entre Abril e Julho.",
                
                // TOP 10 PONTOS TURÍSTICOS
                pontos_turisticos: [
                    "1. Praia de Ponta Negra e Morro do Careca: O cartão-postal. A praia urbana mais famosa. O Morro é área de preservação (não pode subir), mas a foto é obrigatória.",
                    "2. Dunas de Genipabu: O passeio de Buggy mais famoso do Brasil. Escolha 'com emoção'. Inclui skibunda, aerobunda e os dromedários.",
                    "3. O Maior Cajueiro do Mundo: Fica em Pirangi. É uma árvore única que cobre uma área de 8.500m². Impressionante.",
                    "4. Parrachos de Maracajaú: As 'Maldivas' brasileiras. Piscinas naturais (corais) a 7km da costa. Mergulho com peixinhos (consulte a tábua de marés!).",
                    "5. Forte dos Reis Magos: Onde a cidade começou. Uma fortaleza em formato de estrela no encontro do rio com o mar.",
                    "6. Praia da Pipa (Bate-volta): A 80km de Natal. Falésias, golfinhos e uma vila charmosa. O ideal é dormir lá, mas o bate-volta é muito comum.",
                    "7. Barreira do Inferno: Centro de Lançamento de Foguetes. Tem um museu aeroespacial muito legal para visitar na rota do Litoral Sul.",
                    "8. Lagoa de Arituba: Águas calmas e doces, ideal para relaxar, andar de pedalinho e comer peixe frito.",
                    "9. Centro de Turismo (Antiga Casa de Detenção): Ótimo para comprar artesanato, renda de bilro e ver o Forró com Turista (às quintas).",
                    "10. Aquário Natal: Na Redinha. Tem tubarões, pinguins e você pode até tocar em alguns animais (tanque de toque)."
                ],

                // TOP 10 GASTRONOMIA
                gastronomia: [
                    "1. Ginga com Tapioca: Patrimônio imaterial. Um peixinho pequeno frito servido dentro da tapioca. Clássico do Mercado da Redinha.",
                    "2. Camarão Potiguar: Natal é a terra do camarão. Prove o 'Camarão Internacional' (cremoso com arroz e batata palha) no restaurante Camarões.",
                    "3. Carne de Sol com Macaxeira: A carne de sol do Nordeste é diferente (mais úmida). Acompanha pirão de queijo ou macaxeira frita.",
                    "4. Cartola: Sobremesa de banana frita, queijo coalho derretido, açúcar e canela. Divina.",
                    "5. Paçoca de Pilão: Carne de sol desfiada e socada no pilão com farinha e cebola. Não é doce!",
                    "6. Baião de Dois: Arroz, feijão verde, queijo coalho e nata. Cremoso e forte.",
                    "7. Caranguejo: Nos quiosques da praia, o 'Chico' (caranguejo) é muito pedido.",
                    "8. Suco de Mangaba: Fruta típica da região, leitosa e azedinha. Muito refrescante.",
                    "9. Peixe na Telha: Peixe cozido ou assado servido na telha de barro.",
                    "10. Bolo de Rolo: Embora seja pernambucano, é muito comum e delicioso em Natal (camadas finíssimas de bolo e goiabada)."
                ],

                // TOP 10 CURIOSIDADES
                curiosidades: [
                    "1. Esquina do Continente: É um dos pontos das Américas mais próximos da África e Europa. Por isso foi base estratégica dos EUA na 2ª Guerra Mundial.",
                    "2. Forró For All?: Uma lenda diz que o nome 'Forró' veio das festas americanas na base aérea que eram 'For All' (para todos). Historiadores debatem, mas a lenda ficou.",
                    "3. Ar Mais Puro: A NASA já considerou o ar de Natal como o mais puro das Américas, graças aos ventos alísios que vêm do mar.",
                    "4. Potiguar: Quem nasce no RN é Potiguar, que em tupi significa 'Comedor de Camarão'.",
                    "5. Cidade Espacial: A Barreira do Inferno foi a primeira base de lançamento de foguetes da América do Sul (1965).",
                    "6. Noiva do Sol: O sol nasce muito cedo (as 4h30 - 5h da manhã já está claro) e se põe cedo (17h30). Aproveite o dia!",
                    "7. Dunas Móveis: As dunas de Genipabu mudam de lugar e formato com o vento. A paisagem nunca é a mesma.",
                    "8. Chiclete com Banana: A banda famosa começou a fazer sucesso nos carnavais fora de época de Natal (Carnatal).",
                    "9. Cajueiro Mutante: O Maior Cajueiro cresce devido a uma anomalia genética; os galhos tocam o chão, criam raízes e sobem de novo.",
                    "10. Ponte Newton Navarro: Uma ponte estaiada gigante que liga a Zona Norte. A vista do pôr do sol lá de cima (ou debaixo dela) é linda."
                ],

                // TOP 10 CULTURA & RELIGIÃO
                religiao: [
                    "1. Reis Magos: A cidade se chama Natal porque foi fundada em 25 de dezembro. A relação com os Reis Magos (Santos Reis) é forte.",
                    "2. Catedral Metropolitana: Uma arquitetura moderna e diferente, em formato trapezoidal.",
                    "3. Estátua dos Reis Magos: Um pórtico enorme na entrada da cidade (BR-101) com as estátuas dos três reis.",
                    "4. Festa de Santos Reis (Janeiro): É o feriado municipal mais importante depois do Natal.",
                    "5. Igreja do Galo: No centro histórico (Cidade Alta), uma das mais antigas, barroca.",
                    "6. Mártires de Cunhaú e Uruaçu: Santos brasileiros canonizados pelo Papa, vítimas de invasões holandesas. O santuário é muito visitado.",
                    "7. Artesanato de Bilro: As rendeiras fazem trabalhos incríveis na praia ou centros de artesanato.",
                    "8. Boi de Reis: Folclore local colorido, parecido com o Bumba-meu-boi.",
                    "9. Candomblé: Presença forte de terreiros e festas de Iemanjá nas praias.",
                    "10. Capela de São Pedro: Frequentada pelos pescadores na Redinha."
                ],

                // TOP 10 EVENTOS E ESTAÇÕES
                eventos_estacoes: [
                    "1. Carnatal (Dezembro): O maior carnaval fora de época do Brasil. Trios elétricos ao redor do estádio Arena das Dunas.",
                    "2. Verão (Dez-Mar): Alta temporada. Sol forte, ventos constantes. Reserve buggy com antecedência.",
                    "3. Inverno (Abr-Jul): É a estação das chuvas ('Inverno' no Nordeste é chuva, não frio). Preços caem pela metade.",
                    "4. Agosto a Novembro: Melhor época! Venta muito (bom para Kitesurf), chove pouco e preços são médios.",
                    "5. Festa Junina (São João): Natal tem o 'São João de Natal' com shows grandes na Arena das Dunas.",
                    "6. Natal em Natal (Dezembro): Festival de música e luzes que celebra o aniversário da cidade.",
                    "7. FENACAM: Feira Nacional do Camarão. Evento de negócios, mas movimenta a gastronomia.",
                    "8. Réveillon: Queima de fogos na Ponte Newton Navarro e em Ponta Negra.",
                    "9. Maré Baixa: Essencial consultar para ir aos Parrachos (Maracajaú/Perobas). Se a maré for alta, não tem passeio.",
                    "10. Temporada de Buggy: O ano todo, mas no verão as dunas ficam lotadas de turistas."
                ],

                // TOP 10 INFO GERAIS
                info_gerais: [
                    "1. Aeroporto (NAT): Fica em São Gonçalo do Amarante, longe pra caramba (40km / 1h do centro). O Uber dá uns R$ 80-100.",
                    "2. 220V: A voltagem é 220V. Cuidado com eletrônicos.",
                    "3. Buggy Credenciado: Só ande com bugueiros credenciados (placa vermelha ou adesivo da SETUR). É questão de vida ou morte nas dunas.",
                    "4. Tábua de Marés: Baixe um app. Piscinas naturais só aparecem na maré baixa (0.0 a 0.5 é o ideal).",
                    "5. Sol: O sol é cruel. Use protetor fator 50+. O vento fresco mascara a queimadura.",
                    "6. Água: Evite beber da torneira. O índice de salinidade pode ser alto em algumas áreas.",
                    "7. Uber: Funciona muito bem em Ponta Negra e Centro. Para Litoral Norte/Sul, melhor fechar passeio ou alugar carro.",
                    "8. Via Costeira: A avenida dos hotéis resorts. É linda, mas não tem nada para fazer a pé (só mar e hotel). Precisa de carro para ir jantar.",
                    "9. DDD: 84.",
                    "10. Gorjeta: Os garçons esperam os 10%. Em barracas de praia, verifique se já está incluído."
                ],

                // TOP 10 DICAS ANTES DE IR
                antes_de_ir: [
                    "1. Maracajaú vs Perobas: Maracajaú é mais fundo (mergulho), Perobas é mais raso (água na cintura, caribe). Escolha seu perfil.",
                    "2. Não suba o Morro: Subir o Morro do Careca é proibido e dá multa ambiental. Respeite.",
                    "3. Buggy 'Com Emoção': Se você não tem problemas de coluna, peça 'com emoção'. Sem emoção é só um passeio de táxi na areia.",
                    "4. Restaurante Camarões: É turístico? Sim. Vale a pena? Muito. A fila é grande, chegue cedo (11h30 ou 18h30).",
                    "5. Pipa: Tente passar pelo menos uma noite em Pipa. O bate-volta é cansativo e você perde a noite na vila, que é o melhor.",
                    "6. Óculos Escuros no Buggy: A areia voa muito no rosto. Óculos são proteção, não só estilo.",
                    "7. Litoral Norte vs Sul: Norte = Dunas e Buggy (Genipabu). Sul = Falésias e Golfinhos (Pipa/Tabatinga). Faça os dois em dias diferentes.",
                    "8. Vento: Mulheres, evitem vestidos muito soltos nos passeios de falésia. O vento levanta tudo.",
                    "9. Cajueiro: Paga-se uma entrada barata. Leve dinheiro trocado.",
                    "10. Protetor Solar nas Costas: No buggy, você fica exposto o tempo todo. Passe muito protetor nas costas e orelhas."
                ],

                // --- NÚMEROS IMPORTANTES (NATAL) ---
                numeros: [
                    "1. 190 (Polícia Militar): Emergência.",
                    "2. 192 (SAMU): Ambulância.",
                    "3. (84) 3232-7404 (Delegacia do Turista - DEATUR): Fica na Praia do Meio.",
                    "4. (84) 3343-4177 (Aeroporto Internacional): Informações de voos.",
                    "5. 193 (Bombeiros): Resgate e busca.",
                    "6. (84) 3232-2525 (Rodoviária): Ônibus para Pipa/Recife.",
                    "7. (84) 3232-6000 (Hospital Walfredo Gurgel): Maior hospital público.",
                    "8. (84) 98138-0676 (Sindicato dos Bugueiros): Para checar credenciais.",
                    "9. 199 (Defesa Civil): Chuvas e deslizamentos.",
                    "10. (84) 3211-0000 (Rádio Táxi): Opção além do Uber."
                ],

                // --- RISCOS E ERROS (NATAL) ---
                riscos: [
                    "1. Bugueiro Pirata: O MAIOR RISCO. Bugueiros não credenciados não sabem as rotas seguras nas dunas. Já ocorreram acidentes fatais. Exija a credencial.",
                    "2. Maré nos Parrachos: Comprar o passeio para Maracajaú sem olhar a maré. Se estiver alta (acima de 0.6), você vai ver água turva e não vai dar pé. Dinheiro jogado fora.",
                    "3. Andar na Areia à Noite: Ponta Negra é segura no calçadão movimentado. Não vá para as partes escuras ou areia deserta à noite (assaltos).",
                    "4. 'Amostra Grátis' de Castanha: No mercado, prove, mas pergunte o preço antes de pedir o pacote. Às vezes cobram preços abusivos na hora de pesar.",
                    "5. Correnteza: O mar de Natal (exceto onde tem arrecifes) é forte. Respeite as bandeiras vermelhas dos salva-vidas.",
                    "6. Insolação no Buggy: O vento engana e você não sente que está queimando. No fim do dia, vem a febre. Hidrate-se e cubra-se.",
                    "7. Falésias Instáveis: Na praia de Pipa e litoral sul, mantenha distância das falésias. Deslizamentos acontecem. Respeite as placas de perigo.",
                    "8. Táxi no Aeroporto: Os táxis comuns cobram tarifa de outra cidade (São Gonçalo). Uber ou Transfer compartilhado costumam ser mais baratos.",
                    "9. Lagosta Barata Demais: Na praia, desconfie de lagosta muito barata. Pode ser fora de época (congelada velha) ou nem ser lagosta.",
                    "10. Esquecer a CNH: Se for alugar carro para ir a Pipa, as blitze na estrada são frequentes (Lei Seca rigorosa)."
                ],

                // --- ROTEIROS AUTOMÁTICOS (NATAL) ---
                roteiros: {
                    "curto": {
                        titulo: "Roteiro Express (1 a 2 Dias)",
                        texto: [
                            "Dia 1 (O Clássico): Manhã: Passeio de Buggy Litoral Norte (Genipabu) 'com emoção'. Tarde: Visita ao Forte dos Reis Magos e pôr do sol no Potengi. Noite: Jantar em Ponta Negra.",
                            "Dia 2 (Litoral Sul): Manhã: Maior Cajueiro do Mundo e banho na Praia de Cotovelo. Tarde: Relaxe em Ponta Negra olhando o Morro do Careca. Noite: Ginga com Tapioca."
                        ]
                    },
                    "medio": {
                        titulo: "Roteiro Essencial (3 a 5 Dias)",
                        texto: [
                            "Dias 1 e 2: Siga o Roteiro Express acima.",
                            "Dia 3 (Caribe Potiguar): Bate-volta aos Parrachos de Maracajaú ou Perobas (depende da maré). Mergulho nos corais.",
                            "Dia 4 (Pipa): Passe o dia na Praia da Pipa. Veja os golfinhos na Baía dos Golfinhos e almoce na vila. (Se puder, durma lá).",
                            "Dia 5 (Relax e Compras): Manhã na Lagoa de Arituba ou Carcará. Tarde: Compras no Centro de Turismo (artesanato)."
                        ]
                    },
                    "longo": {
                        titulo: "Roteiro Completo (7+ Dias)",
                        texto: [
                            "Dias 1 a 5: Siga o Roteiro Essencial acima.",
                            "Dia 6 (Mergulho Profundo): Galinhos. É longe (170km), mas é um paraíso de salinas e dunas intocadas. Um dos lugares mais bonitos do estado.",
                            "Dia 7 (Cultura e História): Centro Histórico (Igrejas), Barreira do Inferno e Aquário Natal.",
                            "Dia 8 (Despedida): Repita sua praia favorita ou vá ao restaurante Camarões para o almoço de despedida."
                        ]
                    }
                },

                // SEUS LINKS DE AFILIADO
                links: {
                    hotel: "https://www.booking.com/searchresults.pt-br.html?city=-656860&aid=304142", 
                    passeio: "https://www.civitatis.com/br/natal/", 
                    seguro: "https://www.segurospromo.com.br" 
                }
            },
            {
                name: "Maceió",
                // FOTO: Ponta Verde ou Pajuçara (Wikimedia/Unsplash)
                imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Ponta_Verde_Lighthouse_landscape_-_Macei%C3%B3%2C_Brazil_%28edited%29.jpg/960px-Ponta_Verde_Lighthouse_landscape_-_Macei%C3%B3%2C_Brazil_%28edited%29.jpg",
                tags: ["Caribe Brasileiro", "Piscinas Naturais", "Praias"],
                mapa: "https://goo.gl/maps/maceio",
                clima: "Tropical Quente. A cor do mar é mais bonita entre Setembro e Março. Abril a Julho chove mais e a água pode turvar.",
                
                // TOP 10 PONTOS TURÍSTICOS
                pontos_turisticos: [
                    "1. Praia de Pajuçara: Onde saem as jangadas para as piscinas naturais. Água morna, sem ondas e feirinha de artesanato.",
                    "2. Ponta Verde: A orla mais bonita do Brasil. Tem o letreiro 'Eu Amo Maceió' e o Farol da Ponta Verde (dá para ir a pé na maré seca).",
                    "3. Praia do Gunga: Fica no município vizinho (Roteiro). Tem o famoso mirante de coqueiros sem fim e as falésias coloridas (passeio de buggy).",
                    "4. Praia do Francês: Em Marechal Deodoro. Um lado tem barreira de corais (piscina), o outro tem ondas fortes (surf).",
                    "5. Maragogi (Bate-volta): O 'Caribe Brasileiro' oficial. Fica a 2h de Maceió. O passeio às Galés (piscinas) é imperdível, mas só na maré baixa.",
                    "6. Ipioca (Hibiscus Beach Club): Uma praia deserta e paradisíaca com um clube de praia de luxo (day-use). Ideal para relaxar.",
                    "7. Barra de São Miguel: Praia protegida por arrecifes, parece uma lagoa gigante. Ótima para andar de lancha ou kayak.",
                    "8. Mirante de São Gonçalo: No centro da cidade, oferece uma vista panorâmica do porto e do mar.",
                    "9. Pavilhão do Artesanato: Na Pajuçara. O melhor lugar para comprar renda filé (típica) e lembrancinhas.",
                    "10. Catedral Metropolitana: No centro. Arquitetura neoclássica bonita, com vitrais e altares preservados."
                ],

                // TOP 10 GASTRONOMIA
                gastronomia: [
                    "1. Chiclete de Camarão: Prato inventado aqui (Restaurante Imperador dos Camarões). Camarão ao molho de queijos que 'estica' como chiclete.",
                    "2. Sururu: Um molusco (parece marisco) típico das lagoas de Alagoas. O caldinho de sururu com leite de coco é afrodisíaco (dizem).",
                    "3. Tapioca da Orla: As tapioqueiras de Maceió são patrimônio. A massa é fina e crocante. Recheio de carne de sol com queijo coalho é o clássico.",
                    "4. Carne de Sol com Nata: Muito comum no café da manhã ou almoço.",
                    "5. Bolo de Rolo (versão alagoana): Embora seja de PE, aqui é muito forte e servido com queijo do reino.",
                    "6. Peixada Alagoana: Cozido de peixe com legumes, ovos cozidos e pirão. Leve e saboroso.",
                    "7. Arroz de Polvo: O polvo do litoral alagoano é muito macio.",
                    "8. Cocada de Massagueira: Na volta do Francês, pare em Massagueira. É o maior pólo gastronômico de doces caseiros.",
                    "9. Passaporte: O 'cachorro-quente' de Maceió. Leva carne moída temperada, salsicha, queijo e maionese caseira. O 'Passaporte do Gaúcho' é famoso.",
                    "10. Suco de Mangaba ou Cajá: As frutas da estação são deliciosas."
                ],

                // TOP 10 CURIOSIDADES
                curiosidades: [
                    "1. A Orla Mais Bonita: A orla urbana de Maceió é considerada a mais bonita e bem cuidada do Brasil, com coqueiros e calçadão largo.",
                    "2. Ma-çay-ó: O nome vem do tupi e significa 'O que tapa o alagadiço', referindo-se aos rios e lagoas da região.",
                    "3. Paraíso das Águas: Alagoas tem a segunda maior barreira de corais do mundo (só perde para a Austrália e a barreira da Mesoamérica?), o que garante o mar calmo.",
                    "4. Marechal Deodoro: A primeira capital de Alagoas e terra onde nasceu o proclamador da República fica colada em Maceió.",
                    "5. Gogó da Ema: Um coqueiro torto lendário que parecia um pescoço de ema. Ele caiu, mas virou símbolo da cidade.",
                    "6. Renda Filé: Um tipo de bordado colorido e vazado que só existe em Alagoas. É Patrimônio Imaterial.",
                    "7. Zumbi dos Palmares: O maior quilombo das Américas (Quilombo dos Palmares) ficava em Alagoas, na Serra da Barriga.",
                    "8. Farol no Mar: O Farol da Ponta Verde fica literalmente dentro da água. Na maré baixa (0.0), você caminha até a base dele.",
                    "9. Braskem: Uma curiosidade triste. Bairros inteiros (Pinheiro/Mutange) afundaram devido à mineração de sal-gema e hoje são bairros fantasmas.",
                    "10. Caribe?: A cor da água (azul turquesa/verde esmeralda) se deve ao fundo de areia branca e calcário, igual ao Caribe."
                ],

                // TOP 10 CULTURA & RELIGIÃO
                religiao: [
                    "1. Iemanjá: A festa de 8 de Dezembro (N.S. da Conceição) e Iemanjá lota a orla de Pajuçara com oferendas.",
                    "2. Igreja de Nossa Senhora do Rosário dos Pretos: Construída no século 19 por irmandades negras.",
                    "3. Igreja dos Martírios: Tem uma fachada de azulejos portugueses belíssima no centro.",
                    "4. Guerreiro: Uma dança folclórica típica de Alagoas, colorida e cheia de fitas (mistura de Reisado com Caboclinho).",
                    "5. Mirante de São Gonçalo: Tem uma capela histórica lá em cima.",
                    "6. Artesanato do Pontal da Barra: O bairro onde as rendeiras ficam sentadas na porta de casa fazendo o Filé.",
                    "7. São João: Maceió tem um dos maiores festejos juninos do litoral.",
                    "8. Pastoral: A religiosidade católica é forte no interior e reflete na capital.",
                    "9. Xangô de Alagoas: O estado foi palco de uma perseguição histórica aos terreiros em 1912 (Quebra de Xangô), hoje lembrada com respeito e retomada.",
                    "10. Capelinha de Jaraguá: Uma igreja histórica no bairro boêmio de Jaraguá."
                ],

                // TOP 10 EVENTOS E ESTAÇÕES
                eventos_estacoes: [
                    "1. Verão (Dez-Mar): A água fica num azul neon inacreditável. Cidade cheia, preços altos.",
                    "2. Inverno (Abr-Ago): Chove bastante ('Inverno' no Nordeste é chuva). A água pode ficar 'barrenta' perto dos rios.",
                    "3. São João (Junho): Festas gigantes no bairro de Jaraguá e Benedito Bentes.",
                    "4. Maceió Fest: O carnaval fora de época (se ocorrer no ano).",
                    "5. Réveillon: As festas privadas de Réveillon (Mil Sorrisos, Celebration) são as maiores e mais caras do Brasil.",
                    "6. Festival do Bumba Meu Boi: Acontece anualmente celebrando a cultura popular.",
                    "7. Agosto: Mês das ventanias, bom para Kitesurf.",
                    "8. Setembro a Novembro: A melhor época 'Custo-Benefício'. Sol, mar azul e preços médios.",
                    "9. Maré Baixa (Lua Cheia/Nova): É quando os passeios para as piscinas (Pajuçara/Maragogi) valem a pena.",
                    "10. Feriados: A cidade lota de turistas regionais (PE, BA, SE)."
                ],

                // TOP 10 INFO GERAIS
                info_gerais: [
                    "1. Aeroporto (MCZ): Fica em Rio Largo, bem longe da orla (45-60 min). Uber custa uns R$ 70-90.",
                    "2. Tábua de Marés: É a bíblia de Maceió. Passeio de piscina natural na maré alta (acima de 0.6) é dinheiro jogado fora.",
                    "3. Uber: Funciona muito bem e é barato para circular entre as praias urbanas (Pajuçara-Ponta Verde-Jatiúca).",
                    "4. Segurança: A orla turística é bem policiada. Evite o centro à noite e bairros periféricos.",
                    "5. Voltagem: 220V.",
                    "6. Sol: Nasce às 5h e se põe às 17h30. Acorde cedo para aproveitar.",
                    "7. Algas (Sargaço): Em algumas épocas, a maré traz algas para a areia. Cheira forte, mas é natural.",
                    "8. Jangadas: O passeio de Pajuçara é tabelado e feito pela associação. Seguro e organizado.",
                    "9. Day-Use: Muitos beach clubs (Hibiscus, Lopana, Kanoa) cobram entrada ou consumação mínima alta.",
                    "10. Água da Torneira: Não beba. Compre mineral."
                ],

                // TOP 10 DICAS ANTES DE IR
                antes_de_ir: [
                    "1. Maragogi ou Milagres?: Maragogi é mais lotada e turística. São Miguel dos Milagres é mais rústica, vazia e chique. Escolha seu estilo.",
                    "2. Língua Suja: Após chuvas fortes, verifique a balneabilidade. Algumas 'línguas' (canais de drenagem) na orla podem sujar a praia urbana.",
                    "3. Caminho de Moisés: Em Maragogi (Barra Grande), na maré seca, abre um caminho de areia mar adentro. Cuidado para a maré não subir e te ilhar.",
                    "4. Francês: O lado esquerdo é piscina (família), o direito é surf (perigoso). Fique no esquerdo se não sabe nadar bem.",
                    "5. Cadeira de Praia: Na orla, se sentar, paga (ou consome). Pergunte o valor da cadeira ANTES de sentar.",
                    "6. Protetor Solar: O reflexo do sol na areia branca queima em dobro.",
                    "7. Bate-volta Maragogi: É cansativo (2h30 pra ir, 2h30 pra voltar). Se puder, durma lá 1 noite.",
                    "8. Domingo na Orla: A avenida da orla fecha para carros no domingo (Rua de Lazer). Ótimo para caminhar.",
                    "9. Restaurantes: Jatiúca é o bairro gastronômico. Ponta Verde é o bairro dos hotéis.",
                    "10. Cânions do São Francisco: Fica a 4h de Maceió (Piranhas/Xingó). É lindo, mas precisa de 2 dias (pernoite) para valer a pena."
                ],

                // --- NÚMEROS IMPORTANTES (MACEIÓ) ---
                numeros: [
                    "1. 190 (Polícia Militar): Emergência.",
                    "2. 192 (SAMU): Ambulância.",
                    "3. (82) 3315-3000 (Aeroporto Zumbi dos Palmares): Informações.",
                    "4. (82) 3312-5850 (Delegacia do Turista): Na orla de Pajuçara (ou perto).",
                    "5. 193 (Bombeiros): Resgate no mar.",
                    "6. (82) 3221-4615 (Rodoviária): Ônibus interestaduais.",
                    "7. (82) 3315-6700 (HGE - Hospital Geral): Emergência pública.",
                    "8. (82) 3336-2300 (Associação dos Jangadeiros): Pajuçara.",
                    "9. 199 (Defesa Civil): Chuvas.",
                    "10. SMTT (Trânsito): 118."
                ],

                // --- RISCOS E ERROS (MACEIÓ) ---
                riscos: [
                    "1. Maré Alta em Maragogi: O ERRO CLÁSSICO. Ir para Maragogi na maré alta ou lua 'morta'. A água não fica tão clara e não dá pé nas piscinas. Consulte a tábua!",
                    "2. 'Línguas Negras': Em dias de muita chuva, os canais de água pluvial podem levar sujeira para o mar das praias urbanas (Pajuçara/Ponta Verde). Evite tomar banho logo na saída desses canais.",
                    "3. Assédio de Vendedores: Na orla, a abordagem para vender passeio, óculos e comida é intensa. Diga 'não, obrigado' e não dê papo se não quiser comprar.",
                    "4. Ouriços: Nas piscinas naturais e recifes (Francês/Ipioca), cuidado onde pisa. Tem ouriços pretos que furam o pé. Use sapatilha aquática.",
                    "5. Bairro do Pinheiro: Evite alugar Airbnb nos bairros afetados pelo afundamento (Pinheiro, Mutange, Bom Parto). São áreas de risco interditadas.",
                    "6. Estrada para Maragogi: A AL-101 Norte é linda, mas tem trechos sinuosos e às vezes esburacados. Cuidado ao dirigir à noite.",
                    "7. Insolação: O vento constante faz você esquecer o sol. Use chapéu.",
                    "8. Golpe da Lagosta: Na praia, vendem 'lagosta' que na verdade é lagostim ou está estragada. Coma em restaurante.",
                    "9. Correnteza no Francês: O lado direito da Praia do Francês (o das ondas) tem correnteza forte. Não se arrisque se não for surfista.",
                    "10. Preço do Táxi: Táxi do aeroporto é tabelado e caro. Uber costuma ser metade do preço."
                ],

                // --- ROTEIROS AUTOMÁTICOS (MACEIÓ) ---
                roteiros: {
                    "curto": {
                        titulo: "Roteiro Express (1 a 2 Dias)",
                        texto: [
                            "Dia 1 (O Cartão Postal): Manhã: Passeio de Jangada em Pajuçara (na maré baixa!). Tarde: Caminhada na orla de Ponta Verde até o Farol. Foto no letreiro. Noite: Chiclete de Camarão.",
                            "Dia 2 (Litoral Sul): Dia de praia no Francês (lado esquerdo) ou Barra de São Miguel. Almoço em Massagueira na volta."
                        ]
                    },
                    "medio": {
                        titulo: "Roteiro Essencial (3 a 5 Dias)",
                        texto: [
                            "Dias 1 e 2: Siga o Roteiro Express acima.",
                            "Dia 3 (O Caribe): Bate-volta para Maragogi ou São Miguel dos Milagres (saia às 5h da manhã!). Passeio de lancha nas piscinas.",
                            "Dia 4 (Falésias): Praia do Gunga. Vá de buggy até as falésias coloridas e tome banho na lagoa.",
                            "Dia 5 (Relax VIP): Day-use no Hibiscus Beach Club em Ipioca ou Capitão Nikolas. Praia deserta e estrutura de luxo."
                        ]
                    },
                    "longo": {
                        titulo: "Roteiro Completo (7+ Dias)",
                        texto: [
                            "Dias 1 a 5: Siga o Roteiro Essencial acima.",
                            "Dia 6 (Sertão - Opcional): Bate-volta (cansativo) ou pernoite nos Cânions do Xingó (Rio São Francisco). Passeio de catamarã inesquecível.",
                            "Dia 7 (História e Renda): Visite o centro histórico de Marechal Deodoro e o bairro das rendeiras no Pontal da Barra.",
                            "Dia 8 (Despedida): Compre castanhas e bolo de rolo no Mercado e despeça-se do mar em Ponta Verde."
                        ]
                    }
                },

                // SEUS LINKS DE AFILIADO
                links: {
                    hotel: "https://www.booking.com/searchresults.pt-br.html?city=-653066&aid=304142", 
                    passeio: "https://www.civitatis.com/br/maceio/", 
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
                // --- NOVO: RISCOS E ERROS (BUENOS AIRES) ---
                riscos: [
                    "1. Câmbio no Aeroporto: O ERRO Nº 1. Nunca troque reais por pesos no Banco Nación do aeroporto. A cotação é a 'Oficial' e vale metade da 'Blue'. Use Western Union.",
                    "2. Golpe da Mancha (Mostarda): Se cair algo em você na rua e alguém vier limpar gentilmente, SEGURE sua mala e carteira. É um golpe clássico para te furtar enquanto você se limpa.",
                    "3. Notas Falsas em Táxis: Taxistas mal-intencionados trocam sua nota verdadeira por uma falsa na hora do pagamento e dizem que você pagou com nota falsa. Prefira Uber ou Cabify.",
                    "4. Motochorros: Evite usar celular na calçada perto do meio-fio. Ladrões de moto passam e arrancam o aparelho da mão, especialmente no Centro e Palermo.",
                    "5. Jantar às 19h: Argentino janta tarde (22h). Se chegar às 19h ou 20h, vai encontrar restaurantes fechados ou vazios. Ajuste seu relógio biológico.",
                    "6. Confundir Aeroportos: EZE (Ezeiza) fica a 1h do centro (caro). AEP (Aeroparque) fica dentro da cidade (barato). Verifique seu voo para não ir pro aeroporto errado.",
                    "7. Camisa de Time: A rivalidade Boca x River é religião. Evite camisas do River em La Boca e vice-versa. Em dias de clássico, o clima fica tenso perto dos estádios.",
                    "8. Tomada Diferente: O padrão argentino é de 3 pinos chatos (tipo I), diferente do Brasil. Seus eletrônicos não vão entrar na tomada sem adaptador.",
                    "9. Cartão SUBE: Não dá para pagar ônibus com dinheiro. Você precisa comprar e carregar o cartão SUBE em 'kioskos' (bancas), e às vezes é difícil achar cartão virgem para vender.",
                    "10. Protestos (Piquetes): O centro (perto do Obelisco e Casa Rosada) é palco frequente de manifestações que fecham o trânsito. Se tiver voo, saia com muita antecedência."
                ],
                // COLE O ROTEIRO ABAIXO:
                roteiros: {
                    "curto": {
                        titulo: "Roteiro Express (1 a 2 Dias)",
                        texto: [
                            "Dia 1 (O Ícone): Comece no Obelisco e Teatro Colón. Desça a Av. de Mayo até a Casa Rosada. Almoço no Café Tortoni (com fila) ou perto. Tarde: Puerto Madero (Ponte da Mulher).",
                            "Dia 2 (Contrastes): Manhã no Caminito (La Boca) - vá de táxi/Uber. Tarde: Cemitério da Recoleta e Floralis Genérica. Noite: Jantar com show de Tango."
                        ]
                    },
                    "medio": {
                        titulo: "Roteiro Essencial (3 a 5 Dias)",
                        texto: [
                            "Dias 1 e 2: Siga o Roteiro Express acima.",
                            "Dia 3 (Palermo): Dia de caminhar. Rosedal, Jardim Japonês e Planetário. Almoço e compras em Palermo Soho. Noite nos bares de Palermo Hollywood.",
                            "Dia 4 (Arte e Livros): Malba (Museu) pela manhã. Tarde na livraria El Ateneo Grand Splendid (a mais bonita do mundo). Fim de tarde nas Galerias Pacífico.",
                            "Dia 5 (San Telmo): Se for domingo, Feira de San Telmo (imperdível). Se não, visite o Mercado de San Telmo e a estátua da Mafalda."
                        ]
                    },
                    "longo": {
                        titulo: "Roteiro Completo (7+ Dias)",
                        texto: [
                            "Dias 1 a 5: Siga o Roteiro Essencial acima.",
                            "Dia 6 (Delta do Tigre): Pegue o trem na estação Retiro até Tigre. Faça o passeio de barco pelo Delta. É uma Veneza selvagem.",
                            "Dia 7 (Uruguai): Pegue o Buquebus cedo e atravesse o rio para Colonia del Sacramento (Uruguai). Passe o dia na cidade histórica e volte à noite.",
                            "Dia 8 (Despedida): Brunch chique em Puerto Madero e últimas compras de Alfajor e Vinho no supermercado."
                        ]
                    }
                },
                // SEUS LINKS DE AFILIADO
                links: {
                    hotel: "https://www.booking.com/searchresults.pt-br.html?ss=Buenos+Aires&aid=304142", 
                    passeio: "https://www.civitatis.com/br/buenos-aires/", 
                    seguro: "https://www.segurospromo.com.br" 
                }
            }
        ], // <--- VÍRGULA DEPOIS DO PAÍS ANTERIOR

        "Chile": [
            {
                name: "Santiago",
                // FOTO: Cordilheira dos Andes e Sky Costanera (Wikimedia)
                imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Santiago_en_invierno.jpg/960px-Santiago_en_invierno.jpg",
                tags: ["Neve", "Vinho", "Montanha"],
                mapa: "https://goo.gl/maps/santiago",
                clima: "Mediterrâneo. Verão seco e quente (30ºC). Inverno frio e chuvoso na cidade, com neve nas montanhas vizinhas.",
                
                // TOP 10 PONTOS TURÍSTICOS
                pontos_turisticos: [
                    "1. Sky Costanera: O prédio mais alto da América do Sul. A vista da Cordilheira dos Andes no pôr do sol é obrigatória.",
                    "2. Cerro San Cristóbal: Suba de funicular e desça de teleférico. Tem a estátua da Virgem e o melhor mirante natural.",
                    "3. Cajón del Maipo: Passeio de dia inteiro nas montanhas. O Embalse El Yeso é aquela represa azul turquesa famosa nas fotos.",
                    "4. Valle Nevado / Farellones: Mesmo se não esquiar, vale subir para brincar na neve (no inverno) ou ver a vista (verão).",
                    "5. Palácio de La Moneda: A sede do governo. A Troca de Guarda (dias alternados às 10h) é super tradicional.",
                    "6. Cerro Santa Lucía: Um parque lindo no meio do centro, com fontes e escadarias antigas. Foi onde a cidade foi fundada.",
                    "7. Vinícola Concha y Toro: A mais famosa (do Casillero del Diablo). É turística, mas o tour é muito bem organizado e bonito.",
                    "8. Museu da Memória: Conta a história da ditadura de Pinochet. Triste, mas essencial para entender o Chile moderno.",
                    "9. Bairro Lastarria: O bairro boêmio-chique, cheio de restaurantes, artistas de rua e arquitetura europeia.",
                    "10. Mercado Central: Famoso pela arquitetura e pelos restaurantes de frutos do mar (centolla). Cuidado, é pega-turista, mas vale a visita."
                ],

                // TOP 10 GASTRONOMIA
                gastronomia: [
                    "1. Centolla: O caranguejo gigante do Pacífico. É caro, mas uma experiência única. A carne é doce e macia.",
                    "2. Pastel de Choclo: Um 'escondidinho' de milho doce moído com recheio de carne, frango, ovo e azeitona. Agridoce e delicioso.",
                    "3. Empanada de Pino: A clássica. Massa assada recheada de carne picada, cebola, ovo e azeitona (cuidado com o caroço!).",
                    "4. Mote con Huesillo: A bebida de rua número 1. Suco de pêssego, com pêssego seco (huesillo) e trigo cozido (mote) no fundo.",
                    "5. Completo Italiano: O cachorro-quente chileno. Pão, salsicha, muito abacate (palta), tomate e maionese (cores da Itália).",
                    "6. Ceviche Chileno: Diferente do peruano, o peixe (reineta ou salmão) é servido fresco com muito limão e coentro.",
                    "7. Lomo a lo Pobre: Bife gigante com ovo frito, batata frita e cebola frita. Para quem tem muita fome.",
                    "8. Machas a la Parmesana: Moluscos (parecem mariscos) gratinados com muito queijo parmesão e vinho branco.",
                    "9. Pisco Sour: O drink nacional (há briga com o Peru). O chileno é mais doce e amadeirado.",
                    "10. Vinho Carménère: A uva que foi extinta na França e redescoberta no Chile. O vinho tinto ícone do país."
                ],

                // TOP 10 CURIOSIDADES
                curiosidades: [
                    "1. País Mais Longo: O Chile é o país mais 'comprido' do mundo. Tem deserto no norte e geleira no sul.",
                    "2. Abacate em Tudo: Eles chamam abacate de 'Palta' e colocam em tudo (pão, hot dog, salada, pizza, sushi). E é salgado!",
                    "3. Café com Pernas: No centro, existem cafeterias onde as atendentes usam vestidos curtos ou biquínis (Café con Piernas). É uma tradição polêmica.",
                    "4. Cães de Rua: Santiago tem muitos cachorros de rua (quiltros), mas eles são comunitários, gordos e, às vezes, usam roupinhas no inverno.",
                    "5. Cordilheira Bússola: O santiaguino não usa Norte/Sul. Ele se orienta pela Cordilheira (Leste). Se você vê a montanha, sabe onde está.",
                    "6. Pão (Marraqueta): O Chile é o segundo maior consumidor de pão do mundo (só perde para a Alemanha).",
                    "7. Água de Torneira: É potável, mas tem muito minério (dura). Pode soltar o intestino de quem não está acostumado.",
                    "8. Terremotos: O Chile é o país mais sísmico do mundo. Tremores pequenos são tão comuns que ninguém para de andar na rua.",
                    "9. Azeitona Traiçoeira: A azeitona na empanada SEMPRE vem com caroço. Cuidado para não quebrar o dente.",
                    "10. Espanhol Rápido: O espanhol chileno é o mais difícil de entender. Eles 'comem' o final das palavras e usam muitas gírias ('Cachai?')."
                ],

                // TOP 10 CULTURA & RELIGIÃO
                religiao: [
                    "1. Santuário Imaculada Conceição: A estátua no topo do Cerro San Cristóbal é o ícone religioso da cidade.",
                    "2. Templo Bahá'í: Um templo em forma de flor nas montanhas, aberto a todas as religiões. Arquitetura premiada e paz absoluta.",
                    "3. Catedral Metropolitana: Na Plaza de Armas. O interior é majestoso e cheio de história colonial.",
                    "4. Cruz de Maio: Tradição antiga onde se decora uma cruz com flores e velas.",
                    "5. Fiesta de La Tirana: A maior festa religiosa do país (no norte), mas influencia a cultura nacional com suas diabladas (danças).",
                    "6. Los Dominicos: Uma antiga igreja e convento que virou um centro de artesanato lindo (Pueblito Los Dominicos).",
                    "7. Padre Hurtado: O santo chileno mais popular, famoso pelo trabalho social. Suas caminhonetes verdes são ícones.",
                    "8. Cemitério Geral: Um museu a céu aberto com mausoléus de presidentes e arquitetura incrível.",
                    "9. Mapuches: A cultura indígena é forte. A bandeira Mapuche é vista em todo lugar junto com a do Chile.",
                    "10. Animita: Pequenos santuários nas estradas ou ruas onde alguém morreu tragicamente. As pessoas deixam velas e água."
                ],

                // TOP 10 EVENTOS E ESTAÇÕES
                eventos_estacoes: [
                    "1. Festas Pátrias (18 de Setembro): O 'Dieciocho'. O país para por uma semana. Churrasco, vinho, cueca (dança) e fondas (festas).",
                    "2. Temporada de Neve (Jun-Set): Quando os brasileiros invadem. Valle Nevado e Farellones ficam lotados.",
                    "3. Vindima (Março/Abril): Festas da colheita da uva nas vinícolas ao redor de Santiago. Tem pisada de uva e degustação.",
                    "4. Lollapalooza Chile (Março): Um dos maiores festivais de música da América do Sul, no Parque Cerrillos.",
                    "5. Outono (Abr-Mai): As árvores ficam vermelhas e a cidade fica linda. Clima frio, mas sem chuva extrema.",
                    "6. Primavera (Out-Dez): Clima perfeito. Nem quente, nem frio. Ótimo para caminhar nos parques.",
                    "7. Dia do Patrimônio (Maio): Prédios históricos fechados abrem as portas de graça. Filas enormes, mas vale a pena.",
                    "8. Santiago a Mil (Janeiro): Festival de teatro internacional que toma as ruas da cidade no verão.",
                    "9. Ano Novo na Torre Entel: O show de fogos tradicional no centro da cidade (embora a festa de Valparaíso seja maior).",
                    "10. Inverno (Jun-Ago): A poluição (smog) pode ficar presa na cidade e encobrir a cordilheira. Traga casaco pesado."
                ],

                // TOP 10 INFO GERAIS
                info_gerais: [
                    "1. Moeda: Peso Chileno (CLP). Atenção aos zeros! 1.000 pesos é pouco dinheiro (tipo uma gorjeta).",
                    "2. Visto: Não precisa. RG brasileiro (novo, menos de 10 anos) ou Passaporte.",
                    "3. Fuso Horário: -1h ou igual a Brasília (varia com horários de verão de ambos). O sol se põe tarde no verão (21h).",
                    "4. Tomada: Tipo L (três pinos em linha reta). A tomada brasileira de 3 pinos (hexagonal) NÃO ENTRA. Leve adaptador.",
                    "5. Metrô (Bip!): Moderno e limpo. Precisa comprar o cartão 'Bip!'. O preço muda conforme o horário (pico é mais caro).",
                    "6. Tax Free: Turistas que pagam hotel em Dólar (ou cartão internacional) ficam isentos do IVA (19%). Exija esse desconto no hotel.",
                    "7. Gorjeta (Propina): 10% é o padrão ('La propina'). O garçom pergunta: 'Desea agregar la propina?'. Diga 'Si'.",
                    "8. Uber: Funciona bem, mas ainda tem áreas cinzentas na lei. Sente na frente para parecer amigo do motorista.",
                    "9. Internet: Compre um chip (SIM Card) da Entel ou Movistar em quiosques. A cobertura é ótima.",
                    "10. Aeroporto: SCL (Arturo Merino Benítez). Fica longe do centro. Use transfer oficial (Transvip) ou ônibus (Centropuerto)."
                ],

                // TOP 10 DICAS ANTES DE IR
                antes_de_ir: [
                    "1. Câmbio: Não troque no Brasil (cotação péssima). Leve Reais e troque nas casas de câmbio da Rua Agustinas (Centro).",
                    "2. Roupas em Camadas: De manhã faz 10ºC, ao meio-dia 28ºC, à noite 12ºC. Vista-se como uma cebola.",
                    "3. Seguro Viagem: Não é obrigatório, mas saúde no Chile é caríssima (privada). Não arrisque.",
                    "4. Agende Vinícolas: Concha y Toro e Undurraga lotam. Reserve no site com semanas de antecedência.",
                    "5. PDI (Papelzinho): Na imigração, você ganha um papel da PDI. NÃO PERCA. Você precisa dele para sair do país e para não pagar imposto no hotel.",
                    "6. Protetor Labial: O ar é muito seco. Seus lábios vão rachar no primeiro dia se não usar manteiga de cacau.",
                    "7. Tênis de Trekking: Se for ao Cajón del Maipo ou Embalse, vá de tênis. É terra e pedra.",
                    "8. Vinho no Supermercado: Os vinhos no supermercado Jumbo ou Lider são ótimos e baratíssimos. Leve plástico bolha para trazer na mala.",
                    "9. Segunda-Feira: Museus fecham. Use a segunda para ir ao Costanera Center ou vinícolas.",
                    "10. Feriados Irrenunciáveis: Em datas como 1º de Maio e 18/19 de Setembro, TUDO fecha (até supermercado). Se planeje."
                ],

                // --- NOVO: NÚMEROS IMPORTANTES (SANTIAGO) ---
                numeros: [
                    "1. 133 (Carabineros): A Polícia chilena. São muito respeitados e não aceitam suborno jamais (tentar subornar dá cadeia).",
                    "2. 131 (Ambulância - SAMU): Emergência médica pública.",
                    "3. 132 (Bomberos): Incêndios e resgates. No Chile, os bombeiros são todos voluntários.",
                    "4. (+56) 2 2876 3400 (Consulado do Brasil): Fica na rua Los Militares, Las Condes.",
                    "5. 134 (PDI): Polícia de Investigações (para crimes civis e problemas de imigração).",
                    "6. (+56) 2 2690 1757 (Aeroporto SCL): Informações de voos.",
                    "7. 149 (Fono Familia): Ajuda para violência intrafamiliar e crianças.",
                    "8. (+56) 2 2247 3600 (Clínica Alemana): Um dos melhores hospitais privados (caro, use seguro).",
                    "9. 600 600 8686 (Turistiqueros): Informações turísticas oficiais.",
                    "10. 130 (Conaf): Para incêndios florestais (comum no verão)."
                ],

                // --- NOVO: RISCOS E ERROS (SANTIAGO) ---
                riscos: [
                    "1. Táxi no Aeroporto: O GOLPE Nº 1. Golpistas ficam no saguão fingindo ser oficiais. Eles cobram 10x mais ou trocam notas. Use SOMENTE os guichês oficiais (Transvip/Taxi Oficial) antes da porta de saída.",
                    "2. Notas Falsas de 10.000 e 20.000: Taxistas desonestos trocam sua nota verdadeira por uma falsa num passe de mágica e devolvem dizendo que você pagou com falsa. Pague com notas pequenas ou Uber.",
                    "3. Plaza Italia (Baquedano) na Sexta: Toda sexta à tarde costuma ter protestos. A região vira palco de gás lacrimogêneo e polícia. Evite se hospedar ou passar ali na sexta à noite.",
                    "4. Furto em Restaurante: Nunca pendure a bolsa na cadeira ou deixe o celular na mesa em terraços de Bellavista ou Lastarria. Passam vendendo coisas e levam o celular.",
                    "5. Câmbio na Rua: Na rua Agustinas, homens gritam 'Cambio, Cambio!'. Não troque com eles na calçada. Entre nas lojas oficiais (com vidro blindado). O risco de nota falsa na rua é alto.",
                    "6. Mal de Altitude (Puna): No Valle Nevado ou Cajón del Maipo (3.000m), você pode sentir tontura e enjoo. Beba muita água, ande devagar e não coma pesado.",
                    "7. Metrô em Horário de Pico: Às 18h, a estação Tobalaba é um inferno. Evite entrar com malas grandes nesse horário, você simplesmente não vai conseguir embarcar.",
                    "8. Terremotos: Se tremer, NÃO CORRA. Fique calmo, afaste-se de vidros. A estrutura do Chile é preparada. O chileno nem levanta da cadeira se for menos de 6.0.",
                    "9. 'Lanzazos': Roubo por surpresa. Alguém passa correndo e puxa o celular ou correntinha. Comum no centro (Ahumada) e perto do Mercado Central.",
                    "10. Comprar Eletrônicos na Rua: Se te oferecerem iPhone barato na rua, é tijolo na caixa ou produto roubado bloqueado. Não caia na tentação."
                ],
                // COLE O ROTEIRO ABAIXO:
                roteiros: {
                    "curto": {
                        titulo: "Roteiro Express (1 a 2 Dias)",
                        texto: [
                            "Dia 1 (Centro Histórico): Plaza de Armas, La Moneda (troca da guarda) e Cerro Santa Lucía. Almoço no Mercado Central (Centolla). Fim de tarde: Cerro San Cristóbal (funicular) para ver a cidade de cima.",
                            "Dia 2 (Modernidade): Sky Costanera (o prédio mais alto da América do Sul). Passeio pelo Parque Bicentenário. Jantar no Pátio Bellavista."
                        ]
                    },
                    "medio": {
                        titulo: "Roteiro Essencial (3 a 5 Dias)",
                        texto: [
                            "Dias 1 e 2: Siga o Roteiro Express acima.",
                            "Dia 3 (Vinho): Tour em vinícola. A Concha y Toro é a clássica (turística), mas a Undurraga ou Santa Rita são excelentes e menos lotadas. Tarde livre.",
                            "Dia 4 (Neve ou Montanha): Bate-volta para Cajón del Maipo (Embalse el Yeso) para ver a paisagem de filme. Imperdível.",
                            "Dia 5 (Litoral): Bate-volta para Valparaíso (arte de rua e casas coloridas) e Viña del Mar (Relógio de Flores e praia)."
                        ]
                    },
                    "longo": {
                        titulo: "Roteiro Completo (7+ Dias)",
                        texto: [
                            "Dias 1 a 5: Siga o Roteiro Essencial acima.",
                            "Dia 6 (Cordilheira): Valle Nevado e Farellones. No inverno, para esquiar. No verão, apenas para ver a vista e o pôr do sol nos Andes.",
                            "Dia 7 (Lagoa Mística): Bate-volta para Portillo (Laguna del Inca). É longe, mas a lagoa no meio da neve é surreal.",
                            "Dia 8 (Compras e Relax): Compras no Parque Arauco (shopping aberto) e jantar de despedida no bairro Lastarria."
                        ]
                    }
                },
                // SEUS LINKS DE AFILIADO
                links: {
                    hotel: "https://www.booking.com/searchresults.pt-br.html?ss=Santiago&aid=304142", 
                    passeio: "https://www.civitatis.com/br/santiago-chile/", 
                    seguro: "https://www.segurospromo.com.br" 
                }
            }
        ]
        
        
        
    },
    "América Central": {
        "República Dominicana": [
            {
                name: "Punta Cana",
                // FOTO: Praia de Bavaro ou Ilha Saona
                imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Playa_Bavaro.JPG/960px-Playa_Bavaro.JPG",
                tags: ["All Inclusive", "Caribe", "Lua de Mel"],
                mapa: "https://goo.gl/maps/puntacana",
                clima: "Tropical Úmido. Calor o ano todo (28ºC-30ºC). Agosto a Outubro é época de furacões (risco baixo, mas existe) e sargaço (algas).",
                
                // TOP 10 PONTOS TURÍSTICOS
                pontos_turisticos: [
                    "1. Isla Saona: O passeio nº 1. Uma ilha virgem de areia branca e água turquesa. Onde foi gravado 'A Lagoa Azul'. Inclui parada nas piscinas naturais com estrelas do mar.",
                    "2. Praia de Bávaro: A principal praia onde ficam a maioria dos resorts. Mar calmo, coqueiros e areia fofa.",
                    "3. Hoyo Azul (Scape Park): Um cenote (piscina natural em caverna) com água azul neon inacreditável. Fica dentro do Scape Park.",
                    "4. Coco Bongo: Não é só uma balada, é um show estilo Broadway/Las Vegas com open bar. Imperdível para quem gosta de festa.",
                    "5. Parasailing: Voar de paraquedas puxado por uma lancha. A vista lá de cima é surreal.",
                    "6. Ojos Indígenas: Reserva ecológica com 12 lagoas de água doce cristalina para nadar no meio da floresta.",
                    "7. Isla Catalina: Menos lotada que Saona, ótima para snorkeling e mergulho (muitos peixes e corais).",
                    "8. Montaña Redonda: Uma montanha com balanços gigantes na beira do abismo. As fotos ficam incríveis (parece que você está voando).",
                    "9. Dolphin Explorer: Nadar com golfinhos no mar (não em tanque). É uma experiência muito procurada.",
                    "10. Altos de Chavón: Uma réplica de vila medieval italiana construída no alto de um penhasco. Tem um anfiteatro romano e vista pro Rio Chavón."
                ],

                // TOP 10 GASTRONOMIA
                gastronomia: [
                    "1. Mofongo: O prato nacional. Purê de banana da terra frita com alho e torresmo (chicharrón), servido com carne ou camarão.",
                    "2. Mamajuana: A bebida típica 'medicinal' e afrodisíaca. Rum, vinho tinto, mel e raízes curtidas em garrafa.",
                    "3. Sancocho: Uma sopa/cozido potente com 7 tipos de carne e tubérculos. Cura qualquer ressaca.",
                    "4. Lagosta Caribenha: Mais barata que no Brasil. Nos passeios (como Saona), costuma ser servida grelhada na praia.",
                    "5. Pescado Frito: Peixe inteiro frito (estilo Boca Chica), servido com 'tostones' (banana frita).",
                    "6. Tostones: Rodelas de banana verde frita e amassada. Substitui a batata frita em tudo.",
                    "7. Rum Dominicano: Brugal e Barceló são as marcas locais. O rum é suave e barato.",
                    "8. Chocolate Dominicano: O país é um grande produtor de cacau orgânico. O chocolate é excelente.",
                    "9. Bandera Dominicana: O prato do dia a dia: Arroz, feijão vermelho, carne ensopada e salada.",
                    "10. Habichuelas con Dulce: Um creme doce de feijão (sim, feijão doce!) com leite de coco e especiarias. Sobremesa curiosa."
                ],

                // TOP 10 CURIOSIDADES
                curiosidades: [
                    "1. Aeroporto de Palha: O aeroporto de Punta Cana (PUJ) é o primeiro do mundo privado e internacional com teto de folhas de palmeira e aberto (sem paredes de vidro no check-in).",
                    "2. Não é a Capital: Muita gente acha que é, mas a capital é Santo Domingo (a 2h30 de carro). Punta Cana é só uma região turística.",
                    "3. Cristóvão Colombo: A ilha (Hispaniola) foi onde Colombo desembarcou pela primeira vez nas Américas. Seus restos mortais (supostamente) estão em Santo Domingo.",
                    "4. Larimar: Uma pedra preciosa azul-celeste que SÓ existe na República Dominicana. É o souvenir mais chique.",
                    "5. Merengue e Bachata: Ritmos nascidos aqui. Você vai ouvir 24h por dia no resort e na rua.",
                    "6. Baleias Jubarte: De janeiro a março, elas vêm para a Baía de Samaná (norte) para ter filhotes. Passeio incrível.",
                    "7. All-Inclusive: O conceito é levado a sério. Punta Cana tem a maior concentração de resorts all-inclusive do Caribe.",
                    "8. Jurassic Park: Cenas do filme foram gravadas aqui (perto do Museu do Âmbar).",
                    "9. Beisebol: É a religião deles, não o futebol. Eles exportam muitos jogadores para a liga americana (MLB).",
                    "10. Casamentos: É um dos principais destinos de 'Destination Wedding' do mundo."
                ],

                // TOP 10 CULTURA & RELIGIÃO
                religiao: [
                    "1. Basílica de Higüey: A padroeira é a Virgem de Altagracia. A catedral moderna de concreto é um marco arquitetônico.",
                    "2. Primeira Catedral das Américas: Fica em Santo Domingo (Catedral Primada). Construída em 1514.",
                    "3. Sincretismo: Assim como no Brasil, há mistura de catolicismo com crenças africanas (Vodu Dominicano, mas é tabu falar sobre isso).",
                    "4. Carnaval Dominicano: Acontece em fevereiro. Os 'Diablos Cojuelos' são mascarados que batem nas pessoas com bexigas de boi (para dar sorte!).",
                    "5. Charutos: A cultura do tabaco é forte. Visitar uma fábrica de charutos (Don Lucas) é um passeio cultural comum.",
                    "6. Museu do Âmbar: Explica a formação da resina fossilizada (famosa no Jurassic Park).",
                    "7. Tainos: O povo indígena original. Há cavernas com pinturas rupestres tainas no Parque Nacional del Este.",
                    "8. Hospitalidade: O dominicano é extremamente sorridente, dançarino e gosta de agradar (às vezes esperando propina).",
                    "9. Santo Domingo Colonial: A Zona Colonial é Patrimônio da UNESCO, com as primeiras ruas, hospitais e universidades do Novo Mundo.",
                    "10. Bíblia na Bandeira: É o único país do mundo que tem uma Bíblia aberta no brasão da bandeira."
                ],

                // TOP 10 EVENTOS E ESTAÇÕES
                eventos_estacoes: [
                    "1. Alta Temporada (Dez-Abr): Clima perfeito, seco e menos quente. Preços lá em cima (Americanos e Europeus fugindo do inverno).",
                    "2. Temporada de Furacões (Ago-Out): O risco existe. Monitore a previsão. É a época mais barata.",
                    "3. Sargaço (Mai-Set): As algas podem invadir as praias. Os resorts limpam, mas é um fenômeno natural imprevisível.",
                    "4. Carnaval (Fevereiro): Desfiles coloridos em todo o país.",
                    "5. Spring Break (Março): Jovens americanos lotam os hotéis festeiros (como o Hard Rock). Se quer paz, evite essa época.",
                    "6. Festival de Merengue (Julho): Música ao vivo em Santo Domingo.",
                    "7. Baleias (Jan-Mar): Única época para ver as Jubarte em Samaná.",
                    "8. Torneio de Golfe (Corales): Acontece no campo do Puntacana Resort, atrai a elite do esporte.",
                    "9. Black Friday: Os shoppings (BlueMall) fazem promoções reais.",
                    "10. Natal: Os resorts fazem ceias gigantescas e decorações lindas."
                ],

                // TOP 10 INFO GERAIS
                info_gerais: [
                    "1. Visto: Brasileiros não precisam. Paga-se uma 'tarjeta de turista' (usualmente inclusa na passagem) ou taxa de entrada (E-Ticket).",
                    "2. E-Ticket: OBRIGATÓRIO preencher o formulário de entrada e saída online antes de embarcar. Gera um QR Code.",
                    "3. Moeda: Peso Dominicano (DOP), mas Dólar Americano (USD) é aceito em TUDO. Leve Dólares trocados para gorjetas.",
                    "4. Tomada: Tipo A (dois pinos chatos, igual EUA/Japão). Leve adaptador.",
                    "5. Água: NUNCA beba da torneira. Nem para escovar os dentes se tiver estômago sensível. Use água mineral engarrafada.",
                    "6. Idioma: Espanhol. Nos resorts, falam inglês e 'portunhol'.",
                    "7. Transporte: Não existe transporte público bom. Use táxi (caro e sem taxímetro - combine antes) ou transfer privado.",
                    "8. Internet: O Wi-Fi dos resorts costuma ser bom. Fora deles, compre um chip local (Claro/Altice) ou use roaming.",
                    "9. Gorjeta (Propina): É cultural. Dê 1-2 dólares para o camareiro, barman, maleteiro. O serviço melhora magicamente.",
                    "10. Segurança: Dentro dos resorts é 100% seguro. Fora, cuidado com furtos, mas é mais seguro que capitais brasileiras."
                ],

                // TOP 10 DICAS ANTES DE IR
                antes_de_ir: [
                    "1. Protetor Solar Biodegradável: Em passeios como Cenotes e Ilha Saona, exigem para não matar os corais e peixes.",
                    "2. Remédio para Estômago: A mudança de tempero e água pode causar desarranjo. Leve seu kit farmácia.",
                    "3. Escolha o Resort Certo: Tem resort 'Adults Only' (silêncio/lua de mel) e resort 'Family' (criança gritando). Pesquise o perfil antes.",
                    "4. Não toque nas Estrelas: Em Saona, NÃO tire as estrelas do mar da água para foto. Elas morrem em segundos (sufocadas). Multa pesada.",
                    "5. Barganhe: Nas lojinhas de praia, o primeiro preço é sempre o triplo ('preço de gringo'). Negocie.",
                    "6. Hard Rock ou Barceló?: Hard Rock é gigante e tem pouca praia (mar bravo). Barceló tem praia melhor. Riu tem festa.",
                    "7. Transfer: Contrate o transfer Aeroporto-Hotel do Brasil. Chegar lá e negociar táxi sai mais caro.",
                    "8. Vestuário Jantar: Alguns restaurantes à la carte nos resorts exigem calça comprida para homens no jantar.",
                    "9. Repelente: Tem mosquito, principalmente ao amanhecer e anoitecer.",
                    "10. Sargaço: Entre em grupos de Facebook/TripAdvisor recentes para ver como está a situação das algas na semana da sua viagem."
                ],

                // --- NÚMEROS IMPORTANTES (PUNTA CANA) ---
                numeros: [
                    "1. 911: Emergência Geral (Polícia, Bombeiros, Ambulância).",
                    "2. +1 809-552-1670 (Polícia Turística - CESTUR): Eles ficam nas praias e áreas turísticas.",
                    "3. +1 809-959-2376 (Centro Médico Punta Cana): Hospital privado bom.",
                    "4. +1 809-686-3029 (Hospiten Bávaro): Outro hospital de referência.",
                    "5. +1 809-532-4200 (Consulado do Brasil): Fica em Santo Domingo.",
                    "6. +1 809-959-2424 (Aeroporto PUJ): Informações de voos.",
                    "7. +1 829-200-3136 (Assistência ao Turista): Ministério do Turismo.",
                    "8. Taxis Berón (Sindicato): +1 809-466-1133.",
                    "9. Farmácias (Farmaconal): Tem várias em Bávaro.",
                    "10. Uber: Funciona em algumas áreas, mas os taxistas locais brigam muito (risco de confusão). Evite em hotéis se puder."
                ],

                // --- RISCOS E ERROS (PUNTA CANA) ---
                riscos: [
                    "1. Time-Sharing (Clube de Férias): O ERRO Nº 1. Vendedores dentro do resort te oferecem 'café da manhã VIP' ou 'brinde'. É uma palestra de 4 horas para te vender cota de hotel. Fuja!",
                    "2. Beber Água da Torneira: A água não é potável. O gelo dos resorts é feito com água purificada, mas da torneira do quarto não beba jamais.",
                    "3. Táxi sem Preço Combinado: Não existe taxímetro. Se você entrar sem combinar, na chegada vão cobrar 50 dólares por 5km.",
                    "4. Comprar Charuto na Praia: É falsificado. Folha de bananeira pintada. Compre em lojas oficiais (Don Lucas) ou duty free.",
                    "5. Mamajuana de Plástico: Não compre as garrafas caseiras vendidas no sol da praia. A higiene é duvidosa. Compre as lacradas.",
                    "6. Passeio Pirata: Comprar passeio de gente aleatória na areia. O barato sai caro (barco velho, comida ruim, sem seguro). Compre no hotel ou agência.",
                    "7. Sol do Caribe: O sol é muito mais forte que no sul do Brasil. Insolação no primeiro dia estraga a viagem toda.",
                    "8. Dirigir lá: O trânsito dominicano é caótico e perigoso. Alugar carro não é recomendado (a não ser que seja muito aventureiro).",
                    "9. Droga na Balada: Oferta de drogas em baladas é comum. As leis são severíssimas e a cadeia dominicana é um inferno. Não arrisque.",
                    "10. Passaporte Vencendo: Precisa ter validade de 6 meses além da data da viagem. Se vencer antes, você não embarca."
                ],

                // --- ROTEIROS AUTOMÁTICOS (PUNTA CANA) ---
                roteiros: {
                    "curto": {
                        titulo: "Roteiro Relax (1 a 2 Dias)",
                        texto: [
                            "Dia 1 (Resort Life): Aproveite a estrutura do All-Inclusive. Piscina, praia em frente ao hotel e jantar em um restaurante temático (reserve na chegada).",
                            "Dia 2 (Obrigatório): Passeio de dia inteiro para Isla Saona. Catamarã na ida (festa) e lancha na volta. Piscinas naturais e almoço na ilha."
                        ]
                    },
                    "medio": {
                        titulo: "Roteiro Essencial (3 a 5 Dias)",
                        texto: [
                            "Dias 1 e 2: Siga o Roteiro Relax acima.",
                            "Dia 3 (Aventura): Scape Park (Hoyo Azul). Nade no cenote azul e faça as tirolesas. Tarde no resort.",
                            "Dia 4 (Vida Marinha): Dolphin Explorer ou Marinarium (nadar com tubarões lixa e raias). Noite: Coco Bongo.",
                            "Dia 5 (Cultura ou Lama): Passeio de Buggy na lama (macacão velho!) visitando a praia de Macao e caverna Taina OU Santo Domingo (histórico)."
                        ]
                    },
                    "longo": {
                        titulo: "Roteiro Completo (7+ Dias)",
                        texto: [
                            "Dias 1 a 5: Siga o Roteiro Essencial acima.",
                            "Dia 6 (Outra Ilha): Isla Catalina ou Isla Saona VIP (Canto de la Playa - parte mais exclusiva).",
                            "Dia 7 (Natureza): Ojos Indígenas ou Montaña Redonda (fotos nos balanços).",
                            "Dia 8 (Luxo): Almoço no restaurante Bachata Rosa (do cantor Juan Luis Guerra) ou dia de Spa no resort."
                        ]
                    }
                },

                // SEUS LINKS DE AFILIADO
                links: {
                    hotel: "https://www.booking.com/searchresults.pt-br.html?city=-3364964&aid=304142", 
                    passeio: "https://www.civitatis.com/br/punta-cana/", 
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
                // --- NOVO: RISCOS E ERROS (ORLANDO) ---
                riscos: [
                    "1. A Armadilha do Timeshare: Se alguém te oferecer 'ingressos grátis' ou 'café da manhã VIP' em troca de uma palestra de 90 min, FUJA. É venda agressiva de cota de hotel que dura horas e estraga seu dia.",
                    "2. Pedágios (SunPass): Não pague pedágio com dinheiro ('Cash') ou fure sem pagar. A multa da locadora é astronômica. Já alugue o carro com o 'SunPass' ou 'Toll Pass' ativado.",
                    "3. Sapatos Novos: O maior erro do iniciante. Você vai andar 15km por dia. Não estreie tênis novo nos parques, use aquele velho e macio, ou seus pés ficarão em carne viva.",
                    "4. Hospital Custa uma Fortuna: Uma perna quebrada ou apendicite sem seguro saúde nos EUA pode custar US$ 50.000. Nunca pise nos EUA sem seguro viagem com cobertura alta.",
                    "5. Gorjeta (Tip) é Obrigatória: Não é opcional como no Brasil. Se você não deixar 18% a 20% no restaurante, o garçom vai te cobrar. É o salário deles.",
                    "6. Eletrônicos na International Drive: Evite lojinhas genéricas de eletrônicos e perfumes na I-Drive. Muitas vendem produtos recondicionados ou falsificados como novos.",
                    "7. Transporte do Hotel: Não confie cegamente no 'transporte grátis' do hotel para a Disney. Eles têm horários ruins e se você perder o último, o Uber sai caro. Alugar carro é liberdade.",
                    "8. Calor e Desidratação: A umidade da Flórida é brutal. Beba água grátis (pede 'Ice Water' nos balcões) o tempo todo. Desmaios por calor são comuns nas filas.",
                    "9. Furacões: Entre agosto e outubro é temporada de furacões. É raro fechar parque, mas chuvas torrenciais são diárias. Compre capas de chuva no Walmart (US$ 2) antes de entrar no parque (lá dentro custa US$ 15).",
                    "10. Jantar no Magic Kingdom: A comida dentro do Magic Kingdom é cara e 'ok'. Se quiser comer bem, saia e vá para Disney Springs ou hotéis próximos, ou leve lanches na mochila (é permitido)."
                ],
                // --- NOVO: ROTEIRO AUTOMÁTICO (ORLANDO) ---
                roteiros: {
                    "curto": {
                        titulo: "Roteiro Express (1 a 2 Dias)",
                        texto: [
                            "Dia 1 (A Magia): Magic Kingdom. Chegue no Rope Drop (abertura). Foque nas clássicas (Piratas, Mansão Assombrada) e montanhas-russas (Tron, Seven Dwarfs). Fique para os fogos.",
                            "Dia 2 (Aventura): Islands of Adventure (Universal). É onde está Harry Potter (Hogsmeade) e Jurassic Park. Imperdível para jovens e adultos."
                        ]
                    },
                    "medio": {
                        titulo: "Roteiro Essencial (3 a 5 Dias)",
                        texto: [
                            "Dia 1: Magic Kingdom (Disney).",
                            "Dia 2: Hollywood Studios (Star Wars e Toy Story) + Disney Springs à noite.",
                            "Dia 3: Islands of Adventure (Universal).",
                            "Dia 4: Universal Studios (Beco Diagonal). Jante no CityWalk.",
                            "Dia 5: Compras (Outlet Premium) pela manhã e Epcot à tarde/noite (para jantar nos países e ver o show noturno)."
                        ]
                    },
                    "longo": {
                        titulo: "Roteiro Completo (7+ Dias)",
                        texto: [
                            "Dias 1 a 5: Siga o Roteiro Essencial acima.",
                            "Dia 6 (Natureza): Animal Kingdom. Chegue cedo para o safari e Avatar (Flight of Passage).",
                            "Dia 7 (Descanso ou Água): Volcano Bay (Parque Aquático) ou dia livre para Walmart/Target/Ross.",
                            "Dia 8 (SeaWorld ou NASA): Escolha entre montanhas-russas no SeaWorld ou visita ao Kennedy Space Center (foguetes).",
                            "Dia 9 (Despedida): Café da manhã com personagens e últimas compras no Florida Mall (tem Apple e loja da M&Ms)."
                        ]
                    }
                },
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
                // --- NOVO: RISCOS E ERROS (MIAMI) ---
                riscos: [
                    "1. Gorjeta Já Incluída (Auto-Gratuity): Em South Beach, quase todos os restaurantes já incluem 18% ou 20% na conta ('Service Charge'). Verifique antes de pagar para não dar gorjeta em dobro sem querer.",
                    "2. Drinks Gigantes na Ocean Drive: Cuidado com as promoções de margaritas gigantes. Eles muitas vezes não mostram o preço no cardápio e a conta vem US$ 50 ou US$ 80 por um drink.",
                    "3. Estacionamento e Guincho: Estacionar em local proibido em Miami Beach é guincho na hora (Towing). E custa mais de US$ 200 para retirar. Leia as placas com atenção redobrada.",
                    "4. Resort Fee: Ao reservar hotel, verifique a 'Resort Fee'. É uma taxa extra obrigatória (US$ 30 a US$ 50 por dia) cobrada no check-in que não aparece no preço inicial do Booking/Expedia.",
                    "5. Bairros Perigosos no GPS: Se o Waze mandar cortar caminho por Overtown ou Liberty City (especialmente à noite), evite. São áreas com índices de criminalidade mais altos.",
                    "6. Pedágios (SunPass): Assim como Orlando, Miami não aceita dinheiro nos pedágios. Se o carro alugado não tiver o SunPass ativado, a multa administrativa da locadora será cara.",
                    "7. Trânsito na I-95: O trânsito de Miami é agressivo e engarrafado. Não subestime o tempo para chegar ao aeroporto (MIA). Um trajeto de 20 min pode virar 1h na hora do rush.",
                    "8. Golpe do Valet: Em áreas badaladas, pergunte o preço do Valet ANTES de entregar a chave. Alguns cobram US$ 40 ou US$ 50 por poucas horas em eventos ou finais de semana.",
                    "9. Furacões (Agosto-Outubro): É a alta temporada de tempestades. Fique atento aos alertas do 'National Hurricane Center'. Se houver ordem de evacuação, obedeça imediatamente.",
                    "10. Seguro de Carro: A Flórida tem um dos maiores índices de acidentes dos EUA. Não economize no seguro do carro alugado (CDW/LDW e Terceiros). Bater sem seguro é falência decretada."
                ],
                // COLE O ROTEIRO ABAIXO:
                roteiros: {
                    "curto": {
                        titulo: "Roteiro Express (1 a 2 Dias)",
                        texto: [
                            "Dia 1 (South Beach): Manhã na praia (Lummus Park). Almoço na Ocean Drive (Art Deco). Tarde: Lincoln Road (compras a céu aberto). Pôr do sol no South Pointe Park.",
                            "Dia 2 (Arte e Luxo): Manhã em Wynwood Walls (grafites). Almoço no Design District (arquitetura). Noite: Bayside Marketplace (vista do porto)."
                        ]
                    },
                    "medio": {
                        titulo: "Roteiro Essencial (3 a 5 Dias)",
                        texto: [
                            "Dias 1 e 2: Siga o Roteiro Express acima.",
                            "Dia 3 (Compras Pesadas): Dia dedicado ao Sawgrass Mills (maior outlet) ou Aventura Mall. Prepare as malas e a paciência.",
                            "Dia 4 (Cultura e Charme): Manhã no Vizcaya Museum (mansão europeia). Tarde em Little Havana (Calle Ocho) para café cubano e charutos.",
                            "Dia 5 (Lado Moderno): Brickell City Centre. Almoço no Casa Tua ou Komodo. Caminhada pelo Riverwalk."
                        ]
                    },
                    "longo": {
                        titulo: "Roteiro Completo (7+ Dias)",
                        texto: [
                            "Dias 1 a 5: Siga o Roteiro Essencial acima.",
                            "Dia 6 (Caribe Americano): Bate-volta (longo) até Key West. A estrada sobre o mar é a mais bonita dos EUA. Pôr do sol na Mallory Square.",
                            "Dia 7 (Natureza Selvagem): Everglades. Passeio de Airboat para ver jacarés no pântano.",
                            "Dia 8 (Relax Total): Dia de praia em Key Biscayne (Bill Baggs Park) ou Haulover Beach (se quiser uma vibe mais livre)."
                        ]
                    }
                },
                // SEUS LINKS DE AFILIADO
                links: {
                    hotel: "https://www.booking.com/searchresults.pt-br.html?ss=Miami&aid=304142", 
                    passeio: "https://www.civitatis.com/br/miami/", 
                    seguro: "https://www.segurospromo.com.br" 
                }
            },
            {
                name: "Nova York",
                // FOTO: Estátua da Liberdade e Skyline (Wikimedia)
                imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Liberty02.jpg/500px-Liberty02.jpg",
                tags: ["Metrópole", "Compras", "Cultura"],
                mapa: "https://goo.gl/maps/novayork",
                clima: "Temperado. Verão muito quente e úmido (sauna). Inverno com neve e vento cortante. Outono é perfeito.",
                
                // TOP 10 PONTOS TURÍSTICOS
                pontos_turisticos: [
                    "1. Estátua da Liberdade: O ícone. Pegue o ferry para a ilha ou o ferry gratuito de Staten Island para ver de longe.",
                    "2. Central Park: O pulmão da cidade. Visite o Strawberry Fields (John Lennon) e o terraço Bethesda.",
                    "3. Times Square: O cruzamento do mundo. Luzes, outdoors gigantes e multidão. Vá à noite para o impacto real.",
                    "4. Empire State Building: O clássico. A vista do 86º andar é inesquecível (King Kong!).",
                    "5. Ponte do Brooklyn: Atravesse a pé saindo de Manhattan ao pôr do sol. A vista do skyline é mágica.",
                    "6. Memorial e Museu do 11 de Setembro: Onde ficavam as Torres Gêmeas. É emocionante, silencioso e respeitoso.",
                    "7. MoMA (Museu de Arte Moderna): Casa de 'A Noite Estrelada' de Van Gogh e obras de Picasso/Warhol.",
                    "8. Broadway: Assistir a um musical (O Rei Leão, Hamilton, Wicked) é uma experiência de vida.",
                    "9. Grand Central Terminal: Não é só uma estação de trem, é uma obra de arte. Olhe para o teto pintado com constelações.",
                    "10. High Line: Um parque suspenso construído sobre uma antiga linha de trem industrial. Ótimo para caminhar."
                ],

                // TOP 10 GASTRONOMIA
                gastronomia: [
                    "1. Pizza de $1: A famosa 'slice' (fatia) de queijo, fina e dobrável. A Joe's Pizza é a mais famosa (mas custa mais de $1 hoje).",
                    "2. Bagel com Cream Cheese: O café da manhã oficial. O pão é cozido antes de assar, por isso é denso e delicioso.",
                    "3. Cheesecake: O estilo New York é denso, cremoso e assado. O da Junior's é lendário.",
                    "4. Hot Dog de Rua: Os carrinhos 'Sabrett' estão em toda esquina. É simples: pão, salsicha e mostarda.",
                    "5. Pastrami on Rye: Sanduíche gigante de carne curada no Katz's Delicatessen (cenário de filmes).",
                    "6. Hambúrguer (Shake Shack): Nasceu no Madison Square Park e virou febre. O ShackBurger é obrigatório.",
                    "7. Cookies do Levain: Famosos por serem gigantes, crocantes por fora e quase crus (gooey) por dentro.",
                    "8. Brunch de Domingo: Ovos Benedict e Mimosas. É uma instituição social em bairros como West Village.",
                    "9. Halal Guys: O prato de rua mais famoso (frango e arroz com 'white sauce'). A fila na 53rd com a 6th Ave é enorme.",
                    "10. Cupcake (Magnolia Bakery): Ficou famoso por Sex and the City. Doce, colorido e fotogênico."
                ],

                // TOP 10 CURIOSIDADES
                curiosidades: [
                    "1. Ouro no Subsolo: O Federal Reserve de NY guarda mais barras de ouro no subsolo do que o Fort Knox.",
                    "2. Línguas: Mais de 800 línguas são faladas em NY, tornando-a a cidade linguisticamente mais diversa do mundo.",
                    "3. Pizza e Água: Dizem que a pizza e o bagel são bons por causa da qualidade da água da torneira de NY.",
                    "4. Olhos de Einstein: Os olhos do cientista Albert Einstein estão guardados num cofre na cidade.",
                    "5. Central Park Falso?: O parque é totalmente artificial. Cada pedra e árvore foi planejada e colocada lá.",
                    "6. Empire State Vazio: Quando inaugurou (1931), ficou vazio pela crise e foi apelidado de 'Empty State Building'.",
                    "7. Táxis Amarelos: São amarelos porque o fundador da empresa leu que amarelo é a cor mais fácil de ver de longe.",
                    "8. Biblioteca Pública: Os leões de pedra na entrada chamam-se 'Paciência' e 'Fortaleza'.",
                    "9. Metrô 24h: É um dos poucos sistemas de metrô do mundo que funciona 24 horas por dia, 7 dias por semana.",
                    "10. Wall Street: Tem esse nome porque havia uma parede (muro) real lá para proteger os colonos holandeses."
                ],

                // TOP 10 CULTURA & RELIGIÃO
                religiao: [
                    "1. Catedral de St. Patrick: Catedral neogótica gigante espremida entre arranha-céus na 5ª Avenida.",
                    "2. Catedral de St. John the Divine: A maior catedral anglicana do mundo (e ainda inacabada).",
                    "3. Sinagogas: NY tem a maior população judaica fora de Israel. A cultura judaica moldou a cidade (bagels, humor).",
                    "4. Harlem e Gospel: Assistir a um culto com coral Gospel no Harlem domingo de manhã é arrepiante.",
                    "5. Chinatown: Templos budistas escondidos em apartamentos e ruas decoradas.",
                    "6. Little Italy: A festa de San Gennaro (setembro) fecha as ruas com procissões e comida.",
                    "7. Natal no Rockefeller: A árvore de Natal gigante e a pista de patinação são o símbolo do feriado cristão/secular.",
                    "8. Museus de Arte: O Met (Metropolitan) é quase um templo da cultura humana, com arte de 5.000 anos.",
                    "9. Jazz: Clubes como o Blue Note e Village Vanguard são templos da música americana.",
                    "10. Moda: A Fashion Week é um evento cultural que para a cidade."
                ],

                // TOP 10 EVENTOS E ESTAÇÕES
                eventos_estacoes: [
                    "1. Réveillon na Times Square (Dez): A bola cai à meia-noite. Chegue às 14h e use fralda (não tem banheiro).",
                    "2. Macy's Thanksgiving Parade (Nov): Desfile de balões gigantes no Dia de Ação de Graças.",
                    "3. Halloween Parade (Out): No Village. O desfile mais criativo e maluco do mundo.",
                    "4. Maratona de NY (Nov): A cidade para para aplaudir os corredores. A energia é contagiante.",
                    "5. Natal (Dez): As vitrines da 5ª Avenida e as Rockettes no Radio City Music Hall.",
                    "6. Verão (Jul-Ago): Muito quente e úmido. Shows grátis nos parques (SummerStage).",
                    "7. Outono (Out-Nov): A melhor época. O Central Park fica laranja e o clima é fresco.",
                    "8. Primavera (Abr-Mai): As tulipas na Park Avenue e cerejeiras no Brooklyn Botanical Garden.",
                    "9. 4 de Julho: Fogos de artifício no East River (Macy's Fireworks).",
                    "10. Restaurant Week (Jan/Jul): Almoços e jantares em restaurantes caros por preço fixo acessível."
                ],

                // TOP 10 INFO GERAIS
                info_gerais: [
                    "1. Visto: Obrigatório (Americano). A imigração no JFK pode ser demorada e rigorosa.",
                    "2. Moeda: Dólar (US$). Leve notas pequenas ($1, $5) para gorjetas.",
                    "3. Gorjeta (Tip): OBRIGATÓRIA. 18% a 22%. Se der menos, vão te perguntar o que houve de errado.",
                    "4. Metrô (MTA): O sistema é velho e sujo, mas leva a todo lugar. Use o OMNY (aproxime o cartão/celular na catraca).",
                    "5. Caminhar: Nova-iorquino anda rápido. Não pare no meio da calçada para tirar foto ou olhar o mapa. Encoste no canto.",
                    "6. Taxas: O preço na etiqueta NUNCA é o final. Tem taxa de venda (8.875%) adicionada no caixa.",
                    "7. Banheiros: Difíceis de achar. Starbucks e lobbies de hotel são a salvação. Em parques, procure os 'Comfort Stations'.",
                    "8. Tomada: Tipo A/B (dois pinos chatos). Voltagem 110V.",
                    "9. Água: Pode beber da torneira (tap water). Em restaurantes, é grátis.",
                    "10. Aeroportos: JFK (internacional longe), Newark (EWR - em Nova Jersey) e LaGuardia (LGA - voos domésticos)."
                ],

                // TOP 10 DICAS ANTES DE IR
                antes_de_ir: [
                    "1. Passeios Turísticos: Compre o CityPASS ou NY Pass se for em muitas atrações. Economiza 40% e fura filas.",
                    "2. Estátua da Liberdade: O ingresso 'Coroa' (Crown) esgota 4 meses antes. O 'Pedestal' esgota semanas antes.",
                    "3. Metrô Local x Express: Atenção! Trens 'Express' não param em todas as estações. Ouça o aviso sonoro.",
                    "4. Broadway: Compre ingressos no TKTS (cabine vermelha na Times Square) no dia para descontos de 50%.",
                    "5. Sapatos Confortáveis: Você vai andar 15km a 20km por dia. Esqueça o salto alto ou sapato novo.",
                    "6. Top of the Rock: É melhor subir nele do que no Empire State, porque dele você VÊ o Empire State.",
                    "7. Museus Grátis: Muitos museus têm dias 'Pay What You Wish' (pague o quanto quiser) ou horários grátis.",
                    "8. Ferry de Staten Island: É grátis, passa perto da Estátua da Liberdade e tem vista linda do skyline. Ótimo para economizar.",
                    "9. Rooftops: Beba um drink num bar no terraço (230 Fifth, Westlight). A vista paga o preço do drink caro.",
                    "10. Evite Carro: Nunca alugue carro em Manhattan. O estacionamento custa $60/hora e o trânsito é infernal."
                ],

                // --- NOVO: NÚMEROS IMPORTANTES (NOVA YORK) ---
                numeros: [
                    "1. 911 (Emergência): Polícia, Bombeiros e Ambulância (tudo no mesmo número).",
                    "2. 311 (Serviços da Cidade): Para reclamar de barulho, achados e perdidos em táxi ou informações não urgentes.",
                    "3. (+1) 917 777-7777 (Consulado do Brasil): Fica na 225 East 41st St. Para perda de passaporte e auxílio.",
                    "4. 511 (Trânsito e Transporte): Informações sobre o status do metrô e ônibus (MTA).",
                    "5. (+1) 212 532-3400 (Doctor on Call): Serviços médicos que vão até o hotel (caro, use o seguro).",
                    "6. (+1) 718 244-4444 (Aeroporto JFK): Informações gerais e achados e perdidos.",
                    "7. (+1) 973 961-6000 (Aeroporto Newark): Central de informações.",
                    "8. (+1) 212 360-1311 (Central Park): Informações turísticas e emergências dentro do parque.",
                    "9. (+1) 800 222-1222 (Poison Control): Centro de controle de intoxicação.",
                    "10. (+1) 212 695-4400 (Amtrak/Penn Station): Informações sobre trens para outras cidades (DC, Boston)."
                ],

                // --- NOVO: RISCOS E ERROS (NOVA YORK) ---
                riscos: [
                    "1. Vagão Vazio do Metrô: Se o trem está lotado e UM vagão está vazio, NÃO entre. Provavelmente o ar condicionado quebrou ou tem alguém com cheiro insuportável/agressivo dentro.",
                    "2. Personagens da Times Square: O Mickey ou Homem-Aranha vão te abraçar para foto. Se você tirar, eles vão cercar você e exigir dinheiro ($5, $10) de forma agressiva. Evite contato visual.",
                    "3. O Monge e o CD: Homens vestidos de monges oferecem pulseiras da paz ou rapazes oferecem CDs 'de graça'. Se pegar, vão exigir doação/pagamento. Não pegue nada na mão de estranhos.",
                    "4. Golpes de Três Copos: Jogos de azar na calçada (adivinhar onde está a bolinha) são controlados por quadrilhas para roubar turistas. Nunca pare para olhar.",
                    "5. Hotel 'Facility Fee': Cuidado ao reservar. Muitos hotéis cobram uma 'taxa de resort' obrigatória de $30 a $50 por noite no check-in, além do preço do site.",
                    "6. Metrô no Fim de Semana: As linhas mudam completamente para manutenção (obras). O trem que é expresso vira local, ou muda de rota. Leia os cartazes na estação.",
                    "7. Comer em Carrinhos Sujos: Evite carrinhos de comida que pareçam sujos ou sem fila. A intoxicação alimentar ('food poisoning') pode estragar sua viagem.",
                    "8. Pedicabs (Bicicleta-Táxi): Aqueles carrinhos puxados por bicicleta perto do Central Park cobram por MINUTO. Um passeio curto pode custar $100. Negocie preço fechado antes ou não vá.",
                    "9. Área Financeira à Noite: Wall Street fica deserta após as 19h. Não é perigoso como no Brasil, mas é vazio e sem nada aberto.",
                    "10. Ratatouille Real: O metrô tem ratos. Não se assuste, eles ignoram humanos. Apenas não deixe comida cair no chão e não sente no banco se estiver muito sujo."
                ],
                // COLE O ROTEIRO ABAIXO:
                roteiros: {
                    "curto": {
                        titulo: "Roteiro Express (1 a 2 Dias)",
                        texto: [
                            "Dia 1 (Ícones de Manhattan): Manhã no Central Park (Strawberry Fields). Desça a 5ª Avenida. Top of the Rock (pôr do sol). Noite: Times Square (luzes).",
                            "Dia 2 (Liberdade e Finanças): Pegue o ferry grátis de Staten Island para ver a Estátua. Touro de Wall Street e Memorial do 11 de Setembro (Oculus). Noite: Pizza de US$ 1."
                        ]
                    },
                    "medio": {
                        titulo: "Roteiro Essencial (3 a 5 Dias)",
                        texto: [
                            "Dias 1 e 2: Siga o Roteiro Express acima.",
                            "Dia 3 (Brooklyn e Vistas): Atravesse a Brooklyn Bridge a pé (cedo). Fotos no DUMBO. Tarde: Summit One Vanderbilt (o prédio de vidro espelhado).",
                            "Dia 4 (Arte e Urbano): High Line Park caminhando até o Chelsea Market (almoço). Tarde: Museu (MoMA ou MET). Noite: Show da Broadway (compre na TKTS).",
                            "Dia 5 (Vibe Local): SoHo e Little Italy para compras e comida. Grand Central Terminal (o relógio famoso)."
                        ]
                    },
                    "longo": {
                        titulo: "Roteiro Completo (7+ Dias)",
                        texto: [
                            "Dias 1 a 5: Siga o Roteiro Essencial acima.",
                            "Dia 6 (Compras): Bate-volta no Jersey Gardens (Outlet coberto em NJ, sem imposto em roupas).",
                            "Dia 7 (Natureza e Ciência): Museu de História Natural (dinossauros) e piquenique no Sheep Meadow (Central Park).",
                            "Dia 8 (Lado B): Williamsburg (Brooklyn) para brechós e cafés hipsters ou The Edge (plataforma de vidro)."
                        ]
                    }
                },
                
                // SEUS LINKS DE AFILIADO
                links: {
                    hotel: "https://www.booking.com/searchresults.pt-br.html?ss=New+York&aid=304142", 
                    passeio: "https://www.civitatis.com/br/nova-york/", 
                    seguro: "https://www.segurospromo.com.br" 
                }
            }
        ]
    },
    "Ásia": {
        "Japão": [
            {
                name: "Tóquio",
                // FOTO: Cruzamento de Shibuya ou Monte Fuji ao fundo
                imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Skyscrapers_of_Shinjuku_2009_January.jpg/1280px-Skyscrapers_of_Shinjuku_2009_January.jpg",
                tags: ["Tecnologia", "Anime", "Gastronomia"],
                mapa: "https://goo.gl/maps/tokyo",
                clima: "Temperado. Verão (Jun-Ago) é muito quente e úmido. Inverno (Dez-Fev) é frio e seco (raramente neva). A melhor época é a Primavera (Sakura) ou Outono.",
                
                // TOP 10 PONTOS TURÍSTICOS
                pontos_turisticos: [
                    "1. Cruzamento de Shibuya: O cruzamento mais movimentado do mundo. Suba no 'Shibuya Sky' para ver de cima (reserve antes!).",
                    "2. Templo Senso-ji (Asakusa): O templo mais antigo e famoso, com o portão do trovão (Kaminarimon) e a rua de lojinhas Nakamise-dori.",
                    "3. Tokyo Skytree: A torre mais alta do Japão. A vista alcança o Monte Fuji em dias claros.",
                    "4. Akihabara: O bairro dos eletrônicos, animes e maid cafés. O paraíso otaku.",
                    "5. TeamLab Planets: Museu de arte digital imersiva onde você anda descalço na água e entre luzes. Fotos surreais.",
                    "6. Santuário Meiji (Meiji Jingu): Uma floresta de paz no meio da cidade. Fica ao lado de Harajuku.",
                    "7. Shinjuku Gyoen: Um dos parques mais bonitos, mistura jardim japonês, francês e inglês. Lindo na época das cerejeiras.",
                    "8. Tsukiji Outer Market: O antigo mercado de peixes. Vá cedo para comer o sushi mais fresco da sua vida e omelete japonesa.",
                    "9. Harajuku (Takeshita Street): O berço da moda kawaii, crepes coloridos e roupas excêntricas.",
                    "10. Tokyo Disneyland e DisneySea: O DisneySea é único no mundo (tema náutico) e considerado o melhor parque da Disney."
                ],

                // TOP 10 GASTRONOMIA
                gastronomia: [
                    "1. Sushi de Esteira (Kaiten-zushi): Barato, divertido e delicioso. Peça pelo tablet e o trem-bala traz o sushi.",
                    "2. Ramen: Existem mil tipos (Shoyu, Miso, Tonkotsu). O Ichiran Ramen (cabines individuais) é parada obrigatória.",
                    "3. Wagyu (Carne Japonesa): A carne mais macia do mundo. Derrete na boca. Caro, mas vale provar um espetinho.",
                    "4. Tempura: Legumes e camarões empanados numa massa leve e crocante.",
                    "5. Okonomiyaki: A 'panqueca japonesa' feita na chapa com repolho, carne, ovo e molho especial.",
                    "6. Yakitori: Espetinhos de frango grelhados na brasa. Perfeito para acompanhar cerveja nos becos (Izakayas).",
                    "7. Konbini Food: A comida das lojas de conveniência (7-Eleven, Lawson, FamilyMart) é incrivelmente boa. Prove o Onigiri e o Frango Frito (Famichiki).",
                    "8. Fluffy Pancakes: Panquecas super altas e fofas que balançam. Tem em Harajuku.",
                    "9. Matcha: Tudo de chá verde. Sorvete, latte, bolo, chocolate.",
                    "10. Tonkatsu: Lombo de porco empanado e frito, servido com repolho fininho."
                ],

                // TOP 10 CURIOSIDADES
                curiosidades: [
                    "1. Silêncio no Trem: É proibido falar ao celular e mal educado conversar alto no metrô. É um silêncio absoluto.",
                    "2. Vending Machines: Tem máquina de vender bebidas (quentes e frias) em cada esquina. Tem até de sopa e banana.",
                    "3. Sem Lixeiras: É difícil achar lixeira na rua (medida antiterrorismo antiga), mas a cidade é limpíssima. Leve seu lixo com você.",
                    "4. Privadas Tecnológicas: Os vasos sanitários (Washlet) têm botões para jato de água, aquecer o assento e tocar música.",
                    "5. Gorjeta: NÃO dê gorjeta. É considerado ofensivo. O bom serviço já está incluso no orgulho do trabalho.",
                    "6. Tatuagem: Muitos Onsens (fontes termais) e academias proíbem pessoas tatuadas (associado à Yakuza). Cubra com curativo.",
                    "7. Fila para Tudo: Japoneses respeitam filas religiosamente. Para entrar no trem, escada rolante, restaurante.",
                    "8. Lado da Escada: Em Tóquio, fica-se à ESQUERDA na escada rolante (em Osaka é à direita).",
                    "9. Dormir na Rua: É seguro e comum ver assalariados (Salaryman) dormindo na rua ou no trem depois de beberem muito.",
                    "10. Máscaras: Usar máscara cirúrgica é comum para qualquer resfriado ou alergia, mesmo antes da pandemia."
                ],

                // TOP 10 CULTURA & RELIGIÃO
                religiao: [
                    "1. Xintoísmo e Budismo: A maioria dos japoneses pratica os dois. Nascem xintoístas, casam cristãos (estilo) e morrem budistas.",
                    "2. Torii: Os portais vermelhos marcam a entrada de um santuário xintoísta (mundo sagrado).",
                    "3. Purificação (Temizuya): Antes de entrar no templo, lave a mão esquerda, a direita e a boca na fonte de água.",
                    "4. Omikuji: A sorte de papel. Se tirar 'Grande Azar', amarre o papel no templo para o azar ficar lá.",
                    "5. Ema: Plaquinhas de madeira onde você escreve seus desejos e pendura no santuário.",
                    "6. Curvar-se (Ojigi): O cumprimento padrão. Quanto mais baixa a reverência, maior o respeito.",
                    "7. Goshuin: Um caderno de selos que você pode colecionar visitando templos (como um passaporte espiritual).",
                    "8. Sumo: O esporte nacional sagrado. Os torneios acontecem em Janeiro, Maio e Setembro em Tóquio.",
                    "9. Festivals (Matsuri): No verão, os templos fazem festivais com dança, tambores (Taiko) e comida de rua.",
                    "10. Tira o Sapato: Obrigatório tirar os sapatos ao entrar em casas, templos e alguns restaurantes (Izakayas)."
                ],

                // TOP 10 EVENTOS E ESTAÇÕES
                eventos_estacoes: [
                    "1. Sakura (Cerejeiras): Final de Março/Começo de Abril. A cidade fica rosa. O povo faz piquenique (Hanami) nos parques.",
                    "2. Golden Week (Maio): Feriadão nacional. Tudo lota e fica caro. Evite viajar nessa semana.",
                    "3. Hanabi (Fogos): Julho e Agosto. Festivais de fogos de artifício gigantes (Sumida River). O povo usa Yukata (quimono de verão).",
                    "4. Koyo (Outono): Novembro. As folhas ficam vermelhas e amarelas. Lindo no Shinjuku Gyoen e Monte Takao.",
                    "5. Monte Fuji (Escalada): Só é permitido subir de Julho a Setembro. No resto do ano, só ver de longe.",
                    "6. Inverno: Iluminação de Natal em Roppongi e Shibuya é espetacular.",
                    "7. Chuvas (Tsuyu): Junho é o mês chuvoso. Leve guarda-chuva transparente (vende em todo lugar).",
                    "8. Comiket: A maior feira de quadrinhos do mundo (Agosto e Dezembro) no Tokyo Big Sight.",
                    "9. Ano Novo (Oshogatsu): O feriado mais importante. De 1 a 3 de janeiro, muitas lojas fecham e o povo vai ao templo.",
                    "10. Tufões: Setembro é a época mais propensa a tufões. Fique atento aos alertas."
                ],

                // TOP 10 INFO GERAIS
                info_gerais: [
                    "1. Suica/Pasmo: Cartão recarregável de transporte. Compre logo no aeroporto ou adicione no iPhone Wallet. Serve para metrô, trem e comprar no Konbini.",
                    "2. Japan Rail Pass (JR Pass): Passe de trem-bala ilimitado para turistas. Ficou caro recentemente, calcule se vale a pena (calculadora online).",
                    "3. Metrô Labirinto: Shinjuku é a estação mais movimentada do mundo. Use o Google Maps, ele diz exatamente qual vagão e qual saída pegar.",
                    "4. Tax Free: Leve o passaporte. Compras acima de 5.500 ienes são isentas de imposto (10%). Eles lacram a sacola.",
                    "5. Internet: O Wi-Fi público é ruim. Alugue um Pocket Wi-Fi no aeroporto ou compre um eSIM (Holafly/Airalo).",
                    "6. Tomada: Tipo A (dois pinos chatos, igual EUA). Voltagem 100V (funciona aparelhos 110V/bivolt).",
                    "7. Táxi: É caro e a porta abre sozinha (automática). Não tente abrir.",
                    "8. Moeda: Iene (JPY). O Japão ainda usa muito dinheiro vivo (Cash), principalmente em restaurantes pequenos. Tenha notas.",
                    "9. Segurança: Uma das cidades mais seguras do mundo. Pode andar com câmera no pescoço às 3h da manhã.",
                    "10. Tatuagem: Se tiver tatuagem grande, verifique as regras antes de ir a onsens ou piscinas públicas."
                ],

                // TOP 10 DICAS ANTES DE IR
                antes_de_ir: [
                    "1. Visit Japan Web: Preencha o formulário de imigração e alfândega online antes de embarcar para gerar o QR Code. Agiliza a entrada.",
                    "2. Reserve Disney e Ghibli: Ingressos esgotam semanas antes. Não deixe para comprar na hora.",
                    "3. Sapatos Fáceis: Você vai tirar e pôr o sapato muitas vezes. Evite botas difíceis de amarrar.",
                    "4. Google Translate: Baixe o pacote japonês offline e use a função de câmera para ler cardápios e placas.",
                    "5. Powerbank: Você vai usar muito o celular (mapa/foto). Bateria extra é vital.",
                    "6. Mala Pequena: Os quartos de hotel são minúsculos e carregar mala gigante no metrô é um inferno.",
                    "7. Lencinho de Mão: Muitos banheiros públicos não têm papel toalha. Japoneses andam com uma toalhinha.",
                    "8. Shinkansen (Trem-Bala): Se tiver mala grande, precisa reservar o assento 'Baggage Area' no trem-bala.",
                    "9. Horário dos Trens: O metrô NÃO é 24h. O último trem passa por volta da meia-noite. Se perder, o táxi é caríssimo.",
                    "10. Etiqueta: Não coma andando na rua (exceto em festivais). Pare num cantinho, coma e depois ande."
                ],

                // --- NÚMEROS IMPORTANTES (TÓQUIO) ---
                numeros: [
                    "1. 110 (Polícia): Emergência e acidentes.",
                    "2. 119 (Bombeiros/Ambulância): Emergência médica e incêndio.",
                    "3. 118 (Guarda Costeira): Emergências no mar.",
                    "4. +81 3-3404-5211 (Embaixada do Brasil): Fica em Aoyama.",
                    "5. 0570-00-2437 (Japan Visitor Hotline): Suporte ao turista em inglês/português.",
                    "6. Aeroporto Narita (NRT) e Haneda (HND): Tenha os contatos da sua companhia aérea.",
                    "7. Lost & Found (Polícia): Se perder algo, vá ao Koban (posto policial). A chance de devolverem é de 90%.",
                    "8. JR East Infoline: 050-2016-1603 (Informações sobre trens).",
                    "9. Taxi Center: Para reclamar ou achar coisas perdidas no táxi.",
                    "10. Seguro Viagem: O atendimento médico no Japão é excelente, mas CARÍSSIMO. Não vá sem seguro."
                ],

                // --- RISCOS E ERROS (TÓQUIO) ---
                riscos: [
                    "1. O Golpe de Kabukicho: O MAIOR PERIGO. Em Shinjuku (Kabukicho), homens (geralmente nigerianos ou japoneses) te convidam na rua para beber barato com 'meninas'. É GOLPE. Eles batizam a bebida e zeram seu cartão de crédito. NUNCA siga ninguém na rua (tout).",
                    "2. Terremotos: O Japão treme. Se sentir tremer, mantenha a calma, proteja a cabeça e fique longe de vidros. Se estiver no hotel, abra a porta (para não travar). O celular vai emitir um alarme alto (J-Alert).",
                    "3. Perder o Último Trem: Os táxis noturnos são caros. Se perder o trem, vá para um Internet Café (Manga Kissa) ou Karaokê esperar amanhecer.",
                    "4. Roaming de Dados: Usar o chip do Brasil sem pacote internacional vai custar uma fortuna. Desligue o roaming ou compre chip local.",
                    "5. Andar e Fumar: É proibido fumar na rua em muitas áreas (multa de 2.000 ienes). Use os fumódromos designados.",
                    "6. Tatuagem em Onsen: Entrar em fonte termal com tatuagem sem avisar pode causar sua expulsão. Procure 'Tattoo Friendly'.",
                    "7. Fotografar Maiko/Geisha: Em Kyoto (Gion), não toque nem bloqueie o caminho das Geishas para tirar foto. É proibido e dá multa.",
                    "8. Barulho em Apartamento: Se alugar Airbnb, silêncio total após as 22h. Vizinhos chamam a polícia rápido.",
                    "9. Cartão de Crédito: Alguns lugares antigos só aceitam dinheiro. Se ficar sem 'cash', pode passar aperto.",
                    "10. Escadas de Estação: Estações grandes são labirintos. Siga as placas coloridas no chão ou teto. Olhar o celular andando pode causar acidentes."
                ],

                // --- ROTEIROS AUTOMÁTICOS (TÓQUIO) ---
                roteiros: {
                    "curto": {
                        titulo: "Roteiro Express (3 Dias)",
                        texto: [
                            "Dia 1 (Oeste Moderno): Manhã no Santuário Meiji e Harajuku (Takeshita St). Tarde: Shibuya Crossing e Shibuya Sky no pôr do sol. Noite em Shinjuku (Omoide Yokocho).",
                            "Dia 2 (Leste Tradicional): Templo Senso-ji (Asakusa) cedo. Barco pelo rio Sumida até Odaiba ou Hamarikyu Garden. Tarde: Akihabara (Eletrônicos/Anime).",
                            "Dia 3 (Arte e Luxo): TeamLab Planets pela manhã (reserve!). Tarde em Ginza (compras) e Palácio Imperial (jardins)."
                        ]
                    },
                    "medio": {
                        titulo: "Roteiro Essencial (5 a 7 Dias)",
                        texto: [
                            "Dias 1 a 3: Siga o Roteiro Express acima.",
                            "Dia 4 (Magia): DisneySea (Parque único no mundo) OU Tokyo Disneyland.",
                            "Dia 5 (Cultura Pop): Nakano Broadway (colecionáveis) e Ikebukuro (Pokemon Center).",
                            "Dia 6 (Bate-volta Histórico): Kamakura (Grande Buda) e Enoshima (Ilha). Fica a 1h de trem.",
                            "Dia 7 (Natureza/Fuji): Bate-volta para Hakone ou Lago Kawaguchiko para ver o Monte Fuji e tomar banho termal (Onsen)."
                        ]
                    },
                    "longo": {
                        titulo: "Roteiro Completo (10+ Dias)",
                        texto: [
                            "Dias 1 a 7: Siga o Roteiro Essencial acima.",
                            "Dia 8 (Patrimônio): Bate-volta para Nikko (Toshogu Shrine). Patrimônio da UNESCO nas montanhas.",
                            "Dia 9 (Vibe Local): Bairros hipsters como Shimokitazawa (brechós) e Kichijoji (Parque Inokashira).",
                            "Dia 10 (Mercado e Despedida): Tsukiji Outer Market para café da manhã com sushi. Compras finais na Don Quijote (Mega Donki)."
                        ]
                    }
                },

                // SEUS LINKS DE AFILIADO
                links: {
                    hotel: "https://www.booking.com/searchresults.pt-br.html?city=-246227&aid=304142", 
                    passeio: "https://www.civitatis.com/br/toquio/", 
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
                // --- NOVO: RISCOS E ERROS (LISBOA) ---
                riscos: [
                    "1. Carteiristas no Elétrico 28: O bondinho amarelo é lindo, mas é o 'escritório' oficial dos batedores de carteira. Mochila para frente e mão no bolso o tempo todo.",
                    "2. O 'Couvert' NÃO é Grátis: Se o garçom puser azeitonas, pão, patê e queijo na mesa sem você pedir, NÃO é cortesia (diferente do Brasil). Se comer, vai pagar (e caro). Se não quiser, peça para retirar na hora.",
                    "3. Vendedores de 'Haxixe' na Baixa: Na Praça do Comércio e Rossio, homens vão te oferecer drogas insistentemente. É golpe: eles vendem louro prensado, orégano ou caldo Knorr. Apenas ignore e siga andando.",
                    "4. Calçada Portuguesa Escorregadia: As pedras portuguesas são lindas, mas viram sabão quando chove (e até secas escorregam). Evite salto alto ou solas lisas nas ladeiras para não cair.",
                    "5. Falar Espanhol: O português entende espanhol, mas muitos não gostam que assumam que eles são espanhóis. Tente falar português (mesmo com sotaque BR) ou inglês. É mais respeitoso.",
                    "6. Ir a Sintra de Carro: Erro clássico. O trânsito na serra para, não tem onde estacionar e a polícia multa. Vá de trem (comboio) saindo do Rossio e use o ônibus 434 lá dentro.",
                    "7. Azulejos Roubados: Na Feira da Ladra, evite comprar azulejos antigos 'originais'. Muitos são roubados de fachadas de prédios históricos à noite. Não financie a destruição do patrimônio.",
                    "8. Fila da Torre de Belém: A fila para entrar na Torre é gigante e o interior é apertado e vazio. A foto bonita é do lado de fora. Para ver a vista, suba no Padrão dos Descobrimentos (que tem elevador).",
                    "9. Táxis no Aeroporto: Alguns taxistas tentam cobrar preço fixo abusivo ou dão voltas maiores. Prefira usar Uber/Bolt ou vá para a fila oficial e exija o taxímetro (a tarifa começa por volta de 3,25€).",
                    "10. Comprar Água Garrafada: A água da torneira em Lisboa é excelente e potável. Nos restaurantes, peça 'um copo de água' ou leve sua garrafinha para encher. Não gaste euros com isso."
                ],
                // COLE O ROTEIRO ABAIXO:
                roteiros: {
                    "curto": {
                        titulo: "Roteiro Express (1 a 2 Dias)",
                        texto: [
                            "Dia 1 (Belém e Baixa): Manhã em Belém (Torre, Padrão dos Descobrimentos e Pastéis de Belém). Tarde: Praça do Comércio e suba o Elevador de Santa Justa. Jantar no Time Out Market.",
                            "Dia 2 (Alfama e Castelo): Pegue o Elétrico 28 cedo. Suba ao Castelo de São Jorge (vista). Tarde: Perca-se nas ruelas de Alfama. Noite: Jantar com Fado Vadio."
                        ]
                    },
                    "medio": {
                        titulo: "Roteiro Essencial (3 a 5 Dias)",
                        texto: [
                            "Dias 1 e 2: Siga o Roteiro Express acima.",
                            "Dia 3 (Sintra - Obrigatório): Pegue o trem no Rossio. Visite o Palácio da Pena (o colorido) e a Quinta da Regaleira (poço iniciático). Volte exausto, mas feliz.",
                            "Dia 4 (Lisboa Moderna): Oceanário de Lisboa (Parque das Nações). Teleférico. Tarde de compras no Chiado ou Av. da Liberdade.",
                            "Dia 5 (Cascais): Trem do Cais do Sodré para Cascais (viagem linda na beira do mar). Almoço na marina e Boca do Inferno."
                        ]
                    },
                    "longo": {
                        titulo: "Roteiro Completo (7+ Dias)",
                        texto: [
                            "Dias 1 a 5: Siga o Roteiro Essencial acima.",
                            "Dia 6 (Fé e Ondas): Bate-volta para Fátima (Santuário) e Nazaré (ondas gigantes e peixe seco) ou Óbidos (vila medieval).",
                            "Dia 7 (Lado Cool): LX Factory (lojas de design e livraria Ler Devagar) debaixo da ponte. Pôr do sol no MAAT.",
                            "Dia 8 (Outra Margem): Atravesse a ponte para ver o Cristo Rei e as praias da Costa da Caparica (se for verão) ou Setúbal/Arrábida."
                        ]
                    }
                },
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
                // --- NOVO: RISCOS E ERROS (MADRID) ---
                riscos: [
                    "1. Carteiristas no Metrô e Sol: Madrid é a capital dos batedores de carteira profissionais. Eles agem em grupos na Puerta del Sol e no Metrô. Mochila sempre para frente.",
                    "2. Golpe do Alecrim (Romero): Mulheres oferecem um raminho de alecrim 'de graça' perto da Catedral ou Plaza Mayor. Se pegar, elas leem sua mão e cobram agressivamente ou te amaldiçoam.",
                    "3. Comer na Plaza Mayor: Os restaurantes DENTRO da praça são 'pega-turista': caros e comida ruim. Tire a foto na praça, mas coma nas ruas laterais (como a Cava Baja).",
                    "4. Horários de Refeição: Espanhol almoça às 14h30 e janta às 21h30. Se tentar jantar às 19h, vai encontrar cozinhas fechadas ou ficar sozinho no restaurante.",
                    "5. Pedir Sangria: Sangria muitas vezes é 'suco para turista' caro e doce. Faça como os locais e peça 'Tinto de Verano' (vinho com soda limão), que é mais autêntico, barato e refrescante.",
                    "6. Táxi do Aeroporto: Do Aeroporto (Barajas) para o Centro (dentro da M-30) existe uma TARIFA FIXA de 33€ (valor pode variar, mas é fixo). Se o taxista ligar o taxímetro, reclame. É lei.",
                    "7. Agosto em Madrid: Evite se puder. A cidade vira um forno (40ºC), muitos comércios locais fecham para férias e só sobram turistas na rua.",
                    "8. Água Mineral: A água da torneira de Madrid é famosa por ser uma das melhores do mundo (vem da Serra). Não gaste dinheiro comprando garrafinha, encha a sua na pia.",
                    "9. Fila do Prado 'Grátis': O Museu do Prado tem entrada grátis nas últimas 2 horas. A fila é tão grande que você perde 1h esperando e só vê o museu correndo por 40 min. Pague o ingresso para ver com calma.",
                    "10. Gorjeta Excessiva: Não precisa deixar 10% ou 15% como nos EUA ou Brasil. Arredondar a conta ou deixar algumas moedas é suficiente. O serviço já está incluído no salário."
                ],
                // COLE O ROTEIRO ABAIXO:
                roteiros: {
                    "curto": {
                        titulo: "Roteiro Express (1 a 2 Dias)",
                        texto: [
                            "Dia 1 (Coração da Espanha): Puerta del Sol (Marco Zero), Plaza Mayor e Mercado de San Miguel (tapas). Tarde: Palácio Real e Catedral de Almudena. Fim de tarde: Churros na San Ginés.",
                            "Dia 2 (Arte e Parque): Manhã no Museu do Prado (clássicos) ou Reina Sofía (Guernica). Tarde: Caminhada no Parque del Retiro e Puerta de Alcalá."
                        ]
                    },
                    "medio": {
                        titulo: "Roteiro Essencial (3 a 5 Dias)",
                        texto: [
                            "Dias 1 e 2: Siga o Roteiro Express acima.",
                            "Dia 3 (Moderno e Vistas): Estádio Santiago Bernabéu (Tour do Real Madrid). Tarde de compras na Gran Vía. Pôr do sol no Templo de Debod (egípcio).",
                            "Dia 4 (Bate-volta Imperial): Pegue o trem-bala (AVE) para Toledo. A cidade medieval é incrível. Perca-se nas ruas e visite a Catedral.",
                            "Dia 5 (Vibe Local): Domingo? Vá ao El Rastro (mercado de rua). Se não, bairro La Latina para rota de tapas (Cava Baja) e Malasaña à noite."
                        ]
                    },
                    "longo": {
                        titulo: "Roteiro Completo (7+ Dias)",
                        texto: [
                            "Dias 1 a 5: Siga o Roteiro Essencial acima.",
                            "Dia 6 (Aqueduto Romano): Bate-volta para Segóvia. Veja o Aqueduto gigante, o Alcázar (castelo da Disney) e coma o famoso leitão (Cochinillo).",
                            "Dia 7 (Compras e Luxo): Bairro de Salamanca (milha de ouro) e Plaza de Colón. Jantar chique na Calle Serrano.",
                            "Dia 8 (Despedida): Café da manhã lento em uma terraza e visita ao Jardim Botânico ou Matadero (centro cultural)."
                        ]
                    }
                },
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
                // --- NOVO: RISCOS E ERROS (PARIS) ---
                riscos: [
                    "1. Não Dizer 'Bonjour': O erro nº 1. Entrar numa loja e não cumprimentar o vendedor é considerado uma ofensa grave. Você será ignorado ou maltratado. Diga sempre 'Bonjour, Madame/Monsieur'.",
                    "2. Golpe do Anel de Ouro: Alguém 'acha' um anel dourado no chão na sua frente e pergunta se é seu. Depois tentam te vender ou pedir dinheiro. É latão. Ignore e continue andando.",
                    "3. Golpe da Pulseirinha (Sacré-Cœur): Nas escadarias de Montmartre, homens tentam amarrar uma fita no seu dedo/braço à força para fazer uma pulseira e cobrar caro. Mantenha as mãos nos bolsos e suba rápido.",
                    "4. Jogar o Bilhete do Metrô Fora: Nunca jogue o ticket fora antes de sair da estação. A fiscalização (Contrôleurs) fica nos corredores de saída e a multa é de 50€ na hora, sem conversa.",
                    "5. Golpe da Prancheta (Surdos): Jovens fingem ser surdos-mudos pedindo assinatura em uma prancheta. Enquanto você assina, o comparsa bate sua carteira. É muito comum perto da Torre Eiffel.",
                    "6. Táxi Pirata no Aeroporto (CDG): Ao desembarcar, homens vão oferecer táxi no saguão ('Taxi, Sir?'). IGNORE. Vá para a fila oficial externa. O preço é TABELADO (aprox. 55€-62€). Piratas cobram 150€.",
                    "7. Água Mineral Cara: Em restaurantes, se pedir 'water', trarão garrafa de vidro (Vittel/Evian) que custa 6€. Peça sempre 'Une Carafe d'eau' (jarra d'água). É água da torneira, boa e GRÁTIS por lei.",
                    "8. Comer na Rue de la Huchette: Perto da Notre-Dame, há ruas cheias de restaurantes com 'Menu a 10€'. É comida congelada, ruim e pega-turista. Afaste-se das atrações principais para comer bem.",
                    "9. RER B à Noite: O trem que vem do aeroporto (RER B) passa por áreas perigosas (Saint-Denis). Evite usar tarde da noite com muitas malas. O RoissyBus ou Táxi são mais seguros nesse horário.",
                    "10. Museu do Louvre na Terça: O Louvre fecha às terças-feiras. Muita gente esquece disso e perde a viagem. O Palácio de Versalhes fecha às segundas. Confira os dias de folga!"
                ],
                // COLE O ROTEIRO ABAIXO:
                roteiros: {
                    "curto": {
                        titulo: "Roteiro Express (1 a 2 Dias)",
                        texto: [
                            "Dia 1 (Ícones): Comece no Trocadéro (melhor vista da Torre Eiffel). Desça e faça o Cruzeiro no Sena. Tarde: Arco do Triunfo e desça a Champs-Élysées a pé.",
                            "Dia 2 (Arte e Charme): Museu do Louvre (Mona Lisa - compre ingresso meses antes!). Tarde em Montmartre: Basílica de Sacré-Cœur, Muro do 'Eu Te Amo' e jantar num bistrô."
                        ]
                    },
                    "medio": {
                        titulo: "Roteiro Essencial (3 a 5 Dias)",
                        texto: [
                            "Dias 1 e 2: Siga o Roteiro Express acima.",
                            "Dia 3 (Histórico e Hipster): Le Marais. Visite a Place des Vosges, coma falafel na Rue des Rosiers e veja o Centre Pompidou.",
                            "Dia 4 (Margem Esquerda): Musée d'Orsay (Impressionistas). Almoço em Saint-Germain-des-Prés (Café de Flore) e relax no Jardim de Luxemburgo.",
                            "Dia 5 (Realeza): Bate-volta OBRIGATÓRIO para o Palácio de Versalhes (Salão dos Espelhos e Jardins). Reserve o dia todo."
                        ]
                    },
                    "longo": {
                        titulo: "Roteiro Completo (7+ Dias)",
                        texto: [
                            "Dias 1 a 5: Siga o Roteiro Essencial acima.",
                            "Dia 6 (Compras e Vistas): Ópera Garnier (Fantasma da Ópera) e Galeries Lafayette (suba no terraço, a vista é grátis).",
                            "Dia 7 (Magia ou Monet): Disney Paris (são 2 parques) OU Jardins de Monet em Giverny (se for Primavera/Verão).",
                            "Dia 8 (Lado B): Canal Saint-Martin (vibe local jovem) ou Catacumbas de Paris (se tiver coragem)."
                        ]
                    }
                },
                // SEUS LINKS DE AFILIADO
                links: {
                    hotel: "https://www.booking.com/searchresults.pt-br.html?ss=Paris&aid=304142", 
                    passeio: "https://www.civitatis.com/br/paris/", 
                    seguro: "https://www.segurospromo.com.br" 
                }
            }
        ],
        "Inglaterra": [
            {
                name: "Londres",
                // FOTO: Big Ben e Westminster Bridge (Wikimedia - Link Estável)
                imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall.jpg/1024px-Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall.jpg",
                tags: ["Realeza", "História", "Pubs"],
                mapa: "https://goo.gl/maps/londres",
                clima: "Oceânico Temperado. Cinza e úmido, mas chove menos do que dizem. Inverno frio (4ºC) e Verão agradável (22ºC).",
                
                // TOP 10 PONTOS TURÍSTICOS
                pontos_turisticos: [
                    "1. Big Ben e Parlamento: O ícone mundial. A torre do relógio (Elizabeth Tower) brilha dourada após a reforma.",
                    "2. London Eye: A roda-gigante mais famosa. A vista do Parlamento e do Rio Tâmisa lá de cima é clássica.",
                    "3. Tower Bridge: A ponte que abre. Não confunda com a London Bridge (que é sem graça). Suba na passarela de vidro.",
                    "4. Museu Britânico: Onde está a história do mundo (Pedra de Roseta, Múmias). A entrada é GRÁTIS.",
                    "5. Palácio de Buckingham: A casa do Rei. A Troca da Guarda (11h) é lotada, chegue cedo ou veja de longe.",
                    "6. Torre de Londres: O castelo medieval onde ficam as Joias da Coroa e os famosos corvos.",
                    "7. Camden Town: O bairro alternativo, berço do punk e da Amy Winehouse. Mercados de rua incríveis.",
                    "8. Hyde Park: O maior parque real. Alimente esquilos, veja o lago Serpentine e o memorial da Diana.",
                    "9. Catedral de St. Paul: A cúpula gigante onde Charles e Diana casaram. A acústica da galeria dos sussurros é mágica.",
                    "10. Harry Potter (Plataforma 9 ¾): Em King's Cross. A fila para tirar foto no carrinho é grande, mas fãs amam."
                ],

                // TOP 10 GASTRONOMIA
                gastronomia: [
                    "1. Fish and Chips: Peixe frito com batata frita e purê de ervilhas. Coma num pub tradicional, não em restaurante chique.",
                    "2. English Breakfast: O café da manhã de campeão: ovos, bacon, linguiça, feijão doce, cogumelos e tomate.",
                    "3. Sunday Roast: O almoço de domingo sagrado. Carne assada, batatas, vegetais, molho gravy e Yorkshire Pudding.",
                    "4. Afternoon Tea: O chá da tarde com sanduichinhos, scones (pãezinhos) com geleia e creme. Experiência real.",
                    "5. Chicken Tikka Masala: Dizem que é o verdadeiro prato nacional. A comida indiana em Londres é a melhor do mundo fora da Índia.",
                    "6. Beef Wellington: Filé mignon envolto em patê e massa folhada. Prato de luxo (o do Gordon Ramsay é famoso).",
                    "7. Pies (Tortas): Tortas de massa podre com recheio de carne e cerveja (Steak and Ale) servidas com purê.",
                    "8. Borough Market: O mercado de comida mais antigo e delicioso. Prove o sanduíche de queijo quente ou donuts.",
                    "9. Scotch Egg: Um ovo cozido envolto em carne de linguiça e empanado. Lanche típico de piquenique.",
                    "10. Gin & Tonic: A bebida favorita dos londrinos. Existem bares especializados só em Gin."
                ],

                // TOP 10 CURIOSIDADES
                curiosidades: [
                    "1. Mão Inglesa: Os carros dirigem na esquerda. OLHE PARA A DIREITA antes de atravessar a rua (está escrito no chão 'LOOK RIGHT').",
                    "2. Floresta?: Londres tem tantas árvores (mais de 8 milhões) que é tecnicamente classificada pela ONU como uma floresta.",
                    "3. Corvos da Torre: Diz a lenda que se os corvos saírem da Torre de Londres, o reino cairá. Por isso, eles têm as asas aparadas.",
                    "4. Metrô Mais Antigo: O 'Tube' é o sistema de metrô mais antigo do mundo (1863). É fundo, quente e não tem ar condicionado em muitas linhas.",
                    "5. Big Ben é o Sino: O nome da torre é Elizabeth Tower. Big Ben é o apelido do sino gigante de 13 toneladas lá dentro.",
                    "6. Black Cabs: Para ser taxista de Black Cab, é preciso passar numa prova lendária ('The Knowledge') e decorar 25.000 ruas de cabeça.",
                    "7. Museus Grátis: A maioria dos grandes museus (British, Natural History, Science, Tate) tem entrada gratuita permanente.",
                    "8. Cidade de Raposas: Existem milhares de raposas urbanas vivendo em Londres. Você verá muitas à noite revirando lixo.",
                    "9. Ônibus Vermelho: A cor vermelha foi escolhida apenas para eles se destacarem no meio do nevoeiro cinza de Londres.",
                    "10. A Rainha/Rei em Casa: Se a bandeira do estandarte real estiver hasteada em Buckingham, o monarca está em casa."
                ],

                // TOP 10 CULTURA & RELIGIÃO
                religiao: [
                    "1. Abadia de Westminster: Onde reis são coroados e enterrados (e onde William e Kate casaram). É o coração da Igreja Anglicana.",
                    "2. Catedral de St. Paul: A obra-prima de Christopher Wren, reconstruída após o Grande Incêndio de 1666.",
                    "3. Diversidade: Londres é uma das cidades mais multiculturais do mundo. Mais de 300 línguas são faladas.",
                    "4. Templo Hindu de Neasden: O primeiro templo hindu tradicional de pedra da Europa. É deslumbrante.",
                    "5. Mesquita Central de Londres: Fica na beira do Regent's Park, com uma cúpula dourada visível de longe.",
                    "6. West End (Teatro): A 'Broadway' de Londres. Assistir a um musical (O Fantasma da Ópera, Les Misérables) é ritual cultural.",
                    "7. Pubs Históricos: O pub é a sala de estar do britânico. Alguns existem desde o século 17 e sobreviveram a bombardeios.",
                    "8. Notting Hill: O bairro caribenho que hospeda o maior carnaval de rua da Europa (em agosto).",
                    "9. Shakespeare's Globe: Uma réplica fiel do teatro original de Shakespeare a céu aberto.",
                    "10. Banksy e Street Art: Shoreditch e Brick Lane são galerias a céu aberto com os melhores grafites do mundo."
                ],

                // TOP 10 EVENTOS E ESTAÇÕES
                eventos_estacoes: [
                    "1. Natal (Dezembro): As luzes da Regent Street e Oxford Street são as mais bonitas da Europa. O Hyde Park vira o 'Winter Wonderland'.",
                    "2. Troca da Guarda: Acontece o ano todo (11h), mas verifique os dias (nem sempre é diária).",
                    "3. Wimbledon (Julho): O torneio de tênis mais antigo do mundo. A cidade respira tênis e come morangos com creme.",
                    "4. Primavera (Mar-Mai): Os parques ficam cheios de narcisos amarelos (daffodils) e cerejeiras.",
                    "5. Chelsea Flower Show (Maio): A exposição de flores favorita da Realeza.",
                    "6. Notting Hill Carnival (Agosto): Um carnaval caribenho gigante, colorido e barulhento nas ruas.",
                    "7. Ano Novo: Os fogos na London Eye são disputadíssimos (precisa comprar ingresso meses antes).",
                    "8. Outono (Set-Nov): Os parques reais ficam dourados e o clima é aconchegante para pubs.",
                    "9. Maratona de Londres (Abril): Uma das maiores do mundo, passa pelos pontos turísticos.",
                    "10. Verão (Jun-Ago): Os dias são longos (escurece às 22h). Os pubs ficam cheios de gente bebendo na calçada."
                ],

                // TOP 10 INFO GERAIS
                info_gerais: [
                    "1. Moeda: Libra Esterlina (£ - GBP). É mais cara que o Euro e o Dólar.",
                    "2. Visto: Brasileiros não precisam de visto para turismo (até 6 meses), mas a ETA (autorização eletrônica) será implementada em breve. Confira antes de ir.",
                    "3. Tomada: TIPO G (três pinos retangulares enormes). É exclusiva do Reino Unido. SEU ADAPTADOR EUROPEU NÃO SERVE. Compre um específico.",
                    "4. Transporte: Use o cartão de crédito/débito por aproximação (Contactless) direto na catraca. É o mesmo preço do Oyster Card.",
                    "5. Metrô (Tube): É dividido em zonas (1 a 6). Quanto mais longe do centro, mais caro. Turistas ficam na Zona 1-2.",
                    "6. Gorjeta: 10% a 12.5% geralmente vem na conta ('Service Charge'). Se não vier, é educado deixar.",
                    "7. Água: Da torneira é potável. Em restaurantes, peça 'Tap Water' (é grátis).",
                    "8. Aeroportos: Heathrow (LHR - Principal/Metrô), Gatwick (LGW - Trem), Stansted e Luton (Low cost/Longe).",
                    "9. Tax Free: O Reino Unido SAIU da União Europeia (Brexit). Não existe mais Tax Free (reembolso de imposto) para turistas em lojas.",
                    "10. Escale à Direita: Na escada rolante do metrô, FIQUE À DIREITA. Se ficar na esquerda parado, vai levar bronca."
                ],

                // TOP 10 DICAS ANTES DE IR
                antes_de_ir: [
                    "1. Compre Adaptador G: Sério, compre no Brasil ou no aeroporto. Suas tomadas não vão entrar de jeito nenhum.",
                    "2. Sky Garden Grátis: A melhor vista de Londres é de graça (Sky Garden ou Horizon 22), mas precisa reservar no site semanas antes.",
                    "3. Não compre bilhete de papel: No metrô, o bilhete de papel custa o dobro. Use seu cartão Contactless (Wise/Nomad) ou Oyster.",
                    "4. Museus: Reserve horário no site dos museus gratuitos. Mesmo sendo grátis, alguns exigem hora marcada para não lotar.",
                    "5. Harry Potter Studios: Fica longe da cidade (Watford). Os ingressos esgotam 3 meses antes. Compre com muita antecedência.",
                    "6. Citymapper: Baixe esse app. Ele é melhor que o Google Maps para o transporte de Londres (diz até o vagão do metrô mais vazio).",
                    "7. Pubs Fecham Cedo: A maioria dos pubs toca o sino às 23h ('Last Orders'). A noite em Londres acaba cedo se não for balada.",
                    "8. Stansted Express: Se voar Ryanair, compre o trem antecipado. Na hora é caríssimo.",
                    "9. Teatro: Compre ingressos de última hora na cabine TKTS na Leicester Square para descontos.",
                    "10. Chuva: Não leve guarda-chuva (o vento quebra). Leve capa de chuva ou casaco impermeável com capuz."
                ],

                // --- NOVO: NÚMEROS IMPORTANTES (LONDRES) ---
                numeros: [
                    "1. 999 (Emergência): Polícia, Bombeiros e Ambulância (só para risco de vida).",
                    "2. 101 (Polícia Não-Emergencial): Para reportar furtos de celular ou crimes que já aconteceram.",
                    "3. 111 (NHS - Saúde): Para aconselhamento médico urgente que não seja risco de vida.",
                    "4. (+44) 20 7659 1550 (Consulado do Brasil): Fica na 3 Vere Street. Para perda de passaporte.",
                    "5. (+44) 344 335 1801 (Transport for London - TfL): Achados e perdidos no metrô e ônibus.",
                    "6. (+44) 20 7222 1234 (Táxi Black Cab): Central de táxis oficiais (ou use o app Gett).",
                    "7. (+44) 20 7379 7395 (London Tourist Centre): Informações turísticas na Leicester Square.",
                    "8. (+44) 844 335 1801 (Aeroporto Heathrow): Informações de voos.",
                    "9. (+44) 345 909 0909 (National Rail): Informações sobre trens para outras cidades.",
                    "10. 112: Funciona como o 999 (padrão europeu, também aceito)."
                ],

                // --- NOVO: RISCOS E ERROS (LONDRES) ---
                riscos: [
                    "1. Olhar para o Lado Errado: O ERRO FATAL. Os carros vêm da direita. Muitos turistas são atropelados por olhar para a esquerda. Procure a frase 'LOOK RIGHT' pintada no chão antes de atravessar.",
                    "2. Ladrões de Moto (Phone Snatching): É uma epidemia em Londres. Homens em motos elétricas sobem na calçada e arrancam o celular da sua mão enquanto você usa o GPS. Segure o celular com as duas mãos e fique longe da borda da rua.",
                    "3. Lojas de Doces da Oxford Street: As 'American Candy Stores' gigantes na Oxford Street muitas vezes são esquemas de lavagem de dinheiro/golpes. Vendem doces vencidos a preços astronômicos. Evite.",
                    "4. Rickshaws (Bicicletas-Táxi): No Soho e West End, eles cobram preços abusivos (tipo £50 por 5 minutos) e intimidam turistas para pagar. Não pegue.",
                    "5. Golpe do Jogo de Copos: Na ponte de Westminster, grupos fazem jogos de adivinhação. É golpe de quadrilha para bater carteira de quem para para olhar. Não pare.",
                    "6. Metrô Sem Ar: No verão, a linha Central (vermelha) e a Bakerloo (marrom) viram fornos de 40ºC. Leve água e evite em horários de pico se passar mal com calor.",
                    "7. Aeroportos Distantes: Cuidado ao comprar voo barato para Stansted, Luton ou Southend. O trem para chegar lá custa caro (£20-£30) e demora, anulando a economia da passagem.",
                    "8. Taxa de Congestionamento: Se alugar carro (não faça isso), entrar no centro custa £15 por dia (Congestion Charge) + £12.50 (ULEZ). A multa chega pelo correio.",
                    "9. Ratos nos Parques: Ao anoitecer, os parques de Londres têm muitos ratos e raposas. Não deixe restos de piquenique no chão.",
                    "10. Batedores no Troca da Guarda: A multidão em frente ao Palácio de Buckingham é o lugar favorito dos 'pickpockets'. Mochila para frente sempre."
                ],
                // COLE O ROTEIRO ABAIXO:
                roteiros: {
                    "curto": {
                        titulo: "Roteiro Express (1 a 2 Dias)",
                        texto: [
                            "Dia 1 (Westminster Real): Troca da Guarda no Palácio de Buckingham (11h). Caminhe pelo St. James Park até o Big Ben e Abadia de Westminster. London Eye ao pôr do sol.",
                            "Dia 2 (A City e a Torre): Torre de Londres (Joias da Coroa). Atravesse a Tower Bridge. Almoço no Borough Market. Tarde: Tate Modern e St. Paul's Cathedral."
                        ]
                    },
                    "medio": {
                        titulo: "Roteiro Essencial (3 a 5 Dias)",
                        texto: [
                            "Dias 1 e 2: Siga o Roteiro Express acima.",
                            "Dia 3 (Cultura e Compras): British Museum (Pedra de Roseta - grátis). Tarde: Oxford Street e Regent Street (compras). Noite: Covent Garden ou um Musical no West End.",
                            "Dia 4 (Alternativo): Camden Town (mercado punk/alternativo) pela manhã. Tarde: Passeio de barco até Greenwich (Meridiano Zero) ou Hyde Park.",
                            "Dia 5 (Museus e Charme): South Kensington (Museu de História Natural e V&A). Tarde: Notting Hill (Feira de Portobello Road) e Kensington Palace."
                        ]
                    },
                    "longo": {
                        titulo: "Roteiro Completo (7+ Dias)",
                        texto: [
                            "Dias 1 a 5: Siga o Roteiro Essencial acima.",
                            "Dia 6 (Magia ou História): Bate-volta OBRIGATÓRIO: Estúdios Harry Potter (Warner Bros - compre meses antes!) OU Castelo de Windsor (onde o Rei mora).",
                            "Dia 7 (Universidades ou Pedras): Bate-volta para Oxford/Cambridge (cidades universitárias) OU Stonehenge e Bath.",
                            "Dia 8 (Vistas): Sky Garden (grátis, mas reserve) ou The Shard. Últimas compras na Harrods."
                        ]
                    }
                },

                // SEUS LINKS DE AFILIADO
                links: {
                    hotel: "https://www.booking.com/searchresults.pt-br.html?ss=London&aid=304142", 
                    passeio: "https://www.civitatis.com/br/londres/", 
                    seguro: "https://www.segurospromo.com.br" 
                }
            }
        ],
        "Itália": [
            {
                name: "Roma",
                // FOTO: Coliseu (Wikimedia - Link Estável)
                imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/1280px-Colosseo_2020.jpg",
                tags: ["História", "Arte", "Gastronomia"],
                mapa: "https://goo.gl/maps/roma",
                clima: "Mediterrâneo. Verões quentes e secos (Agosto é sufocante). Invernos amenos e úmidos.",
                
                // TOP 10 PONTOS TURÍSTICOS
                pontos_turisticos: [
                    "1. Coliseu: O maior anfiteatro do mundo. Compre ingresso 'fura-fila' com acesso à Arena ou Subterrâneo.",
                    "2. Basílica de São Pedro (Vaticano): A maior igreja do cristianismo. A entrada é grátis, mas a fila é longa. Chegue às 7h.",
                    "3. Museus do Vaticano (Capela Sistina): Onde fica a obra de Michelangelo. Ingresso antecipado é OBRIGATÓRIO.",
                    "4. Fontana di Trevi: Jogue uma moeda para voltar a Roma. Vá ao nascer do sol ou de madrugada para ver sem multidão.",
                    "5. Panteão: O templo de todos os deuses, com a maior cúpula de concreto não armado do mundo. Agora a entrada é paga.",
                    "6. Fórum Romano e Palatino: O centro da vida na Roma Antiga. As ruínas são impressionantes (ingresso integrado com Coliseu).",
                    "7. Piazza Navona: A praça barroca mais bonita, com fontes de Bernini e artistas de rua.",
                    "8. Castelo de Sant'Angelo: Foi mausoléu, fortaleza e refúgio dos Papas. A vista do terraço para o Vaticano é linda.",
                    "9. Villa Borghese: Um parque em formato de coração. A Galeria Borghese tem obras de Bernini que parecem vivas (reserve antes).",
                    "10. Trastevere: O bairro boêmio com ruas de paralelepípedo, hera nas paredes e os melhores restaurantes."
                ],

                // TOP 10 GASTRONOMIA
                gastronomia: [
                    "1. Carbonara: O rei de Roma. Feito APENAS com ovo, queijo pecorino, guanciale (bochecha de porco) e pimenta. Nada de creme de leite!",
                    "2. Cacio e Pepe: Massa com queijo Pecorino Romano e pimenta preta. Simples, cremoso e intenso.",
                    "3. Pizza Romana: Diferente da napolitana, a massa é fininha e crocante (scrocchiarella).",
                    "4. Pizza al Taglio: Pizza quadrada vendida por peso (a fatia). Lanche rápido e barato perfeito.",
                    "5. Carciofi alla Giudia: Alcachofra frita inteira, típica do Gueto Judeu. Fica crocante como batata frita.",
                    "6. Suplì: Bolinho de arroz frito com recheio de mussarela (parece arancini, mas é romano).",
                    "7. Trippa alla Romana: Dobradinha com molho de tomate, hortelã e queijo pecorino.",
                    "8. Maritozzo: Um pão doce macio cortado ao meio e recheado com muito chantilly fresco. Café da manhã clássico.",
                    "9. Saltimbocca alla Romana: Filé de vitela com presunto cru e sálvia, cozido no vinho branco.",
                    "10. Gelato: Procure gelaterias 'Artigianale'. Fuja das que têm montanhas de sorvete colorido artificialmente."
                ],

                // TOP 10 CURIOSIDADES
                curiosidades: [
                    "1. Estado no Estado: O Vaticano é o menor país do mundo e fica dentro de Roma.",
                    "2. Gatos Livres: Os gatos de rua são protegidos por lei como 'patrimônio biocultural'. O Largo di Torre Argentina é um santuário de gatos.",
                    "3. SPQR: Você verá essa sigla em todo lugar (bueiros, prédios). Significa 'Senatus Populusque Romanus' (O Senado e o Povo Romano).",
                    "4. Água Potável: Existem mais de 2.500 fontes (Nasoni) com água potável e gelada grátis. Leve sua garrafinha.",
                    "5. A Boca da Verdade: A tampa de bueiro antiga que 'morde' a mão dos mentirosos (famosa no filme A Princesa e o Plebeu).",
                    "6. Estádio Moderno: O Coliseu tinha teto retrátil e elevadores para subir leões há 2.000 anos.",
                    "7. Capuccino: Italiano só toma capuccino no café da manhã. Pedir depois das 11h é considerado estranho (mas eles servem).",
                    "8. Domo Aberto: O buraco no teto do Panteão (Oculus) é aberto. Quando chove, a água cai lá dentro e escoa por furos no chão.",
                    "9. Moedas da Fontana: Cerca de 3.000 euros são jogados na Fontana di Trevi por dia (doados para a Caritas).",
                    "10. Sete Colinas: A cidade foi fundada sobre 7 colinas (Aventino, Palatino, Capitólio, etc.)."
                ],

                // TOP 10 CULTURA & RELIGIÃO
                religiao: [
                    "1. Audiência Papal: Às quartas-feiras, o Papa abençoa a multidão na Praça (precisa de convite grátis, mas antecedência).",
                    "2. Angelus: Aos domingos, o Papa aparece na janela ao meio-dia para rezar (não precisa de convite).",
                    "3. Basílica de São João de Latrão: É a verdadeira catedral de Roma (não é a de São Pedro!).",
                    "4. Scala Santa: A escada que Jesus teria subido no julgamento. Os fiéis só sobem de joelhos.",
                    "5. Catacumbas: Túneis subterrâneos onde os primeiros cristãos enterravam seus mortos e se escondiam.",
                    "6. São Paulo Fora dos Muros: Onde está o túmulo do apóstolo Paulo. Imponente e menos lotada.",
                    "7. Santa Maria Maior: Diz a lenda que nevou no local em pleno verão (agosto) indicando onde construir.",
                    "8. Moisés de Michelangelo: Fica na igreja San Pietro in Vincoli. Uma obra-prima acessível e pouco visitada.",
                    "9. Gueto Judeu: Uma área histórica vibrante com sinagoga e restaurantes de culinária judaico-romana (Kosher).",
                    "10. Vestimenta: Ombros e joelhos devem estar cobertos para entrar nas igrejas. Leve um lenço na bolsa no verão."
                ],

                // TOP 10 EVENTOS E ESTAÇÕES
                eventos_estacoes: [
                    "1. Páscoa (Semana Santa): A Via Crucis no Coliseu com o Papa é emocionante.",
                    "2. Natal: A missa do Galo e a benção 'Urbi et Orbi' atraem o mundo todo.",
                    "3. Aniversário de Roma (21 de Abril): Desfiles de gladiadores e recriações históricas no Circo Máximo.",
                    "4. Verão (Jun-Ago): Muito quente (40ºC). O cinema ao ar livre na Ilha Tiberina é tradição.",
                    "5. Lungotevere (Verão): As margens do rio Tibre enchem de barracas, bares e restaurantes temporários.",
                    "6. Maratona de Roma (Março): Correr passando pelo Coliseu e Vaticano é único.",
                    "7. Outono (Set-Nov): A luz dourada de Roma no outono é famosa ('Ottobrata Romana'). Melhor época.",
                    "8. Primo Maggio (1º de Maio): Show gratuito gigante na praça San Giovanni.",
                    "9. Temporada de Ópera (Verão): As óperas acontecem nas Termas de Caracalla, ao ar livre.",
                    "10. Alcachofra (Fev-Abr): A temporada da alcachofra romana é celebrada nos restaurantes."
                ],

                // TOP 10 INFO GERAIS
                info_gerais: [
                    "1. Moeda: Euro (€).",
                    "2. Visto: Schengen (não precisa até 90 dias).",
                    "3. Taxa de Turismo: É a mais alta da Europa. Cobrada por pessoa/noite no hotel (em dinheiro).",
                    "4. Coperto: Restaurantes cobram taxa de serviço fixa por pessoa ('Coperto') pelo pão e talheres. É normal.",
                    "5. Água: Peça 'Acqua del rubinetto' (torneira) se quiser grátis, mas é raro servirem em restaurante. Na rua, as fontes são ótimas.",
                    "6. Metrô: Só tem 3 linhas (A, B, C) e não cobre o centro histórico todo (porque acham ruínas ao cavar). Vai-se a pé ou ônibus.",
                    "7. Paralelepípedos (Sampietrini): O chão é irregular. Malas de rodinha sofrem e saltos altos quebram.",
                    "8. Banheiros: Difíceis de achar. Entre num bar, compre um café (1€) e use o banheiro.",
                    "9. Ingressos: Compre TUDO online meses antes. Coliseu e Vaticano esgotam rápido.",
                    "10. Fumar: Italianos fumam muito, inclusive em áreas externas de restaurantes."
                ],

                // TOP 10 DICAS ANTES DE IR
                antes_de_ir: [
                    "1. Café no Balcão: Tome o café em pé no balcão ('al banco'). Sentar na mesa custa o dobro ou triplo.",
                    "2. Não peça Carbonara no Jantar Turístico: Evite restaurantes com fotos de comida na porta e garçons chamando. São 'Tourist Traps'.",
                    "3. Valide o Bilhete: No ônibus/tram, você deve validar o bilhete na máquina amarela assim que entrar. A multa é alta.",
                    "4. Ônibus 64: Liga a estação Termini ao Vaticano. É famoso por ser a linha favorita dos batedores de carteira.",
                    "5. Madrugada na Fontana: Quer a Fontana di Trevi vazia? Vá entre 6h e 7h da manhã.",
                    "6. Domingo Grátis: No primeiro domingo do mês, o Coliseu é grátis (mas a fila é desumana). Evite se quiser conforto.",
                    "7. Uber é caro: Em Roma, só existe Uber Black. Táxi comum é mais barato (use o app FreeNow).",
                    "8. Peça o Vinho da Casa: 'Vino della casa' geralmente é bom e barato (vem em jarra).",
                    "9. Não coma na escadaria: Comer sentado na Escadaria Espanhola (Piazza di Spagna) dá multa.",
                    "10. Roma Pass: Avalie se vale a pena. Inclui transporte e entradas, mas precisa usar muito para compensar."
                ],

                // --- NOVO: NÚMEROS IMPORTANTES (ROMA) ---
                numeros: [
                    "1. 112 (Número Único Europeu): Emergências gerais (Polícia, Ambulância, Bombeiros).",
                    "2. 113 (Polícia do Estado): Ocorrências criminais.",
                    "3. 118 (Emergência Médica): Ambulância direta.",
                    "4. (+39) 06 688 9661 (Consulado do Brasil): Fica na Piazza Navona (Palazzo Pamphilj).",
                    "5. 060608 (Turismo Roma): Central de informações turísticas e culturais da prefeitura.",
                    "6. (+39) 06 65951 (Aeroporto Fiumicino): Informações de voos internacionais.",
                    "7. (+39) 06 3570 (Rádio Táxi): A maior cooperativa de táxis de Roma.",
                    "8. 06 57003 (Polícia Municipal): Para multas, trânsito e objetos perdidos.",
                    "9. (+39) 06 68351 (Hospital Santo Spirito): O hospital mais antigo da Europa, perto do Vaticano (para emergências).",
                    "10. 800 118 800 (Atac): Informações sobre transporte público (ônibus e metrô)."
                ],

                // --- NOVO: RISCOS E ERROS (ROMA) ---
                riscos: [
                    "1. Carteiristas no Ônibus 64: A linha Termini-Vaticano é lendária pelos furtos. Mochila para frente e mão no bolso sempre.",
                    "2. Gladiadores do Coliseu: Homens vestidos de gladiadores oferecem fotos. Se você tirar, eles cobram 20 ou 50 euros de forma agressiva. Combine preço ANTES ou ignore.",
                    "3. Restaurantes com Menu em 10 línguas: Se o cardápio tem fotos e bandeirinhas de países, a comida é congelada e cara. Fuja.",
                    "4. Golpe do 'Presente': Em praças, vendedores africanos colocam pulseiras ou rosários na sua mão/ombro dizendo 'é presente'. Depois exigem pagamento.",
                    "5. Taxistas em Fiumicino: Pegue a fila oficial. Motoristas que abordam no saguão ('Táxi, Sir?') são ilegais e cobram o dobro. A tarifa para o centro (Muralhas Aurelianas) é FIXA (aprox. 50€).",
                    "6. Vestimenta no Vaticano: Regata, shorts curtos e saias acima do joelho são barrados na Basílica e Museus. Você vai perder o ingresso. Leve um lenço para se cobrir.",
                    "7. Atravessar a Rua: As faixas de pedestre são 'sugestões'. O romano dirige rápido. Faça contato visual com o motorista e vá com decisão, mas cuidado.",
                    "8. Água Cara em Trailer: Os trailers de lanche perto do Coliseu vendem água a 4€ ou 5€. Compre no mercado ou encha nas fontes grátis.",
                    "9. Validar Ticket de Trem: Se for pegar trem regional (para o aeroporto ou outra cidade), valide o bilhete nas máquinas verdes na plataforma ANTES de embarcar.",
                    "10. Agendamento Coliseu: Não adianta ter o Roma Pass se você não agendar o horário no site oficial. Muita gente é barrada por isso."
                ],
                // COLE O ROTEIRO ABAIXO:
                roteiros: {
                    "curto": {
                        titulo: "Roteiro Express (1 a 2 Dias)",
                        texto: [
                            "Dia 1 (Roma Antiga): Comece cedo no Coliseu, Fórum Romano e Palatino (Compre ingresso antecipado!). Tarde: Caminhada pelo Panteão e Fontana di Trevi (jogue a moeda).",
                            "Dia 2 (Vaticano e Boemia): Manhã nos Museus do Vaticano (Capela Sistina) e Basílica de São Pedro. Noite: Jantar no bairro de Trastevere (a alma romana)."
                        ]
                    },
                    "medio": {
                        titulo: "Roteiro Essencial (3 a 5 Dias)",
                        texto: [
                            "Dias 1 e 2: Siga o Roteiro Express acima.",
                            "Dia 3 (La Dolce Vita): Piazza Navona, Campo de' Fiori e Piazza di Spagna (escadaria). Tarde: Pôr do sol na Villa Borghese (parque) ou Terraço do Pincio.",
                            "Dia 4 (Fé e História): Basílica de Santa Maria Maggiore e Castel Sant'Angelo (vista incrível do Vaticano).",
                            "Dia 5 (Subterrâneo): Catacumbas de São Calisto na Via Ápia Antiga (Roma cristã primitiva). É impressionante."
                        ]
                    },
                    "longo": {
                        titulo: "Roteiro Completo (7+ Dias)",
                        texto: [
                            "Dias 1 a 5: Siga o Roteiro Essencial acima.",
                            "Dia 6 (Bate-volta Imperial): Vá a Tivoli visitar a Villa d'Este (jardins com centenas de fontes renascentistas).",
                            "Dia 7 (Bate-volta Histórico): Pegue o trem rápido para Nápoles/Pompeia (puxado, mas possível) ou Florença (1h30 de trem).",
                            "Dia 8 (Relax): Compras na Via del Corso e o 'Buraco da Fechadura' (Buco della Serratura) no monte Aventino."
                        ]
                    }
                },


                // SEUS LINKS DE AFILIADO
                links: {
                    hotel: "https://www.booking.com/searchresults.pt-br.html?ss=Rome&aid=304142", 
                    passeio: "https://www.civitatis.com/br/roma/", 
                    seguro: "https://www.segurospromo.com.br" 
                }
            },
            {
                name: "Milão",
                // FOTO: Duomo di Milano (Wikimedia/Unsplash)
                imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Facade_-_Duomo_-_Milan_2014_%289%29.JPG/500px-Facade_-_Duomo_-_Milan_2014_%289%29.JPG",
                tags: ["História", "Moda", "Gastronomia"],
                mapa: "https://goo.gl/maps/milao",
                clima: "Continental. Verão muito quente e úmido. Inverno frio e cinzento (neblina é comum). Primavera/Outono são ideais.",
                
                // TOP 10 PONTOS TURÍSTICOS
                pontos_turisticos: [
                    "1. Duomo de Milão: A catedral gótica mais famosa. Subir aos terraços (de elevador ou escada) é obrigatório para ver a cidade e os Alpes.",
                    "2. Galleria Vittorio Emanuele II: O 'salão de visitas' de Milão. Teto de vidro, chão de mosaico e lojas de luxo (Prada, Gucci).",
                    "3. A Última Ceia (Cenacolo): A pintura de Da Vinci. Fica na igreja Santa Maria delle Grazie. Precisa reservar com 3 meses de antecedência.",
                    "4. Castello Sforzesco: Uma fortaleza medieval gigante no centro. Abriga museus e tem um parque lindo atrás (Parco Sempione).",
                    "5. Navigli: O bairro dos canais (projetados por Da Vinci). É o coração da vida noturna e do famoso 'Aperitivo'.",
                    "6. Teatro alla Scala: A casa de ópera mais famosa do mundo. O interior é de ouro e veludo vermelho.",
                    "7. Pinacoteca de Brera: No bairro boêmio de Brera. Um dos museus mais importantes da Itália (tem obras de Rafael e Caravaggio).",
                    "8. Quadrilátero da Moda: Via Montenapoleone e Via della Spiga. Onde estão as vitrines mais caras e elegantes do planeta.",
                    "9. Estádio San Siro: O templo do futebol (Milan e Inter). O museu e o tour são incríveis para fãs de esporte.",
                    "10. Piazza Gae Aulenti: A face moderna de Milão. Arranha-céus espelhados e o Bosco Verticale (prédio floresta)."
                ],

                // TOP 10 GASTRONOMIA
                gastronomia: [
                    "1. Risotto alla Milanese: Arroz amarelo (açafrão), cremoso. Muitas vezes servido com Ossobuco.",
                    "2. Cotoletta alla Milanese: Bife de vitela empanado e frito na manteiga (parece nosso bife à milanesa, mas com osso e mais grosso).",
                    "3. Aperitivo: Não é um prato, é uma instituição. Entre 18h e 21h, você paga o drink (10-15 euros) e come à vontade no buffet do bar.",
                    "4. Panzerotto do Luini: Um pastel frito recheado (tomate e mussarela) clássico, perto do Duomo. Tem fila, mas anda rápido.",
                    "5. Panettone: Nasceu aqui. Em Milão, come-se o ano todo (na confeitaria Marchesi é divino), não só no Natal.",
                    "6. Ossobuco: A carne da canela do boi, cozida lentamente até desmanchar.",
                    "7. Polenta: Prato básico do norte da Itália. Com queijo, cogumelos ou carne.",
                    "8. Gorgonzola: O queijo azul famoso vem da cidade vizinha de Gorgonzola. É muito usado em molhos.",
                    "9. Negroni Sbagliato: Um drink inventado em Milão (Bar Basso). É um Negroni que 'deu errado' (usa espumante em vez de gin).",
                    "10. Michetta: O pãozinho típico de Milão, oco por dentro e crocante."
                ],

                // TOP 10 CURIOSIDADES
                curiosidades: [
                    "1. O Touro da Sorte: Na Galleria, tem um mosaico de touro no chão. Dizem que pisar nas 'partes íntimas' dele e girar 3 vezes traz sorte. Tem um buraco no chão de tanta gente girar.",
                    "2. Da Vinci Viveu Aqui: Leonardo viveu anos em Milão (patrocinado pelos Sforza), não só em Florença. Por isso os canais e a Santa Ceia estão aqui.",
                    "3. Mediolanum: O nome antigo (romano) significava 'no meio da terra' (planície).",
                    "4. Capital da Moda: A Fashion Week de Milão é uma das 'Big Four' do mundo, junto com Paris, Londres e NY.",
                    "5. Metrô M4: A nova linha azul liga o aeroporto de Linate ao centro em 15 minutos (inaugurou recentemente).",
                    "6. Cidade dos Elétricos: Os bondes amarelos (Tram) antigos ainda circulam e são um charme da cidade.",
                    "7. O Dedo do Meio: Na frente da Bolsa de Valores (Piazza Affari), tem uma estátua gigante de um dedo médio levantado (obra de Maurizio Cattelan).",
                    "8. Madonnina: A estátua dourada de Maria no topo do Duomo. Por lei antiga, nenhum prédio podia ser mais alto que ela (o arranha-céu Pirelli teve que colocar uma réplica dela no topo para 'obedecer').",
                    "9. Starbucks: A Itália resistiu muito, mas a Starbucks Reserve Roastery em Milão é considerada a mais bonita do mundo (num prédio histórico dos correios).",
                    "10. Happy Hour Real: O Aperitivo milanês é tão farto que substitui o jantar para muitos turistas (chamam de 'Apericena')."
                ],

                // TOP 10 CULTURA & RELIGIÃO
                religiao: [
                    "1. Duomo (Catedral): Levou quase 600 anos para ser concluído. Tem mais de 3.400 estátuas na fachada.",
                    "2. Basílica de Santo Ambrósio: Padroeiro de Milão. Uma das igrejas mais antigas, exemplo perfeito do estilo românico.",
                    "3. San Maurizio al Monastero Maggiore: Chamada de 'Capela Sistina de Milão'. A fachada é simples, mas por dentro é inteira coberta de afrescos maravilhosos.",
                    "4. Ossário de San Bernardino: Uma capela decorada inteiramente com crânios e ossos humanos. Macabro e fascinante.",
                    "5. Rito Ambrosiano: A missa em Milão segue um rito litúrgico ligeiramente diferente do resto da Igreja Católica (o Carnaval aqui acaba um pouco depois).",
                    "6. Santa Maria delle Grazie: Patrimônio da UNESCO, onde fica a Última Ceia no refeitório.",
                    "7. Cemitério Monumental: Um museu a céu aberto. Os túmulos são esculturas artísticas grandiosas.",
                    "8. Comunidade Internacional: Milão é a cidade mais internacional da Itália, com templos de várias religiões.",
                    "9. Scala de Milão: A abertura da temporada de ópera (7 de dezembro, dia de Santo Ambrósio) é o evento social mais importante do ano na Itália.",
                    "10. Design Week: Em abril (Salone del Mobile), a cidade vira uma galeria de arte. Cultura pura nas ruas."
                ],

                // TOP 10 EVENTOS E ESTAÇÕES
                eventos_estacoes: [
                    "1. Semana de Moda (Fev e Set): A cidade lota de modelos, fotógrafos e celebridades. Preços de hotel triplicam.",
                    "2. Salone del Mobile (Abril): A maior feira de design do mundo. Festas e exposições (Fuorisalone) por toda a cidade.",
                    "3. Grande Prêmio de Monza (Set): A Fórmula 1 acontece no autódromo vizinho (parque de Monza). A cidade veste vermelho Ferrari.",
                    "4. Natal: O mercado de Natal na praça do Duomo e a árvore de Swarovski na Galleria são lindos.",
                    "5. Agosto (Ferragosto): A cidade ESVAZIA. Os milaneses vão para a praia. Muitas lojas e restaurantes fecham por 2 semanas.",
                    "6. Liquidações (Saldi): Janeiro e Julho. Descontos reais nas grifes. Filas nas portas das lojas.",
                    "7. Oh Bej! Oh Bej! (Dez): Feira tradicional de Natal perto do Castelo Sforzesco.",
                    "8. Verão (Jun-Ago): Muito quente e úmido. Os mosquitos atacam (leve repelente).",
                    "9. Inverno (Dez-Fev): Frio úmido, mas raramente neva forte. Ótimo para museus e chocolate quente.",
                    "10. Carnaval Ambrosiano: Acontece alguns dias depois do carnaval oficial (a quaresma começa mais tarde aqui)."
                ],

                // TOP 10 INFO GERAIS
                info_gerais: [
                    "1. Aeroportos: Tem 3. Malpensa (MXP - longe, voos internacionais), Linate (LIN - dentro da cidade, voos curtos) e Bergamo/Orio (BGY - low cost/Ryanair).",
                    "2. Transporte: O sistema ATM (Metrô, Bonde, Ônibus) é excelente. Use o cartão contactless direto na catraca.",
                    "3. Coperto: Restaurantes cobram taxa de serviço fixa por pessoa (2 a 5 euros) só por sentar ('pane e coperto'). É normal.",
                    "4. Água: Tem fontes de água potável (Draghi Verdi - dragões verdes) pela cidade. Pode encher a garrafa.",
                    "5. Café: No balcão é barato (1.50 euro). Sentado na mesa é mais caro. Na Itália, Cappuccino é só de manhã.",
                    "6. Tomada: Tipo L (três pinos em linha) ou tipo C (dois pinos). Leve adaptador universal.",
                    "7. Gorjeta: Não é obrigatória como nos EUA. Arredondar a conta é gentileza.",
                    "8. Tickets de Trem: Se for viajar de trem regional, VALIDE o bilhete nas máquinas verdes antes de embarcar ou leva multa.",
                    "9. Segurança: Segura, mas cuidado com batedores de carteira no Metrô e Estação Central.",
                    "10. Horários: O jantar é cedo para padrões latinos (19h30-20h30). Cozinhas fecham às 22h ou 23h."
                ],

                // TOP 10 DICAS ANTES DE IR
                antes_de_ir: [
                    "1. Reserve a Última Ceia: Os ingressos abrem com 3 meses de antecedência e esgotam em MINUTOS. Se não conseguir, tente tours guiados (mais caros).",
                    "2. Dress Code no Duomo: Ombros e joelhos cobertos. Eles barram mesmo no calor. Leve um lenço na bolsa.",
                    "3. Malpensa Express: O trem que liga o aeroporto Malpensa ao centro (Cadorna ou Centrale) é a melhor opção. Táxi é caríssimo (100 euros fixo).",
                    "4. Bate-voltas: Milão é a melhor base para explorar o norte. Veneza, Verona, Lago de Como, Suíça... tudo perto de trem.",
                    "5. Segunda-feira: Muitos museus fecham. Verifique antes de ir.",
                    "6. Uber: Existe, mas é caro (Uber Black). O app 'FreeNow' ou táxis oficiais são mais comuns.",
                    "7. Aperitivo em Navigli: Chegue cedo (18h30) para pegar mesa na beira do canal. É a experiência mais milanesa possível.",
                    "8. Terraço da Rinascente: A loja de departamentos ao lado do Duomo tem um bar no último andar com vista para as gárgulas da igreja. Entrada grátis (paga o que consumir).",
                    "9. Cuidado com Pombos e Milho: Na praça do Duomo, homens vão colocar milho na sua mão para os pombos virem e tirarem foto. Depois cobram dinheiro agressivamente. Diga NÃO.",
                    "10. Golpes de 'Presente': Pulseirinhas da amizade ou anéis perto do Castelo. Não deixe colocarem nada em você."
                ],

                // --- NOVO: NÚMEROS IMPORTANTES (MILÃO) ---
                numeros: [
                    "1. 112: Número Único de Emergência Europeu (Polícia, Bombeiros, Ambulância).",
                    "2. (+39) 02 7771: Polícia Local (vigilância urbana).",
                    "3. (+39) 02 7730 681 (Consulado do Brasil): Fica na Corso Europa, 13.",
                    "4. (+39) 02 232323 (Aeroporto Malpensa): Informações.",
                    "5. (+39) 02 4040: Rádio Táxi (um dos principais).",
                    "6. (+39) 02 8585: Outra companhia de táxi grande.",
                    "7. ATM Infoline: (+39) 02 48607607 (Transporte público).",
                    "8. Ospedale Niguarda: Grande hospital de referência.",
                    "9. Guardia Medica Turistica: Assistência médica para turistas (via Canova).",
                    "10. Lost & Found (Município): Via Friuli 30, para achados e perdidos."
                ],

                // --- NOVO: RISCOS E ERROS (MILÃO) ---
                riscos: [
                    "1. O Golpe da Pulseirinha: O ERRO Nº 1. Em frente ao Castello Sforzesco, homens tentam amarrar uma 'fita da amizade' no seu pulso à força. Se amarrarem, exigem dinheiro. Cruzes os braços e continue andando.",
                    "2. Batedores de Carteira no Metrô: Principalmente na Linha Amarela (M3) e na Estação Centrale. Mochila sempre na frente.",
                    "3. Comer na Praça do Duomo: Restaurantes com vista direta para o Duomo são 'Pega-Turista'. Comida medíocre e preços abusivos. Ande 2 quarteirões para dentro.",
                    "4. Achar que Lago de Como é longe: É um erro não ir. Fica a 40 min de trem. É um dos lugares mais lindos do mundo.",
                    "5. Entrar na ZTL de carro: Se alugar carro, CUIDADO. O centro é Zona de Tráfego Limitado (Area C). Entrar sem pagar a taxa gera multa automática por câmera.",
                    "6. Não validar ticket de trem: Em trens regionais (Trenord), se não carimbar o bilhete na máquina na plataforma antes de entrar, a multa é de 50 euros na hora.",
                    "7. Agosto Fantasma: Viajar em meados de agosto achando que vai fazer compras. Muitas lojas familiares fecham para férias.",
                    "8. Café 'al banco' vs 'al tavolo': Pedir café na mesa custa o dobro ou triplo. Faça como os locais: beba em pé no balcão.",
                    "9. Fumar em local proibido: Milão tem leis rígidas proibindo fumar em parques, pontos de ônibus e perto de pessoas. Multas altas.",
                    "10. Selfie Stick no Museu: A maioria dos museus proíbe paus de selfie. Guarde para não levar bronca."
                ],

                // --- NOVO: ROTEIRO AUTOMÁTICO (MILÃO) ---
                roteiros: {
                    "curto": {
                        titulo: "Roteiro Express (1 a 2 Dias)",
                        texto: [
                            "Dia 1 (O Ícone): Manhã no Duomo de Milão (suba nos terraços de elevador, a vista é única). Atravesse a Galleria Vittorio Emanuele II (pise no touro). Almoço: Panzerotto no Luini (clássico rápido). Tarde: Castelo Sforzesco.",
                            "Dia 2 (Arte e Canais): Veja 'A Última Ceia' de Da Vinci (Reserve 3 meses antes!). Fim de tarde: Navigli. Sente num bar na beira do canal e peça um 'Aperitivo' (paga o drink, come à vontade no buffet)."
                        ]
                    },
                    "medio": {
                        titulo: "Roteiro Essencial (3 a 5 Dias)",
                        texto: [
                            "Dias 1 e 2: Siga o Roteiro Express acima.",
                            "Dia 3 (Luxo e Charme): Bairro de Brera (Pinacoteca e ruas charmosas). Tarde: Quadrilátero da Moda (Via Montenapoleone) para ver as vitrines mais chiques do mundo.",
                            "Dia 4 (Lago de Como): Bate-volta OBRIGATÓRIO. Pegue o trem para Varenna ou Como. É o cenário de Star Wars e 007. Pegue o barco pelo lago.",
                            "Dia 5 (Futebol ou Modernidade): Visite o estádio San Siro (Milan/Inter) OU a Piazza Gae Aulenti (Milão futurista e Bosco Verticale)."
                        ]
                    },
                    "longo": {
                        titulo: "Roteiro Completo (7+ Dias)",
                        texto: [
                            "Dias 1 a 5: Siga o Roteiro Essencial acima.",
                            "Dia 6 (Cidade Alta): Bate-volta para Bergamo. Suba o funicular para a 'Città Alta'. É uma cidade medieval muralhada linda.",
                            "Dia 7 (Verona): Bate-volta para Verona (cidade de Romeu e Julieta). Fica a 1h15 de trem. Veja a Arena (coliseu) de lá.",
                            "Dia 8 (Compras ou Café): Outlet Serravalle (se quiser compras de grife com desconto) ou dia lento na Starbucks Reserve Roastery (a mais bonita do mundo)."
                        ]
                    }
                },

                // SEUS LINKS DE AFILIADO
                links: {
                    hotel: "https://www.booking.com/searchresults.pt-br.html?city=-121726&aid=304142", 
                    passeio: "https://www.civitatis.com/br/milao/", 
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
      // 2. NOVO: ROTEIRO AUTOMÁTICO (INSERIDO AQUI)
    // Se a cidade tiver roteiros cadastrados, mostra a caixa. Se não, esconde.
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
    // Formata a lista de dias
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
// FUNÇÃO PARA ABRIR O MODAL DA CIDADE
function openCity(cityName) {
    let cidade = null;
    for (const cont in worldData) {
        for (const pais in worldData[cont]) {
            cidade = worldData[cont][pais].find(c => c.name === cityName);
            if (cidade) break;
        }
        if (cidade) break;
    }

    if (!cidade) return;

    document.getElementById('modalTitle').innerText = cidade.name;
    document.getElementById('modalImg').style.backgroundImage = `url(${cidade.imagem})`;
    document.getElementById('modalSubtitle').innerText = cidade.clima;
    
    // Mostra/Esconde Custos
    const costSection = document.getElementById('costSection');
    if (cidade.estimativa_custos) {
        costSection.classList.remove('hidden');
        document.getElementById('costFood').innerText = cidade.estimativa_custos.alimentacao;
        document.getElementById('costHotel').innerText = cidade.estimativa_custos.hospedagem;
        document.getElementById('costTransport').innerText = cidade.estimativa_custos.transporte;
        document.getElementById('costTickets').innerText = cidade.estimativa_custos.atracoes;
    } else {
        costSection.classList.add('hidden');
    }

    // Google Maps
    const mapLink = document.getElementById('modalMapLink');
    if (cidade.mapa) {
        mapLink.href = cidade.mapa;
        mapLink.classList.remove('hidden');
    } else {
        mapLink.classList.add('hidden');
    }

    renderModalMenu(cidade);
    document.getElementById('cityModal').classList.add('active');
}

// FUNÇÃO PARA FECHAR O MODAL
function closeModal() {
    document.getElementById('cityModal').classList.remove('active');
    // Volta para o menu principal do modal ao fechar
    backToMenu();
}

// FUNÇÃO PARA VOLTAR AO MENU DE CATEGORIAS DENTRO DO MODAL
function backToMenu() {
    document.getElementById('modalMenu').classList.remove('hidden');
    document.getElementById('modalDetails').classList.add('hidden');
}