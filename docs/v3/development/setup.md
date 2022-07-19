---
sidebarDepth: 2
---


# Setup

```
yarn
```

## Compiles and hot-reloads for development

```
yarn electron:serve
```

## Builds for release

```
yarn electron:build
```

## Caveats

### Removing a package

If you want to remove a package with `yarn remove`, make sure to run `yarn` afterwards as we are using `patch-package` without `postinstall-postinstall` because of [vcync/modV/issues/554](https://github.com/vcync/modV/issues/554).
