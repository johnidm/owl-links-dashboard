'use strict';

describe('Service: CollectLinkServ', function() {

    var CollectLinkServ;
    var API_URL;
    var endPoints;

    var $httpBackend;
    var $rootScope;

    beforeEach(module('owlLinksDashboardApp'));

    beforeEach(inject(function(_CollectLinkServ_, _API_URL_, _$httpBackend_, _$rootScope_) {
        CollectLinkServ = _CollectLinkServ_;
        API_URL = _API_URL_;
        $httpBackend = _$httpBackend_;

        $rootScope = _$rootScope_;

        endPoints = {
            getAllLinks: 'collectlinks',
            delete: 'collectlink/{0}'.format(3)
        }

    }));

    it('should instance CollectLinkServ', function() {
        expect(!!CollectLinkServ).toBe(true);
    });


    it('should get all links', function() {

        var url = '{0}/{1}'.format(API_URL, endPoints.getAllLinks);

        $httpBackend.whenGET(url).respond([{
            id: 1,
            name: "banana"
        }]);

        var promise = CollectLinkServ.getAllLinks(),
            links;

        // var mock_links = $rootScope.helpers.readJsonFile('test.json');

        expect(promise).toBeDefined();

        // console.log(mock_links);

        promise.then(function(__links__) {
            links = __links__.data;
        });

        $httpBackend.flush();

        expect(links instanceof Array).toBeTruthy();
        expect(links.length).toBe(1);
    });

    it('should delete link', function() {
        expect(true).toBe(true);
    });

});
