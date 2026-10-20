# First use of mailschema (MAP 0.3)

- Install: `npm install mailschema@0.3.2` in a fresh directory; runtime Node v24.20.0, npm 10.9.4. I downloaded the Publication Approval 0.1 contract from mailschema.org and validated with `mailschema description description.json --contract contract.json`.
- About 5 minutes from install to a valid description, including one rejected first attempt (digest sha-256:ec32293a82958df2d7daf35212e095f3e135ec12c6a220145ce455c2fb3e5d58).
- Field broken on purpose: I deleted the required `details.schedule` property. The CLI exited 1 and printed exactly: `/details: must have required property 'schedule'`. I restored the property; the file validates again with the same digest.
- Step that slowed me most: getting the contract digest to embed as `type.contractDigest`. My first description also failed on `service.id` (a path is rejected; a bare host is required), but that error named the exact pattern, so the fix was immediate.
- Doc gap, with repro: open the Publication Approval page in the MAP 0.3 registry. The contract JSON is linked, but its digest appears nowhere on the page, while a valid description must carry it. I took the digest from the published example file; the CLI's `contract` command prints it, which I found only in the README.
- One change I would make: print each contract's digest on its registry page, beside the contract link.
