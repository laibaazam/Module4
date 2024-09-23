var _a;
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var education = document.getElementById("education").value;
    var workExperience = document.getElementById("workExperience").value;
    var skills = document.getElementById("skills").value;
    var resumeOutput = document.getElementById("resumeOutput");
    if (resumeOutput) {
        resumeOutput.innerHTML = "\n            <h2>Generated Resume</h2>\n            <p><strong>Name:</strong> <span class=\"editable\" data-field=\"name\">".concat(name, "</span></p>\n            <p><strong>Email:</strong> <span class=\"editable\" data-field=\"email\">").concat(email, "</span></p>\n            <p><strong>Education:</strong> <span class=\"editable\" data-field=\"education\">").concat(education, "</span></p>\n            <p><strong>Work Experience:</strong> <span class=\"editable\" data-field=\"workExperience\">").concat(workExperience, "</span></p>\n            <p><strong>Skills:</strong> <span class=\"editable\" data-field=\"skills\">").concat(skills, "</span></p>\n        ");
        makeEditable();
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll(".editable");
    editableElements.forEach(function (element) {
        element.addEventListener("click", function () {
            var currentText = element.innerText; // Cast to HTMLElement
            var inputField = document.createElement("input");
            inputField.value = currentText;
            inputField.classList.add("edit-input");
            element.innerHTML = ""; // Clear current content
            element.appendChild(inputField);
            inputField.addEventListener("blur", function () {
                element.innerHTML = inputField.value; // Update text
                makeEditable(); // Re-apply editable functionality
            });
            inputField.focus();
        });
    });
}
