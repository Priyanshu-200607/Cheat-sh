import { Category } from './types';

export const dockerData: Category = {
  id: 'docker',
  title: 'Docker',
  icon: '🐳',
  color: '#2496ed',
  gradient: 'linear-gradient(135deg, #2496ed, #0db7ed)',
  description: 'Docker container lifecycle, image building, volume management, networking, Compose, and Dockerfile reference',
  sections: [
    {
      id: 'containers',
      title: 'Containers & Lifecycle',
      snippets: [
        {
          code: `# Run container from image (interactive, TTY, mapping ports)
docker run -it -p 8080:80 nginx

# Run container in background (detached mode)
docker run -d --name my-web nginx

# Run container and automatically remove it on exit
docker run --rm -d Alpine sleep 10`,
          description: 'Run container with various options',
          language: 'bash'
        },
        {
          code: `# List running containers
docker ps

# List all containers (running & stopped)
docker ps -a

# View container stats (CPU, Memory, Net I/O)
docker stats`,
          description: 'List and monitor containers',
          language: 'bash'
        },
        {
          code: `# Start a stopped container
docker start my-web

# Stop a running container
docker stop my-web

# Restart a container
docker restart my-web`,
          description: 'Control container lifecycle',
          language: 'bash'
        },
        {
          code: `# Run a command inside a running container
docker exec -it my-web bash

# Run command as root in background
docker exec -d my-web touch /tmp/healthcheck`,
          description: 'Execute commands inside active containers',
          language: 'bash'
        },
        {
          code: `# View container logs
docker logs my-web

# Follow logs output in real-time
docker logs -f my-web

# View last 100 log lines
docker logs --tail 100 my-web`,
          description: 'Access container standard output logs',
          language: 'bash'
        },
        {
          code: `# Delete a stopped container
docker rm my-container

# Force delete a running container
docker rm -f my-container

# Remove all stopped containers
docker container prune`,
          description: 'Remove containers from system',
          language: 'bash'
        }
      ]
    },
    {
      id: 'images',
      title: 'Images & Registry',
      snippets: [
        {
          code: `# Build image from Dockerfile in current directory
docker build -t my-app:1.0.0 .

# Build without using cache
docker build --no-cache -t my-app:1.0.0 .`,
          description: 'Build Docker images',
          language: 'bash'
        },
        {
          code: `# List local images
docker images

# Tag an existing image for a registry
docker tag my-app:1.0.0 username/my-app:1.0.0`,
          description: 'Manage and tag local images',
          language: 'bash'
        },
        {
          code: `# Log in to Docker Registry
docker login

# Push image to registry
docker push username/my-app:1.0.0

# Pull image from registry
docker pull nginx:alpine`,
          description: 'Distribute images via registries',
          language: 'bash'
        },
        {
          code: `# Remove an image
docker rmi my-app:1.0.0

# Remove unused/dangling images
docker image prune -a

# Show history of an image
docker history my-app:1.0.0`,
          description: 'Delete and inspect image layers',
          language: 'bash'
        }
      ]
    },
    {
      id: 'volumes-networking',
      title: 'Volumes & Networking',
      snippets: [
        {
          code: `# Create a named volume
docker volume create my-data

# List volumes
docker volume ls

# Inspect volume details
docker volume inspect my-data

# Mount named volume to container
docker run -d -v my-data:/app/data nginx

# Mount local directory (bind mount)
docker run -d -v $(pwd)/src:/app/src nginx

# Remove volume
docker volume rm my-data`,
          description: 'Persist container data with volumes',
          language: 'bash'
        },
        {
          code: `# List networks
docker network ls

# Create custom network (bridge type)
docker network create my-net

# Run container attached to custom network
docker run -d --name db --network my-net postgres

# Connect existing container to network
docker network connect my-net my-web

# Inspect network members
docker network inspect my-net`,
          description: 'Configure networking and communication between containers',
          language: 'bash'
        }
      ]
    },
    {
      id: 'compose',
      title: 'Docker Compose',
      snippets: [
        {
          code: `# Start all services defined in docker-compose.yml
docker compose up

# Start in background (detached mode)
docker compose up -d

# Force build before starting
docker compose up -d --build`,
          description: 'Start Compose application services',
          language: 'bash'
        },
        {
          code: `# Stop and remove containers, networks, and volumes
docker compose down

# Stop containers but keep volumes
docker compose down --volumes`,
          description: 'Teardown Compose stack',
          language: 'bash'
        },
        {
          code: `# View logs of all services
docker compose logs -f

# View logs for a single service
docker compose logs -f web`,
          description: 'Inspect multi-container logs',
          language: 'bash'
        },
        {
          code: `# List status of services
docker compose ps

# Run command inside service container
docker compose exec web npm run db:migrate`,
          description: 'Manage running services',
          language: 'bash'
        }
      ]
    },
    {
      id: 'dockerfile',
      title: 'Dockerfile Reference',
      snippets: [
        {
          code: `# Base image specification
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy files from host to container
COPY package*.json ./
COPY . .

# Run build-time commands (creates a layer)
RUN npm install && npm run build

# Expose port (metadata, doesn't open port)
EXPOSE 3000

# Environment variables
ENV NODE_ENV=production

# Default executable command when container starts
CMD ["npm", "start"]`,
          description: 'Standard single-stage Dockerfile example',
          language: 'dockerfile'
        },
        {
          code: `# --- Build Stage ---
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# --- Production Stage ---
FROM nginx:alpine
COPY --from=builder /app/out /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]`,
          description: 'Multi-stage build Dockerfile (keeps final image tiny)',
          language: 'dockerfile'
        }
      ]
    }
  ]
};
