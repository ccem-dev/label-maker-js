(function() {
    'use strict';

    angular
      .module('otusjs.labelMaker.labelBuilder.labelComponents')
      .component('unattachedLabel', {
          transclude: true,
          templateUrl: 'app/otusjs-label-builder/label-components/unattached-label/unattached-label-template.html',
          controller: Controller,
          bindings: {
            base: '<',
            labelHeader: '<',
            labInfo: '='
          }
      });

      Controller.$inject = [
        '$scope',
        '$element',
        '$compile',
      ];

      function Controller($scope, $element, $compile) {
        var self = this;

        self.baseInfo = angular.copy(self.base);
        self.labelSize = self.baseInfo.printStructure.labelSize.value;

        self.$onInit = function() {
          $compile($element.contents())($scope);
        };

      }
}());
