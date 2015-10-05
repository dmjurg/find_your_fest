(function(){
  var app = angular.module('guide', []);

  app.controller('GuideController', function() {
    this.events = festivals;
  });

  app.controller('PanelController', function() {

  });

  app.controller('MessageController', function() {
    this.message = {};

    this.addMessage = function(event) {
      this.message.createdOn = Date.now();
      event.messages.push(this.message);
      this.message = {};
    };

  });

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

  var festivals = [
      {
      name: 'Landmark',
      price: 200,
      startDate: "9/26",
      endDate: "9/27",
      location: 'Washington, DC',
      canPurchase: true,
      soldOut: false,
      image: 'assets/images/landmark.jpg',
      details: 'DCs first major music festival, to benefit preservation of the National Mall',
      bands: ["The Strokes", "Drake", "Alt-J", "and many more"],
      messages: [
        {
          body: "I'm so excited to play!",
          category: "general",
          author: "julianc@test.com"
        },
        {
          body: "Definitely seeing Drake",
          category: "lineup",
          author: "meekm@test.com"
        }
      ]
    },
    {
      name: 'All Things Go',
      price: 70,
      startDate: "10/10",
      location: 'Washington, DC',
      canPurchase: true,
      soldOut: false,
      image: 'assets/images/atgfcflyer.jpg',
      details: 'A sweet, day-long festival in the heart of DC!',
      bands: ["Kygo, Penguin Prison"],
      messages: [
        {
          body: "ATG is the best",
          category: "general",
          author: "adrian@test.com"
        }
      ]
    }
  ];

})();

// message cats: general, travel, lineup
