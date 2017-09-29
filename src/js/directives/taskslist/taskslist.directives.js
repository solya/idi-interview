'use strict';

idiApp.directive('tasksList', function () {
    return {
        templateUrl: '/js/directives/taskslist/taskslist.directives.html',
        scope: {
            tasks: '='
        },
        controller: function ($scope) {
            $scope.filterTasks = '';
            $scope.newTask = {
                'title': '',
                'done': false
            };

            $scope.add = function () {
                $scope.tasks.unshift(angular.copy($scope.newTask));
                $scope.newTask.title = '';
                $scope.filterTasks = '';
            }
        }
    }
});