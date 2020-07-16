const { app, BrowserWindow, Menu } = require('electron')

function createWindow () {
  // Create the browser window.
  const win = new BrowserWindow({
    fullscreenable: false,
    width: 300,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  
  Menu.setApplicationMenu(Menu.buildFromTemplate([{
        label: "File",
        role: "fileMenu"
    },
    {
        label: "Edit",
        role: "editMenu"
    },
    {
        label: "Help",
        role: "help"
    }]))
    

  // and load the index.html of the app.
  win.loadFile('app.html')

  // Open the DevTools.
  //win.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.


/*

br: line break
hr: horizontal rule

h1~h6: creates headings

label

copy

settings: defines document settings



Parameters

hide (copy): indicates that specific copy field should be hidden. Overrides document settings


hideall (settings): if present, hides every copy field in the document by default


*/