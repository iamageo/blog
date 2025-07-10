---
title: "Sending Custom Notifications with Firebase Cloud Functions"
date: "2025-06-20"
tags: ["android", "fcm"]
location: "Santarém, PA"
---

![Firebase Service Accounts](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*ZbvNP_NFR1SUFxJmkN-eYw.png)

Keeping users engaged with mobile apps is an ongoing challenge. One of the most effective tools for this is **push notifications**, which increase retention, encourage interaction, and keep users connected at the right moment.

To maximize impact, notifications must be **personalized** and **triggered automatically**. This is where **Firebase Cloud Functions** come in, offering a scalable and flexible solution for on-demand notification delivery.

In this tutorial, we'll use **Firebase Cloud Messaging (FCM)** — a reliable and free platform for cross-platform message delivery — in conjunction with **Flutter**.

## Prerequisites

To follow this tutorial smoothly, it's important to have basic knowledge in:

- [Node.js](https://nodejs.org/)
- Firebase ([Firestore](https://firebase.google.com/docs/firestore), [FCM](https://firebase.google.com/docs/cloud-messaging))
- [Firebase Cloud Functions](https://firebase.google.com/docs/functions) (Available only on the [Blaze plan](https://firebase.google.com/pricing))
- [Flutter](https://flutter.dev)

## Setting Up the Environment

### 1. Create a Firebase Project

- Go to the Firebase console
- Create a new project
- Enable **Firebase Cloud Messaging**

### 2. Set up Firebase in Flutter

Add the packages:

```yaml
dependencies:
  firebase_core: ^3.14.0
  firebase_messaging: ^15.2.7
```

Run `flutter pub get` and execute `flutterfire configure` to generate `firebase_options.dart`.

In `main.dart`, initialize Firebase and request notification permissions.

> You can check the complete Flutter project [in this repository](https://github.com/iamageo/fcm_sample_flutter).

## Creating the Cloud Function to Send Notifications

Install Firebase CLI tools:

```bash
npm install -g firebase-tools
```

Initialize the project:

```bash
firebase init functions
```

Choose:

- **Use existing project**
- Language: **JavaScript**
- ESLint: **No** (or Yes)
- Install dependencies: **Yes**

Generated structure:

```
functions/
  package.json
  index.js
  .gitignore
firebase.json
.firebaserc
```

Set up the Cloud Function:

```javascript
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const serviceAccount = require("./admin.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/sendNotification', async (req, res) => {
  const { token, title, body } = req.body;
  if (!token) return res.status(400).json({ message: 'Missing "token" parameter' });

  const payload = {
    notification: {
      title: title || 'Notification',
      body: body || 'You received a new message.',
    }
  };

  try {
    await admin.messaging().send({ token, notification: payload.notification });
    return res.status(200).json({ success: true, message: 'Notification sent successfully' });
  } catch (error) {
    console.error('Error sending notification:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

exports.api = functions.https.onRequest(app);
```

Deploy to Firebase:

```bash
firebase deploy --only functions
```

> You can check the full Node project [here](https://github.com/iamageo/cloud-functions-sample).

## Testing the Function

### Using curl

```bash
curl -X POST   https://us-central1-<YOUR_PROJECT_ID>.cloudfunctions.net/api/sendNotification   -H "Content-Type: application/json"   -d '{
    "token": "<DEVICE_PUSH_TOKEN>",
    "title": "Hello!",
    "body": "Notification test."
  }'
```

### Using Postman

- Method: POST
- URL: `https://us-central1-<YOUR_PROJECT_ID>.cloudfunctions.net/api/sendNotification`

```json
{
  "token": "<DEVICE_PUSH_TOKEN>",
  "title": "Hello!",
  "body": "Notification test."
}
```

### Local Testing

```bash
firebase emulators:start --only functions
```

## Going Further

You can personalize your notifications using Firestore, Realtime Database, or any other source:

```javascript
exports.sendPersonalizedNotifications = functions.pubsub
  .schedule('0 9 * * *')
  .timeZone('America/Sao_Paulo')
  .onRun(async () => {
    const usersSnap = await admin.firestore().collection('users').get();
    const promises = [];

    usersSnap.forEach(doc => {
      const user = doc.data();
      const token = user.push_token;
      const name = user.name || 'friend';
      if (!token) return;

      const payload = {
        notification: {
          title: `Good morning, ${name}!`,
          body: 'Check out today's updates in the app.',
        }
      };

      promises.push(admin.messaging().send({ token, notification: payload.notification }));
    });

    await Promise.all(promises);
    console.log('Personalized notifications sent successfully!');
  });
```

## Conclusion

With Firebase Cloud Functions, you can build a scalable and customized notification system, decoupled from your app logic. This enables dynamic and contextual user experiences.

This is just the beginning — expand by handling events, user segmentation, topic subscriptions, sending custom data, and analytics integration.
