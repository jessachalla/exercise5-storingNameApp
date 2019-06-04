//4. write the function (same name as controller)
function NameDisplay(NameOfTheService){
    const ctrl = this;
    
    ctrl.displayNameList = () =>{
        ctrl.display = NameOfTheService.getName()
    }
}

//1. make it angular
angular
//2. tie it to the NameApp module
.module("NameApp")
//3. make it a component (name it, make it an object and give it parts)
.component("nameDisplay", {
    //add ng-click to the button- name it the name of the function you will create above (inside the name display function)
    //to name the right thing appear use {{ }} so that it will show up in the html
    //put what you used inside the {{ }} equal to what you want in there
    template: `
    <div>
    <p>Next, click the load button to display your saved name.</p>
    Name: {{$ctrl.display}}
    </div>
    <button ng-click="$ctrl.displayNameList()">Load</button>
    `,
    controller: NameDisplay,
}) 