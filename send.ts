import { Nitrosend } from "@nitrosend/sdk";

const apiKey = process.env.NITROSEND_API_KEY;
if (!apiKey) {
  throw new Error("NITROSEND_API_KEY is not set in the environment");
}

const ns = new Nitrosend(apiKey);

const message = await ns.messages.send(
  {
    channel: "email",
    to: "proof@dogfood.nitrosend.net",
    subject: "First send from a short TypeScript SDK script",
    html: "<p>Hello - this is a first test send made with the Nitrosend TypeScript SDK from a script of 30 lines or fewer.</p>",
  },
  "arbol-sdk-first-send-2026-10-20",
);

console.log(JSON.stringify(message, null, 2));
