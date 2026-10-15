try { require("dotenv").config(); } catch (e) { /* dotenv optional: Railway injects env variables */ }

const { start } = require("./server");
start(process.env.PORT || 3000).catch((e) => {
  console.error("Failed to start:", e);
  process.exit(1);
});
