app.controller('paintingsController', ['$scope', '$http', function ($scope, $http) {
    $scope.type = type;
    $scope.series = series;
    $scope.itemsPerPage = 9;
    $scope.filter = {};

    $http.jsonp('http://www.jonathanwhitney.net/kristinwhitney/api/?json=get_all_posts&callback=JSON_CALLBACK')
        .success(function(data) {
            // $scope.test = data['posts'];
            console.log(data.posts);
        })
        .error(function(data) {
            if (typeof console == "object") {
                console.log('Error: ' + data);
            }
        });

    $scope.pieces = portfolio;

    $scope.filterByProperties = function (piece) {
        var matches = true;

        for (var prop in $scope.filter) {
            if (noSubFilter($scope.filter[prop])) continue;

            if (!$scope.filter[prop][piece[prop]]) {
                if (!angular.isArray(piece[prop])) {
                    matches = false;
                    break;
                } else {
                    for (var key in piece[prop]) {
                        if ($scope.filter[prop][piece[prop][key]]) {
                            matches = true;
                            break;
                        } else {
                            matches = false;
                        }
                    }
                }
            }
        }        

        return matches;
    };

    $scope.loadMore = function() {
        $scope.itemsPerPage += 9;
    };

    $scope.nextPageDisabledClass = function() {
        if ($scope.filtered && $scope.pieces) {
            return $scope.filtered.length < $scope.itemsPerPage ? 'ng-hide' : '';
        }
    };
    
    function noSubFilter(subFilterObj) {
        for (var key in subFilterObj) {
            if (subFilterObj[key]) return false;
        }
        return true;
    };

    function parsePieces(data) {
        var pieces = [];

        for (var p in data) {
            var piece = {};

            piece['id'] = p.id;
            piece
        }
    }
}]);