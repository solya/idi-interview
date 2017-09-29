'use strict';

idiApp.directive('notificationList', function () {
    return {
        templateUrl: '/js/directives/notification/notification.directives.html',
        scope: {
            items: '=',
            limit: '='
        },
        controller: function ($scope) {
            $scope.limitNotify = $scope.limit || 3;
            $scope.viewAllNotify = function () {
                $scope.limitNotify = 10;
            }
        }
    }
});
