/** on crée une class balle ou on defini la vitesse, la position de plus on pourra appeler cette "class pour la resutiliser en html ou css."  */
class Balle {
    constructor($html) {
        this.$html = $html;
        this.posY = parseInt($html.css("top"));
        this.posX = parseInt($html.css("left"));
        this.hauteur = $html.height();
        this.largeur = $html.width();
        this.vitesseX=2;
        this.vitesseY=0.5;
        this.angle = Math.random() * 2 * Math.PI;
        this.vitesseDepart = 2;
        this.vitesseMaxX = 6;
        this.vitesseMaxY = 2;
        this.accelerationX = 1;
        this.accelerationY = 0.5;
        /**this.diametre=$html.height()*/

    }
    get bas(){
        return this.posY + this.hauteur;
    }
    set bas(value){
        this.posY = value - this.hauteur;
    }
    get droite(){
        return this.posX + this.largeur
    }
    set droite(value){
        this.posX = value - this.largeur;
    }
    /** acceleration de la balle quand elle rebondi sur la raquette */
    /** bug, les raquettes ne bouge plus */
    accelere() {
        if (this.vitesseX < this.vitesseMaxX) {
            this.vitesseX += this.accelerationX;
        } else {
            this.vitesseX = this.vitesseMaxX
        }

    }

    

    majHTML(){
        this.$html.css("left", this.posX);
        this.$html.css("top", this.posY);
    }
    centre(){
        this.posX = terrain.largeur /2
        this.posY = terrain.hauteur /2


    }
    bouge(){
        this.posX  += Math.cos(this.angle) * this.vitesseX;
        this.posY  += Math.sin(this.angle) * this.vitesseY;
        this.rebond();

           if ((this.droite) > terrain.largeur) {
            this.droite = terrain.largeur;
            this.vitesseX *= -1;
            this.centre();
            
        }
        //gauche
        if (this.posX < 0) {
            this.posX = 0;
            this.vitesseX *= -1;
            this.centre();
        }
        //bas
        if (this.bas > terrain.hauteur) {
            this.bas = terrain.hauteur;
            this.vitesseY *= -1;
            terrain.tiltBas();
        
        }
        //haut
        if (this.posY < 0) {
            this.posY= 0;
            this.vitesseY *= -1;
            terrain.tiltHaut();
            
        }


    }
    rebond(){

        if(this.posX < raquette1.droite){ //si la balle dépasse à gauche la raquette gauche
            if(this.bas > raquette1.posY){ //et si la balle est plus basse que le haut de la raquette
              if(this.posY <raquette1.bas){ // et si la balle est plus haute que le bas de la raquette
                this.vitesseX *= -1
                this.accelere();

              }
            }
          }
          if(this.droite > raquette2.posX){ //si la balle dépasse à gauche la raquette DROITE
            if(this.bas > raquette2.posY){ //et si la balle est plus basse que le haut de la raquette
              if(this.posY <raquette2.bas){ // et si la balle est plus haute que le bas de la raquette
                this.vitesseX *= -1
                

              }
            }
          }



}
    }



