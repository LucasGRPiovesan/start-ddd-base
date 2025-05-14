# 🚀 BASE DDD API / Node.js, Express, TypeScript and Prisma
I created this base API to speed up the development of new projects in my day-to-day work, with a focus on productivity, standardization and reduction of rework. The structure follows DDD (Domain-Driven Design) principles and uses technologies such as Node.js, Express, TypeScript, Prisma and Jest — forming a solid, scalable base that is ready to evolve according to the project's demands.

## 📦 Technologies
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

## ✅ Features
<ul>
  <li>Domain modularized structure</li>
  <li>Database integration by Prisma</li>
  <li>Automated Testing with Jest</li>
  <li>Complete typing with TypeScript</li>
  <li>Good practices and design patterns</li>
</ul>

## 📍 Running

### 🐳 With Docker (Recommended)
> ⚠️ **Prerequisites:** Make sure [Docker](https://www.docker.com/get-started) and [Docker Compose](https://docs.docker.com/compose/install/) are installed and running properly on your machine.

1. Clone the repository:
```bash
git clone https://github.com/LucasGRPiovesan/start-ddd-base-api.git
cd start-ddd-base-api/
```

2. Copy the ***.env.example*** file to ***.env***, adjust the variables according to your environment, config the docker-compose.override.yml file for services and, on schema.prisma configuration file, you need to config the provider as your preference: 
```bash
datasource db {
  provider = "mysql" // Update here
  url      = env("DATABASE_URL")
}
```

3. Run containers with Docker Compose:
```bash
docker-compose up --build
```

> 💡 Orchestration scripts in Docker take care of installing dependencies, applying migrations, running tests and starting the server automatically. To run the scripts configured in package.json, run inside the container. 

<hr>

### 🔧 Without Docker (Manual Execution)
> ⚠️ **Prerequisites:** You must have Node.js, npm and your preferred database installed locally.

1. Clone the repository:
```bash
git clone https://github.com/LucasGRPiovesan/start-ddd-base-api.git
cd start-ddd-base-api/
```

2. Install the dependencies:
```bash
npm install
```
3. Copy the ***.env.example*** file to ***.env***, adjust the variables according to your environment and, on schema.prisma configuration file, you need to config the provider as your preference:
```bash
datasource db {
  provider = "mysql" // Update here
  url      = env("DATABASE_URL")
}
```

4. Configure the database in .env and generate a Prisma Client
```bash 
npm run prisma:generate
``` 

5. Run the migrations:
```bash 
npm run prisma:migrate
```

6. Load the database with seeders (optional):
```bash 
npm run prisma:seed
```

7. Finally, run the application with the command below:
```bash 
npm run dev
```

<hr>

> 💡 By default, Prisma generates migration versioning based on updates to the structure in schema.prisma. For greater convenience in a development environment, use the command below to clean and reset the database, keeping it always up to date:
```bash 
# Removes migrations, resets and recreates the database without applying the seed
npm run prisma:refresh
```
