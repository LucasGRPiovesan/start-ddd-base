# 🚀 API Base - Node.js, Express, TypeScript, Prisma e DDD
Criei esta API base para acelerar o desenvolvimento de novos projetos no meu dia a dia profissional, com foco em produtividade, padronização e redução de retrabalho. A estrutura segue princípios de DDD (Domain-Driven Design) e utiliza tecnologias como Node.js, Express, TypeScript, Prisma e Jest — formando uma base sólida, escalável e pronta para evoluir conforme a demanda do projeto.

## 📦 Tecnologias Utilizadas
<table> 
  <tr> 
    <td align="center"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="40" alt="Node.js"/><br/> <strong>Node.js</strong> </td> 
    <td align="center"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" width="40" alt="Express"/><br/> <strong>Express</strong> </td> 
    <td align="center"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="40" alt="TypeScript"/><br/> <strong>TypeScript</strong> </td> 
    <td align="center"> <img src="https://raw.githubusercontent.com/prisma/presskit/main/Assets/Prisma-DarkSymbol.svg" width="40" alt="Prisma"/><br/> <strong>Prisma</strong> </td> 
    <td align="center"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" width="40" alt="Jest"/><br/> <strong>Jest</strong> </td> 
    <td align="center"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" width="40" alt="Docker"/><br/> <strong>Docker</strong> </td> 
  </tr> 
</table>

## ✅ Funcionalidades
<ul>
  <li>Estrutura modularizada por domínio</li>
  <li>Integração com banco de dados via Prisma</li>
  <li>Testes automatizados com Jest</li>
  <li>Tipagem completa com TypeScript</li>
  <li>Boas práticas e padrões de projeto</li>
</ul>

## 📂 Scripts disponíveis

```bash
# Instalação de todas as dependências do projeto
npm install
```

```bash
# Inicia a aplicação em modo desenvolvimento com ts-node-dev
npm run dev
```

```bash 
# Gera os arquivos do Prisma Client a partir do schema
npm run prisma:generate
```

```bash 
# Aplica uma nova migração com o nome 'init'
npm run prisma:migrate
```

```bash 
# Executa o script de seed para popular o banco
npm run prisma:seed
```

```bash 
# Remove as migrações, reseta e recria o banco sem aplicar o seed
npm run prisma:refresh
```
