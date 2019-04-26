

<img src="https://user-images.githubusercontent.com/22448079/56662378-b9855d80-669b-11e9-9323-815e66367a91.png">

<h3 align="center">
  <br>
  <b>A dynamic web app that creates curated playlists based on multiple user's music preferences using Spotify.</b>
  <br>
  <br>
</h3>

![BuildStatus](https://user-images.githubusercontent.com/22448079/56818214-0bb2b400-683f-11e9-8f97-8835a4641069.png)
 

[![Build Status](https://travis-ci.com/WePickOrganization/WePick.svg?branch=master)](https://travis-ci.com/WePickOrganization/WePick) [![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](http://wepick.eu-west-1.elasticbeanstalk.com/) [![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE) 


![WhatIsWePick](https://user-images.githubusercontent.com/22448079/56818212-0bb2b400-683f-11e9-9ae1-29771d5dc142.png)

WePick is an application that works in parallel with Spotify to help solve the age old problem of deciding what to listen to when you are with a group of friends. It accomplishes this by creating curated Spotify playlists that are generated using each <b>user's favorite artists</b> and a selected <b>mood</b>.



![Pre](https://user-images.githubusercontent.com/22448079/56818808-541ea180-6840-11e9-86cc-3edbe43b6c2d.png)

You should install/setup the following before attempting to run the application

* [Python3]()
* [NodeJS]()
* [Spotify Account](https://www.spotify.com/is/signup/)

![Feature](https://user-images.githubusercontent.com/22448079/56818202-0a818700-683f-11e9-9a9e-1dfb044dce9b.png)

### Front-End 
* The front-end of the application was built using React.
* Single page application with dynamically rendered components
* Responsive and designed with a modern look and feel
* Design promotes re-use and abstraction of implemented components

### Back-End 
* Python/Flask Server Backend
* <b>REST</b>ful Web API with Javascript Web Token Secured Endpoints
* Works in parallel with Spotify using our own version of the <b>Spotipy</b> Python library
* Includes JSON Schema Validation for all incoming HTTP request methods
* Use of Object-Orientated Python programming throughout

### Database 
* Account register/login integrated with remote MongoDB Database hosted on Amazon Web Services Virtual Machine
* Securely stored passwords using SHA256 Hashing Algorithm
* Secure database connection, authentication required before use

### Version Control/Deployment
* The application's version control is managed by Git
* Utilizes MochaJS, Travis and Amazon Web Services to deliver a fully automatated delivery pipeline
* Committed code is ran against tests and if it passes, is subsequently deployed to our AWS Elastic Beanstalk Enviroment
* You can find the application hosted [here.](http://wepick.eu-west-1.elasticbeanstalk.com/)

![Running](https://user-images.githubusercontent.com/22448079/56818206-0b1a1d80-683f-11e9-98ab-9483cee98add.png)

The following are steps required to compile the source code for this application.

* <h5> 1. Download Source Code</h5>
      <h7> Via SSH </h7>

      git clone git@github.com:WePickOrganization/WePick.git

    
     <h7> Via HTTPS </h7>
     
      git clone https://github.com/WePickOrganization/WePick.git


* <b>2. Setup React front-end</b>
    
    <h7>Navigate to react-frontend folder</h7>

      cd react-frontend

    <h7>Install required Node modules</h7>
     
      npm install
    
     <h7>Compile the JavaScript - <b>Standard</b></h7>
     
      npm run dev

     <h7>Compile the JavaScript - <b>Development</b></h7>
     
      npm run start

* <b>3. Setup Flask Server</b>
    
    <h7>Install required Python packages</h7>

      pip install -r requirements.txt

    
     <h7>Start the server</h7>
     
      python application.py

    <h7>Navigate to </h7>

      http://127.0.0.1:5000/ 
       
![Doc](https://user-images.githubusercontent.com/22448079/56818896-8fb96b80-6840-11e9-9545-5e5e88d2b1e4.png)


A comprehensive writeup on the development process can be found in the <b>docs</b> folder of the project.

You can read our dissertation on this project [here.](https://github.com/WePickOrganization/WePick/blob/master/docs/project.pdf).

If you think the documentation is lacking and/or you have any issues with the project, please open an <b>Issue</b> using GitHub's <i>Issues</i> tab. You can do that [here](https://github.com/WePickOrganization/WePick/issues).

![Video](https://user-images.githubusercontent.com/22448079/56818211-0bb2b400-683f-11e9-8a2d-8c2ae71a538c.png)[![](https://user-images.githubusercontent.com/22448079/56817605-d0fc4c00-683d-11e9-8eb2-e0c41bede27f.png)](https://www.youtube.com/watch?v=_ExCvI04ueI&feature=youtu.be)

![Technology](https://user-images.githubusercontent.com/22448079/56818210-0b1a1d80-683f-11e9-8f2f-202ea748d912.png)

* [Python]()
* [NodeJS]()
* [TravisCI]()
* [Spotify]()
* [React]()
* [MongoDB]()
* [Amazon Web Services]()


![Resources](https://user-images.githubusercontent.com/22448079/56818205-0b1a1d80-683f-11e9-9a46-32281cef9009.png)

A collection of resources used when developing the project can be found below

* [Build a Simple CRUD App with Python, Flask, and React](https://developer.okta.com/blog/2018/12/20/crud-app-with-python-flask-react)
* [Full-stack tutorial: Flask + react + docker](https://medium.com/@riken.mehta/full-stack-tutorial-flask-react-docker-420da3543c91)
* [AWS CodeDeploy with TravisCI](https://docs.travis-ci.com/user/deployment/codedeploy/)
* [Getting started with MochaJS](https://mochajs.org/)
* [Steps to install MongoDB on an EC2 Instance](https://medium.com/@calvin.hsieh/steps-to-install-mongodb-on-aws-ec2-instance-62db66981218)
* [Spotipy Documentation](https://spotipy.readthedocs.io/en/latest/)
* [Spotify Web API](https://developer.spotify.com/documentation/web-api/)
* [How to install and secure MongoDB in Amazon EC2 in minutes?](https://hackernoon.com/how-to-install-and-secure-mongodb-in-amazon-ec2-in-minutes-90184283b0a1)



![Devs](https://user-images.githubusercontent.com/22448079/56818200-0a818700-683f-11e9-96ec-167b9917ebe0.png)

* [Eddie Eldridge](https://github.com/EddieEldridge)	
 	 
* [Danielis Joniskis](https://github.com/jawneck)
 	 
* [Keith Higgins](https://github.com/KeithH4666)

![Acknowledge](https://user-images.githubusercontent.com/22448079/56818213-0bb2b400-683f-11e9-9a04-05d46e4e7111.png)

* [Martin Kenirons](https://github.com/mkenirons)

