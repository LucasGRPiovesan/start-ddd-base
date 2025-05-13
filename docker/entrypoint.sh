#!/bin/sh

# Fail fast
set -e

echo "Aguardando o banco de dados iniciar..."

# Aguarda o MySQL ficar disponível
until mysqladmin ping -h"$DB_HOST" --silent; do
  sleep 2
done

echo "Banco de dados iniciado!"

# Instala dependências (caso container seja recriado sem cache)
echo "Instalando dependências do Node..."
npm install

# Gera o client do Prisma
echo "Gerando client do Prisma..."
npm run prisma:generate

# Executa as migrations
echo "Executando migrations..."
npm run prisma:migrate

# Executa os seeders
echo "Executando seeders..."
npm run prisma:seed

# Roda testes com Jest
echo "Executando testes com Jest..."
npm run jest:test

# Inicia o servidor de desenvolvimento
echo "Iniciando servidor..."
npm run dev
