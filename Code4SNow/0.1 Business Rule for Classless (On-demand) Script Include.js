// When to run? - Query.

(function executeRule(current, previous /*null when async*/) {

	// Add your code here
	var count = getRecordCount('incident');
	gs.addInfoMessage('Total incidents: ' + count);

})(current, previous);
