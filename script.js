var urlTargets = [
	'https://www.moretonbay.qld.gov.au/maps-disaster.aspx',
	'http://www.bom.gov.au/products/IDR503.loop.shtml#skip',
	];


var secondsPerTab = 5;
var mSecondsPerTab = secondsPerTab * 1000;
var win = [];
var urlIndex = 0;
var startbutton = document.getElementById("startbutton");
var stopbutton = document.getElementById("stopbutton");



// FUNCTIONS
//-------------------------------------------
function ChangeTab(){
	win[urlIndex].close();
	win[urlIndex+1] = window.open(urlTargets[urlIndex+1]);
	console.log(urlIndex);
	urlIndex++
	if(urlIndex >= urlTargets.length) {
		win[urlIndex].close();
		urlIndex = 0;
		win[urlIndex]=window.open(urlTargets[urlIndex]);
	}
}




//MAIN PROGRAM
//-------------------------------------------
var output = '<ul>';
	$.each(urlTargets, function (key,val) {
		output += '<li>' + val + '</li>';
	});
output += '</ul>';
$('#update').html(output); //Display URL Targets in list

console.log(urlTargets.length);

win[urlIndex]=window.open(urlTargets[urlIndex]);

var intervalHandler = setInterval(ChangeTab,mSecondsPerTab);

stopbutton.onclick = function (){
	clearInterval(intervalHandler);
	win[urlIndex].close();
};
