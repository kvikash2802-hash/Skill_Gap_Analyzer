
const skills = [
    "python", "java", "sql", "html", "css",
    "javascript", "pandas", "numpy",
    "excel", "power bi", "tableau",
    "machine learning", "data analytics"
];

function analyzeSkills() {

    let jobDescription = document.getElementById("jobDescription").value.toLowerCase();

    let mySkills = document.getElementById("mySkills").value.toLowerCase();

    let requiredSkills = [];
    let matchedSkills = [];
    let missingSkills = [];

    // Find required skills
    for (let skill of skills) {
        if (jobDescription.includes(skill)) {
            requiredSkills.push(skill);
        }
    }

    // Compare user skills
    let userSkills = mySkills.split(",").map(s => s.trim());

    for (let skill of requiredSkills) {
        if (userSkills.includes(skill)) {
            matchedSkills.push(skill);
        } else {
            missingSkills.push(skill);
        }
    }

    // Calculate percentage
    let percentage = 0;

    if (requiredSkills.length > 0) {
        percentage = (matchedSkills.length / requiredSkills.length) * 100;
    }

    // Display output
    document.getElementById("required").innerText =
        "Required Skills: " + (requiredSkills.join(", ") || "None");

    document.getElementById("matched").innerText =
        "Matched Skills: " + (matchedSkills.join(", ") || "None");

    document.getElementById("missing").innerText =
        "Missing Skills: " + (missingSkills.join(", ") || "None");

    document.getElementById("percentage").innerText =
        "Skill Match: " + percentage.toFixed(2) + "%";

    // Show hidden result section
    document.getElementById("result").hidden = false;
}
