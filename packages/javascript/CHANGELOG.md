# AppSignal for JavaScript changelog

## 1.3.18

- patch - Update @appsignal/core dependency to 1.1.13.
- patch - Update @appsignal/types dependency to 2.1.5.

## 1.3.17

- patch - Update @appsignal/core dependency to 1.1.12.
- patch - Update @appsignal/types dependency to 2.1.4.

## 1.3.16

- patch - Update @appsignal/core dependency to 1.1.11.
- patch - Update @appsignal/types dependency to 2.1.3.

## 1.3.15

- patch - Update @appsignal/core dependency to 1.1.10.
- patch - Update @appsignal/types dependency to 2.1.2.

## 1.3.14

- patch - Update @appsignal/core dependency to 1.1.9.
- patch - Update @appsignal/types dependency to 2.1.1.

## 1.3.13

- [d0d57e3](https://github.com/appsignal/appsignal-javascript/commit/d0d57e3b6cb559939fb40d3eb83760fdbc8bbad6) patch - Update tslib dependency to 2.3.x.
- patch - Update @appsignal/core dependency to 1.1.8.
- patch - Update @appsignal/types dependency to 2.1.0.
- patch - Update @appsignal/core dependency to 1.1.8.

## 1.3.12
- Dependency bumps

## 1.3.11
- Dependency bumps

## 1.3.10
- Dependency bumps

## 1.3.9
- Fix `Queue.push` causing a failed compile due to correctness improvement in `tsc`
- Dependency bumps

## 1.3.8
- Dependency bumps

## 1.3.7
- Dependency bumps
- Use @appsignal/types 2.0.0

## 1.3.6
- Add even more detail to default error message in setError if no `error.message` exists
- Dependency bumps

## 1.3.5
- Dependency bumps
- Improve the default error message if an invalid error object is passed to `span.setError` (#424)
- Test coverage improvements

## 1.3.4
- Dependency bumps
- Ignore node `https` module in browser compilation. Fixes #389 and #386.
- Move `@appsignal/types` to dependency of `@appsignal/javascript`. Fixes #389 and #386.

## 1.3.3
- Dependency bumps

## 1.3.2
- Display "development mode" message via `console.info` rather than `console.warn`
- Dependency bumps

## 1.3.1
- Dependency bumps

## 1.3.0
- Dependency bumps
- Don't send spans and rethrow when no key is supplied to constructor (#274)
- Add support for running inside Node.js (#275)
- Fix "`navigator` is undefined" error and improve handling of `window` object
- Changes to internal type names

Blog post: https://blog.appsignal.com/2020/04/30/javascript-error-tracking-version-1-3-0.html

## 1.2.1
- Dependency bumps

## 1.2.0
- Dependency bumps
- Add tags and namespace params to `appsignal.wrap()` method 

## 1.1.2
- Dependency bumps

## 1.1.1
- Fix package dependency issue in `@appsignal/javascript` package

## 1.1.0
- Dependency bumps
- Split some reusable logic into `@appsignal/core` package
- Fix errors when run with in React Native (#130)
- Add ignored errors list (#134)

(v.1.1.0 was marked as deprecated due to a bad release)

## 1.0.1
- Dependency bumps, no new features
