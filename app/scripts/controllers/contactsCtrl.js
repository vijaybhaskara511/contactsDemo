'use strict';

angular.module('contactsApp').controller("contactsCtrl",['$scope','ContactFactory',
    function($scope,ContactFactory){

    $scope.contacts = ContactFactory.getContacts();/* To get the contacts from local storage */
    $scope.search = "";
    var newContact = {};
    $scope.isNew = false;
    $scope.isEdit = 0;
    $scope.isNewContact = function(){
        $scope.isNew = true;
    };
    /* Add new contact */
    $scope.addNewContact = function(contact){
        if(!$scope.contacts){
            $scope.contacts = [];
        }
        newContact =  {id:$scope.contacts.length+1,firstName:contact.firstName,lastName:contact.lastName,phone:contact.phone};
        $scope.contacts.push(newContact);
        ContactFactory.setContacts($scope.contacts);
        $scope.isNew = false;
    };

    /* Edit the contact */
    $scope.editContact = function(contact){

        $scope.isEdit = contact.id;
    };

    /* This is to save the edits */
    $scope.saveEdits = function(){
        ContactFactory.setContacts($scope.contacts);
        $scope.isEdit = 0;

    };

    /* Discard the Edited changes */
    $scope.cancelChanges = function(operation){
        if(operation === 'edit') {
            $scope.isEdit = 0;
            $scope.contacts = ContactFactory.getContacts();
        }else if(operation === 'add') {
            $scope.isNew = false;
        }
    };

    /*This is to remove the contact from local storage */
    $scope.deleteContact = function(contact){
        var index = $scope.contacts.indexOf(contact);
        $scope.contacts.splice(index, 1);
        ContactFactory.setContacts($scope.contacts);
    };

}]);

