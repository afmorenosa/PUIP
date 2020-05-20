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

const {app} = require("electron").remote;
const path = require("path");

var tabs = document.getElementById("Tabs");
var tab;

var tabNames = ["Inventario", "Ventas", "Compras", "Historial", "Proveedores"];


/**
 * This function generate the work spaces tabs in the top of the window.
 *
 * @param {array} names [the names of the tabs.]
 * @param {object} activity [class for active or inactive tabs.]
 *
 */
function fillTabs (names, activity) {
  for (var name of names) {

    var tabButton = document.createElement("a");
    tabButton.setAttribute("href", path.join(app.getAppPath(),"html/"+name+".html"));

    var tabDiv = document.createElement("div");
    tabDiv.id = name;
    tabDiv.classList.add(activity[name]);
    tabDiv.classList.add("tab-button");
    tabDiv.classList.add("float-left");
    tabDiv.classList.add("pointer");
    tabDiv.classList.add("display-container");

    var tabP = document.createElement("p");
    tabP.classList.add("display-middle");
    tabP.innerHTML = name;


    tabDiv.appendChild(tabP);
    tabButton.appendChild(tabDiv);
    tabs.appendChild(tabButton);

  }
}
