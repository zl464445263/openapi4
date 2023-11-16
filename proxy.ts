import { Server } from "https://deno.land/std/http/server.ts";

const handler = async (request: Request) => {
  return await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: request.headers,
    body: request.body,
  });
};

const server = new Server({ handler });
console.log("server listening on http://localhost:80");

await server.listenAndServe();
