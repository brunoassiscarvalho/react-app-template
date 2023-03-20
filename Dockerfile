FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application to container
COPY . .

# Build the application
RUN npm run build

# Expose port for the container
EXPOSE 3000

# Start the application
CMD ["npm", "start"]