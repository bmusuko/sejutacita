FROM node:12-alpine

# Add package file
COPY package*.json ./

# Install deps
RUN yarn

# Copy source
COPY src ./src
COPY tsconfig.json ./tsconfig.json

# Build dist
RUN yarn build

# Expose port 8081
EXPOSE 8081

CMD yarn start
