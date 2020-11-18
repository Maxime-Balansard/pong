/** on crée une class balle ou on defini la vitesse, la position de plus on pourra appeler cette "class pour la resutiliser en html ou css."  */
class Balle {
    constructor($html) {
        this.$html = $html;
        this.haut = parseInt($html.css("top"));
        this.gauche = parseInt($html.css("left"));
        this.vitesseX=3;
        this.vitesseY=0.1;
        this.diametre=$html.height()

    }
    majHTML(){
        this.$html.css("left", this.gauche);
        this.$html.css("top", this.haut);
    }
    bouge(){
        /** on soustrait la diametre de la balle pour avoir un meilleur rebond (plus juste) */
        if (this.gauche > terrain.largeur - this.diametre) {
            this.gauche = terrain.largeur - this.diametre;
            this.vitesseX = this.vitesseX*-1;
        }

        if (this.gauche <0 ) {
            this.gauche = 0;
            this.vitesseX = this.vitesseX*-1;
        }
        if (this.haut > terrain.hauteur - this.diametre) {
            this.haut = terrain.hauteur-this.diametre;
            this.vitesseY = this.vitesseY*-1;

        }
        if (this.haut <0 ) {
            this.haut = 0;
            this.vitesseY = this.vitesseY*-1;
        }


    }

    }



