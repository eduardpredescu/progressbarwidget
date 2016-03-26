$(document).ready(function(){
    var line = new ProgressBar.Line('div.progress', {
    color: '#FFFFFF',
    fill:'#000000'

});

line.animate(0.4);
var options = {
useEasing : true,
useGrouping : true,
separator : ',',
decimal : '.',
prefix : '$ ',
suffix : ''
};
var demo = new CountUp("money", 0, 14500, 0, 1, options);
demo.start();
});