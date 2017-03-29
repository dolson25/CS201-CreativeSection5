$(document).ready(function() {
    $("#iceCreamSubmit").click(function() {
        $("#q1").hide("slow", function() {
            $("#q2").fadeIn();
        });
    });
    $("#sportSubmit").click(function() {
        $("#q2").hide("slow", function() {
            $("#q3").fadeIn();
        });
    });
    $("#siblingSubmit").click(function() {
        $("#q3").hide("slow", function() {
            $("#q4").fadeIn();
        });
    });
    $("#skillsSubmit").click(function() {
        $("#q4").hide("slow", function() {
            $("#q5").fadeIn();
        });
    });
    $("#commentSubmit").click(function() {
        $("#q5").hide("slow", function() {
           $("body").css("background-color","white");
            $("h1").text("Here are the Results:");
        });
    });
    
});

function outputUpdate(vol) {
        document.querySelector('#sliderValue').value = vol;
    }
