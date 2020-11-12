/** on crée une class balle ou on defini la vitesse, la position de plus on pourra appeler cette "class pour la resutiliser en html ou css."  */
class Balle {
    constructor($html) {
        this.$html = $html;
        this.haut = parseInt($html.css("top"));
        this.gauche = parseInt($html.css("left"));
        this.vitesseX=2;
        this.vitesseY=0.1;
        this.diametre=$html.height()

    }
    majHTML(){
        this.$html.css("left", this.gauche);
        this.$html.css("top", this.haut);
    }
}

