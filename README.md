# RESTful Web Service using Node, Docker and JSON

This is a REST API created for a CS 612 assignment 5, using the technology of Node.js, Express.js ejs.js, Docker, and Json data.

## Data Model:

The data are stored inside `/companyList.json` and `/jobDescription.json`. see more detail in data and api explain file

```javascript
[{
"name" : "google",
"position":"Software Developer",
"otherposition" : ["2","3"],
"date" : "12-5-2020",
"id": "01"
},{
"name" : "Amazon",
"position":"Full Stack",
"otherposition" : ["1","5","6"],
"date" : "12-6-2020",
"id": "02"
}
    ...
```
## API Endpoints

You can utilize two `GET` endpoints:

[1] / - homepage send out an html file

[2] /listApplied  - returns the full JSON object 

[3] /listApplied/id - returns a company user applied according to the company id requested

[4] /listApplied/id/otherpostions- returns the list of other postion that the company has 

[5] /listApplied/id/otherpostions/jobid - returns the job discription matches the `jobid` requested, if the company dose not have that postion it return a error page


## Setup Instructions:

[without Docker]
- Clone or download the repo
- `cd` into the project root directory
- Run `npm install` to install all dependencies
- Run `node server` to start to node server
- Go to `http://localhost:5000/` to start using the website

[with Docker]
- Clone or download the repo
- `cd` into the project root directory where it have the Dockerfile
- Install Docker if you don't already have it: visit installation instructions for [Mac](https://docs.docker.com/docker-for-mac/install/) or [Windows](https://docs.docker.com/docker-for-windows/install/)
- Run Docker:
  - Build your container: `docker build -t [container-name] .`
  - Start your container:
    - run without a volume: `docker run -it -p 8080:5000 [container-name]` OR
- Go to `http://localhost:8080/[endpoint]` to view the data you want

see the video in 
[youtube](https://www.youtube.com/watch?v=Zq9DoWE8qJg/) 
