var MyAjaxIncidentUtils = Class.create();
MyAjaxIncidentUtils.prototype = Object.extendsObject(AbstractAjaxProcessor, {

	getCountOfIncidents : function ()
	{
		var gr = new GlideAggregate("incident");
		gr.addActiveQuery();
		gr.addAggregate("COUNT");
		gr.query();

		if (gr.next())
		{
			return gr.getAggregate("COUNT");
		}
		return 0;
	},
	
    type: 'MyAjaxIncidentUtils'
});
