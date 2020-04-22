var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

function getAnimation() {
  $(".animate").each(function() {
    if( $(this).offset().top <= $(document).scrollTop() + $(window).height() ) {
      $(this).addClass("active");
    }
  });
}

function getRespNavHeight() {
   var respNavHeight =  $(window).height() - $(".header_site").height();
   $("#resp_nav").css({
    "max-height" : respNavHeight + "px"
   });
}

$(window).load(function() {
  $(".scroll_x").mCustomScrollbar({
    axis:"x",
    scrollButtons:{
        enable:true
    }
  });
});

$(window).resize(function() {
  bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
  getAnimation();
  if($("#resp_nav").is(":hidden")) {
    $(".wrapper").css({
      "padding-top" : $(".header_site_wrapp").height() + "px"
    });
  }
  if($("#resp_nav").is(":visible")) {
    getRespNavHeight();
  }
});

$(document).scroll(function() {
  getAnimation();
});

$(document).ready(function() {
  if($("#resp_nav").is(":hidden")) {
    $(".wrapper").css({
      "padding-top" : $(".header_site_wrapp").height() + "px"
    });
  }
  getAnimation();
  // ----------
  $(".respmenubtn").click(function(e) {
      e.preventDefault();
      if( $("#resp_nav").is(":hidden") ) {
          $("#resp_nav").slideDown(300);
          $(this).addClass("active");
          getRespNavHeight();
      } else {
          $("#resp_nav").slideUp(300);
          $(this).removeClass("active");
      }
  });
  $(document).mouseup(function (e){
      hide_element = $("#resp_nav");
      if (!hide_element.is(e.target)
          && hide_element.has(e.target).length === 0) {
          hide_element.slideUp(300);
        $(".respmenubtn").removeClass("active");
      }
  });
  $(this).keydown(function(eventObject){
      if (eventObject.which == 27 &&
          $("#resp_nav").is(":visible") &&
          bodyWidth > 767) {
              $("#resp_nav").slideUp(300);
              $(".respmenubtn").removeClass("active");
      }
  });
  // ---------------------
  $("[data-popup-link]").on("click", function(e) {
      e.preventDefault();
      popupName = $(this).attr("data-popup-link");
      div = document.createElement('div');
      div.style.overflowY = 'scroll';
      div.style.width = '50px';
      div.style.height = '50px';
      div.style.visibility = 'hidden';
      document.body.appendChild(div);
      scrollWidth = div.offsetWidth - div.clientWidth;
      document.body.removeChild(div);
      $("body").addClass("fixed");
      $("body").css({
          "position" : "fixed",
          "top" :  -$(document).scrollTop() + "px",
          "overflow" : "hidden",
          "right" : 0,
          "left" : 0,
          "bottom" : 0,
          "padding-right" : scrollWidth + "px"
      });
      $(".popup_bg").fadeIn(300);
      $("[data-popup = '"+ popupName +"']").fadeIn(300);
  });
  $(".close_popup, .popup_bg").on("click", function(e) {
      e.preventDefault();
      curTop = $("body").css("top");
      curTop = Math.abs(parseInt(curTop, 10));
      $("body").attr("style", "");
      if (curTop !== 0) {
          $("html").scrollTop(curTop);
      }
      $("body").removeClass("fixed");
      $(".popup_bg").fadeOut(300);
      $(this).closest("[data-popup]").fadeOut(300);
  });
  $(document).on("mouseup", function(e) {
    if($(".popup").is(":visible")) {
      e.preventDefault();
      hide_element = $(".popup_content");
      if (!hide_element.is(e.target)
          && hide_element.has(e.target).length === 0) {
          curTop = $("body").css("top");
          curTop = Math.abs(parseInt(curTop, 10));
          $("body").attr("style", "");
          if (curTop !== 0) {
              $("html").scrollTop(curTop);
          }
          $("body").removeClass("fixed");
          $(".popup_bg").fadeOut(300);
          $("[data-popup]").fadeOut(300);
      }
    }
  });
  $(this).keydown(function(eventObject){
      if (eventObject.which == 27 ) {
          curTop = $("body").css("top");
          curTop = Math.abs(parseInt(curTop, 10));
          $("body").attr("style", "");
          if (curTop !== 0) {
              $("html").scrollTop(curTop);
          }
          $("body").removeClass("fixed");
          $(".popup_bg").fadeOut(300);
          $("[data-popup]").fadeOut(300);
      }
  });
  $("input[type='tel']").mask("+7 (999) 999-99-99");
  // ----------
});

if( document.getElementById("map") ) {

  var map, marker, latCoord, lngCoord;

  function initMap() {
    latCoord = 54.729918;
    lngCoord = 55.9507824;
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: latCoord, lng: lngCoord},
      scrollwheel: false,
      scaleControl: false,
      zoom: 16
    });
    marker = new google.maps.Marker({
      map: map,
      draggable: false,
      animation: google.maps.Animation.DROP,
      position: {lat: latCoord, lng: lngCoord},
      title: 'ГЛОБАЛЖКХ'
    });
    marker.addListener('click', toggleBounce);
  }

  function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }

}