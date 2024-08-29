# Use a imagem base do Node.js
FROM node:16-alpine

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie o arquivo package.json e o package-lock.json
COPY package*.json ./

# Instale as dependências
RUN npm install

# instale axios
RUN npm install axios

# Copie o restante do código do frontend
COPY . .

# Compile o projeto React
RUN npm run build



# Use um servidor estático para servir o build
RUN npm install -g serve

# Expõe a porta que será usada
EXPOSE 3000

# Comando para rodar o servidor estático
CMD ["serve", "-s", "build", "-l", "3000"]
