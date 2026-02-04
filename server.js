const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve os arquivos da pasta public (HTML, CSS, JS)
app.use(express.static('public'));

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
    res.sendFile(path.join(__dirname, 'emoji.json'));
});

app.listen(PORT, () => {
    console.log(`🚀 Valadão World Tour online em http://localhost:${PORT}`);
});