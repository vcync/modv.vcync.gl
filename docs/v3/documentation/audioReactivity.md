---
sidebarDepth: 2
---

# Audio Reactivity

Audio reactivity in modV is provided using [Meyda](https://meyda.js.org/), an audio feature extraction library.

In other live visual applications, you are usually presented with the raw FFT and it's mainly up to the user to isolate certain "active" frequencies to assign to parameters.

modV takes a slightly different approach to offer the user more advanced audio analysis in the form of "Features".

## Getting audio into modV

To use modV as an audio visualiser you will need an audio source such as your computer's built-in microphone, a line-in jack or virtual audio device.

### Virtual Audio Devices

A Virtual Audio Device allows a user to capture audio from their system and use it as an input in an application.
This is useful to route applications such as Spotify or SoundCloud into modV.

#### macOS

Soundflower is open source and a free virtual audio device which can route audio between applications, download that [here](https://github.com/mattingalls/Soundflower/releases/).

- Set the system audio to route through SoundFlower:
  - 1. Open "Audio MIDI Setup" in `/Applications/Utilities/`
    2. Create a new "Multi-Output Device" with the `+` button in the bottom left
    3. Add "Soundflower 2ch" and any other device you'd like audio to output to (such as "Built-in Output" to listen to the audio)
    4. Select your new Multi-Output Device in "System Preferences > Sound" to be the output

#### Windows

VB Cable is a free virtual audio device which can route audio between applications, download that [here](https://vb-audio.com/Cable/index.htm).

##### Configuring VB Cable

- Set the system audio to route through VB Cable:
  - 1. Open the Sound Control Panel (`win + r` `control.exe /name Microsoft.Sound`)
    2. _In the Playback tab:_ Set `CABLE Input` as the Default Device
- Listening to VB CABLE's output:
  - 1. _In the Recording tab:_ Right click `CABLE Output` and select `Properties`
    2. _In the Listen tab:_ Check `Listen to the device` and select the Playback device to your speakers or headphones in the dropdown menu

#### Linux

##### Pulse Audio

1. Download and install [Pulse Audio's](https://www.freedesktop.org/wiki/Software/PulseAudio/) Volume Control package
2. This [tutorial](https://www.kirsle.net/blog/entry/redirect-audio-out-to-mic-in-linux) shows how to setup the Input Devices to show your monitoring
3. When you start the modV application, your browser should appear as a recording device in the `Recording` tab

![Browser input device in pavucontrol](/images/pavucontrol.png)


## What is an Audio Feature?

> Often, observing and analysing an audio signal as a waveform doesn’t provide us a lot of information about its contents. An audio feature is a measurement of a particular characteristic of an audio signal, and it gives us insight into what the signal contains.
>
> Audio features can be measured by running an algorithm on an audio signal that will return a number, or a set of numbers that quantify the characteristic that the specific algorithm is intended to measure. Meyda implements a selection of standardized audio features that are used widely across a variety of music computing scenarios.

(taken from the Meyda website)

[Meyda's documentation](https://meyda.js.org/audio-features) provides detailed notes on the values returned and what each audio feature does.

## How to use Audio Features

To use an Audio Feature with a modV [Module](./modules.md), please see [Input Links](./inputLinks.md).

For information on how to use Audio Features in developing a modV Module, please see [Writing a 2D Module](./writingA2dModule.md).
