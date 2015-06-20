'use strict'

describe('Service: NewslettersService', function() {

    var NewslettersService;
    var API_URL;

    var endPoints;

    var $httpBackend;



    beforeEach(module('owlLinksDashboardApp'));


    beforeEach(inject(function(_NewslettersService_, _API_URL_, _$httpBackend_) {
        NewslettersService = _NewslettersService_;
        API_URL = _API_URL_;

        $httpBackend = _$httpBackend_;

        endPoints = {
            getAll: 'newsletters',
            delete: 'newsletter/{0}'.format(3)
        }

        fixture.setBase('test/spec/fixtures');

    }));


    it('should istance NewslettersService', function() {
        expect(!!NewslettersService).toBe(true);
    });

    it('should get all newsletters', function() {

        var url = '{0}/{1}'.format(API_URL, endPoints.getAll);
        var mockNewsletters = fixture.load('newsletters.json');


        $httpBackend.whenGET(url).respond(mockNewsletters);

        var promise = NewslettersService.getAll(),
            newsletters;

        expect(promise).toBeDefined();

        promise.then(function(__newsletters__) {
            newsletters = __newsletters__.data;
        });

        $httpBackend.flush();

        expect(newsletters instanceof Array).toBeTruthy();
        expect(newsletters.length).toBe(4);
        expect(newsletters).toEqual(mockNewsletters);

        var collectlink = newsletters[3];
        expect(collectlink.id).toBe(214);
        expect(collectlink.name).toBe('Trajano');
        expect(collectlink.email).toBe('trajano@gmail.com');
        expect(collectlink.subscribe).toBe('N');
        expect(collectlink.signedup).toBe('2015-03-26 00:27:28.629');

    });


    it('should delete newsletter', function() {


        var mockNewsletters = fixture.load('newsletters.json');
        var mockNewsletter = mockNewsletters[0];

        var countNewsletters = mockNewsletters.length;

        var url = '{0}/{1}/{2}'.format(API_URL, endPoints.delete, mockNewsletter.id);

        $httpBackend.whenGET(url).respond(200);

        var promise = NewslettersService.delete(mockNewsletter.id);

        promise.then(function() {
            countNewsletters--;
            // console.log('OK');
        }).catch(function(error) {
            // console.log(error);
        });

        expect(promise).toBeDefined();

        $httpBackend.flush;

        // expect(countNewsletters).toEqual(3);

    });

});
