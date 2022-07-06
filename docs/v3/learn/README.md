# Getting Started

This page runs through where to download the latest version, what to expect when starting modV for the first time, the system requirements for modV, and how to make sure modV runs smoothly on your computer.

Once you're all set up, try our video tutorials ([/v3/learn/video-tutorials.html](/v3/learn/video-tutorials.html)) or check out the documentation ([/v3/documentation/](/v3/documentation/)).

## Download
The latest modV version can be found from modV's GitHub Repo under "Releases".
[https://github.com/vcync/modV/releases/latest](https://github.com/vcync/modV/releases/latest)

Use `.dmg` for macOS, `.exe` for Windows and `.AppImage` for Linux.

## Starting modV for the first time
modV will create a media folder with a default project upon first run. Read more about the media folder here: [/v3/documentation/media.html](/v3/documentation/media.html)

## System Requirements

### Minimum

- macOS, Windows or Linux (with desktop shell)

### Recommended

- Discrete GPU
- Intel i5 or better
- 4GB+ RAM

## GPU Settings
To make sure modV runs smoothly on your computer, you may need to tell your system or GPU driver to run modV on the discrete GPU.

:::tip What is a discrete GPU?
Computer processors often have integrated graphics. A discrete GPU is a graphics chip external to the CPU and is, in most cases, more capable of rendering realtime graphics smoothly than the integrated GPU.
:::

### macOS

No action needed. macOS will automatically use the discrete GPU with modV, if present.

### Windows

#### NVIDIA

The following steps will set up your NVIDIA GPU on Windows for modV.
The optional steps are recommended for live performances.

1. Open the `NVIDIA Control Panel`
2. Select `3D Settings > Manage 3D settings`
   1. _In the Program Settings:_ select `modV`
      - You may need to navigate to the `.exe` to add it to the list. modV lives at `%LocalAppData%\Programs\modv\modV.exe`
   2. _Under Preferred Graphics Processor:_ select `High Performance NVIDIA processor`
   3. _In Specify settings for this program:_ ensure these options:
      - (optional) Power Mangement Mode: `Prefer Maximum Performance`
      - (optional) Vertical Sync: `off`
        - Turning off vertical sync may cause [screen tearing](https://en.wikipedia.org/wiki/Screen_tearing)
3. (optional) Select `Display > Adjust desktop size and position`
   1. Set `Perform Scaling on` to `GPU` for every screen attached to your computer
        - If it's not possible to save this setting, change the `scaling mode` to `no scaling`

#### AMD

:::tip Do you have information on running modV on Windows with an AMD GPU?
If so, then consider contributing to this page using the link at the bottom of the page.
:::

### Linux

#### NVIDIA

NVIDIA Optimus users will need to make sure the system is running on the dedicated GPU.
If you are using "switchable graphics", make sure the system knows to switch when modV is running.
Otherwise, use NVIDIA graphics over Intel.

We also recommend to install the proprietary NVIDIA graphics drivers rather than using Noveau, if possible.


#### AMD

:::tip Do you have information on running modV on Linux with an AMD GPU?
If so, then consider contributing to this page using the link at the bottom of the page.
:::

## Next steps

If you're all set up, try our video tutorials ([/v3/learn/video-tutorials.html](/v3/learn/video-tutorials.html)) or check out the documentation ([/v3/documentation/](/v3/documentation/)).

## Help, Bugs or Suggestions

Please use our forum at [https://github.com/vcync/modV/discussions](https://github.com/vcync/modV/discussions) to ask for help or suggest features.

Found a bug? File it at [https://github.com/vcync/modV/issues](https://github.com/vcync/modV/issues).
