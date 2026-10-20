# First send with the Nitrosend CLI — run notes

- Install: `npm install @nitrosend/cli@latest` installed @nitrosend/cli 0.3.8 on Node v24.21.0 (npm 11.19.0); `nitrosend --version` prints 0.3.8.
- Sign-in: an API key was created in the dashboard (Settings > API Keys), then `nitrosend login --api-key <key>` stored a profile; `nitrosend whoami` confirmed api_key auth against the account.
- Sender: `POST /v1/my/brands/<sid>/prepare_sending` with {"subdomain":"arbol"} returned status ready at once; sends go from hello@arbol.nitrosend.net.
- Send: `nitrosend send --to proof@dogfood.nitrosend.net --subject "First send with the Nitrosend CLI" --body "..." --idempotency-key arbol-cli-first-send-2026-10-20` at 2026-10-20T10:58:09Z returned message id 5122785; the message record shows status sent at 10:58:12Z.
- Timing: about 2 minutes from `nitrosend login` to the send (the CLI itself was installed earlier the same day). The slowest step was getting the first API key: the account already existed, and every route to a key starts from a signed-in dashboard session, so a person created the key in the dashboard before any headless step could begin.
- Gap found: the `nitrosend send` output lists Id, Channel, To, Subject, Status and Created at, but never the From address it sent as — and GET /v1/my/messages/5122785 does not expose a from field either, so confirming the sender took a separate brand lookup. The CLI reference's send output matches what I saw; the field is simply absent.
- One change: print the resolved From address (and the brand subdomain it came from) in the `send` output, so a first send can be verified from the terminal alone.
