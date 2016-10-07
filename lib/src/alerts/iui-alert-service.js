(function () {
  'use strict';

  angular.module('iui.alerts')
  .factory('iuiAlertService', ['$timeout', 'iuiAlertsConfig', function (timeout, iuiAlertsConfig) {
    var placements = {},
      callback = '';

    return {

      getCurrent: function (id) {
        if (!placements[id]) {
           placements[id] = {};
        }
        return placements[id || iuiAlertsConfig.defaultPlacement] || {};
      },

      /* add alert */
      add: function (placement, alertObject) {

        var activeFor = alertObject.activeFor || 0;
        
        placement = placement || iuiAlertsConfig.defaultPlacement;
        var currentPlacement = placements[placement];
        if(!currentPlacement){
          currentPlacement = placements[placement] = {};
        }

        // if the message is an error, it does not need a timeout
        if (alertObject.type === 'danger') {
          activeFor = 0;
        }

        currentPlacement.callback = alertObject.callback;

        var defaults = {
          templateUrl: iuiAlertsConfig.defaultAlertTemplate
        };

        var overrides = {
          activeFor: activeFor,
          placement: placement
        };

        currentPlacement.alert = _.extend({}, defaults, alertObject, overrides);

        if (currentPlacement.promise) {
          timeout.cancel(currentPlacement.promise);
        }

        if (activeFor === 0) {
          return;
        }

        currentPlacement.promise = timeout(function () {
          currentPlacement.alert = {};
          if (currentPlacement.callback) {
            currentPlacement.callback();
          }
        }, (activeFor !== undefined) ? activeFor : iuiAlertsConfig.defaultTimeOut);

      },

      /* close alert */
      closeAlert: function (id) {
        var placement = this.getCurrent(id);
        placement.alert = {};
        timeout.cancel(placement.promise);
        if (placement.callback){
          placement.callback();
        }
      },

      clearAll: function () {
        _.each(placements, function(placement) {
          placement.alert = {};
          timeout.cancel(placement.promise);
        });
      },

      /* clear alert */
      clear: function (id) {
        if (id) {
          var current = this.getCurrent(id);
          if(!current){
            return;
          }
          current.alert = {};
          timeout.cancel(current.promise);
        } else {
          this.clearAll();
        }
        
      }

    };

  }]);

})();