function onLoad() {
   //Type appropriate comment here, and begin script below
   var incCountGlideAjax = new GlideAjax("MyAjaxIncidentUtils");
   incCountGlideAjax.addParam("sysparm_name", "getCountOfIncidents");
   incCountGlideAjax.getXMLAnswer(function(response){
	g_form.addInfoMessage("Number of Incidents: " + response);
   });
}
