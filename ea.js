$(document).ready(function(){
  $('#subnav ul li a').click(function(){
    $('li a').removeClass("active");
    $(this).addClass("active");
	});
});

$(document).ready(function(){
  $('#subnav ul li a').click(function(){
    $('#leftpane h2').text($(this).text());
	});
});
