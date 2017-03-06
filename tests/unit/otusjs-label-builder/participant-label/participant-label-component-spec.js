describe('project label participant component', function() {
    var Mock = {};
    var scope,
        compiledComponent,
        $compile,
        ctrl,
        $componentController;

    var TEMPLATE = '';

    var baseInfo = {
      recruitment_number: '1073915',
      participant_name: 'Susana',
      gender: 'F',
      birthday: '06/11/1961',
      cq_group: 'Nenhum',
      tubes: [
        {
          code: '261500002',
          type: 'Urina'
        }
      ]
    };

    beforeEach(module('otusjs.labelMaker.labelBuilder.labelComponents'));

    beforeEach(inject(function(_$componentController_, _$injector_, _$compile_) {

        $componentController = _$componentController_;
        $compile = _$compile_;
        var Bindings = {
          $scope: scope
        };
        $injector = _$injector_;
        var Injections = {

        };

        $httpBackend = _$injector_.get('$httpBackend');
        $httpBackend.when('GET', 'app/otusjs-label-builder/label-components/participant-label/participant-label-template.html').respond(TEMPLATE);

        ctrl = $componentController('participantLabel', Injections, Bindings);
    }));

    describe('that inicialization', function() {

      xit('should return correct recruitment_number', function() {
          //retorna corretamenta o numero de recrutamento.
      });

      xit('should return quality control number at participant', function() {

      });

    });

});