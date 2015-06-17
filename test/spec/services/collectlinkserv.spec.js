'use strict';

describe('Service: CollectLinkService', function() {

    var CollectLinksService;
    var API_URL;
    var endPoints;

    var $httpBackend;

    beforeEach(module('owlLinksDashboardApp'));

    beforeEach(inject(function(_CollectLinksService_, _API_URL_, _$httpBackend_, _$rootScope_) {

        CollectLinksService = _CollectLinksService_;
        API_URL = _API_URL_;
        $httpBackend = _$httpBackend_;

        endPoints = {
            getAllLinks: 'collectlinks',
            delete: 'collectlink/{0}'.format(3)
        }

        fixture.setBase('test/spec/fixtures');
    }));

    it('should instance CollectLinkService', function() {
        expect(!!CollectLinksService).toBe(true);
    });

    it('should get all collectlinks', function() {

        var url = '{0}/{1}'.format(API_URL, endPoints.getAllLinks);
        var mockCollectLinks = fixture.load('collectlinks.json');

        $httpBackend.whenGET(url).respond(mockCollectLinks);

        var promise = CollectLinksService.getAllLinks(),
            collectlinks;

        expect(promise).toBeDefined();

        promise.then(function(__collectlinks__) {
            collectlinks = __collectlinks__.data;
        });

        $httpBackend.flush();

        expect(collectlinks instanceof Array).toBeTruthy();
        expect(collectlinks.length).toBe(3);
        expect(collectlinks).toEqual(mockCollectLinks);

        var collectlink = collectlinks[0];
        expect(collectlink.id).toBe(214);
        expect(collectlink.link).toBe('http://www.bootsnipp.com');
    });

    it('should delete collectlink', function() {

        var mockCollectLinks = fixture.load('links.json');
        var mockCollectLink = mockCollectLinks[0];

        var countCollectLinks = mockCollectLinks.length;

        var url = '{0}/{1}/{2}'.format(API_URL, endPoints.delete, mockCollectLink.id);

        $httpBackend.whenGET(url).respond(200);

        var promise = CollectLinksService.delete(mockCollectLink.id);

        promise.then(function() {
            countCollectLinks--;
        });

        expect(promise).toBeDefined();

        $httpBackend.flush;

        expect(countCollectLinks).toEqual(4);

    });

});
