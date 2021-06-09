// Navigation menu open and close

const navOpen = document.getElementById("nav__open");
const navClose = document.getElementById("nav__close");
const navList = document.getElementById("nav__list");

navOpen.addEventListener("click", function() {
    navList.classList.add("nav__list__open");
})

navClose.addEventListener("click", function() {
    navList.classList.remove("nav__list__open");
})

// Services background slider //





// Footer Email address obfuscator 

const emailaddress = document.getElementById("footer_emailaddress");

// Email obfuscator script 2.1 by Tim Williams, University of Arizona
// Random encryption key feature coded by Andrew Moulden
// This code is freeware provided these four comment lines remain intact
// A wizard to generate this code is at http://www.jottings.com/obfuscator/
{ coded = "wGQZGJzol.ozJ40y4w0+wT0yzpmZ-0mZA4wm@JpG4o.wzp"
  key = "wEfMmjstTqzKkPg3c419eAGCuRoZ67hXNiQ5xvanWSlr8F2YUVpH0yOLIDdbJB"
  shift=coded.length
  link=""
  for (i=0; i<coded.length; i++) {
    if (key.indexOf(coded.charAt(i))==-1) {
      ltr = coded.charAt(i)
      link += (ltr)
    }
    else {     
      ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length
      link += (key.charAt(ltr))
    }
  }
emailaddress.innerHTML = "<a class='footer__address__email' href='mailto:"+link+"'><i class='far fa-envelope footer__address__icon'></i>  Email</a>"
}

// https://www.glaslicht.nl/crypt/ 
