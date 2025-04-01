# Good Recipes API

A **Good Recipes API** é um serviço backend desenvolvido com Node.js e Express, utilizando PostgreSQL como banco de dados e Sequelize como ORM.
Este projeto foi criado como parte do trabalho de conclusão de MBA e serve como base para o gerenciamento de receitas culinárias.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no lado do servidor.
- **Express**: Framework web para Node.js.
- **PostgreSQL**: Sistema de gerenciamento de banco de dados relacional.
- **Sequelize**: ORM para Node.js que facilita a interação com bancos de dados SQL.
- **Eslint**: Ferramenta de análise de código para manter a qualidade e consistência.

## Estrutura do Projeto

- `config/`: Configurações da aplicação.
- `controllers/`: Lógica de controle das rotas.
- `models/`: Definição das entidades e modelos do banco de dados.
- `repositories/`: Camada de acesso aos dados.
- `routers/`: Definição das rotas da API.
- `services/`: Implementação da lógica de negócios.
- `utils/`: Funções utilitárias.
- `uploads/`: Diretório para armazenamento de arquivos enviados.
- `.eslintrc.cjs`: Configuração do Eslint.
- `.gitignore`: Lista de arquivos e diretórios a serem ignorados pelo Git.
- `index.js`: Ponto de entrada principal da aplicação.
- `package.json` e `package-lock.json`: Gerenciamento de dependências do npm.

## Como Executar o Projeto

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/taiprogrammer/good-recipes-api.git
   cd good-recipes-api

 2. **Instale as dependências**:

    ```bash
    npm install

 3. **Configure as variáveis de ambiente**:
    Crie um arquivo .env na raiz do projeto com as seguintes variáveis:

    ```bash
    PORT=8080
    USER=seu_usuario_banco_de_dados
    PASSWORD=sua_senha_banco_de_dados
    SECRET_KEY=sua_chave_screta_jwt

4. **Execute as migrações do banco de dados**:

   ```bash
   npx sequelize-cli db:migrate

5. **Inicie a aplicação**:

   ```bash
   npm start

6. **Acesse a API**:

   ```bash
   http://localhost:8080

## Licença

Este projeto está sob a licença [MIT](LICENSE).

Feito com ❤️ por [Taiza Marques](https://github.com/taiprogrammer)
