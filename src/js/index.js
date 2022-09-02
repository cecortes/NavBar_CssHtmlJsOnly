"use strict";

/* jQuery on Load*/
$(function () {
  /* DOM Elements */
  var menuAction = $("#menu-action");

  /* Events */
  menuAction.on("click", function () {
    // Check if the menu is active
    if (menuAction.hasClass("menu__action--active")) {
      // Remove active class
      menuAction.removeClass("menu__action--active");
    } else {
      // Add active class
      menuAction.addClass("menu__action--active");
    }
  });
});
