# Easy Skeleton API node.js

Este projeto tem a finalidade para o estudo de node e para a criação rápida de pequenos projetos.

Como é um projeto para praticas de estudos, ao ler este documento você pode encontrar alguns links para algumas explicações para mostrar o porque da utilização e como esta configurado.

- [Dependências](https://github.com/Fredrumond/estudos/blob/master/easy-skeleton-api/DEPENDENCIAS.md)
- [Husky](https://github.com/Fredrumond/estudos/blob/master/easy-skeleton-api/HUSKY.md)
- [Lint staged](https://github.com/Fredrumond/estudos/blob/master/easy-skeleton-api/LINTSTAGED.md)
- [Standard](https://github.com/Fredrumond/estudos/blob/master/easy-skeleton-api/STANDARD.md)
- [Scripts no package.json](https://github.com/Fredrumond/estudos/blob/master/easy-skeleton-api/SCRIPTS.md)
- [Estrutura](https://github.com/Fredrumond/estudos/blob/master/easy-skeleton-api/ESTRUTURA.md)
- [Changelog](https://github.com/Fredrumond/estudos/blob/master/easy-skeleton-api/CHANGELOG.md)

 ## Instruções de uso

#### Clonando o repositório

Execute o seguinte comando:
```terminal
$ git clone https://github.com/Fredrumond/easy-skeleton-api-nodejs.git
```

#### Criando arquivo .env

Para criar o arquivo `.env`  e o `.env.test` siga os seguintes passos:

- Abra seu terminal e use o seguinte comando `cp .env.example .env` e pronto o `.env` esta criado.
- - Abra seu terminal e use o seguinte comando `cp .env.test.example .env.test` e pronto o `.env.test` esta criado.

- Abra os arquivo e complete as variáveis de acordo com suas configurações

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
module.exports = (sequelize, DataTypes) => {
	const  User = sequelize.define('SeuModelo',
	{
		campo:  DataTypes.STRING,
		campo:  DataTypes.STRING
	})
	return  SeuModelo
}
```
#### Criando a rota

Para criar uma rota, vai ate `src/presentation/routers` e crie sua rota como o exemplo:

Exemplo: `nome-rota-routers.js` o prefixo `-routers` é obrigatório para o funcionamento dinâmico das rotas.

``` js
const  HttpResponse = require('../helpers/http-response')

module.exports = class  NomeDaSuaRouter {
	constructor (dependencia) {
		this.dependencia = dependencia
	}
	async  route (httpRequest) {
		// Insira aqui seu codigo
	}
}
```

#### Registrando rota

Para registrar uma rota, vai ate `src/main/routes/sua-rota.js` e crie sua rota como o exemplo:

``` js

const { adapt } = require('../adapters/express-router-adapter')
const  SuaRouterComposer = require('../composers/sua-rota-router-composer')

module.exports = router  => {
	router.post('/nomerota', adapt(SuaRouterComposer.compose()))
	router.get('/nomerota', adapt(SuaRouterComposer.compose()))
	router.get('/nomerota/:id', adapt(SuaRouterComposer.compose()))
	router.put('/nomerota/:id', adapt(SuaRouterComposer.compose()))
	router.delete('/nomerota/:id', adapt(SuaRouterComposer.compose()))
}

```

#### Criando  testes

Para  criar  uma  teste, vai  ate  `tests`  e veja se seu teste é  `unitario` ou `integragração` (você pode encontrar mais detalhes dessa separação  [clicando aqui](https://github.com/Fredrumond/estudos/blob/master/easy-skeleton-api/TESTES.md) ) e  crie  seu  arquivo  de  teste  como  o  exemplo:

- Crie  um  arquivo  dentro  de  tests  `tests/integration/meuteste.test.js`

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

## Em desenvolvimento
- Explicação do workflow do projeto
- Autenticação do usuário utilizando JWT
- Recuperação de senha
- Foto de perfil

## Deseja contribuir?

 1. Fork it
 2. Crie sua branch ( git checkout -b minha-contribuicao )
 3. Confirme suas alterações ( git commit -m 'Adicionando minhas melhorias' )
 4. Push a sua branch ( git push origin minha-contribuicao )
 5. Crie o Pull Request
 6. Aguarde aprovação