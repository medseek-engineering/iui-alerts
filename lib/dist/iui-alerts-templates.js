(function(module) {
try {
  module = angular.module('iui.alerts');
} catch (e) {
  module = angular.module('iui.alerts', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/$iui-alerts/alerts/iui-alert-placeholder.html',
    '<div \n' +
    '  ng-if="alertPlaceholder.alerts.alert.message" \n' +
    '  class="alert-wrapper">\n' +
    '  <div \n' +
    '    class="alert alert-{{alertPlaceholder.alerts.alert.type}}" \n' +
    '    ng-class="{\'alert-dismissible\': alertPlaceholder.alerts.alert.canClose}"\n' +
    '    role="alert">\n' +
    '    <button \n' +
    '      ng-if="alertPlaceholder.alerts.alert.canClose"\n' +
    '      type="button" \n' +
    '      class="close" \n' +
    '      aria-label="{{alertPlaceholder.labels.close}}" \n' +
    '      ng-click="alertPlaceholder.closeAlert()">\n' +
    '      <span aria-hidden="true">&times;</span>\n' +
    '    </button>\n' +
    '    <div\n' +
    '      class="alert-message"\n' +
    '      ng-include="alertPlaceholder.alerts.alert.templateUrl"></div>\n' +
    '  </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('iui.alerts');
} catch (e) {
  module = angular.module('iui.alerts', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/$iui-alerts/alerts/iui-default-alert.html',
    '<div ng-bind-html="alertPlaceholder.alerts.alert.message | to_trusted"></div>');
}]);
})();
