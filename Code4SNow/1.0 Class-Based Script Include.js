// Name this script include as "MyIncidentUtils".

var MyIncidentUtils = Class.create();
MyIncidentUtils.prototype = {
    initialize: function() {},

    getActiveIncidents: function() {
        var gr = new GlideAggregate("incident");
		gr.addAggregate('COUNT');
        gr.query();
        if (gr.next()) {
			// gs.addInfoMessage("Found incidents: " + gr.getAggregate("COUNT"));
            return gr.getAggregate('COUNT');
        }
        return 0;
    },

    type: 'MyIncidentUtils'
};

