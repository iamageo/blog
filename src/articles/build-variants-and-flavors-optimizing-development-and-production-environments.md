---
title: "Build Variants and Flavors: Optimizing Development and Production Environments"
date: "2025-06-06"
tags: ["android", "gradle"]
location: "Santarém, PA"
---

# Build Variants and Flavors: Optimizing Development and Production Environments

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*fc_0Hqq5QVzmMraOjhed5A.png)

In Android development, flexibility and efficiency are essential. One strategy to achieve these goals is using **Build Variants** and **Product Flavors** in Gradle. These features allow you to create different versions of the same app with specific configurations for development, staging, and production—without maintaining multiple separate projects.

In this post, we'll explore what build variants and flavors are, how to configure them in Gradle, and the benefits they bring to the development lifecycle.

## What are Build Variants and Flavors?

- **Build Variants**: Result from the combination of build types (such as `debug` and `release`) with product flavors. This creates a specific variant of your app.
- **Product Flavors**: Allow you to define different versions of the same app, for example, to separate environments (development, testing, production) or offer distinct features for different clients.

## Benefits of Using Build Variants and Flavors

- **Customization**: Tailor resources, configurations, and even code for each variant.
- **Automation**: Simplify the build process, avoiding manual configurations for each environment.
- **Scalability**: Maintain multiple app versions in an organized and consistent way.

## Configuring Build Variants and Flavors in Gradle

![App preview used in the article](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*MAeVzsoP8N1wu2E0.png)

For this article, we’ll use **Nottye**, a minimalist note-taking app built with **Jetpack Compose**, following the **MVVM** architecture, using **Hilt** for dependency injection, **Flow** for state management, and **Room** as the local database. You can check the source code [here](https://github.com/iamageo/Nottye).

### Basic Configuration in `build.gradle`

Inside your app module (`app/build.gradle`), you can define build types and product flavors as follows:

```gradle
flavorDimensions += "environment"
productFlavors {
    create("dev") {
        dimension = "environment"
        applicationIdSuffix = ".dev"
        versionNameSuffix = "-dev"
    }
    create("staging") {
        dimension = "environment"
        applicationIdSuffix = ".staging"
        versionNameSuffix = "-staging"
    }
    create("prod") {
        dimension = "environment"
    }
}
```

![Variants](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*nZ3Ytwo9YDvAnRvAixwgWA.png)

This configuration will generate combinations like:

- `devDebug`
- `devRelease`
- `stagingDebug`
- `prodRelease`

These combinations enable isolated testing for each environment with specific build, security, and performance settings.

## Customizing App Name, Icon, and Resources by Flavor

### a. App Name

Create flavor-specific `strings.xml` files:

```
src/
├── dev/res/values/strings.xml
├── staging/res/values/strings.xml
├── prod/res/values/strings.xml
```

Example (`src/staging/res/values/strings.xml`):

```xml
<resources>
    <string name="app_name">Nottye Staging</string>
</resources>
```

When building the `staging` variant, the app will display “Nottye Staging” on the device. This makes it much easier to identify which environment is being used—especially during testing.

![Staging app installed](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*EpEnzhi2Eg7mJ7Bvk3DtZw.png)

### b. Icons and Resources

Just like the app name, you can customize the **app icon**, **colors**, **images**, or **themes** for each flavor by placing resources inside each `src/dev/`, `src/staging/`, etc. The Android Studio build system automatically selects the correct resources per flavor.

## Conclusion

Configuring **Build Variants** and **Product Flavors** is one of the most powerful ways to organize multiple environments professionally and scalably.

If you're using CI/CD, this structure makes it easier to automate builds and deployments for each environment.

📌 The full Nottye codebase is available [on GitHub](https://github.com/iamageo/Nottye).  
📂 The branch with all configuration shown in this article is [here](https://github.com/iamageo/Nottye/commit/1729d2f2b02cce06dc62edf2139d2925088e1ff7).
