"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below



if (document.querySelector('.fields')) {

  const buttonFit = document.querySelector('.button-fit--js');


  buttonFit.addEventListener('click', (e) => {

    let grossAmount = document.getElementById("gross").value;
    let tax = document.getElementById("tax").value;
    let rangeFrom = parseFloat(document.getElementById("range-from").value);
    let rangeTo = parseFloat(document.getElementById("range-to").value);
    const net = document.querySelector('.main__net-amount--js');

    console.log(tax);
    console.log(grossAmount);
    console.log(net);

    net.innerHTML = (grossAmount / tax).toFixed(2);
    let netAmmount = (grossAmount / tax).toFixed(2);

    if (document.querySelector('.fields')) {
      let form = document.getElementsByTagName("main")[0];

      // creates a <table> element and a <tbody> element
      let tbl = document.createElement("table");
      tbl.style = "table-layout: fixed; border-collapse: collapse; border: 3px solid lightgray;";

      let tblBody = document.createElement("tbody");

      while (rangeFrom < (rangeTo + 0.01)) {
        let row = document.createElement("tr");

        let cell = document.createElement("td");
        cell.style = "padding: 16px";
        let cellText1 = document.createTextNode(netAmmount + " : " + rangeFrom.toFixed(2));
        let cellText2 = document.createTextNode(" = " + (netAmmount / rangeFrom).toFixed(2));

        rangeFrom = rangeFrom + 0.01;

        cell.appendChild(cellText1);
        cell.appendChild(cellText2);
        row.appendChild(cell);

        // add the row to the end of the table body
        tblBody.appendChild(row);
      }

      // put the <tbody> in the <table>
      tbl.appendChild(tblBody);
      // appends <table> into <body>
      form.appendChild(tbl);

    }


  })

}





