!function(e){var n={};function t(l){if(n[l])return n[l].exports;var c=n[l]={i:l,l:!1,exports:{}};return e[l].call(c.exports,c,c.exports,t),c.l=!0,c.exports}t.m=e,t.c=n,t.d=function(e,n,l){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:l})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(t.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)t.d(l,c,function(n){return e[n]}.bind(null,c));return l},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(module,exports,__webpack_require__){"use strict";eval('\n\n// service worker registration - remove if you\'re not going to use it\n\nif (\'serviceWorker\' in navigator) {\n  window.addEventListener(\'load\', function () {\n    navigator.serviceWorker.register(\'serviceworker.js\').then(function (registration) {\n      // Registration was successful\n      console.log(\'ServiceWorker registration successful with scope: \', registration.scope);\n    }, function (err) {\n      // registration failed :(\n      console.log(\'ServiceWorker registration failed: \', err);\n    });\n  });\n}\n\n// place your code below\n\n\n\nif (document.querySelector(\'.fields\')) {\n\n  const buttonFit = document.querySelector(\'.button-fit--js\');\n\n\n  buttonFit.addEventListener(\'click\', (e) => {\n\n    let grossAmount = document.getElementById("gross").value;\n    let tax = document.getElementById("tax").value;\n    let rangeFrom = parseFloat(document.getElementById("range-from").value);\n    let rangeTo = parseFloat(document.getElementById("range-to").value);\n    const net = document.querySelector(\'.main__net-amount--js\');\n\n    console.log(tax);\n    console.log(grossAmount);\n    console.log(net);\n\n    net.innerHTML = (grossAmount / tax).toFixed(2);\n    let netAmmount = (grossAmount / tax).toFixed(2);\n\n    if (document.querySelector(\'.fields\')) {\n      let form = document.getElementsByTagName("main")[0];\n\n      // creates a <table> element and a <tbody> element\n      let tbl = document.createElement("table");\n      tbl.style = "table-layout: fixed; border-collapse: collapse; border: 3px solid lightgray;";\n\n      let tblBody = document.createElement("tbody");\n\n      while (rangeFrom < (rangeTo + 0.01)) {\n        let row = document.createElement("tr");\n\n        let cell = document.createElement("td");\n        cell.style = "padding: 16px";\n        let cellText1 = document.createTextNode(netAmmount + " : " + rangeFrom.toFixed(2));\n        let cellText2 = document.createTextNode(" = " + (netAmmount / rangeFrom).toFixed(2));\n\n        rangeFrom = rangeFrom + 0.01;\n\n        cell.appendChild(cellText1);\n        cell.appendChild(cellText2);\n        row.appendChild(cell);\n\n        // add the row to the end of the table body\n        tblBody.appendChild(row);\n      }\n\n      // put the <tbody> in the <table>\n      tbl.appendChild(tblBody);\n      // appends <table> into <body>\n      form.appendChild(tbl);\n\n    }\n\n\n  })\n\n}\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1Q0FBdUMsMkJBQTJCLDZCQUE2Qjs7QUFFL0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxHQUFHOztBQUVIIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gc2VydmljZSB3b3JrZXIgcmVnaXN0cmF0aW9uIC0gcmVtb3ZlIGlmIHlvdSdyZSBub3QgZ29pbmcgdG8gdXNlIGl0XG5cbmlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCdzZXJ2aWNld29ya2VyLmpzJykudGhlbihmdW5jdGlvbiAocmVnaXN0cmF0aW9uKSB7XG4gICAgICAvLyBSZWdpc3RyYXRpb24gd2FzIHN1Y2Nlc3NmdWxcbiAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsIHdpdGggc2NvcGU6ICcsIHJlZ2lzdHJhdGlvbi5zY29wZSk7XG4gICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgLy8gcmVnaXN0cmF0aW9uIGZhaWxlZCA6KFxuICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2VXb3JrZXIgcmVnaXN0cmF0aW9uIGZhaWxlZDogJywgZXJyKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbi8vIHBsYWNlIHlvdXIgY29kZSBiZWxvd1xuXG5cblxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWVsZHMnKSkge1xuXG4gIGNvbnN0IGJ1dHRvbkZpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tZml0LS1qcycpO1xuXG5cbiAgYnV0dG9uRml0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblxuICAgIGxldCBncm9zc0Ftb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3Jvc3NcIikudmFsdWU7XG4gICAgbGV0IHRheCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGF4XCIpLnZhbHVlO1xuICAgIGxldCByYW5nZUZyb20gPSBwYXJzZUZsb2F0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmFuZ2UtZnJvbVwiKS52YWx1ZSk7XG4gICAgbGV0IHJhbmdlVG8gPSBwYXJzZUZsb2F0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmFuZ2UtdG9cIikudmFsdWUpO1xuICAgIGNvbnN0IG5ldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX19uZXQtYW1vdW50LS1qcycpO1xuXG4gICAgY29uc29sZS5sb2codGF4KTtcbiAgICBjb25zb2xlLmxvZyhncm9zc0Ftb3VudCk7XG4gICAgY29uc29sZS5sb2cobmV0KTtcblxuICAgIG5ldC5pbm5lckhUTUwgPSAoZ3Jvc3NBbW91bnQgLyB0YXgpLnRvRml4ZWQoMik7XG4gICAgbGV0IG5ldEFtbW91bnQgPSAoZ3Jvc3NBbW91bnQgLyB0YXgpLnRvRml4ZWQoMik7XG5cbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpZWxkcycpKSB7XG4gICAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibWFpblwiKVswXTtcblxuICAgICAgLy8gY3JlYXRlcyBhIDx0YWJsZT4gZWxlbWVudCBhbmQgYSA8dGJvZHk+IGVsZW1lbnRcbiAgICAgIGxldCB0YmwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XG4gICAgICB0Ymwuc3R5bGUgPSBcInRhYmxlLWxheW91dDogZml4ZWQ7IGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IGJvcmRlcjogM3B4IHNvbGlkIGxpZ2h0Z3JheTtcIjtcblxuICAgICAgbGV0IHRibEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XG5cbiAgICAgIHdoaWxlIChyYW5nZUZyb20gPCAocmFuZ2VUbyArIDAuMDEpKSB7XG4gICAgICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG5cbiAgICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIGNlbGwuc3R5bGUgPSBcInBhZGRpbmc6IDE2cHhcIjtcbiAgICAgICAgbGV0IGNlbGxUZXh0MSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG5ldEFtbW91bnQgKyBcIiA6IFwiICsgcmFuZ2VGcm9tLnRvRml4ZWQoMikpO1xuICAgICAgICBsZXQgY2VsbFRleHQyID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCIgPSBcIiArIChuZXRBbW1vdW50IC8gcmFuZ2VGcm9tKS50b0ZpeGVkKDIpKTtcblxuICAgICAgICByYW5nZUZyb20gPSByYW5nZUZyb20gKyAwLjAxO1xuXG4gICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQoY2VsbFRleHQxKTtcbiAgICAgICAgY2VsbC5hcHBlbmRDaGlsZChjZWxsVGV4dDIpO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbCk7XG5cbiAgICAgICAgLy8gYWRkIHRoZSByb3cgdG8gdGhlIGVuZCBvZiB0aGUgdGFibGUgYm9keVxuICAgICAgICB0YmxCb2R5LmFwcGVuZENoaWxkKHJvdyk7XG4gICAgICB9XG5cbiAgICAgIC8vIHB1dCB0aGUgPHRib2R5PiBpbiB0aGUgPHRhYmxlPlxuICAgICAgdGJsLmFwcGVuZENoaWxkKHRibEJvZHkpO1xuICAgICAgLy8gYXBwZW5kcyA8dGFibGU+IGludG8gPGJvZHk+XG4gICAgICBmb3JtLmFwcGVuZENoaWxkKHRibCk7XG5cbiAgICB9XG5cblxuICB9KVxuXG59XG5cblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n')}]);