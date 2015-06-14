'use strict'

describe('Modele: owlLinksDashboardApp', function() {

    var APP_VERSION;
    var API_URL;


    beforeEach(module('owlLinksDashboardApp'));


    beforeEach(inject(function(_APP_VERSION_, _API_URL_) {
        APP_VERSION = _APP_VERSION_;
        API_URL = _API_URL_;

    }));

    it('should return app version', function() {
        expect(APP_VERSION).toBe('0.9.1');
    });

    it('should return api url links', function() {
        expect(API_URL).toBe('http://owl-links-api.herokuapp.com');
    });


});
