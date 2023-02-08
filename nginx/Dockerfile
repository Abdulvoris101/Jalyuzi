FROM nginx:1.21-alpine

COPY nginx/nginx.conf /etc/nginx/conf.d

RUN rm /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]