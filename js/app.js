!function() {
	var elements = {
		page1: $("#page1"),
		page2: $("#page2"),
		bookmark: $("#bookmark"),
		page3: $("#page3"),
		page3Star: $("#page3-star"),
        page4: $("#page4"),
		page5: $("#page5"),
        page6: $("#page6"),
        page7: $("#page7"),
        page8: $("#page8"),
        page9: $("#page9"),
        page10: $("#page10"),
        page10Input: $("#sPhoto"),
        page10Img: $("#page10-photo"),
        page10tip: $(".page10-tip"),
        page10tipbox: $(".page10-tip-box"),
        page10tipbg: $(".page10-tip-bg"),
	},

	app = {
		init: function() {      
            this.initEvent();   
            // this.loading();   
            // this.render();  
        },
        loading: function() {   
            function a() {      
                d++, d == 5 && app.render();
            }
            for (var b = ["images/page1-bg.jpg", "images/page1-printer-top.png", "images/page1-printer-photo.png", "images/page1-percent.png"], c = b.length, d = 0, e = 0; c > e; e++) {
                var g = new Image();
                g.onload = a;
                g.src = b[e];
            }
        }, 
        initEvent: function() {
            var _this = this;
        	elements.bookmark.on('tap',function(){
        		elements.page2.hide();
        		elements.page3.show();
        	});
        	elements.page3Star.on('tap',function(){
        		elements.page3.hide();
        		elements.page4.show();
                elements.page5.show();
                elements.page6.show();
                elements.page7.show();
                elements.page8.show();
                setTimeout(function(){
                    elements.page4.removeClass('page4-photo').addClass('page4-fadeout');
                    elements.page5.addClass('page5-fadein')
                    elements.page5.find('div').eq(0).addClass('page5-shadow');
                    elements.page5.find('div').eq(1).addClass('page5-people');
                    elements.page5.find('div').eq(2).addClass('page5-heart');
                    elements.page5.find('div').eq(3).addClass('page5-fireworks');
                    elements.page5.addClass('page5-photo');
                    setTimeout(function(){
                        elements.page5.removeClass('page5-fadein').addClass('page5-fadeout');
                        elements.page6.addClass('page6-fadein');
                        elements.page6.find('div').eq(0).addClass('page6-shadow');
                        elements.page6.find('div').eq(1).addClass('page6-people');
                        elements.page6.find('div').eq(2).addClass('page6-shadow2');
                        elements.page6.addClass('page6-photo');
                        setTimeout(function(){
                            elements.page6.addClass('page6-fadeout');
                            elements.page7.addClass('page7-fadein');
                            elements.page7.find('div').eq(0).addClass('page7-tree');
                            elements.page7.find('div').eq(1).addClass('page7-people');
                            elements.page7.addClass('page7-photo');
                            setTimeout(function(){
                                elements.page7.addClass('page7-fadeout');
                                elements.page8.addClass('page8-fadein');
                                elements.page8.find('div').eq(0).addClass('page8-photo1');
                                elements.page8.find('div').eq(1).addClass('page8-photo2');
                                elements.page8.find('div').eq(2).addClass('page8-photo3');
                                setTimeout(function() {
                                    elements.page8.hide();
                                    elements.page9.show();
                                }, 8000); 
                            },8000)
                        }, 8000)    
                    },8000)
                },4500)
        	});
            elements.page10Input.on('change', function() {
                // console.log(this.value)
                // elements.page10Img.attr("src", "file:///"+this.value);
                var file = this.files[0]; 

                _this.drawOnCanvas(file);
            });
            elements.page10tip.on('tap', function() {
                var screenWidth = document.body.clientWidth
                    , screenHeight = document.body.clientHeight;
                elements.page10tipbg.css({
                    height: screenHeight*.8,
                    width: screenWidth*.9,
                });
                elements.page10tipbox.find('p').width(screenHeight*.7)
                elements.page10tipbox.show();
            });
           
        },

        render: function() {
            setTimeout(function() {
                elements.page1.hide();
                elements.page2.show();
            }, 3000); 
        },

        drawOnCanvas: function(file) { 
            var reader = new FileReader();  
            reader.onload = function (e) { 
                var dataURL = e.target.result
                    , canvas = document.querySelector('canvas')
                    , ctx = canvas.getContext('2d')
                    , img = new Image()
                    , screenWidth = document.body.clientWidth
                    , screenHeight = document.body.clientHeight;
                img.onload = function() { 
                    var square = 320;  
                    var context = canvas.getContext('2d'); 
                    context.clearRect(0, 0, square, square); 
                    alert(screenWidth);
                    alert(screenHeight);
                    var imageWidth = screenWidth*.5; 
                    var imageHeight = screenHeight*.35; 
                    canvas.width = imageWidth; 
                    canvas.height = imageHeight;
                    var offsetX = 0; 
                    var offsetY = 0; 
                    // if (this.width > this.height) { 
                    //     imageWidth = Math.round(square * this.width / this.height); 
                    //     imageHeight = square; 
                    //     offsetX = - Math.round((imageWidth - square) / 2); 
                    // } else { 
                    //     imageHeight = Math.round(square * this.height / this.width); 
                    //     imageWidth = square;  
                    //     offsetY = - Math.round((imageHeight - square) / 2);  
                    // }   
                    context.drawImage(this, offsetX, offsetY, imageWidth, imageHeight); 
                    // var base64 = canvas.toDataURL('image/jpeg',0.5); $('#j_thumb').val(base64.substr(22)); 
                    $(".page9-photo").addClass("page9-photoAnimation");
                }; 
                img.src = dataURL; 
            };  reader.readAsDataURL(file); 
        }
	};

	app.init();
}(); 