const {ipcRenderer} = require("electron");

var tabs = document.getElementById("Tabs");
var tab;

var tabNames = ["Inventario", "Ventas", "Compras", "Historial", "Proveedores"];

var tabActives = {
  "Inventario": "Tab-active",
  "Ventas": "Tab-inactive",
  "Compras": "Tab-inactive",
  "Historial": "Tab-inactive",
  "Proveedores": "Tab-inactive"
};

function fillTabs (names, activity) {

  for (var name of names) {

    var tabButton = document.createElement("a");
    tabButton.setAttribute("href", name+".html");

    var tabDiv = document.createElement("div");
    tabDiv.id = name;
    tabDiv.classList.add(activity[name]);
    tabDiv.classList.add("tab-button");
    tabDiv.classList.add("float-left");
    tabDiv.classList.add("display-container");

    var tabP = document.createElement("p");
    tabP.classList.add("display-middle");
    tabP.innerHTML = name;


    tabDiv.appendChild(tabP);
    tabButton.appendChild(tabDiv);
    tabs.appendChild(tabButton);

  }
}

fillTabs(tabNames, tabActives);

for (tab of tabs.children) {

  tab.addEventListener("click", function (event) {

    var tabSelected = event.target;

    if(tabSelected.classList.contains("display-middle")){

      tabSelected = tabSelected.parentElement;

    }

    var allTabs = document.getElementById("Tabs");

    if(tabSelected.classList.contains("Tab-inactive")){

      for (var activable of allTabs.children) {

        if(activable.id == tabSelectedName){

          activable.classList.remove("Tab-inactive");
          activable.classList.add("Tab-active");

        } else {

          activable.classList.add("Tab-inactive");
          activable.classList.remove("Tab-active");

        }

      }

    }

  });

}
