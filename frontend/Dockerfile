# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory
WORKDIR /app/frontend

# Copy package.json and package-lock.json (if it exists)
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port on which the app will run
EXPOSE 5173

# Start the application
CMD ["npm", "run", "dev","--", "--host"]
