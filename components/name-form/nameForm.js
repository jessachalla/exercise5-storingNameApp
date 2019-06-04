//4. write the function (same name as controller)
function NameForm(NameOfTheService){
    //the name of the function below is the parameter for the function above
    const ctrl = this;

    ctrl.addName = (name) => {
        //we want to get the "name" in this function into the NameOfTheService service
        NameOfTheService.setName(name);
    }
}

//1. make it angular
angular
//2. tie it to the NameApp module
.module("NameApp")
//3. make it a component (name it, make it an object and give it parts)
.component("nameForm", {
    //add ng-model to input - now we know it will be stored 
    //add ng-click to button - set it to a function (that you will creat above)
    //the argument of the function will pass the name inputted
    template: `
    <p>Type your name and push the save button.</p>
    <input ng-model = "$ctrl.nameInput" placeholder="Name"></input>
    <button ng-click= "$ctrl.addName($ctrl.nameInput)" >Save</button>
    <hr>
    `,
    controller: NameForm,
}) 