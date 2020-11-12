class Raquette {
    constructor($element) {
        this.$element = $element;
        this.haut = parseInt($element.css("top"));
        this.largeur = $element.width();
        this.hauteur = $element.height();
        this.vitesse = 3;
        this.direction = 1;
        
    }
    majHTML(){
        this.$element.css("top", this.haut);  
    }
    monte(){
        this.direction = -1;
    }
    descend(){
        this.direction = 1; 
    }
    bouge(){
        this.haut = this.haut + this.vitesse*this.direction;
        this.limiteMouvements();
        this.majHTML();
    }
    limiteMouvements(){
        if (this.haut > terrain.hauteur) {
            this.monte();
        }
    
        if (this.haut <0 ) {
            this.descend();
        }

    }
     
}
