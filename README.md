# Meevee
Meevee (My Extra Efficient Virtual Event Executor) is a Google Chrome plugin targeted at students that opens scheduled Zoom meetings automatically based on Zoom links and schedule information provided by the user. 

## Building
This project can be run in the browser or as a Chrome extension.
First, ensure all modules are installed
```
$ npm ci
```
To run the project in the browser, execute 
```
$ ng serve
```

To run the project as a chrome extension, execute
```
$ npm run build
```
Then in the Chrome Extensions manager page, load unpacked the `dist/meevee` folder. 
(Note: Do not run `ng build` directly. That will delete the manifest and favicon from the dist folder.)

## Team Members:

Last Name       | First Name      | GitHub User Name     | Scrum Role
--------------- | --------------- | -------------------- | ---------------
Lewis           | Casey           | 7clewis              | Developer
Reinking        | Thomas          | thomasreinking       | Product Owner
Richmond        | Max             | maxrichie5           | Developer
Thomas          | Olivia          | mustelidae1          | Scrum Master
