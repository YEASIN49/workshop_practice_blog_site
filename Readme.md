# HOW TO START THIS APP ?

1. To start it, you need to make sure you already installed mongodb and Nodejs on your pc.

2. Next,  make sure mongod service is running on your PC. In Ubuntu you can start the service using the command: 
```shell
service mongod start
```

3. Now from the terminal go to the server folder and run ```npm i```. This will install all the required packages.
4. After the packages are installed, run the command: ```npm start```. Now you backend server should be started.
5. Now run the index.html of clien using the live server, by clicking "Go Live" which you will find at the bottom right corner of your VS Code. There is no such option ? Of course first you need to install this extension in VS Code.  

## What to practice ?
1. index.html file of client file holds the html code of web page. 
2. the index.js file of client folder holds the js code to modify the web page
3. the index.js file of server folder holds the configuration of the backend server and its routing.
4. Try to understand how data flows from index.html to index.js file of client folder and then how this index.js file of client folder communicates with the index.js file of server folder.
5. Study the routing codes available inside the ```./server/routes``` folder. There you will find rest of the instruction about what to do.