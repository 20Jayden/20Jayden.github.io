/**
 * A tool for smooth scrolling and topbar switcher
 */
const ScrollHelper = (function () {
  const $body = $("body");
  const ATTR_TOPBAR_VISIBLE = "data-topbar-visible";
  const topbarHeight = $("#topbar-wrapper").outerHeight();

  let scrollUpCount = 0; // the number of times the scroll up was triggered by ToC or anchor
  let topbarLocked = false;
  let orientationLocked = false;

  return {
    hideTopbar: () => $body.attr(ATTR_TOPBAR_VISIBLE, false),
    showTopbar: () => $body.attr(ATTR_TOPBAR_VISIBLE, true),

    // scroll up

    addScrollUpTask: () => {
      scrollUpCount += 1;
      if (!topbarLocked) { topbarLocked = true; }
    },
    popScrollUpTask: () => scrollUpCount -= 1,
    hasScrollUpTask: () => scrollUpCount > 0,
    topbarLocked: () => topbarLocked === true,
    unlockTopbar: () => topbarLocked = false,
    getTopbarHeight: () => topbarHeight,

    // orientation change

    orientationLocked: () => orientationLocked === true,
    lockOrientation: () => orientationLocked = true,
    unLockOrientation: () => orientationLocked = false
  };

}());



/**
 * Progressbar
 */
$(window).load(function(){
  $(window).scroll(function() {
    var wintop = $(window).scrollTop(), docheight = $('article').height(), winheight = $(window).height();
    console.log(wintop);
    var totalScroll = (wintop/(docheight-winheight))*100;
    console.log("total scroll" + totalScroll);
  $(".progress-bar").css("width",totalScroll+"%");
  });
});
