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

  // --------табы на модалке собрание совета директров---------------
  let tab1 = $(".board24_tab-js");
  $(".board24_inter-4-box1__drop").fadeOut();

  tab1.find(".board24_inter-4-box1__title").on("click", function () {
    let box1 = $(this).siblings(".board24_inter-4-box1__drop");

    if (box1.hasClass("act")) {
      box1.slideUp().removeClass("act");
      $(this)
        .siblings(".icon-arrow_drop_down")
        .css("transform", "rotate(0deg)");
    } else {
      box1.slideDown().addClass("act");
      $(this)
        .siblings(".icon-arrow_drop_down")
        .css("transform", "rotate(180deg)");
    }
  });

 

  // -------------------------------------
  let spanButton = $(".board24-corvet__text-add	");
  let corvetDrop1 = $(".board24-corvet__drop");
  corvetDrop1.slideUp(1);
  spanButton.on("click", function () {
    if ($(this).hasClass("act")) {
      $(this).removeClass("act");
      $(this)
        .find(".icon-arrow_drop_down")
        .css("transform", "translateY(-50%) rotate(0deg)");
      $(this).siblings(corvetDrop1).slideUp();
    } else {
      $(this).addClass("act");
      $(this)
        .find(".icon-arrow_drop_down")
        .css("transform", "translateY(-50%) rotate(180deg)");
      $(this).siblings(corvetDrop1).slideDown(300);
    }
  });

 





 

 

  

  // ---------------------
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
  // -------------------------------------
  let but0 = $(".board24_bot_data .board24_ts-7");
  let hid0 = $(".board24_hidden");
  let icon0 = $(".icon-arrow_drop_down");
  // let dataJs1 = $(".board24_hidden");
  // let container1 = $("body");
  hid0.slideUp(1);
  but0.on("click", function () {
    if ($(this).hasClass("act")) {
      $(this).removeClass("act");
      $(this).find(icon0).css("transform", "translateY(-50%) rotate(0deg)");
      $(this).siblings(hid0).slideUp(300);
    } else {
      $(this).addClass("act");
      $(this).find(icon0).css("transform", "translateY(-50%) rotate(180deg)");
      $(this).siblings(hid0).slideDown(300);
    }
  });

  // ---------------------
  let but1 = $(".board24_item-drop__title");
  let hid1 = $(".board24_item-drop");
  let icon1 = $(".board24_item-drop__title .icon-arrow_drop_down");
  let dataJs1 = $(".board24_hidden");
  let container1 = $("body");
  hid1.slideUp(1);
  but1.on("click", function () {
    if ($(this).hasClass("act")) {
      $(this).removeClass("act");
      icon1.css("transform", "translate( 0, -50%) rotate(0deg)");
      hid1.slideUp(300);
    } else {
      $(this).addClass("act");
      icon1.css("transform", "translate( 0, -50%) rotate(180deg)");
      hid1.slideDown(300);
    }
  });
  // ---------------------------------------

  // -------------------------------

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
      dropcabinety.slideUp().removeClass("act");
      $(this).find(".icon-arrow_drop_down").css("transform", "rotate(0deg)");
    } else {
      dropcabinety.slideDown().addClass("act");
      $(this).find(".icon-arrow_drop_down").css("transform", "rotate(180deg)");
    }
  });
  titlewide.on("click", function () {
    let dropcabinety = $(this).siblings(dropcabinet2);
    if (dropcabinety.hasClass("act")) {
      dropcabinety.slideUp().removeClass("act");
      $(this).find(".icon-arrow_drop_down").css("transform", "rotate(0deg)");
      $(this).parent().css("padding-bottom", "18px");
    } else {
      dropcabinety.slideDown().addClass("act");
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

  $(".meet-content-line__tab").fadeOut(1);
  // $(".meet-content-line__tab-sub").fadeOut(1);

  meetImg.on("click", function () {

    let plahaTab = $(this).siblings(".meet-content-line__tab");
    let plahaTabSub = $(this).siblings(".meet-content-line__tab").find(
      ".meet-content-line__tab-sub"
    );

    if ($(this).hasClass("act")) {
      plahaTab.removeClass("act").fadeOut();
      $(this).removeClass("act");
      plahaTabSub.fadeOut().removeClass("act");
    } 
    else {
      plahaTab.fadeIn();
      $(this).addClass("act");
    }
  });


let more = $(".meet-content-line__tab").find($(".board24_point-js"));
more.on("click", function () {
let plahaTabSub = $(this).parent().siblings(".meet-content-line__tab-sub");
    if (plahaTabSub.hasClass("act")) {
      plahaTabSub.fadeOut().removeClass("act");
    } else {
      plahaTabSub.fadeIn().addClass("act");
    }
});

$(".board24_point-sub").on("click", function () {
  $(this).parent().fadeOut().removeClass("act");
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
  let mobHeader = _(".board_24__mob-header");
  // ------------------------------------

  window.addEventListener("scroll", function (event) {
    if (window.pageYOffset > 50) {
      mobHeader.classList.add('board_24__mob-header-act');
    } else {
      if (mobHeader.classList.contains("board_24__mob-header-act")) {
        mobHeader.classList.remove("board_24__mob-header-act");
      }
    }
  });

  // -----------.board24_mob-person-------------------------

  let burger = $(".icon-menu");
  let mobPerson = $(".board24_mob-person");
  let bodyBody = $("body");
  bodyBody.on("click", function () {
    if (burger.is(event.target)) {
      mobPerson.addClass("header__menu_act");
      bodyBody.css("overflow", "hidden");
    } else {
      if (
        !mobPerson.is(event.target) &&
        mobPerson.has(event.target).length === 0
      ) {
        mobPerson.removeClass("header__menu_act");
        bodyBody.css("overflow", "visible");
      }
    }
  });

  // ------ правильные табы. открывают только то что нужно----------------
  let mobButton = $(".board24_mob-button");
  $(".board24_mob-drop").slideUp(1);

  mobButton.on("click", function () {
    let icomDrop = $(this).find(".icon-arrow_drop_down");
    let mobDrop = $(this).next(".board24_mob-drop");
    if ($(this).hasClass("act")) {
      $(this).removeClass("act");
      mobDrop.slideUp(300);
      icomDrop.css("transform", "translate( 0%, -50%) rotate(0deg)");
      $(this).parent().removeClass("board24_mob-button_active-active");
    } else {
      $(this).addClass("act");
      $(this).parent().addClass("board24_mob-button_active-active");
      mobDrop.slideDown(300);
      icomDrop.css("transform", "translate( 0%, -50%) rotate(180deg)");
    }
  });
  // -----------------------
  // -----------попап по синей кнопке mob-main и остальные--------------
  let popupAssignment = $("#board24_poup-assignment");
  let popupAssignmentbutton = $("#board24_poup-assignment-button");
  let popupAssignmentoverlay = $(".board24_poup-assignment__overlay");
  popupAssignment.fadeOut(1);

  popupAssignmentbutton.on("click", function () {
    popupAssignment.fadeIn();
  });

  popupAssignment.on("click", function () {
    if ($(this).find(".icon-close2").is(event.target)) {
      $(this).fadeOut();
    }
  });

  popupAssignmentoverlay.on("click", function () {
    popupAssignment.fadeOut();
  });

  // -----попап на мобилке pop-poll----------------------
  let popButton = $(".board24_pop-poll-js");
  let popPopup = $("#board24_poup-mob-poll");
  let popPopupOverlay = $(".board24_poup-assignment__overlay");

  popPopup.fadeOut(1);

  popButton.on("click", function () {
    popPopup.fadeIn();
  });

  popPopupOverlay.on("click", function () {
    popPopup.fadeOut();
  });

  popPopup.find(".icon-close2").on("click", function () {
    popPopup.fadeOut();
  });

  // -------------попап на мобилке pop-quiz-----------------------
  $("#board24_poup-quiz");
  $(".board24_mob-quiz-js");
  $("#board24_poup-quiz").fadeOut(1);

  $(".board24_mob-quiz-js").on("click", function () {
    $("#board24_poup-quiz").fadeIn();
  });

  popPopupOverlay.on("click", function () {
    $("#board24_poup-quiz").fadeOut();
  });

  $("#board24_poup-quiz")
    .find(".icon-close2")
    .on("click", function () {
      $("#board24_poup-quiz").fadeOut();
    });

  // -----------
  let but = $(".button-js");
  let hid = $(".drop-js");
  let icon = $(".icon-js");
  let container = $(".container-js");

  hid.slideUp(1);

  but.on("click", function () {
    if ($(this).hasClass("act")) {
      $(this).removeClass("act");
      $(this).find(icon).css("transform", "rotate(0deg)");
      hid.slideUp(300);
      button1.removeClass("act");
      person1.slideUp(300);
    } else {
      $(this).addClass("act");
      $(this).find(icon).css("transform", "rotate(180deg)");
      hid.slideDown(300);
    }
  });
  // -----------
  let button1 = $(".board24_button1-js");
  $(".board24_mob-stat-drop__level__person-area").slideUp(1);
  
  button1.on("click", function () {
  let person1 = $(this).siblings(".board24_mob-stat-drop__level__person-area");
    if ($(this).hasClass("act")) {
      $(this).removeClass("act");
      // $(this).siblings(person1).slideUp(300);
      person1.slideUp(300);
    } else {
      $(this).addClass("act");
      // $(this).siblings(person1).slideDown(300);
      person1.slideDown(300);
    }
  });

  // ---------------	//
  $(".board24_mob-stat-drop__level__item").on("click", function () {
    if ($(this).hasClass("act")) {
      $(this).removeClass("act");
      $(this).css("background", "transparent");
    } else {
      $(this).addClass("act");
      $(this).css("background", "rgba(196, 196, 196, 0.3)");
    }
  });

  // --------------------

  // $(".board24_line-plaha__question").fadeOut(0);

  // $(".board24_line-plaha__button").on("click", function () {
  //   let question = $(this).siblings(".board24_line-plaha__question");
  //   if ($(this).hasClass("act")) {
  //     question.fadeOut();
  //     $(this).removeClass("act");
  //     // $(this)
  //       // .parent(".board24_line-plaha__item")
  //       // .remove($(".board24_line-plaha__question"));
      
  //   } else {
  //     $(this).addClass("act");
  //     question.fadeIn();
  //     $(".board24_line-plaha__button")
  //       .not($(this))
  //       .removeClass("act")
  //       .siblings(".board24_line-plaha__question").fadeOut();
      
  //     // $(this)
  //       // .parent(".board24_line-plaha__item")
  //       // .append($(".board24_line-plaha__question"));
  //   }
  // });

  // -------------------
  let linePlahaTab = $(".board24_line-plaha__tab");
  $(".board24_line-plaha__tab-drop").slideUp(1);

  linePlahaTab.find("span").on("click", function () {
    let icomDrop = $(this).find(".icon-arrow_drop_down");
    let tabDrop = $(this).siblings(".board24_line-plaha__tab-drop");

    if ($(this).hasClass("act")) {
      $(this).removeClass("act");
      tabDrop.slideUp();
      icomDrop.css("transform", "translate( 0%, -50%) rotate(0deg)");
    } else {
      $(this).addClass("act");
      tabDrop.slideDown();
      icomDrop.css("transform", "translate( 0%, -50%) rotate(180deg)");
    }
  });

  // --------------mob-modal ????------------------------
  $(".board_24__mob-modal__modal-in");
  $(".icon-close2");

  $(".icon-close2").on("click", function () {
    $(this).parent(".board_24__mob-modal__modal-in").fadeOut();
  });

  // --------------------------
  let tabText = $(".board24-corvet__tab-text");
  let corvetDrop = $(".board24-corvet__text-area-drop");
  corvetDrop.fadeOut(0);
  tabText.on("click", function () {
    if ($(this).hasClass("act")) {
      $(this).removeClass("act");
      $(this).find(".icon-arrow_drop_down").css("transform", "rotate(0deg)");
      $(this).siblings(corvetDrop).slideUp();
    } else {
      $(this).addClass("act");
      $(this).siblings(corvetDrop).slideDown();
      $(this).find(".icon-arrow_drop_down").css("transform", "rotate(180deg)");
    }
  });

  // -----------
  container.on("click", function () {
    if (but.hasClass("act")) {
      let dataJs = $(".area-js");
      if (!dataJs.is(event.target) && dataJs.has(event.target).length === 0) {
        but.removeClass("act");
        $(this).find(icon).css("transform", "rotate(0deg)");
        hid.slideUp(300);
        button1.removeClass("act");
        person1.slideUp(300);
      }
    }
  });




  // -----------
});

