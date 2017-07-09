var i = 1;
$('.datepicker').pickadate({
   selectMonths: true,
   selectYears: 15
});
document.getElementById("fileb").addEventListener('click', addTour, false);
document.getElementById("addlink").addEventListener('mousedown', addLink, false);
function addTour() {
   document.getElementById("trbtn").classList.remove("disabled");
   document.getElementById("trbtn").style.display = "block";
}
function addLink() {
   var container = document.getElementById("ylist");
   container.innerHTML +=
      '<div class="row">\
         <div class="col s1">\
            <i class="fa fa-youtube-play fa-2x"></i>\
         </div>\
         <div class="input-field col s10">\
            <input id="ytube' + i +'" type="text" class="validate">\
            <label data-error="Invalid Link!" for="ytube">YouTube Link</label>\
         </div>\
      </div>\
   ';
   i+=1;
}