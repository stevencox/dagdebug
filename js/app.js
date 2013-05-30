
function DAGDebug () {
};

DAGDebug.prototype.initialize = function () {
    var text = [];
    for (var c = 0; c < dagmeta.length; c++) {
	var meta = dagmeta [c];
	text.push ('<div class="dag">');
	text.push ('  <div>dag: ' + meta.dag + '</div>');
	text.push ('  <div>dagout: ' + meta.dagout + '</div>');
	text.push ('  <div>dagdir: ' + meta.dagdir + '</div>');
	text.push ('  <div class="jobs">')
	for (var key in meta.jobs) {
	    var job = meta.jobs [key];
	    text.push ('    <div>name: ' + job.name + '</div></br>');
	    text.push ('    <div>' + job.sub + '</div></br>');
	    text.push ('    <div>error: ' + job.error + '</div></br>');
	    text.push ('    <div>output: ' + job.output + '</div></br>');
	}
	text.push ('  </div>');
	text.push ('</div>');
    }
    $('#main').append (text.join (''));
};

var dagdebug = new DAGDebug ();

$(function () {
    dagdebug.initialize ();
});

