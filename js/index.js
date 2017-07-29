/**
 * Created by Administrator on 2017/7/24/024.
 */
function init(){
    $('.header-top-login').click(function(){
        new Login(function(user){
            $('.header-top-menu ul li:first-child').html('<a href="#">'+user.username+'</a>');
        });
    });
    
    
    
    
   //-----------------------------------------------------------------------------------
    new Navigater().createView(PRODUCT_HOST+PRODUCT_TYPE,$(".main-nav-container"),function(event){
     //   console.log(event);
    });
    
    
    
    
    
    
    
	//----------------------------------------------------------------------------------
    new corouselView.Corouse("#left-course",[{imagePath:"image/hot1.jpg"},{imagePath:"image/hot2.jpg"}],200,400).putSuperView().startTimer(3000);

	new corouselView.Corouse("#center-course",[{imagePath:"image/2.jpg"},{imagePath:"image/6.jpg"}],752,400).putSuperView().startTimer(2000);
	
	new corouselView.Corouse("#right-course",[{imagePath:"image/hot1.jpg"},{imagePath:"image/hot2.jpg"}],200,400).putSuperView().createControlButton().startTimer(3000);
	
	//----------------------------------------------------------------------------------
	new Good(PRODUCT_HOST+GOODS,null,$(".goods-container"),function(event){
		console.log(event);

    });
}

init();