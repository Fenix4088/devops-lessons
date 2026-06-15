FROM node:20-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

ARG BUILD_MODE
ARG VITE_NAME
ENV VITE_NAME=${VITE_NAME}

COPY . .
RUN npm run build:${BUILD_MODE}

# ---

FROM nginx:alpine AS runner
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]