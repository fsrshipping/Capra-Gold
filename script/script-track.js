$(document).ready(function() {

    function checkPage(link) {
        let request = new XMLHttpRequest();  
        request.open('GET', link, true);
        request.onreadystatechange = function(){
            if (request.readyState === 4){
                if (request.status === 404) { 
                    $("#tracking-main").load("trk/404.html"); 
                }  
            }
        };
        request.send();
    }

    $("#trackbutton").click(function() {
        let getNumber = $("#trackingnumber").val();
        let link = "https://capragold-logistics.netlify.app/trk/" + getNumber + ".html";
        checkPage(link);      
        $("#tracking-main").load(link);
    });
    

    $('#trackingnumber').on('keypress', function (e) {
        if(e.which === 13){
            let getNumber = $("#trackingnumber").val();
            let link = "https://capragold-logistics.netlify.app/trk/" + getNumber + ".html";
            checkPage(link)
            $("#tracking-main").load(link);
        }
    });

});