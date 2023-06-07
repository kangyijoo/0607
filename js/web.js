 $(function() {

/*마우스*/
const el = document.querySelector('.followAnimation');

let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

document.body.addEventListener('mousemove',(event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

tick();
function tick() {

    requestAnimationFrame(tick);
    currentX += (mouseX - currentX) * 0.1;
    currentY += (mouseY - currentY) * 0.1;


    el.style.transform = `translate(${currentX}px, ${currentY}px)`;
}


 /*웹 카테고리 화면 */ 
    $(".menu>ul").on("mouseenter",function(){
        $(".sub").stop().slideDown(500);
        $(this).next().stop().slideUp(500);
        // $("ul.sub").css("background","#ccc");
    
     });

     $(".menu>ul").on("mouseleave",function(){
        $(".sub").stop().slideUp();

     });
    
    


/*모바일 태블릿 햄버거 토글*/
    $('.nonemenu').click(function() {
        $('.nonemenu1').toggleClass('on')
    });

    $(".nonemenu1>ul>li>a").click(function(){
        if($(this).next().is(":visible")){
            $(this).next().stop().slideUp(500);
            $(this).children("img").attr("src","img/downward-arrow.png");
        }else{
            $(".sub").stop().slideUp(500);
            $(".nonemenu1>ul>li>a").children("img").attr("src","img/downward-arrow.png");
            $(this).next().stop().slideDown(500);
            $(this).children("img").attr("src","img/arrow-up.png");
        }
    });

/*상품 이미지*/

   const mwin=$(window).width();
   if(mwin<=641){
    $(".p1m").css("display","block");
    $(".p1m").slick();
   }else{
    $(".p1m").css("display","none");
   }


// $('.p1m').slick({
//  dots:false,
//  arrows: false,
//  autoplay: true,
//  infinite: true,
//  autoplaySpeed: 1000,
//  slidesToShow: 1,   //한 화면에 보여줄 아이템수
//  slidesToScroll: 1, // 한번에 슬라이드 시킬 아이템수
//  });

/*전시이미지 슬릭 이미지 수정해야함 */


$('.c1').slick({
    autoplay: true,
    infinite: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,   //한 화면에 보여줄 아이템수
    slidesToScroll: 1, // 한번에 슬라이드 시킬 아이템수
    responsive: [
        {
            breakpoint: 800,   //미만
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
         },
         {
            breakpoint: 641,   // 600 미만
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
    ]   
});   


    $(".footer3mo2 li img").click(function(){
        $(this).next().slideToggle();
    });    

});
