
/** on fait ce deplacer la balle */
let largeur=$("#balle").width();
let gauche=parseInt($("#balle").css("left"));
let haut=parseInt($("#balle").css("top"));
alert(gauche);

setInterval(function(){
    gauche=gauche+1;
    haut=haut+0.5;
    $("#balle").css("left",gauche);
    $("#balle").css("top",haut);
}, 10);