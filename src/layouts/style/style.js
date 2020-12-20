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

/** @file style.js
 * This file include in the html file in which is included all the CSS
 * links to work properly.
 */

const { app } = require("electron").remote;
const path = require("path");
const url = require("url");
const $ = require("jquery");

require("bootstrap");
require("admin-lte");
require("@fortawesome/fontawesome-free/js/all.min.js");

function addCssFile(route) {
    let link = $("<link />",{
        rel: "stylesheet",
        type: "text/css",
        href: url.format({
            pathname: path.join(app.getAppPath(),
                                route),
            protocol: "file:",
            slashes: true
        })
    });

    $("head").append(link);
}

addCssFile("/node_modules/bootstrap/dist/css/bootstrap.min.css");
addCssFile("/node_modules/admin-lte/dist/css/adminlte.min.css");
addCssFile("/src/layouts/style/style.css");
