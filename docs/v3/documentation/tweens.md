---
sidebarDepth: 2
---
# Tweens

## Creating a Tween

1. Have a Module ready and select one of the props so it shows up in the Input Config panel.
    I've selected Size on the Text Module here.

    ![Text Module's size prop selected](/images/tweens-1.png)

2. Play around with the Module prop and find a few values you'd like to animate between.
    I found 100 and 200 for the Text Module's size worked well for me.

    The format for the Data is an array of arrays, e.g. `[[100], [200]]`.
    Type this into the Data input and press tab or click away from the input to make it lose the focus ring - your Tween will update.

    ![Showing the data format for tweens](/images/tweens-2.png)

## Tween properties

### Data
To animate between two values, use: `[[100], [200]]`
To animate between three values, use `[[100], [200], [300]]`
etc.

:::tip
You must press tab or lose focus on the text input to update the Tween with the new data.
:::

### Easing
See an example of all easings here: [https://easings.net/](https://easings.net/)

### Duration
The duration of your tween in milliseconds, either the duration of each step or the total tween time - dictated by "Duration as total time"

### Use BPM
If selected, the duration will be the BPM divided by the BPM Divison

### BPM Division
See Use BPM

### Duration as total time
See Duration

### Steps
If set to 0, the tween will be keyframed over duration divided by the current FPS.
If larger than 0, the keyframes will be evenly spread over the duration time divided by the steps. e.g. if set to 4 and your duration is 1000, you will have 4 keyframes which update every 250 milliseconds.
