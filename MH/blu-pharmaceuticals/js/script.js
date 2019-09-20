/*jshint esversion: 6 */
$(document).ready(function () {

    $("#fullpage").fullpage({
      menu:'#menu',
      anchors:['home','about','statistics','services','contact'],
      sectionsColor: ['#fff', '#fff','#fff','#000','#ebebe',],
      onLeave: function(index, nextIndex, direction) {
        if (nextIndex > 1 && nextIndex < 4 ) {
          $("#block-fixed-wrap").addClass("block-dark");
        } else {
          $("#block-fixed-wrap").removeClass("block-dark");
        }
        if(nextIndex > 4 ) {
					$("#block-fixed-wrap").addClass("block-hide");
				} else {
          $("#block-fixed-wrap").removeClass("block-hide");
        }
      }
    });

    
    eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('3($(".4-1").l("1-b")){$(m).k(9(e){3(!$(\'.4-1\').j(e.a)&&$(\'.4-1\').g(e.a).i===0){$(\'.4-1\').f("1-b")}})}c 7=0;$(p).8(9(u){c 5=$(n).t(),d=$("#r").s().2-q;3(d<5){3(5>7){$(\'.2-6\').f(\'2-6-8\')}o{$(\'.2-6\').h(\'2-6-8\')}}7=5});',31,31,'|mnu|top|if|block|st|line|lastScrollTop|scroll|function|target|hidden|var|block_pos||addClass|has|removeClass|length|is|mouseup|not|document|this|else|window|100|companies|offset|scrollTop|event'.split('|'),0,{}))


  // menu
  $(".hamburger-block").click( function() {
    $(".block-mnu").removeClass("mnu-hidden");
  });
  
  $(".mnu-closed").click( function() {
    $(".block-mnu").addClass("mnu-hidden");
  });

  $(".menu a").click( function() {
    $(".block-mnu").addClass("mnu-hidden");
  });

  // slider about
  $('.about-main').flickity({
    prevNextButtons: false
  });
  $('.about-nav').flickity({
    asNavFor: '.about-main',
    contain: true,
    prevNextButtons: false,
    draggable: false,
    pageDots: false
  });


  // statistics about
  $('.statistics-main').flickity({
    prevNextButtons: false
  });
  $('.statistics-nav').flickity({
    asNavFor: '.statistics-main',
    contain: true,
    prevNextButtons: false,
    draggable: false,
    pageDots: false
  });

  // services services
  var $progressBar = $('.progress-bar');
  $('.services-main').flickity({
    pageDots: false,
    contain: true,
    arrowShape: { 
      x0: 10,
      x1: 45, y1: 35,
      x2: 50, y2: 30,
      x3: 20
    }
  }).on( 'scroll.flickity', function( event, progress ) {
    progress = Math.max( 0, Math.min( 1, progress ) );
    $progressBar.width( progress * 100 + '%' );
  });
  
  $('.services-nav').flickity({
    asNavFor: '.services-main',
    contain: true,
    prevNextButtons: false,
    pageDots: false,
    draggable: false
  });
  
  AOS.init({
    offset: 10
  });


});