

        function addStar(){
        const starBox = document.getElementById("starbox");
        
        var xpos = Math.round( Math.random() * 100 );
        var ypos = Math.round( Math.random() * 100);
    
        console.log(xpos, "xpos", ypos, "ypos"); 

        var fadeTime = Math.random() * 10;
        const newStar = document.createElement("div");
        newStar.setAttribute("class", "star");
        newStar.style.left = xpos+"vw";
        newStar.style.top = ypos+"vh";
               
        starBox.appendChild(newStar);
        }


function starLoop(){

    // Creates a star on a timeout function up to the max in the for loop

    for(i = 1; i <= 250; i++){
        (function(i){

            var rand = Math.round(Math.random() * (100 - 500)) + 500;

            setTimeout(function(){
                addStar();
            }, rand * i);
        }(i));
    } 


}



document.onload = starLoop();

