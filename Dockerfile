# getting base image cypress
FROM cypress/browsers:node12.18.3-chrome87-ff82
MAINTAINER KS <karishma.shakya@fusemachines.com>
WORKDIR /app-custom
COPY package.json .
RUN npm install

COPY cypress ./cypress
COPY cypress.json .


CMD ["npm","start"]
