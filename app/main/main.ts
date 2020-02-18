import { format } from 'url'

import { BrowserWindow, app } from 'electron'
import isDev from 'electron-is-dev'
import { resolve } from 'app-root-path'

app.allowRendererProcessReuse = true

app.on('ready', async () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    webPreferences: {
      nodeIntegration: true
    },
  })

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
    if (isDev) { mainWindow.webContents.openDevTools() }
  })

  const devPath = 'http://localhost:1124'
  const prodPath = format({
    pathname: resolve('app/renderer/.parcel/production/index.html'),
    protocol: 'file:',
    slashes: true
  })
  const url = isDev ? devPath : prodPath

  mainWindow.setMenu(null)
  mainWindow.loadURL(url).then(() => { console.log('loaded') })
})

app.on('window-all-closed', app.quit)
