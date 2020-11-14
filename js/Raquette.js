class Raquette {
    constructor($element) {
        this.$element = $element;
        this.haut = parseInt($element.css("top"));
        this.largeur = $element.width();
        this.hauteur = $element.height();
        this.vitesse = 1.5;
        this.direction = 1;
        
    }
    // on crée des fonctions pour rendre le code plus lisible et compréhensible
    majHTML(){
        this.$element.css("top", this.haut);  
    }
    monte(){
        this.direction = -1;
    }
    descend(){
        this.direction = 1; 
    }
    // on fait bouger les raquettes de haut en bas
    bouge(){
        this.haut = this.haut + this.vitesse*this.direction;
        this.limiteMouvements();
        this.majHTML();
    }
    // on defini les limites des raquettes pour qu'elles ne sortent pas du terrain
    limiteMouvements(){
        if (this.haut + this.hauteur > terrain.hauteur) {
            this.monte();
        
        }
    
        if (this.haut <0 ) {
            this.descend();
           
        }

    }
     
}
