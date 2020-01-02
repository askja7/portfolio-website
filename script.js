/**HOME PAGE EFFECT**/

const lines = document.querySelectorAll(".line");

window.addEventListener("load", start);

function start() {
  lines.forEach(drawThis);
}


function drawThis(line, i){
    setTimeout(function(){
      line.classList.add("draw");
    }, i * 2000);


}

/**PORTFOLIO PAGE EFFECT**/

function rollover(my_image)
    {

        my_image.src = 'images/basic-web-hover.svg';

    }

 function mouseaway(my_image)
    {

        my_image.src = "images/basic-web.svg";

    }

