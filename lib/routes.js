FlowRouter.route("/",{
	action: function(query,queryParams){
		BlazeLayout.render("main");
	}
});
FlowRouter.route("/",{
	action: function(query,queryParams){
		BlazeLayout.render("hola");
	}
});