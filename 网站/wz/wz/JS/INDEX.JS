$(function(){
	//搜索
	var $searchType = $('.search h3'),
		$searchTypeList = $('.search-type-list'),
		$searchIpt = $('#search-ipt'),
		$searchResult = $('.search-result');
	$searchType.on('click', function(){
		$(this).next().toggle();
	});
	$('li', $searchTypeList).on('click', function(){
		$searchType.html(  $.trim($(this).text()) );
		$searchTypeList.hide();
	});
	$searchTypeList.on('mouseleave', function(){
		$(this).hide();
	});
	//测试数据
	var testArr = [
		{
			title: "iphone手机壳",
			desc: 'iphone手机壳...........'
		},
		{
			title: "iphone6手机壳",
			desc: 'iphone6手机壳...........'
		},
		{
			title: "iphone6s手机壳",
			desc: 'iphone6s手机壳...........'
		},
		{
			title: "sansung手机壳",
			desc: 'sansung手机壳...........'
		}
	];

	var index = 0;
	$searchIpt.on('keyup', function(e){
		if(this.value && e.which != 13){
			$searchResult.empty();
			var html = '';
			for(var i=0; i<testArr.length; i++){
				var obj = testArr[i];
				if(obj.title.indexOf(this.value) != -1){
					html += '<li>'+obj.title+'</li>';
				}
			}

			if(html){
				$searchResult.append(html);
				$searchResult.show();
				$searchResult.children().eq(index).addClass('selected');
			}else{
				$searchResult.hide();
			}


		}else{
			$searchResult.hide();
		}
	}).on('keydown', function(e){
		if(e.which == 38 || e.which == 40){
			if(e.which == 40){
				index++;
				if(index == $searchResult.children().length){
					index = 0;
				}
				$searchResult.children().eq(index).addClass('selected').siblings().removeClass('selected');
			}else if(e.which == 38){
				index--;
				if(index == -1){
					index = $searchResult.children().length - 1;
				}
				$searchResult.children().eq(index).addClass('selected').siblings().removeClass('selected');
			}
		}else if(e.which == 13){
			$searchIpt.val($searchResult.children().eq(index).text());
			$searchResult.hide();
		}
	});

	$searchResult.on('click', 'li', function(){
		$searchIpt.val(this.innerHTML);
		$searchResult.hide();
	});

	//轮播
	var index = 0;
	var $imgs = $('#imgs'),
		$tab = $('#tab');
	$('.img-wrap', $imgs).width($(window).width());
	$imgs.width($(window).width() * 3);

	$('li', $tab).on('mouseover', function(){
		$(this).addClass('selected').siblings().removeClass('selected');
		index = $(this).index();
		$imgs.animate({
			left: -index * $(window).width()
		});
	});





















});