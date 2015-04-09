'use strict';

describe('Service: CollectLinkServ', function () {

  // load the service's module
  beforeEach(module('owlLinksDashboardApp'));

  // instantiate service
  var CollectLinkServ;
  beforeEach(inject(function (_CollectLinkServ_) {
    CollectLinkServ = _CollectLinkServ_;
  }));

  it('should do something', function () {
    expect(!!CollectLinkServ).toBe(true);
  });

});
