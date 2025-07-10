---
title: "Migrating Android Build to Version Catalog in Gradle"
date: "2025-03-19"
tags: ["android", "gradle"]
location: "Santarém, PA"
---

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*agOWPyDlPX9byl4ecpdksA.png)

If you’ve ever had to update a dependency across multiple modules in your project and had to change several `build.gradle` files, then **Version Catalog** is the solution you’re looking for.

Version Catalog is a Gradle feature that allows you to manage dependencies and plugins in a more organized and scalable way. If your project has multiple modules and you want to maintain consistent dependency versions, this approach will help streamline your code maintenance.

## Why use Version Catalog?

Before getting started, here are a few benefits of Version Catalog:

- **Organization** — Centralizes all versions in a single file.
- **Ease of Updates** — No need to modify each `build.gradle` individually.
- **Better Maintenance** — Reduces the risk of dependency conflicts.
- **Improved Autocomplete** — Better integration with Android Studio.

For this article, I’ll use a barcode reader app I developed. You can find the source code [here](https://github.com/iamageo/QrCodeApp).

## Creating a Version Catalog in Gradle

In the `gradle` folder of your root project, create a file named `libs.versions.toml`. Gradle will look for this file by default, as specified in the [documentation](https://docs.gradle.org/current/userguide/platforms.html#sub:conventional-dependencies-toml).

```
  📂 QrCodeApp
 ├── 📂 app
 ├── 📂 gradle
 │    ├── libs.versions.toml
 │    ├── other.gradle.files
 ├── build.gradle.kts
```

Inside `libs.versions.toml`, define three sections:

```
[versions]
[libraries]
[plugins]
```

### Structure of `libs.versions.toml`

- **[versions]** → Defines all library and plugin versions in one place.
- **[libraries]** → Maps dependencies using friendly names.
- **[plugins]** → Organizes Gradle plugins for modular and reusable configurations.

### Real example

#### For a dependency:

```
[versions]
appcompat = "1.7.0"

[libraries]
appcompat = { module = "androidx.appcompat:appcompat", version.ref = "appcompat" }
```

#### For a plugin:

```
[versions]
androidApplication = "8.3.2"

[plugins]
android-application = { id = "com.android.application", version.ref = "androidApplication" }
```

Now, let’s migrate actual project dependencies...

```groovy
dependencies {
    implementation "org.jetbrains.kotlin:kotlin-stdlib:$kotlin_version"
    implementation 'androidx.core:core-ktx:1.15.0'
    implementation 'androidx.appcompat:appcompat:1.7.0'
    implementation 'com.google.android.material:material:1.12.0'
    implementation 'androidx.constraintlayout:constraintlayout:2.2.1'
    testImplementation 'junit:junit:4.13.2'
    androidTestImplementation 'androidx.test.ext:junit:1.2.1'
    androidTestImplementation 'androidx.test.espresso:espresso-core:3.6.1'
    implementation 'com.journeyapps:zxing-android-embedded:4.1.0'
    implementation 'com.google.zxing:core:3.4.0'
    implementation 'com.airbnb.android:lottie:6.3.0'
}
```

### Resulting `libs.versions.toml`

```toml
[versions]
androidApplication = "8.3.2"
kotlinAndroid = "2.1.0"
appcompat = "1.7.0"
constraintlayout = "2.2.1"
core = "3.4.0"
coreKtx = "1.15.0"
espressoCore = "3.6.1"
junit = "4.13.2"
junitVersion = "1.2.1"
kotlinStdlib = "2.1.0"
lottie = "6.3.0"
material = "1.12.0"
zxingAndroidEmbedded = "4.1.0"

[plugins]
android-application = { id = "com.android.application", version.ref = "androidApplication" }
kotlin-android = { id = "org.jetbrains.kotlin.android", version.ref = "kotlinAndroid" }

[libraries]
appcompat = { module = "androidx.appcompat:appcompat", version.ref = "appcompat" }
constraintlayout = { module = "androidx.constraintlayout:constraintlayout", version.ref = "constraintlayout" }
core = { module = "com.google.zxing:core", version.ref = "core" }
core-ktx = { module = "androidx.core:core-ktx", version.ref = "coreKtx" }
espresso-core = { module = "androidx.test.espresso:espresso-core", version.ref = "espressoCore" }
ext-junit = { module = "androidx.test.ext:junit", version.ref = "junitVersion" }
junit = { module = "junit:junit", version.ref = "junit" }
kotlin-stdlib = { module = "org.jetbrains.kotlin:kotlin-stdlib", version.ref = "kotlinStdlib" }
lottie = { module = "com.airbnb.android:lottie", version.ref = "lottie" }
material = { module = "com.google.android.material:material", version.ref = "material" }
zxing-android-embedded = { module = "com.journeyapps:zxing-android-embedded", version.ref = "zxingAndroidEmbedded" }
```

### Using in your Gradle files

For libraries:

```kotlin
dependencies {
    implementation libs.kotlin.stdlib
}
```

For plugins:

```kotlin
plugins {
    alias(libs.plugins.android.application)
}
```

## Conclusion

Migrating to Version Catalog improves project maintainability by making dependency management more **scalable and organized**. With this change, you gain:

- A single source of truth for versions.
- Better control and consistency.
- More readable and DRY (Don't Repeat Yourself) build files.

If your project doesn’t use Version Catalog yet, now’s a great time to consider switching!

You can check the complete migration in this [commit](https://github.com/iamageo/QrCodeApp/commit/2339e78028581fb8244293a2bb2939734d6dee99).

For more details, refer to the [official documentation](https://developer.android.com/build/migrate-to-catalogs?hl=pt-br#kts).

Thanks for reading! See you next time.
