# 🚀 Serverest API Cypress

[![CI](https://github.com/SEU-USUARIO/SEU-REPOSITORIO/actions/workflows/ci.yml/badge.svg)](https://github.com/SEU-USUARIO/SEU-REPOSITORIO/actions/workflows/ci.yml)

![Cypress](https://img.shields.io/badge/Cypress-14.x-brightgreen)
![Node.js](https://img.shields.io/badge/Node.js-20.x-green)
![API Testing](https://img.shields.io/badge/API%20Testing-Automated-success)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)

Projeto de automação de testes de API utilizando Cypress para validação dos principais recursos da API Serverest.

---

# 📋 Sobre o Projeto

Este projeto foi desenvolvido com foco em automação de testes de APIs REST utilizando Cypress.

Os testes validam:

- Regras de negócio
- Contratos de API
- Status Codes
- Estrutura das respostas
- Cenários positivos
- Cenários negativos
- Validação de dados
- Fluxos completos da aplicação

Além disso, o projeto utiliza geração automática de relatórios para facilitar a análise dos resultados das execuções locais e em pipelines CI/CD.

---

# 🛠️ Tecnologias Utilizadas

- Cypress
- JavaScript
- Node.js
- Faker
- Cypress Plugin API
- Mochawesome Reporter
- Mocha JUnit Reporter
- Cypress Multi Reporters
- GitHub Actions

---

# 📦 Estrutura do Projeto

```text
📦 serverest-api-cypress
 ┣ 📂 cypress
 ┃ ┣ 📂 e2e
 ┃ ┃ ┗ 📂 api
 ┃ ┃    ┗ 📜 arquivos de testes
 ┃ ┣ 📂 fixtures
 ┃ ┃ ┗ 📜 massa de dados
 ┃ ┣ 📂 support
 ┃ ┃ ┣ 📜 commands.js
 ┃ ┃ ┣ 📜 e2e.js
 ┃ ┃ ┗ 📜 helpers
 ┃ ┗ 📂 reports
 ┃    ┗ 📜 relatórios gerados
 ┣ 📂 screenshots
 ┣ 📂 videos
 ┣ 📜 cypress.config.js
 ┣ 📜 package.json
 ┗ 📜 README.md
```

---

# ⚙️ Pré-requisitos

Antes de executar o projeto é necessário possuir:

- Node.js instalado
- NPM instalado

Verifique as versões:

```bash
node -v
npm -v
```

---

# 📥 Instalação

Clone o repositório:

```bash
git clone https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
```

Acesse a pasta do projeto:

```bash
cd serverest-api-cypress
```

Instale as dependências:

```bash
npm install
```

---

# 📦 Dependências do Projeto

### Dependências de Desenvolvimento

```json
"devDependencies": {
  "cypress": "^14.5.4",
  "cypress-mochawesome-reporter": "^3.8.4",
  "cypress-multi-reporters": "^2.0.5",
  "cypress-plugin-api": "^2.11.2",
  "mocha-junit-reporter": "^2.2.1"
}
```

### Dependências de Apoio

```json
"dependencies": {
  "@faker-js/faker": "^9.9.0"
}
```

---

# ▶️ Executando os Testes

### Abrir o Cypress

```bash
npm run cy:open
```

ou

```bash
npx cypress open
```

---

### Executar todos os testes

```bash
npm run cy:run
```

ou

```bash
npx cypress run
```

---

### Executar um teste específico

```bash
npx cypress run --spec "cypress/e2e/api/usuarios.cy.js"
```

---

### Executar em modo Headless

```bash
npx cypress run --headless
```

---

### Executar com navegador Chrome

```bash
npx cypress run --browser chrome
```

---

# 📊 Relatórios

O projeto possui suporte a múltiplos formatos de relatórios.

### Mochawesome

Geração de relatórios HTML completos contendo:

- Cenários executados
- Cenários aprovados
- Cenários falhados
- Tempo de execução
- Evidências

### JUnit

Relatórios XML para integração com pipelines CI/CD.

### Cypress Multi Reporters

Permite gerar múltiplos formatos simultaneamente.

---

# 🎲 Dados Dinâmicos

O projeto utiliza Faker para criação dinâmica de dados durante os testes.

Exemplo:

```javascript
import { faker } from '@faker-js/faker'

const nome = faker.person.fullName()
const email = faker.internet.email()
```

Utilizado para:

- Usuários
- Produtos
- E-mails
- Senhas
- Dados aleatórios

---

# 🔌 Cypress Plugin API

O projeto utiliza:

```javascript
cypress-plugin-api
```

Benefícios:

- Melhor visualização das requisições
- Melhor visualização das respostas
- Debug facilitado
- Evidências mais completas

---

# 🧪 Cobertura dos Testes

## 👤 Usuários

- Criar usuário
- Consultar usuário
- Atualizar usuário
- Excluir usuário
- Validar usuário duplicado

## 📦 Produtos

- Criar produto
- Consultar produto
- Atualizar produto
- Excluir produto

## 🛒 Carrinhos

- Criar carrinho
- Consultar carrinho
- Concluir compra

## ✅ Validações

- Status Code
- Campos obrigatórios
- Contrato da API
- Estrutura do JSON
- Mensagens de erro
- Regras de negócio

---

# 🚀 Integração Contínua

Os testes podem ser executados automaticamente através do GitHub Actions.

Execuções automáticas em:

- Push
- Pull Request
- Merge

Exemplo de workflow:

```text
.github/workflows/ci.yml
```

Ambientes suportados:

- Ubuntu
- Windows

---

# 📈 Boas Práticas Aplicadas

- Organização por funcionalidades
- Reutilização de código
- Dados dinâmicos com Faker
- Testes independentes
- Estrutura escalável
- Relatórios automatizados
- Integração contínua
- Versionamento Git
- Boas práticas de automação de API

---

# 📚 Scripts Disponíveis

Abrir Cypress:

```bash
npm run cy:open
```

Executar testes:

```bash
npm run cy:run
```

---

# 🎯 Objetivos de Aprendizado

Este projeto demonstra conhecimentos em:

- Automação de APIs REST
- Cypress
- JavaScript
- Geração de massa de dados
- Relatórios automatizados
- Integração contínua
- GitHub Actions
- Estratégias de validação de APIs

---

# 👨‍💻 Autor

**Olavo Luiz Tavares Júnior**

QA Engineer | Test Automation | API Testing

### Especialidades

- Cypress
- API Testing
- Robot Framework
- Selenium
- Postman
- GitHub Actions
- CI/CD
- JavaScript

---

⭐ Caso este projeto seja útil para seus estudos, considere deixar uma estrela no repositório.