$('.datepicker').pickadate({
   selectMonths: true,
   selectYears: 15
});
document.getElementById("fileb").addEventListener('click',addTour,false);
function addTour(){
   document.getElementById("trbtn").classList.remove("disabled");
   document.getElementById("trbtn").style.display="block";
}