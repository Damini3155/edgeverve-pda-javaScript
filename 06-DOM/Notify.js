/*
Notification API

Notification API - Used to display notifications to the user
through the browser or desktop.

It provides information to the user asynchronously.

Constructor:
Notification() - Used to create a new notification instance.

Notification.permission - Returns the current permission status.

It returns one of three values:

1. "denied" - User has denied notification permission.

2. "granted" - User has allowed notification permission.

3. "default" - User has not yet decided whether to allow notifications.

Notification.requestPermission() - Requests permission from the user
to display notifications.

Notification options/properties:

body - Specifies the text displayed in the notification.

icon - Specifies the icon displayed in the notification.

image - Specifies an image displayed in the notification.

silent - Specifies whether the notification should make a sound.

requireInteraction - Specifies whether the notification should remain
visible until the user interacts with it.

to checkif this feature is avialable or ont then use ("Notaification" in Window)
*/

if (!("Notification" in window)) {
  alert("Notifications not supported by Browser");
}

document.getElementById("id1").addEventListener("click", async () => {
  if (Notification.permission === "granted") {
    showNotification();
    return;
  }

  if (Notification.permission === "denied") {
    alert("Notifications are blocked, Enable from the browser");
    return;
  }

  if (Notification.permission === "default") {
    const permission = await Notification.requestPermission();

    if (permission === "granted") {
      showNotification();
      return;
    } else if (permission === "denied") {
      alert("Notifications are blocked by the user");
    }
  }
});

function showNotification() {
  new Notification("Hello!", {
    body: "This is a browser notification.",
    requireInteraction:true,
  });
}