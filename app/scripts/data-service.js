'use strict';

angular.module('myApp')
.service('dataService', function($q, $http) {
    var data = {
        date: ["Mon 01", "Tue 02", "Wed 03", "Thu 04", "Fri 05", "Sat 06", "Sun 07", "Mon 08", "Tue 09", "Wed 10", "Thu 11", "Fri 12", "Sat 13", "Sun 14"],
        metric: [1174.11, 1402.36, 1475.71, 1190.43, 1282.68, 1560.03, 1796.50, 1690.77, 2015.98, 1647.89, 1859.85, 1415.84, 1524.84, 1181.13]
    };

    // ...
});