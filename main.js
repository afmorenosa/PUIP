const electron = require('electron');
const path = require("path");
const url = require("url");

const {app, BrowserWindow, ipcMain} = electron;

var mainWin;
var processor;
var addInventaryCategory;

function createWindow () {
  // Create the browser mainWindow.
  mainWin = new BrowserWindow({
    width: 700,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWin.maximize();

  // and load the index.html of the app.
  mainWin.loadURL(url.format({
    pathname: path.join(__dirname,"index.html"),
    protocol: "file:",
    slashes: true
  }));

  processor = new BrowserWindow({
    show: false,
    webPreferences: {
      nodeIntegration: true
    }
  });

  processor.loadURL(url.format({
    pathname: path.join(__dirname,"processor/processor.html"),
    protocol: "file:",
    slashes: true
  }));


  // Open the DevTools.
  mainWin.webContents.openDevTools();

  mainWin.on("close", function () {
    mainWin = null;
    processor = null;
    app.quit();
  });

}

// This method will be called when Electron has finished
// initialization and is ready to create browser mainWindows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
