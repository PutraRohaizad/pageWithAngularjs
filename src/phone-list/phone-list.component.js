angular.module('phone-list')
        .component('phonelist',{

            templateUrl: 'src/phone-list/phone-list.template.html',

            controller: function ($http) {
                var self = this

                self.orderProp = 'age';

                $http.get('/phones/phones.json')
                .then(function(response){
                    self.phones = response.data
                });


            }
        })

