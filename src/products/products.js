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

/** @file routes.js
 * This file contains and handle the loads of js.
 */

const path = require("path");
const url = require("url");

module.exports = {
    getHtml: function (page) {
        return url.format({
            pathname: path.join(__dirname, "/products.html"),
            protocol: "file:",
            slashes: true
        });
    }
};
