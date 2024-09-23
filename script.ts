document.getElementById("resumeForm")?.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLInputElement).value;
    const workExperience = (document.getElementById("workExperience") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value;

    const resumeOutput = document.getElementById("resumeOutput");
    if (resumeOutput) {
        resumeOutput.innerHTML = `
            <h2>Generated Resume</h2>
            <p><strong>Name:</strong> <span class="editable" data-field="name">${name}</span></p>
            <p><strong>Email:</strong> <span class="editable" data-field="email">${email}</span></p>
            <p><strong>Education:</strong> <span class="editable" data-field="education">${education}</span></p>
            <p><strong>Work Experience:</strong> <span class="editable" data-field="workExperience">${workExperience}</span></p>
            <p><strong>Skills:</strong> <span class="editable" data-field="skills">${skills}</span></p>
        `;

        makeEditable();
    }
});

function makeEditable() {
    const editableElements = document.querySelectorAll(".editable");
    editableElements.forEach((element) => {
        element.addEventListener("click", () => {
            const currentText = (element as HTMLElement).innerText; // Cast to HTMLElement
            const inputField = document.createElement("input");
            inputField.value = currentText;
            inputField.classList.add("edit-input");
            element.innerHTML = ""; // Clear current content
            element.appendChild(inputField);

            inputField.addEventListener("blur", () => {
                element.innerHTML = inputField.value; // Update text
                makeEditable(); // Re-apply editable functionality
            });

            inputField.focus();
        });
    });
}
