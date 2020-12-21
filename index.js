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

/** @file index.js
 * This is the entry point for the app, and the main process.
 */

const { app, BrowserWindow, ipcMain } = require('electron');
const path = require("path");
const url = require("url");

/// This object should store the Main Window
let mainWindow = null;

function createWindow () {
    mainWindow = new BrowserWindow({
        show: false,
        frame: false,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            contextIsolation: false
        }
    });

    mainWindow.loadURL(url.format({
        pathname: path.join(app.getAppPath(), "/src/layouts/admin/admin.html"),
        protocol: "file:",
        slashes: true
    }));
}

app.on("ready", () => {
    createWindow();

    mainWindow.maximize();
    mainWindow.show();
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
