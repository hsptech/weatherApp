var myapp=angular.module('myapp',[]);
myapp.controller('mainController',function($scope,$http){
    $scope.display=function(){
        //var weatherurl="http://api.openweathermap.org/data/2.5/weather?q="+vm.city+"&APPID=e7fdb896e985f4654673ec880d77aee2";
    $http.get("http://api.openweathermap.org/data/2.5/weather?q="+$scope.city+"&units=metric&APPID=e7fdb896e985f4654673ec880d77aee2").then(function(response){
        $scope.temperature=response.data;
        
   
      
    });
    
    }; 
    
});