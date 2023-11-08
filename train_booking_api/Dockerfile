FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn global add @nestjs/cli

#Set time zone
ENV TZ="Europe/Paris"

CMD if [ $APP_ENV = 'prod' ]; \
then \
   ./setup.sh; \
   yarn run start:prod; \
else \
    ./setup.sh; \
   yarn run start:dev; \
fi;
