FROM node:8 as builder

RUN mkdir /opt/desafio-ui-source

WORKDIR /opt/desafio-ui-source

COPY . .

RUN yarn install && \
	yarn pre-build && \
	npm run build

FROM nginx:stable-alpine-perl

ENV APP /opt/desafio-ui

RUN mkdir -p $APP

COPY --from=builder /opt/desafio-ui-source/build $APP/desafio-web
