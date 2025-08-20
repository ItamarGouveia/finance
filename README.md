# Finanças SaaS com Next.js, React e Hono

Uma plataforma **SaaS de finanças** construída com **Next.js**, **React**, **HonoJS** e **Drizzle ORM**, com suporte a **upload de CSV** para importar dados financeiros.  
Este projeto foi inspirado no tutorial [Build a Finance SaaS Platform With Nextjs, React, Honojs with CSV Upload](https://www.youtube.com/watch?v=N_uNKAus0II) do canal *Code With Antonio*.

---

## 🚀 Tecnologias Utilizadas

- **Next.js** — Framework React com SSR/SSG  
- **React** — Biblioteca para interfaces de usuário  
- **HonoJS** — Framework backend rápido e leve  
- **Drizzle ORM** — ORM para banco de dados relacional  
- **Clerk** — Autenticação de usuários (login, cadastro, sessão)  
- **Neon DB** — Banco de dados PostgreSQL escalável na nuvem  
- **Upload CSV** — Importação e tratamento de dados financeiros

---

## 📂 Estrutura do Projeto

```text
├── api/               # Endpoints com HonoJS
├── components/        # Componentes React reutilizáveis
├── lib/               # Funções auxiliares e configuração do DB
├── pages/             # Rotas do Next.js
├── public/            # Arquivos estáticos
├── scripts/           # Scripts relacionados a importação CSV
├── styles/            # Estilos globais e Tailwind
└── prisma/            # Esquema do banco (se aplicável)
```

---

## ⚙️ Pré-requisitos

Antes de rodar o projeto, instale:

- [Node.js](https://nodejs.org/) >= 16  
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)  
- Conta no [Neon](https://neon.tech/) (ou outro PostgreSQL)  
- Conta no [Clerk](https://clerk.com/) para autenticação

---

## 📥 Instalação e Execução

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/USERNAME/REPO-NAME.git
cd REPO-NAME

# Instalar dependências
npm install
# ou
yarn install
```

Configure as variáveis de ambiente em um arquivo `.env.local`:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
DATABASE_URL=your_neon_database_url
```

Execute as migrações (se estiver usando Drizzle ORM ou Prisma):

```bash
npm run db:push
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

Abra no navegador: [http://localhost:3000](http://localhost:3000)

---

## ✨ Funcionalidades

- 🔑 Autenticação segura de usuários (Clerk)  
- 📂 Upload de arquivos CSV para importar dados financeiros  
- 📊 Visualização dos dados em tabelas e gráficos  
- 🗄️ Integração com **Neon DB** via Drizzle ORM  
- ⚡ Backend rápido e escalável com **HonoJS**  
- 🎨 Interface moderna construída em **React + Tailwind**  

---

## 🛠️ Scripts Disponíveis

```bash
npm run dev        # Inicia o ambiente de desenvolvimento
npm run build      # Cria a build de produção
npm run start      # Inicia o servidor em produção
npm run lint       # Executa o linter para verificar o código
npm run db:push    # Envia migrações para o banco de dados
```

---

## 🤝 Como Contribuir

1. Faça um **fork** do projeto  
2. Crie uma branch com sua feature:  
   ```bash
   git checkout -b feature/nome-da-feature
   ```
3. Commit suas alterações:  
   ```bash
   git commit -m "Adiciona nova funcionalidade X"
   ```
4. Envie para sua branch:  
   ```bash
   git push origin feature/nome-da-feature
   ```
5. Abra um **Pull Request**

---

## 📜 Licença

Este projeto está licenciado sob a **MIT License**. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 🙏 Créditos & Referências

- Tutorial original: [Build a Finance SaaS Platform With Nextjs, React, Honojs with CSV Upload](https://www.youtube.com/watch?v=N_uNKAus0II) — *Code With Antonio*  
- [Next.js](https://nextjs.org/)  
- [React](https://reactjs.org/)  
- [HonoJS](https://hono.dev/)  
- [Drizzle ORM](https://orm.drizzle.team/)  
- [Neon DB](https://neon.tech/)  
- [Clerk](https://clerk.com/)
