let puppy = document.getElementById("puppy-photo");
let likesymbol = document.getElementById("symbol");
let button = document.getElementById("buttonlike");
let isimageLiked = false;

function onClickLikeButton(){

    if(isimageLiked ===false){
        puppy.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        likesymbol.style.color = "#0967d2";
        button.style.backgroundColor = "#0967d2";
        button.style.color = "white"
        isimageLiked = true;
    }else{
        puppy.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        likesymbol.style.color = "#9aa5b1";
        button.style.backgroundColor = "#9aa5b1";
        isimageLiked = false;
    }

}