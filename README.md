# _The Last Notion Project in Woowa-Tech, Ever_
우아한테크러닝 4기 : Node.js + express 기반의 미니 노션 만들기

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

_My first notion_ Project will be running in Woowa-Tech-Running. This project allows you to choose from one to ten, perform the desired function, not just receive training and follow suit. Let's be creative as mush as we want and decorate _your first notion_ with fun!

## Build Project

- You must clone this repository
    ```sh
    git clone https://github.com/JIN-076/Woowa-Tech-4.git
    ```
- Runs the app in the development mode
    ```sh
    npm start
    ```
    `npm start` command is the part of executing the start command in script in Practicepackage.json.<br>
    If the start command is not set, `node server.js` is executed.<br>
    Open http://localhost:3000 to view it in the browser.
    
- Launches the test runner in the interactive watch mode.
    ```sh
    npm test
    ```
    
- Builds the app for production to the build folder.
    ```sh
    npm run build
    ```
    `npm run` is command that executes scripts other than that. 
    For example, if scripts have the build command, then `npm run build`.

## Features

- Drag and drop images (requires your Dropbox account be linked)
- Import files from GitHub, Dropbox, Google Drive and One Drive
- Login and registration implementation through Google link
- Markdown Grammar Available Mini-Notion
- Implementing highlighter function on specific phrases
- Implementing toggle / callout function

## Tech

_my first notion_ Project is based on:

>front-end : react + typescript<br>
>back-end : node + express

✔️ Note : The backend of this project may be changed to the spring framework later.

- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework 
- [react] - refers to the user interface for the frontend
- [spring] - Open-source application framework for Java platform

## Installation

_my first notion_ requires [Node.js](https://nodejs.org/) v14+ to run.

Here's how to get started quickly using the Create React App.

```sh
npx create-react-app my_first_notion
cd my_first_notion
npm start
```

Let's install the following to apply typescript and react.
and then, Same as before, get started using the Create React App.

```sh
npm install --save typescript @types/node @types/react @types/react-don @types/jest
npx create-react-app my_first_notion --template typescript
```

## Development

Want to contribute? Great!

- Create a server with express in node.js

**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [git-repo-url]: <https://github.com/JIN-076/Woowa-Tech-4.git>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>
   [spring]: <https://spring.io/projects/spring-framework>
   [react]: <https://reactjs-kr.firebaseapp.com>
