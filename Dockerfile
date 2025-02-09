# Use Node.js LTS (Long Term Support) version
FROM node:20-slim

# Create app directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy app source code including public directory
COPY src/ ./src/

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"] 