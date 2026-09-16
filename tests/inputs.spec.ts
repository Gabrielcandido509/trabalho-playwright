import { test, expect, Page } from '@playwright/test';

const URL = 'https://practice.expandtesting.com/inputs';

async function acessarPagina(page: Page) {
  await page.goto(URL);
}


test('deve abrir a página de Web Inputs', async ({ page }) => {
  await acessarPagina(page);

  await expect(
    page.getByRole('heading', { name: /Web Inputs/i })
  ).toBeVisible();

  await expect(
    page.getByRole('button', { name: 'Display Inputs' })
  ).toBeVisible();

  await expect(
    page.getByRole('button', { name: 'Clear Inputs' })
  ).toBeVisible();
});



test('deve apresentar todos os campos de entrada', async ({ page }) => {
  await acessarPagina(page);

  await expect(
    page.getByLabel('Input: Number')
  ).toBeVisible();

  await expect(
    page.getByLabel('Input: Text')
  ).toBeVisible();

  await expect(
    page.getByLabel('Input: Password')
  ).toBeVisible();

  await expect(
    page.getByLabel('Input: Date')
  ).toBeVisible();
});



test('deve exibir o texto informado', async ({ page }) => {
  await acessarPagina(page);

  await page
    .getByLabel('Input: Text')
    .fill('Teste com Playwright');

  await page
    .getByRole('button', { name: 'Display Inputs' })
    .click();

  await expect(
    page.getByText('Teste com Playwright', { exact: true })
  ).toBeVisible();
});



test('deve exibir o número informado', async ({ page }) => {
  await acessarPagina(page);

  await page
    .getByLabel('Input: Number')
    .fill('2026');

  await page
    .getByRole('button', { name: 'Display Inputs' })
    .click();

  await expect(
    page.getByText('2026', { exact: true })
  ).toBeVisible();
});



test('deve preencher todos os campos e exibir os dados', async ({ page }) => {
  await acessarPagina(page);

  await page
    .getByLabel('Input: Number')
    .fill('16');

  await page
    .getByLabel('Input: Text')
    .fill('SENAI');

  await page
    .getByLabel('Input: Password')
    .fill('teste123');

  await page
    .getByLabel('Input: Date')
    .fill('2026-09-16');

  await page
    .getByRole('button', { name: 'Display Inputs' })
    .click();

  await expect(
    page.getByText('16', { exact: true })
  ).toBeVisible();

  await expect(
    page.getByText('SENAI', { exact: true })
  ).toBeVisible();

  await expect(
    page.getByText('teste123', { exact: true })
  ).toBeVisible();

  await expect(
    page.getByText('2026-09-16', { exact: true })
  ).toBeVisible();
});



test('deve limpar os campos preenchidos', async ({ page }) => {
  await acessarPagina(page);

  await page
    .getByLabel('Input: Number')
    .fill('123');

  await page
    .getByLabel('Input: Text')
    .fill('Teste');

  await page
    .getByLabel('Input: Password')
    .fill('senha123');

  await page
    .getByLabel('Input: Date')
    .fill('2026-09-16');

  await page
    .getByRole('button', { name: 'Clear Inputs' })
    .click();

  await expect(
    page.getByLabel('Input: Number')
  ).toHaveValue('');

  await expect(
    page.getByLabel('Input: Text')
  ).toHaveValue('');

  await expect(
    page.getByLabel('Input: Password')
  ).toHaveValue('');

  await expect(
    page.getByLabel('Input: Date')
  ).toHaveValue('');
});



test('deve preencher exibir e limpar os dados', async ({ page }) => {
  await acessarPagina(page);

  await page
    .getByLabel('Input: Number')
    .fill('100');

  await page
    .getByLabel('Input: Text')
    .fill('Playwright');

  await page
    .getByLabel('Input: Password')
    .fill('123456');

  await page
    .getByRole('button', { name: 'Display Inputs' })
    .click();

  await expect(
    page.getByText('100', { exact: true })
  ).toBeVisible();

  await expect(
    page.getByText('Playwright', { exact: true })
  ).toBeVisible();

  await expect(
    page.getByText('123456', { exact: true })
  ).toBeVisible();

  await page
    .getByRole('button', { name: 'Clear Inputs' })
    .click();

  await expect(
    page.getByLabel('Input: Number')
  ).toHaveValue('');

  await expect(
    page.getByLabel('Input: Text')
  ).toHaveValue('');

  await expect(
    page.getByLabel('Input: Password')
  ).toHaveValue('');
});



test('deve aceitar o valor Playwright', async ({ page }) => {
  await acessarPagina(page);

  await page
    .getByLabel('Input: Text')
    .fill('Playwright');

  await page
    .getByRole('button', { name: 'Display Inputs' })
    .click();

  await expect(
    page.getByText('Playwright', { exact: true })
  ).toBeVisible();
});



test('deve aceitar o valor Teste automatizado 2026', async ({ page }) => {
  await acessarPagina(page);

  await page
    .getByLabel('Input: Text')
    .fill('Teste automatizado 2026');

  await page
    .getByRole('button', { name: 'Display Inputs' })
    .click();

  await expect(
    page.getByText('Teste automatizado 2026', { exact: true })
  ).toBeVisible();
});


test(
  'deve aceitar o valor SENAI - Desenvolvimento de Sistemas',
  async ({ page }) => {
    await acessarPagina(page);

    await page
      .getByLabel('Input: Text')
      .fill('SENAI - Desenvolvimento de Sistemas');

    await page
      .getByRole('button', { name: 'Display Inputs' })
      .click();

    await expect(
      page.getByText(
        'SENAI - Desenvolvimento de Sistemas',
        { exact: true }
      )
    ).toBeVisible();
  }
);

test('deve aceitar caracteres especiais no campo de texto', async ({ page }) => {
  await acessarPagina(page);

  const texto = 'Teste @#$% 123 !?';

  await page
    .getByLabel('Input: Text')
    .fill(texto);

  await page
    .getByRole('button', { name: 'Display Inputs' })
    .click();

  await expect(
    page.getByText(texto, { exact: true })
  ).toBeVisible();
});



test('deve processar o formulário com campos vazios', async ({ page }) => {
  await acessarPagina(page);


  await page
    .getByRole('button', { name: 'Display Inputs' })
    .click();

  await expect(
    page.getByRole('button', { name: 'Clear Inputs' })
  ).toBeVisible();
});


test('deve demonstrar uma validação de valor', async ({ page }) => {
  await acessarPagina(page);

  await page
    .getByLabel('Input: Text')
    .fill('SENAI');

  await page
    .getByRole('button', { name: 'Display Inputs' })
    .click();

  // Valor correto para a entrega final.
  await expect(
    page.getByText('SENAI', { exact: true })
  ).toBeVisible();
});

test(
  'deve apresentar uma frase completa informada pelo usuário',
  async ({ page }) => {
    await acessarPagina(page);

    const frase =
      'Meu primeiro teste automatizado com Playwright e TypeScript';

    await page
      .getByLabel('Input: Text')
      .fill(frase);

    await page
      .getByRole('button', { name: 'Display Inputs' })
      .click();

    await expect(
      page.getByText(frase, { exact: true })
    ).toBeVisible();
  }
);

test('deve executar o fluxo completo do formulário', async ({ page }) => {
  await acessarPagina(page);

  // Verificar a página
  await expect(
    page.getByRole('heading', { name: /Web Inputs/i })
  ).toBeVisible();

  await expect(
    page.getByLabel('Input: Number')
  ).toBeVisible();

  await expect(
    page.getByLabel('Input: Text')
  ).toBeVisible();

  await expect(
    page.getByLabel('Input: Password')
  ).toBeVisible();

  await expect(
    page.getByLabel('Input: Date')
  ).toBeVisible();

  // Preencher os campos
  await page
    .getByLabel('Input: Number')
    .fill('16');

  await page
    .getByLabel('Input: Text')
    .fill('SENAI');

  await page
    .getByLabel('Input: Password')
    .fill('teste123');

  await page
    .getByLabel('Input: Date')
    .fill('2026-09-16');

  // Exibir os dados
  await page
    .getByRole('button', { name: 'Display Inputs' })
    .click();

  // Validar os dados
  await expect(
    page.getByText('16', { exact: true })
  ).toBeVisible();

  await expect(
    page.getByText('SENAI', { exact: true })
  ).toBeVisible();

  await expect(
    page.getByText('teste123', { exact: true })
  ).toBeVisible();

  await expect(
    page.getByText('2026-09-16', { exact: true })
  ).toBeVisible();

  // Limpar
  await page
    .getByRole('button', { name: 'Clear Inputs' })
    .click();

  // Confirmar limpeza
  await expect(
    page.getByLabel('Input: Number')
  ).toHaveValue('');

  await expect(
    page.getByLabel('Input: Text')
  ).toHaveValue('');

  await expect(
    page.getByLabel('Input: Password')
  ).toHaveValue('');

  await expect(
    page.getByLabel('Input: Date')
  ).toHaveValue('');
});