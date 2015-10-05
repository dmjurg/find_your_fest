(function(){
  var app = angular.module('guide', []);

  app.controller('GuideController', function() {
    this.events = festivals;
  });

  app.controller('PanelController', function() {
    this.tab = null;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };

    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  });

  app.controller('MessageController', function(){
    this.message = {};

    this.addMessage = function(event) {
      event.messages.push(this.message);
      this.message = {};
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
      image: 'assets/images/atgfcflyer.jpg'
    }
  ];
})();

// message cats: general, travel, lineup
