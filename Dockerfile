# Usa imagem oficial do Node.js
FROM node:18

# Instala o cliente MySQL (e limpa cache depois)
RUN apt-get update && apt-get install -y \
  default-mysql-client \
  && rm -rf /var/lib/apt/lists/*

# Define o diretório de trabalho
WORKDIR /var/www/html

# Copia apenas arquivos de dependências
COPY package*.json ./

# Copia o restante da aplicação
COPY . .

# Expõe a porta da aplicação
EXPOSE 3000

# Comando padrão
CMD ["npm", "run", "dev"]
