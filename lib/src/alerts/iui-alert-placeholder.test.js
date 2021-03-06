(function () {
  'use strict';

  describe('iui-alert-placeholder', function () {
    var scope,
      element,
      el,
      mockAlertService,
      placement = {
        alert: {}
      },
      customTemplate =
        '  <span class="alert-custom-alert"'+
        '    ng-bind-html="alertPlaceholder.alerts.alert.message | to_trusted">'+
        '  </span><button>Cancel</button>';
    beforeEach(function () {
      module('templates');
      module('iui.alerts');
      mockAlertService = {
        getCurrent: jasmine.createSpy().and.returnValue(placement),
        clear: jasmine.createSpy(),
        addPlacement: jasmine.createSpy(),
        closeAlert: jasmine.createSpy()
      };
      module(function ($provide) {
        $provide.value('iuiAlertService', mockAlertService);
      });
    });
    beforeEach(inject(function ($compile, $rootScope, $templateCache) {
      $templateCache.put('/templates/custom-alert-template.html', customTemplate);
      scope = $rootScope.$new();
      element = angular.element('<iui-alert-placeholder id="alert_agent99"></iui-alert-placeholder>');
      el = $compile(element)(scope);
      scope.$digest();
    }));
    
    it('should not display text until an alert is set', function () {
      expect(el.text().trim()).toBe('');
    });

    describe('when a type:danger alert is added to the iui-alert-service', function () {
      beforeEach(function () {
        placement.alert = {
          message: 'Pardon me while I get my shoe phone.',
          type: 'danger',
          templateUrl: '/$iui-alerts/alerts/iui-default-alert.html'
        };
        scope.$digest();
      });
      it('should display the alert message', function () {
        expect(el.text().trim()).toBe('Pardon me while I get my shoe phone.');
      });
      it('should have the alert class', function () {
        expect(el.find('.alert').length).toEqual(1);
      });
      it('should have the alert-danger class', function () {
        expect(el.find('.alert-danger').length).toEqual(1);
      });
      describe('and when the alert is removed', function () {
        beforeEach(function () {
          placement.alert = {};
          scope.$digest();
        });
        it('should not display text', function () {
          expect(el.text().trim()).toBe('');
        });
        it('should NOT have the alert class', function () {
          expect(el.find('.alert').length).toEqual(0);
        });
        it('should NOT have the alert-danger class', function () {
          expect(el.find('.alert-danger').length).toEqual(0);
        });
      });
    });
    describe('when a type:success alert is added to the iui-alert-service', function () {
      beforeEach(function () {
        placement.alert = {
          message: 'Ah, it\'s the old... trick.',
          type: 'success',
          canClose: true,
          templateUrl: '/$iui-alerts/alerts/iui-default-alert.html'
        };
        scope.$digest();
      });
      it('should display the alert message', function () {
        var message = el.find('.alert-message').eq(0);
        expect(message.text().trim()).toBe('Ah, it\'s the old... trick.');
      });
      it('should have the alert-success class', function () {
        expect(el.find('.alert-success').length).toEqual(1);
      });
      it('should have a close button', function () {
        expect(el.find('.close').length).toEqual(1);
      });
      describe('and when the alert close button is pressed', function () {
        it('should call the closeAlert method in iui-alert-service', function () {
          el.find('.close').triggerHandler('click');
          expect(mockAlertService.closeAlert).toHaveBeenCalledWith('alert_agent99');
        });
      });
    });
    describe('when a custom template alert is added to the iui-alert-service', function () {
      beforeEach(function () {
        placement.alert = {
          message: 'Ah, it\'s the old... trick.',
          type: 'success',
          templateUrl: '/templates/custom-alert-template.html'
        };
        scope.$digest();
      });
      it('should display the alert message', function () {
        var message = el.find('.alert-custom-alert').eq(0);
        expect(message.text().trim()).toBe('Ah, it\'s the old... trick.');
      });
      it('should have the alert-success class', function () {
        expect(el.find('.alert-success').length).toEqual(1);
      });
      it('should have the alert-custom-alert class', function () {
        expect(el.find('.alert-custom-alert').length).toEqual(1);
      });
      it('should have a Cancel button', function () {
        expect(el.find('button').eq(0).text().trim()).toBe('Cancel');
      });
    });

  });
})();