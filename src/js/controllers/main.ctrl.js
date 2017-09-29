'use strict';

idiApp.controller('MainCtrl', function ($scope, SharedService) {
    $scope.notifyList = [];
    $scope.tasksList = [];

    SharedService.getNotify().then(function (res) {
        $scope.notifyList = res.data;
        angular.forEach($scope.notifyList, function (item) {
            item.date_string = moment(item.date).fromNow();
        })
    }).catch(function (err) {
        console.log(err);
    });

    SharedService.getTasks().then(function (res) {
        $scope.tasksList = res.data;
    }).catch(function (err) {
        console.log(err);
    });
});