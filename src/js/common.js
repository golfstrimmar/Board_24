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
  let look = $(".board24_look");
  let dropstatistic = $(".board24_drop-statistic");
  dropstatistic.fadeOut();

  title.find(".board24_look").on("click", function () {
    if ($(this).hasClass("act")) {
      $(this).parent().siblings(dropstatistic).fadeOut();
      $(this).removeClass("act");
      $(this)
        .parent()
        .siblings(dropstatistic)
        .find(".board24_drop-sub")
        .fadeOut();
    } else {
      $(this).parent().siblings(dropstatistic).fadeIn();
      $(this).addClass("act");
      $(this)
        .parent()
        .siblings(".board24_del-statistic")
        .css("display", "none");
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
  });
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
  let more = plahaTab.find($(".meet-content-line__tab .icon-more"));

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

  // ---------select---meet----------------------

  $(".select").each(function () {
    const _this = $(this),
      selectOption = _this.find("option"),
      selectOptionLength = selectOption.length,
      selectedOption = selectOption.filter(":selected"),
      duration = 200; // длительность анимации

    _this.hide();
    _this.wrap('<div class="select"></div>');

    $("<div>", {
      class: "new-select",
      text: _this.children("option:disabled").text(),
    }).insertAfter(_this);

    const selectHead = _this.next(".new-select");

    $("<div>", {
      class: "new-select__list",
    }).insertAfter(selectHead);

    const selectList = selectHead.next(".new-select__list");

    for (let i = 1; i < selectOptionLength; i++) {
      $("<div>", {
        class: "new-select__item",
        html: $("<span>", {
          text: selectOption.eq(i).text(),
        }),
      })
        .attr("data-value", selectOption.eq(i).val())
        .appendTo(selectList);
    }

    const selectItem = selectList.find(".new-select__item");
    selectList.slideUp(0);
    //  --
    selectHead.on("click", function () {
      $(document).on("mouseup", function (e) {
        if (
          !selectHead.is(e.target) && // если клик был не по нашему блоку
          selectHead.has(e.target).length === 0 // и не по его дочерним элементам
        ) {
          selectHead.removeClass("on");
          selectList.slideUp(duration);
          $(this)
            .parent()
            .siblings(".board24_form-span")
            .css("transform", "translate( 0, -50%)");
        }
        selectHead
          .parent()
          .siblings(".board24_form-span")
          .css("transform", "translate( 0, -50%)");
      });

      if (!$(this).hasClass("on")) {
        //  открытие селекта
        $(this).addClass("on");
        selectList.slideDown(duration);
        $(this)
          .parent()
          .siblings(".board24_form-span")
          .css("transform", "translate( 0, -50%) rotate(180deg)");

        selectItem.on("click", function () {
          let chooseItem = $(this).data("value");

          // $("select").val(chooseItem).attr("selected", "selected");

          $(this)
            .parent()
            .parent()
            .find("select")
            .val(chooseItem)
            .attr("selected", "selected");

          selectHead.text($(this).find("span").text());
          selectList.slideUp(duration);
          selectHead.removeClass("on");
          $(this)
            .closest(".select")
            .siblings(".board24_form-span")
            .css("transform", "translate( 0, -50%)");
        });
      } else {
        // закрытие селекта
        $(this).removeClass("on");
        selectList.slideUp(duration);
        $(this)
          .parent()
          .siblings(".board24_form-span")
          .css("transform", "translate( 0, -50%)");
      }
    });
    // --
  });

  $(".js-example-basic-single-place").select2({
    width: "100%",
    tags: true,
  });

  // -----------страница  structure----------------
  let card = $(".board24_content-card");
  // let persons = $(".board24_meet-content__persons");
  card.fadeOut();
  // persons.fadeOut();

  $(".board24_middle-structure ul").fadeOut();

  $(".body_js").on("click", function () {
    if ($(this).hasClass("act")) {
      $(this).next("ul").fadeOut(200);
      $(this).removeClass("act");
      $(this).next("ul").find("ul").fadeOut();
      $(this).next("ul").find(".body_js").removeClass("act");
      card.fadeOut();
      $(".board24_avatar-name").removeClass("act");
    } else {
      $(this).next("ul").fadeIn(200);
      $(this).addClass("act");
    }
  });

  $(".board24_avatar-name").on("click", function () {
    if ($(this).hasClass("act")) {
      $(this).removeClass("act");
      $(this).next(card).fadeOut();
    } else {
      $(this).addClass("act");
      $(this).next(card).fadeIn();
    }
  });

  card.find(".icon-close2").on("click", function () {
    $(this).closest(card).fadeOut();
    $(".board24_avatar-name").removeClass("act");
  });

  // =====================
  $(document).ready(function () {
    $(".js-example-basic-single").select2({
      width: "100%",
    });
  });

  // ==========ibg=========
  $(document).ready(function () {
    function ibg() {
      $(".board24_ibg").each(function (e) {
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
  // ------------------------
  function _(el) {
    return document.querySelector(el);
  }

  // ------------------------------------
  let mobHeader = _(".board_24__mob-header");

  window.addEventListener("scroll", function (event) {
    if (window.pageYOffset > 50) {
      mobHeader.style.cssText = `position: fixed; 
  width: 100%;
  height: 40px;
  top: 0;
  left: 0;
    background-color: rgba(36, 36, 36, 0.4);
     padding: 5px 15px 5px 15px !important;
    align-items: center;
    transition: all .5s ease-out;
    z-index: 200;
    `;
    } else {
      mobHeader.style.cssText = `position: relative; 
    background-color: transparent;
    padding: 0 0 15px;
top: 0; height: auto; 
transition: all .5s ease-out;
z-index: 200;
`;
    }
  });

  // -----------.board24_mob-person-------------------------

  let menu = _(".board24_mob-person");
  let burger = _(".icon-menu");
  let body = _(".board_24__mob-main__body");
  let bodyBody = _("body");

  bodyBody.addEventListener("click", function (event) {
    if (event.target == burger) {
      menu.classList.add("header__menu_act");
      bodyBody.style.overflow = "hidden";
    } else {
      if (menu.classList.contains("header__menu_act")) {
        if (event.target != menu) {
          menu.classList.remove("header__menu_act");
          bodyBody.style.overflow = "visible";
        }
      }
    }
  });


  let drop = $(".board24_mob-drop-js");
  let button = $(".board24_mob-button");
  let iconDrop = button.find(".icon-arrow_drop_down");

  drop.fadeOut(1);

  button.on("click", function () {
    if ($(this).hasClass("act")) {
      $(this).removeClass("act");
      drop.slideUp(300);
      iconDrop.css("transform", "rotate(0deg)");

      hidden.slideUp(300, function () {
        button1.removeClass("act");
        $(this)
          .siblings(".board24_bot__area")
          .find(".icon-arrow_drop_down")
          .css("transform", "rotate(0deg)");
      });
    } else {
      $(this).addClass("act");
      drop.slideDown(300);
      iconDrop.css("transform", "rotate(180deg)");
    }

  });

  // ----------------------------------
  let button1 = $(".board24_bot__area");
  let hidden = $(".board24_mob-plaha");
  hidden.slideUp(0);

  button1.on("click", function () {
    let thisIcon = $(this).find(".icon-arrow_drop_down");

    if (button1.hasClass("act")) {
      hidden.slideUp(300, function () {
        button1.removeClass("act");
      });
      thisIcon.css("transform", "rotate(0deg)");
    } else {
      hidden.slideDown(300, function () {
        button1.addClass("act");
      });
      thisIcon.css("transform", "rotate(180deg)");
    }
  });
  // ----------------------------------
  
  // ----------------------------------
  $(".board_24__mob-container").on(
    "click",
    function () {
if (button1.hasClass("act")) {
  let dataJs = $(".board24_data-js");
if (!dataJs.is(event.target) && dataJs.has(event.target).length === 0) {
  hidden.slideUp(300, function () {
    button1.removeClass("act");
    $(this)
      .siblings(".board24_bot__area")
      .find(".icon-arrow_drop_down")
      .css("transform", "rotate(0deg)");
  });
}	
}
    }
  );
  // -----------
  // -----------
  // -----------
  // -----------
  // -----------
  // -----------
});
