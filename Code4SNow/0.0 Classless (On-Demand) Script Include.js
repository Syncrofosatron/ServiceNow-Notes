// The function name is same as the script include name,
// so name this script include as "getRecordCount".

function getRecordCount(tableName) {
    var gr = new GlideAggregate(tableName);
    gr.addAggregate('COUNT');
    gr.query();
    if (gr.next()) {
        return gr.getAggregate('COUNT');
    }
    return 0;
}
