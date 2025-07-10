---
title: "How to Create and Publish an Android Library"
date: "2021-08-21"
tags: ["android", "library"]
location: "Tucuruí, PA"
---

How to Create and Publish an Android Library
=============================================

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Cp4OFWarwXkgoOJtvmOINg.jpeg)

[Reference](https://medium.com/@iamageo/como-criar-e-publicar-uma-biblioteca-android-a3d058387562)

by [Geovani Amaral](https://medium.com/@iamageo?source=post_page---byline--a3d058387562---------------------------------------)


Libraries are a huge part of a developer’s life: organizing code, reducing repetition, testing, and more. In this tutorial, I’ll show you how to create a simple library in [_Kotlin_](https://kotlinlang.org/) and publish it using [_Jitpack_](https://jitpack.io/).

We’ll build a library that simply shows a [_Toast_](https://developer.android.com/guide/topics/ui/notifiers/toasts). The goal is to focus on the publishing concept, so the utility itself will be minimal :)

> All the source code for this tutorial is available [here](https://github.com/iamageo/sample_library). ✨

Creating the Project in Android Studio
======================================

First, create a new project with any name you prefer.

![Creating the base project](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*wWlkWkA7GFjVpclISqsIyg.png)

Once the project is ready, go to **_File_** _>_ **_New_** _>_ **_New Module…_**

Select **_Android Library_**, give it a name, and click **_Finish_**.

![Creating the library module](https://miro.medium.com/v2/resize:fit:1374/format:webp/1*tTqajO7myO7htpZVTlLALw.png)

After finishing, your project structure should look like this:

![Project view](https://miro.medium.com/v2/resize:fit:984/format:webp/1*tHYO4a3_l-1yxFgP0Yqjcg.png)

It's worth noting that you’ll have three `build.gradle` files:

1.  `build.gradle (project level)`
2.  `build.gradle (app module)`
3.  `build.gradle (library module)`

![Gradle Scripts](https://miro.medium.com/v2/resize:fit:966/format:webp/1*IJM4glGAJ4L3LXOr1Kujpg.png)

With our module created, we can now develop our library. For this tutorial, we’ll create a lib that shows a simple Toast.

To do that, create a class named **_AwesomeToast_** with the following code:

To test it, import the library directly in the **_build.gradle_** of the **_app module_**.

![Importing the library module](https://miro.medium.com/v2/resize:fit:1086/format:webp/1*CCxSa1zC4BcpJVlBidt37g.png)

After syncing, call the **_showToast()_** function inside your **_MainActivity.kt_**.

<b>[other]Using the library in MainActivity[/other]</b>

Then, run the project... 🎉🎉🎉

![Execution result](https://miro.medium.com/v2/resize:fit:810/format:webp/1*Ft3UUZdCWjPYvDvXJf-xDA.png)

Publishing 🚀
=============

As mentioned earlier, we’ll use [_Jitpack_](https://jitpack.io/) to publish our library. But first, we need to take a few steps:

The first is to add artifact configuration to the **_build.gradle_** of the **_library module_** (see the commit below for reference).

> All `build.gradle` changes can be seen in this [**commit**](https://github.com/iamageo/sample_library/commit/06f3c44f84e91c2bb6f5d454278d12a18377935b). ✨

Basically, you must set the **_group_** and **_groupId_** to your GitHub name, set the **_version_** to your library’s current version, and **_artifactId_** to the identifier name of the library (usually the same as the module name, in my case: awesome-toast).

> To learn more about building with Jitpack, check the [documentation](https://jitpack.io/docs/BUILDING/#gradle-projects)

<b>[other]build.gradle with artifact configuration[/other]</b>

Once that’s done, create a release on GitHub for the library.

Add a tag, title, and description, then click **_Publish release._**

![Creating GitHub release](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*gBOmGoAxhbcpml3Hz54_MA.png)

The final step is to log in to _Jitpack_ with your _GitHub_ account and search for your repository.

Then click **_Get it_** and wait... 🚧

![captionless image](https://miro.medium.com/v2/resize:fit:1374/format:webp/1*RBMS7aWlx19LAyXXwsRdcg.png)

And voilà, your library is published! 🚀🚀🚀

![Final Jitpack build](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*vvJV6K_Nv4kkLiuPrKcINg.png)

To include it in future projects, just add the following line to your `build.gradle` file:

```gradle
dependencies {	          
    implementation 'com.github.iamageo:sample_library:1.0.0'
}
```

![Até a próxima](https://miro.medium.com/v2/resize:fit:960/format:webp/0*gOB_XTo91XeIX4iE.gif)

This was an example of how to create and publish a native library using Kotlin and Jitpack.

Thanks for reading — see you next time! 😊