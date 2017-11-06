// $(document).ready(function(){
// 	$('#page-scroll').hover(function(){
// 		$(this).addClass('animated pulse')
// 	})
// })


$(document).ready(function(){
	$('.portfolio-item-info').hover(function(){
		$(this).toggleClass('animated fadeIn')
	})
})

var obj = document.getElementById("navbar");
    var ot = obj.offsetTop;
    document.onscroll = function () {
        var st = document.body.scrollTop || document.documentElement.scrollTop;
        obj.setAttribute("data-fixed",st >= ot?"fixed":"")}