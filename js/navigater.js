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
    NavigaterItem.prototype.itemClick=function(callback){
        //click 是this.item调用的  是jquery对象里面的click
        this.item.on('click',this,callback);
        return this;
    };

    
    window.NavigaterItem = NavigaterItem;
    
    
    
    //--------------------------------------------------------
    function Navigater(){
		
    }
    
    
    //点击导航按钮的时候需要知道点击按钮的商品类型id
    Navigater.prototype.createView=function(url,superView,callback){
        $.get(url,function(result){
            console.log(result);
            if(result.code==0){
                result.data.forEach(function(obj){
                    //创建导航列表
                    superView.append(new NavigaterItem(obj).itemClick(callback).item);

                });
            }
        });
        console.log(this);          
        return this;
    };
    window.Navigater = Navigater;
})();