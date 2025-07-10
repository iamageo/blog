---
title: "How to Create a SplashScreen in Android"
date: "2021-9-17"
tags: ["android", "lottie"]
location: "Tucuruí, PA"
---

![More animation examples can be seen on Github](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*BtxcP1FXbunIiVvwMkxllA.gif)

In this article, I’ll explain how to create a splash screen in Android using the [**Lottie**](https://airbnb.io/lottie/#/) library, developed by Airbnb. We’ll also explore the advantages of using a Lottie animation instead of a static image or gif.

Getting to Know Lottie
======================

[Lottie](https://airbnb.io/lottie/#/) is a library for Android and iOS that renders animations from [Adobe After Effects](http://www.adobe.com/products/aftereffects.html) exported as JSON using [Bodymovin](https://github.com/airbnb/lottie-web), and plays them natively on mobile!

Why use JSON animations?
------------------------

Here are some key advantages of using Bodymovin JSON animations:

1.  **GIFs** are more than twice the size of a **JSON** animation and render at a fixed size that cannot scale to larger or high-density screens.
2.  **PNG** sequences are even worse, typically 30–50 times larger than a bodymovin JSON and also not scalable.
3.  Animated **Vector Drawables** require more performance as they run on the RenderThread instead of the main thread.

What is a **SplashScreen?**
===========================

Splash screens are typically the first screen users see when opening an app. They’re useful for branding or displaying a logo while some processing happens in the background.

Implementation Steps
====================

In this article, we’ll follow 4 steps to create our splash screen:

1. Add the **_Lottie_** dependency in _build.gradle_
2. Download a **.json** animation
3. Create the **Activity** for the splash screen
4. Add the animation to the layout XML

Adding the Lottie Dependency
============================

In your app-level `build.gradle`, add the following line and hit **Sync**:

```gradle
implementation 'com.airbnb.android:lottie:4.1.0'
```

Downloading an Animation
=========================

You can get a JSON animation from [LottieFiles](https://lottiefiles.com). Go to **_Discover > Free Animations_** and pick one you like.

![Download example](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*q4_FkiBDU1vL_RWBCO5_5Q.png)

After downloading, create a `raw` directory inside `res/` and place the JSON file there:

![Raw folder example](https://miro.medium.com/v2/resize:fit:550/format:webp/1*HEIv0aRXpXqfYtRs7OyyIA.png)

Creating the SplashScreen Activity
==================================

Create a new activity named `SplashScreen`, which will handle the delay logic:

![Creating an Activity](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*H1Pi33ZaCe7BoD_zWNukBA.png)

Then, add the necessary code to trigger the animation.

Adding Animation to the Layout
==============================

In `activity_splash_screen.xml`, add the Lottie animation using the official example:

Parameters
==========

- **lottie_autoPlay**: Boolean to start animation automatically.
- **lottie_loop**: Boolean to repeat the animation.
- **lottie_rawRes**: Reference to the animation JSON in the raw folder.

Final Result
============

![The animation used](https://miro.medium.com/v2/resize:fit:576/format:webp/1*X4XOsMqydrqWynZBKuPlXg.gif)

![See you next time!](https://miro.medium.com/v2/resize:fit:960/format:webp/1*9GJWUvET3it_2XPX9CAUXw.gif)

That’s it — an elegant way to create a beautiful splash screen with Lottie! Thanks for reading and see you next time! 😄
