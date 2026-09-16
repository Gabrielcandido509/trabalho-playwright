TRABALHO PLAYWRIGHT - WEB INPUTS

1. Abra esta pasta no VS Code.
2. Abra o terminal na pasta do projeto.
3. Execute:
   npm install
4. Instale o navegador do Playwright:
   npx playwright install chromium
5. Execute os testes:
   npx playwright test

Para abrir o navegador durante os testes:
   npx playwright test --headed

Para usar a interface do Playwright:
   npx playwright test --ui

Para abrir o relatório HTML:
   npm run test:report

Arquivo principal da atividade:
   tests/inputs.spec.ts
