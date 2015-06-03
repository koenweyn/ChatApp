angular.module('starter.directives', [])

  .directive('autoFocus', autoFocusDirective);

  function autoFocusDirective($timeout) {
    return {
      restrict: 'A',
      link: function link($scope, $element, $attributes) {
        if ($attributes.autoFocus) { //if there is an attribute, wait until it is truthy before capturing focus
          $attributes.$observe('autoFocus', function(af) {
            if ($scope.$eval(af)) {
              setFocus();
            } 
          });        
        } else {
          setFocus();
        }
        
        function setFocus() {
          $timeout(function() {
            console.log('set focus');
            console.log($attributes.ngModel);
            $element[0].focus();
          });
        }
      }
    };
  }