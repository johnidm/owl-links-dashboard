'use strict';

describe('Service: ContactsService', function() {

    var ContactsService;
    var API_URL;
    var endPoints;

    var $httpBackend;

    beforeEach(module('owlLinksDashboardApp'));

    beforeEach(inject(function(_ContactsService_, _API_URL_, _$httpBackend_) {

        ContactsService = _ContactsService_;
        API_URL = _API_URL_;
        $httpBackend = _$httpBackend_;

        endPoints = {
            getAll: 'contacts',
            delete: 'contact/{0}'.format(3),
            getById: 'contact/{0}'.format(1)
        }

        fixture.setBase('test/spec/fixtures');
    }));

    it('should instance ContactsService', function() {
        expect(!!ContactsService).toBe(true);
    });

    it('should get all contacts', function() {

        var url = '{0}/{1}'.format(API_URL, endPoints.getAll);
        var mockContacts = fixture.load('contacts.json');

        $httpBackend.whenGET(url).respond(mockContacts);

        var promise = ContactsService.getAll(),
            collectlinks;

        expect(promise).toBeDefined();

        promise.then(function(__collectlinks__) {
            collectlinks = __collectlinks__.data;
        });

        $httpBackend.flush();

        expect(collectlinks instanceof Array).toBeTruthy();
        expect(collectlinks.length).toBe(2);
        expect(collectlinks).toEqual(mockContacts);

        var collectlink = collectlinks[0];
        expect(collectlink.id).toBe(21);
        expect(collectlink.email).toBe('fulano@gmail.com');
        expect(collectlink.firstname).toBe('Fulano');
        expect(collectlink.lastname).toBe('De Tal');

    });

    it('should delete contact', function() {

        var mockContacts = fixture.load('links.json');
        var mockContact = mockContacts[0];

        var countContats = mockContacts.length;

        var url = '{0}/{1}/{2}'.format(API_URL, endPoints.delete, mockContact.id);

        $httpBackend.whenGET(url).respond(200);

        var promise = ContactsService.delete(mockContact.id);

        promise.then(function() {
            countContats--;
        });

        expect(promise).toBeDefined();

        $httpBackend.flush;

        expect(countContats).toEqual(4);

    });

    it('should contact by id', function() {

            var mockContacts = fixture.load('links.json');
            var mockContact = mockContacts[0];

            var countContats = mockContacts.length;

            var url = '{0}/{1}/{2}'.format(API_URL, endPoints.getById, mockContact.id);

            $httpBackend.whenGET(url).respond(
                mockContact);

            var promise = ContactsService.getById(mockContact.id),
                contact;

            expect(promise).toBeDefined();

            promise.then(function(__contact__) {
                console.log(__contact__);
                contact = __contact__.data;
            });

            $httpBackend.flush;

            // expect(contact.id).toEqual(22);
            // expect(contact.firstname).toEqual('Fulano1');
            // expect(contact.lastname).toEqual('De Tal1');
            // expect(contact.email).toEqual('fulano@gmail.com1');

    });

});
