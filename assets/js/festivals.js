(function() {
  var app = angular.module('festival-directives', []);

  app.directive("festivalInfo", function() {
    return {
      restrict: 'E',
      templateUrl: 'festival-info.html'
    };
  });

  app.directive("festivalPanels", function() {
    return {
      restrict: 'E',
      templateUrl: 'festival-panels.html',
      controller: function() {
        this.tab = null;

        this.selectTab = function(setTab) {
          this.tab = setTab;
        };

        this.isSelected = function(checkTab) {
          return this.tab === checkTab;
        };
      },
      controllerAs: 'panel'
    };
  });

})();
