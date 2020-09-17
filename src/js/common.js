//-- этот import нужно подключать в каждый файл, чтобы jquery работала
import $ from "jquery";
// ------------------------------------------------


// -------------табы на странице group-card
// let tab = $(".board24_tab-js");
// let tabitem = $(".board24_item-js");







// ----------технологический скрипт---потом убрать-------------
// tabitem.fadeOut().addClass("act");
// tabitem.fadeIn().addClass("act");
// --------------------------------------------


// tab.on("click", function () {
// if (tabitem.eq($(this).index()).hasClass("act")){
// tabitem.eq($(this).index()).fadeOut(10).removeClass("act");
// $(".icon-arrow_drop_down").eq($(this).index()).removeClass("act");

// }else{
//   tabitem.eq($(this).index()).fadeIn(10).addClass("act");
// $(".icon-arrow_drop_down").eq($(this).index()).addClass("act");
// }
// });


// --------materials-------------
let tabmaterials = $("#board24_item__materials .board24_tab-item__title");
let tabitemmaterials = $("#board24_item__materials .board24_item-js");
tabitemmaterials.fadeOut().removeClass("act");

tabmaterials.on("click", function () {
  if (tabitemmaterials.hasClass("act")) {
    tabitemmaterials.fadeOut(10).removeClass("act");
    $(".materials-icomoon").eq($(this).index()).removeClass("act");
  } else {
    tabitemmaterials.fadeIn(10).addClass("act");
    $(".materials-icomoon").eq($(this).index()).addClass("act");
  }
});

// -----------reports----------------

let tabreports = $("#board24_item_reports .board24_tab-item__title");
let tabitemreports = $("#board24_item_reports .board24_item-js");
tabitemreports.fadeOut().removeClass("act");

tabreports.on("click", function () {
  if (tabitemreports.hasClass("act")) {
    tabitemreports.fadeOut(10).removeClass("act");
    $(".reports-icomoon").removeClass("act");
  } else {
    tabitemreports.fadeIn(10).addClass("act");
    $(".reports-icomoon").addClass("act");
  }
});

// -----------interview----------------

let tabinterview = $("#board24_item-interview .board24_tab-item__title");
let tabiteminterview = $("#board24_item-interview .board24_item-js");
tabiteminterview.fadeOut().removeClass("act");

tabinterview.on("click", function () {
  if (tabiteminterview.hasClass("act")) {
    tabiteminterview.fadeOut(10).removeClass("act");
    $(".interview-icomoon").removeClass("act");
  } else {
    tabiteminterview.fadeIn(10).addClass("act");
    $(".interview-icomoon").addClass("act");
  }
});

// -----------------calendar------------------------------

let tabcalendar = $("#board24_item-calendar .board24_tab-item__title");
let tabitemcalendar = $("#board24_item-calendar .board24_item-js");
tabitemcalendar.fadeOut().removeClass("act");

tabcalendar.on("click", function () {
  if (tabitemcalendar.hasClass("act")) {
    tabitemcalendar.fadeOut(10).removeClass("act");
    $(".calendar-icomoon").removeClass("act");
  } else {
    tabitemcalendar.fadeIn(10).addClass("act");
    $(".calendar-icomoon").addClass("act");
  }
});

// ---------------news------------------------

let tabnews = $("#board24_item-news .board24_tab-item__title");
let tabitemnews = $("#board24_item-news .board24_item-js");
tabitemnews.fadeOut().removeClass("act");

tabnews.on("click", function () {
  if (tabitemnews.hasClass("act")) {
    tabitemnews.fadeOut(10).removeClass("act");
    $(".news-icomoon").removeClass("act");
  } else {
    tabitemnews.fadeIn(10).addClass("act");
    $(".news-icomoon").addClass("act");
  }
});
// ---------------tasks------------------------

let tabtasks = $("#board24_item-tasks .board24_tab-item__title");
let tabitemtasks = $("#board24_item-tasks .board24_item-js");
tabitemtasks.fadeOut().removeClass("act");

tabtasks.on("click", function () {
  if (tabitemtasks.hasClass("act")) {
    tabitemtasks.fadeOut(10).removeClass("act");
    $(".tasks-icomoon").removeClass("act");
  } else {
    tabitemtasks.fadeIn(10).addClass("act");
    $(".tasks-icomoon").addClass("act");
  }
});




// ------------раздел опрос-------------------------
let question = $(".js-question");
let questiondrop = $(".js-question-drop");

questiondrop.fadeOut().removeClass("act");
question.on("click", function () {
  if (questiondrop.eq($(this).index()).hasClass("act")) {
    questiondrop.eq($(this).index()).fadeOut(10).removeClass("act");
    $(".board24_interview-icomoon-del").eq($(this).index()).css("opacity", "1");
  } else {
    questiondrop.eq($(this).index()).fadeIn(10).addClass("act");
    $(".board24_interview-icomoon-del").eq($(this).index()).css("opacity", "0");
  }
});





// -------------------------------
$(".board24_stretch-group-js").on("click", function () {
$(this).css(
  "height","auto",
);
});
// ----------технологический скрипт---потом убрать-------------
// $(".board24_stretch-group-js").css(
//   "height","auto",
// );;

  
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
