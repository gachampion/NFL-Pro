$( ".lb" ).click(function() {
    $( ".lb" ).css('color', '#00EE5F');
    $( ".lb" ).css('background-color', '#0C2131');
    $( ".lb" ).css('box-shadow', 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)');
    $( ".lb" ).html('<p>OK</p>');
    $(".progressPercent").css('width', '25%');
});

$( ".lb2" ).click(function() {
    $( ".lb2" ).css('color', '#00EE5F');
    $( ".lb2" ).css('background-color', '#0C2131');
    $( ".lb2" ).css('box-shadow', 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)');
    $( ".lb2" ).html('<p>OK</p>');
    $(".progressPercent").css('width', '100%');
});

$( ".lb3" ).click(function() {
    $( ".lb3" ).css('color', '#00EE5F');
    $( ".lb3" ).css('background-color', '#0C2131');
    $( ".lb3" ).css('box-shadow', 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)');
    $( ".lb3" ).html('<p>OK</p>');
    $(".progressPercent").css('width', '25%');
});

$( ".lb4" ).click(function() {
    $( ".lb4" ).css('color', '#00EE5F');
    $( ".lb4" ).css('background-color', '#0C2131');
    $( ".lb4" ).css('box-shadow', 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)');
    $( ".lb4" ).html('<p>OK</p>');
    $(".progressPercent").css('width', '25%');
});

$( ".lb5" ).click(function() {
    $( ".lb5" ).css('color', '#00EE5F');
    $( ".lb5" ).css('background-color', '#0C2131');
    $( ".lb5" ).css('box-shadow', 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)');
    $( ".lb5" ).html('<p>OK</p>');
    $(".progressPercent2").css('width', '100%');
});

$( ".lb6" ).click(function() {
    $( ".lb6" ).css('color', '#00EE5F');
    $( ".lb6" ).css('background-color', '#0C2131');
    $( ".lb6" ).css('box-shadow', 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)');
    $( ".lb6" ).html('<p>OK</p>');
    $(".progressPercent3").css('width', '100%');
});

$( ".lb7" ).click(function() {
    $( ".lb7" ).css('color', '#00EE5F');
    $( ".lb7" ).css('background-color', '#0C2131');
    $( ".lb7" ).css('box-shadow', 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)');
    $( ".lb7" ).html('<p>OK</p>');
    $(".progressPercent3").css('width', '50%');
});

var header = document.getElementById("navContainer");
var btns = header.getElementsByClassName("circle");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}