FROM nginx:1.21-alpine
frontend  | > eval $(grep '^NUXT_HOST' .env) $(grep '^NUXT_PORT' .env) node .output/server/index.mjs

COPY nginx/nginx.conf /etc/nginx/conf.d

RUN rm /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]