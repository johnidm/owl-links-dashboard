'use strict'

describe('Service: LinksService', function() {

    var LinksService;
    var API_URL;
    var endPoints;

    var $httpBackend;

    beforeEach(module('owlLinksDashboardApp'));

    beforeEach(inject(function(_LinksService_, _API_URL_, _$httpBackend_) {

        LinksService = _LinksService_;
        API_URL = _API_URL_;

        $httpBackend = _$httpBackend_;

        endPoints = {
            getAllLinks: 'links',
            delete: 'link/{0}'.format(3),
            getById: 'link/{0}'.format(3)
        }

        fixture.setBase('test/spec/fixtures');
    }));

    it('should instance LinksService', function() {
        expect(!!LinksService).toBe(true);
    });

    it('should get all links', function() {

        var url = '{0}/{1}'.format(API_URL, endPoints.getAllLinks);

        var mockLinks = fixture.load('links.json');

        $httpBackend.whenGET(url).respond(mockLinks);

        var promise = LinksService.getAllLinks(),
            links;

        expect(promise).toBeDefined();

        promise.then(function(__links__) {
            links = __links__.data;
        });

        $httpBackend.flush();

        expect(links instanceof Array).toBeTruthy();
        expect(links.length).toBe(4);
        expect(links).toEqual(mockLinks);

    });

    it('should get by id', function() {

    });

});
