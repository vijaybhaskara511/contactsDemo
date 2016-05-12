'use strict';

describe('contactsCtrl', function() {

    beforeEach(module('contactsApp'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));

    describe('contactsCtrl', function() {

        var contact1 = {id:1,firstName:'vijay',lastName:'reddy',phone:'1234567890'};
        var contact2 = {id:2,firstName:'anil',lastName:'kumar',phone:'8765432109'};
        it('Should be able to add new contact', function() {
            var $scope = {};
            var controller = $controller('contactsCtrl', { $scope: $scope });

            var newContact = {id:2,firstName:'vijay1',lastName:'reddy',phone:'1234567890'};
            $scope.addNewContact(contact1);
            expect($scope.contacts.length).not.toBeUndefined();
            expect($scope.contacts.length).toEqual(1);
            expect($scope.contacts[0]).toEqual(contact1);
            expect($scope.contacts[0]).not.toEqual(newContact);

            $scope.addNewContact(contact2);
            expect($scope.contacts.length).not.toBeUndefined();
            expect($scope.contacts.length).toEqual(2);
            expect($scope.contacts[1]).toEqual(contact2);
        });

        it('Should be able to delete the contact', function() {
            var $scope = {};
            var controller = $controller('contactsCtrl', { $scope: $scope });
            expect($scope.contacts.length).toEqual(2);
            $scope.deleteContact(contact2);
            expect($scope.contacts.length).not.toBeUndefined();
            expect($scope.contacts.length).toEqual(1);
            expect($scope.contacts[0]).toEqual(contact1);
        });

    });
});
