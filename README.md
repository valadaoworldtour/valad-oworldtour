# 🌍 Valadão World Tour

> **Explore o Extraordinário.**
> Uma plataforma interativa de turismo que oferece guias detalhados, estimativas de custos reais e roteiros personalizados para os destinos mais incríveis do mundo.

![Status do Projeto](https://img.shields.io/badge/Status-Em_Desenvolvimento-blue?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)

## 📖 Sobre o Projeto

O **Valadão World Tour** é uma aplicação web Fullstack (Node.js + Vanilla JS) desenvolvida para ajudar viajantes a planejarem suas próximas aventuras. Diferente de blogs comuns, a plataforma foca em dados estruturados: **quanto custa realmente**, **qual o veredicto sobre a cidade** e **roteiros prontos** (curto, médio e longo prazo).

### ✨ Funcionalidades Principais

- **🗺️ Navegação por Continentes:** Menu lateral interativo organizando países e destinos.
- **💰 Custo Real:** Estimativa de gastos com comida, hospedagem, transporte e atrações baseada em dados reais.
- **⚖️ O Veredicto:** Análise rápida com "Melhor Época", "Ideal Para" e "Não Ideal Para".
- **📝 Roteiros Inteligentes:** Sugestões de itinerários de 3, 5 ou 7 dias.
- **🛂 Passaporte Virtual:** Sistema de gamificação com carimbos e medalhas (em desenvolvimento).
- **🎨 Design Imersivo:** Interface moderna com tema "Daytime Neon".

---

## 🚀 Tecnologias Utilizadas

### Front-end
- **HTML5 & CSS3:** Design responsivo com CSS Variables e Flexbox/Grid.
- **JavaScript (Vanilla):** Manipulação dinâmica do DOM e consumo de API.
- **Remix Icon:** Ícones modernos para interface.
- **Google Fonts:** Tipografia com *Orbitron* e *Montserrat*.

### Back-end
- **Node.js:** Ambiente de execução.
- **Express:** Framework para servir arquivos estáticos e criar a API JSON.
- **JSON Database:** Armazenamento leve de dados (Cidades, Custos, Emojis).

---

## 📂 Estrutura do Projeto

```text
valadao-world-tour/
├── public/              # Arquivos estáticos (Front-end)
│   ├── index.html       # Página principal
│   ├── style.css        # Estilos globais e tema Neon
│   └── script.js        # Lógica do front-end e fetchs
├── server.js            # Servidor Express e rotas da API
├── world.json           # Banco de dados dos destinos e roteiros
├── cidade1.json         # Banco de dados de custos (Financeiro)
├── emoji.json           # Mapeamento de bandeiras e ícones
└── package.json         # Dependências do projeto