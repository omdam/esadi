/********************************
 * 
 * lazy load  *
 * 
 ********************************/
lazyLoad();

function lazyLoad() {
  const images = document.querySelectorAll('.lazy-omd');

  const optionsLazyLoad = {
    //  rootMargin: '-50px',
    // threshold: 1
  }

  const imageObserver = new IntersectionObserver(function (enteries) {
    enteries.forEach(function (entery) {
      if (!entery.isIntersecting) {
        return;
      } else {
        preloadImage(entery.target);
        imageObserver.unobserve(entery.target);
      }
    });

  }, optionsLazyLoad);

  images.forEach(function (image) {
    imageObserver.observe(image)
  });
}

function preloadImage(img) {
  img.src = img.getAttribute('data-src');
  img.onload = function () {
    img.parentElement.classList.remove('loading-omd');
    img.parentElement.classList.add("loaded-omd");
    img.parentElement.parentElement.classList.add("lazy-head-om");
  }
}

jQuery(document).ready(function ($) {

  /******************************** 
   * 
   * main slider  *
   * 
   ********************************/
  new Swiper('.main-slider-om .swiper-container', {
    spaceBetween: 30,
    // effect: 'fade',
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
    pagination: {
      el: '.main-slider-om .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.main-slider-om .swiper-button-next',
      prevEl: '.main-slider-om .swiper-button-prev',
    },
  });


  /******************************** 
 * 
 * doctors-slider-om  *
 * 
 ********************************/
  new Swiper('.doctors-slider-om .swiper-container', {
    spaceBetween: 30,
    slidesPerView: 3,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.doctors-slider-om .swiper-pagination',
      clickable: true,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,

      },
      480: {
        slidesPerView: 1,

      },
      767: {
        slidesPerView: 2,

      },
      992: {
        slidesPerView: 2,

      },
      1200: {
        slidesPerView: 3,
      },
    },
  });

  /******************************** 
 * 
 * single-doctors-slider-om  *
 * 
 ********************************/
  new Swiper('.single-doctors-slider-om .swiper-container', {
    spaceBetween: 30,
    slidesPerView: 3,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.single-doctors-slider-om .swiper-pagination',
      clickable: true,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,

      },
      480: {
        slidesPerView: 1,

      },
      767: {
        slidesPerView: 2,

      },
      992: {
        slidesPerView: 2,

      },
      1200: {
        slidesPerView: 4,
      },
    },
  });

  /******************************** 
 * 
 * banners-slider-om  *
 * 
 ********************************/
  new Swiper('.banners-slider-om .swiper-container', {
    spaceBetween: 30,
    slidesPerView: 3,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.banners-slider-om .swiper-pagination',
      clickable: true,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,

      },
      480: {
        slidesPerView: 1,

      },
      767: {
        slidesPerView: 1,

      },
      992: {
        slidesPerView: 2,

      },
      1200: {
        slidesPerView: 2,
      },
    },
  });

  /******************************** 
  * 
  * branch-gallery-om Slider   *
  * 
  ********************************/
  var swiper_gallery = new Swiper('.branch-gallery-om .swiper-container', {
    slidesPerView: 4,
    slidesPerColumn: 2,
    spaceBetween: 30,
    slidesPerColumnFill: 'row',

    pagination: {
      el: '.branch-gallery-om .swiper-pagination',
      clickable: true,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,

      },
      480: {
        slidesPerView: 1,

      },
      767: {
        slidesPerView: 2,

      },
      992: {
        slidesPerView: 2,

      },
      1200: {
        slidesPerView: 4,
      },
    },
  });


  /******************************** 
* 
* single product Slider   *
* 
********************************/
  var swiper = new Swiper(".s-product-slider-2 .swiper-container", {
    loop: false,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: false,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".s-product-slider-1 .swiper-container", {
    loop: false,
    spaceBetween: 10,
    navigation: {
      nextEl: ".s-product-slider-2 .swiper-container .swiper-button-next",
      prevEl: ".s-product-slider-2 .swiper-container .swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });




  /********************************
   * 
   * toggle fav class in a product --  *
   * 
   ********************************/

  // $(".fav-butt-om").on("click", function (e) {
  //     e.preventDefault();

  //     $(this).toggleClass("favorite-product-active-om")
  // });


  /********************************
 * 
 * tabs block for main singin form  *
 * 
 ********************************/

  $(".ss-activate-tab-om").on("click", function (e) {
    e.preventDefault();

    let target_id = $(this).data("form-tab");

    $(target_id).siblings().removeClass("active-om").hide();
    $(target_id).fadeIn().addClass("active-om");

  });




  /********************************
 * 
 * datepicker activation  *
 * 
 ********************************/
  if ($(".datepicker-om").length) {

    $(".datepicker-om").datepicker({
      minDate: new Date(),
      // regional: "ar",
      // beforeShow: function () {
      //     setTimeout(function () {
      //         $('.ui-datepicker').css('z-index', 11);
      //     }, 0);
      // }
    });
  }


  /********************************
 * 
 * show password  *
 * 
********************************/
  $(".show-password-button-om").on("click", function (e) {
    e.preventDefault();


    if ($(this).parent().find("input").attr("type") == "text") {

      $(this).parent().find("input").attr("type", "password");
      $(this).removeClass("show-om");

    } else {
      $(this).parent().find("input").attr("type", "text");
      $(this).addClass("show-om");
    }
  });

  /********************************
   * 
   * footer colapsed in small sizes *
   * 
   ********************************/
  //
  if ($(window).width() <= 991) {
    $('.collapse-head-om').on('click', function (e) {
      e.preventDefault();

      $('.collapse-head-om').not(this).parent().find('.list-collapse-om').slideUp();
      $(this).parent().find('.list-collapse-om').slideToggle({
        queue: false,
        complete: function () {
          $(".list-collapse-om").each(function () {
            if ($(this).css("display") == "none") {
              $(this).parent().removeClass("active");
            } else {
              $(this).parent().addClass("active")
            }
          });
        }
      });

    });
  }


  /********************************
   * 
   * menu active and close button  *
   * 
  ********************************/
  // nav men activation 
  $("#menu-butt-activ-om").on("click", function (e) {
    e.preventDefault();

    $("#navbar-menu-om").addClass("active-menu");
    $(".overlay").addClass("active");
    $("body").addClass("overflow-body");
  });

  // nav men close 
  $(".close-butt-om , .overlay ").on("click", function (e) {
    e.preventDefault();
    $("#navbar-menu-om").removeClass("active-menu");
    $(".overlay").removeClass("active");

    $("body").removeClass("overflow-body");

  });


  /********************************
   * 
   * sticky navbar *
   * 
   ********************************/
  // asign height to the header 
  var headerHeight = $("header").outerHeight();

  var lastScroll = 0;
  $(document).on('scroll', function () {
    var currentScroll = $(this).scrollTop();

    // scroll down
    if (currentScroll < lastScroll && currentScroll > headerHeight + 100) {
      // add class avtive menu 
      // if ($(".fixed-header-warper").hasClass("not-active-menu-om")) {
      $(".fixed-header-warper").addClass("active-menu-om");
      $(".fixed-header-warper").removeClass("not-active-menu-om");
      // }
      // console.log("move up");
      $("body").css("margin-top", headerHeight);

    } else if (currentScroll > lastScroll && currentScroll > headerHeight + 100) { // scroll up 
      // remove class avtive menu 
      if ($(".fixed-header-warper").hasClass("active-menu-om")) {

        $(".fixed-header-warper").removeClass("active-menu-om");
        $(".fixed-header-warper").addClass("not-active-menu-om");
        $("body").css("margin-top", headerHeight);

      }
      // $("#search-button-activation-om").removeClass("search-is-active");
      // $("#search-form-act-om").addClass("not-active").removeClass("active");

    } else {
      $(".fixed-header-warper").removeClass("active-menu-om");
      $(".fixed-header-warper").removeClass("not-active-menu-om");
      $("body").css("margin-top", 0);

    }
    lastScroll = currentScroll;

  });


  /********************************
   * 
   * search page  - filter collapse *
   * 
   ********************************/
  $(".sp-filter-block-om .head-block-om").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("collapsed").parent().find(".sp-filter-list-om").slideToggle();
    console.log();
  })

  /********************************
   * 
   * search page  - result section remove butt *
   * 
   ********************************/
  // remove all butt
  $("#sp-all-result-remove-om").on("click", function (e) {
    e.preventDefault();

    $("#sp-search-result-list-om").html("");
  });

  // remove element butt 
  $(".sp-search-result-section-om .close-butt-om").on("click", function (e) {
    e.preventDefault();

    $(this).parent().remove();
  });


  /********************************
   * 
   * search page  - result section remove butt *
   * 
   ********************************/

  $(".spp-layout-buttons-om .butt-om").on("click", function (e) {
    e.preventDefault();

    $(this).addClass("active-om").siblings().removeClass("active-om");

    if ($(this).hasClass("network-grid-om")) {

      $("#spp_change_layout_om").removeClass("list-grid-om");
    } else {

      $("#spp_change_layout_om").addClass("list-grid-om");
    }

  });


  /********************************
   * 
   * mixItUp init  *
   * 
   ********************************/
  // function mixItUpInit() {
  //     var containerEl = document.querySelector('#mix-container-om');
  //     var mixer = "";
  //     if (containerEl) {

  //         mixer = mixitup(containerEl);
  //         mixer.forceRefresh();
  //     }
  // }
  // mixItUpInit();


  /********************************
   * 
   * input file value change  *
   * 
   ********************************/

  //  $('.input-file-om ').on('change', function(e) {
  //      var fileName = " ";
  //      if (e.target.files[0]) {
  //          fileName = e.target.files[0].name;

  //      }
  //      var elementToTakeFileVal = $(this).parent().parent().children(".file-ouput");

  //      elementToTakeFileVal.text(fileName);
  //  });


  /********************************
   * 
   * go to next tab  *
   * 
   ********************************/

  $(".go-to-another-tab").on("click", function (e) {
    e.preventDefault();

    let data_next_id = "#" + $(this).data("next");
    $(data_next_id).trigger("click");

  });


});