# Build from super lean image
FROM node:18.12.1-bullseye-slim

# Create container working directory
WORKDIR /usr/src/app

# Copy dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy everything else over
COPY . .

# Expose default Vite port
EXPOSE 5000

# Vite entrypoint
CMD ["npm", "run", "dev"]
