FROM python:3.11-slim-bookworm
WORKDIR /app
COPY ./client/build /app/clientbuild
COPY ./server /app/
RUN apt-get update && apt-get install build-essential -y

RUN pip install --upgrade pip && pip install --no-cache-dir -r requirements.txt

EXPOSE 8080

CMD ["gunicorn", "-b", "0.0.0.0:8080", "app:app"]