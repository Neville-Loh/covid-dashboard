
[![Build Status](https://dev.azure.com/nloh108/msa-devops/_apis/build/status/Neville-Loh.MSA-devops?branchName=master)](https://dev.azure.com/nloh108/msa-devops/_build/latest?definitionId=2&branchName=master)
# Introduction
This project is developed for the event of Microsoft Student Accelerator New Zealand
2020 Phase 1. A web application is developed and deployed using Microsoft Azure.
The application adapted continuous integrations methodology by using Azure Pipeline.  
https://neville-msa-devops-2020.azurewebsites.net/

# Web Application
This is an web application developed using React in typescript. The application
tracks the total confirm cases of the 2020 COVID 19 pandemic,
![Webpage](img/homepage.png)

COVID-19 Web Application link  
https://neville-msa-devops-2020.azurewebsites.net/

### Documentation
  * Getting Started
  * Azure Pipeline
    * Build Pipeline
    * Release Pipeline
  * Web Application
    * API
    * Third Party Framework
    * Source Control Methodology
    

## Getted Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequesties
Please make sure you install node.js, Material UI, MUI-datatables in your local machines.

### Installation
For [Node.js](https://nodejs.org/en/), please visit the official website and download from there. All installation below via npm. 

```
cd my-app
npm start
```

Installation for [React Bootstrap](https://react-bootstrap.github.io/getting-started/introduction) and [axios](https://npmjs.com/package/axios):
```
npm install react-bootstrap bootstrap
npm install axios
```
After finishing installation, you can pull the code from the master branch down to your local computers. (Assume you are currently inside the my-app directory)
```
git init
git add remote origin url
git pull origin master
```

### Run Project
```
npm start
```
Runs the app in the development mode. Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.



# Azure Pipeline
Azure pipelines are set up such that testing and deployment can be done in a rapid
fashion. This allows jobs to be execute concurrently.

### Project User (for MSA Admission Detail)
Only Karim Cisse have been added to the project due the other person Paul.t being
an external user. 

### Build Pipeline
The pipeline are run automatically when code changes are submit to the master and
development branch in the source repository. When the pipelines are trigger build artefact.
is build by the build agent  

```
trigger:
      branches:
        include:
        - master
        - development
      paths:
        include:
          - my-app/*

        exclude:
        - README.md
        - azure-pipelines.yml
        - img/*
```
It is decided the trigger to ignore all documentation files when there is no changes
to the core application.

```
- script: |
    cd $(rootDir)
    npm install
    npm run build
    cd ..
  displayName: 'npm install and build'
```

The artifact is build and archived at the end of trigger.

### Release Pipeline
The Release pipeline are run automatically when new commit is made to the master
branch. The new web application will be build and deployed using Microsoft Azure
Services.


## API
The following API is used in the application for data retrieval purpose.  
https://api.covid19api.com

## Third Party Framework
The following framework is used in the application.
* React-Bootstrap
* Axios

## Source Control Methodology
Update of the website is developed in the development branch. Test are carried out
before merging the development branch to master branch.
