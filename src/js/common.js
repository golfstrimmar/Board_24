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

  // ----------------------
  let meeting1 = $(".board24_create-meeting1");

let meetPopup1 = $("#board24_meet-popup1");
let meetPopup2 = $("#board24_meet-popup2");
let meetPopup3 = $("#board24_meet-popup3");

 let center = $(".board24_center");
 
meetPopup1.fadeOut(1);
meetPopup2.fadeOut(1);
meetPopup3.fadeOut(1);


  meeting1.on("click", function () {
    meetPopup2.fadeIn();
  });

  $(".board24_cross").on("click", function () {
    meetPopup1.fadeOut();
    meetPopup2.fadeOut();
    meetPopup3.fadeOut();
  });


  $(document).on("mouseup", function (e) {
    if (
      !center.is(e.target) && // если клик был не по нашему блоку
      center.has(e.target).length === 0 // и не по его дочерним элементам
    ) {
      meetPopup1.fadeOut(); // скрываем его
      meetPopup2.fadeOut(); // скрываем его
      meetPopup3.fadeOut(); // скрываем его
    }
  });

  // -----------------------------

  let buttonblue2 = meetPopup2.find($(".board24_button-blue"));
  buttonblue2.on("click", function () {
    meetPopup1.fadeIn();
    meetPopup2.fadeOut();
  });

  // --------------------------------------
  meetPopup2.find($(".board24_button-empty"))
    .on("click", function () {
      meetPopup3.fadeIn();
      meetPopup2.fadeOut();
    });
  
// -------------------------------------
let spanButton = $(".board24-corvet__text	");
let corvetDrop1=$(".board24-corvet__drop");
corvetDrop1.slideUp(1);
  spanButton.on("click", function () {
    if ($(this).hasClass("act")) {
      $(this).removeClass("act");
       $(this)
        .find(".icon-arrow_drop_down")
        .css("transform", "translateY(-50%) rotate(0deg)");		
      $(this)
        .siblings(corvetDrop1)
        .slideUp();
    } else {
      $(this).addClass("act");
      $(this)
        .find(".icon-arrow_drop_down")
        .css("transform", "translateY(-50%) rotate(180deg)");
      $(this)
        .siblings(corvetDrop1)
        .slideDown(300);
    }
  });
// ---------------------------
let meetTree =$("#board_24-popup-meet-3");
let marker = $(".board24_text1-band-img_marker");
let meetTreeOverlay=$(".board_24-popup-meet-3__overlay");
meetTree.fadeOut(1);

marker.on("click", function () {
meetTree.fadeIn();
});				
$(".icon-close2").on("click", function () {
  meetTree.fadeOut(1);

});

meetTreeOverlay.on("click", function () {
   meetTree.fadeOut();
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
// --------------------------
let voice= $("#board24_person-meet-popup-add-voice");		
let blueJs= $(".board24_button-blue-js")
let closeVoice = $("#board24_person-meet-popup-add-voice .icon-close2");
voice.fadeOut(0);	

blueJs.on("click", function () {
  voice.fadeIn();
});	
 closeVoice.on("click", function () {
  voice.fadeOut();
 });
 $(".board24_meet__overlay").on("click", function () {
   voice.fadeOut();
 });
// ----------------------------------


let interTen = $("#board24_middle-inter-10");
let blueTen = $(".board24_icon-js");
let closeTen = $(".board24_middle-inter-10 .icon-close2");
interTen.fadeOut(0);

blueTen.on("click", function () {
  interTen.fadeIn();
});
closeTen.on("click", function () {
  interTen.fadeOut();
});
$(".board24_popup__overlay").on("click", function () {
  interTen.fadeOut();
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
    let container1 = $("body")		
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
let mobHeader = _(".board_24__mob-header");
  // ------------------------------------
 
  window.addEventListener("scroll", function (event) {
    if (window.pageYOffset > 50) {
mobHeader.classList.add("board_24__mob-header-act");
    } else {
      if (mobHeader.classList.contains("board_24__mob-header-act")){
        mobHeader.classList.remove("board_24__mob-header-act");}
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
// ----------------------
let mobButton = $(".board24_mob-button");
let mobDrop = $(".board24_mob-drop");
mobDrop.slideUp(1);
mobButton.on("click", function () {
   let icomDrop = $(this).find(".icon-arrow_drop_down");
  if ($(this).hasClass("act")) {
    $(this).removeClass("act");
    mobDrop.slideUp(300);
    icomDrop.css("transform", "translate( 0%, -50%) rotate(0deg)");
  } else {
    $(this).addClass("act");
    mobDrop.slideDown(300);
    icomDrop.css("transform", "translate( 0%, -50%) rotate(180deg)");
  }
});	



	  // -----------
  let but = $(".button-js");
  let hid = $(".drop-js");
  let icon = $(".icon-js");
  let container=$(".container-js")

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
  let person1 =$(".board24_mob-stat-drop__level__person-area");
person1.slideUp(1);
button1.on("click", function () {
  if ($(this).hasClass("act")) {
    $(this).removeClass("act");
    person1.slideUp(300);
  } else {
    $(this).addClass("act");
    person1.slideDown(300);
  }
});	
// ---------------	// 
$(".board24_mob-stat-drop__level__item").on("click", function () {
if (
$(this).hasClass("act")
  ){
$(this).removeClass("act")
$(this).css("background", "transparent");
}else{
$(this).addClass("act")
$(this).css("background", "rgba(196, 196, 196, 0.3)");
  }
  });	


// --------------------

 $(".board24_line-plaha__question").fadeOut(0);

$(".board24_line-plaha__button").on("click", function () {
if ($(this).hasClass("board24_button-act")) {
  $(this).removeClass("board24_button-act");
  $(this)
    .parent(".board24_line-plaha__item")
    .remove($(".board24_line-plaha__question"));
    $(".board24_line-plaha__question").fadeOut(1)	;
} else {
  $(this).addClass("board24_button-act");
 $(".board24_line-plaha__button").not($(this)).removeClass("board24_button-act");
 $(".board24_line-plaha__question").fadeIn(1);
$(this).parent(".board24_line-plaha__item").append($(".board24_line-plaha__question"));
}
  });	

// -------------------
let linePlahaTab = $(".board24_line-plaha__tab");
$(".board24_line-plaha__tab-drop").slideUp(1);

linePlahaTab.find("span").on("click", function () {
  let icomDrop=$(this).find(".icon-arrow_drop_down");
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

// --------------------------
let tabText = $(".board24-corvet__tab-text");
let corvetDrop = $(".board24-corvet__text-area-drop");
corvetDrop.fadeOut(0)	;
tabText.on("click", function () {
  if ($(this).hasClass("act")) {
    $(this).removeClass("act");
     $(this).find(".icon-arrow_drop_down").css("transform", "rotate(0deg)");
$(this).siblings(corvetDrop).slideUp();

  } else {
    $(this).addClass("act");
    $(this).siblings(corvetDrop).slideDown();
     $(this).find(".icon-arrow_drop_down").css("transform","rotate(180deg)");
  }
});	

	  // -----------
      	container.on("click", function () {
          if (but.hasClass("act")) {
            let dataJs = $(".area-js");
            if (
              !dataJs.is(event.target) &&
              dataJs.has(event.target).length === 0
            ) {
              but.removeClass("act");
              $(this).find(icon).css("transform", "rotate(0deg)");
              hid.slideUp(300);
              button1.removeClass("act");
              person1.slideUp(300);
            }
          }
       
        });
  // -----------




  // -----------
});
