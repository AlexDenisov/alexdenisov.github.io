 //Enabling drop down navigation for mobile screen sizes

$(function () {
     $("#nav").tinyNav({ header: '-- Navigation --' });
  });

//Adjusting the sub-menu positions so they are centered
document.onreadystatechange = function() {
    if (document.readyState === 'complete') {
	 	$("ul.ww-nav ul.dropdown-menu").each(function(){
	 		parentWidth = $(this).parent().innerWidth();
	 		menuWidth = $(this).innerWidth();
	 		margin = (parentWidth / 2 ) - (menuWidth / 2);
	 		margin = margin + "px";
	 		$(this).css("margin-left", margin);
	 	});
 	}
}