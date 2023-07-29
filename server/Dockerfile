FROM python:3-alpine

ENV PYTHONBUFFERED 1

WORKDIR /app

COPY ./req.txt /app/

RUN pip install -r req.txt

COPY . /app
COPY scripts/start_prod.sh /app/
RUN apk add --update --no-cache build-base
RUN chmod +x start_prod.sh


