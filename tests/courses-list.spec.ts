import { test, expect } from '@playwright/test'

test('create and delete course item', async ({ page }) => {
  await page.goto('/')
  await page.getByPlaceholder('Название').click()
  await page.getByPlaceholder('Название').fill('Тестовый курс')
  await page.getByPlaceholder('Описание курса').click()
  await page.getByPlaceholder('Описание курса').fill('Тестовое описание курса')
  await page.getByRole('button', { name: 'Добавить' }).click()
  await expect(page.getByText('Тестовый курсТестовое описание курсаУдалить')).toBeVisible()
  await page
    .locator('div')
    .filter({ hasText: /^Тестовый курсТестовое описание курсаУдалить$/ })
    .getByRole('button')
    .click()
  //   await expect(page.getByText('Тестовый курсТестовое описание курсаУдалить')).not.toBeVisible()
})
