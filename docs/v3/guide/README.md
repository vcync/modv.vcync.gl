# Getting Started

We'll run through the system requirements for modV, where to download the latest version and how to make sure modV runs smoothly on your computer.

## Help or Suggestions

Please use our forum at [https://github.com/vcync/modV/discussions](https://github.com/vcync/modV/discussions) to ask for help or suggest features.
Found a bug? File it at [https://github.com/vcync/modV/issues](https://github.com/vcync/modV/issues).

## System Requirements

### Minimum

- macOS, Windows or Linux (with desktop shell)

### Recommended

- Discrete graphics card
- Intel i5 or better
- 4GB+ RAM


## Download
The latest modV version can be found from modV's GitHub Repo under "Releases".
[https://github.com/vcync/modV/releases/latest](https://github.com/vcync/modV/releases/latest)

Use `.dmg` for macOS, `.exe` for Windows and `.AppImage` for Linux.

## GPU Settings
To get the best out of modV, you may need to hint at your system or GPU driver to run modV on the discrete GPU.

:::tip What is a discrete GPU?
Intel processors usually have on-board graphics. A discrete GPU is a graphics chip external to the CPU and is, in most cases, more capable of rendering realtime graphics smoothly than the on-board GPU.
:::

### Windows

#### NVIDIA

1. Open the `NVIDIA Control Panel`
2. Select `3D Settings > Manage 3D settings`
   1. _In the Program Settings:_ select `modV`
   2. _Under Preferred Graphics Processor:_ select `High Performance NVIDIA processor`
   3. _In Specify settings for this program:_ ensure these options:
      - Power Mangement Mode: `Prefer Maximum Performance`
      - (optional) Vertical Sync: `off`
3. (optional) Select `Display > Adjust desktop size and position`
   1. Set `Perform Scaling on` to `GPU` for every screen attached to your computer
   2. If it's not possible to save this setting, change the `scaling mode` to `no scaling`

### macOS

macOS will automatically enable the dedicated GPU, if present.

### Linux

#### NVIDIA

NVIDIA Optimus users will need to make sure the system is running on the dedicated GPU.
If you are using "switchable graphics", make sure the system knows to switch when modV is running.
Otherwise, use NVIDIA graphics over Intel.

## Video Guide

Once you're set up, watch this 10 minute video walking through how to get started with modV. It should get you up to speed with the basics.

<iframe class="sixteen-nine" src="https://www.youtube-nocookie.com/embed/kGEyTkzFKLk?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
