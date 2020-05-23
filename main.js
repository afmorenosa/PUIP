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

const electron = require("electron");
const {app, BrowserWindow, ipcMain} = electron;
const sqlite = require("sqlite3");
const path = require("path");
const url = require("url");
const fs = require('fs');

app.allowRendererProcessReuse = false;
var dataBase = new sqlite.Database(path.join(__dirname, "sql/database.db"), function (err) {
  if (err) {
    return console.error(err.message);
  } else {
    console.log("Connected to database");
  }
});

dataBase.run("PRAGMA foreign_keys=ON;");

var sqlNames = ["Inventario", "Ventas", "Compras", "Stats", "Proveedores"];

for (var sqlName of sqlNames){
  dataBase.run(fs.readFileSync(path.join(__dirname, "sql/" + sqlName + ".sql"))
  .toString(), function (err) {
    if (err) {
      return console.error(err.message);
    }
  });
}


var mainWin;
var processor;
var newProvider;

function createWindow () {
  // Create the browser mainWindow.
  mainWin = new BrowserWindow({
    width: 600,
    minWidth: 600,
    height: 600,
    minHeight: 600,
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

/**
 * Buttons actions
 */

/**
 * Tabs
 */

ipcMain.on("loadTab", function (event, value) {

  dataBase.all("SELECT * FROM "+ value.name +";",
  function (err, table) {
    if (err) {
      return console.error(err.message);
    }
    mainWin.send("updateTable", table);
  });

});

/**
 *Prooveedores
 */

var newProvider;

/**
 * Open a new window for add a new provider
 */
ipcMain.on("new-provider", function (event, value) {

  newProvider = new BrowserWindow({
    maxWidth: 600,
    minWidth: 600,
    maxHeight: 300,
    minHeight: 300,
    webPreferences: {
      nodeIntegration: true
    }
  });

  newProvider.loadURL(url.format({
    pathname: path.join(__dirname,"html/forms/newProvider.html"),
    protocol: "file:",
    slashes: true
  }));

})

/**
 * Update the database and send an event for update the provider table.
 */
ipcMain.on("newProviderCreated", function (event, value) {

  dataBase.run("INSERT INTO Proveedores (Nombre, Telefono, Direccion, Identificacion, Tags) VALUES ("
  .concat(value) + ");",
  function (err) {
    if (err) {
      return console.error(err.message);
    }
  });

  newProvider.close();
  newProvider = null;

  dataBase.all("SELECT * FROM Proveedores;",
  function (err, table) {
    if (err) {
      return console.error(err.message);
    }
    mainWin.send("updateTable", table);
  });

})


/**
 * Update the database and send an event for update the provider table.
 */
ipcMain.on("providerRemoved", function (event, value) {

  dataBase.run("DELETE FROM Proveedores WHERE id=" + value + ";",
  function (err) {
    if (err) {
      return console.error(err.message);
    }
  });

  dataBase.all("SELECT * FROM Proveedores;",
  function (err, table) {
    if (err) {
      return console.error(err.message);
    }
    mainWin.send("updateTable", table);
  });


})
