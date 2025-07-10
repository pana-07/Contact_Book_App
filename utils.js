function getID() {
    var url = window.location.href;
    var pos = url.search("=");
    var id = url.slice(pos + 1);
    return id;
}

/**
 * Displays a message in a designated area on the page for 5 seconds.
 * This function requires an element with the id 'messageArea' to be present in the DOM.
 * @param {string} message The message to display.
 * @param {string} type The type of message ('success' or 'error').
 */
function showMessage(message, type) {
    const messageArea = document.getElementById('messageArea');
    const alertType = type === 'success' ? 'success' : 'danger';
    messageArea.innerHTML = `<div class="alert alert-${alertType}" role="alert">${message}</div>`;
    setTimeout(() => { messageArea.innerHTML = ''; }, 5000);
}