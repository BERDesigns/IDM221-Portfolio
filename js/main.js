function openNav() {
  document.getElementById("mySidenav").style.zIndex = "2";
  document.ge
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

function openDropdown(projID) {
  if(projID==1) {
    document.getElementById("MHCCDropdown").style.zIndex = "1";
    document.getElementById("MHCCDropdown").style.height = "40%";
  }
  else if (projID==2) {
    document.getElementById("oldPortDropdown").style.zIndex = "1";
    document.getElementById("oldPortDropdown").style.height = "40%";
  }
  else if (projID==3) {
    document.getElementById("photosDropdown").style.zIndex = "1";
    document.getElementById("photosDropdown").style.height = "40%";
  }
  else if (projID==4) {
    document.getElementById("mayaDropdown").style.zIndex = "1";
    document.getElementById("mayaDropdown").style.height = "40%";
  }
  else if (projID==5) {
    document.getElementById("illusDropdown").style.zIndex = "1";
    document.getElementById("illusDropdown").style.height = "40%";
  }
}

function closeDropdown(projID) {
  if(projID==0) {
    document.getElementById("MHCCDropdown").style.height = "0";
    document.getElementById("MHCCDropdown").style.zIndex = "-2";
    document.getElementById("oldPortDropdown").style.height = "0";
    document.getElementById("oldPortDropdown").style.zIndex = "-2";
    document.getElementById("photosDropdown").style.height = "0";
    document.getElementById("photosDropdown").style.zIndex = "-2";
    document.getElementById("mayaDropdown").style.height = "0";
    document.getElementById("mayaDropdown").style.zIndex = "-2";
    document.getElementById("illusDropdown").style.height = "0";
    document.getElementById("illusDropdown").style.zIndex = "-2";
  }
  if(projID==1) {
    document.getElementById("MHCCDropdown").style.height = "0";
    document.getElementById("MHCCDropdown").style.zIndex = "-2";
  }
  if(projID==2) {
    document.getElementById("oldPortDropdown").style.height = "0";
    document.getElementById("oldPortDropdown").style.zIndex = "-2";
  }
  if(projID==3) {
    document.getElementById("photosDropdown").style.height = "0";
    document.getElementById("photosDropdown").style.zIndex = "-2";
  }
  if(projID==4) {
    document.getElementById("mayaDropdown").style.height = "0";
    document.getElementById("mayaDropdown").style.zIndex = "-2";
  }
  if(projID==5) {
    document.getElementById("illusDropdown").style.height = "0";
    document.getElementById("illusDropdown").style.zIndex = "-2";
  }
}
