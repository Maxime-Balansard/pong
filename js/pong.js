/** on fait ce deplacer la balle */
let largeur = $("#balle").width();
let gauche = parseInt($("#balle").css("left"));
let haut = parseInt($("#balle").css("top"));

let terrain=new Terrain($("#terrain"))
console.log(terrain);

let balle=new Balle($("#balle"))
console.log(terrain);

let raquette1=new Raquette($("#raquette1"))

let raquette2=new Raquette($("#raquette2"))
// Position X fixe
raquette1.posx = 20;
raquette2.posx = terrain.largeur - 20 - raquette2.largeur;

/** on fait rebondir la balle sur les bord du terrain */
let i=0;
setInterval(function () {
    // deplacement des raquettes
    raquette1.bouge();
    raquette2.bouge();
    balle.bouge();

    balle.majHTML();
   
}, 10);