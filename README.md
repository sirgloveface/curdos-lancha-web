# Curdo's Lancha - Plataforma de Passeios Náuticos

Plataforma de passeios marítimos privativos em Florianópolis (Ilha do Campeche, Baía dos Golfinhos, Costa da Lagoa e Tinguá/Caixa d'Aço).

## Stack
- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS
- Prisma ORM + PostgreSQL
- WhatsApp Direct Booking Flow

---

## 1. Configuração de Variáveis de Ambiente

Crie o arquivo `.env.local` na raiz:

```bash
cp .env.example .env.local
```

Defina as variáveis em `.env.local`:

```env
NEXT_PUBLIC_WHATSAPP_PHONE=5548999999999
DATABASE_URL="postgresql://usuario:senha@localhost:5432/curdos_lancha?schema=public"
```

> **Nota:** Se `DATABASE_URL` estiver vazia ou offline, o formulário de reserva continua operacional enviando o lead diretamente ao WhatsApp do comandante.

---

## 2. Instalação e Prisma

```bash
# Instalar dependências
npm install

# Gerar tipos do Prisma Client
npx prisma generate

# Sincronizar schema com o banco PostgreSQL (opcional)
npx prisma db push
```

---

## 3. Execução

### Modo Desenvolvimento
```bash
npm run dev
```
Acesse em: `http://localhost:3000`

### Build e Produção
```bash
npm run build
npm run start
```

### Prisma Studio (Visualizador do Banco)
```bash
npx prisma studio
```
Acesse em: `http://localhost:5555`


### Comando docker

#### Iniciar base de datos y aplicación
docker compose up -d --build

#### Iniciar únicamente la base de datos PostgreSQL
docker compose up -d postgres

#### Aplicar schema de Prisma dentro del contenedor
docker compose exec app npx prisma db push

#### Logs en tiempo real
docker compose logs -f