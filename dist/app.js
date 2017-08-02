// import magnificpopup from 'magnific-popup';

//  var $snappish = $('.snappish-main').snappish();

//  $('.snappish-main').on('scrollbegin.snappish', function(event, data) {
//   console.log('from slide', data.fromSlide, data.fromSlideNum);
//   console.log('to slide', data.toSlide, data.toSlideNum);
//   data.fromSlide.removeClass('active');
//   data.toSlide.addClass('active');
// });
$(document).ready(function() {
	$('#fullpage').fullpage();
});
 
 var gallery = $('.section__gallery').magnificPopup({
     delegate: 'a',
     type:'image',
     tLoading: 'Loading image',
     mainClass: 'mfp-img-mobile',
     closeOnBgClick:true,
     zoom: {
        enabled:true,
        navigateByImgClick:true,
        preload: [0,1],
        duration: '300',
        easing: 'ease-in-out',
        opener: function(openerElement) {
            return openerElement.is('img') ? openerElement: openerElement.find('img');
        }
     },
     gallery: {
         enabled:true,
         navigateByImgClick:true,
         preload: [0,1]
     },
     image: {
         tError: '<a href="%url%>The image #%curr%</a> could not be loaded."'
         
     }
 });