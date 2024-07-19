import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { app as indexPage } from './pages/index';
import { app as trainMapPage } from './pages/TrainMap';
import { app as locationApi } from './api/location';

const app = new Hono();

app.use(logger());

// pages
app.route('/', indexPage);
app.route('/trainMap', trainMapPage);
app.route('/api/location', locationApi);

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch, port
});
