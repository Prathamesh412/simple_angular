 //Added Array in controller function for minification
    angular.module('myApp',['ngRoute'])
    .config(function( $routeProvider){
      $routeProvider
      .when('/',{
        templateUrl: 'list.html',
        controller: 'Ctrl'
      })
      .when('/edit/:id',{
        templateUrl: 'edit.html',
        controller: 'Edit'
      })
      .when('/add',{
        templateUrl: 'add.html',
        controller: 'Add'
      })
     .when('/remove',{
        templateUrl: 'remove.html',
        controller: 'Remove'
      })
    })
    .run(function($rootScope){
          $rootScope.people =[
              {
                name: "Sobin", 
                age: 23
              },
              {
                name: "Darshan",
                age: 74
              },
              {
                name: "Prath",
                age: 20
              },
              {
                name: "Surya",
                age: 28
              },
              {
                name: "Hari",
                age: 13
              }
            ];
})
    .controller('Ctrl',['$scope','$rootScope',function(scope,$rootScope){
        console.log(scope);
            scope.addStatus = true;
            scope.name = "Rafal";
            scope.age = "28";
            scope.persons=['Tom', 'Jerry']; 
            
//          scope.remove = function(index){
//             scope.people.splice(index, 1);
//          };
       
          scope.save = function(){
            scope.addStatus = true;
            scope.person = [];
          };
       
    }])
    .controller('Edit',['$scope','$rootScope','$routeParams',function(scope,$rootScope,$routeParams){
        scope.edit = function(index){
            scope.addStatus = false;
            scope.person = $rootScope.people[$routeParams.id];
          };   
     
    }])
    .controller('Add',['$scope','$rootScope',function($scope,$rootScope){
         $scope.add = function(){
            $rootScope.people.push($scope.person);
            $scope.person ={};
          };
    }])
    
    .controller('Remove',['$scope','$rootScope',function($scope,$rootScope){
      $scope.people=$rootScope.people    
      $scope.remove = function(index){
             $rootScope.people.splice(index, 1);
          };
      
    }])