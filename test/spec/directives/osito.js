'use strict';

describe('Directive: osito', function () {

  // load the directive's module
  beforeEach(module('angularToyApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<osito></osito>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the osito directive');
  }));
});
