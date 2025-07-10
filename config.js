const rootPath = "https://mysite.itvarsity.org/api/ContactBook/";
const apiEndpoints = {
    getContacts: `${rootPath}controller/get-contacts/`,
    insertContact: `${rootPath}controller/insert-contact/`,
    editContact: `${rootPath}controller/edit-contact/`,
    deleteContact: `${rootPath}controller/delete-contact/`,
    validateApiKey: `${rootPath}controller/api-key/`
};

let apiKey = checkApiKey();

function checkApiKey() {
    const key = localStorage.getItem("apiKey");
    if (!key && !window.location.href.includes("enter-api-key.html")) {
        window.location.href = "enter-api-key.html";
        return null;
    }
    return key;
}