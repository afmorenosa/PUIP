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

const {ipcRenderer} = require("electron");

var tabs = document.getElementById("Tabs");
var providerTable = document.getElementById("provider-table");
var tab;

var tabActives = {
  "Inventario": "Tab-inactive",
  "Ventas": "Tab-inactive",
  "Compras": "Tab-inactive",
  "Historial": "Tab-inactive",
  "Proveedores": "Tab-active"
};

fillTabs(tabNames, tabActives);

/**
 * Open a form window for adding a new provider when click in add a new icon
 */
document.getElementById("new-provider").addEventListener("click",
 function (event) {
   ipcRenderer.send("new-provider", null);
 });

/**
 * Update provider table
 */
ipcRenderer.on("updateTable", function (event, value) {
  providerTable.innerHTML = "<tr>"+
    "<th>id</th>"+
    "<th>Nombre</th>"+
    "<th>Telefono</th>"+
    "<th></th>"+
    "</tr>";

  var entries;
  var counter=0;

  for (entries of value) {
    counter += 1;
    var providerEntry = document.createElement("tr");

    var providerID = document.createElement("td");
    providerID.id = entries.id;
    providerID.classList.add("provider-id");
    providerID.classList.add("pointer");
    providerID.innerHTML = counter;

    var providerName = document.createElement("td");
    providerName.classList.add("provider-name");
    providerName.classList.add("pointer");
    providerName.innerHTML = entries.Nombre;

    var providerTelephone = document.createElement("td");
    providerTelephone.classList.add("provider-telephone");
    providerTelephone.classList.add("pointer");
    providerTelephone.innerHTML = entries.Telefono;

    var providerEliminate = document.createElement("td");
    providerEliminate.classList.add("provider-remove");
    providerEliminate.innerHTML = "<img src=\"../assets/remove.svg\""+
     " class=\"provider-remove-button pointer\"/>";


    providerEntry.appendChild(providerID);
    providerEntry.appendChild(providerName);
    providerEntry.appendChild(providerTelephone);
    providerEntry.appendChild(providerEliminate);
    providerTable.appendChild(providerEntry);
  }

  activeRemoveButtons()

});

window.addEventListener("load", function (event) {
  console.log("Loaded");
  ipcRenderer.send("loadTab", {
    name: "Proveedores"
  });
});

function activeRemoveButtons() {
  var removeButtons = document.getElementsByClassName("provider-remove-button");
  var removeButton;

  for (removeButton of removeButtons) {
    removeButton.addEventListener("click", function (event) {
      var removedId = event.target.parentElement.parentElement.children[0].id;
      ipcRenderer.send("providerRemoved", removedId);
   });
  }

}
