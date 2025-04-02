let slideInd = 0;
slideShow();


function slideShow(){

    let i;
    let slides = document.getElementsByClassName("slide");

    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    slideInd++;    
    if(slideInd > slides.length){slideInd = 1;}
    
    slides[slideInd - 1].style.display = "block";

    setTimeout(slideShow, 5000);
}

