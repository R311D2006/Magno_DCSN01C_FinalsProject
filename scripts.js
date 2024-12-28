function toggleMoreInfo(destination) {
    const moreInfo = document.getElementById(destination);
    if (moreInfo.style.display === "block") {
        moreInfo.style.display = "none";
    } else {
        moreInfo.style.display = "block";
    }
}

function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("All fields are required!");
        return false;
    }
    return true;
}
