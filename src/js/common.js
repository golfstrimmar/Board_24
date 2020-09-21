//-- этот import нужно подключать в каждый файл, чтобы jquery работала
import $ from "jquery";
// ------------------------------------------------


// -------------табы на странице group-card

let tab = $(".board24_tab-js");
$(".board24_item-js").fadeOut(10);

tab.find(".board24_tab-item__title").on("click", function () {
let tabitem = $(this).siblings(".board24_item-js");
if (tabitem.hasClass("act")) {
  tabitem.fadeOut(10).removeClass("act");
  $(this).find(".icon-arrow_drop_down").css("transform", "rotate(0deg)");
} else {
  tabitem.fadeIn(10).addClass("act");
  $(this).find(".icon-arrow_drop_down").css("transform","rotate(180deg)");
}

});

// ------------раздел опрос-------------------------
let question = $(".js-question");
$(".js-question-drop").fadeOut(10);

question.find(".q-js").on("click", function () {
let questiondrop = $(this).siblings(".js-question-drop");

if(questiondrop.hasClass("act")){
 questiondrop.fadeOut(10).removeClass("act");
 $(this).siblings(".icon-arrow_drop_down").css("opacity", "1"); 
}
else {
questiondrop.fadeIn(10).addClass("act");
$(this).siblings(".icon-arrow_drop_down").css("opacity", "0");
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

  // --------табы на модалке собрание совета директров---------------
  // .board24_inter-4-box1__drop
  // .board24_tab-js
let tab1 = $(".board24_tab-js");
$(".board24_inter-4-box1__drop").fadeOut(10); 

tab1.find(".board24_inter-4-box1__title").on("click", function () {
  let box1 = $(this).siblings(".board24_inter-4-box1__drop");

  if (box1.hasClass("act")) {
    box1.fadeOut(10).removeClass("act");
$(this).siblings(".icon-arrow_drop_down").css("transform", "rotate(0deg)");
  } else {
    box1.fadeIn(10).addClass("act");
    $(this)
      .siblings(".icon-arrow_drop_down")
      .css("transform", "rotate(180deg)");
  }
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
