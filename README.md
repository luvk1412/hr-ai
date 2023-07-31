# titan-hr-ai
An Ai assistant which would answer hr related queries for company employees, This can be ideally used for any kind of question answering provided we have the content files on which qna needs to be done. Those dile can be placed inside server/trainingdocs directory

> *_Wish to contribute ? Check [Things to contribute](#Things-which-can-be-Improved)_*

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

## Docker Run

You can run both client and server using the docker files provided seperately or you can run both together using the provided docker-compose

## Things which can be Improved
Feel free to submit PR's for any of the below things or anything else as well you think can be improved.
- UI: I am a noob in frontend, so UI has been kept simple, but maybe ther ecan
- Dataset: THe dataset which I have used currently is a long pdf having full HR data. A lot of things can be done if database is better.
  - As data while converting to vectors is split in chunks, the chunks might include text of two articles as their is no bifuraction between articales in dataset. So dataset can be provided as multiple files. Each file listing only a particular topic.
  - Reference Link for actual articles. If each articles is split into seperate files in dataset, each file can also have a meta file, which has any data which needs to be shown to a user including link of the article.
- Feel free to submit PR, raise issue or catch me for anything else which can be improved.