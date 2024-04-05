# pass.in

O pass.in é uma aplicação de **gestão de participantes em eventos presenciais**. 

A ferramenta permite que o organizador cadastre um evento e abra uma página pública de inscrição.

Os participantes inscritos podem emitir uma credencial para check-in no dia do evento.

O sistema fará um scan da credencial do participante para permitir a entrada no evento.

### Requisitos funcionais

- [x] O organizador deve poder cadastrar um novo evento;
- [x] O organizador deve poder visualizar dados de um evento;
- [x] O organizador deve poser visualizar a lista de participantes; 
- [x] O participante deve poder se inscrever em um evento;
- [x] O participante deve poder visualizar seu crachá de inscrição;
- [x] O participante deve poder realizar check-in no evento;

### Regras de negócio

- [x] O participante só pode se inscrever em um evento uma única vez;
- [x] O participante só pode se inscrever em eventos com vagas disponíveis;
- [x] O participante só pode realizar check-in em um evento uma única vez;

### Requisitos não-funcionais

- [x] O check-in no evento será realizado através de um QRCode;

## Como rodar o programa

- Faça o git clone
- Abra a pasta no termianl e execute o comando: `npm install` para instalar as dependências
- Para inciar o bando de dados: `npx prisma migrate dev`
- Para iniciar o servidor: `npm run dev`
- Abrir o banco de dados na web: `npx prisma studio`
- Para gerar a build do projeto: `npm run build`
- Rodar o projeto em produção executando a pasta dist: `npm run start`

obs: edite o arquivo `.env-example` para `.env` antes de rodar `migrate dev`  

## Documentação da API (Swagger)

Para documentação da API, rode o projeto e acesse o link: http://localhost:3333/docs/

## Banco de dados

Nessa aplicação vamos utilizar banco de dados relacional (SQL). Para ambiente de desenvolvimento seguiremos com o SQLite pela facilidade do ambiente.

## Ao infinito e além

- Não deixar o id Auto-increment diretamente na URL "http://localhost:3333/attendees/5/check-in" - usar o nanoid