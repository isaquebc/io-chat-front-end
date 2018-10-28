FROM node:9.10.1

# Environment variables
ARG NODE_ENV
ARG API_ENDPOINT
ARG UA_ANALYTICS
ARG MOBILE_ENDPOINT
ARG GOOGLE_GEOCODE_KEY
ARG PAYPAL_CLIENT_ID
ARG PAGARME_TOKEN

# path to run commands
WORKDIR /usr/src/app

# copy package json
COPY package*.json ./

# Install dependecies
RUN npm install

# Install webpack
RUN npm install -g webpack@4.6.0 webpack-cli

# Copy all files of the project
COPY . .

# port to execute
EXPOSE 8080

# Run webpack
RUN webpack

CMD ["npm", "start"]