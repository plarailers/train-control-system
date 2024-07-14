import { FC as FuncComponent } from "hono/jsx";

const Layout: FuncComponent = ({ body }) => {
  return (
    <html lang="ja">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>train-controle-system</title>
      </head>
      <body>
        {body}
      </body>
    </html>
  );
};

export default Layout;
