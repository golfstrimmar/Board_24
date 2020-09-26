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

// ----------#board24_create-meeting--------------------
let meeting1 = $("#board24_create-meeting1");
let meetPopup2 = $("#board24_meet-popup2"); 


meetPopup2.css("display","none");
$("#board24_meet-popup1").css("display", "none");

meeting1.on("click",function(){
meetPopup2.fadeIn();
});


meetPopup2.find($(".board24_cross")).on("click", function () {
  meetPopup2.fadeOut();
});



$(document).on("mouseup",function (e) {
   if (
     !center.is(e.target) && // если клик был не по нашему блоку
     center.has(e.target).length === 0// и не по его дочерним элементам
   ) {
    meetPopup2.fadeOut(); // скрываем его
   }
  });

// -----------------------------
let meetPopup1 = $("#board24_meet-popup1"); 
let buttonblue2=$("#board24_meet-popup2").find($(".board24_button-blue"));
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
let meetlink1=$("#board24_link-meet");
let meetpopup1 =$("#board24_person-meet-popup");
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
      $(this).parent().css("background-color","rgba(196, 196, 196, 0.3)");
    }
});


// -----------крестики и галочки-----------

let boardcolumn=$(".board24_middle-meet-1").find($(".board24_column"));
let img = $(".board24_text1-band-img");
let band = $(".board24_text1-band");
let margin1=boardcolumn.width()-8+6;
let res1 = boardcolumn.width()/2-4;  
// половина ширины колонки  минус  половина ширины картинки. получаем отступ для band точно равный половине ширины колонки за вычетом половины ширины картинки.
img.css("margin-right", margin1);
band.css("margin-left", res1);   


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
