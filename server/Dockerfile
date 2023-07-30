FROM python:3.11-slim-bookworm
WORKDIR /app
COPY requirements.txt /app/requirements.txt
RUN apt-get update && apt-get install build-essential -y
RUN pip install --upgrade pip && pip install --no-cache-dir -r requirements.txt
COPY . /app/

ENV OPENBLAS_NUM_THREADS=1
EXPOSE 8080
# timeout of 120 was not required on my local but loading models on ec2 was timing out
CMD ["gunicorn", "-b", "0.0.0.0:8080", "app:app", "--timeout", "120"]