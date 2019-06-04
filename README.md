ANGULAR EXERCISE 5
Skills: ngModel, services, components
Build an AngularJS app that lets the user enter a name, stores it, and then lets them display what they entered earlier.
● Create a service named NameService. It has two methods, getName and setName, which get and set a “name” variable inside the service.
● Create a component named nameForm. It has an input and a “Save” button. When the form is submitted, it calls the setName method of the NameService.
● Create a component named nameDisplay. It has a “Load” button. When the button is clicked, it calls the getName method of the NameService and displays the result.
● Add both components to index.html.