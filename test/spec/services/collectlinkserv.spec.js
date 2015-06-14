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

        fixture.setBase('test/spec/fixtures');
    }));

    it('should instance CollectLinkServ', function() {
        expect(!!CollectLinkServ).toBe(true);
    });

    it('should get all links', function() {

        var url = '{0}/{1}'.format(API_URL, endPoints.getAllLinks);
        var mockLinks = fixture.load('links.json');

        $httpBackend.whenGET(url).respond(mockLinks);

        var promise = CollectLinkServ.getAllLinks(),
            links;

        expect(promise).toBeDefined();

        promise.then(function(__links__) {
            links = __links__.data;
        });

        $httpBackend.flush();

        expect(links instanceof Array).toBeTruthy();
        expect(links.length).toBe(4);
        expect(links).toEqual(mockLinks);

        var link = links[0];
        expect(link.id).toBe('54fbb3f2332a350003000001');
        expect(link.url).toBe('http://fritzing.org');
    });

    it('should delete link', function() {

        var mockLinks = fixture.load('links.json');
        var mockLink = mockLinks[0];

        var countLinks = mockLinks.length;

        var url = '{0}/{1}/{2}'.format(API_URL, endPoints.delete, mockLink.id);

        $httpBackend.whenGET(url).respond(200);

        var promise = CollectLinkServ.delete(mockLink.id);

        promise.then(function() {
            countLinks--;
        });

        expect(promise).toBeDefined();

        $httpBackend.flush;

        expect(countLinks).toEqual(4);

    });

});
