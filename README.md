

<img src="https://user-images.githubusercontent.com/22448079/56662378-b9855d80-669b-11e9-9323-815e66367a91.png">

<h3 align="center">
  <br>
  <b>A dynamic web app that creates curated playlists based on multiple user's music preferences using Spotify.</b>
  <br>
  <br>
</h3>




![Contents](https://user-images.githubusercontent.com/22448079/56727876-7ed9fe80-6749-11e9-8fc2-8e3fbc67aa60.png)

* [Running/Compiling](#Prerequisites)
* [Documentation](#documentation)
* [Video Demonstration](#video)
* [Technologies](#technologies-and-software)
* [Resources](#resources)
* [Contributors](#resources)




![BuildStatus](https://user-images.githubusercontent.com/22448079/56727595-ec395f80-6748-11e9-81fe-b8068308a08a.png)

[![Build Status](https://travis-ci.com/WePickOrganization/WePick.svg?branch=master)](https://travis-ci.com/WePickOrganization/WePick)


![WhatIsWePick](https://user-images.githubusercontent.com/22448079/56727894-8a2d2a00-6749-11e9-899c-2218520e0edb.png)

WePick is an application that works in parallel with Spotify to help solve the age old problem of deciding what to listen to when you are with a group of friends. It accomplishes this by creating curated Spotify playlists that are generated using a pool of the <b>user's artists</b> and a selected <b>mood</b>.



![Pre](https://user-images.githubusercontent.com/22448079/56727918-95805580-6749-11e9-8840-8bd5988923fe.png)

You should install the following before attempting to run the application

* [Python3]()
* [NodeJS]()
* [Spotify Account](https://www.spotify.com/is/signup/)

![Feature](https://user-images.githubusercontent.com/22448079/56727968-aa5ce900-6749-11e9-8674-fb406a2be0a5.png)
### Front-End 
* The front-end of the application was built using React.
* Single page application with dynamically rendered components
* Responsive and designed with a modern look and feel
* Design promotes re-use and abstraction of implemented components

###### Component Examples

![Capture](https://user-images.githubusercontent.com/22448079/56725626-256fd080-6745-11e9-8b06-9d65f6ef0b6e.PNG)

## Back-End 

* Python/Flask Server Backend
* <b>REST</b>ful Web API with Javascript Web Token Secured Endpoints
* Works in parallel with Spotify using our own version of the <b>Spotipy</b> Python library
* Includes JSON Schema Validation for all incoming HTTP request methods
* Use of Object-Orientated Python programming throughout

##### JSON Validation Schema Example
```json
user_schema = {
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
        },
        "email": {
            "type": "string",
            "format": "email"
        },
        "password": {
            "type": "string",
        },
        "spotifyUsername": {
            "type": "string",
        },
       
    },
    "required": ["email", "password"],
    "additionalProperties": False
}
```

## Database 
* Account register/login integrated with remote MongoDB Database hosted on Amazon Web Services Virtual Machine
* Securely stored passwords using SHA256 Hashing Algorithm
* Secure database connection, authentication required before use

##### Database Schema Example
```json
"_id": {
    "$oid": "5c90d0d31fd421123063d92f"
},
"name": "Edward Eldridge",
"email": "steadyeddie101@hotmail.co.uk",
"password": {
    "$binary": "JDJiJDEyJDBlZWtUeTRMS0xQRnhFV0NGMU9vT08wb3Z5TTExOFdxTTJWd29TMGxSd1JYajZtV2VXY3dP",
    "$type": "00"
},
"spotifyUsername": "Steadueddie",
"favArtist": [
    "Nujabes",
    "Kanye West",
    "Chief Keef",
    "Gotan Project",
    "Sia"
]
},
```

![Running](https://user-images.githubusercontent.com/22448079/56728026-c9f41180-6749-11e9-873b-ed97a831acfc.png)

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
       

![Documentation](https://user-images.githubusercontent.com/22448079/56728198-2ce5a880-674a-11e9-8591-6cb665b3d806.png)

A comprehensive writeup on the development process can be found in the <b>docs</b> folder of the project.

You can read our dissertation on this project [here](https://github.com/WePickOrganization/WePick/blob/master/docs/project.pdf).

If you think the documentation is lacking and/or you have any issues with the project, please open an <b>Issue</b> using GitHub's <i>Issues</i> tab. You can do that [here](https://github.com/WePickOrganization/WePick/issues).

![Video](https://user-images.githubusercontent.com/22448079/56728197-2c4d1200-674a-11e9-9c90-b799d5c6b400.png)
Below is a video demonstration of the application in practice

![Tech](https://user-images.githubusercontent.com/22448079/56728196-2c4d1200-674a-11e9-9492-295427be0ca5.png)

* [Python]()
* [NodeJS]()
* [TravisCI]()
* [Spotify]()
* [React]()
* [MongoDB]()
* [Amazon Web Services]()


![Resources](https://user-images.githubusercontent.com/22448079/56728194-2c4d1200-674a-11e9-8e5b-51c886d6f0eb.png)

A collection of resources used when developing the project can be found below

* [Research link here]()
* [Research link here]()
* [Research link here]()
* [Research link here]()
* [Research link here]()
* [Research link here]()
* [Research link here]()
* [Research link here]()
* [Research link here]()
* [Research link here]()
* [Research link here]()
* [Research link here]()
* [Research link here]()

![Devs](https://user-images.githubusercontent.com/22448079/56728263-4ab30d80-674a-11e9-8752-8ec84a1f2c13.png)
* [Eddie Eldridge](https://github.com/EddieEldridge)	
 	 
* [Danielis Joniskis](https://github.com/jawneck)
 	 
* [Keith Higgins](https://github.com/cian2009/KeithHiggins)

![Acknowledge](https://user-images.githubusercontent.com/22448079/56728324-6f0eea00-674a-11e9-86b8-cdeaf518ccf3.png)

* Acknowledgements go here