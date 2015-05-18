app.controller('pieceController', ['$scope', '$routeParams', function($scope, $routeParams) {
    var piece = portfolio.filter(function(p) {
        return p.id == $routeParams.pieceId;
    });

    $scope.piece = piece[0];
}]);