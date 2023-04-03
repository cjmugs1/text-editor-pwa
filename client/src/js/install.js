const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent the mini-infobar from appearing on mobile
    event.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = event;
    // Update UI to notify the user they can install the PWA
    butInstall.classList.toggle('hidden', false)
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = deferredPrompt;

    if (!promptEvent) {
        // The deferred prompt isn't available.
        return;
    }

    promptEvent.prompt();

    // Reset the deferred prompt variable, it can only be used once.
    deferredPrompt = null;

    butInstall.classList.toggle('hidden', true)
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    alert('J.A.T.E installed successfully')
    deferredPrompt = null;
});
