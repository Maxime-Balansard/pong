/** on crée une class terrain ou on defini la hauteur et la largeur de plus on pourra appeler cette "class pour la resutiliser en html ou css."  */
class Terrain {
    constructor($element) {
        this.$element = $element;
        this.largeur = $element.width();
        this.hauteur = $element.height();
    }  
    tiltHaut() {
        this.$element.addClass("tiltHaut");
        let buffer = this;
        setTimeout(
            function () {
                buffer.$element.removeClass("tiltHaut");
            }, 200
        );
    }

    tiltBas() {
        this.$element.addClass("tiltBas");
        let buffer = this;
        setTimeout(
            function () {
                buffer.$element.removeClass("tiltBas");
            }, 200
        );
    } 
    /**ne marche pas */
    /** 
    tiltDroite() {
        this.$element.addClass("tiltDroite");
        let buffer = this;
        setTimeout(
            function () {
                buffer.$element.removeClass("tiltDroite");
            }, 200
        );
    }

    tiltGauche() {
        this.$element.addClass("tiltGauche");
        let buffer = this;
        setTimeout(
            function () {
                buffer.$element.removeClass("tiltGauche");
            }, 200
        );
    } 
    */  
}