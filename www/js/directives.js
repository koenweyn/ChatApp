angular.module('starter.directives', [])

  .directive('autoFocus', autoFocusDirective);

  function autoFocusDirective($timeout) {
    return {
      restrict: 'A',
      link: function link($scope, $element) {
        console.log('set focus');
        $timeout(function() {
          $element[0].focus();
        });
      }
    }
  }