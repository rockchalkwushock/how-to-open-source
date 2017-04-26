# How to make a Pull Request

Feature Addition or Fixing a Bug?

- [ ] Bug
- [ ] Feature

What issue is this in reference too?

## Guidelines for Merging
1. All code must pass `flow-typechecking`.
2. All code must pass `linting`.
3. Any code added must be tested and maintain coverage.
4. Any code updated or removed must not break the build & coverage.

## Brief Steps Summary
```bash
### Changes made, bugs fixed, features added.
### Tests written/updated.
### Bump package.json version according to SemVer.
$ git add -A
$ git status ### confirm correct files are present.
$ npm run commit
### If linting, flow-typecheck, or testing fails fix and repeat.
### Fill in the pertinent information based on your changes in the commitizen log.
$ git push origin <branch>
### confirm all checks have passed in PR.
### Request a Reviewer to look at the changes and approve them to be merged.
```
