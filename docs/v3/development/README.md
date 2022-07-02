# Development

This section documents how to develop modV.

## Project development setup

```
yarn
```

### Compiles and hot-reloads for development

```
yarn electron:serve
```

### Builds for release

```
yarn electron:build
```

### Caveats

#### Removing a package

If you want to remove a package with `yarn remove`, make sure to run `yarn` afterwards as we are using `patch-package` without `postinstall-postinstall` because of [vcync/modV/issues/554](https://github.com/vcync/modV/issues/554).



## Platform specifics for building and development

### Windows

#### Shell

CMD or PowerShell is required as native binaries need to be compiled or fetched for Windows. WSL (Windows Subsystem for Linux) or WSL2 are not supported as they will try to compile those binaries for Ubuntu.

#### Dependancies

Visual Studio Tools and Python are required by node-gyp, which build native node modules.
Since Node.js 16, the official Windows installer can install them.

If you're using nvm-windows or another headless Node.js install, you can easily install the required packages with [Chocolatey](https://chocolatey.org/install):

```
choco install python visualstudio2022-workload-vctools
```

#### 'vue-cli-service' is not recognized

Please see issue 122 ([vcync/modv-3/issues/122#issuecomment-640100114](https://github.com/vcync/modv-3/issues/122#issuecomment-640100114)) on how to resolve this.

### Ubuntu/Debian

libndi is required for NDI sources and must be installed for modV to build. You can find that available to download here: [Palakis/obs-ndi/releases](https://github.com/Palakis/obs-ndi/releases)

Last successful build was with `libndi4_4.5.1-1_amd64.deb`.

### Other Linux flavours

Untested. NDI is provided by grandiose, our fork is here: [vcync/grandiose](https://github.com/vcync/grandiose/) This fork of grandiose has other libndi supported platforms, however even on Ubuntu we needed the above libndi package to be installed.

Let us know how you get on (good or bad) and we'll update the repo and docs accordingly.
