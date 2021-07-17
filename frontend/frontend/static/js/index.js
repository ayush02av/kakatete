var gameBox = document.getElementById("gamebox");
var game = window.location.href.split("/")[4].split("=")[1].replace("#", "");
gameBox.innerHTML = game;

// let menuToggle = document.querySelector('.toggle');
// let navigation = document.querySelector('.navigation');
// menuToggle.onclick = function(){
//     menuToggle.classlist.toggle('active');
//     navigation.classList.toggle('active');
// }

    let list= document.querySelectorAll('.list');
    for (let i=0; i<list.length; i++){
        list[i].onclick = function(){
            let j=0;
            while(j < list.length){
                list[j++].className = 'list';
            }
            list[i].className = 'list active';
        }
    }
   /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  