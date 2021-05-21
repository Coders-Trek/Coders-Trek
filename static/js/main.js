$(".vertical-nav").mouseover(function() {
    var x = document.getElementsByClassName("nav-head");
    var y = document.getElementsByClassName("vertical-nav");
    var i;
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "block";
    }
    for (i = 0; i < y.length; i++) {
        y[i].style.width = "200px";
        }
});

$(".vertical-nav").mouseout(function() {
    var x = document.getElementsByClassName("nav-head");
    var y = document.getElementsByClassName("vertical-nav");
    var i;
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    }
    for (i = 0; i < y.length; i++) {
        y[i].style.width = "50px";
        }
}); 

$("#list").click(function() {
    var x = document.getElementsByClassName("nav-head");
    var y = document.getElementsByClassName("vertical-nav");
    var i;
    if(x[0].style.display === "block")
    {
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    }
    for (i = 0; i < y.length; i++) {
        y[i].style.width = "50px";
        }
    }
    else{
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "block";
            }
            for (i = 0; i < y.length; i++) {
                y[i].style.width = "200px";
                }
    }
}); 