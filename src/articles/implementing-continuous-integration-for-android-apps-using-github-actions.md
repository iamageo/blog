---
title: "Implementing Continuous Integration for Android Apps using Github Actions"
date: "2025-2-16"
tags: ["android", "ci"]
location: "Santarém, PA"
---

![App preview used in the article](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*Dd9c1a5j5cU3EamU.png)

Continuous Integration (CI) is an essential practice in modern software development that enables early error detection and speeds up application delivery. Today, we'll explore how Github Actions can be the ideal tool for implementing CI in your Android app simply, quickly, and effectively.

## But what is Continuous Integration (CI)?

CI is a practice that encourages developers to integrate small code changes frequently. Each commit is automatically tested and validated, reducing the chance of conflicts and making the code easier to maintain. This approach promotes team collaboration and ensures that the application is always in a functional state.

## Why use Github Actions?

There are many tools to build CI/CD pipelines, such as Jenkins, CircleCI, Bitrise, TravisCI, etc.

Github Actions is a native Github platform that allows creating automated workflows for building, testing, and deploying your app. Its main benefits include:

- **Native Integration**: No need for external tools, as Github Actions integrates directly with your repository.
- **Flexibility**: You can configure custom workflows suitable for various languages and frameworks.
- **Scalability**: Automate repetitive tasks and focus on developing new features.

## Implementing CI with Github Actions

For demonstration purposes, we’ll use a project called [Nottye](https://github.com/iamageo/Nottye), a personal notes app developed with Jetpack Compose following modern Android development practices.

### 1. Workflow Structure

In your project directory, create a folder named `.github/workflows`. Inside it, add a YAML file (e.g., `android.yml`) that defines the CI workflow. Example configuration:

```yaml
name: Android CI
on:
  push:
    branches: [ "master" ]
  pull_request:
    branches: [ "master" ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Set up JDK 17
        uses: actions/setup-java@v3
        with:
          java-version: '17'
          distribution: 'temurin'
          cache: gradle

      - name: Cache Gradle and Wrapper
        uses: actions/cache@v3
        with:
          path: |
            ~/.gradle/caches
            ~/.gradle/wrapper
          key: ${{ runner.os }}-gradle-${{ hashFiles('**/*.gradle*') }}
          restore-keys: |
            ${{ runner.os }}-gradle-

      - name: Grant execute permission for gradlew
        run: chmod +x gradlew

      - name: Build with Gradle
        run: ./gradlew build -Dlint.baselines.continue=true

      - name: Run tests
        run: ./gradlew test

      - name: Upload build artifact
        uses: actions/upload-artifact@v4
        with:
          name: app.apk
          path: ./app/build/outputs/apk/debug/app-debug.apk
          if-no-files-found: error
```

## Explaining the Pipeline

- **Workflow Trigger**: The pipeline is triggered on push or pull request to the master branch.
- **Environment Setup**: It runs on an Ubuntu VM. “Set up JDK 17” installs Java 17 and enables Gradle caching.
- **Gradle Cache**: Caches `~/.gradle/caches` and `~/.gradle/wrapper` to speed up builds.
- **Execution Permission**: `chmod +x gradlew` grants execution permission to the build script.
- **Build and Test**: Executes the build with `./gradlew build` and runs tests with `./gradlew test`.
- **Artifact Upload**: Saves the generated APK (`app-debug.apk`) for manual testing or further deployment.

## In Practice

After following the steps, your Github repository should look like this:

![Repository structure after creating the yml file](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*qffI7Y1mZWnOzWi2vm4ZCg.png)

And under the Actions tab, you'll see this:

![Github Actions tab after adding android.yml](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*5wu2QLIidMP67iGzSaXzRA.png)

## Running the Pipeline

Our pipeline triggers on `on → push and pull requests` to the master branch. You can either push or create a pull request to trigger the workflow.

![Android CI pipeline execution](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*FUJyctfDLMNNgQmxtvttXw.png)

## Customizing Your Pipeline

Each project might require additional steps like advanced linting, automated deploy, or integration with other tools. You can adjust the pipeline to fit the specific needs of your Android project.

## Monitoring and Feedback

After setup, Github Actions offers real-time feedback directly in the Github interface. This fast monitoring helps identify and fix issues right after each commit, maintaining high code quality.

## Conclusion

Using Github Actions to implement CI for Android projects is a practical way to automate processes, reduce errors, and speed up delivery. Continuous integration brings agility and confidence to your team, allowing you to focus on innovation and improving the product.

Consider adopting this practice to transform how you build and deliver Android apps.

**References:**

- https://docs.github.com/pt/actions/writing-workflows/quickstart
- https://medium.com/android-dev-br/configurando-ci-cd-com-github-actions-e-firebase-app-distribution-para-projetos-android-8df02096610b
- https://proandroiddev.com/android-ci-cd-pipeline-with-github-actions-demystifying-github-actions-83258e76a18f
- https://medium.com/google-developer-experts/github-actions-for-android-developers-6b54c8a32f55
