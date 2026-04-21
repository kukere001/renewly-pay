self.addEventListener('install', (e) => {
  console.log('SW установлен');
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  console.log('SW активирован');
});

// Слушаем событие отправки пуша
self.addEventListener('show-notification', (event) => {
  const options = {
    body: event.detail.body,
    icon: 'logo.png',
    badge: 'logo.png',
    vibrate: [200, 100, 200]
  };
  self.registration.showNotification(event.detail.title, options);
});