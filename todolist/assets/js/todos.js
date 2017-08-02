// Check off Specific Todos by Clicking
$("ul").on("click","li",function() {
	//if li is gray
	
	$(this).toggleClass("completed");

});

//click on X to delete todo
$("ul").on("click","span",function(event) {
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();

});

$("input[type='text']").keypress(function(event) {
	if(event.which === 13) {
		//grabbing text from input
		var todoText = $(this).val();
		$(this).val("");
        //creating a new li and add to ul
        $("ul").append("<li><span> <i class='fa fa-trash'></i> </span> " + todoText + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});