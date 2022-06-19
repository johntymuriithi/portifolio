/*------openign the menu-----*/
function openNav(){
  document.getElementById("mysidenav").style.width = "92%";
}
/*--------ABOUT PAGE--------*/
function mySELF(evt, cityName){
    var i, tablinks, tabcontent;

    tabcontent = document.getElementsByClassName("tabcontent");
    //hide them
    for(i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";

}
document.getElementById("defaultOpen").click();