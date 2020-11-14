/** on crée une class terrain ou on defini la hauteur et la largeur de plus on pourra appeler cette "class pour la resutiliser en html ou css."  */
class Terrain {
    constructor($element) {
        this.$element = $element;
        this.largeur = $element.width();
        this.hauteur = $element.height();
    }    
}