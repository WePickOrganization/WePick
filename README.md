

<img src="https://user-images.githubusercontent.com/22448079/56662378-b9855d80-669b-11e9-9323-815e66367a91.png">

<p align="center">
  <b>A dynamic web app that creates curated playlists based on multiple user's music preferences using Spotify. Built with React, Flask, Python, Node.js, Mocha, AWS and Mongo.</b><br>
</p>



[![Build Status](https://travis-ci.com/WePickOrganization/WePick.svg?branch=master)](https://travis-ci.com/WePickOrganization/WePick)


## Contents
* [Description](#description)
* [How to run](#how-to-run-the-program)
* [Design](https://github.com/Store-Compare-Project/StoreCompare/wiki/Design-Document)
* [Documentation](#documentation)
* [Information](#information)
* [Video](#video)
* [Technologies](#technologies-and-software)
* [Resources](#resources)
* [Wiki](https://github.com/EddieEldridge/GoLangAutomaton/wiki)

## What is WePick?
WePick is an application that works in parallel with Spotify to help solve the age old problem of deciding what to listen to when you are with a group of friends. It accomplishes this by creating curated Spotify playlists that are generated using a pool of the <b>user's artists</b> and a selected <b>mood</b>

## Prerequisites

You should install the following before attempting to run the application

* Python3
* NodeJS

## Running/Installation
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
       

## Information


## Documentation


## Video
Below is a video demonstration of the application in practice

## Technologies and Software
**Technologies**

- AWS
- MongoDB
- Flask
- Python
- Mocha 
- React

## Resources


## Developers
[Eddie Eldridge](https://github.com/EddieEldridge)	
 	 
[Danielis Joniskis](https://github.com/jawneck)
 	 
[Keith Higgins](https://github.com/cian2009/KeithHiggins)

## Acknowledgments
