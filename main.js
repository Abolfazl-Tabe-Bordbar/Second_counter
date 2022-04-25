var get_second = document.getElementById("get_second");
var second_input = document.getElementById("second_input");
var show_second = document.getElementById("show_second");
var running = document.getElementById("running");
var finished = document.getElementById("finished");
var error = document.getElementById("error");
var second = 0;
var original_second = 0;
var last_class = "";
var circle = document.getElementById("circle");
var start_interval;
var run_music = new Audio("./run.mp3");
var end_music = new Audio("./end.mp3");
get_second.addEventListener("click", function () {
    var check_seconds = second_input.value;
    if (check_seconds.trim() != "") {
        second = second_input.value;
        original_second = second_input.value;
        show_second.innerHTML = second;
        running.style.display = "block";
        finished.style.display = "none";
        error.style.display = "none";
        setTimeout(function () {
            start_interval = setInterval(function () {
                if (second > 0) {
                    second_input.disabled = true;
                    second--;
                    var percent = Math.floor(((original_second - second) / original_second) * 100);
                    percent = 100 - percent;
                    show_second.innerHTML = second;
                    run_music.play();
                    circle.classList.remove("p100");
                    if (last_class) {
                        circle.classList.remove(last_class);
                    }
                    circle.classList.add("p" + percent);
                    last_class = "p" + percent;
                    
                } else {
                    run_music.pause();
                    end_music.play();
                    circle.classList.add("p100");
                    clearInterval(start_interval);
                    running.style.display = "none";
                    error.style.display = "none";
                    finished.style.display = "block";
                    second_input.value = null;
                    second_input.disabled = false;
                }
            }, 1000);
        },500);
    } else {
        clearInterval(start_interval);
        second = 0;
        show_second.innerHTML = second;
        running.style.display = "none";
        finished.style.display = "none";
        error.style.display = "block";
    }

});