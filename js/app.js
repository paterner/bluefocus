!function() {
	var elements = {
		page1: $("#page1"),
		page2: $("#page2"),
		bookmark: $("#bookmark"),
		page3: $("#page3"),
		page3Star: $("#page3-star"),
		page4: $("#page4"),
        page9Input: $("#sPhoto"),
        page10Img: $("#page10-photo"),
	},

	app = {
		init: function() {      
            this.initEvent();   
            this.loading();     
        },
        loading: function() {   
            function a() {      
                d++, d == 5 && app.render();
            }
            for (var b = ["images/page1-bg.jpg", "images/page1-printer-top.png", "images/page1-printer-bottom.png", "images/page1-printer-photo.png", "images/page1-percent.png"], c = b.length, d = 0, e = 0; c > e; e++) {
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
        	});
            elements.page9Input.on('change', function() {
                // console.log(this.value)
                // elements.page10Img.attr("src", "file:///"+this.value);
                var file = this.files[0]; 

                _this.drawOnCanvas(file);
            })
        },

        render: function() {
            // setTimeout(function() {
            //     elements.page1.hide();
            //     elements.page2.show();
            // }, 3000); 
        },

        drawOnCanvas: function(file) { 
            var reader = new FileReader();  
            reader.onload = function (e) { 
                var dataURL = e.target.result
                    , canvas = document.querySelector('canvas')
                    , ctx = canvas.getContext('2d')
                    , img = new Image()
                    , srceenWidth = document.body.clientWidth
                    , srceenHeight = document.body.clientHeight;
                img.onload = function() { 
                    var square = 320;  
                    var context = canvas.getContext('2d'); 
                    context.clearRect(0, 0, square, square); 
                    alert(srceenWidth);
                    alert(srceenHeight);
                    var imageWidth = srceenWidth*.5; 
                    var imageHeight = srceenHeight*.35; 
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