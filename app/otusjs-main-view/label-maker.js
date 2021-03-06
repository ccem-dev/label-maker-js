(function() {
  'use strict';

  angular
    .module('otusjs.labelMaker.setupView')
    .component('labelMaker', {
      templateUrl: 'app/otusjs-main-view/main-view-template.html',
      controller: Controller,
      bindings: {
        labelData: '<',
        showKitLabel: '<',
        showParticipantLabel: '<',
        showIdentificationLabels: '<',
        buttonName: '<'
      }
    });

  Controller.$inject = [
    '$scope',
    '$rootScope',
    '$compile',
    '$element',
    'otusjs.labelMaker.labelBuilder.LabelService'
  ];

  function Controller($scope, $rootScope, $compile) {
    var self = this;
    var LABEL_PAGE = '<label-page/>';

    self.generateLabelPage = generateLabelPage;

    $scope.$on("Data_Ready", function(event) {
      self.ready = true;
    });

    $scope.$on("Data_Error", function(event) {
      self.dataError = true;
    });

    function generateLabelPage() {
      var scope = $rootScope.$new();
      scope.labelData = self.labelData
      scope.showKitLabel = self.showKitLabel
      scope.showParticipantLabel = self.showParticipantLabel
      scope.showIdentificationLabels = self.showIdentificationLabels
      var labelPage = $compile(LABEL_PAGE)(scope);
    }

  }
}());
