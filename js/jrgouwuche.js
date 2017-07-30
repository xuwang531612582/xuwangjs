/**
 * Created by lx on 2017/7/29.
 */
(function(){
	

//var parm = location.search.replace("?","");
//var parms = parm.split("=");
//var goodsID = parms[1];
//var numeberID = parms[3];
//var tokenID = parms[5];
var url = "http://h6.duchengjiu.top/shop/api_cart.php";
var parm = {token:localStorage.getItem("token")};
$.get(url,parm,function (result) {
//  document.write(result.message);
    console.log(result);
});




})();