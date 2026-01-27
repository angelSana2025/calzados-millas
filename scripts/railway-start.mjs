import { spawn } from "node:child_process";

const port = Number(process.env.PORT ?? 4173);
const cmd = process.platform === "win32" ? "npx.cmd" : "npx";

const child = spawn(cmd, ["vite", "preview", "--host", "0.0.0.0", "--port", String(port)], {
  stdio: "inherit",
});

child.on("exit", (code) => {
  process.exit(code ?? 0);
});


