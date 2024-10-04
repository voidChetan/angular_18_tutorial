# Step 1: Build Angular Application
# Use official Node.js image as the base image
FROM node:20-alpine AS build

# Set working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular application
RUN npm run build --prod

# Step 2: Serve Application with Nginx
# Use official Nginx image as the base image
FROM nginx:1.25-alpine

# Copy the build output to the Nginx html directory
COPY --from=build /app/dist/angular-18-tutorial /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
