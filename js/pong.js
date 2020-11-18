/** on fait ce deplacer la balle */
let largeur = $("#balle").width();
let gauche = parseInt($("#balle").css("left"));
let haut = parseInt($("#balle").css("top"));

let raquette1=new Raquette($("#raquette1"))
raquette1.descend();

let raquette2=new Raquette($("#raquette2"))
raquette2.monte();

let terrain=new Terrain($("#terrain"))
console.log(terrain);

let balle=new Balle($("#balle"))
console.log(terrain);


/** on fait rebondir la balle sur les bord du terrain */
let i=0;
setInterval(function () {
    balle.gauche = balle.gauche +balle.vitesseX;
    balle.haut = balle.haut + balle.vitesseY;

    // deplacement des raquettes
    raquette1.bouge();
    raquette2.bouge();
    balle.bouge();

    console.log(raquette1.direction)

    balle.majHTML();
   
}, 10);