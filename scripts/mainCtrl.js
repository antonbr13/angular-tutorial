app.controller('mainCtrl', function ($scope, mainService) {

      $scope.gemsTwo = mainService.gettingGems();

      // $scope.tabby = mainService.tab;
      //
      // $scope.tabSetter = mainService.selectTab();

});
