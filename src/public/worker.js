console.log("Service worker");

self.addEventListener('push', e => {
    const data = e.data.json();
    console.log(data)
    console.log('Notification Received');
    self.registration.showNotification(data.title, {
        body: data.message,
        icon: 'https://static.vecteezy.com/system/resources/previews/000/546/910/non_2x/fox-face-logo-vector-icon.jpg',
    });
});