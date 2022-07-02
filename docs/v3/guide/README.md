# Getting Started

## Download
The latest modV version can be found from modV's GitHub Repo under "Releases".
[https://github.com/vcync/modV/releases/latest](https://github.com/vcync/modV/releases/latest)

Use `.dmg` for macOS, `.exe` for Windows and `.AppImage` for Linux.

## modV Primer

A 10 minute video walking through how to get started with modV.

<iframe class="sixteen-nine" src="https://www.youtube-nocookie.com/embed/kGEyTkzFKLk?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## System Requirements

### Minimum

- Mac, Windows or Linux (with desktop shell)

### Recommended

- NVIDIA or ATI graphics card
- Intel i5 or better
- 4GB+ RAM

## GPU Settings

### Windows

Windows laptops may have dual GPUs, one on the processor, the other dedicated.
Either Windows or the GPU's software determine which GPU certain programs will operate on.

modV needs to run on the most powerful GPU, in most cases the dedicated GPU.

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
