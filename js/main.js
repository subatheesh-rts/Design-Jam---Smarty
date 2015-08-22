function main(){

$('a[href*=#]:not([href=#])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top - topBarHeight  // + 1 for firefox bug
      }, 1000);
      return false;
    }
  }
}

var winHeight=$(window).height();
var topBarHeight=$('.head').height();
$(".home-content").css("height",winHeight-topBarHeight);
;

function slide1() {
  $('.home').removeClass(".slide2");
  $('.home').addClass(".slide1");
  $('.subline').hide(100,function () {
    $('.subtext').show(100);
  });
}
function slide2() {
  $('.home').removeClass('.slide1');
  $('.home').addClass(".slide2");
  $('.subtext').hide(100,function () {
    $('.subline').show(100);
  });
}
count=0;

setTimeout(function(){
    if(count%2==0){
      slide2();
      count++;
    }else {
      slide1();
      count++;
    }
},2000);

}
main();
