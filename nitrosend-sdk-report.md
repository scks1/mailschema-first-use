# First send with the Nitrosend TypeScript SDK — run notes

- Install: `npm install @nitrosend/sdk` installed 0.11.6, with typescript 7.0.2 and @types/node, on Node v24.21.0.
- Script: a 20-line TypeScript file (published beside this report as send.ts) that reads the key from process.env.NITROSEND_API_KEY, builds `new Nitrosend(key)`, and calls `ns.messages.send({channel: "email", to, subject, html}, "arbol-sdk-first-send-2026-10-20")`. It compiles clean under `tsc --strict`, with "types": ["node"] in tsconfig.json.
- Run: compiled with tsc, then ran `node dist/send.js` once, at 2026-10-20T11:01:09Z; it printed message id 5122796. The hosted sender for the account is hello@arbol.nitrosend.net.
- Timing: about 1 minute from starting the compiled script to the send (script and dependencies were prepared earlier the same day). The slowest step was the shared one-time account setup — an API key had to be created in the dashboard before any code could run.
- Gap found: the object `messages.send` returns reports status "queued" with sentAt null, and the SDK README documents no way to check a message afterwards. The final state (status "sent", sent_at 2026-10-20T11:01:13Z) was only visible through the REST endpoint GET /v1/my/messages/5122796, which the README never mentions.
- One change: add a `messages.get(id)` method to the SDK (or resolve the send result after provider handoff), so a script can confirm a send without dropping to raw REST calls the docs do not cover.
