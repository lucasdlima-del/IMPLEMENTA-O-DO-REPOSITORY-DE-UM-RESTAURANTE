Sistema de Restaurante — Repository
Integrante: Lucas Demartini de Lima

Descrição
Sistema de gerenciamento de restaurante desenvolvido em TypeScript, utilizando o padrão Repository e arrays para armazenar os dados em memória.

O projeto permite cadastrar pratos, funcionários contratados, freelancers e entregas, além de gerar relatórios.

Funcionalidades
Cadastro e consulta de pratos, com nome, validade e nacionalidade.
Cadastro de funcionários com nome, sexo, data de contratação, CPF e RG.
Controle de funcionários contratados com salário fixo.
Controle de freelancers com salário por hora e data de fim do contrato.
Consulta de contratos ativos e tempo restante.
Registro de horas trabalhadas.
Relatório de salários.
Relatório de funcionários trabalhando.
Relatório de pratos.
Relatório de entregas com data, hora, número do pedido e endereço.
Tecnologias utilizadas
TypeScript
Node.js
Arrays para armazenamento em memória
Padrão Repository
Como executar o projeto
Pré-requisitos
Instale o Node.js e o npm.

1. Instalar as dependências
Na pasta do projeto, execute:


npm install
2. Executar diretamente em modo de desenvolvimento

npm run dev
3. Compilar e executar o projeto

npm run build
npm start
Os relatórios serão exibidos no terminal.

Estrutura de pastas

src/
├── models/
│   ├── Prato.ts
│   ├── Funcionario.ts
│   ├── FuncionarioContratado.ts
│   ├── Freelancer.ts
│   └── Entrega.ts
├── repositories/
│   ├── PratoRepository.ts
│   ├── FuncionarioRepository.ts
│   └── EntregaRepository.ts
└── index.ts
Armazenamento
Os dados são armazenados em arrays na memória e ao encerrar o programa, os dados cadastrados são perdidos.