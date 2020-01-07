/**HOME PAGE EFFECT**/

const lines = document.querySelectorAll(".line");

window.addEventListener("load", start);

function start() {
  lines.forEach(drawThis);
}


function drawThis(line, i){
    setTimeout(function(){
      line.classList.add("draw");
    }, 1000);
}



/*2nd version*/
/*const lines = document.querySelectorAll(".line");

window.addEventListener("load", start);

function start() {
  lines.forEach(drawThis);
}


function drawThis(line, i){
    setTimeout(function(){
      line.classList.add("draw");
    }, i* 700);
}
*/

/*DOMContentLoaded*/

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


/**SOME IMAGES EFFECT**/

function rollover5(my_image)
    {

        my_image.src = 'images/about/some/insta-hover.svg';

    }

 function mouseaway5(my_image)
    {

        my_image.src = "images/about/some/insta.svg";

    }


function rollover6(my_image)
    {

        my_image.src = 'images/about/some/pinterest-hover.svg';

    }

 function mouseaway6(my_image)
    {

        my_image.src = "images/about/some/pinterest.svg";

    }


function rollover7(my_image)
    {

        my_image.src = 'images/about/some/linkedin-hover.svg';

    }

 function mouseaway7(my_image)
    {

        my_image.src = "images/about/some/linkedin.svg";

    }


function rollover8(my_image)
    {

        my_image.src = 'images/about/some/behance-hover.svg';

    }

 function mouseaway8(my_image)
    {

        my_image.src = "images/about/some/behance.svg";

    }

