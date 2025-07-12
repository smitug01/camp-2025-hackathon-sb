# Use Node.js LTS as base image
FROM node:20-alpine

# Install pnpm using corepack
RUN corepack enable && corepack prepare pnpm@10.9.0 --activate

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Install dependencies (including both dependencies and devDependencies for build)
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build the application
RUN pnpm run build

# Install only production dependencies
RUN pnpm install --frozen-lockfile --prod

# Expose port 8080
EXPOSE 8080

# Start the preview server
CMD ["pnpm", "run", "preview", "--host", "0.0.0.0", "--port", "8080"]