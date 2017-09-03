var percentBox = function(){

	var box = $('.percent-box');
	var boxNum = box.length;
		

	var ani = document.styleSheets[1];


	box.each(function(index){
		var percent = parseInt($('.percent-box:eq('+index+')').attr('data-percent'));
		var word = $('.percent-box:eq('+index+')').attr('data-word');

		$('.percent-box:eq('+index+')').html('<div class="bg1"></div><div class="round1"></div><div class="bg2"></div><div class="round2"></div><div class="num"></div><div class="word"></div>');
		
			var start = 0;
            $('.percent-box:eq('+index+')> .num').text(start + '%');
            var x = setInterval(function(){
                var num = $('.percent-box:eq('+index+')> .num').text().split('%')[0];
                if(num < percent){
                    $('.percent-box:eq('+index+')> .num').text(start + '%');
                    start++;
                }else{
                    clearInterval(x);
                }
            }, percent*2);
		
		$('.percent-box:eq('+index+')> .word').text(word);

		if(percent <= 50){
			
			//每一个图片对应一个animation
			ani.insertRule('@keyframes ani'+index+'{from{transform:rotate(0deg)}to{transform:rotate('+3.6*percent+'deg)}}');

			$('.percent-box:eq('+index+') > .round1').css('animation', 'ani'+index+' 2s forwards');
			$('.percent-box:eq('+index+') > .round2').css('display', 'none');
		}else{
			ani.insertRule('@keyframes ani'+index+'{from{transform:rotate(0deg)}to{transform:rotate('+3.6*(percent-50)+'deg)}}');

			$('.percent-box:eq('+index+') > .round1').css('transform', 'rotate(180deg)');
			//$('.percent-box:eq('+index+') > .round1').css('opacity', '0');

				$('.percent-box:eq('+index+') > .round2').css('display', 'block')
				$('.percent-box:eq('+index+') > .round2').css('animation', 'ani'+index+' 1s forwards');
			//$('.percent-box:eq('+index+') > .round2').css('animation', 'ani'+index+' 2s forwards');
			
		}

	});

};

/*使用实例 HTML文件
	<div class='percent-box' data-percent='percent rate' data-word='relief word'></div>
*/