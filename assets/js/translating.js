function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: "en",
      includedLanguages: "am",
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      autoDisplay: false,
      multilanguagePage: true,
    },
    "google_translate_element"
  );
}

// Load the Google Translate API
(function () {
  var gt = document.createElement("script");
  gt.type = "text/javascript";
  gt.src =
    "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(gt, s);
})();
