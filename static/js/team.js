$(".vertical-nav").mouseover(function () {
    var x = document.getElementsByClassName("nav-head");
    var y = document.getElementsByClassName("vertical-nav");
    var z = document.getElementsByClassName("main");
  
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "block";
    }
    for (i = 0; i < y.length; i++) {
      y[i].style.width = "200px";
      y[i].style.background = "#092742";
    }
    for (i = 0; i < y.length; i++) {
      z[i].style.left = "220px";
    }
  });
  
  $(".vertical-nav").mouseout(function () {
    var x = document.getElementsByClassName("nav-head");
    var y = document.getElementsByClassName("vertical-nav");
    var z = document.getElementsByClassName("main");
  
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    for (i = 0; i < y.length; i++) {
      y[i].style.width = "50px";
      y[i].style.background = "#191927";
    }
    for (i = 0; i < y.length; i++) {
      z[i].style.left = "70px";
    }
  });
  
  $("#list").click(function () {
    var x = document.getElementsByClassName("nav-head");
    var y = document.getElementsByClassName("vertical-nav");
    var z = document.getElementsByClassName("main");
  
    var i;
    if (x[0].style.display === "block") {
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      for (i = 0; i < y.length; i++) {
        y[i].style.width = "50px";
        y[i].style.background = "#191927";
      }
      for (i = 0; i < z.length; i++) {
        z[i].style.left = "70px";
      }
    }
    else {
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "block";
      }
      for (i = 0; i < y.length; i++) {
        y[i].style.width = "200px";
        y[i].style.background = "#092742";
      }
      for (i = 0; i < z.length; i++) {
        z[i].style.left = "220px";
      }
    }
  });

  
// Animation For Modal Progress Bar

$('.join-team').click(function() {
  var $modal = $('.js-loading-bar'),
      $bar = $modal.find('.progress');
  
  $modal.modal('show');
  $bar.addClass('animate');

  setTimeout(function() {
    $bar.removeClass('animate');
    $modal.modal('hide');
  }, 7000);
});


// JS for chowing create Team Modal

$('#create-team').click(function() {
  $('#ModalTeam').modal('show');
});

// Image Upload
$("input:file").change(function (){
  var fileName = $(this).val();
  if(fileName.length >0){
  $(this).parent().children('span').html(fileName);
  }
  else{
    $(this).parent().children('span').html("Choose file");

  }
});
//file input preview
function readURL(input) {
  if (input.files && input.files[0]) {
      var reader = new FileReader();            
      reader.onload = function (e) {
          $('.logoContainer img').attr('src', e.target.result);
      }
      reader.readAsDataURL(input.files[0]);
  }
}
$("input:file").change(function(){
    readURL(this);
});
