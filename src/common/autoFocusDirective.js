(function () {
  'use strict';

  angular.module('common')
    .directive('autoFocus', autoFocusDirective);

  function autoFocusDirective($timeout) {
    return {
      restrict: 'A',
      link: function link($scope, $element, $attributes) {
        $scope.$watch($attributes.autoFocus, function(af) {
          if (af) {
            setFocus();
          }
        });

        function setFocus() {
          $timeout(function() {
            $element[0].focus();
          });
        }

      }
    };
  }

}());

