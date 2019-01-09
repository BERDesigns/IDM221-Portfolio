var x = 0;
function openNav() {
  document.getElementById("mySidenav").style.zIndex = "1";
  document.getElementById("mySidenav").style.height = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.height = "0";
  document.getElementById("mySidenav").style.zIndex = "-2";
}

$(window).scroll(function(){
  document.getElementById("mySidenav").style.top = parseInt(window.scrollY-10).toString()+"px";
  document.getElementById("hamburger").style.top = parseInt(window.scrollY).toString()+"px";
});
