/*
 * PUIP.  Practic Useful Inventary Program.
 * Copyright (C) 2020  Andŕes Felipe Moreno Sarria
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

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

app.on("ready", createWindow);
