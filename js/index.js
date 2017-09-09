// 动态计算轮播图高度
var carouselHeight = function() {
    var imgHeight = $('#myCarousel .item').innerHeight()
    $('#myCarousel').css({height: imgHeight + 'px'})

    $('#myCarousel .myCarousel-indicators').css({
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)'
    })
}

// 自定义淡入淡出效果轮播插件
var Carousel = function(){
    // 自动刷新

    var nowPic = $('#myCarousel > .item')
    var maxPicNum = nowPic.length
    var nowPicNum = 0

    var indicator = $('.indicator')

    var fresh = setInterval(function(){
            indicator[nowPicNum].removeAttribute('class', 'active')
            nowPic[nowPicNum].setAttribute('class', 'item')
            if(nowPicNum == maxPicNum-1){
                nowPicNum = 0
                nowPic[nowPicNum].setAttribute('class', 'item active')
                indicator[nowPicNum].setAttribute('class', 'active')
                return
            }
            nowPicNum += 1
            nowPic[nowPicNum].setAttribute('class', 'item active')
            indicator[nowPicNum].setAttribute('class', 'active')
    }, 5000)
    
    $('.controlLeft').click(function(){
        window.clearInterval(fresh)
        indicator[nowPicNum].removeAttribute('class', 'active')
        nowPic[nowPicNum].setAttribute('class', 'item')
        if(nowPicNum > maxPicNum-1){
            nowPicNum = 0
            nowPic[nowPicNum].setAttribute('class', 'item active')
            indicator[nowPicNum].setAttribute('class', 'active')
            return
        }
        if(nowPicNum == 0){
            nowPicNum = maxPicNum-1
            nowPic[nowPicNum].setAttribute('class', 'item active')
            indicator[nowPicNum].setAttribute('class', 'active')
            return
        }
        nowPicNum -= 1
        nowPic[nowPicNum].setAttribute('class', 'item active')
        indicator[nowPicNum].setAttribute('class', 'active')
    })

    $('.controlRight').click(function(){
            window.clearInterval(fresh)
            indicator[nowPicNum].removeAttribute('class', 'active')
            nowPic[nowPicNum].setAttribute('class', 'item')
            if(nowPicNum == maxPicNum-1){
                nowPicNum = 0
                nowPic[nowPicNum].setAttribute('class', 'item active')
                indicator[nowPicNum].setAttribute('class', 'active')
                return
            }
            nowPicNum += 1
            nowPic[nowPicNum].setAttribute('class', 'item active')
            indicator[nowPicNum].setAttribute('class', 'active')
    })

    $('.indicator').click(function(){
        window.clearInterval(fresh)
        indicator[nowPicNum].removeAttribute('class', 'active')
        nowPic[nowPicNum].setAttribute('class', 'item')

        nowPicNum = parseInt($(this).attr('data-slide-to'))
        nowPic[nowPicNum].setAttribute('class', 'item active')
        indicator[nowPicNum].setAttribute('class', 'active')
    })
}

// 首部导航栏不在顶部的时候增加背景色为白色的样式
var fixedBar = function(){
    // 因为是滚动高亮，可以代替下面的连接点击事件
    onScroll()

    // 连接点击事件
    /* $('#nav-bar > li > a').click(function(event){
        window.isClickLink = true
        $('#nav-bar > li > a').removeClass('active')
        var self = $(this)
        setTimeout(function() {
          self.addClass('active')
        }, 20)
    }) */
    
    // 回到顶部
    goTop()
}

var onScroll = function() {
    //  防止不能正确获取offsetTop的位置
    setTimeout(function() {
        $(window).scroll(function(){
            var links = getAnchorsPos().links
            var offsetTops = getAnchorsPos().offsetTops
            var pos = $(window).scrollTop()
            isNavInTop(pos)
            scrollActiveLink(pos, offsetTops, links)
        })
    }, 20)
}

var isNavInTop = function(pos) {
    if(!!pos){
        $('nav').addClass('navAdded')
        $('.goTop').css('display', 'block')

        if (isMobile()) {
            $('nav').css({
                display: 'block'
            })
        }
    }else{
        $('nav').removeClass('navAdded')
        $('#nav-bar > li > a').removeClass('active')
        $('#aHome').addClass('active')
        $('.goTop').css('display', 'none')

        // 移动端顶部不显示导航，滑动出现
        if (isMobile()) {
            $('nav').css({
                display: 'none'
            })
        }
    }
}

var getAnchorsPos = function() {
    var links = ['movie', 'stars', 'poster', 'skills', 'scenery', 'contact']
    var offsetTops = []
    for (var i = 0; i < links.length; i++) {
        offsetTops.push($('#' + links[i] + 'Anchor').offset().top)
    }

    return {links: links, offsetTops: offsetTops}
}

// 滚动高亮连接
var scrollActiveLink = function(pos, offsetTops, links) {
    if (pos < offsetTops[0]) {
        $('#nav-bar > li > a').removeClass('active')
        $('#aHome').addClass('active')
    }
    for (var i = 0; i < offsetTops.length - 1; i++) {
        if (pos >= offsetTops[i] && pos < offsetTops[i + 1]) {
            $('#nav-bar > li > a').removeClass('active')
            $('#a' + links[i].substr(0, 1).toUpperCase() + links[i].substr(1)).addClass('active')
        }
    }
    if (pos >= offsetTops[offsetTops.length - 1]) {
        $('#nav-bar > li > a').removeClass('active')
        $('#aContact').addClass('active')
    }
}

// 移动端判断
var isMobile = function() {
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        return true
      }

    return false
}

var goTop = function() {
    $('.goTop').click(function(){
        $(window).scrollTop(0)
        $(this).css('display', 'none')
    })
}

// Movie区域鼠标滑动
var movieHover = function(){
    
    $('.movie').mouseover(function(){
        var id = $(this).attr('id').split('-')[1]
        $('#movie-'+id+'>.movie-icon').addClass('movie-icon-add')
        $('#movie-'+id+'>.movie-icon>.fa').addClass('fa-add')
    })

    $('.movie').mouseout(function(){
        var id = $(this).attr('id').split('-')[1]
        $('#movie-'+id+'>.movie-icon').removeClass('movie-icon-add')
        $('#movie-'+id+'>.movie-icon>.fa').removeClass('fa-add')
    })
}

// 百分比圆形环
var percentBox = function(){

    var box = $('.percent-box')
    var boxNum = box.length

    box.each(function(index){
        var percent = parseInt($('.percent-box:eq('+index+')').attr('data-percent'))
        var word = $('.percent-box:eq('+index+')').attr('data-word')

        $('.percent-box:eq('+index+')').html('<div class="bg1"></div><div class="round1"></div><div class="bg2"></div><div class="round2"></div><div class="num"></div><div class="word"></div>')


        $('.percent-box:eq('+index+')> .num').text(percent+'%')
        $('.percent-box:eq('+index+')> .word').text(word)

        if(percent <= 50){
            $('.percent-box:eq('+index+') > .round1').css('transform', 'rotate('+3.6*percent+'deg)')
            $('.percent-box:eq('+index+') > .round2').css('display', 'none')
        }else{
            $('.percent-box:eq('+index+') > .round1').css('transform', 'rotate(180deg)')
            $('.percent-box:eq('+index+') > .round2').css('transform', 'rotate('+ 3.6*(percent-50) +'deg)')
            $('.percent-box:eq('+index+') > .round2').css('display', 'block')

        }

    })

}

// owl-carousel插件初始化
var owlCarousel = function(){
    $('#owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        lazyLoad: true,
        responsive:{
            0:{
                items:1
            },
            500: {
                items: 2
            },
            650: {
                items: 3
            },
            992:{
                items:4
            }
        }
    })
}

// isotpe插件
var viewsIsotope = function(){

    var $container = $('#views')
    $('#scenery-all').click(function(){
        $('#scenery > .btn-group > button').removeClass('active')
        $(this).addClass('active')
        var filterValue = $(this).attr('data-filter')
        $container.isotope({filter:filterValue})
        return false
    })
    $('#scenery-warm').click(function(){
        $('#scenery > .btn-group > button').removeClass('active')
        $(this).addClass('active')
        var filterValue = $(this).attr('data-filter')
        $container.isotope({filter:filterValue})
        return false
    })
    $('#scenery-cool').click(function(){
        $('#scenery > .btn-group > button').removeClass('active')
        $(this).addClass('active')
        var filterValue = $(this).attr('data-filter')
        $container.isotope({filter:filterValue})
        return false
    })
    $('#scenery-snow').click(function(){
        $('#scenery > .btn-group > button').removeClass('active')
        $(this).addClass('active')
        var filterValue = $(this).attr('data-filter')
        $container.isotope({filter:filterValue})
        return false
    })
    $('#scenery-flower').click(function(){
        $('#scenery > .btn-group > button').removeClass('active')
        $(this).addClass('active')
        var filterValue = $(this).attr('data-filter')
        $container.isotope({filter:filterValue})
        return false
    })
}

var scrollToAnchor = function() {
    var hash = window.location.hash
    var lightStr = ''
    if (hash) {
        lightStr = hash.split('Anchor')[0].substr(1)
        lightStr = 'a' + lightStr.substr(0, 1).toUpperCase() + lightStr.substr(1)

        $('#nav-bar > li > a').removeClass('active')
        $('#' + lightStr).addClass('active')
    }
}

var lazyLoad = function lazyLoad() {
    $('.lazyImg').lazyload()
}

$(function(){
    // 插件
    viewsIsotope()
    owlCarousel()

    // 自定义
    setTimeout(function() {
      carouselHeight()
      isNavInTop($(window).scrollTop())
      scrollToAnchor()
    }, 20)
    fixedBar()
    movieHover()
    Carousel()
    percentBox()   // 百分比圆形环，引用percentBox.css文件
    lazyLoad()
    
    window.addEventListener('resize', function() {
        carouselHeight()
        owlCarousel()
    })

    FastClick.attach(document.body)
})