const msgApp = require("./index")({
    port: 6378,
    host: process.env.MSG_HOST,
    auth: process.env.MSG_PASS,
    scope: process.env.MSG_SCOPE,
  });

  