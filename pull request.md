# Descrição

Este Pull Request implementa uma aplicação web completa para gerenciamento de listas de tarefas (to-do lists) utilizando Laravel no backend e React no frontend. A aplicação permite criar, ler, atualizar e excluir tarefas, com funcionalidades como marcar tarefas como favoritas, definir cores e manter a responsividade e usabilidade no frontend. A aplicação foi desenvolvida seguindo boas práticas de desenvolvimento, com a utilização de design patterns e contêinerização via Docker.

# Backend - Laravel

**O que é Laravel?**  
Laravel é um framework PHP que adota o padrão MVC (Model-View-Controller), proporcionando um ambiente rico para o desenvolvimento de aplicações web robustas e escaláveis. Ele oferece uma série de recursos integrados como autenticação, fila, notificações e muito mais, além de ser conhecido pela simplicidade e elegância do código.

## Estrutura do Backend

```text
app/
│   DTOs/
│   ├── TodoDTO.php                 # Define a estrutura dos dados de tarefas
│   Http/
│   ├── Controllers/
│   │   ├── Api/
│   │   │  ├── TodoController.php  # Controlador responsável pelo CRUD de tarefas
│   ├── Requests/
│   │  ├── TodoRequest.php          # Validação de dados de entrada
│   Models/
│   ├── Todo.php                    # Modelo de tarefas, com Soft Delete habilitado
│   ├── User.php                    # Modelo de usuário
│   Repositories/
│   ├── TodoRepository.php          # Camada de abstração para acesso a dados
│   Services/
│   ├── TodoService.php             # Lógica de negócios das tarefas
database/
│   migrations/
│   ├── create_todos_table.php      # Migração para criação da tabela de tarefas
routes/
│   ├── api.php                     # Definição das rotas da API RESTful


## Explicação do Backend:

- Controllers: Recebem requisições HTTP e delegam as operações para o serviço (TodoService). O TodoController é responsável por gerenciar as tarefas com as operações CRUD.

- Models: Representam os dados da aplicação. O modelo Todo.php contém a definição da tarefa e implementa Soft Delete, permitindo a exclusão suave das tarefas, ou seja, elas são marcadas como deletadas sem serem removidas do banco de dados.

- DTOs (Data Transfer Objects): O TodoDTO.php encapsula e valida os dados trafegados entre o frontend e o backend, garantindo que apenas dados válidos sejam processados.

- Repositories: O TodoRepository.php abstrai o acesso direto ao banco de dados, tornando o código mais modular e seguindo o princípio de separação de responsabilidades.

- Services: O TodoService.php contém a lógica de negócios, manipulando as operações das tarefas. Ele comunica-se com o repositório para realizar operações no banco de dados.

- Requests: O TodoRequest.php é responsável pela validação dos dados de entrada no backend.

- Eloquent ORM: Laravel utiliza o Eloquent ORM para facilitar a interação com o banco de dados. O Eloquent é uma implementação de Active Record, permitindo que as tabelas sejam mapeadas para modelos PHP. As consultas ao banco de dados são executadas de maneira simples e intuitiva.

## Design Patterns Aplicados

- Repository Pattern: Usado para isolar a lógica de acesso a dados, o que facilita a manutenção e testes.
- Service Layer Pattern: Separa a lógica de negócios dos controladores, garantindo um código mais limpo e organizado.

## Boas Práticas
- Soft Delete: Implementado no modelo Todo.php utilizando o trait SoftDeletes, que permite "deletar" registros sem removê-los fisicamente.
- Validação de Dados: Feita através do TodoRequest.php, seguindo as diretrizes de segurança e garantindo que o backend só receba dados válidos.
- DTOs: Utilizados para manter o fluxo de dados entre cliente e servidor eficiente e seguro.

Frontend - React
O que é React?
React é uma biblioteca JavaScript usada para construir interfaces de usuário. Ele permite criar componentes reutilizáveis e facilita a gestão de estados, o que torna o desenvolvimento de UIs interativas mais eficiente.Ele é baseado em componentes, permitindo a criação de interfaces complexas através da composição de componentes simples e reutilizáveis. React também é conhecido por seu uso eficiente do DOM virtual, o que melhora o desempenho das aplicações.


Estrutura do Frontend

src/
│   api/
│   ├── axios.js
│   assets/
│   └── icons/              # Diretório para ícones usados nas notas
│   components/
│   ├── Header.js           # Componente para o cabeçalho
│   ├── Note.js             # Componente para cada nota
│   ├── NoteForm.js         # Componente para adicionar notas
│   ├── NoteList.js         # Componente para listar notas
│   services/
│   ├── todo/
│   │   ├── index.js
│   ├── index.js
│   styles/
│   ├── App.css             # Estilos globais
│   ├── Header.css          # Estilos do cabeçalho
│   ├── Note.css            # Estilos das notas
│   ├── NoteForm.css        # Estilos do formulário de notas
│   ├── NoteList.css        # Estilos da lista de notas
│   App.js                  # Componente principal
│   index.js                # Arquivo de entrada principal

## Explicação do Frontend

- Componentização: O frontend foi construído de maneira modular, dividindo a interface em componentes menores e reutilizáveis como Header, Todo, TodoForm, e TodoList.

- State Management: O gerenciamento de estado foi feito usando os hooks useState e useEffect do React, para manipular e atualizar dinamicamente as tarefas exibidas na interface.

- Axios: A biblioteca Axios foi utilizada para realizar as requisições HTTP ao backend. Ela facilita a comunicação entre o frontend e o backend, permitindo operações como criação, leitura, atualização e exclusão de tarefas.

- Responsividade: A aplicação foi desenhada para ser responsiva, utilizando CSS puro para ajustar a exibição da interface em diferentes dispositivos.

## Docker
O que é Docker?
Docker é uma plataforma que permite criar, testar e implantar aplicações rapidamente em contêineres. Contêineres são unidades leves que contêm tudo o que uma aplicação precisa para rodar, incluindo bibliotecas e dependências, garantindo que o software funcione de forma consistente em diferentes ambientes.

Docker no Projeto
No projeto, Docker foi utilizado para criar contêineres tanto para o backend quanto para o frontend. Os contêineres são definidos em arquivos Dockerfile, que especificam as dependências necessárias, comandos de construção e portas a serem expostas.

root/
├── corelab-api-challenge-php (Backend-Laravel)
│   └── Dockerfile
├── corelab-challenge-web-app-php (RFrontend-React)
│   └── Dockerfile
└── docker-compose.yml

Resumo Técnico
DTO (Data Transfer Object): Utilizado para definir e validar a estrutura dos dados que trafegam entre o cliente e o servidor.
Axios: Biblioteca para realizar requisições HTTP de forma simplificada, utilizada no frontend para comunicação com o backend.
Laravel: Backend robusto e modular, utilizando DTOs, serviços, repositórios e Eloquent ORM.
React: Frontend responsivo e modular, utilizando hooks e Axios para requisições HTTP.
Docker: Contêinerização para facilitar o deploy e garantir consistência entre ambientes de desenvolvimento e produção.
Soft Delete: Implementado para garantir a integridade dos dados ao deletar tarefas sem removê-las permanentemente.

Como Executar o projecto:
Clone os Repositórios dentro do mesmo diretório:

Frontend: git clone https://github.com/RuiYuriAfricano/corelab-challenge-web-app-php
Backend: git clone https://github.com/RuiYuriAfricano/corelab-api-challenge-php 
Dentro do diretório em que se clonou, deve-se colar o arquivo docker-compose.yml (que se encontra dentro do diretório corelab-challenge-web-app-php):


Build e Start dos Contêineres:
docker-compose up --build

Após a execução, terá acesso ao project:

Frontend: Acesse http://localhost:3000
Backend: Acesse http://localhost:8000