(function(){
	
	function GoodItem(obj){
		
		this.des = obj;
		var space = 20;
		var colume = 5;
		var width = (1200-space*(colume-1))/colume;

		// 保存商品Id，到当前对象中， 这样以后可以通过自己的对象来找到id
		this.goods_id = obj.goods_id;

		this.item = $("<div></div>");
		var name = $("<p class='goods-name'>"+obj.goods_name+"</p>");
		var other = $("<p><img width='"+width+"px' src='"+obj.goods_thumb+"' alt=''></p><h3>¥"+obj.price+"</h3><p>"+obj.goods_desc+"</p>");
		
		
		this.item.append(name);
		this.item.append(other)
		
		this.item.css({
            width:width+"px",
            height:"384px",
            border:"1px black solid",
            "box-sizing": "border-box",
            float:"left",
            overflow: "hidden",
            position: "relative"
        });

        name.css({
            position: "absolute",
            height: "384px",
            "line-height": "20px",
            display: "none",
            
            opacity:"0.5"
            
        });
		
		this.item.hover(function(){
			$(this).children().css("display","block")
		},function(){
			$(".goods-name").css("display","none")
		});
	
	
	}
	
	//GoodItem.prototype.click = function(callback){
	//	this.item.on("click",this,callback);
	//	return this;
	//}
	//

	GoodItem.prototype.click = function(callback){
		var that = this;

		this.item.click(function(){
			//console.log("#55");
			//console.log(that);
			//console.log(that.goods_id);
			location.href="spxq.html?goodsID="+that.goods_id;
		});
		return this;
	};

	function Good(url,parm,superView,action){
		
		this.loadData(url,parm,superView,action);
		
	}
	//Good.prototype.spxqclick = function(data){
	//	console.log(this);
	//	console.log(this.item);
	//	this.item.click(function(data){
	//		console.log("#22");
	//		location.href="spxq.html?goodsID="+data.goods_id;
	//	})
    //
	//};
	
	Good.prototype.loadData = function(url,parm,superView,action){
		$.get(url,parm,function(result){
			//console.log("===================");
			//console.log(this);
			if(result.code==0){
				//console.log("#33");
				this.showGoodsView(result.data,superView,action);
				// this.spxqclick(result);
			}
			
		}.bind(this));
		
	};
	
	Good.prototype.showGoodsView = function(goods,superView,action){
		goods.forEach(function(data){
			superView.append(new GoodItem(data).click(action).item);
		});
		
	}
	
	window.Good = Good;
	
})();
