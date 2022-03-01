/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
  window.MOJFrontend.initAll()
})

if (typeof MOJFrontend.MultiFileUpload !== "undefined") {
  new MOJFrontend.MultiFileUpload({
    container: $(".moj-multi-file-upload"),
    uploadUrl: "/ajax-upload",
    deleteUrl: "/ajax-delete",
  });
}
