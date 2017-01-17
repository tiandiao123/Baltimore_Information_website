angular.module('sortApp', [])

.controller('mainController', function($scope) {
  $scope.sortType     = 'rank'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.searchCities   = '';     // set the default search/filter term
  
  // create the list of sushi rolls 
  $scope.sushi = [
    { rank: 1, city: 'New York', gdp: 1558518 },
    { rank: 2, city: 'Los Angeles', gdp: 866745},
    { rank: 3, city: 'Chicago', gdp: 610552},
    { rank: 4, city: 'Houstan', gdp: 525397 },
    { rank: 5, city: 'Dallas', gdp: 504858 },
    { rank: 6, city: 'WashingTon DC', gdp: 471584 },
    { rank: 7, city: 'San Francisco', gdp: 411969 },
    { rank: 8, city: 'Philadelphia', gdp: 391118 },
    { rank: 9, city: 'Boston', gdp: 382459 },
    { rank: 10, city: 'Atlanta', gdp: 324881 },
    { rank: 11, city: 'Seattle', gdp: 300827 },
    { rank: 12, city: 'Miami', gdp: 299261 },
    { rank: 13, city: 'Detroit', gdp: 236500 },
    { rank: 14, city: 'Minneapolis', gdp: 235733 },
    { rank: 15, city: 'Phoenix', gdp: 215214 },
    { rank: 16, city: 'San Jose', gdp: 213819 }, 
    { rank: 17, city: 'San Diego', gdp: 206817 },
    { rank: 18, city: 'Denver', gdp: 187111 },
    { rank: 19, city: 'Baltimore', gdp: 173516 },
    { rank: 20, city: 'Portland', gdp: 159328 },
    { rank: 21, city: 'St. Louis', gdp: 149951 },
    { rank: 22, city: 'Charlotte-Gastonia-Rock Hill', gdp: 143628 },
    { rank: 23, city: 'Pittsburgh', gdp: 135662 },
    { rank: 24, city: 'RiverSide', gdp: 133983 }
  ];
  
});