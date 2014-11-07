'use strict';

describe('Directive: oscuro', function () {

  // load the directive's module
  beforeEach(module('angularToyApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<oscuro></oscuro>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the oscuro directive');
  }));
});
