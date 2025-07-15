// public/sw.js

self.addEventListener("push", function (event) {
    const data = event.data?.json() || {};
    console.log("[Service Worker] Push Received:", data); // Debug log
  
    const title = data.title || "Notification";
    const options = {
      body: data.body || "You have a new message.",
      icon: "/logo/clevercat_logo_withname.webp", // optional
      badge: "/badge.png",
    };
  
    event.waitUntil(self.registration.showNotification(title, options));
  });
  
  self.addEventListener("notificationclick", function (event) {
    console.log("[Service Worker] Notification click:", event.notification); // Debug log
    event.notification.close();
    event.waitUntil(clients.openWindow("/report")); // replace with your page
  });
  