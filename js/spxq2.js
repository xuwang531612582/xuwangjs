/**
 * Created by lx on 2017/7/29.
 */
(function(){



var parm = location.search.replace("?","");
var parms = parm.split("=");
var goodsID = parms[1];
var detailContainer = $(".detailContainer");
var url = "http://h6.duchengjiu.top/shop/api_goods.php";
$.get(url,{goods_id:goodsID},function(result){
    console.log(result.data[0]);
    var info = $("<div class='divinfo'></div>");
    var img = $("<img class='img' src='"+result.data[0].goods_thumb+"'>");
    var divright = $("<div class='divright'></div>");
    var divlim = $("<h3>"+result.data[0].goods_name+"</h3><p class='pcolor'>¥"+result.data[0].price+"</p><p>"+result.data[0].goods_desc+"</p>");
   var btnjj = $("<div class='divbuttonjj'><button class='btnjia'>-</button><input class='inputval' style='width:40px;height:40px;' type='text' value='1' /><button class='btnjian'>+</button></div><br/>");
    var btn2 = $("<button class='btn2'>立即购买</button>");
    var btn = $("<button class='btn'>加入购物车</button>");

    divright.append(divlim);
    divright.append(btnjj);
    divright.append(btn2);
    divright.append(btn);
    info.append(img);
    info.append(divright);
    detailContainer.append(info);
    var inputval = $(".inputval");
    var num = 1;
    $(".btnjian").click(function(){

        num>=10?10:num++;
        inputval.val(num);
    });
    $(".btnjia").click(function(){

        num<=1?1:num--;
        inputval.val(num);
    });


    btn.click(function(){
        var url = "http://h6.duchengjiu.top/shop/api_cart.php?token="+localStorage.getItem("token");
        var parm = {goods_id:result.data[0].goods_id,number:5};
        $.post(url,parm,function(result){

        });
        location.href = "jrgouwuche.html?goods_id="+result.data[0].goods_id+"&number="+inputval.val();
    });




});




})();






















































