var app = angular.module('styleGuideApp', ['iui.alerts']);
app.root = '/';

app.controller('SGMainCtrl', ['$scope', '$location', '$anchorScroll', '$window', function(scope, $location, $anchorScroll, $window) {
  
  scope.profile = {
    gender: 2,
    image: '/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMtaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkU5NEQ4ODMzN0E0MTFFNUE4MkE5MjE4MTg0MDI4RTAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkU5NEQ4ODQzN0E0MTFFNUE4MkE5MjE4MTg0MDI4RTAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGRTk0RDg4MTM3QTQxMUU1QTgyQTkyMTgxODQwMjhFMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGRTk0RDg4MjM3QTQxMUU1QTgyQTkyMTgxODQwMjhFMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAYEBAQFBAYFBQYJBgUGCQsI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'
  };

  // Fixes issue where anchor links were being rerouted
  scope.scrollTo = function(id) {
    $location.hash(id);
    $anchorScroll();
  }

  // dynamic resizing of wrapper
  var w = angular.element($window);
  var header = $('.sg-header');
  var pageWrapper = $('.sg-wrapper');
  var theWindow = {};
  var pageSizes = {
    pageWrapperMargin: 10 // page-wrapper top margin
  };

  scope.monitorWindowHeight = function() {
    theWindow = {
      width: w.width(),
      height: w.height()
    };
    return theWindow;
  };

  var resizePageWrapper = function () {
    pageSizes.header = header.outerHeight();

    var newHeight =  pageSizes.windowHeight - pageSizes.header  - pageSizes.pageWrapperMargin;
    pageWrapper.css("min-height", newHeight);
  };

  /// Single page app problems...you gotta continually monitor what happens in pages
  scope.$watch(scope.monitorWindowHeight, function(newWindowSize) {
    pageSizes.windowHeight = newWindowSize.height;
    resizePageWrapper();
  }, true);

  /// Watches when the page resizes;
  w.on('resize', function(newWindowSize) {
    pageSizes.windowHeight = w.height();
    resizePageWrapper();
  });
}]);

// Modal example controller.
app.controller('SGModalDemoCtrl', ['$scope', '$modal', function(scope, $modal) {
  scope.openDialog = function() {
    var modalInstanceSG = $modal.open({
      templateUrl: 'sg-modal-example-template.html'
    });
    modalInstanceSG.result.then(function() {
      // Modal instance promise
    }, function () {
      // Modal $dismiss() means the deletion has been canceled
    });
  };
}]);

// Tabs example controller
app.controller('SGTabsDemoCtrl', ['$scope', function(scope) {
  scope.tabs = [
    {
      title: 'Pending',
      content: 'All the Pending tab content.'
    },
    {
      title: 'Completed',
      content: 'All the Completed tab content.'
    },
    {
      title: 'Deleted',
      content: 'All the Deleted tab content.'
    }
  ];
}]);
