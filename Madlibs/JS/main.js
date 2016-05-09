$(function() {

	//hide the story 
	$("#story").hide();


//event handler //

	$("#btn-click").click(function(e) {
	
	e.preventDefault()
	
	//taking the values from input box after button is clicked & adding it to the DOM
	
		$(".person").empty().append($("input.person").val());
		$(".adjective").empty().append($("input.adjective").val());
		$(".noun").empty().append($("input.noun").val());
		$(".insect").empty().append($("input.insect").val());
		$(".noun2").empty().append($("input.plural-noun").val());
		$(".verb").empty().append($("input.verb").val());
   
   // show the story
    	$("#story").show();

   //empty the values in the form
    	$(':input').val('');

   //hide the questions
   		$("#questions").hide();

   	});

	// event handler //
   		$("#play-btn").click(function(e) {
   			$("#questions").show();
   			$("story").hide();
   		});



});