'use strict';

describe('Controller: CollectlinkCtrl', function () {

  // load the controller's module
  beforeEach(module('owlLinksDashboardApp'));

  var CollectlinkCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CollectlinkCtrl = $controller('CollectlinkCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
