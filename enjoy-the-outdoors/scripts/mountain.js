"use strict";

const mountainData = document.getElementById("mountainInformation");
const tBody = document.getElementById("tableBody");


function loadSearchType() {
  mountainData.innerHTML = "";
  let option = new Option("select...", "");
  mountainData.appendChild(option);
}

function loadTableBody() {
  let selectValue = mountainData.value;
}

function buildmountainRow(tableBody, mountainData) {
  let row = tableBody.insertRow(-1);

  let cell1 = row.insertCell(0);
  cell1.innerText = mountainData.Name;

  let cell2 = row.insertCell(1);
  cell2.innerText = mountainData.Elivation;

  let cell3 = row.insertCell(2);
  cell3.innerText = mountainData.Effort;

  let cell4 = row.insertCell(3);
  cell4.innerText = mountainData.Img;

  let cell5 = row.insertCell(4);
  cell5.innerText = mountainDatak.Desc;

  let cell6 = row.insertCell(5);
  cell6.innerText = mountainData.Coords;
