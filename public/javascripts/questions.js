$(document).ready(function() {
    
   $('input[name=iceCream][value=other]').prop('checked', true);
   $('input[name=sport][value=other]').prop('checked', true);

   $("#iceCreamSubmit").click(function() { 
      var myobj = {flavor:$('input[name="iceCream"]:checked').val()};
      jobj = JSON.stringify(myobj);
      console.log(jobj);
      $("#json").text(jobj);
      var url = "flavors";
      $.ajax({
        url:url,
        type: "POST",
	data: jobj,
	contentType: "application/json; charset=utf-8",
	success: function(data,textStatus) {
	    console.log("success");
	}
      })
       
	$("#q1").hide("slow", function() {
            $("#q2").fadeIn();
        });
    });
    $("#sportSubmit").click(function() {
        
	var myobj = {sport:$('input[name="sport"]:checked').val()};
	jobj = JSON.stringify(myobj);
	console.log(jobj);
	$("#json").text(jobj);
	var url = "sports";
	$.ajax({
		url:url,
		type: "POST",
		data: jobj,
		contentType: "application/json; charset=utf-8",
		success: function(data, textStatus) {
			console.log("success");
		}
	})

	$("#q2").hide("slow", function() {
            $("#q3").fadeIn();
        });
    });
    $("#siblingSubmit").click(function() {
        
	var myobj = {siblings:$('input[name="siblings"]').val()};
	jobj = JSON.stringify(myobj);
	console.log(jobj);
	$("#json").text(jobj);
	
	var url = "siblings";
	$.ajax({
		url:url,
		type: "POST",
		data: jobj,
		contentType: "application/json; charset=utf-8",
		success: function(data, textStatus) {
			console.log("success");
		}
	})


	$("#q3").hide("slow", function() {
            $("#q4").fadeIn();
        });
    });
    $("#skillsSubmit").click(function() {
      var myobj = {skill:$('#sliderValue').val()};
      jobj = JSON.stringify(myobj);
      console.log(jobj);
      $("#json").text(jobj);
	var url = "skills";
	$.ajax({
		url:url,
		type: "POST",
		data: jobj,
		contentType: "application/json; charset=utf-8",
		success: function(data,textStatus) {
		    console.log("success");
		}
	})
	
	$("#q4").hide("slow", function() {
            $("#q5").fadeIn();
        });
    });
    $("#commentSubmit").click(function() {
        
      var myobj = {comment:$('#comments').val()};
      jobj = JSON.stringify(myobj);
      console.log(jobj);
      $("#json").text(jobj);
	var url = "comments";
	$.ajax({
		url:url,
		type: "POST",
		data: jobj,
		contentType: "application/json; charset=utf-8",
		success: function(data,textStatus) {
		    console.log("success");
		}
	})
	
	$("#q5").hide("slow", function() {
           $("body").css("background-color","white");
            $("h1").text("Here are the Results:");
	    $("h1").css("text-decoration","underline");
	    $("#results").fadeIn();
        });
    });
    
});

function outputUpdate(vol) {
        document.querySelector('#sliderValue').value = vol;
    }
