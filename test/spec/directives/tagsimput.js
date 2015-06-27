'use strict';

describe('Directive: tagsimput', function () {

  // load the directive's module
  beforeEach(module('owlLinksDashboardApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<tagsimput></tagsimput>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the tagsimput directive');
  }));
});
