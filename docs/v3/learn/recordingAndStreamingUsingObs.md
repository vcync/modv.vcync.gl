---
sidebarDepth: 2
---

# Recording & streaming using OBS

> OBS Studio is free and open source software for video recording and live streaming. Currently Linux, Mac and Windows Builds are available.

_[excerpt from obsproject.com](https://obsproject.com/wiki/)_

## Prerequisites

* An official OBS Studio build: https://github.com/obsproject/obs-studio/releases
* A secondary display, such as another monitor or projector

## Guide for all platforms

> You don't need to set up Twitch to record locally.

### Set up your OBS scene

1. Open OBS Studio
2. Find the Sources panel and click the "+" icon
3. Add `Display Capture`
4. Select your secondary display in the display drop-down menu and click `OK`
    * If you cannot see your display on Windows, please follow the steps in the first post of this forum thread: [https://obsproject.com/forum/threads/solution-for-black-screen-display-capture-even-after-performing-the-steps-on-obs-forum.112109/](https://obsproject.com/forum/threads/solution-for-black-screen-display-capture-even-after-performing-the-steps-on-obs-forum.112109/)
5. If you see nothing, right-click `Display Capture` in the `Sources` panel, hover `Transform` and click `Fit to screen`

### Configuring video settings
1. Open OBS' settings
2. Click `Output`
3. Set the `Base (Canvas) Resolution` to your secondary display's resolution
4. Set the `Output (Scaled) Resolution` to your stream's target resolution
    * If you want the highest quality, then set this to `1920x1080` as Twitch's max resolution is this
5. Set the `Common FPS Values` to your stream's target FPS
    * If you want the smoothest video, then set this to `60` as that is the maximum Twitch will display

### Configuring streaming settings

1. Open OBS' settings
2. Click `Output`
3. In the `Streaming` section, check `Enable Advanced Encoder Settings` and uncheck `Enforce streaming service bitrate limits`
    * Twitch has a maximum video bitrate of 6000kbps. If your internet upload speed is good, try streaming at this maximum
    * Twitch has a maximum audio bitrate of 320kbps, despite what OBS tells you. This is why we uncheck the `Enforce streaming service bitrate limits`, otherwise our audio will sound bitcrushed
4. Encoder preset is up to you. We usually use `Quality`

### Configuring recording settings

1. Open OBS' settings
2. Click `Output`
3. In the `Recording` section, ensure `Recording Format` is set to `mkv`
    * mkv files are recoverable if OBS crashes which is why we use the container format
4. `Recording Quality` will ideally be set to `Indistinguishable Quality, Large File Size`
    * this is to maximize the quality of the recorded modV session. Compression artefacts are more visible in the lower `Recording Quality` options
5. Encoder should ideally be set to `NVENC`, if you do not have this option try selecting anything which has a Hardware option
    * We suggest adapting this setting to your own computer's requirements. This article explains more on how to determin the encoder setting: [https://blog.streamlabs.com/how-to-optimize-your-settings-for-streamlabs-obs-f65d3cfdf196](https://blog.streamlabs.com/how-to-optimize-your-settings-for-streamlabs-obs-f65d3cfdf196)

### Configuring Twitch

Follow this guide on how to connect OBS to Twitch: [https://www.tomsguide.com/uk/us/how-to-stream-to-twitch,news-21077.html](https://www.tomsguide.com/uk/us/how-to-stream-to-twitch,news-21077.html)

### Recording / Streaming

In the main OBS window, click "Start Recording" to record locally.
If you want to stream, click "Start Streaming".
