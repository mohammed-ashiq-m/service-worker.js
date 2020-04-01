
const PUBLIC_VAPID_KEY="< ---------- Drop Your Public Key ---------- >"


const subscription = async () => {
    // Service Worker
    console.log("Registering a Service worker");
    const register = await navigator.serviceWorker.register("/worker.js", {
      scope: "/"
    });
    console.log("new service worker")

     // Listen Push Notifications
     console.log("Listening Push Notifications");
   const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: PUBLIC_VAPID_KEY
    });
    console.log(subscription);

    // Send Notification
    await fetch("/subscription", {
        method: "POST",
        body: JSON.stringify(subscription),
        headers: {
          "Content-Type": "application/json"
        }
      });
    console.log("Subscribed!")
}

// UI
const form = document.querySelector('#myform');
const message = document.querySelector('#message');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch('/new-message', {
    method: 'POST',
    body: JSON.stringify({message: message.value}),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  form.reset();
});
if ("serviceWorker" in navigator) {
    subscription().catch(err => console.log(err));
  }