FROM node:23-alpine

# Install pnpm
RUN npm install -g pnpm

# Set working directory
WORKDIR /app

# Copy the project files
ADD package.json package.json

# Install dependencies using pnpm
RUN pnpm install

COPY . .

# Expose port (if needed)
EXPOSE 3000

RUN pnpm run build

CMD ["pnpm", "run", "start"]
