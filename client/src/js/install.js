const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent the mini-infobar from appearing on mobile
    event.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = event;
    // Update UI to notify the user they can install the PWA
    butInstall.classList.toggle('hidden', false)
});

// Adds click listener to the install button
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

// Handler for the app installed event
window.addEventListener('appinstalled', (event) => {
    alert('J.A.T.E installed successfully')
    deferredPrompt = null;
});
