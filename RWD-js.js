

function $id(id){
  return document.getElementById(id);
};

//果醬內頁點擊換圖 alert(0);
$(document).ready(function(){
     var imgs=document.getElementsByClassName("Jamin-img-chage");
      for(var i=0;i<imgs.length;i++){
        imgs[i].addEventListener("click",showLarge,false);
      }  
});

    function showLarge(e){
     var small=e.target;
     document.getElementById("large").src=small.src;
    };




//首頁果醬換圖
$(document).ready(function(){
    
    //==========toLeft.onClick
    $('#toRight').click(function(){
        inde_jam()
    });
    //==========toRight.onclick
     $('#toLeft').click(function(){
        inde_jam()
    });
});
    function inde_jam(){
        var imgContainer = $id("jam-item-all");
        var imgs = imgContainer.getElementsByClassName("jam-item");
        var first = imgs[0];
        imgContainer.appendChild( first );
        var last = imgs[imgs.length - 1];
        imgContainer.insertBefore( last, first );

        for(k=1;k<=5;k++){
            imgs[0].classList.remove("j"+k);
            imgs[1].classList.remove("j"+k);
            imgs[2].classList.remove("j"+k);
            imgs[3].classList.remove("j"+k);
            imgs[4].classList.remove("j"+k);
        }

        for(var i=imgs.length-1; i>=0 ; i--){
            var j=i+1;
            imgs[i].classList.add("j"+j);
        }
    };

//首頁Banner點換圖
$(document).ready(function(){
    Banner_Circle_Click()
});

    function Banner_Circle_Click(){
        function showLargeCircle(e){
            var smallCircle = e.target;
            var largeCircles = document.querySelectorAll('.bn-center img');
            var largeCircles2 = document.querySelectorAll('.bn-side-lf img');
            var largeCircles3 = document.querySelectorAll('.bn-side-ri img');
            for(var j=0; j<anchs.length;j++){
                if( j == smallCircle.cid){
                   smallCircle.classList.add('nc-click'); 
                   largeCircles[j].classList.add('ban-click');
                   largeCircles2[j].classList.add('ban-click');
                   largeCircles3[j].classList.add('ban-click');
               }else{
                    anchs[j].classList.remove('nc-click');
                    largeCircles[j].classList.remove('ban-click');
                    largeCircles2[j].classList.remove('ban-click');
                    largeCircles3[j].classList.remove('ban-click');
               };

               if(smallCircle.cid==0){
                    $('.ban-cont h2').text('果醬嘗鮮日');
                    $('.ban-cont p').text('即日起至11/25日止，中壢本店提供十種口味果醬嘗鮮....');
               }else if(smallCircle.cid==1){
                    $('.ban-cont h2').text('中秋嚴選果醬禮盒');
                    $('.ban-cont p').text('中秋嚴選果醬禮盒，兩罐80ml的果醬，可自行挑選口味...');
               }else if(smallCircle.cid==2){
                    $('.ban-cont h2').text('端午節店休日');
                    $('.ban-cont p').text('因應端午節假期，「莓好醬坊」店休時間為6月16日至6月18日...');
               };
            }
        }
        var anchs = document.querySelectorAll(".Banner-circle a");
        for( var i=0; i<anchs.length; i++){
            anchs[i].onclick = showLargeCircle;
            anchs[i].cid = i;
        }
    };

//首頁Banner輪播圖
var timerN;
$(document).ready(function(){
     Banner_Change()
});

    function Banner_Change(){
      function showLargeCircle(){
            var smallCirclech = anchs[ts]; //此處不同於點擊
            var largeCircles = document.querySelectorAll('.bn-center img');
            var largeCircles2 = document.querySelectorAll('.bn-side-lf img');
            var largeCircles3 = document.querySelectorAll('.bn-side-ri img');
            for(var j=0; j<anchs.length;j++){
                if( j == ts){ //此處不同於點擊
                   smallCirclech.classList.add('nc-click'); 
                   largeCircles[j].classList.add('ban-click');
                   largeCircles2[j].classList.add('ban-click');
                   largeCircles3[j].classList.add('ban-click');
               }else{
                    anchs[j].classList.remove('nc-click');
                    largeCircles[j].classList.remove('ban-click');
                    largeCircles2[j].classList.remove('ban-click');
                    largeCircles3[j].classList.remove('ban-click');
               };

               if(ts==0){
                    $('.ban-cont h2').text('果醬嘗鮮日');
                    $('.ban-cont p').text('即日起至11/25日止，中壢本店提供十種口味果醬嘗鮮....');
               }else if(ts==1){
                    $('.ban-cont h2').text('中秋嚴選果醬禮盒');
                    $('.ban-cont p').text('中秋嚴選果醬禮盒，兩罐80ml的果醬，可自行挑選口味...');
               }else if(ts==2){
                    $('.ban-cont h2').text('端午節店休日');
                    $('.ban-cont p').text('因應端午節假期，「莓好醬坊」店休時間為6月16日至6月18日...');
               };
            }
        }

        timerN=setInterval(count,1500);
        var ts=1; //此處不同於點擊
        var anchs = document.querySelectorAll(".Banner-circle a");
        function count(){
            // console.log(ts) 
            ts++;
            if(ts>=anchs.length){
                ts=0;
            };
            showLargeCircle();
          };

        //首頁Banner滑鼠移入事件
        $('.Banner img').hover(
        function(){clearInterval(timerN);},
        function(){timerN=setInterval(count,2000);});
  
    };

// 滑入事件
$(document).ready(function(){
    $(window).scroll(function() {
        Scroll();
    });
});



function Scroll() {
  var wt = $(window).scrollTop();
  //對文件視窗高

// fade-in
  $('.Center-banner').each(function(){
    var it = $(this), //某元素
      wh = $(window).outerHeight(), //視窗高度
      itt= it.offset().top; //元素離頂部高度

    if (wt + wh>=itt) {
      it.addClass('fadeIn');
    }
  });

// fade-in
  $('.About-text').each(function(){
    var it = $(this), //某元素
      wh = $(window).outerHeight(), //視窗高度
      itt= it.offset().top; //元素離頂部高度

    if (wt + wh>=itt) {
      it.addClass('fadeIn');
    }
  });

//slideInRight
  $('.rm-sr').each(function(){
    var it = $(this), //某元素
      wh = $(window).outerHeight(), //視窗高度
      itt= it.offset().top; //元素離頂部高度

    if (wt + wh>=itt) {
      it.addClass('slideInRight');
      // 当元素進入視窗，添加class
    }
  });

//slideInLeft
 $('.mak-sl').each(function(){
    var it = $(this),
      wh = $(window).outerHeight(),
      itt= it.offset().top;

    if (wt + wh>=itt) {
      it.addClass('slideInLeft');
    }
  });

 //fadeInUp
      $('.jam-item').each(function(){
        var it = $(this),
          wh = $(window).outerHeight(),
          itt= it.offset().top;

        if (wt + wh-100>=itt) {
          it.addClass('slideInUp');
          setTimeout(function(){
            it.addClass('ani-ini');
          },1300);//幾秒之後加上這個class
        }
    });
};

