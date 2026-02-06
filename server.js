const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Serve os arquivos da pasta public (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Rota para o world.json
app.get('/api/world', (req, res) => {
    res.sendFile(path.join(__dirname, 'world.json'));
});

// Rota para o cidade1.json (Custos)
app.get('/api/costs', (req, res) => {
    res.sendFile(path.join(__dirname, 'cidade1.json'));
});

// Rota para o emoji.json
app.get('/api/emojis', (req, res) => {
    const emojiPath = path.join(__dirname, 'emoji.json');
    if (fs.existsSync(emojiPath)) {
        res.sendFile(emojiPath);
    } else {
        // Retorna vazio se o arquivo não existir para não quebrar o site
        res.json({ countryFlags: {}, categoryEmojis: {} });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Valadão World Tour online em http://localhost:${PORT}`);
});