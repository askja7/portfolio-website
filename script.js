/**HOME PAGE EFFECT**/

const lines = document.querySelectorAll(".line");

window.addEventListener("load", start);

function start() {
  lines.forEach(drawThis);
}


function drawThis(line, i){
    setTimeout(function(){
      line.classList.add("draw");
    }, i * 900);


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

function rollover2(my_image)
    {

        my_image.src = 'images/basic-ux-hover.svg';

    }

 function mouseaway2(my_image)
    {

        my_image.src = "images/basic-ux.svg";

    }


function rollover3(my_image)
    {

        my_image.src = 'images/basic-animation-hover.svg';

    }

 function mouseaway3(my_image)
    {

        my_image.src = "images/basic-animation.svg";

    }


function rollover4(my_image)
    {

        my_image.src = 'images/basic-content-hover.svg';

    }

 function mouseaway4(my_image)
    {

        my_image.src = "images/basic-content.svg";

    }
