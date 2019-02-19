function openNav() {
  document.getElementById("mySidenav").style.zIndex = "2";
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

function closeDropdown() {
  document.getElementById("designDropdown").style.height = "0";
  document.getElementById("designDropdown").style.zIndex = "-2";

  document.getElementById("mhcc-btn").classList.add("grayscale");
  document.getElementById("ber-btn").classList.add("grayscale");
  document.getElementById("necessities-btn").classList.add("grayscale");
  document.getElementById("maya-btn").classList.add("grayscale");
  document.getElementById("illustrator-btn").classList.add("grayscale");
}

function openDropdown(projID) {
  closeDropdown();

  document.getElementById("designDropdown").style.zIndex = "1";
  document.getElementById("designDropdown").style.height = "40%";
  document.getElementById("link-btn").style.display = "initial";

  switch (projID) {
    case 0:
      document.getElementById("title").innerHTML = "NULL";
      document.getElementById("description").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
      document.getElementById("link-btn").href = "javascript:void(0)";

      document.getElementById("mhcc-btn").classList.add("grayscale");
      document.getElementById("ber-btn").classList.add("grayscale");
      document.getElementById("necessities-btn").classList.add("grayscale");
      document.getElementById("maya-btn").classList.add("grayscale");
      document.getElementById("illustrator-btn").classList.add("grayscale");
      break;
    case 1:
      document.getElementById("title").innerHTML = "MANTUA HAVERFORD COMMUNITY CENTER";
      document.getElementById("description").innerHTML = "In 2018, I worked with the then-acting Director for the Mantua Haverford Community Center, Richard Purdie, on a professional website for the community center. Prior to this project, the center had no active online presence, apart from a small Facebook page. I designed the website to reflect the ideals of the center, and to actively show and highlight the services offered by the center. It was made using the Wordpress website building tool.";
      document.getElementById("link-btn").href = "https://mantuahaverfordcommunitycenter.wordpress.com/";

      document.getElementById("mhcc-btn").classList.remove("grayscale");
      document.getElementById("ber-btn").classList.add("grayscale");
      document.getElementById("necessities-btn").classList.add("grayscale");
      document.getElementById("maya-btn").classList.add("grayscale");
      document.getElementById("illustrator-btn").classList.add("grayscale");
      break;
    case 2:
      document.getElementById("title").innerHTML = "OLD PORTFOLIO";
      document.getElementById("description").innerHTML = "In 2016, I designed my own professional portfolio, with no prior web development experience. The website highlighted all of my skills and abilities of the time, with a minimalist design to keep the focus on the content, rather than the page. It was made using HTML, CSS, light Javascript, and the Bootstrap CSS library. The site also utilized the Google Maps API to put a tracker on a random spot in the world as a way for me to experiment with the API.";
      document.getElementById("link-btn").href = "http://berivera1.github.io/";

      document.getElementById("ber-btn").classList.remove("grayscale");
      document.getElementById("mhcc-btn").classList.add("grayscale");
      document.getElementById("necessities-btn").classList.add("grayscale");
      document.getElementById("maya-btn").classList.add("grayscale");
      document.getElementById("illustrator-btn").classList.add("grayscale");
      break;
    case 3:
      document.getElementById("title").innerHTML = "THE BER NECESSITIES";
      document.getElementById("description").innerHTML = "In 2016, I took a class on digital photography using a DSLR camera. I needed a portfolio to upload all of the work I was proud of, so I created The BER Necessities, a page to display all of my camerawork. It highlights all of my photography from that class and onwards. All my photography and digital imaging work up until 2017 can be found on the site. It was made using the Wordpress website building tool.";
      document.getElementById("link-btn").href = "https://thebernecessities.wordpress.com/";

      document.getElementById("necessities-btn").classList.remove("grayscale");
      document.getElementById("ber-btn").classList.add("grayscale");
      document.getElementById("mhcc-btn").classList.add("grayscale");
      document.getElementById("maya-btn").classList.add("grayscale");
      document.getElementById("illustrator-btn").classList.add("grayscale");
      break;
    case 4:
      document.getElementById("title").innerHTML = "MAYA PROJECTS";
      document.getElementById("description").innerHTML = "";
      document.getElementById("link-btn").style.display = "none";

      document.getElementById("maya-btn").classList.remove("grayscale");
      document.getElementById("ber-btn").classList.add("grayscale");
      document.getElementById("necessities-btn").classList.add("grayscale");
      document.getElementById("mhcc-btn").classList.add("grayscale");
      document.getElementById("illustrator-btn").classList.add("grayscale");
      break;
    case 5:
      document.getElementById("title").innerHTML = "ILLUSTRATOR PROJECTS";
      document.getElementById("description").innerHTML = "";
      document.getElementById("link-btn").style.display = "none";

      document.getElementById("illustrator-btn").classList.remove("grayscale");
      document.getElementById("ber-btn").classList.add("grayscale");
      document.getElementById("necessities-btn").classList.add("grayscale");
      document.getElementById("maya-btn").classList.add("grayscale");
      document.getElementById("mhcc-btn").classList.add("grayscale");
      break;
  }
}
