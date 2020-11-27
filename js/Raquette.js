/** on cre des raquette sur lesquelles la balle va rebondir  */
class Raquette {
    constructor($element) {
        this.$element = $element;
        this.posY= parseInt($element.css("top"));
        this.posX= parseInt($element.css("left"));
        this.largeur = $element.width();
        this.hauteur = $element.height();
        this.vitesse = 0;
        this.direction = 1;
        
    }
    get bas() {
        return this.posY + this.hauteur; 
    }

    set bas(value) {
         this.posY = value - this.hauteur;
    }
     
    get droite(){
        return this.posX + this.largeur;
    }

    set droite(value){
        this.posX = value - this.largeur
    }

    // on crée des fonctions pour rendre le code plus lisible et compréhensible
    majHTML(){
        this.$element.css("top", this.posY);  
    }
    
    // on fait bouger les raquettes de haut en bas
    bouge(){
        window.addEventListener("keydown", function (event) {
            if (event.defaultPrevented) {
                return 
            }
            if(event.key === "a"){
                raquette1.vitesse = -1.5;
            }
            if(event.key === "q"){
                raquette1.vitesse = 1.5;
            }
            if(event.key === "p"){
                raquette2.vitesse = -1.5;
            }
            if(event.key === "m"){
                raquette2.vitesse = 1.5;

            }
            event.preventDefault(); 
        }, true);

        window.addEventListener("keyup", function (event) {
            if (event.defaultPrevented) {return}
              raquette1.vitesse = 0;
              raquette2.vitesse = 0; 

              event.preventDefault();
        }, true);
        
        this.posY = this.posY + this.vitesse;
        this.limiteMouvements();
        this.majHTML();  
    }

    // on defini les limites des raquettes pour qu'elles ne sortent pas du terrain
    limiteMouvements(){
        if (this.posY + this.hauteur > terrain.hauteur) {
            this.posY = terrain.hauteur - this.hauteur;
        
        }
    
        if (this.posY <0 ) {
            this.posY = 0;
           
        }

    }
  
}
