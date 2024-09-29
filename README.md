# Documentação do Projeto: EmmaysEdPostsBlog

## Descrição do Projeto

O **EmmaysEdPostsBlog** é um blog desenvolvido com **Next.js** para professores e alunos, focado na publicação e leitura de posts educacionais. Apenas **professores** podem criar e editar posts, enquanto os alunos têm permissão apenas para visualizar os conteúdos. O sistema utiliza autenticação de credenciais (usuário e senha) para login.

## Tecnologias Utilizadas

- **Next.js**: Framework React para renderização híbrida (SSR e SSG).
- **TypeScript**: Para tipagem estática e segurança no desenvolvimento.
- **MongoDB**: Banco de dados NoSQL para armazenar posts e informações de usuários.
- **NestJS**: Framework Node.js para a criação de APIs escaláveis.
- **NextAuth**: Biblioteca para autenticação de usuários utilizando **Credentials** (usuário e senha).
- **Vercel**: Plataforma de hospedagem e CI/CD.

## Funcionalidades

### 1. Autenticação

O sistema utiliza **NextAuth** com o provedor **Credentials** para autenticação de usuários, o que significa que os professores e alunos devem utilizar um e-mail e senha para fazer login. Não há suporte para provedores externos como Google ou Facebook.

### 2. Criação e Edição de Posts

Apenas professores têm permissão para criar e editar posts. As funcionalidades de criação e edição incluem:

- Título do post
- Conteúdo em formato de texto simples ou Markdown
- Não é permitido o upload de imagens

### 3. Painel de Controle (Admin)

Professores com permissões administrativas têm acesso a um painel onde podem gerenciar os posts e usuários do blog. As funcionalidades do painel incluem:

- Remover postagens inapropriadas
- Gerenciar perfis de alunos e professores
- Conceder ou revogar permissões de administrador

## Principais Desafios Durante o Desenvolvimento

Durante o desenvolvimento do **EmmaysEdPostsBlog**, alguns desafios significativos surgiram, exigindo soluções criativas e técnicas:

### 1. Integração entre Next.js e NestJS

A integração entre **Next.js** (para o frontend) e **NestJS** (para a API backend) apresentou desafios técnicos, principalmente na sincronia entre os métodos de chamada de API. Foi necessário definir uma arquitetura clara para o roteamento entre os dois frameworks, garantindo que a troca de dados entre o cliente e o servidor fosse eficiente e segura.

### 2. Autenticação com NextAuth usando Credentials

Implementar a autenticação com **NextAuth** utilizando apenas o provedor de **Credentials** foi um desafio, pois diferentemente de integrações com provedores externos (Google, Facebook), foi necessário implementar a segurança do gerenciamento de senhas e tokens. Garantir que o armazenamento seguro de senhas e a troca de tokens estivesse dentro das boas práticas foi crucial para evitar vulnerabilidades.

### 3. Permissões de Usuários

Gerenciar permissões entre **professores** e **alunos** foi um aspecto fundamental. Foi necessário definir um sistema de permissões, onde apenas os professores pudessem criar e editar posts, enquanto os alunos pudessem apenas visualizar o conteúdo. Esse controle fino exigiu cuidados adicionais para evitar brechas de segurança ou acessos não autorizados.

## Configuração e Instalação

### 1. Requisitos

- **Node.js**: Versão 14 ou superior.
- **MongoDB**: Banco de dados NoSQL.

### 2. Passos de Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/emilytarga/emmaysedpostsblog.git
   ```

2. Instale as dependências:

   ```bash
   cd emmaysedpostsblog
   npm install
   ```

3. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

   ```env
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-nextauth-secret
   ```

4. Inicie o projeto em ambiente de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Acesse o projeto no navegador em `http://localhost:3000`.

### 3. Deploy na Vercel

O **EmmaysEdPostsBlog** está configurado para ser implantado no **Vercel**. Siga os passos abaixo para o deploy:

1. Crie uma conta no [Vercel](https://vercel.com/).
2. Instale a CLI do Vercel:

   ```bash
   npm install -g vercel
   ```

3. Faça login no Vercel:

   ```bash
   vercel login
   ```

4. Execute o comando para fazer o deploy:

   ```bash
   vercel
   ```

5. Siga as instruções no terminal para finalizar o processo.

## Banco de Dados

O projeto utiliza **MongoDB** como banco de dados principal. As coleções armazenam informações sobre usuários e postagens. A conexão com o banco de dados é gerenciada por meio do arquivo `.env`, onde a variável `MONGODB_URI` é configurada com a URL de conexão do MongoDB.

## Contribuindo

1. Faça um fork do repositório.
2. Crie uma nova branch: `git checkout -b minha-feature`.
3. Faça suas alterações e commit: `git commit -m 'Minha nova feature'`.
4. Envie para a branch principal: `git push origin minha-feature`.
5. Crie um pull request.

## Licença

Este projeto está licenciado sob a **MIT License**.

## Integração com o Backend

Para o **EmmaysEdPostsBlog** funcionar corretamente, é necessário integrá-lo com o backend localizado no repositório:

[https://github.com/EmilyTarga/EmmaysEdPostsBlogAPI](https://github.com/EmilyTarga/EmmaysEdPostsBlogAPI)

O backend, desenvolvido com **NestJS**, é responsável por fornecer a API que gerencia a criação, edição e visualização de posts, além da autenticação e autorização de usuários (professores e alunos). Sem essa integração, o blog não será capaz de:

- Criar e armazenar posts no banco de dados MongoDB.
- Validar as permissões dos usuários (professores e alunos).

### Passos para Configurar a Integração

1. Clone o repositório da API em seu ambiente de desenvolvimento:

   ```bash
   git clone https://github.com/EmilyTarga/EmmaysEdPostsBlogAPI.git
   ```

Siga as instruções de configuração da API no arquivo README.md presente no repositório.

Certifique-se de que o backend está rodando corretamente e que o MongoDB esteja conectado.

Atualize as variáveis de ambiente no arquivo .env do frontend para apontar para o endereço da API rodando localmente ou em produção.

Com a API rodando e o frontend configurado corretamente, o EmmaysEdPostsBlog poderá realizar todas as operações de criação e visualização de posts, além de garantir que os dados sejam persistidos no banco de dados e que as permissões de usuário sejam respeitadas.
