const emailaddress = document.getElementById("emailaddress");

// Email obfuscator script 2.1 by Tim Williams, University of Arizona
// Random encryption key feature coded by Andrew Moulden
// This code is freeware provided these four comment lines remain intact
// A wizard to generate this code is at http://www.jottings.com/obfuscator/
{ coded = "bhxNh1v2C.2v1Bn0Bbn+bSn0vIdN.ndNrBbdN.nd"
  key = "Ve2QX0ZNRHjo4pOEAnJCIiMPlyStYrbK17wT5hWs6dmL9D8fukGvcxg3UqFazB"
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
emailaddress.innerHTML = "<a href='mailto:"+link+"'>Email</a>"
}

//https://www.glaslicht.nl/crypt/ 



const send = document.getElementById("contact-send");

send.addEventListener("click", notify);

function notify() {
    alert("Because of a lot of spam the contact form is temporarily not in use. Please contact your personal customer care representative");
}

