# Angular

Link Curso Udemy: https://www.udemy.com/course/angular-pt/learn/lecture/7032850#overview

***
### 1.Introdução
***

* Recursos do Angular:
    * Data binding;
    * Modules;
    * Dependence Injection.

* Linguagens:
    * ES5;
    * ECMASCRIPT 2015;
    * Typescript(O Angular é escrito nessa linguagem);
    * Dart;

* Install:
    * Node JS;
    * Angular CLI;
        ```javascript
        //for install angular cli
        npm install -g @angular/cli
        //for check version instaled
        ng --version
        ```

***
### 2.Typescript
***

* Extenção do Javascript;
    * Ajuda na correção de erros em tempo de execução;
    * Ajuda na organização e padronização do código;
    
    * Uso de tipos:
        * Declarado a esquerda;
        * Inferido pelo valor atribuido;
        * Any (Semelhante ao JS);

    * Declaração de Arrays:
        * Declaração direta do tipo;
        * Tipo arrau extendendo do tipo dos valores;
        * Por inferência;

    * Variables:
        * When you don't define variable type, you default type is `any`  

* For start project in Typescript:
    * Create file: tsconfig.json
    * Create file:
        ```javascript
        name.ts
        name.js
        ```

* How to install Typescript compiler:
    ```javascript
    //Tnstall
    npm install typescript -g
    //Verify version
    tsc -v
    ```

* Run typescript transpiler:
    * With terminal open folder:
    ```javascript
    tsc name.ts
    // Compile in run time:
    tsc -w
    ```

* Run js transpiled:
    ```javascript
    //.js is not necessaryx'
    node way/name
    ```

* Functions:
    * Typescript allows to use typed parameters and returns;
    * Arrow Functions are abrevieited form to write functions;
    * Declarate variables with type function;
    * All function parameters on .ts are required:
        * For no required parameters use '?' after parameters name;
    * REST parameters are array parameters with simple declaration;

* Objected Orientation:
    * typescript suport classes, objects, heritage and interfaces; 

* Modules:
    * Modules are typescript files with exportable parts;

* Install a external javascript lib 
```javascript
//Initialize file package.json
npm init -f
//Install lib for dev and run time
npm install --save pkg_name@version
//Instal type conversion of lib, only development time
npm install --save-dev @types/pkg_name@version
```

***
### 3. First application
***

* Create and run new angular application:
```javascript
//Create a new application
ng new 'application-name' --prefix='short-prefix-name'
//Run application - it's necessary open folder created previously on terminal
ng serve
```

* When excecute command `ng serve`, you start a live server for development usgin webpack;

* A angular module is a group of your application components or a group of framework components;

* Decorator is a function that apply metadata on JS or TS class, atributes, methods or methods atributes;

* Components:
    * Components are custom elements that can be reused;
    * Angular components have 'Classes' with lifecycle, 'Templates' that define appearance and a 'selector' or 'tag' for use this component in other parts of application; 
    * Components are declarated in Angular modules (With @NgModule Decorator), if the compoent os declarated in root module, all application have access to this module.
    * For create components:
    ```javascript
    //In cmd or terminal with project folder open
    ng generate component 'comp_name'
    //For don't generate test files
    ng generate component 'comp_name'--skipTests=false
    //Short version
    ng g c 'comp_name'--skipTests=false
    ```

    * Property binding is used to target properties of component on DOM components (use '['atribute']');
        * Always you want to pass atributes for components, and this atributes isn't strings, use Property binging syntax:
        ```html
        <component [atribute]="value"></component>
        ```
    * Template interpolation is used to get atributes of angular components (use '{}').

* Directves is used to add behaviors on DOM elements;
    * Obs: Don't have tamplates;
    * Directives can be:
        * Templates;
        * Structs;
        * Atributes;

* Events are used with '()' for indicate functions have activate when the event start;
    * You can emmit events for components using 'Output' and 'EventEmmiter' libs;


***
### 3. MEAT App
***

* The "angular-cli.json" import for application all scripts and styles. The webpack server include in application this scripts on the same orther that you put in your file.

* For create an **dynamic part** on component:
    ```html
    <router-outlet></router-outlet>
    ```
    * Create object calles **ROUTES** and include your routes, this object is inside app.routes.ts file;
    * Import var **ROUTES** in app component and pass with param in:
    ```typescript
    imports: [
        RouterModule.forRoot(ROUTES),
    ]
    ```

* **Dependence injection** is standart project for receive data;

* **Services** are used for encapsule the conection with backend:
    * 3 scopes: 
        * Modules -> `providers[]`;
        * Components and you son components -> `providers[]`;
        * Only component -> `viewProviders[]`;

    * For a service receive another service with injection, is necessary use decorator `@Injectable`;

    * **Reactive Programming**: Programming based on events;
        * Iterator + Observer;
        * The diference between Observable and Promisses is the number of events. An observable receive multiple events and a promisse receive only one event;

    * **JSON Server**:
        ```javascript
        //install
        npm install json-server
        //Start
        json-server 'nome'.json
        ``` 

* **Pipes** are methods to transform contents:
    * json -> notation for show json on html, often used on development time;
    * uppercase;
    * lowercase;
    * percent;
    * data : 'dd/MM/yyyy';
    * currency: 'BRL' :true (number form);
    * slice: part of array;

***
### 3. Custom Components and Forms
***

* **novalidate** remove browser checks for html forms:
    ```html
    <form novalidate></form>
    ```

* **ngModel** is used to allow view forms states;
    * valid|invalid;
    * pristine|dirty;
    * untouched|touched;

* **Content Projection** is a method for create a parent component that modify only visual characteristics and receive another part of code for example an `<input>`; 

***
### 4. Reactive Forms
***
* They are used for validate and configure a form;

***
### 4. Angular Modules
***
* Organize application;
* Implements lazy loading;
* kind of modules:
  * **Root** module;
  * **Shared** & **Core** modules;
  * **Feature** modules;

* Preloading for lazy load big components;

***
### 5. Angular Animations
***
* Install animation angular module;
  ```
  npm install --save @angular/animations@4.0.0
  npm install --save web-animations-js
  ```

* Import Browser Animations Module;

* Animation:
  * Triggers;
  * State;
  * Transition;
    * Void and WildCard;
  * Styles;
  
***
### 6. Configure Application Angular 
***
* For create a build with development settings;
```javascript
//The App is compiled just in time;
ng build
```
* For create a build with production version;
```javascript
//The App is compiled ahead of time
ng build --prod
```

***
### 7. Deployment application
***

* Copy files from dist fold and paste on your server;
* Configure your server based on section deplyment from angular docs:
  https://angular.io/guide/deployment

***
### 8. Backend security with json-server
***

* Use backend folder in project;
* For use typescript create `tsconfig.json` file;
  * Run `tsc -w` for transpile .ts files for .js files on backend folder;
  * Create and modificate `server.ts` file;

* Install `nodemon` for compile and excecute codes in runtime;
  ```javascript
  npm install nodemon -g
  ```
* Run backendserver:
  ```javascript
  //'dist' folder had configured in 'tsconfig.json'
  nodemon --watch backend .\backend\dist\server.js
  ```

* For teste json-server in **Postman** disable the option: `Enable SSL certificate verification` on **Settings**
