// sticky effect
let mynavbar = $("#myframe");
let mytitle = $("#mytitle");
let myjumbo;
// let sticky =mynavbar.offset().top;
let titleDim =mytitle.height();
// console.log(titleDim);
let detectMenuChanges=false;

// console.log(sticky);

window.onscroll = function() {myFunction()};

function myFunction() {
    
    myjumbo = $("#jumbo");
    
    if (window.pageYOffset >= titleDim+40) { // 40=somma dei padding e margin
        mynavbar.addClass("fixed-top");
        myjumbo.removeClass("myjumbotron");
        myjumbo.addClass("myjumbosticky");
    } else {
        mynavbar.removeClass("fixed-top");
        myjumbo.removeClass("myjumbosticky");
        myjumbo.addClass("myjumbotron");
    }
}

let myFirstImage;
let mySecondImage;
let myThirdImage;
let myFourthImage;
let myFifthImage;
let mySixthImage;

// inserisco i dati della introduzione
$(document).ready(function() {
    $(".container").load("introduction.html");
    $("#introduction").load("introduction.txt");    
});



// aggiusto il padding-topo del jambotron a ogni resizing
// aggiusto la posizione del primo elemento dopo l'immagine a ogni resizing della finestra
$(window).resize(function(){

    titleDim =mytitle.height();
    // console.log(titleDim);
    // sticky =mynavbar.offset().top;
    // console.log("sticky: "+sticky);

    myFirstImage= $(".firstImage");
    mySecondImage= $(".secondImage");
    myThirdImage= $(".thirdImage");
    myFourthImage= $(".fourthImage");
    myFifthImage= $(".fifthImage");
    mySixthImage= $(".sixthImage");
    mySeventhImage= $(".seventhImage");
    myEighthImage= $(".eighthImage");
    myNinethImage= $(".ninethImage");
    myTenthImage= $(".tenthImage");

    if(myFirstImage){
        myFirstImage.parent().next().css("padding-top", (myFirstImage.height()+20)+"px");
    }
    if(mySecondImage){
        mySecondImage.parent().next().css("padding-top", (mySecondImage.height()+20)+"px");
    }
    if(myThirdImage){
        myThirdImage.parent().next().css("padding-top", (myThirdImage.height()+20)+"px");
    }
    if(myFourthImage){
        myFourthImage.parent().next().css("padding-top", (myFourthImage.height()+20)+"px");
    }
    if(myFifthImage){
        myFifthImage.parent().next().css("padding-top", (myFifthImage.height()+20)+"px");
    }
    if(mySixthImage){
        mySixthImage.parent().next().css("padding-top", (mySixthImage.height()+20)+"px");
    }
    if(mySeventhImage){
        mySeventhImage.parent().next().css("padding-top", (mySeventhImage.height()+20)+"px");
    }
    if(myEighthImage){
        myEighthImage.parent().next().css("padding-top", (myEighthImage.height()+20)+"px");
    }
    if(myNinethImage){
        myNinethImage.parent().next().css("padding-top", (myNinethImage.height()+20)+"px");
    }
    if(myTenthImage){
        myTenthImage.parent().next().css("padding-top", (myTenthImage.height()+20)+"px");
    }
});

// carico il giusto html a ogni click sulla navbar
$("ul.navbar-nav li").each(function() {
   
    $(this).on("click", function(){
        $(".container").load($(this).attr("data-page")+".html");
        $("#myButton").addClass("collapsed");
        $("#myButton").attr("aria-expanded","false");
        $("#navbarCollapse").removeClass("show");
    });
});

// carico il cv.html quando si clicca sul nome
$(".navbar-brand").on("click", function(){
        $(".container").load("cv.html");
});
