(function(app){
  app.AppComponent = 
    ng.core.Component({
      selector: 'my-app',
      template: '<h1>Angular 2 Quickstart</h1>'
    })
    .Class({
      constructor: function(){}
    });
})(window.app || (window.app = {}));
