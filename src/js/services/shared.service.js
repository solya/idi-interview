'use strict';

idiApp.service('SharedService', function ($http) {
    return {
        getNotify: function(){
            return $http.get('/js/shared/notify.json');
        },
        getTasks: function(){
            return $http.get('/js/shared/taskslist.json');
        }
    }
});