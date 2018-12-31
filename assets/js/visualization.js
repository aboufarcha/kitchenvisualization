
var demo = document.getElementById('canvas');
var ctx = demo.getContext('2d');
background = new Image();

background.crossOrigin = 'anonymous';
background.src = 'http://localhost/samProject/images/projects/kitchen1/image.png';
background.onload = function () {
        ctx.drawImage(background, 0, 0, demo.width, demo.height);
      };
/// we need crossOrigin allowed image or we can't grab pixel later

floor = new Image();
floor.src = 'http://localhost/samProject/images/projects/kitchen1/floor/floor2.png';
floor.onload = function () {

        ctx.drawImage(floor, 0, demo.height-236, demo.width, 236);
      };


countertop = new Image();
countertop.src = 'http://localhost/samProject/images/projects/kitchen1/countertops/countertop6.png';
countertop.onload = function () {

        ctx.drawImage(countertop, 0, 242, demo.width-134, 89);
       
};

backsplash = new Image();
backsplash.src = 'http://localhost/samProject/images/projects/kitchen1/backsplash/backsplash2.png';
backsplash.onload = function () {
        ctx.drawImage(backsplash, 0, 0, demo.width, 316);
       
};

cabinet = new Image();
cabinet.src = 'http://localhost/samProject/images/projects/kitchen1/cabinet/cabinet1.png';
cabinet.onload = function () {

        ctx.drawImage(cabinet, 0, demo.height-533, demo.width-137, 512);
       
};


$(document).on('click', '.owl-item', function(){
            
            link = $(this).children(".item-image").data("source");
            option = $(this).children(".item-image").data("option");
            switch(option) {
                case "floor" :
                 floor.src = 'http://localhost/samProject/'+link;
                 floor.onload = function () {
                    ctx.drawImage(floor, 0, demo.height-236, demo.width, 236);
                  };
                break;
                case "countertops" :
                    countertop.src = 'http://localhost/samProject/'+link;
                    countertop.onload = function () {

                            ctx.drawImage(countertop, 0, 242, demo.width-134, 89);
                           
                    };
                break;
                case "wall":
                    backsplash.src = 'http://localhost/samProject/'+link;
                    backsplash.onload = function () {
                            ctx.drawImage(backsplash, 0, 0, demo.width, 316);
                           
                    };
                 break;
                case "cabinet":
                    cabinet.src = 'http://localhost/samProject/'+link;
                    cabinet.onload = function () {

                            ctx.drawImage(cabinet, 0, demo.height-533, demo.width-137, 512);
                           
                    };
                    break;
            }
            var w = window.innerWidth;
            var h = window.innerHeight;
           if(w <= 1366 && h <= 1024){
                $(".Component").slideUp("slow");
                $('img',".icon-"+option).attr("src","icons/"+option+" icon.svg");
                $('span',".icon-"+option).attr("class","span-off");
           }
});