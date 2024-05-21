const { app, BrowserWindow } = require('electron')

app.whenReady()
    .then(function() {
        const janela = new BrowserWindow({
            height: 350,
            width: 300,
            frame: false
        })
        janela.loadFile("./public/index.html")
    })