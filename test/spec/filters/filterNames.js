'use strict';

describe('filterNames', function() {

    beforeEach(module('contactsApp'));

    describe('filterNames', function() {

        var contactsList = [{id:1,firstName:'vijay',lastName:'reddy',phone:'1234567890'},
                            {id:2,firstName:'anil',lastName:'kumar',phone:'3456789012'},
                            {id:3,firstName:'siva',lastName:'reddy',phone:'7654321890'}
        ];
        it('contacts length should not be null and length should be 3',
            inject(function(filterNamesFilter) {

                expect(filterNamesFilter(contactsList,'')).not.toBeNull();
                expect(filterNamesFilter(contactsList,'').length).toEqual(3);
        }));

        it('contacts array length should return the correct results based on the search string',
            inject(function(filterNamesFilter) {
                expect(filterNamesFilter(contactsList,'v').length).toEqual(1);
                expect(filterNamesFilter(contactsList,'r').length).toEqual(2);
                expect(filterNamesFilter(contactsList,'p').length).toEqual(0);
            }));
    });
});
