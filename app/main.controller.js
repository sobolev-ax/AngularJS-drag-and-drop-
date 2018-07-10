mainApp.controller('mainController', ['$scope', function($scope) {
    $scope.items = model.items;

    $scope.hoverClass = 'hover';
    $scope.unhoverClass = 'unhover';
    $scope.hoverIndex = -1;

    $scope.plus = function plus(item) {
        item.count++;
        if (item.count > 9) item.count = 9;
    }
    $scope.minus = function minus(item) {
        item.count--;
        if (item.count < 0) item.count = 0;
    }

    $scope.mouse = function mouse(e, index) {
        switch (e.type) {
            case 'mouseover':
                $scope.hoverIndex = index;
                break;
            case 'mouseout':
            default:
                $scope.hoverIndex = -1;
                break;
        }
    }

    $scope.add = function add(text, price) {
        if (!text || !price) return
        $scope.items.push({
            purchase: text,
            done: false,
            price: Number(price)
        });

        console.log($scope.price)
        $scope.text = '';
        $scope.price = '';
    }
}])