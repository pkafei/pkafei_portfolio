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


