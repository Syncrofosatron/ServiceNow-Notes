(function executeRule(current, previous /*null when async*/) {

    // Add your code here
    var incUtils = new MyIncidentUtils(); // Instantiates the Script Include
    var totalInc = incUtils.getActiveIncidents(); // Calls the function
    gs.addInfoMessage('Active Incidents: ' + totalInc); // Logs the result
	gs.info("Active Incidentsss: " + totalInc);

})(current, previous);
