if ( window.addEventListener ) {
    var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";
    window.addEventListener("keydown", function(e){
        kkeys.push( e.keyCode );
        if ( kkeys.toString().indexOf( konami ) >= 0 ) {
            alert("Hack!!");
            $('.game-header').css("background-image", "url(./assets/img/giphy.gif)");

            // $('.game-header').text("azeazezaeaze");
            $('.game-header').html("<center><h1><b> HACK !!!!!</b> </h1></center>");

            $('.game-header').css("color","#45f618")


            $('#intro').html("<div class=\"row text-white text-center wow fadeIn\" data-wow-delay=\"0.2s\"> <div class=\"col-md-4 col-sm-4\"> <a id=\"buttonAddUnit\" type=\"button\"  class=\"btn btn-outline-white btn-rounded wow fadeInUp\" data-wow-delay=\"0.2s\"  href=\"http://www.securite-routiere.gouv.fr/var/rout/storage/images/media/images/infograophie-vitesse-v3/340996-1-fre-FR/infograophie-vitesse-v3.jpg\" data-offset=\"100\">Vitesse</a> </div> <div class=\"col-md-4 col-sm-4\"> <a type=\"button\"class=\"btn btn-outline-white btn-rounded wow fadeInUp\" data-wow-delay=\"0.2s\" href=\"http://www.securite-routiere.gouv.fr/var/rout/storage/images/media/images/alcool-et-conduite/333189-1-fre-FR/alcool-et-conduite.jpg\" data-offset=\"100\">Alcool et drogue</a> </div> <div class=\"col-md-4 col-sm-4\"><a id=\"buttonAddGeneratorCeption\" type=\"button\" onclick=\"addGeneratorCeptions()\" class=\"btn btn-outline-white btn-rounded wow fadeInUp\" data-wow-delay=\"0.2s\" href=\"http://www.securite-routiere.gouv.fr/var/rout/storage/images/media/images/chiffres-telephone4/42406-2-fre-FR/chiffres-telephone.jpg\" data-offset=\"100\">Téléphone </a> </div> </div>")
            $('#intro').css("background-image", "url(./assets/img/giphy.gif)");
        }
    }, true);
}