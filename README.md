# 📱 WhatsApp Clone – React Native App with Push Notifications

This is a simple WhatsApp-like mobile application built using **React Native** that demonstrates **real-time push notifications** using **Firebase Cloud Messaging (FCM)**. It supports **Android 15** and handles background and killed state notifications like WhatsApp.

---

## 🚀 Features

- 📩 Push Notifications with FCM
- 🔕 Notifications appear even when the app is in background or killed
- 🔧 Native module integration with Java for Android notification handling
- 🔗 Deep linking support from notifications
- 🔢 Badge count update
- 🗂️ Local notification storage (optional feature)

---

## 🛠️ Tech Stack

- **React Native**
- **Firebase Cloud Messaging (FCM)**
- **Java (Android Native Module)**
- **react-native-push-notification**

---

## 📂 Project Structure

/WhatsApp-Clone-React-Native
├── android/ (native code with Java for notification handling)
├── firebaseBackground.js (background handler for notifications)
├── App.js
├── package.json
├── .babelrc
└── README.md

yaml
Copy
Edit

---

## ⚙️ Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/your-username/whatsapp-clone-push-notification.git
cd whatsapp-clone-push-notification
Install dependencies

bash
Copy
Edit
npm install --legacy-peer-deps
If using Expo SDK 42, newer packages may cause conflicts, so use --legacy-peer-deps.

Configure Firebase

Go to Firebase Console

Create a new project and add an Android app

Download the google-services.json file and place it in your android/app folder

Enable Firebase Cloud Messaging

Run the app

bash
Copy
Edit
npx react-native run-android
Ensure an Android device/emulator is connected.
```

🔔 Notifications Handling
Native module implemented in Java (MyFirebaseMessagingService.java) handles receiving notifications.

firebaseBackground.js handles background notification events in JS.

Deep linking and badge support is handled inside the native + JS bridge.

📹 Demo
Watch the working demo video here

✅ To-Do (Optional Enhancements)
✅ Local message storage

✅ Display badge counts on app icon

✅ Deep linking to specific chat screens

✅ Basic backend simulation to trigger push

👨‍💻 Author
Vedang Kumar Tripathi
GitHub

📄 License
This project is licensed under the MIT License.




