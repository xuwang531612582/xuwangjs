/**
 * Created by Administrator on 2017/7/25/025.
 */

var $ = jQuery.noConflict();
(function(){

    //显示在导航上面的每一个按钮
    function NavigaterItem(obj){
        var obj = obj||{};
        this.name = obj.cat_name;
        this.id = obj.cat_id;
        this.item = $("<li>"+this.name+"</li>");
    }
    //itemClick  是NavigaterItem上面的itemClick
    //callback 函数中的形参
      var goodscontainer = $(".goods-container");
    NavigaterItem.prototype.itemClick=function(callback){
        var that = this;
        that.item.click(function(){
            var url = "http://h6.duchengjiu.top/shop/api_goods.php";
            var parm = {cat_id:that.id};
            $.get(url,parm,function (result) {
//              console.log(result.data)
                //if(result.code==0){
                    result.data.forEach(function (data) {
//                  console.log(data);
					var space = 20;
					var colume = 5;
					var width = (1200-space*(colume-1))/colume;
					var divdiv = $("<div></div>")
                    var name = $("<p class='goods-name'>"+data.goods_name+"</p>");
					var other = $("<p><img width='"+width+"px' src='"+data.goods_thumb+"' alt=''></p><h3>¥"+data.price+"</h3><p>"+data.goods_desc+"</p>");
					divdiv.append(name);
					divdiv.append(other);
					goodscontainer.append(divdiv);
					divdiv.css({
						float:"left",
						width:"224px"
					})
					name.css({
			            position: "absolute",
			            height: "384px",
			            "line-height": "20px",
			            display: "none",
			            opacity:"0.5"
            
       		 });
           });
                //
                //};
                //document.write(result.message);

            });
        });

        //click 是this.item调用的  是jquery对象里面的click
        //this.item.on('click',this,callback);
        return this;
    };

    
    window.NavigaterItem = NavigaterItem;
    
    
    
    //--------------------------------------------------------
    function Navigater(){
		
    }
    
    
    //点击导航按钮的时候需要知道点击按钮的商品类型id
    Navigater.prototype.createView=function(url,superView,callback){
        $.get(url,function(result){
            //console.log(result);
            if(result.code==0){
                result.data.forEach(function(obj){
                    //创建导航列表
                    superView.append(new NavigaterItem(obj).itemClick(callback).item);

                });
            }
        });
//      console.log(this);          
        return this;
    };
    window.Navigater = Navigater;
})();