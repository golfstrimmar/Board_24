//-- этот import нужно подключать в каждый файл, чтобы jquery работала
import $ from "jquery";

$(document).ready(function () {
  let Popup = $(".board24_meet__popup");
  $(".popup-init-js").on("click", function () {
    Popup.fadeOut(200);
    let rel = $(this).attr("rel");
    let pop = $("div." + rel);
    if (Popup.hasClass(rel)) {
      pop.fadeIn(200);
      $("body").addClass("lock");
    }
  });

  $(".close-js").on("click", function () {
    Popup.fadeOut(200);
    $("body").removeClass("lock");
  });

  $(document).on("mouseup", function (e) {
    let center = $(".board24_island");
    if ($(".board24_meet__overlay").is(e.target)) {
      Popup.fadeOut(200);
      $("body").removeClass("lock");
    }
  });
});
  // let meeting1 = $(".board24_create-meeting1");

  // let meetPopup1 = $("#board24_meet-popup1");
  // let meetPopup2 = $("#board24_meet-popup2");
  // let meetPopup3 = $("#board24_meet-popup3");

  // let center = $(".board24_center");

  // meetPopup1.fadeOut(1);
  // meetPopup2.fadeOut(1);
  // meetPopup3.fadeOut(1);

  // meeting1.on("click", function () {
  //   meetPopup2.fadeIn();
  //   $("body").addClass("lock");
  // });

  // $(".board24_cross").on("click", function () {
  //   meetPopup1.fadeOut();
  //   meetPopup2.fadeOut();
  //   meetPopup3.fadeOut();
  //   $("body").removeClass("lock");
  // });

  // $(document).on("mouseup", function (e) {
  //   if (
  //     !center.is(e.target) && // если клик был не по нашему блоку
  //     center.has(e.target).length === 0 // и не по его дочерним элементам
  //   ) {
  //     meetPopup1.fadeOut(); // скрываем его
  //     meetPopup2.fadeOut(); // скрываем его
  //     meetPopup3.fadeOut(); // скрываем его
  //     $("body").removeClass("lock");
  //   }
  // });

  // // -----------------------------

  // let buttonblue2 = meetPopup2.find($(".board24_button-blue"));
  // buttonblue2.on("click", function () {
  //   meetPopup1.fadeIn();
  //   meetPopup2.fadeOut();
  // });

  // // --------------------------------------
  // meetPopup2.find($(".board24_button-empty")).on("click", function () {
  //   meetPopup3.fadeIn();
  //   meetPopup2.fadeOut();
  // });

  // // -------------------------------------------------
  // $(".meet-content-line .icon-more").on("click", function () {
  //   meetPopup3.fadeIn();
  // });

  // ------------meet-popup--------------
  // let meetlink1 = $("#board24_link-meet");
  // let meetpopup1 = $("#board24_person-meet-popup");
  // let fademeet1 = meetpopup1.find(".board24_popup__body");
  // meetpopup1.fadeOut();
  // meetlink1.on("click", function () {
  //   meetpopup1.fadeIn();
  // });
  // $(document).on("mouseup", function (e) {
  //   if (
  //     !fademeet1.is(e.target) && // если клик был не по нашему блоку
  //     fademeet1.has(e.target).length === 0 // и не по его дочерним элементам
  //   ) {
  //     meetpopup1.fadeOut(); // скрываем его
  //   }
  // });

// ---------------------------------------------------
  // meetpopup1.find($(".board24_cross")).on("click", function () {
  //   meetpopup1.fadeOut();
  // });

  // let voice = $("#board24_person-meet-popup-add-voice");
  // let blueJs = $(".board24_button-blue-js");
  // let closeVoice = $("#board24_person-meet-popup-add-voice .icon-close2");
  // voice.fadeOut(0);
  // blueJs.on("click", function () {
  //   voice.fadeIn();
  // });
  // closeVoice.on("click", function () {
  //   voice.fadeOut();
  // });

  // ---------------------------
  // let meetTree = $("#board_24-popup-meet-3");
  // let marker = $(".board24_text1-band-img_marker");
  // let meetTreeOverlay = $(".board_24-popup-meet-3__overlay");
  // meetTree.fadeOut(1);

  // marker.on("click", function () {
  //   meetTree.fadeIn();
  // });
  // $(".icon-close2").on("click", function () {
  //   meetTree.fadeOut(1);
  // });

  // meetTreeOverlay.on("click", function () {
  //   meetTree.fadeOut();
  // });

  // ---------------------------------------------
  // let meet1popup1 = $("#board24_meet-1__popup1");
  // let meet1popup1overlay = $("#board24_meet-1__popup1 .board24_meet__overlay");
  // let popup1js = $(".meet-1-popup1-js");
  // let closemeet1popup1 = $("#board24_meet-1__popup1 .icon-close2");

  // meet1popup1.fadeOut(0);

  // popup1js.on("click", function () {
  //   meet1popup1.fadeIn();
  // });

  // closemeet1popup1.on("click", function () {
  //   meet1popup1.fadeOut();
  // });

  // // jQuerобщее закрытие 3-x попапов
  // $(document).on("mouseup", function (e) {
  //   let meetCenter = $(this).find(".board24_meet__center");
  //   if (
  //     !meetCenter.is(e.target) && // если клик был не по нашему блоку
  //     meetCenter.has(e.target).length === 0 // и не по его дочерним элементам
  //   ) {
  //     voice.fadeOut();
  //     interTen.fadeOut();
  //     meet1popup1.fadeOut();
  //     meet1popup2.fadeOut();
  //     $(".board24_inter-4-box1__drop ").slideUp().removeClass("act");
  //     $(".board24_inter-4-box1__drop ")
  //       .siblings(".icon-arrow_drop_down")
  //       .css("transform", "rotate(0deg)");
  //   }
  // });

  // -------------------------
  // let meet1popup2 = $("#board24_meet-1__popup2");
  // let meet1popup2overlay = $("#board24_meet-1__popup2 .board24_meet__overlay");
  // let popup2js = $(".meet-1-popup2-js");
  // let closemeet1popup2 = $("#board24_meet-1__popup2 .icon-close2");

  // meet1popup2.fadeOut(0);

  // popup2js.on("click", function () {
  //   meet1popup2.fadeIn();
  // });

  // closemeet1popup2.on("click", function () {
  //   meet1popup2.fadeOut();
  // });

  // meet1popup2overlay.on("click", function () {

  // });

  // --------------------------------------------------------------
  // let interTen = $("#board24_middle-inter-10");
  // let blueTen = $(".board24_icon-js");
  // let closeTen = $(".board24_middle-inter-10 .icon-close2");
  // interTen.fadeOut(0);

  // blueTen.on("click", function () {
  //   interTen.fadeIn();
  // });

  // closeTen.on("click", function () {
  //   interTen.fadeOut();
  // });

  // ----------------------------------




