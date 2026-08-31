# Assignment: Fix the Lint Errors

## Goal

The file [src/exercises/BuggyCounter.jsx](src/exercises/BuggyCounter.jsx) contains a small React
component that works... sort of. It's full of mistakes that ESLint is
configured to catch. Your job is to find and fix every issue **without
disabling or deleting any ESLint rules**.

## Setup

```bash
npm install
```

## Step 1 — Run the linter

```bash
npm run lint
```

This runs ESLint over the whole project using the rules defined in
[eslint.config.js](eslint.config.js) (JavaScript recommended rules, React
rules, React Hooks rules, a Vite/React Fast Refresh rule, and JSX
accessibility rules). Read through the output — it tells you the file, line
number, and rule name for each problem.

## Step 2 — Fix the errors one at a time

There are **7 issues** hiding in `BuggyCounter.jsx`. For each one:

1. Read the ESLint error message and note the rule name (e.g. `no-unused-vars`).
2. Open the file and find the offending line.
3. Fix the code so the behavior still makes sense (don't just silence the
   warning).
4. Re-run `npm run lint` to confirm that error is gone.
5. Repeat until `npm run lint` reports no problems.

### Hints (rule names only — no spoilers!)

- `no-undef`
- `no-unused-vars`
- `no-unreachable`
- `no-case-declarations`
- `react-hooks/rules-of-hooks`
- `react-hooks/exhaustive-deps`
- `jsx-a11y/alt-text`

## Step 3 — Try it out

Once the file is clean, import and render `BuggyCounter` somewhere in
[src/App.jsx](src/App.jsx) to confirm it actually behaves correctly (the
counter should increment, and the page title should update every time the
count changes).

## Step 4 — Verify

```bash
npm run lint
```

Should complete with no errors or warnings.

## Stretch goal

Add a new small bug of your own to a different component, have a classmate
find and fix it using only the `npm run lint` output.
