/*
            /$$
    /$$    /$$$$
   | $$   |_  $$    /$$$$$$$
 /$$$$$$$$  | $$   /$$_____/
|__  $$__/  | $$  |  $$$$$$
   | $$     | $$   \____  $$
   |__/    /$$$$$$ /$$$$$$$/
          |______/|_______/
================================
        Keep calm and get rich.
                    Is the best.

  	@Author: Dami
  	@Date:   2017-09-06 15:27:44
  	@Last Modified by:   Dami
  	@Last Modified time: 2019-03-23 16:49:09
*/

window.$ = jQuery;

function scrollTop() {
    var $window           = $(window),
    	$window_width     = $window.width(),
    	$window_height    = $window.height(),
    	scroll            = $window.scrollTop(),
        startPoint        = $window_height / 2,
        scrTopBtn         = $("#nice-back-to-top");
    if ( scroll >= startPoint && $window_width >= 1024  ) {
        scrTopBtn.addClass('active');
    } else {
        scrTopBtn.removeClass('active');
    }
    scrTopBtn.on("click", function () {
        $("html, body").stop().animate({
            scrollTop: 0
        },
        600);
    });
};

function cropImagetoDataURI(element) {
	// 缩放图片需要的canvas
	var canvas = document.createElement('canvas');
	var context = canvas.getContext('2d');

	// 图片原始尺寸
	var originWidth = element.width;
	var originHeight = element.height;
	// 最大尺寸限制
	var maxWidth = 50, maxHeight = 50;
	// 目标尺寸
	var targetWidth = originWidth, targetHeight = originHeight;
	// 图片尺寸超过400x400的限制
	if (originWidth > maxWidth || originHeight > maxHeight) {
		if (originWidth / originHeight > maxWidth / maxHeight) {
			// 更宽，按照宽度限定尺寸
			targetWidth = maxWidth;
			targetHeight = Math.round(maxWidth * (originHeight / originWidth));
		} else {
			targetHeight = maxHeight;
			targetWidth = Math.round(maxHeight * (originWidth / originHeight));
		}
	}
	// canvas对图片进行缩放
	canvas.width = targetWidth;
	canvas.height = targetHeight;
	// 清除画布
	context.clearRect(0, 0, targetWidth, targetHeight);
	// 图片压缩
	context.drawImage(element, 0, 0, targetWidth, targetHeight);

	return canvas.toDataURL()
}
jQuery(document).scroll(function ($) {
    scrollTop()
});
jQuery(document).ready(function($) {
	$(window).on('scroll', function() {
		var b = $(window).scrollTop();
		if( b > 72 ){
			$(".fixed-top").addClass("scroll");
		} else {
			$(".fixed-top").removeClass("scroll");
		}
	});
	if ($('.card-special-cover .bg-cover').length) {
		var specialImageDOM = $('.card-special-cover .bg-cover');
		var specialSectionDOM = $('.card-special-cover .bg-special');
		var colorThief = new ColorThief();

		colorThief.getColorAsync(specialImageDOM.data('img'), function(color, element) {
			var colors = colorThief.getPalette(element, 3);
			var mainColor = 'rgba(' + colors[0][0] + ', '+ colors[0][1] +', ' + colors[0][2] + ', 1)';
			var subColor = 'rgba(' + colors[1][0] + ', '+ colors[1][1] +', ' + colors[1][2] + ', 1)';
			var thirdColor = 'rgba(' + colors[2][0] + ', '+ colors[2][1] +', ' + colors[2][2] + ', 1)';

			specialImageDOM.attr('data-img', '')
			specialImageDOM.css({
				'background-image': 'url("' + cropImagetoDataURI(element) + '")'
			})
			specialSectionDOM.css({
				'background': 'linear-gradient( -10deg, '+ mainColor +' 0%, '+ subColor +'100%, '+ thirdColor +'100%)'
			})
        });
	}
	if ($('.list-author-pushes .list-item').length) {
		$('.list-author-pushes .list-item').each(function(index, element) {
			var authorCoverDOM = $(element).find('.bg-cover');
			var authorGradientDOM = $(element).find('.bg-author');
			var colorThief = new ColorThief();
			colorThief.getColorAsync(authorCoverDOM.data('img'), function(color, element) {
				var colors = colorThief.getPalette(element, 3);
				var mainColor = 'rgba(' + colors[0][0] + ', '+ colors[0][1] +', ' + colors[0][2] + ', 1)';
				var subColor = 'rgba(' + colors[1][0] + ', '+ colors[1][1] +', ' + colors[1][2] + ', 1)';
				var thirdColor = 'rgba(' + colors[2][0] + ', '+ colors[2][1] +', ' + colors[2][2] + ', 1)';
	
				authorCoverDOM.attr('data-img', '')
				authorCoverDOM.css({
					'background-image': 'url("' + cropImagetoDataURI(element) + '")'
				})
				authorGradientDOM.css({
					'background': 'linear-gradient( to bottom, '+ mainColor +' 0%, '+ subColor +'100%, '+ thirdColor +'100%)'
				})
			});
		})
	}
	if ($('.list-magazine > .bg-magazine').length) {
		var magazineCoverDOM = $('.list-magazine > .bg-magazine');
		var magazineBgCoverDOM = $('.list-magazine > .bg-image-color');
		var colorThief = new ColorThief();
		colorThief.getColorAsync(magazineCoverDOM.data('img'), function(color, element) {
			var colors = colorThief.getPalette(element, 3);
			var mainColor = 'rgba(' + colors[0][0] + ', '+ colors[0][1] +', ' + colors[0][2] + ', 1)';
			var subColor = 'rgba(' + colors[1][0] + ', '+ colors[1][1] +', ' + colors[1][2] + ', 1)';
			var thirdColor = 'rgba(' + colors[2][0] + ', '+ colors[2][1] +', ' + colors[2][2] + ', 1)';

			magazineCoverDOM.attr('data-img', '')
			magazineCoverDOM.css({
				'background-image': 'url("' + cropImagetoDataURI(element) + '")'
			})
			magazineBgCoverDOM.css({
				'background': 'linear-gradient( to bottom, '+ mainColor +' 0%, '+ subColor +'100%, '+ thirdColor +'100%)'
			})
        });
	}
	if ($('#author-popup-wrap .bg-cover').length) {
		var authorPopupCover = $('#author-popup-wrap .bg-cover');
		var authorPopupBg = $('#author-popup-wrap .bg-author');
		var colorThief = new ColorThief();
		colorThief.getColorAsync(authorPopupCover.data('img'), function(color, element) {
			var colors = colorThief.getPalette(element, 3);
			var mainColor = 'rgba(' + colors[0][0] + ', '+ colors[0][1] +', ' + colors[0][2] + ', 1)';
			var subColor = 'rgba(' + colors[1][0] + ', '+ colors[1][1] +', ' + colors[1][2] + ', 1)';
			var thirdColor = 'rgba(' + colors[2][0] + ', '+ colors[2][1] +', ' + colors[2][2] + ', 1)';
			authorPopupCover.attr('data-img', '')
			authorPopupCover.css({
				'background-image': 'url("' + cropImagetoDataURI(element) + '")'
			})
			authorPopupBg.css({
				'background': 'linear-gradient( to bottom, '+ mainColor +' 0%, '+ subColor +'100%, '+ thirdColor +'100%)'
			})
        });
	}
  	$('[data-toggle="tooltip"]').tooltip();
  	var $navSearchWrap = $('.navbar-search-wrap');
    var $navSearchTrigger = $('#navbar-search-trigger');
    var $navSearchClose = $('#navbar-search-close');
    $navSearchTrigger.on('click',
    function(e) {
        e.preventDefault();
        $navSearchWrap.animate({
            opacity: 'toggle'
        },
        500);
        $navSearchTrigger.add($navSearchClose).addClass("open");
        $('.navbar-search-input').focus();
    });
    $navSearchClose.on('click',
    function(e) {
        e.preventDefault();
        $navSearchWrap.animate({
            opacity: 'toggle'
        },
        500);
        $navSearchTrigger.add($navSearchClose).removeClass("open");
    });
    function closeSearch() {
        $navSearchWrap.fadeOut(200);
        $navSearchTrigger.add($navSearchClose).removeClass("open");
    }
    $(document.body).on('click',
    function(e) {
        closeSearch();
    });
    $("#navbar-search-trigger, .navbar-search-input").on('click',
    function(e) {
        e.stopPropagation();
    });

  	$(".main-menu li:has(>ul)").addClass("has-children");
    if ($(".main-menu li").hasClass("has-children")){
        $(".main-menu li.has-children>a").prepend('<span class="sub-menu-icon text-xs iconfont icon-sub-menu"></span>')
	};
	$('.sidebar').length > 0 && $('.sidebar').theiaStickySidebar({
        additionalMarginTop: 20,
        additionalMarginBottom: 100
    });
	$('.links-sidebar').length > 0 && $('.links-sidebar').theiaStickySidebar({
        additionalMarginTop: 20,
        additionalMarginBottom: 100
	});
	if ($('#widget-toc').length && toc.tag * 1 !== 0) {
		$('.content h' + toc.tag).each(function (index) {
			$(this).attr('id', 'toc-' + index)
		})
	}

	$('body').scrollspy({
		target: '#links-nav',
		offset: 200
	});

	$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: (target.offset().top - 60)
	        }, 1000, "easeInOutExpo");
	        return false;
	      }
	    }
	});
	globals.post_id != 0 && addHistoryView(globals.post_id)
});

function addHistoryView(id) {
	var historyView = JSON.parse(localStorage.getItem('history-view')) || []
	var historyViewTime = new Date(localStorage.getItem('history-view-time'))
	var currentDate = new Date()
	var page = { id: id }

	if (+historyViewTime < +currentDate.setDate(currentDate.getDate() - 7)) {
		historyView = []
		localStorage.setItem('history-view-time', +currentDate)
	}

	for (var i = 0, len = historyView.length; i < len; i++) {
		if (page['id'] && historyView[i]['id'] && page['id'] === historyView[i]['id']) {
			historyView.splice(i, 1);
			break;
		}
	}

	historyView.push(page);

	if (historyView.length > 20) {
		historyView.splice(0, 1);
	}

	localStorage.setItem('history-view', JSON.stringify(historyView));
}

function toggleCommentAuthorInfo() {
    var changeMsg = '<i class="text-md iconfont icon-bianji"></i>';
    var closeMsg = '<i class="text-success text-md iconfont icon-zhengque"></i>';
    $('.comment-form-info').slideToggle('slow', function(){
        if ( $('.comment-form-info').css('display') == 'none' ) {
            $('#toggle-comment-author-info').html(changeMsg);
        } else {
            $('#toggle-comment-author-info').html(closeMsg);
        }
    });
};

function ajax_load_comments( data ){
    var buttonDOM = $('#comments-next-button');
    buttonDOM.hide();

	$.ajax({
		url: globals.ajax_url,
		type: 'POST',
		dataType: 'html',
		data: data,
	})
	.done(function( response ) {
		if( response ){
			if( data.commentspage == 'newest' ){
				buttonDOM.data( 'paged', data.paged*1-1);
			}else{
				buttonDOM.data( 'paged', data.paged*1+1);
			}
			$('.'+data.append).append(response);
			buttonDOM.show();
		} else {
            buttonDOM.hide();
		}

	})
}

$(document).on('click', '#comments-next-button', function(event) {
    event.preventDefault();
    ajax_load_comments($('#comments-next-button').data());
});


$(document).on("click", '.post-like[data-action="like"]', function() {
	event.preventDefault();
	var $this = $(this);
	var id = $this.data("id");

	$.ajax({
		url: globals.ajax_url,
		type: 'POST',
		dataType: 'html',
		data: { action: 'cosy19_like', id, like_action: 'like'},
	})
	.done(function( data ) {
		$this.addClass('current');
		$this.attr('data-action', 'unlike');
		ncPopupTips(1, __.thank_you)
		$('.like-count').html(data.trim());
	})
	return false;
});
$(document).on('click', '.search-popup', function(event) {
	event.preventDefault();
	var $this = $('#search-popup-wrap')
	ncPopup('full', $this.html())
});
$(document).on('click', '.author-popup', function(event) {
	event.preventDefault();
	var $this = $('#author-popup-wrap')
	ncPopup('no-padding', $this.html())
});
$(document).on('click', '.single-popup', function(event) {
	event.preventDefault();
	var img = $(this).data("img");
	var title = $(this).data("title");
	var desc = $(this).data("desc");
	var html = '<div class="text-center"><h6 class="py-1">' + title + '</h6>\
				<img src="' + img + '" alt="' + title + '" style="width:100%;height:auto;">\
				<p class="text-muted text-xs">('+ desc +')</p></div>'
	ncPopup('small', html)
});
$(document).on("click", '.post-like[data-action="unlike"]', function() {
	event.preventDefault();
	var $this = $(this);
	var id = $this.data("id");
	$this.removeClass('current');

	$.ajax({
		url: globals.ajax_url,
		type: 'POST',
		dataType: 'html',
		data: { action: 'cosy19_like', id, like_action: 'unlike'},
	})
	.done(function( data ) {
		$this.removeClass('current');
		$this.attr('data-action', 'like');
		ncPopupTips(0, __.cancelled)
		$('.like-count').html(data.trim());
	})
	return false;
});

// 发布时删除
// function site_tips(type, msg) {
// 	var ico = type ? '<span class="d-block h1 text-success mb-2"><i class="iconfont icon-zhengque"></i></span>' : '<span class="d-block h1 text-danger mb-2"><i class="iconfont icon-yuanjianshao"></i></span>';
// 	var c = type ? 'tips-success' : 'tips-error';
// 	var html = '<section class="nice-tips '+c+' nice-tips-open">'+
//                     '<div class="nice-tips-content  text-center">'+ico+
//                         '<p class="text-md">'+msg+'</p>'+
//                     '</div>'+
//                 '</section>';
// 	$('body').append(html);
// 	setTimeout(function(){
// 		$('.nice-tips').removeClass('nice-tips-open');
// 		$('.nice-tips').addClass('nice-tips-close');
// 		setTimeout(function(){
// 			$('.nice-tips').removeClass('nice-tips-close');
// 			setTimeout("$('.nice-tips').remove()", 200);
// 		},400);
// 	},1200);
// }

// AJAX post loading

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document. documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document. documentElement.clientWidth)
    );
}
function givenElementInViewport (el, fn) {
    return function () {
        if (isElementInViewport(el)) {
            fn.call();
        }
    }
}
function addViewportEvent (el, fn) {
    if (window.addEventListener) {
        addEventListener('DOMContentLoaded', givenElementInViewport(el, fn), false);
        addEventListener('load', givenElementInViewport(el, fn), false);
        addEventListener('scroll', givenElementInViewport(el, fn), false);
        addEventListener('resize', givenElementInViewport(el, fn), false);
    } else if (window.attachEvent)  {
        attachEvent('DOMContentLoaded', givenElementInViewport(el, fn));
        attachEvent('load', givenElementInViewport(el, fn));
        attachEvent('scroll', givenElementInViewport(el, fn));
        attachEvent('resize', givenElementInViewport(el, fn));
    }
}

if( $('.posts-ajax-load').length > 0 ) {
	addViewportEvent( document.querySelector('.posts-ajax-load') ,function(){
		if( $('.dposts-ajax-load').data('comments') == 'comments' ){
			return false;
		}

	    if( $('.dposts-ajax-load').hasClass('loading') === false ){
			var data = $('.dposts-ajax-load').data();
	    	if( $('.dposts-ajax-load').data('paged') <= 3 ){
				$('.dposts-ajax-load').addClass('loading');
				ajax_load_posts($('.dposts-ajax-load').data());
	    	}

	    }

	});
}

$(document).on('click', '.dposts-ajax-load', function(event) {
	event.preventDefault();
	var $this = jQuery(this)
	if( $this.hasClass('loading') === false ){
    	$this.addClass('loading');
		ajax_load_posts($this.data());
	}
});

$(document).on('click', '.list-ajax-nav button', function(event) {
	event.preventDefault();
	var t = $(this);
	if( !t.hasClass('active') ){
		$('.list-ajax-nav button').removeClass('active');
		t.addClass('active');

		var cid = t.data('cid');
		if( cid ){
			$('.dposts-ajax-load').data('tabcid', cid);
		}else{
			$('.dposts-ajax-load').removeData('tabcid');
		}
		$('.dposts-ajax-load').data('paged', 1);
		$('.list-home').html('');
		$('.dposts-ajax-load').addClass('loading').text(__.load_more);
		ajax_load_posts($('.dposts-ajax-load').data());
	}
});

function ajax_load_posts( data ) {
	$('.ajax-loading').show();

	var loadButton = jQuery('.dposts-ajax-load')
	loadButton.hide();

	$.ajax({
		url: globals.ajax_url,
		type: 'POST',
		dataType: 'html',
		data: data,
	})
	.done(function(response) {
		loadButton.removeAttr('disabled');
		if (response.trim()) {
			loadButton.data( 'paged', data.paged * 1 + 1);
			$('.' + data.append).append(response);
			loadButton.removeClass('loading').show();
		} else {
			loadButton.attr('disabled', 'disabled');
			loadButton.text(__.reached_the_end).show();
		}
	})
	.fail(function() {
		$('.ajax-loading').hide();
	})
	.always(function() {
		$('.ajax-loading').hide();
	});
}

/*
	sidebar-collapse-tab-menu
	----------------------------------------------------
*/
$(document).on('click', '#sidebar-mobile-trigger', function(event) {
	event.preventDefault();
	$('.sidebar-collapse').addClass('open');
	$('body').addClass('modal-open');
});
$(document).on('click', '#sidebar-mobile-close', function(event) {
	$('.sidebar-collapse').removeClass('open');
	$('body').removeClass('modal-open');
});

console.log('\n' + ' %c Cosy Designed by nicetheme® %c https://www.nicetheme.cn ' + '\n', 'color: #fadfa3; background: #030307; padding:5px 0; font-size:18px;', 'background: #fadfa3; padding:5px 0; font-size:18px;');
