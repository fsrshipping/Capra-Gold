// EMAIL OBFUSCATOR 
const contactEmailaddress = document.getElementById("contact__emailaddress");

// Email obfuscator script 2.1 by Tim Williams, University of Arizona
// Random encryption key feature coded by Andrew Moulden
// This code is freeware provided these four comment lines remain intact
// A wizard to generate this code is at http://www.jottings.com/obfuscator/
{ coded = "wGQZGJzol.ozJ40y4w0+wT0yzpmZ.0mZA4wm@JpG4o.wzp"
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
contactEmailaddress.innerHTML = "<a class='contact__aside__email' href='mailto:"+link+"'><i class='far fa-envelope'></i>  Email</a>"
}

// https://www.glaslicht.nl/crypt/ 

// CONTACT FORM SUBMIT
const send = document.getElementById("contact-send");

send.addEventListener("click", notify);

function notify() {
    alert("Because of a lot of spam the contact form is temporarily not in use. Please contact your personal customer care representative");
}