const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: (64*30),
        height: (64*14)+34,
        titleBarStyle: 'hidden',
        titleBarOverlay: {
            color: '#3A3A3A',
            symbolColor: '#E39347',
            height: 30
        }
    })

    win.loadURL('http://localhost:3000/')
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0){createWindow()}
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})