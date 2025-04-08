document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    if (!name.value.trim()) {
        alert("Please enter your name.");
        name.focus();
        return;
    }

    if (!email.value.trim()) {
        alert("Please enter your email.");
        email.focus();
        return;
    }

    if (!message.value.trim()) {
        alert("Please enter your message.");
        message.focus();
        return;
    }

    alert("Message sent successfully!");
});
