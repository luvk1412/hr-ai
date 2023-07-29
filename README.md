# titan-hr-ai
An Ai assistant which would answer hr related queries for company employees, This can be ideally used for any kind of question answering provided we have the content files on which qna needs to be done. Those dile can be placed inside server/trainingdocs directory

## Client
 
Local standalone run
```bash
cd client
npm start
```
Production Build

```bash
npm run build
```

## Server

Install dependecies

```bash
pip install -r requirements.txt
```

### Training Data
- Training files can be kept inside server/trainingdocs directory. In my case i placed a pdf containing all hr data. You can place text files or html files as well apart from pdf file.
- Run training using below command
```shell
cd server
python training.py
```

### Running the server
Make sure you put OPEN_AI_KEY in a .env file inside server directory and then you can run below instructions. You can check env.sample for example
```bash
python app.py
#or
flask run
```

Production run should be done using gunicorn or uWSGI to support multi threaded requests
```
gunicorn -b 0.0.0.0:8080 app:app
```

## Docker

You can run both client and server using the docker provided docker file in a single container which will serve the UI on port 8080, server will not be server from docker.

Before building docker image
- Create a .env file inside server directory having OPENAI_API_KEY, check .env.sample for example
- Trained chroma db data should be present in server/db. This folder is automatically created once you run training.py as mention in above server section.

Docker build and Run

```
docker build -t titan_ai_hr .
docker run -p 8080:8080 titan_ai_hr
```

