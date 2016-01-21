angular.module('sysgovApp',[])
    .controller('sistemasCon', function($scope, $http){

    $http.get('data/data.json')
    .success(function(data){
        $scope.sysgov = {
            description : "Sistemas do Governo",
            sistemas : data
        };
        console.log($scope.sysgov); 
    });
    
    $scope.filtraPROD = function(sistemas){
        if(sistemas.tipo == "producão") return true;
        return false;
    }
    $scope.filtraDESE = function(sistemas){
        if(sistemas.tipo == "desenvolvimento") return true;
        return false;
    }
})