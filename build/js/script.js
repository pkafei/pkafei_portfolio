var color = $(".selected").css("background-color");
var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var lastEvent;

//When clicking on control list items
$(".controls").on("click", "li", function(){
    //Deselect sibling elements
  $(this).siblings().removeClass("selected");
  //Select clicked elements
  $(this).addClass("selected");
  //cache current color
  color = $(this).css("background-color");
});

//When "New Color" is pressed
$("#revealColorSelect").click(function(){
    //Show or hide color select
    changeColor();
    $("#colorSelect").toggle();
});
//update the new color span
function changeColor() {
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();
  $("#newColor").css("background-color", "rgb(" + r + "," + g +", " + b + ")");
  
}

//When color sliders change
$("input[type=range]").change(changeColor);

//When "Add Color" is pressed
$("#addNewColor").click(function(){
  //Append the color to the colors ul
  var $newColor = $("<li></li>");
  $newColor.css("background-color", $("#newColor").css("background-color"));
  $(".controls ul").append($newColor);
  //Select the new color
  $newColor.click();  
});  
  
//On mouse events on the canvas
$canvas.mousedown(function(e){
  lastEvent = e;
  mouseDown = true;
}).mousemove(function(e){
    //Draw lines
  if(mouseDown) {
    context.beginPath();
    context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
    context.lineTo(e.offsetX, e.offsetY);
    context.strokeStyle = color;
    context.stroke();
    lastEvent = e;
  }
}).mouseup(function(){
  mouseDown = false;
}).mouseleave(function(){
  $canvas.mouseup();
});


//On mouse events on the canvas
  //Draw lines
//Problem: User when clicking on image goes to a dead end
//Solution: Crete an overlay with the large image ~Lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

//An image to overlay;
$overlay.append($image);

//Add caption to overlay
$overlay.append($caption);

//Add overlay
$("body").append($overlay);

//Capture the click events on a link to an image
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  //Update overlay with the image in the link
  $image.attr("src", imageLocation);
  
   //Show the overlay
  $overlay.show();
  
  //Get child's alt atribute and set caption
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
  
});

//When overlay is clicked
$overlay.click(function(){
    //Hide the overlay
    $overlay.hide();

});


$(document).ready(function () {
  $('[data-toggle="offcanvas"]').click(function () {
    $('.row-offcanvas').toggleClass('active')
  });
});


var logoHeight = $('#picture img').height();
    if (logoHeight < 104) {
        var margintop = (104 - logoHeight) / 2;
        $('#picture img').css('margin-top', margintop);
    };



function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
    t = setTimeout(function () {
        startTime()
    }, 500);
}
startTime();
