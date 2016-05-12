'use strict';

angular.module('contactsApp').filter('filterNames', function ($filter) {
    function strStartsWith(str, prefix) {
        return (str+"").toUpperCase().indexOf(prefix.toUpperCase()) === 0;
    }
    return function(list, search) {
        if (!search) return list;
        var result = [];

        angular.forEach(list, function(item) {
            if(strStartsWith(item.firstName, search)){
                result.push(item);
            }
            if(strStartsWith(item.lastName, search)){
                result.push(item);
            }
        });

        return result;
    };
});
