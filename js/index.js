// 动态计算轮播图高度
let carouselHeight = function() {
    let imgHeight = $('#myCarousel .item').innerHeight()
    $('#myCarousel').css({height: imgHeight + 'px'})

    $('#myCarousel .myCarousel-indicators').css({
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)'
    })
}

//自定义淡入淡出效果轮播插件
var Carousel = function(){
            //自动刷新

            var nowPic = $('#myCarousel > .item');
            var maxPicNum = nowPic.length;
            var nowPicNum = 0;

            var indicator = $('.indicator');

            var fresh = setInterval(function(){
                    indicator[nowPicNum].removeAttribute('class', 'active');
                    nowPic[nowPicNum].setAttribute('class', 'item');
                    if(nowPicNum == maxPicNum-1){
                        nowPicNum = 0;
                        nowPic[nowPicNum].setAttribute('class', 'item active');
                        indicator[nowPicNum].setAttribute('class', 'active');
                        return;
                    }
                    nowPicNum += 1;
                    nowPic[nowPicNum].setAttribute('class', 'item active');
                    indicator[nowPicNum].setAttribute('class', 'active');
            }, 5000);
            
            $('.controlLeft').click(function(){
                window.clearInterval(fresh);
                indicator[nowPicNum].removeAttribute('class', 'active');
                nowPic[nowPicNum].setAttribute('class', 'item');
                if(nowPicNum > maxPicNum-1){
                    nowPicNum = 0;
                    nowPic[nowPicNum].setAttribute('class', 'item active');
                    indicator[nowPicNum].setAttribute('class', 'active');
                    return;
                }
                if(nowPicNum == 0){
                    nowPicNum = maxPicNum-1;
                    nowPic[nowPicNum].setAttribute('class', 'item active');
                    indicator[nowPicNum].setAttribute('class', 'active');
                    return;
                }
                nowPicNum -= 1;
                nowPic[nowPicNum].setAttribute('class', 'item active');
                indicator[nowPicNum].setAttribute('class', 'active');
            });

            $('.controlRight').click(function(){
                    window.clearInterval(fresh);
                    indicator[nowPicNum].removeAttribute('class', 'active');
                    nowPic[nowPicNum].setAttribute('class', 'item');
                    if(nowPicNum == maxPicNum-1){
                        nowPicNum = 0;
                        nowPic[nowPicNum].setAttribute('class', 'item active');
                        indicator[nowPicNum].setAttribute('class', 'active');
                        return;
                    }
                    nowPicNum += 1;
                    nowPic[nowPicNum].setAttribute('class', 'item active');
                    indicator[nowPicNum].setAttribute('class', 'active');
            });

            $('.indicator').click(function(){
                window.clearInterval(fresh);
                indicator[nowPicNum].removeAttribute('class', 'active');
                nowPic[nowPicNum].setAttribute('class', 'item');

                nowPicNum = parseInt($(this).attr('data-slide-to'));
                nowPic[nowPicNum].setAttribute('class', 'item active');
                indicator[nowPicNum].setAttribute('class', 'active');
            });
        };

//首部导航栏不在顶部的时候增加背景色为白色的样式
var fixedBar = function(){
    //顶部的时候scrollTop() == 0
    if($(window).scrollTop()){
        $('nav').addClass('navAdded');
        $('.goTop').css('display', 'block');
    }else{
        $('nav').removeClass('navAdded');
        $('#nav-bar > li > a').removeClass('active');
        $('#aHome').addClass('active');
        $('.goTop').css('display', 'none');
    }

    $(window).scroll(function(){
        if($(window).scrollTop()){
            $('nav').addClass('navAdded');
            $('.goTop').css('display', 'block');
        }else{
            $('nav').removeClass('navAdded');
            $('#nav-bar > li > a').removeClass('active');
            $('#aHome').addClass('active');
            $('.goTop').css('display', 'none');
        }
    });

    //放大缩小窗口
    $(window).resize(function(){
        var width = $(window).width();

        if(width > 768){
            //$('nav').css('opacity', '1');
            $('nav').css('display', 'block');
            //$('.xs-navbar-right').css('opacity', '1');
            //$('.xs-navbar-left').css('opacity', '0');
            $('.xs-navbar-left').css('display', 'none');
            $('.xs-navbar-right').css('display', 'block');
        }
        if(width < 768){
            //$('nav').css('opacity', '0');
            $('nav').css('display', 'block');
            //$('.xs-navbar-right').css('opacity', '1');
            //$('.xs-navbar-left').css('opacity', '0');
            $('.xs-navbar-left').css('display', 'none');
            $('.xs-navbar-right').css('display', 'block');
        }
    });

    //点击显示隐藏
    $('.xs-navbar-left').click(function(){
        //$(this).css('opacity', '0');
        $(this).css('display', 'none');
        //$('nav').css('opacity', '1');
        $('nav').css('display', 'block');
        //$('.xs-navbar-right').css('opacity', '1');
        $('.xs-navbar-right').css('display', 'block');
    });
    $('.xs-navbar-right').click(function(){
       // $(this).css('opacity', '0');
        $(this).css('display', 'none');
        //$('nav').css('opacity', '0');
        $('nav').css('display', 'none');
        $('.xs-navbar-left').css('display', 'block');
        $('.xs-navbar-left').css('opacity', '1');
    });

    //点击导航栏连接
    $('#nav-bar > li > a').click(function(){
        $('#nav-bar > li > a').removeClass('active');
        $(this).addClass('active');
    });

    //页面下滑改变导航栏连接
    $('#movie').waypoint(function(){
        $('#nav-bar > li > a').removeClass('active');
        $('#aMovie').addClass('active');
    }, {offset:'0%'});
    $('#stars').waypoint(function(){
        $('#nav-bar > li > a').removeClass('active');
        $('#aStars').addClass('active');
    }, {offset:'0%'});
    $('#poster').waypoint(function(){
        $('#nav-bar > li > a').removeClass('active');
        $('#aPoster').addClass('active');
    }, {offset:'0%'});
    $('#skills').waypoint(function(){
        $('#nav-bar > li > a').removeClass('active');
        $('#aSkills').addClass('active');
    }, {offset:'0%'});
    $('#scenery').waypoint(function(){
        $('#nav-bar > li > a').removeClass('active');
        $('#aScenery').addClass('active');
    }, {offset:'0%'});
    $('#contact').waypoint(function(){
        $('#nav-bar > li > a').removeClass('active');
        $('#aContact').addClass('active');
    }, {offset:'0%'});


    $('.goTop').click(function(){
        $(this).css('display', 'none');
        $(window).scrollTop(0);
    });
};

//Movie区域鼠标滑动
var movieHover = function(){
    
    $('.movie').mouseover(function(){
        var id = $(this).attr('id').split('-')[1];
        $('#movie-'+id+'>.movie-icon').addClass('movie-icon-add');
        $('#movie-'+id+'>.movie-icon>.fa').addClass('fa-add');
    });

    $('.movie').mouseout(function(){
        var id = $(this).attr('id').split('-')[1];
        $('#movie-'+id+'>.movie-icon').removeClass('movie-icon-add');
        $('#movie-'+id+'>.movie-icon>.fa').removeClass('fa-add');
    });
};

//百分比圆形环
var percentBox = function(){

    var box = $('.percent-box');
    var boxNum = box.length;

    box.each(function(index){
        var percent = parseInt($('.percent-box:eq('+index+')').attr('data-percent'));
        var word = $('.percent-box:eq('+index+')').attr('data-word');

        $('.percent-box:eq('+index+')').html('<div class="bg1"></div><div class="round1"></div><div class="bg2"></div><div class="round2"></div><div class="num"></div><div class="word"></div>');


        $('.percent-box:eq('+index+')> .num').text(percent+'%');
        $('.percent-box:eq('+index+')> .word').text(word);

        if(percent <= 50){
            $('.percent-box:eq('+index+') > .round1').css('transform', 'rotate('+3.6*percent+'deg)');
            $('.percent-box:eq('+index+') > .round2').css('display', 'none');
        }else{
            $('.percent-box:eq('+index+') > .round1').css('transform', 'rotate(180deg)');
            $('.percent-box:eq('+index+') > .round2').css('transform', 'rotate('+ 3.6*(percent-50) +'deg)');
            $('.percent-box:eq('+index+') > .round2').css('display', 'block');

        }

    });

};

//owl-carousel插件初始化
var owlCarousel = function(){
    $('#owl-carousel').owlCarousel({

        items : 3,
        autoPlay : true,

    });
};

//isotpe插件
var viewsIsotope = function(){

    var $container = $('#views');
    $('#scenery-all').click(function(){
        $('#scenery > .btn-group > button').removeClass('active');
        $(this).addClass('active');
        var filterValue = $(this).attr('data-filter');
        $container.isotope({filter:filterValue});
        return false;
    });
    $('#scenery-warm').click(function(){
        $('#scenery > .btn-group > button').removeClass('active');
        $(this).addClass('active');
        var filterValue = $(this).attr('data-filter');
        $container.isotope({filter:filterValue});
        return false;
    });
    $('#scenery-cool').click(function(){
        $('#scenery > .btn-group > button').removeClass('active');
        $(this).addClass('active');
        var filterValue = $(this).attr('data-filter');
        $container.isotope({filter:filterValue});
        return false;
    });
    $('#scenery-snow').click(function(){
        $('#scenery > .btn-group > button').removeClass('active');
        $(this).addClass('active');
        var filterValue = $(this).attr('data-filter');
        $container.isotope({filter:filterValue});
        return false;
    });
    $('#scenery-flower').click(function(){
        $('#scenery > .btn-group > button').removeClass('active');
        $(this).addClass('active');
        var filterValue = $(this).attr('data-filter');
        $container.isotope({filter:filterValue});
        return false;
    });
};


//waypoints
var animate_popdown = function(){
    $('.animate_popdown').waypoint(function(direction){
        if(direction === 'down' && !$(this.element).hasClass('animated')){
            $(this.element).addClass('item-animate-popdown');
            setTimeout(function(){
                $('body .animate_popdown.item-animate-popdown').each(function(k){
                    var el = $(this);
                    setTimeout(function(){
                        el.addClass('fadeInDown animated');
                        el.removeClass('item-animate-popdown');
                    }, k*200, 'easeInOutExpo');
                });
            }, 100);
        }
    }, {offset:'80%'});
};

var animate_bounceLeft = function(){
    $('.animate_bounceLeft').waypoint(function(direction){
        if(direction === 'down' && !$(this.element).hasClass('animated')){
            $(this.element).addClass('item-animate-popdown');
            setTimeout(function(){
                $('body .animate_bounceLeft.item-animate-popdown').each(function(k){
                    var el = $(this);
                    setTimeout(function(){
                        el.addClass('bounceInLeft animated');
                        el.css('opacity', '1');
                        el.removeClass('item-animate-popdown');
                    }, k*1000, 'easeInOutExpo');
                });
            }, 100);
        }
    }, {offset:'80%'});
};

var animate_bounceRight = function(){
    $('.animate_bounceRight').waypoint(function(direction){
        if(direction === 'down' && !$(this.element).hasClass('animated')){
            $(this.element).addClass('item-animate-popdown');
            setTimeout(function(){
                $('body .animate_bounceRight.item-animate-popdown').each(function(k){
                    var el = $(this);
                    setTimeout(function(){
                        el.addClass('bounceInRight animated');
                        el.css('opacity', '1');
                        el.removeClass('item-animate-popdown');
                    }, 200, 'easeInOutExpo');
                });
            }, 1000);
        }
    }, {offset:'80%'});
};

var animate_rotateLeft = function(){
    $('.animate_rotateLeft').waypoint(function(direction){
        if(direction === 'down' && !$(this.element).hasClass('animated')){
            $(this.element).addClass('item-animate-popdown');
            setTimeout(function(){
                $('body .animate_rotateLeft.item-animate-popdown').each(function(k){
                    var el = $(this);
                    setTimeout(function(){
                        el.addClass('rotateInDownLeft animated');
                        el.css('opacity', '1');
                        el.removeClass('item-animate-popdown');
                    }, 200, 'easeInOutExpo');
                });
            }, 0);
        }
    }, {offset:'80%'});
};

var animate_rotateRight = function(){
    $('.animate_rotateRight').waypoint(function(direction){
        if(direction === 'down' && !$(this.element).hasClass('animated')){
            $(this.element).addClass('item-animate-popdown');
            setTimeout(function(){
                $('body .animate_rotateRight.item-animate-popdown').each(function(k){
                    var el = $(this);
                    setTimeout(function(){
                        el.addClass('rotateInDownRight animated');
                        el.css('opacity', '1');
                        el.removeClass('item-animate-popdown');
                    }, 200, 'easeInOutExpo');
                });
            }, 0);
        }
    }, {offset:'80%'});
};

var animate_bounceUp = function(){
    $('.animate_bounceUp').waypoint(function(direction){
        if(direction === 'down' && !$(this.element).hasClass('animated')){
            $(this.element).addClass('item-animate-popdown');
            setTimeout(function(){
                $('body .animate_bounceUp.item-animate-popdown').each(function(k){
                    var el = $(this);
                    setTimeout(function(){
                        el.addClass('bounceInUp animated');
                        el.css('opacity', '1');
                        el.removeClass('item-animate-popdown');
                    }, 200, 'easeInOutExpo');
                });
            }, 0);
        }
    }, {offset:'80%'});
};



var startWow = function(){
    var wow = new WOW(
      {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       250,          // distance to the element when triggering the animation (default is 0)
        mobile:       true,       // trigger animations on mobile devices (default is true)
        live:         true,       // act on asynchronously loaded content (default is true)
        callback:     function(boxx) {
          // the callback is fired every time an animation is started
          // the argument that is passed in is the DOM node being animated
        }
      }
    );
    wow.init();
};

var startMagnific = function(){
    $('.gallery-img').magnificPopup({
        type: 'image',
        gallery:{
            enabled:true
        }
    });
};

$(function(){
    //插件
    viewsIsotope();
    owlCarousel();
    startWow();
    startMagnific();

    //自定义
    carouselHeight();
    fixedBar();
    movieHover();
    Carousel();
    percentBox();   //百分比圆形环，引用percentBox.css文件

    //waypoints插件配合animate.css
    animate_popdown();
    animate_bounceLeft();
    animate_bounceRight();
    animate_rotateLeft();
    animate_rotateRight();
    animate_bounceUp();

    window.addEventListener('resize', carouselHeight)
});