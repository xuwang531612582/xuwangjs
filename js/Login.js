/**
 * Created by Administrator on 2017/7/24.
 */

//为了防止 其他的插件与jquery重名 可以通过noConflict找到jquery对象重新更改表示 jquery的符号
var $ = jQuery.noConflict();
(function () {
    function Login(success){
        this.showLogin(success);
    }
    Login.prototype.showLogin = function (success){
        var loginContainer = $("<div class='loginContainer'></div>");
        var closeButton = $("<p>关闭</p>");
        var usernameInput = $("<p><input type='text' placeholder='用户名'></p>");
        var passwordInput = $("<p><input type='password' placeholder='密码'></p>");
        var loginButton = $("<p><button>登录</button></p>");
        
        
        
        loginContainer.css({
            width:"400px",
            height:"300px",
            "background-color":"#912020",
            border: "5px #ffd42e solid",
            position: "absolute",
            top:"50%",
            left:"50%",
            "box-sizing": "border-box",
            margin:"-150px 0 0 -200px"
        });
		closeButton.css({
			float:"right",
			color:"white",
			padding:"5px",
			cursor:"pointer"
		})
		
	//--------------------------------------		
		closeButton.click(function(){
	//loginContainer.css("display","none");
			//下面代码    500毫秒内渐渐消失的效果
			loginContainer.fadeOut(500,function(){
			loginContainer.remove();
			});
		});
	//---------------------------------------
		loginButton.click(function(){
			$.post(
				PRODUCT_HOST+LOGIN,//qq321   111111     register注册
				{status:"login",username:usernameInput.children().val(),password:passwordInput.children().val()},
				function(data){
					//console.log(data);
					if(data.code==0){
						loginContainer.fadeOut(500,function(){
						loginContainer.remove();
						success(data.data);
						});	
						//todo:执行外面传入的   方法
					}else{
						alert(data.message);
					}
				});
		});	
	//------------------------------------------		
		var inputcss = {
			padding:"20px 0",
			width:"300px",
			margin:"0 auto",
			"text-align":"center"
		};
		usernameInput.css(inputcss);
		passwordInput.css(inputcss);
		loginButton.css(inputcss);
        loginContainer.append(closeButton);
        loginContainer.append(usernameInput);
        loginContainer.append(passwordInput);
        loginContainer.append(loginButton);
        $(document.body).append(loginContainer);
   };
    window.Login = Login;
})();