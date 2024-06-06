function displayDetails(name, role,id) {
    const detailsContainer = document.getElementById("details");
    const memberName = document.getElementById("memberName");
    const memberRole = document.getElementById("memberRole");
    const memberId = document.getElementById("memberId");


    memberName.textContent = name;
    memberRole.textContent = role;
    memberId.textContent = id;

    memberName.classList.add("memberName");
    memberRole.classList.add("memberRole");
    memberId.classList.add("memberId");

    detailsContainer.style.display = "block";
}

document.addEventListener("DOMContentLoaded", function() {
    const detailsContainer = document.getElementById("details");
    detailsContainer.style.display = "none";
});