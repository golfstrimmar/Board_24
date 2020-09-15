//-- этот import нужно подключать в каждый файл, чтобы jquery работала
import $ from "jquery";
// ------------------------------------------------


// -------------табы на странице group-card
let tab = $(".board24_tab-js");
let tabitem = $(".board24_item-js");

tabitem.fadeOut().removeClass("act");

tab.on("click", function () {
if (tabitem.eq($(this).index()).hasClass("act")){

tabitem.eq($(this).index()).fadeOut(10).removeClass("act");

}else{
  tabitem.eq($(this).index()).fadeIn(10).addClass("act");
}


});
// -------------------------------
$(".board24_stretch-group-js").on("click", function () {
$(this).css(
  "height","auto",
);
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
