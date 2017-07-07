function addRow() {
   var number = document.getElementById('nosong').value;
   number = parseInt(number);
   var container = document.getElementById("list");
   while (container.hasChildNodes()) {
      container.removeChild(container.lastChild);
   }
   for (i = 0; i < number; i++) {
      var j = i + 1;
      var div = document.createElement("div");
      div.className = "row song" + (i + 1);
      div.style = "margin-top: 10px;padding: 5px 20px 20px 20px;border: 1px solid #9e9e9e;"
//
      var div1 = document.createElement("div");
      div1.className = "col.s12";
//
      var inputn = document.createElement("input");
      inputn.type = "text";
      inputn.id = "song" + j;
//
      var label = document.createElement("label");
      label.for = "song" + j;
      label.innerHTML = 'Enter song name';
//
      var inputy = document.createElement("input");
      inputy.type = "text";
      inputy.id = "songY" + j;
//
      var label1 = document.createElement("label");
      label1.for = "songY" + j;
      label1.innerHTML = 'Enter YouTube link';
//
      var div3 = document.createElement("div");
      div3.className = "file-field input-field";
//
      var div4 = document.createElement("div");
      div4.className = "btn";
//
      var div5 = document.createElement("div");
      div5.className = "file-path-wrapper";
//
      var span = document.createElement("span");
      span.innerHTML = "Browse"
//
      var inputlf = document.createElement("input");
      inputlf.type = "file";
      inputlf.id = "file" + j;
//
      var inputlfn = document.createElement("input");
      inputlfn.type = "text";
      inputlfn.id = "filename" + j;
      inputlfn.placeholder="Lyrics Files";
      inputlfn.className = "file-path validate"
//
      var div6 = document.createElement("div");
      div6.className = "file-field input-field";
//
      var div7 = document.createElement("div");
      div7.className = "btn";
//
      var div8 = document.createElement("div");
      div8.className = "file-path-wrapper";
//
      var span1 = document.createElement("span");
      span1.innerHTML = "Browse"
//
      var inputlf1 = document.createElement("input");
      inputlf1.type = "file";
      inputlf1.id = "file1" + j;
//
      var inputlfn1 = document.createElement("input");
      inputlfn1.type = "text";
      inputlfn1.id = "filename1" + j;
      inputlfn1.placeholder="Chord Files";
      inputlfn1.className = "file-path validate";
//
      container.appendChild(div);
      div.appendChild(div1);
      div1.appendChild(label);
      div1.appendChild(inputn);
      div1.appendChild(label1);
      div1.appendChild(inputy);
      div1.appendChild(div3);
      div3.appendChild(div4);
      div3.appendChild(div5);
      div4.appendChild(span);
      div4.appendChild(inputlf);
      div5.appendChild(inputlfn);
      div1.appendChild(div6);
      div6.appendChild(div7);
      div6.appendChild(div8);
      div7.appendChild(span1);
      div7.appendChild(inputlf1);
      div8.appendChild(inputlfn1);
   }
   return;
}