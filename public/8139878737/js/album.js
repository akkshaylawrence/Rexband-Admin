function addRow() {
   var number = document.getElementById('nosong').value;
   number = parseInt(number);
   var container = document.getElementById("list");
   while (container.hasChildNodes()) {
      container.removeChild(container.lastChild);
   }
   for (i = 0; i < number; i++) {
      var div = document.createElement("div");
      div.class = "row song" + (i + 1);
      div.style = "margin-top: 10px;padding: 5px 20px 20px 20px;border: 1px solid #9e9e9e;"
      var div1 = document.createElement("div");
      div1.class = "col.s12";
      var inputn = document.createElement("input");
      inputn.type = "text";
      inputn.id = "song" + (i + 1);
      var label = document.createElement("label");
      label.for = "song" + (i + 1);
      label.innerHTML = 'Enter song name'
      container.appendChild(div);
      div.appendChild(div1);
      div1.appendChild(label);
      div1.appendChild(inputn);
   }
}