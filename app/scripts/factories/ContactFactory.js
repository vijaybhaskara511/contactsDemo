'use strict';

angular.module("contactsApp", []).factory("ContactFactory", function() {

    var STORAGE_ID = 'contacts';

    return{
        getContacts : function (){
            if (typeof localStorage[STORAGE_ID] !== "undefined"
                && localStorage[STORAGE_ID] !== "undefined") {
               return JSON.parse(localStorage.getItem(STORAGE_ID));
            }
        },
        setContacts : function(contact){
            localStorage.setItem(STORAGE_ID,JSON.stringify(contact));
        },
        removeContacts : function(){
            localStorage.removeItem(STORAGE_ID);
        }
    }

});