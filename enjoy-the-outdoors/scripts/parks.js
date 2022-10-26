"use strict";

const locationList = document.getElementById("parkInformation");
const tBody = document.getElementById("tableBody");
const byType = document.getElementById("byType");
const byState = document.getElementById("byState");

function loadSearchType() {
  locationList.innerHTML = "";
  let option = new Option("select...", "");
  locationList.appendChild(option);

  if (byType.checked) {
    console.log("By Type");
    parkTypesArray.forEach((parks) => {
      let option = new Option(parks, parks);
      locationList.appendChild(option);
    });
  } else if (byState.checked) {
    console.log("By State");
    locationsArray.forEach((state) => {
      let option = new Option(state, state);
      locationList.appendChild(option);
    });
  }
}
function loadTableBody() {
  let selectValue = locationList.value;
  tBody.innerHTML = "";
  if (byState.checked) {
    nationalParksArray.forEach((park) => {
      if (selectValue === park.State) {
        buildParkRow(tBody, park);
      }
    });
  } else if (byType.checked) {
    nationalParksArray.forEach((park) => {
      if (park.LocationName.includes(selectValue)) {
        buildParkRow(tBody, park);
      }
    });
  }
}

function buildParkRow(tableBody, nationalPark) {
  let row = tableBody.insertRow(-1);

  let cell1 = row.insertCell(0);
  cell1.innerText = nationalPark.LocationName;

  let cell2 = row.insertCell(1);
  cell2.innerText = nationalPark.Address;

  let cell3 = row.insertCell(2);
  cell3.innerText = nationalPark.City;

  let cell4 = row.insertCell(3);
  cell4.innerText = nationalPark.State;

  let cell5 = row.insertCell(4);
  cell5.innerText = nationalPark.ZipCode;

  let cell6 = row.insertCell(5);
  cell6.innerText = nationalPark.Phone;

  let cell7 = row.insertCell(6);
  if(nationalPark.Visit){
    const a = document.createElement("a");
    let link = document.createTextNode(nationalPark.Visit);
    a.appendChild(link);
    a.innerText = "visit";
    a.href = nationalPark.Visit;
    a.target = "_blank";
    cell7.appendChild(a);
  }
}

window.onload = () => {
  onclick = loadSearchType;

  locationList.onchange = loadTableBody;
};
