document.getElementById('pge').oncontextmenu = function(){return false};

function $1(id) {
    return document.getElementById(id)
}
// Les dimension de la grille, nombre de cases, largeur des cases et le jeu
var dim=10,nbrCse=dim*dim,wdtCse=36,gme=$1('pge');
gme.style.width=dim*(wdtCse+2)+'px';// ajustremant de la largeur
// Le nombre de mines et un tableau auxilliaire qui contiendra
// des entiers de 0 �  8 pour le nombre de mines voisines et des 9 pour les mines
var nbrMne=10,nbrMneVsn=[],tab=[];
var bombe_sound	 = new Audio("assets/raw/car_crash.mp3");
var chrone_on;
function game() {
    chrone_on = false
    console.log(chrone_on);

    $('#retry').hide();
    $1('pge').innerHTML='';
    // construction des cases du jeu
    for (i=0;i<nbrCse;i++) {

        tab[i]=i;nbrMneVsn[i]=0;// initialisation
        cse=document.createElement('div');
        cse.id='cse'+i;
        cse.className="cse";
        cse.setAttribute("onmousedown","WhichButton(event, this)");
        gme.appendChild(cse);
    }
    // Placement des mines et comptage
    // d : déplacements pour atteindre les cases voisines (Attention aux bords et changements de ligne)
    var nbr=nbrMne,d=[-dim-1,-dim,-dim+1,-1,+1,+dim-1,+dim,+dim+1];

    while (nbr--) {

        // Tirage aléatoire d'un élément de tab, splice renvoie cet élément sous forme de tableau d'un élément (d'où le [0]),
        // mais surtout met �  jour le tableau ce qui interdit les doublons dans le tirage !
        cseMne=tab.splice(Math.floor(Math.random()*tab.length),1)[0];
        nbrMneVsn[cseMne]=9;
        for (j=0;j<8;j++) {
            k=+cseMne+d[j];
            // S'assurer que les cases sont effectivement voisines (les colonnes ne différent que d'une unité)
            if (-1<k && k<nbrCse && Math.abs(cseMne%dim-k%dim)<2 && nbrMneVsn[k]!=9) {
                nbrMneVsn[k]++;
            }
        }
    }
    // Vérification
    //  for (i=0;i<nbrCse;i++)if (nbrMneVsn[i]){$1('cse'+i).innerHTML=nbrMneVsn[i]}
}
/////////////////AJOUT FONCTIONNALITE CLIQUE GAUCHE//////////////
function WhichButton(event) {
    if(!chrone_on) {
        chrono();
        chrone_on = true;
    }

    if(event.button == "2") {
        flag(event);
    }
    else if(event.button == "0") {
        detect(event);
    }
}

function detect(e) {
    if (e.target.id.substr(0,3)!='cse') {
        return;
    }
    var cse=e.target,nos=+cse.id.substr(3);// mine objet du DOM et son numéro (=>ligne et colonne inutiles)
    if (nbrMneVsn[nos]==9) {

        $1('cse'+nos).innerHTML = '<img src="assets/img/car.png" class="bombe" title="bombe"/>';
        bombe_sound.play();
        revealAll();

        clearTimeout(compte);
        rasee();
        document.getElementById('retry').style.display = "block";
        return
    }
    else {
        $1('cse'+nos).className+=" wht";// Blanchir la case
        $1('cse'+nos).style="";
        if (nbrMneVsn[nos]) {
            $1('cse'+nos).innerHTML=nbrMneVsn[nos];// Avec son numéro si non null
        }
        else {
            cseVsn(nos);// Sinon passer aux voisines
        }

        var nb_wht=0;
        var compteur=0;
        while(compteur<=99) {
            if($1('cse'+compteur).className == "cse wht" || $1('cse'+compteur).className == "cse wht wht") {
                nb_wht++;
            }
            compteur++;
        }
        if(nb_wht == 90) {
            clearTimeout(compte);
            document.getElementById('retry').style.display = "block";
            save_score_page();
            return

        }
    }
}

function cseVsn(n) {
    var j,k,d=[-dim-1,-dim,-dim+1,-1,+1,+dim-1,+dim,+dim+1];
    for (j=0;j<8;j++) {
        k=+n+d[j];// On blanchit les cases voisines non blanchies
        if (-1<k && k<nbrCse && Math.abs(n%dim-k%dim)<2 && !/wht/.test($1('cse'+k).className)) {
            $1('cse'+k).className+=" wht";
            if (nbrMneVsn[k]) {
                $1('cse'+k).innerHTML=nbrMneVsn[k]; // Avec leur numéro si non null
            }
            else {
                cseVsn(k);// Et passe aux voisines des vides
            }
        }
    }
}

function flag(event) {
    var cse=event.target, nos=+cse.id.substr(3);
    if($1('cse'+nos).className == "flag_here cse") {
        $1('cse'+nos).style = '';
        $1('cse'+nos).className = 'cse';
    }
    else if($1('cse'+nos).className!="cse wht") {
        $1('cse'+nos).style = 'background-image : url("assets/img/panneau_signal.jpg"); background-repeat:no-repeat; background-position: center;';
        $1('cse'+nos).className = "flag_here cse";
    }
}

function revealAll() {
    for(var i=0; i<100; i++) {
        e = $1('cse'+i);
        nos = e.id.substr(3);
        if (nbrMneVsn[nos]==9) {
            e.style = '';
            e.innerHTML = '<img src="assets/img/car.png" class="bombe" title="bombe"/>';
            e.className = 'cse';
        }
        else {
            e.className+=" wht";// Blanchir la case
            e.style="";
            if (nbrMneVsn[nos]) {
                e.innerHTML=nbrMneVsn[nos];// Avec son numéro si non null
            }
            else {
                cseVsn(nos);// Sinon passer aux voisines
            }
        }
    }
}


function save_score_page()  {

    $("#formtrophy").val(document.forsec.seca.value + "-" + document.forsec.secc.value)
    $('#score-display').append("<h3>Gagné en min -" + document.forsec.seca.value + " sec - " + document.forsec.secc.value + "</h3>");;
    $('#formtrophy').prop("disabled", true);
    $('#game_div').hide();
    $('#form-win').show();
    rasee();
    game();
}
/*=== Chrono === */

var centi=0; // initialise les dixtièmes
var secon=0; //initialise les secondes
var minu=0; //initialise les minutes

function chrono() {
    centi++; //incrémentation des dixièmes de 1
    if (centi>9) {
        centi=0;secon++;
    } //si les dixièmes > 9, on les réinitialise �  0 et on incrémente les secondes de 1
    if (secon>59) {
        secon=0;minu++
    } //si les secondes > 59, on les réinitialise �  0 et on incrémente les minutes de 1

    document.forsec.secc.value=" "+centi; //on affiche les dixièmes
    document.forsec.seca.value=" "+secon; //on affiche les secondes
    document.forsec.secb.value=" "+minu; //on affiche les minutes
    compte=setTimeout('chrono()',100); //la fonction est relancée tous les 10° de secondes
}

function rasee() { 	//fonction qui remet les compteurs �  0
    clearTimeout(compte); //arrête la fonction chrono()
    centi=0;
    secon=0;
    minu=0;
    document.forsec.secc.value=" "+centi;
    document.forsec.seca.value=" "+secon;
    document.forsec.secb.value=" "+minu;
}

/* =====================*/

game();