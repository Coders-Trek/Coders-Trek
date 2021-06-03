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

$(".my-card-chart").mouseover(function () {
  this.style.cssText = "transform:scale(1.07);";
});

$(".my-card-chart").mouseout(function () {
  this.style.cssText = "transform:scale(1);";
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



function UpdateCharts(resp) {
  // task completion JS
  var ctx1 = document.getElementById("completion-tasks");
  var task_completion_Chart = new Chart(ctx1, {
    type: 'bar',
    data: {
      labels: resp.data.CompletionTasks.labels,
      datasets: [{
        label: 'Completion Tasks',
        data: resp.data.CompletionTasks.data,
        backgroundColor: [
          '#0e82e7',
        ],
        borderColor: [
          '#0e82e7',
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
    }
  });
  // task performance JS
  var ctx2 = document.getElementById("task-performance");
  var task_performance_Chart = new Chart(ctx2, {
    type: 'doughnut',
    data: {
      labels: resp.data.TaskPerformance.labels,
      datasets: [{
        label: 'Task Performace',
        data: resp.data.TaskPerformance.data,
        backgroundColor: [
          '#0e82e7',
          '#00a28a',
          '#b76ba3'
        ],
        borderColor: [
          '#0e82e7',
          '#00a28a',
          '#b76ba3'
        ],
      }]
    },
    options: {
      responsive: true,
      animations: {
        radius: {
          duration: 600,
          easing: 'linear',
          loop: (context) => context.active
        }
      },
    }
  });
  // leadboard JS
  var ctx3 = document.getElementById("leadboard");
  var leadboard_Chart = new Chart(ctx3, {
    type: 'bar',
    data: {
      labels: resp.data.Leaderboard.labels,
      datasets: [{
        label: 'Leadboard',
        data: resp.data.Leaderboard.data,
        backgroundColor: [
          '#0e82e7',
        ],
        borderColor: [
          '#0e82e7',
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      indexAxis: 'y',
    }
  });
}

$.ajax({
  url: "get_dashboard_data",
  type: 'POST',
  data: {
  },
  success: function (resp) {
    // Updating values
    document.getElementById('Projects').innerHTML = resp.data.Projects;
    document.getElementById('Tasks').innerHTML = resp.data.Tasks;
    document.getElementById('Notifications').innerHTML = resp.data.Notifications;
    // Updating charts
    UpdateCharts(resp);
  }
})


//Ongoing Task Delete
$(document).ready(function() {
  $("#delete-span").hide();
});

$(".task-check").on('click', function (event) {

  $("#delete-span").show();
  

});

// ON clicking yes Button

$("#delete-yes").on('click', function (event) {

  $('html,body').animate({
    scrollTop: $("body").offset().top
  },
    'slow');
    
    $("#delete-span").hide();
  

});

// On Clicking No Button
$("#delete-no").on('click', function (event) {

    $('.task-check').prop('checked', false);

    $("#delete-span").hide();
  

});


