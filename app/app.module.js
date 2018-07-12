'use strict';

var mainApp = angular.module('mainApp', []);

mainApp.filter('cats', function() {
    return (cats) => cats.map((cat) => ({
            name: String(cat.name).toLowerCase(),
            sex: String(cat.sex) === 'male' ? '♀' : '♂'
        }))
    
})


// {
//     sex = String(cat['sex']) === 'male' ? '♀' : '♂',
//     name = cat.name
// }