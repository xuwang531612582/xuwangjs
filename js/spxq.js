

console.log("llll")
var parm = location.search.replace("?","");

var parms = parm.split("=");
var goodsID = parms[1];
console.log(goodsID);

////获取商品的详细信息
//var detailContainer = $(".detailContainer");
//var url = "http://h6.duchengjiu.top/shop/api_goods.php";
//$.get(url,{goods_id:goodsID},function (result) {
//  // document.write(result.message);
//  console.log(result.data[0]);
//
//  var info = $("<div><h3>"+result.data[0].goods_name+"</h3><img src='"+result.data[0].goods_thumb+"' alt=''></div>");
//
//  var addCar = $("<button>加入购物车</button>");
//  info.append(addCar);
//  info.click(function () {
//      alert(result.data[0].goods_id);
//      var url = "http://h6.duchengjiu.top/shop/api_cart.php?token="+localStorage.getItem("token");
//      var parm = {goods_id:result.data[0].goods_id,number:5};
//      $.post(url,parm,function (result) {
//          document.write(result.message);
//          console.log(result.data);
//      });
//  });
//  detailContainer.append(info);
//});