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

/** @file admin.js
 * This file recieves and process the info that are recieved from the
 * Admin Layout.
 */

const { ipcRenderer, remote } = require("electron");

// Frame buttons handlers

$("#frame-close").click(() => {
    remote.getCurrentWindow().close();
});

$("#frame-maximize").click(() => {
    let window = remote.getCurrentWindow();

    if (window.isMaximized()) {
        window.unmaximize();
        $("#frame-maximize").find($(".fa-window-restore"))
            .removeClass("fa-window-restore")
            .addClass("fa-window-maximize");
    } else {
        window.maximize();
        $("#frame-maximize").find($(".fa-window-maximize"))
            .removeClass("fa-window-maximize")
            .addClass("fa-window-restore");
    }
});

$("#frame-iconize").click(() => {
    remote.getCurrentWindow().minimize();
});



// Page request

$(".sidebar .nav-link").click((event) => {
    let item = $(event.currentTarget);

    item.blur();

    if(item.siblings(".nav-treeview").length == 0) {
        $(".sidebar *").removeClass("active");

        item.addClass("active");

        item.parent().parents(".menu-open").children(".nav-link").addClass("active");
    }


    if (item.attr("href") != "#") {
        ipcRenderer.send("load-new-page", item.attr("href"));
    }
});

ipcRenderer.on("page-html", (event, arg) => {
    // On Windows need replace backslashes with slashes
    arg = arg.replace(/\\/g, "/");
    $("#content").load(encodeURI(arg), () => {
        $(".file").fileinput({
            theme: "fa"
        });

        /// Add cute scrollbars to body
        $("body").overlayScrollbars({
            scrollbars: {
                autoHide: "leave"
            }
        });
    });
});
