//-- этот import нужно подключать в каждый файл, чтобы jquery работала
import $ from "jquery";
// ------------------------------------------------

$(document).ready(function () {
  // -------------табы на странице group-card

  let tab = $(".board24_tab-js");
  $(".board24_item-js").fadeOut();

  tab.find(".board24_tab-item__title").on("click", function () {
    let tabitem = $(this).siblings(".board24_item-js");
    if (tabitem.hasClass("act")) {
      tabitem.fadeOut().removeClass("act");
      $(this).find(".icon-arrow_drop_down").css("transform", "rotate(0deg)");
    } else {
      tabitem.fadeIn().addClass("act");
      $(this).find(".icon-arrow_drop_down").css("transform", "rotate(180deg)");
    }
  });

  // ------------раздел опрос-------------------------
  let question = $(".js-question");
  $(".js-question-drop").fadeOut(10);

  question.find(".q-js").on("click", function () {
    let questiondrop = $(this).siblings(".js-question-drop");

    if (questiondrop.hasClass("act")) {
      questiondrop.fadeOut().removeClass("act");
      $(this).siblings(".icon-arrow_drop_down").css("opacity", "1");
    } else {
      questiondrop.fadeIn().addClass("act");
      $(this).siblings(".icon-arrow_drop_down").css("opacity", "0");
    }
  });

  // -------------------------------
  $(".board24_stretch-group-js").on("click", function () {
    $(this).css("height", "auto");
  });
  // ----------технологический скрипт---потом убрать-------------
  // $(".board24_stretch-group-js").css(
  //   "height","auto",
  // );;

  // --------табы на модалке собрание совета директров---------------
  // .board24_inter-4-box1__drop
  // .board24_tab-js
  let tab1 = $(".board24_tab-js");
  $(".board24_inter-4-box1__drop").fadeOut();

  tab1.find(".board24_inter-4-box1__title").on("click", function () {
    let box1 = $(this).siblings(".board24_inter-4-box1__drop");

    if (box1.hasClass("act")) {
      box1.fadeOut().removeClass("act");
      $(this)
        .siblings(".icon-arrow_drop_down")
        .css("transform", "rotate(0deg)");
    } else {
      box1.fadeIn().addClass("act");
      $(this)
        .siblings(".icon-arrow_drop_down")
        .css("transform", "rotate(180deg)");
    }
  });

  // ----------#board24_create-meeting--------------------
  let meeting1 = $("#board24_create-meeting1");
  let meetPopup2 = $("#board24_meet-popup2");

  meetPopup2.css("display", "none");
  $("#board24_meet-popup1").css("display", "none");

  meeting1.on("click", function () {
    meetPopup2.fadeIn();
  });

  meetPopup2.find($(".board24_cross")).on("click", function () {
    meetPopup2.fadeOut();
  });

  $(document).on("mouseup", function (e) {
    if (
      !center.is(e.target) && // если клик был не по нашему блоку
      center.has(e.target).length === 0 // и не по его дочерним элементам
    ) {
      meetPopup2.fadeOut(); // скрываем его
    }
  });

  // -----------------------------
  let meetPopup1 = $("#board24_meet-popup1");
  let buttonblue2 = $("#board24_meet-popup2").find($(".board24_button-blue"));
  let center = meetPopup1.find($(".board24_meet__center"));

  meetPopup1.find($(".board24_cross")).on("click", function () {
    meetPopup1.fadeOut();
  });

  $("#board24_meet-popup2")
    .find($(".board24_button-blue"))
    .on("click", function () {
      meetPopup1.fadeIn();
      $("#board24_meet-popup2").fadeOut();
    });

  $(document).on("mouseup", function (e) {
    if (
      !center.is(e.target) && // если клик был не по нашему блоку
      center.has(e.target).length === 0 // и не по его дочерним элементам
    ) {
      meetPopup1.fadeOut(); // скрываем его
    }
  });

  // --------------------------------------
  $("#board24_meet-popup3").fadeOut();
  $("#board24_meet-popup2")
    .find($(".board24_button-empty"))
    .on("click", function () {
      $("#board24_meet-popup3").fadeIn();
      $("#board24_meet-popup2").fadeOut();
    });
  let center1 = $("#board24_meet-popup3").find($(".board24_meet__center"));
  $(document).on("mouseup", function (e) {
    if (
      !center1.is(e.target) && // если клик был не по нашему блоку
      center1.has(e.target).length === 0 // и не по его дочерним элементам
    ) {
      $("#board24_meet-popup3").fadeOut(); // скрываем его
    }
  });

  $("#board24_meet-popup3")
    .find($(".board24_cross"))
    .on("click", function () {
      $("#board24_meet-popup3").fadeOut();
    });

  // ------------meet-popup--------------
  let meetlink1 = $("#board24_link-meet");
  let meetpopup1 = $("#board24_person-meet-popup");
  let fademeet1 = meetpopup1.find(".board24_popup__body");
  meetpopup1.fadeOut();
  meetlink1.on("click", function () {
    meetpopup1.fadeIn();
  });
  $(document).on("mouseup", function (e) {
    if (
      !fademeet1.is(e.target) && // если клик был не по нашему блоку
      fademeet1.has(e.target).length === 0 // и не по его дочерним элементам
    ) {
      meetpopup1.fadeOut(); // скрываем его
    }
  });

  meetpopup1.find($(".board24_cross")).on("click", function () {
    meetpopup1.fadeOut();
  });

  // ---------------------
  // $(".board24_person").fadeOut();
  $(".board24_chef__img").on("click", function () {
    let var1 = $(this).find(".board24_person");
    if ($(this).hasClass("act")) {
      var1.fadeOut();
      $(this).removeClass("act");
      $(this).parent().css("background-color", "rgba(255, 255, 255, 1)");
    } else {
      var1.fadeIn(200);
      $(this).addClass("act");
      $(this).parent().css("background-color", "rgba(196, 196, 196, 0.3)");
    }
  });

  // -----------крестики и галочки-----------
  // -----------крестики и галочки-----------
  // -----------крестики и галочки-----------
  // -----------крестики и галочки-----------

  // let boardcolumn=$(".board24_middle-meet-1").find($(".board24_column"));
  // let img = $(".board24_text1-band-img");
  // let band = $(".board24_text1-band");
  // let margin1=boardcolumn.width()-8+6;
  // let res1 = boardcolumn.width()/2-4;
  // половина ширины колонки  минус  половина ширины картинки. получаем отступ для band точно равный половине ширины колонки за вычетом половины ширины картинки.
  // img.css("margin-right", margin1);
  // band.css("margin-left", res1);
  // -----------крестики и галочки-----------
  // -----------крестики и галочки-----------

  var boardcolumn = $(".board24_middle-meet-1").find($(".board24_column"));
  var img = $(".board24_text1-band-img");
  var band = $(".board24_text1-band");
  var margin1 = boardcolumn.width() - 8 + 6;
  var res1 = boardcolumn.width() / 2 - 4;

  img.css("margin-right", margin1);
  band.css("margin-left", res1);

  $(window).resize();

  $(window).resize(function () {
    var boardcolumn = $(".board24_middle-meet-1").find($(".board24_column"));
    var img = $(".board24_text1-band-img");
    var band = $(".board24_text1-band");
    var margin1 = boardcolumn.width() - 8 + 6;
    var res1 = boardcolumn.width() / 2 - 4;
    img.css("margin-right", margin1);
    band.css("margin-left", res1);
  });

  // -----------------------
  // -----------------------
  // -----------------------

  // -----------------------
  // -----------------------
  // -----------------------

  // ---------справа кабинет табы на странице meet-1---------

  let titlenarrow = $(".board24_person-cabinet__body_narrow").find(
    ".board24_person-cabinet__title"
  );
  let titlewide = $(".board24_person-cabinet__body_wide").find(
    ".board24_person-cabinet__title"
  );
  let dropcabinet1 = $("#board24_drop-narrow");
  let dropcabinet2 = $("#board24_drop-wide");

  dropcabinet1.fadeOut();
  dropcabinet2.fadeOut();

  titlenarrow.on("click", function () {
    let dropcabinety = $(this).siblings(dropcabinet2);
    if (dropcabinety.hasClass("act")) {
      dropcabinety.fadeOut().removeClass("act");
      $(this).find(".icon-arrow_drop_down").css("transform", "rotate(0deg)");
    } else {
      dropcabinety.fadeIn().addClass("act");
      $(this).find(".icon-arrow_drop_down").css("transform", "rotate(180deg)");
    }
  });
  titlewide.on("click", function () {
    let dropcabinety = $(this).siblings(dropcabinet2);
    if (dropcabinety.hasClass("act")) {
      dropcabinety.fadeOut().removeClass("act");
      $(this).find(".icon-arrow_drop_down").css("transform", "rotate(0deg)");
      $(this).parent().css("padding-bottom", "18px");
    } else {
      dropcabinety.fadeIn().addClass("act");
      $(this).find(".icon-arrow_drop_down").css("transform", "rotate(180deg)");
      $(this).parent().css("padding-bottom", "0");
    }
  });

  // -----таб --проект решения на стр meet-1----------
  let line6 = $(".board24_stretsh-meet-1__line_line6");
  let line6drop = $(".board24_drop");
  line6drop.fadeOut();
  let line6ex = $(".board24_expand");
  let line6col = $(".board24_collapse");
  line6col.fadeOut();

  line6.find(line6ex).on("click", function () {
    $(this).parent().next().fadeIn();
    $(this).parent().css({ "background-color": " #f2f9ff", border: "none" });
    $(this).siblings(line6col).fadeIn(1);
    $(this).fadeOut(1);
  });

  line6.find(line6col).on("click", function () {
    $(this).parent().next().fadeOut();
    $(this)
      .parent()
      .css({ "background-color": "#fff", border: "solid 1px #e5e5e5" });
    $(this).fadeOut(1);
    $(this).siblings(line6ex).fadeIn(1);
  });

  // ------------------------

  let title = $(".board24_title");
  let look= $(".board24_look");
  let dropstatistic=$(".board24_drop-statistic");
  dropstatistic.fadeOut();


title.find(".board24_look").on("click", function(){
 if ($(this).hasClass("act")) {
   $(this).parent().siblings(dropstatistic).fadeOut();
   $(this).removeClass("act");
   $(this).parent().siblings(dropstatistic).find(".board24_drop-sub").fadeOut();
 } else {
     
   $(this).parent().siblings(dropstatistic).fadeIn();
   $(this).addClass("act");
   $(this).parent().siblings(".board24_del-statistic").css("display", "none");
 }
});

$(".board24_load-statistic").fadeOut();
$(".board24_del-statistic").fadeOut();
$(".board24_drop-sub").fadeOut(); 
 

dropstatistic.siblings(".board24_load-statistic").on("click", function () {
 
  $(this).siblings(dropstatistic).find(".board24_drop-sub").fadeIn();
  $(this).fadeOut(); 
  $(this).siblings(".board24_del-statistic").fadeIn(); 

}); 

dropstatistic.siblings(".board24_del-statistic").on("click", function () {
  $(this).siblings(".board24_load-statistic").fadeIn(); 
  $(this).css("display", "none"); 
  $(this).siblings(dropstatistic).find(".board24_drop-sub").fadeOut();
}); ;
// -------плашки на календаре--------------

$(".board24_plaha-js").fadeOut();
$(".board24_calendar-table__row-numbers .board24_calendar-table__item").on(
  "click",
  function () {
    if ($(this).hasClass("act")) {
      $(".board24_plaha-js").fadeOut(10);
      $(this).removeClass("act");
    } else {
      $(this).append($(".board24_plaha-js"));
      $(".board24_plaha-js").fadeIn(10);
      $(this).addClass("act");
    }
  }
);
// -------плашки на meeting--------------
let meetImg = $(".meet-content-line__img");
let plahaTab = $(".meet-content-line__tab");
let plahaTabSub = $(".meet-content-line__tab-sub");
let more = plahaTab.find( $(".meet-content-line__tab .icon-more"));

plahaTab.fadeOut();
plahaTabSub.fadeOut();

meetImg.on("click", function () {
  if ($(this).hasClass("act")) {
    plahaTab.removeClass("act").fadeOut();
    $(this).removeClass("act");
    plahaTabSub.fadeOut().removeClass("act");
  } else {
    $(this).closest(".meet-content-line__body").append(plahaTab);
    plahaTab.fadeIn();
    $(this).addClass("act");
  }
});

more.on("click", function () {

  if (plahaTabSub.hasClass("act")) {
    plahaTabSub.fadeOut().removeClass("act");
  } else {
    plahaTabSub.fadeIn().addClass("act");
  }
});

plahaTabSub.find($(".icon-more")).on("click", function () {
    plahaTabSub.fadeOut().removeClass("act");
});

  // ==========ibg=========
  function ibg() {
    $.each($(".board24_ibg"), function (index, val) {
      if ($(this).find("img").length > 0) {
        $(this).css(
          "background-image",
          'url("' + $(this).find("img").attr("src") + '")'
        );
      }
    });
  }

  ibg();
});