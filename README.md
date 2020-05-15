# Easy Skeleton API node.js

Este projeto tem a finalidade para o estudo de node e para a criação rápida de pequenos projetos.

Como é um projeto de estudos, ao ler este documento você pode encontrar alguns links para algumas explicações para mostrar o porque da utilização.

-  [Dependências](https://github.com/Fredrumond/estudos/blob/master/easy-skeleton-api/DEPENDENCIAS.md)

  

## Estrutura
- src
	- app
		- controllers
		- models
			- index.js
	- config
		- database.js
	- database
		- migrations
		- seeders
	- utils
	- app.js
	- routes.js
	- server.js
- tests
- .env.example
- .envt.test.example
- .gitignore
- .huskyrc.json
- .lintstagedrc.json
- .sequelizerc
- jest-integration-config.js
- jest-unit-config.js
- jest.config.js
- package.json

  

## Instruções de uso

  

#### Clonando o repositório

  

Execute o seguinte comando:

  

```terminal

$ git clone https://github.com/Fredrumond/easy-skeleton-api-nodejs.git

```

#### Criando arquivo .env

  

Para criar o arquivo `.env` siga os seguintes passos:

  

- Abra seu terminal e use o seguinte comando `cp .env.example .env` e pronto o `.env` esta criado.

- Abra o arquivo e insira os seguintes parâmetros :

```terminal

NODE_ENV=[development,test,production]

APP_PORT=[porta que vai rodar sua aplicação]

  

## DADOS DO BANCO DE DESENVOLVIMENTO

DB_DEV_SERVER=

DB_DEV_USER=

DB_DEV_PASS=

DB_DEV_NAME=

  

## DADOS DO BANCO DE TESTES

DB_TEST_SERVER=

DB_TEST_USER=

DB_TEST_PASS=

DB_TEST_NAME=

  

## DADOS DO BANCO DE PRODUÇAO

DB_SERVER=

DB_USER=

DB_PASS=

DB_NAME=

```

Obs: Se nao for informado o `NODE_ENV` automaticamente tudo é feito pelo development.

  

#### Instalando pacotes

  

```terminal

$ yarn

```

#### Rodando migration

  

```terminal

$ yarn sequelize db:migrate

```

#### Rodando seeder

  

```terminal

$ yarn sequelize db:seed:all

```

#### Rodando a aplicação

```terminal

$ yarn dev

```

#### Rodando os testes

```terminal

$ yarn test

```

  

A aplicação por padrão tem um modelo de usuário definido para exemplificar o uso da estrutura.

  

É preciso criar um banco de testes para assim ser executados.

  

## Utilizando o projeto

  

#### Criando migration

Como estamos utilizando o `sequelize` , para criar uma migrate é utilizado o seguinte comando:

  

```terminal

$ yarn sequelize migration:create --name=[NOME_MIGRATION]

```

Rodando a migrate:

```terminal

$ yarn sequelize db:migrate

```

Voltando uma migrate:

```terminal

$ yarn sequelize db:migrate:undo

```

#### Criando model

Para criar um model, vai ate `src/app/models` e crie seu model como o exemplo:

``` js

import  Sequelize, { Model } from  'sequelize';

class  SeuModelo  extends  Model {

static  init(sequelize) {

super.init(

{

campo:  Sequelize.STRING,

},

{

sequelize

}

);

  

return  this;

}

}

  

export  default  SeuModelo;

```

#### Registrando seu model

Para registrar um model, vai ate `src/database/index.js` , importa o seu model `import SeuModelo from '../app/models/SeuModelo';` e agora adicione ele em `const models = [Users, SeuModelo];``

  

Pronto, seu model esta registrado.

#### Criando controller

Para criar um controller, vai ate `src/app/controllers` e crie seu controller como o exemplo:

``` js

import  SeuModelo  from  '../models/SeuModelo';

  

class  SeuModeloController {

  

async  store(req,res) {

// Insira aqui seu codigo

}

  

async  index(req, res) {

// Insira aqui seu codigo

}

  

async  show(req,res) {

// Insira aqui seu codigo

}

  

async  update(req,res) {

// Insira aqui seu codigo

}

  

async  delete(req,res) {

// Insira aqui seu codigo

}

}

  

export  default  new  SeuModeloController();

  

```

#### Criando rotas

Para criar uma rota, vai ate `src/routes.js` e crie sua rota como o exemplo:

  

``` js

import  SeuModeloController  from  './app/controllers/SeuModeloController';

  

routes.post('/nomerota', SeuModeloController.store);

routes.get('/nomerota', SeuModeloController.index);

routes.get('/nomerota/:id', SeuModeloController.show);

routes.put('/nomerota/:id', SeuModeloController.update);

routes.delete('/nomerota/:id', SeuModeloController.delete);

  

````

#### Criando  testes

Para  criar  uma  teste, vai  ate  `tests`  e  crie  seu  arquivo  de  teste  como  o  exemplo:

- Crie  um  arquivo  dentro  de  tests  `meuteste.test.js`

``` js

  

import request from 'supertest';

import app from '../src/app';

  

describe('Test Endpoints', () => {

it('should return all registers', async () => {

const res = await request(app)

.get('/nomerota')

expect(res.statusCode).toEqual(200)

});

})

```