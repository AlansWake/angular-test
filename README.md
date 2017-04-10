# angular-test
Test projects in Angular

This project is to practice on Angular (4) with different APIs.

The following services are used:
- Angular 4: https://angular.io
  - Follow the quickstart to get Node and npm
  - If you want to go through with the tutorial, follow the instuctions on the page
  - If not, don't bother with the QuickStart seed and proceed to Angular CLI
- Angular CLI for making the general project: https://cli.angular.io/
  > npm install -g @angular/cli
  
  > ng new my-dream-app
  
  > cd my-dream-app
  
  > ng serve
  
  and more
- Git for getting the project in the cloud (optional):
  > git init
  
  > git add *
  
  > git commit "initial commit"
  
  > git remote add origin LINK-TO-THIS-GIT
  
  > git push -u origin master (if you want to make the direction your general place to push)


Ruter API: https://reisapi.ruter.no/help

Ruter API was pretty challenging to learn.
It requires the following skills:
- Understanding of "Header" in Http
- Understanding of Json
- How to use Json in Angular or JS
Http Header:
I will come back to this.

Json:
Json is a standard format to communicate over the internett (XML is another example). Json fits information in a code like format.
For example:
[{"Something": "this thing",
 "Next thing": "this other thing"}
 {"New thing": {"Several things1": "x",
                "Several things2": "y"}
 }
]
It is kinda a mix between database and Object style.

You can AUTOMATICALLY convert Json to a JavaScript Object. This is the big deal with Json, it is so easy and useful to use because of this.

Json in Angular:
I haven't found any specific way to use Json in Angular, but you should probably use Observable og Promise. With Observable you can use ".map", and with Promise you can use ".then". Both handels a "Response" which can use .json() to create the Object structure of the Json file. You can now navigage the structure as it was JS objects. 

