(function(module) {
try {
  module = angular.module('iui.alertTemplates');
} catch (e) {
  module = angular.module('iui.alertTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/$iui-alerts/alerts/iui-alert-placeholder.html',
    '<div \n' +
    '  ng-if="placementAlerts.alert.message" \n' +
    '  class="alert-wrapper">\n' +
    '    <div \n' +
    '      class="alert alert-{{placementAlerts.alert.type}}" \n' +
    '      role="alert">\n' +
    '	    <span \n' +
    '	    	class="alert-message" \n' +
    '	    	ng-bind-html="placementAlerts.alert.message | to_trusted">\n' +
    '	    </span>\n' +
    '	    <button \n' +
    '	    	ng-if="placementAlerts.alert.canClose"\n' +
    '	    	type="button" \n' +
    '	    	class="close" \n' +
    '	    	aria-label="Close" \n' +
    '	    	ng-click="closeAlert()">\n' +
    '	    	<span aria-hidden="true">&times;</span>\n' +
    '	    </button>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();
