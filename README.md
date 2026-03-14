☕ Minha API de Cafés com NestJS

Fala, pessoal! Este aqui é o resultado do meu desafio técnico para a vaga de Backend Jr. Eu construí uma API REST completa para gerenciar um catálogo de cafés, focando em deixar o código organizado e bem protegido.

🛠️ O que eu usei:
NestJS (Framework principal)

TypeScript (Pra não ter erro de tipo)

Class-validator (Pra validar as entradas de dados)

Mapped Types (Pra não ter que ficar repetindo código nos DTOs)

🚀 O que a API faz:
Consegui implementar todos os requisitos do desafio:

CRUD Completo: Dá para criar, listar, atualizar e deletar cafés sem erro.

Organização por Módulos: Separei tudo certinho em CoffeesModule, Controller e Service pra não virar bagunça.

Segurança nos Dados: Configurei o ValidationPipe global. Se alguém tentar mandar um campo que não existe (tipo "cor" ou "preço"), a API barra na hora.

ID como Número: Usei o transform: true para garantir que o ID que vem da URL vire um número automaticamente.

Tratamento de Erro: Se você buscar um café que não existe, ele te devolve um erro 404 bonitinho, como pedido.

📦 Como rodar aí na sua máquina:
Clone o repositório:

git clone https://github.com/Raiservinicios/iluvcoffee.git
Instale as dependências:

npm install
Rode o projeto:

npm run start:dev
A API vai subir em: http://localhost:3000/coffees