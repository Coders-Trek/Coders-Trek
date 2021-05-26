$("#start").click(function () {
  $('html,body').animate({
    scrollTop: $("#get-start").offset().top
  },
    'slow');
});

$("#wel-3").click(function () {
  $('html,body').animate({
    scrollTop: $("#contact-form").offset().top
  },
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
    scrollTop: $("#form-sign").offset().top
  },
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
    scrollTop: $("#form-login").offset().top
  },
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

//signup_form
$('#signup_form').on('submit', function (event) {
  event.preventDefault();

  var fname = document.getElementById('fname').value;
  var lname = document.getElementById('lname').value;
  var signup_email = document.getElementById('signup_email').value;
  var signup_password = document.getElementById('signup_password').value;

  $.ajaxSetup({
    headers: {
      "X-CSRFToken": document.querySelector('[name=csrfmiddlewaretoken]').value,
    }
  });

  $.ajax({
    url: "submit_signup_form",
    type: 'POST',
    data: {
      'fname': fname,
      'lname': lname,
      'signup_email': signup_email,
      'signup_password': signup_password,
    },
    dataType: 'json',
    success: function (resp) {
      if (resp.message) {
        alert(resp.message);
        closeDiv();
        return;
      }
      closeDiv();
      var style = document.createElement('style');
      style.innerHTML = `
  body > *:not(#form-otp,.navbar) {
      filter: blur(3px);
    }
  `;
      document.head.appendChild(style);
      document.getElementById('form-otp').style.backgroundColor = "rgba(0,0,0, 0.7)";
      document.getElementById('form-otp').style.display = "block";
      document.getElementById('form-otp').style.position = "absolute";
      document.getElementById('form-otp').style.top = 0;
      document.getElementById('form-otp').style.left = "28%";
      document.getElementById('form-otp').style.justifyContent = "center";
      document.getElementById('form-otp').style.alignItems = "center";
      $('html,body').animate({
        scrollTop: $("#form-otp").offset().top
      },
        'slow');
    }
  });
});

function closeDiv3() {
  var style = document.createElement('style');
  style.innerHTML = `
  body > *:not(#form-otp) {
      filter: blur(0px);
    }
  `;
  document.head.appendChild(style);
  document.getElementById('form-otp').style.display = "none";
}

// contact_form
$('#contact-form').on('submit', function (event) {
  event.preventDefault();
  alert("teri aisi ki taisi");

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  alert(message + 'wow');

  $.ajaxSetup({
    headers: {
      "X-CSRFToken": document.querySelector('[name=csrfmiddlewaretoken]').value,
    }
  });

  $.ajax({
    url: "submit_contact_form",
    type: 'POST',
    data: {
      'name': name,
      'email': email,
      'message': message,
    },
    dataType: 'json',
    success: function (resp) {
      alert(resp.status_message);
    }
  });
});