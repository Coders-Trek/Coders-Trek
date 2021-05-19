$("#start").click(function() {
    $('html,body').animate({
        scrollTop: $("#get-start").offset().top},
        'slow');
});

$("#wel-3").click(function() {
    $('html,body').animate({
        scrollTop: $("#contact-form").offset().top},
        'slow');
});


function showDiv() {
    closeDiv2();
    var style = document.createElement('style');
    style.innerHTML = `
    body > *:not(#form-sign,.navbar) {
        filter: blur(3px);
      }
    `;
    document.head.appendChild(style);
    document.getElementById('form-sign').style.backgroundColor = "rgba(0,0,0, 0.7)";
    document.getElementById('form-sign').style.display = "block";
    document.getElementById('form-sign').style.position = "absolute";
    document.getElementById('form-sign').style.top = 0;
    document.getElementById('form-sign').style.left = "28%";
    document.getElementById('form-sign').style.justifyContent = "center";
    document.getElementById('form-sign').style.alignItems = "center";
    $('html,body').animate({
        scrollTop: $("#form-sign").offset().top},
        'slow');
 }

 function closeDiv() {
    var style = document.createElement('style');
    style.innerHTML = `
    body > *:not(#form-sign) {
        filter: blur(0px);
      }
    `;
    document.head.appendChild(style);
    document.getElementById('form-sign').style.display = "none";
 }

 function showDiv2() {
    closeDiv();
    var style = document.createElement('style');
    style.innerHTML = `
    body > *:not(#form-login,.navbar) {
        filter: blur(3px);
      }
    `;
    document.head.appendChild(style);
    document.getElementById('form-login').style.backgroundColor = "rgba(0,0,0, 0.7)";
    document.getElementById('form-login').style.display = "block";
    document.getElementById('form-login').style.position = "absolute";
    document.getElementById('form-login').style.top = 0;
    document.getElementById('form-login').style.left = "28%";
    document.getElementById('form-login').style.justifyContent = "center";
    document.getElementById('form-login').style.alignItems = "center";
    $('html,body').animate({
        scrollTop: $("#form-login").offset().top},
        'slow');
 }

 function closeDiv2() {
    var style = document.createElement('style');
    style.innerHTML = `
    body > *:not(#form-login) {
        filter: blur(0px);
      }
    `;
    document.head.appendChild(style);
    document.getElementById('form-login').style.display = "none";
 }