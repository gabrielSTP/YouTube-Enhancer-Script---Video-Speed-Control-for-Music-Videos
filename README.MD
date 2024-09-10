# YouTube Enhancer Script - Video Speed Control for Music Videos

This JavaScript script is designed to work with the *Enhancer for YouTube* browser extension. It automatically sets the playback speed of YouTube videos to `1.0x` if the video is categorized as "Music". This is useful if you want to avoid speeding up music videos while watching other content at different speeds.

## Features

- **Automatic speed adjustment**: The script monitors the video's category and, if identified as a music video, sets the playback speed to 1.0x.
- **Dynamic detection**: It uses a `MutationObserver` to track changes in the DOM, ensuring it works even when new videos are loaded dynamically.
  
## Installation

1. Install the *Enhancer for YouTube* extension if you haven't already.
2. In the extension settings, find the section for **Custom scripts**.

## Usage

1. Copy the provided JavaScript code.
2. Paste it into the **Custom scripts** section in the settings of the *Enhancer for YouTube* extension.
3. Click the option to **Always run the script**.

Once configured, the script will automatically run whenever you play a YouTube video. If a video is identified as a music video, the speed will be set to 1.0x.

## Disclaimer

This code is provided "as-is" without any warranties or guarantees. By using this script, you acknowledge that the creator of this code is not responsible for any issues or damages that may result from its use. **Use at your own risk.**