(function () {
  'use strict';

  angular.module('iui.alerts')
    .value('iuiAlertLabels', {
      close: 'Close'
    })
    .constant('iuiAlertsConfig', {
      defaultAlertTemplate: '/$iui-alerts/alerts/iui-default-alert.html',
      defaultTimeOut: 20000,
      defaultPlacement: 'alert_appTop'
    });

})();