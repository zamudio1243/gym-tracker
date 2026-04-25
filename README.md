# Gym Tracker

Aplicacion construida con Next.js App Router, Bun, Prisma y Better Auth.

## Arquitectura

El proyecto usa una arquitectura orientada por feature con capas compartidas para infraestructura y UI global.

### Objetivo

- `app/` define rutas y composicion de paginas.
- `features/` agrupa codigo por dominio o flujo de negocio.
- `shared/` contiene piezas reutilizables por todo el sistema.
- `generated/` contiene codigo generado automaticamente.

### Estructura base

```txt
app/
  auth/[...all]/route.ts
  dashboard/page.tsx
  login/page.tsx
  sign-up/page.tsx
  page.tsx

features/
  <feature>/
    ui/
    model/
    server/

shared/
  ui/
  lib/
  server/

generated/
  prisma/

prisma/
  schema.prisma
```

## Como usar la arquitectura

### 1. `app/`: rutas y composicion

Usa `app/` solo para:

- `page.tsx`
- `layout.tsx`
- `route.ts`
- `loading.tsx`
- `error.tsx`

Reglas:

- No pongas logica de negocio grande en `app/`.
- No pongas validaciones, formularios complejos o integraciones de backend directamente en las rutas.
- Cada ruta debe importar y componer piezas desde `features/` o `shared/`.

Ejemplo:

```tsx
import { WelcomeHero } from "@/features/marketing/ui/welcome-hero";

export default function HomePage() {
  return <WelcomeHero />;
}
```

### 2. `features/`: logica por dominio

Cada feature debe vivir en su propio directorio.

Estructura sugerida:

```txt
features/
  auth/
    ui/
      login-form.tsx
      sign-up-form.tsx
      login-screen.tsx
    model/
      login.schema.ts
      sign-up.schema.ts
    server/
      auth.actions.ts
```

Usa `features/` para:

- componentes especificos del flujo
- esquemas de validacion
- server actions del dominio
- helpers internos del feature

Reglas:

- Si el codigo pertenece claramente a un flujo de negocio, va en `features/<nombre>`.
- Evita reutilizar `features/` como cajon de utilidades globales.
- Si algo es usado por multiples features sin ser dominio, muevelo a `shared/`.

### 3. `shared/ui`: UI reutilizable global

`shared/ui` contiene componentes reutilizables y agnosticos al dominio.

Ejemplos:

- `Button`
- `Input`
- `Field`
- componentes de `shadcn/ui`

Reglas:

- No pongas textos, estados o comportamiento especifico de una feature en `shared/ui`.
- Si un componente depende de reglas de negocio concretas, no es `shared/ui`; probablemente pertenece a una feature.

### 4. `shared/lib`: utilidades puras

`shared/lib` debe contener funciones reutilizables y sin conocimiento de negocio.

Ejemplos:

- `cn()`
- helpers pequenos de formato
- utilidades puras sin acceso a request, cookies o base de datos

### 5. `shared/server`: infraestructura server-only

`shared/server` contiene integraciones de backend y modulos que solo deben vivir del lado del servidor.

Ejemplos actuales:

- `shared/server/auth.ts`
- `shared/server/prisma.ts`

Usa esta carpeta para:

- clientes de base de datos
- auth
- wrappers de servicios externos server-only
- helpers que usan secretos, cookies o contexto de servidor

Reglas:

- No importes `shared/server/*` dentro de componentes cliente.
- Mantiene aqui solo infraestructura compartida, no logica especifica de una feature.
- Las server actions de negocio van en `features/<feature>/server`.

### 6. `generated/`: codigo autogenerado

Todo archivo generado automaticamente debe vivir en `generated/`.

Ejemplo actual:

- `generated/prisma/*`

Reglas:

- No edites estos archivos manualmente.
- Si necesitas cambiar su salida, cambia la configuracion fuente, por ejemplo `prisma/schema.prisma`.

## Reglas practicas para agregar codigo nuevo

### Si vas a crear una pagina nueva

1. Crea la ruta en `app/...`.
2. Deja el archivo de ruta pequeno.
3. Mueve la UI y la logica a `features/...` si pertenece a un dominio.

### Si vas a crear un formulario de una feature

Ponlo en:

```txt
features/<feature>/ui/
```

El esquema de validacion va en:

```txt
features/<feature>/model/
```

La server action va en:

```txt
features/<feature>/server/
```

### Si vas a agregar un componente de `shadcn/ui`

La configuracion ya esta preparada para que los componentes se instalen en `shared/ui`.

Ejemplo:

```bash
npx shadcn@latest add dialog
```

El componente debe quedar en `shared/ui`, no en `components/ui`.

Si agregas un componente nuevo de `shadcn`, verificalo asi:

- debe importarse desde `@/shared/ui/...`
- no debe depender de una feature concreta
- si es generico, se queda en `shared/ui`

### Si vas a agregar una utilidad nueva

- Si es pura y global, va en `shared/lib`.
- Si es server-only e infraestructura, va en `shared/server`.
- Si es de una sola feature, va dentro de esa feature.

## Ejemplo completo: `features/auth`

Una feature completa de autenticacion deberia verse asi:

```txt
features/
  auth/
    ui/
      login-form.tsx
      sign-up-form.tsx
      login-screen.tsx
      sign-up-screen.tsx
    model/
      login.schema.ts
      sign-up.schema.ts
    server/
      auth.actions.ts
```

### Responsabilidad de cada carpeta

`features/auth/ui/`

- pantallas del flujo de auth
- formularios cliente
- componentes visuales propios de auth

`features/auth/model/`

- schemas de Zod
- tipos del dominio de auth
- helpers pequenos que describen el shape de los datos

`features/auth/server/`

- server actions del flujo
- integracion entre la feature y `shared/server/auth`
- validacion final antes de tocar infraestructura

### Flujo esperado

```txt
app/login/page.tsx
  -> features/auth/ui/login-screen.tsx
    -> features/auth/ui/login-form.tsx
      -> features/auth/model/login.schema.ts
      -> features/auth/server/auth.actions.ts
        -> shared/server/auth.ts
```

### Ejemplo de composicion desde una ruta

```tsx
import { LoginScreen } from "@/features/auth/ui/login-screen";

export default function LoginPage() {
  return <LoginScreen />;
}
```

### Ejemplo de responsabilidades dentro de la feature

`features/auth/ui/login-form.tsx`

- usa `@/shared/ui/button`
- usa `@/shared/ui/input`
- usa `loginSchema`
- llama `signInAction`

`features/auth/server/auth.actions.ts`

- parsea datos con `loginSchema`
- usa `@/shared/server/auth`
- redirige o devuelve error

### Que debe quedarse fuera de `features/auth`

- `Button`, `Input`, `Field`: van en `shared/ui`
- cliente Prisma: va en `shared/server`
- Better Auth base config: va en `shared/server/auth.ts`
- rutas Next.js: van en `app/`

### Regla rapida para decidir

Si el archivo responde a la pregunta "esto solo existe por el flujo de autenticacion?", entonces debe vivir en `features/auth`.

## Convenciones de import

Usa imports directos y explicitos.

Ejemplos:

```ts
import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/lib/utils";
import { auth } from "@/shared/server/auth";
```

Evita por ahora:

- barrels tipo `index.ts`
- imports cruzados innecesarios entre features
- importar infraestructura server-only en componentes cliente

## Que no hacer

- No crear nuevas carpetas en `components/ui`.
- No volver a poner infraestructura dentro de `lib/` si es server-only compartida.
- No guardar codigo generado dentro de `app/`.
- No meter logica de negocio grande dentro de `page.tsx`.
- No poner componentes especificos de negocio en `shared/ui`.

## Estado actual de la migracion

Ya migrado:

- `shared/ui`
- `shared/lib`
- `shared/server`
- `generated/prisma`

Pendiente por mover a `features/`:

- auth UI
- auth schemas
- auth actions
- marketing/landing UI

## Comandos utiles

```bash
bun dev
bun lint
bun lint:fix
bun prisma:generate
bun prisma:migrate
```

## Regla general

Antes de crear un archivo nuevo, responde esta pregunta:

> Esto pertenece a una ruta, a una feature, a algo compartido o a codigo generado?

Si esa respuesta no es clara, no lo pongas en `app/` por defecto.
