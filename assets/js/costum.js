$( ".icon" ).click(function() {
	var className = this.className;
   /* $.getScript('visualization.js', function () {          
              mouseHovering("floor");  
        }); */
   
        
  switch(className) {
    case "icon icon-floor":

        $('img',this).attr("src","icons/floor icon active.svg");
        $('span',this).attr("class","span-on");
        $(this).attr("class","icon icon-floor active");
        $(".icon-countertops").attr("class","icon icon-countertops");
        $(".icon-wall").attr("class","icon icon-wall");
        $(".icon-cabinet").attr("class","icon icon-cabinet");
        $('img',".icon-countertops").attr("src","icons/countertops icon.svg");
        $('span',".icon-countertops").attr("class","span-off");
        $('img',".icon-wall").attr("src","icons/wall icon.svg");
        $('span',".icon-wall").attr("class","span-off");
        $('img',".icon-cabinet").attr("src","icons/cabinet icon.svg");
        $('span',".icon-cabinet").attr("class","span-off");
        
        
        
        break;
    case "icon icon-countertops":
    	$('img',this).attr("src","icons/countertops icon active.svg");
    	$('span',this).attr("class","span-on")
        $(this).attr("class","icon icon-countertops active");
        $(".icon-floor").attr("class","icon icon-floor");
        $(".icon-wall").attr("class","icon icon-wall");
        $(".icon-cabinet").attr("class","icon icon-cabinet");
        $('img',".icon-floor").attr("src","icons/floor icon.svg");
        $('span',".icon-floor").attr("class","span-off");
        $('img',".icon-wall").attr("src","icons/wall icon.svg");
        $('span',".icon-wall").attr("class","span-off");
        $('img',".icon-cabinet").attr("src","icons/cabinet icon.svg");
        $('span',".icon-cabinet").attr("class","span-off");
        
        break;
    case "icon icon-wall":
        $('img',this).attr("src","icons/wall icon active.svg");
        $('span',this).attr("class","span-on")
        $(this).attr("class","icon icon-wall active");
        $(".icon-floor").attr("class","icon icon-floor");
        $(".icon-countertops").attr("class","icon icon-countertops");
        $(".icon-cabinet").attr("class","icon icon-cabinet");
        $('img',".icon-floor").attr("src","icons/floor icon.svg");
        $('span',".icon-floor").attr("class","span-off");
        $('img',".icon-countertops").attr("src","icons/countertops icon.svg");
        $('span',".icon-countertops").attr("class","span-off");
        $('img',".icon-cabinet").attr("src","icons/cabinet icon.svg");
        $('span',".icon-cabinet").attr("class","span-off");
        
        break;
    case "icon icon-cabinet":
        $('img',this).attr("src","icons/cabinet icon active.svg");
        $('span',this).attr("class","span-on")
        $(this).attr("class","icon icon-cabinet active");
        $(".icon-floor").attr("class","icon icon-floor");
        $(".icon-countertops").attr("class","icon icon-countertops");
        $(".icon-wall").attr("class","icon icon-wall");
        $('img',".icon-floor").attr("src","icons/floor icon.svg");
        $('span',".icon-floor").attr("class","span-off");
        $('img',".icon-countertops").attr("src","icons/countertops icon.svg");
        $('span',".icon-countertops").attr("class","span-off");
        $('img',".icon-wall").attr("src","icons/wall icon.svg");
        $('span',".icon-wall").attr("class","span-off");
        
        break;
   }
});