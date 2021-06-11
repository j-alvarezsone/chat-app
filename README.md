# Chat-App

In this app, you can create an account and you can send messages to another user<br/>
FrontEnd: React <br/>
Backend: NodeJs

## Project Screen Shot(s)

![login](https://user-images.githubusercontent.com/59021083/121733478-d4252580-caf3-11eb-8d60-cb2fd7c2fb27.png)

![register](https://user-images.githubusercontent.com/59021083/121735126-fc158880-caf5-11eb-843c-d32c85d1c2d9.png)

![chat](https://user-images.githubusercontent.com/59021083/121733511-dedfba80-caf3-11eb-8356-95d1e2017bfe.png)

## Installation and Setup Instructions

To use, you need to clone(fork) down this repository and [backend](https://github.com/j-alvarezsone/chat-app-server). You will need node and npm installed globally on your machine.<br/>
You have to run the server!!

## Frontend

Installation:<br/>
`yarn install`<br/>
before start the server, create environment variables `REACT_APP_API_URL=http://localhost:8080/api` and go to <b>fetch.js</b> `const baseURL = process.env.REACT_APP_API_URL;`<br/>
To Start Server:<br/>
`yarn start`<br/>
To Visit App:<br/>
`http://localhost:3000`

## Backend

Installation:<br/>
`npm install`<br/>
To Start Server:<br/>
`npm run dev`<br/>
