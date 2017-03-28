$(document).ready(function(){
  $("#iceCreamSubmit").click(function(){
      var myobj = {flavor:$('input[name="flavors"]:checked').val();};
      jobj = JSON.stringify(myobj);
      $("#json").text(jobj);
	var url = "icecream";
	$.ajax({
		url:url,
		type: "POST",
		data: jobj,
		contentType: "application/json; charset=utf-8",
		success: function(data,textStatus) {
		    console.log("success");
		}
	})
  });

  $("#sportSubmit").click(function(){
	var myobj = {sport:$('input[name="sports"]:checked').val();};
	jobj = JSON.stringify(myobj);
	$("#json").text(jobj);
		var url = "sports";
		$.ajax({
			url:url,
			type: "POST"
			data: jobj,
			contentType: "application/json; charset=utf-8",
			success: function(data, textStatus) {
				console.log("success");
			{
		})
	})
  });
/*
    $("#getComments").click(function() {
    $.getJSON('comment', function(data) {
      console.log(data);
      var everything = "<ul>";
      for(var comment in data) {
        com = data[comment];
        everything += "<li> Name: " + com.Name + " -- Comment: " + com.Comment + "</li>";
      }
      everything += "</ul>";
      $("#comments").html(everything);
    })
  })
*/
});
