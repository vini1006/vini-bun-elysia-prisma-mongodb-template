import { Elysia } from 'elysia';
import { getLogger } from './logger';

const app = new Elysia()
  .use(getLogger())
  .get('/', async () => {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate a delay
    return 'Hello Elysia';
  })
  .get('/health', () => 'OK') // This route will be skipped from logging
  .get('/metrics', () => ({ uptime: process.uptime() }))
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
