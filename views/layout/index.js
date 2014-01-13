define(function(require, exports, module) {
    var app = angular.module('app', []);

    app.controller('appCtrl', function ($scope, $http, $timeout) {
        /**
         * 发起搜索
         */
        var api = function (key) {
            $http.get('/api', {params: {tag: key} }).success(function(data){
                $scope.items = data.subjects;
            });
        }
        // 输入时自动搜索
        $scope.search = function () {
            api($scope.key);
        }

        // 切换显示方式
        $scope.mode = 'pic';
        $scope.modeChange = function(){
            $scope.mode == 'word' ? $scope.mode = 'pic' : $scope.mode = 'word';
        }
    });


    angular.bootstrap(document, ['app']);
});