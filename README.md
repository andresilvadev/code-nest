## Descrição

Como iniciar com projeto Nest.js com Docker

## Instalação

* Crie o volume do MySQL
``` bash
$ npm install
```
* Execute o projeto com o Docker usando a flag -d para deixar em background a aplicação:
``` bash
$ docker-compose up -d
```
* Acesse http://localhost:8080 para acessar o banco através do admininer
- Selecione o sistema **PostgreSQL**
- Informe o servidor **pgsql** no caso o nome do container 
- Informe o usuário **pguser** 
- Informe a senha **pgpassword**
- Informe o banco **nestjsdb**

## Rodar o projeto
* Acesse a pasta do projeto nestjs e rode o comando abaixo
``` bash
$ npm run start:dev
```

* Acesse http://localhost:3000 para acessar o Nest.js


## Dependencias utilizadas

* Nest instalado de forma global
``` bash
$ npm i -g @nestjs/cli
```

* Typeorm e o Postgres
``` bash
$ npm i --save typeorm @nestjs/typeorm pg
```