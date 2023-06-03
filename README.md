
# barchart_builder

A simple Web application that builds customized bar charts based on options provided by users using chart.js.




## Authors

- [@Kreshsv](https://www.github.com/Kreshsv)


## Installation

For Windows

```bash
  py -m pip install Flask
```
For Linux

```bash
  pip3 install Flask
```
    
    
## Run Locally

Clone the project

```bash
  https://github.com/Kreshsv/barchart_builder.git
```

Go to the project directory

```bash
  cd <project_directory>
```

Install dependencies

```bash
  py -m pip install -r requirements.txt
```

Start the server

```bash
  py app.py
```


## Deployment
For Windows

```bash
  py app.py
```

For Linux

```bash
  python3 app.py
```
Note: Please follow this deployment method for local server alone. This is only a development server, which poses several security risks, when made public. 


## Tech Stack

**Client:** Javascript, HTML, CSS

**Server:** python, flask


## Screenshots

![Application Screenshot](https://github.com/Kreshsv/barchart_builder/blob/main/res_for_readme/output_gif.gif)


## Documentation

[Flask Documentation](https://flask.palletsprojects.com/en/2.3.x/)


## Lessons Learned
It is a basic web application that demonstrates how one can use chartjs with a flask server. 

I tried using the chartjs API to directly fetch custom charts by getting user input and creating the http GET request based on the obtained input using jinja. Since I got several troubles in this approach, I turned to chartjs CDN.

I would sincerly acknowledge anyone who is willing to fork this project and implement the same using chartjs API. 

Further I have not implemented dynamic inputs in the html form. I'm looking for developers to add these additional fetures to my code. 

