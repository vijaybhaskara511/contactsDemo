'use strict';

describe('ContactFactory', function() {

    beforeEach(module('contactsApp'));

    describe('ContactFactory', function() {

        var contactsList = [];
        var contact = {};
        it('New contact should be added to the local storage and should be able to retrieve from the same',
            inject(function(ContactFactory) {

                contact = {id:1,firstName:'vijay',lastName:'reddy',phone:'1234567890'};
                ContactFactory.setContacts(contact);
                expect(ContactFactory.getContacts()).not.toBeUndefined();
                contactsList.push(ContactFactory.getContacts());
                expect(contactsList.length).toEqual(1);

                contact = {id:2,firstName:'anil',lastName:'kumar',phone:'9876503421'};
                ContactFactory.setContacts(contact);
                contactsList.push(ContactFactory.getContacts());
                expect(contactsList.length).toEqual(2);
        }));

        it('Should be able to remove all contacts from local storage',
            inject(function(ContactFactory) {

                expect(contactsList.length).toEqual(2);
                expect(ContactFactory.getContacts()).toBeDefined();
                ContactFactory.removeContacts();
                expect(ContactFactory.getContacts()).toBeUndefined();

            }));
    });
});
