FROM node:18.19.0-alpine3.18

# Set working directory
WORKDIR /usr/app

# Install PM2 globally
RUN npm install --global pm2

COPY ./package*.json ./

# Install dependencies
RUN npm install
RUN npm rebuild node-sass

# Copy all files
COPY ./ ./

# Build app
RUN npm run build

# Expose the listening port
EXPOSE 3000

USER node

# Launch app with PM2
CMD [ "pm2-runtime", "start", "npm", "--", "start" ]