var app = angular.module("nvd3TestApp", ['nvd3ChartDirectives']);

function GraphController($scope, $http){
    $http.get('./build/js/data1.json').success(function(data){
        $scope.exampleData = data;
    });


    $scope.xAxisTickFormat_Date_Format = function(){
        return function(d){
            return d3.time.format('%x')(new Date(d));
        }
    }

    $scope.xAxisTickFormat_Time_Format = function(){
        return function(d){
            return d3.time.format('%X')(new Date(d));
        }
    }

    $scope.xAxisTickValueFunction = function(){
        var tickValues = [];
        return function(d){
            var values = d[0].values;
            for(var value in values){
                if((value % 25) === 0){
                    tickValues.push(values[value][0]);
                }
            }
            return tickValues;
        }
    }

    var numberFormat = d3.format('.2f');
    $scope.yAxisFormatFunction = function(){
        return function(d){
            return numberFormat(d);
        }
    };

    $scope.toolTipContentFunction = function(){
        return function(key, x, y, e, graph) {
            return  'Super New Tooltip' +
                '<h1>' + key + '</h1>' +
                '<p>' +  y + ' at ' + x + '</p>'
        }
    }


}