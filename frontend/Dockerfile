# Stage 1: Build dell'applicazione React/Vite
FROM node:18-alpine AS builder
WORKDIR /app

# Copia i file di dipendenza e installa
COPY package*.json ./
RUN npm install

# Copia il codice sorgente
COPY . .

# Imposta la variabile d'ambiente per il backend (viene iniettata durante la build)
ARG VITE_API_URL=http://localhost:5000/api
ENV VITE_API_URL=$VITE_API_URL

# Compila l'app per la produzione (crea la cartella /dist)
RUN npm run build

# Stage 2: Server Nginx per servire i file statici
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

# Configurazione Nginx per supportare il React Router (SPA)
RUN echo 'server { listen 80; location / { root /usr/share/nginx/html; index index.html index.htm; try_files $uri $uri/ /index.html; } }' > /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]