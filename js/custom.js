$(document).ready(function() {
  $("#warning").hide();
  $("#search-form").submit(function(e){
    e.preventDefault();
    // alert("The action has occurred without submitting the form!");
    //$('body').css('zIndex','10');
    //$('.googhole-container').css('zIndex','-10');
    //$('black').css('backgroundColor','hsl(0,100%,50%');
    $('.black').css('zIndex','100');
    var d = 1000;
    for(var i=100; i>=1; i=i-0.1){ //i represents the lightness
      d  += 10;
      // console.log((i-0.99)/100);
      (function(ii,dd){
        setTimeout(function(){
          // $('black').css('backgroundColor','hsl(0,0%,'+ii+'%)');
          $('.black').css('opacity',(100-(ii-0.99))/100+'');
          $('.googhole-container').css('opacity',(ii-0.99)/100+'');

        }, dd);
      })(i,d);
    }

    $.fn.textWidth = function(text, font) {
      if (!$.fn.textWidth.fakeEl) $.fn.textWidth.fakeEl = $('<span>').hide().appendTo(document.body);
      $.fn.textWidth.fakeEl.text(text || this.val() || this.text()).css('font', font || this.css('font'));
      return $.fn.textWidth.fakeEl.width();
    };
    console.log($("#first-line").textWidth());
    //$("#warning-container").width($("#first-line").textWidth());
    //var padding = Math.floor((Math.floor($(window).height()) - $("").height())/2);

    //$(".img-placeholder").css({"padding-top": padding, "padding-bottom": padding});

    var waitForFinalEvent = (function () {
      var timers = {};
      return function (callback, ms, uniqueId) {
        if (!uniqueId) {
          uniqueId = "Don't call this twice without a uniqueId";
        }
        if (timers[uniqueId]) {
          clearTimeout (timers[uniqueId]);
        }
        timers[uniqueId] = setTimeout(callback, ms);
      };
    })();

    $("p").css("opacity", 0);
    $("#warning-container").css("opacity", 0);
    //$("#warning-container").width(0).height(0);
    waitForFinalEvent(function(){
      // $(".googhole-container").hide();
      // $("#warning").height($(".black").height());
      // $("#warning").width($(window).innerWidth());
      // $("#warning").css("margin-top", $(window).height()/2 - $("#warning-container").height()/2);

      $("#warning").show();

      //$("#warning-container").animate({opacity: 1.0, width:"300px", height:"300px"}, 5000, function(){
      $("#warning-container, p").animate({opacity: 1.0}, 8000, function(){
        //$("p").animate({opacity: 1.0}, 5000);
        //$("#warning-container, p").animate({opacity: 0}, 15000);
      });


    }, 13000, "some unique string");

  });
});
