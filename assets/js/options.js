var $owl = $('.owl-carousel');
$( ".floor" ).click(function() {
	
 if($(".Component").css("display")=="none"){
 	    $("#title-option").text("Floor remodel");
        $(".Component").addClass("animated fadeInDown", 20000);
		$(".Component").css("display","block");
		$('img',this).attr("src","icons/floor icon active.svg");
    	$('span',this).attr("class","span-on");
    	$.ajax({

              url: 'images/dim.json',
              dataType: 'json',
              success: function(data) {
                var content = '';
                if($('.owl-item').length != 0){
                    for (var i=0; i<$('.owl-item').length; i++) {
                       $owl.trigger('remove.owl.carousel', [i]).trigger('refresh.owl.carousel');
                    }
                }
                for (i in data.Floor) {

                        content += "<div class='item-image' data-option='floor'   data-source='"+data.Floor[i].obj+"'><img class='item-img' src='"+data.Floor[i].img+"' ></div><div class='item-title text-center'><span class='title-item'>"+data.Floor[i].alts+"</span>"
                        "</div>";
                        $owl.trigger('add.owl.carousel',content );
                        content = ''
                    }
                    $owl.trigger('refresh.owl.carousel');

                //$owl.append(content); This stacks the images above eachother, not affected by the carousel settings
              }
            });
	}else{
		$(".Component").slideUp("slow");
		$('img',".icon-floor").attr("src","icons/floor icon.svg");
        $('span',".icon-floor").attr("class","span-off");
	}
});

$( ".countertops" ).click(function() {
	
	if($(".Component").css("display")=="none"){
		$("#title-option").text("Countertops");
		$(".Component").css("display","block");
		$(".Component").addClass("animated fadeInDown", 20000);
		$('img',this).attr("src","icons/countertops icon active.svg");
    	$('span',this).attr("class","span-on");
    	$.ajax({

              url: 'images/dim.json',
              dataType: 'json',
              success: function(data) {
                var content = '';
                if($('.owl-item').length != 0){
                    for (var i=0; i<$('.owl-item').length; i++) {
                       $owl.trigger('remove.owl.carousel', [i]).trigger('refresh.owl.carousel');
                    }
                }
                
                for (i in data.Granite) {

                        content += "<div class='item-image' data-option='countertops'   data-source='"+data.Granite[i].obj+"'><img class='item-img' src='"+data.Granite[i].img+"' ></div><div class='item-title text-center'><span class='title-item'>"+data.Granite[i].alts+"</span></div>";
                        $owl.trigger('add.owl.carousel', content);
                        content = ''
                    }
                    $owl.trigger('refresh.owl.carousel');

                //$owl.append(content); This stacks the images above eachother, not affected by the carousel settings
              }
            });
	}else{
		$(".Component").slideUp("slow");
		$('img',".icon-countertops").attr("src","icons/countertops icon.svg");
        $('span',".icon-countertops").attr("class","span-off");
	}
 
});

$( ".wall" ).click(function() {

 if($(".Component").css("display")=="none"){
 		$("#title-option").text("Backsplash");
		$(".Component").css("display","block");
		$(".Component").attr("class","Component animated fadeInDown", 20000);
		$('img',this).attr("src","icons/wall icon active.svg");
    	$('span',this).attr("class","span-on");
    	$.ajax({

              url: 'images/dim.json',
              dataType: 'json',
              success: function(data) {
                var content = '';
                if($('.owl-item').length != 0){
                    for (var i=0; i<$('.owl-item').length; i++) {
                       $owl.trigger('remove.owl.carousel', [i]).trigger('refresh.owl.carousel');
                    }
                }
                
                for (i in data.Backsplash) {

                        content += "<div class='item-image' data-option='wall'   data-source='"+data.Backsplash[i].obj+"'><img class='item-img' src='"+data.Backsplash[i].img+"' ></div><div class='item-title text-center'><span class='title-item'>"+data.Backsplash[i].alts+"</span></div>";
                        $owl.trigger('add.owl.carousel', content);
                        content = '';
                        console.log("upload"+i);
                    }
                    $owl.trigger('refresh.owl.carousel');

                //$owl.append(content); This stacks the images above eachother, not affected by the carousel settings
              }
            });
	}else{
		$(".Component").slideUp("slow");
		$('img',".icon-wall").attr("src","icons/wall icon.svg");
    $('span',".icon-wall").attr("class","span-off");
	}
});

$( ".cabinet" ).click(function() {

 if($(".Component").css("display")=="none"){
 		$("#title-option").text("Cabinet remodeling");
		$(".Component").css("display","block");
		$(".Component").attr("class","Component animated fadeInDown", 20000);
		$('img',this).attr("src","icons/cabinet icon active.svg");
    	$('span',this).attr("class","span-on");
    	$.ajax({

              url: 'images/dim.json',
              dataType: 'json',
              success: function(data) {
                var content = '';
                if($('.owl-item').length != 0){
                    for (var i=0; i<$('.owl-item').length; i++) {
                       $owl.trigger('remove.owl.carousel', [i]).trigger('refresh.owl.carousel');
                    }
                }
                
                for (i in data.Cabinet) {

                        content += "<div class='item-image' data-option='cabinet'   data-source='"+data.Cabinet[i].obj+"' ><img class='item-img' src='"+data.Cabinet[i].img+"' ></div><div class='item-title text-center'><span class='title-item'>"+data.Cabinet[i].alts+"</span></div>";
                        $owl.trigger('add.owl.carousel', content);
                        content = '';
                        console.log("upload"+i);
                    }
                    $owl.trigger('refresh.owl.carousel');

                //$owl.append(content); This stacks the images above eachother, not affected by the carousel settings
              }
            });
	}else{
		$(".Component").slideUp("slow");
		$('img',".icon-cabinet").attr("src","icons/cabinet icon.svg");
        $('span',".icon-cabinet").attr("class","span-off");
	}
});