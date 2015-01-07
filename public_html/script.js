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

