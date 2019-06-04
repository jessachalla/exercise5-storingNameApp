function NameService(){
    const ctrl = this;
    ctrl.serviceName = "";

    ctrl.setName = (nameFromNameForm) => {
        //now we push the name from the form to the array in this service
        //setName interacts with nameForm
        ctrl.serviceName = (nameFromNameForm);
        console.log(ctrl.serviceName);
    }

    ctrl.getName = () => {
        return ctrl.serviceName;
    }
}

angular
.module("NameApp")
//in quotes, it is referring to the name of the service
//not in quotes, it is referring to the function with that name
.service("NameOfTheService", NameService)