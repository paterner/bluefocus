!function() {
	var elements = {
		page1: $("#page1"),
		page2: $("#page2"),
		bookmark: $("#bookmark"),
		page3: $("#page3"),
		page3Star: $("#page3-star"),
		page4: $("#page4"),
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
        	elements.bookmark.on('tap',function(){
        		elements.page2.hide();
        		elements.page3.show();
        	});
        	elements.page3Star.on('tap',function(){
        		elements.page3.hide();
        		elements.page4.show();
        	});
        },

        render: function() {
            setTimeout(function() {
                elements.page1.hide();
                elements.page2.show();
            }, 3000); 
        },
	};

	app.init();
}(); 