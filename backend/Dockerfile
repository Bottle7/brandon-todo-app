###################################
#              BASE               #
###################################
FROM node:18.12.1-bullseye-slim as base

# Create an app directory
WORKDIR /usr/src/app

# Install Project Specific Dependencies
COPY package*.json ./
RUN npm install

# Expose port and run app in watch mode
EXPOSE 3000
CMD ["npm",  "run", "start:dev"]