# Nitrosend Safe Mode approval loop — first-use report

- Ran the loop end to end on my own account: Safe Mode switched on at 13:27 UTC, 22 Oct 2026; a contact and list holding only my own address; a campaign composed with no merge tags and scheduled. Nitrosend held it as awaiting_approval and emailed an approval request.
- Decision: approved on the review page at about 13:38 UTC, roughly eleven minutes after Safe Mode went on, because the held send's facts (subject, sender, a single recipient — my own address) matched the campaign I had composed. Nitrosend issued a signed receipt for the decision.
- Slowest step: extracting the MAP description from the approval email. It never completed; see the disclosure below.
- Finding 1: the campaign template's body field accepts plain text only. HTML markup in it is rejected with a 422 error, which the field's schema does not state.
- Finding 2: the review page shows the send's summary and the approve/decline controls, but offers no way to view or download the raw MAP description JSON it references.
- One change I would make: expose the raw MAP description on the review page, so the reviewer approves the exact bytes they can validate.

Disclosure: the loop above was performed end to end, but I could not extract the MAP description attached to the approval email. My mail provider registered the attachment (application/ld+json, about 1.6 KB) yet its storage returned BlobNotFound when I downloaded it — on two independent approval emails, with the error evidence preserved — and the review page exposes no raw JSON. The mailschema validation and the terms.version digest recompute therefore could not be run, and no description.json accompanies this delivery.
