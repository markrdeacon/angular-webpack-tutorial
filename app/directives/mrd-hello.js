//this is our directive
export default (ngModule) => {
    
    //when testing load up test file and inject ngModule into it
    if (ON_TEST) {
        require('./mrd-hello.test')(ngModule);
    }
    
    ngModule.directive('mrdHello', () => {
        //inject CSS file
        require('./mrd-hello.styl');
        
        //return a DDO (Directive Definition Object)
        return {
            restrict: 'E', //element
            scope: {}, //isolated scope?
            template: require('./mrd-hello.html'),
            controllerAs: 'vm',
            controller: controller
        };
    });
};

//we can use ng-annotate-loader to implicitly inject during build, saving us from having to explicitly do it...
//controller.$inject = ['$log', 'mrdHelloService'];
export function controller($log, mrdHelloService) {
    const vm = this;

    vm.greeting = mrdHelloService.getGreeting();
    vm.newGreeting = 'New Greeting Here';

    vm.setGreeting = function() {
        mrdHelloService.setGreeting(vm.newGreeting);
        vm.greeting = mrdHelloService.getGreeting();
        $log.info('New greeting = ' + vm.greeting);
    };

    //vm.greeting = 'hello world';
    $log.info('Initial greeting = ' + vm.greeting);
};