// --- CONFIGURAÇÃO GLOBAL ---
const countryFlags = { "Brasil": "br", "Portugal": "pt", "Marrocos": "ma", "Japão": "jp", "Austrália": "au" };
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
                
                // SEUS LINKS DE AFILIADO (ID 304142)
                links: {
                    hotel: "https://www.booking.com/searchresults.pt-br.html?city=-644910&aid=304142", 
                    passeio: "https://www.civitatis.com/br/gramado/", 
                    seguro: "https://www.segurospromo.com.br" 
                }
            },
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