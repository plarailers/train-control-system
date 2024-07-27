import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { app as indexPage } from './pages/index';
import { app as trainMapPage } from './pages/trainMap';
import { TrainState, trainLocation } from './train-controle/location';

declare module 'hono' {
  interface ContextVariableMap {
    state: TrainState
  }
}

const app = new Hono();

app.use(logger());

const state = { t0: { mileage: 0.0 } };

setInterval(() => {
  trainLocation(state);
}, 1000);

app.use(async (c, next) => {
  c.set("state", state);
  await next();
});

// pages
app.route('/', indexPage);
app.route('/trainMap', trainMapPage);

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch, port
});
