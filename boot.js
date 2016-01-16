(function(app){
  document.addEventListener('DOMConentLoaded', function(){
    ng.platform.browser.bootstrap(app.AppComponent);
  });
})(window.app || (window.app = {}));
