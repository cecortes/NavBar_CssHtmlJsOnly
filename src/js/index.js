"use strict";

/* jQuery on Load*/
$(function () {
  /* DOM Elements */
  var menuAction = $("#menu-action");
  var navBar = $("#nav");

  /* Events */
  menuAction.on("click", function () {
    // Check if the menu is active
    if (menuAction.hasClass("menu__action--active")) {
      // Remove active class
      menuAction.removeClass("menu__action--active");
      // Hide the panel
      navBar.removeClass("panel--active");
    } else {
      // Add active class to menu
      menuAction.addClass("menu__action--active");
      // Add panel active class to navbar
      navBar.addClass("panel--active");
    }
  });

  $(window).on("resize", function () {
    // Check if the window is resized to desktop
    if ($(window).width() > 768) {
      // Remove active class
      menuAction.removeClass("menu__action--active");
      // Hide the panel
      navBar.removeClass("panel--active");
    }
  });
});
