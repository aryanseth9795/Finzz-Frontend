# Promo videos (9:16 MP4)
Onboarding/promo clips streamed by the Finzz Android app from https://finzz.aryantechie.in/videos/<name> in a WebView video tag.
The App links them by exact file name in src/constants/onboarding.ts; do not rename without updating it.
Source and re-render pipeline: Agent/promo (Remotion), output in Agent/promo/out/videos.
Keep the moov atom first (faststart): ffmpeg -i in.mp4 -c copy -movflags +faststart out.mp4.
Next serves these statically with Range support; Cache-Control is set in next.config.ts.
