![](https://dev.azure.com/nloh108/msa-devops/_apis/build/status/Neville-Loh.MSA-devops?branchName=master)

# Introduction
This project is developed for the event of Microsoft Student Accelerator New Zealand
2020 Phase 1. A web application is developed and deployed using Microsoft Azure.
The application adapted continuous integrations methodology by using Azure Pipeline.

COVID-19 Web Application link  
https://neville-msa-devops-2020.azurewebsites.net/


### Documentation
  * Azure Pipeline
    * Build Pipeline
    * Release Pipeline
  * Web Application


# Azure Pipeline
Azure pipelines are set up such that testing and deployment can be done in a rapid
fashion. This allows jobs to be execute concurrently.

### Build Pipeline
The pipeline are run automatically when code changes are submit to the master and
development branch in the source repository. When the pipelines are trigger build artefact.
is build by the build agent

### Release Pipeline
The Release pipeline are run automatically when new commit is made to the master
branch. The new web application will be build and deployed using Microsoft Azure
Services.

# Web Application
This is an web application developed using React in typescript. The application
tracks the total confirm cases of the 2020 COVID 19 pandemic,
<img> </img>

## API
https://api.covid19api.com

## Third Party Framework used
* React-Bootstrap
* Axios

## Source Control Methodology
Update of the website is developed in the development branch. Test are carry out
before merging the development branch to master branch.
