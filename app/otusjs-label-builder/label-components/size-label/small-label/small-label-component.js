(function() {
    'use strict';

    angular
      .module('otusjs.labelMaker.labelBuilder.labelComponents')
      .component('smallLabel', {
          transclude: true,
          templateUrl: 'app/otusjs-label-builder/label-components/size-label/small-label/small-label-template.html',
          controller: Controller,
          bindings: {
            componentLabel: "<",
            base: '<',
            biomaterial: '<'
          }
      });

      Controller.$inject = [
        '$scope',
        '$element',
        '$compile',
        'BARCODE_SMALL_SETTINGS'
      ];

      function Controller($scope, $element, $compile, BARCODE_SETTINGS) {
        var self = this;

        self.renderBarcode = renderBarcode;
        self.baseInfo = angular.copy(self.base);

        self.$onInit = function() {
          $compile($element.contents())($scope);
          renderBarcode();
        };

        function renderBarcode() {
          const barcodeContainer = $element.find(`svg`);
          if(self.componentLabel == 'participant') {
            JsBarcode(barcodeContainer[0], self.baseInfo.recruitment_number, BARCODE_DEFAULT_SETTINGS);
          }else if(self.componentLabel == 'biomaterial') {
            JsBarcode(barcodeContainer[1], self.biomaterial.code, BARCODE_DEFAULT_SETTINGS)
          }else if(self.componentLabel == 'unattached') {
            JsBarcode(barcodeContainer[2], self.biomaterial.code, BARCODE_DEFAULT_SETTINGS)
          }
        }
      }
}());
