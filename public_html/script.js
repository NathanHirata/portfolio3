$("document").ready(function(){
    $(".yeah").css("background-color", "yellow");
});

$("document").ready(function(){
    $(".red").css("background-color", "red");
});

$("document").ready(function(){
    $(".yeah").css("color", "blue");
});

$("document").ready(function(){
    $('.no').bind('click', alertButtonClick);
});

function alertButtonClick() {
    alert("SIKE THATS THE WRONG NUMBER");
}

$("document").ready(function(){
    
    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    
    $('h1').bind('click', mouseClick);
});

function mouseOverMe() {
    $("h1").html("SIKE THATS THE WRONG NUMBER");
}

function mouseOutMe() {
    $('h1').html('SIKE THATS THE WRONG NUMBER');
}

function mouseClick() {
    $('p').html('Harder Johnny');
}



