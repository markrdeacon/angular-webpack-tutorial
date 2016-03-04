export default (ngModule) => {
    ngModule.service('mrdHelloService', mrdHelloService);
}

export function mrdHelloService () {
    
    this.setGreeting = setGreeting;
    this.getGreeting = getGreeting;
    
    let greeting = 'default greeting';
    
    function setGreeting (value) {
        greeting = value + ' (on ' + (new Date()).toDateString() + ')';
    }
    
    function getGreeting() {
        return greeting;
    }      
}
