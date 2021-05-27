function openPopup($url,$wname,$width,$height){
var openWin;
				var screenX     = window.screenX !== undefined ? window.screenX : window.screenLeft,
					screenY     = window.screenY !== undefined ? window.screenY : window.screenTop,
					outerWidth  = window.outerWidth !== undefined ? window.outerWidth : document.body.clientWidth,
					outerHeight = window.outerHeight !== undefined ? window.outerHeight : (document.body.clientHeight - 22),
					width       = $width,
					height      = $height,
					left        = parseInt(screenX + ((outerWidth - width) / 2), 10),
					top         = parseInt(screenY + ((outerHeight - height) / 2.5), 10),
					options    = (
					'width=' + width +
					',height=' + height +
					',left=' + left +
					',top=' + top
					);
		 
				openWin=window.open($url,$wname,options);

				if (window.focus) {openWin.focus()}

				return false;
}

/* =================================

   LOADER                     

=================================== */

// makes sure the whole site is loaded

jQuery(window).load(function() {

        // will first fade out the loading animation

  jQuery(".status").fadeOut();

        // will fade out the whole DIV that covers the website.

  jQuery(".preloader").delay(1000).fadeOut("slow");


  jQuery('.carousel').carousel('pause');

})