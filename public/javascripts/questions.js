var flavors = ["chocolate", "vanilla", "rockyRoad", "strawberry", "other"];
var sports = ["basketball", "volleyball", "soccer", "football", "other"];

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
			getResults();
		}
	})

	$("#q2").hide("slow", function() {
            $("#results").fadeIn();

 $("body").css("background-color","white");
            $("h1").text("Here are the Results:");
            $("h1").css("text-decoration","underline");

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
	    $("body").css("background-color","#FFF");
	    $("h1").text("Here are the results:");
	    $("h1").css("text-decoration","underline");
            $("#results").fadeIn();
        });
    });
/*    $("#commentSubmit").click(function() {
        
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
*/    
});

function outputUpdate(vol) {
        document.querySelector('#sliderValue').value = vol;
}

function getResults(){
    console.log("in get results");

    $.getJSON('flavors', function(data) {
        console.log(data[5]);
	var totalVotes = data[5]["VoteCount"];
	flavors.forEach(function (f, i) {
        	$("#" + f + "LI").html(f + "  " + Math.round(100 * data[i]["VoteCount"] / totalVotes) + " %");
        }); 
   });
    
    $.getJSON('sports', function(data) {
        console.log(data[5]);
        var totalVotes = data[5]["VoteCount"];
        sports.forEach(function (s,i) {
            $("#" + s + "SLI").html(s + "  " + Math.round(100 * data[i]["VoteCount"] / totalVotes) + " %");
        });
    });
    $.getJSON('siblings', function(data) {
	console.log(data);
	var totalVotes = data["VoteCount"];
	$("#siblingsResultsContent").html(data["siblingTotal"] / data["VoteCount"] + " Siblings");
    });
}



