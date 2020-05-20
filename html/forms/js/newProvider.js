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

var form = document.getElementById("new-provider-form");

function newProvider() {

  var data = [form.children["Nombre"].value, form.children["Telefono"].value,
  form.children["Direccion"].value, form.children["NIT"].value,
  form.children["Tags"].value];

  data = data.map(function (value) {
    return "\"" + value + "\"";
  });

  ipcRenderer.send("newProviderCreated", data);


}
