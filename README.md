# NonoGrill

Landing page premium para a Nonno Grill Churrascaria, desenvolvida com TanStack Start, React, Tailwind CSS e Vite. O projeto apresenta uma experiência visual focada em conversão, com hero em vídeo, seções institucionais, galeria, diferenciais, avaliações, reservas e localização.

## Deploy

Produção:

```text
https://nonno-grill.vercel.app
```

Repositório:

```text
https://github.com/RaikySilvaDEV/NonoGrill
```

## Tecnologias

- React 19
- TanStack Start
- TanStack Router
- Vite
- TypeScript
- Tailwind CSS 4
- Nitro para deploy SSR na Vercel
- Radix UI
- Lucide React
- Motion

## Principais Seções

- `Hero`: vídeo de fundo da fachada, chamada principal e botões de ação.
- `About`: apresentação da churrascaria.
- `Experience`: experiência gastronômica e cardápio.
- `Gallery`: imagens do ambiente e pratos.
- `Differentials`: diferenciais da casa.
- `Reviews`: avaliações.
- `Reservation`: chamada para reserva.
- `Location`: localização e informações de contato.
- `Footer`: rodapé institucional.

## Como Rodar Localmente

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Por padrão, o Vite abre em:

```text
http://localhost:5173
```

Se a porta estiver ocupada, ele usará a próxima disponível.

## Scripts

```bash
npm run dev
```

Roda o ambiente de desenvolvimento.

```bash
npm run build
```

Gera a build de produção com Vite, TanStack Start e Nitro.

```bash
npm run preview
```

Pré-visualiza a build localmente.

```bash
npm run lint
```

Executa o ESLint.

```bash
npm run format
```

Formata os arquivos com Prettier.

## Estrutura do Projeto

```text
src/
  assets/
    imagens e vídeo usados na landing page
  components/
    site/
      componentes principais da página
    ui/
      componentes base reutilizáveis
  hooks/
    hooks compartilhados
  lib/
    utilitários e tratamento de erro
  routes/
    rotas do TanStack Router
  router.tsx
  server.ts
  start.ts
```

## Hero em Vídeo

O hero usa o vídeo:

```text
src/assets/Nonno_Grill_restaurant_exterior_…_202606062342.mp4
```

Comportamento atual:

- toca automaticamente sem áudio;
- não usa imagem de fundo no hero;
- para ao finalizar;
- reinicia quando o usuário rola para baixo e volta ao topo.

## Deploy na Vercel

O projeto usa Nitro no `vite.config.ts`, necessário para o TanStack Start funcionar corretamente na Vercel com SSR.

Configuração principal:

```ts
import { nitro } from "nitro/vite";

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    tanstackStart({
      server: {
        entry: "src/server.ts",
      },
    }),
    nitro(),
    react(),
    tailwindcss(),
  ],
});
```

Para publicar manualmente:

```bash
npx vercel --prod --yes
```

## Observações

- A pasta `.vercel` é ignorada pelo Git.
- A pasta `.output` é gerada pelo Nitro durante a build.
- A pasta `dist` pode existir localmente de builds anteriores, mas o deploy atual usa a saída gerada pelo Nitro/Vercel.
- Os assets são importados diretamente pelos componentes para que o Vite gere URLs versionadas na build.
