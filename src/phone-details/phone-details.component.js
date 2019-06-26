var app = angular.module('phoneDetail');

app.component('phoneDetail',{

    templateUrl: 'src/phone-details/phone-details.template.html',

    controller : function ($http,$routeParams){

        var self = this;

        $http.get(`http://localhost:8080/phones/${$routeParams.phoneid}.json`)
        .then(function(response){
        self.phone = response.data;
            self.setDefaultPic(self.phone.images[0]);
    
    });

        self.setDefaultPic = function(pic){

            self.defaultPic = pic;
        }

    }

});