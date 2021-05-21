$(".vertical-nav").mouseover(function() {
    var x = document.getElementsByClassName("nav-head");
    var y = document.getElementsByClassName("vertical-nav");
    var z = document.getElementsByClassName("main");

    var i;
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "block";
    }
    for (i = 0; i < y.length; i++) {
        y[i].style.width = "200px";
        }

        for (i = 0; i < y.length; i++) {
            z[i].style.left = "17%";
            }
});

$(".vertical-nav").mouseout(function() {
    var x = document.getElementsByClassName("nav-head");
    var y = document.getElementsByClassName("vertical-nav");
    var z = document.getElementsByClassName("main");

    var i;
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    }
    for (i = 0; i < y.length; i++) {
        y[i].style.width = "50px";
        }

        for (i = 0; i < y.length; i++) {
            z[i].style.left = "5%";
            }
}); 

$("#list").click(function() {
    var x = document.getElementsByClassName("nav-head");
    var y = document.getElementsByClassName("vertical-nav");
    var z = document.getElementsByClassName("main");

    var i;
    if(x[0].style.display === "block")
    {
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    }
    for (i = 0; i < y.length; i++) {
        y[i].style.width = "50px";
        }
        for (i = 0; i < y.length; i++) {
            z[i].style.left = "5%";
            }
    }
    else{
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "block";
            }
            for (i = 0; i < y.length; i++) {
                y[i].style.width = "200px";
                }
                for (i = 0; i < y.length; i++) {
                    z[i].style.left = "17%";
                    }
    }
}); 