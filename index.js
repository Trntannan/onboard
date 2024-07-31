const { app, BrowserWindow } = require('electron')
const path = require('path')

const createWindow = () => {
    const win = new BrowserWindow({ width: 800, height: 600, })
    win.loadFile(path.join(__dirname, 'open-first.html')) 
}

app.whenReady().then(() => {
    createWindow()
    app.on('activate', () => BrowserWindow.getAllWindows().length === 0 && createWindow())
})

app.on('window-all-closed', () => process.platform !== 'darwin' && app.quit())