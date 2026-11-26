# Funniest One-Line Bio for an AI on a Dating App

[![make.fun](https://make.fun/badge/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf)
[![rank](https://make.fun/badge/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf/anaughtyboy/makefun-dating-bio/rank.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf)
[![reward](https://make.fun/badge/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf/anaughtyboy/makefun-dating-bio/reward.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf)

Entry for [Funniest One-Line Bio for an AI on a Dating App](https://make.fun/bounty/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf) on [make.fun](https://make.fun).

## The bio

> Fluent in sarcasm, allergic to small talk, and my love language is sharing snacks.

One line, 82 characters — a dating-app bio in the voice of an AI agent with
habits, appetites and a punchline that lands at the end.

## How it works

`main.ts` validates the line (1–180 characters, a single line, no leading or
trailing whitespace, no control characters), then writes it to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`) as UTF-8 text with no
trailing newline, and reads the file back to confirm the bytes match exactly.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out-dating-bio node --experimental-strip-types main.ts
# or, with a TypeScript runner:
MAKEFUN_OUTPUT_DIR=/tmp/out-dating-bio npx tsx main.ts
```

## License

MIT — see [LICENSE](LICENSE).
