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


function createNewDivForActiveProjects(project_name, progress, id) {
  let element = document.createElement('div');
  element.id = id;
  element.innerHTML = ` <span class="project-subhead">${project_name}</span><br>
                        <span class="project-progress">Progress - ${progress}%</span>
                        <div class="progress" style="height: 2vh;margin-left:3vh;margin-top:2vh;">
                            <div class="progress-bar bg-gradient-success" role="progressbar" style="width: 64%;"
                                aria-valuenow="64" aria-valuemin="0" aria-valuemax="100"></div>
                        </div><br>`;
  document.getElementById('ActiveProjectsCardsSection').appendChild(element);
}

function createNewDivForOngoingTasks(task_name, id) {
  let element = document.createElement('div');
  element.id = id;
  element.innerHTML = ` <div class="form-check mb-4">
                            <input class="form-check-input task-check"
                                onclick="myclicking()"
                                name = "task-checkbox"
                                value="${task_name}"
                                style="background-color: #343438;padding:1.2vh;border-color:white;margin-right:2vh;"
                                type="checkbox" id="${id}">
                            <label class="form-check-label task-label" for= "${id}">
                                ${task_name}
                            </label>
                        </div>`
  document.getElementById('OngoingTasksSection').appendChild(element);
}


function RemoveDiv(id) {
  document.getElementById(id).remove();
}


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

function makeAjaxCallToUpdatePageData() {
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

      // Adding divisons to ActiveProjectsSection
      for (var project_name in resp.data.ActiveProjects) {
        createNewDivForActiveProjects(project_name, resp.data.ActiveProjects[project_name], 'new1');
      }

      // Adding divisons to OngoingTasksSection
      for (var i = 0; i < resp.data.OngoingTasks.length; i++) {
        createNewDivForOngoingTasks(resp.data.OngoingTasks[i], resp.data.OngoingTasks[i] + '1');
      }
    }
  })
}

makeAjaxCallToUpdatePageData();

//Ongoing Task Delete
$(document).ready(function () {
  $("#delete-span").hide();
});

// ON clicking yes Button

$("#delete-yes").on('click', function (event) {

  let task_completed = [];
  $.each($("input[name='task-checkbox']:checked"), function(){
      task_completed.push($(this).val());
    });
  alert("Tasks are: " + task_completed);

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


function myclicking() {
  $("#delete-span").show();
}