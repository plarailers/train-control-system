import { Hono } from 'hono';
import Layout from './layout';

const app = new Hono();

app.get('/', (c) => {
  return c.html(
    <Layout
      body={<h1>Hello World</h1>}>
    </Layout>
  );
});

export { app };
