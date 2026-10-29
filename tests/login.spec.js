// @ts-check
import { test, expect } from '@playwright/test';

test('deve realizar login com usuário válido', async ({ page }) => {


  // Acessa a página de login
  await page.goto('https://sergiocotiazure20265-ops.github.io/produtos-cypress-site/index.html');

  // Preenche o campo do email de usuário
  await page.locator('#emailLogin').fill('admin@bluestock.com');

  // Preenche o campo da senha
  await page.locator('#senhaLogin').fill('Admin@123');

  // Clica no botão de login
  await page.locator('#btnEntrar').click();

  //verificar se apagina de consulta de podutos foi caberta
  await expect(page.getByText('Consulta de Produtos')).toBeVisible();

  //gerando evidência do teste de login com sucesso
  await page.screenshot({
    path: 'tests/screenshots/login_sucesso.png',
    fullPage: true
  })
})