class Level{
    constructor(){
        this.alphabet = createSprite(displayWidth/2,displayHeight/2,20,20);


    }
    displaylevel1(time){
        time = time*60*60
        if(timeflag === 0){
           t = time;
            timeflag = 1;
        }
        
        console.log(time);
        console.log(t);

        if (time === t+3600){
            if(showflag === 0){
                this.alphabet.addImage(aimg);
            asound.play();
            showflag = 1;    
            }
        }
        else if (time===t+7200){
            if(showflag === 1){
                this.alphabet.addImage(bimg);
            bsound.play();
            showflag = 0;
            } 
        }
            drawSprites();
    }

}