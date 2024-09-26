const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;
const shareableLinkContainer = document.getElementById('link') as HTMLDivElement;
const shareableLinkElement = document.getElementById('share-link') as HTMLAnchorElement;
const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;

form.addEventListener('submit', (event : Event) =>{
    event.preventDefault();

    let name = (document.getElementById('name') as HTMLInputElement).value
    let email = (document.getElementById('email') as HTMLInputElement).value
    let phone = (document.getElementById('phone') as HTMLInputElement).value
    let edu = (document.getElementById('edu') as HTMLInputElement).value;
    let skills = (document.getElementById('skills') as HTMLInputElement).value;
    let experience = (document.getElementById('experience') as HTMLInputElement).value;
    const username = (document.getElementById('username') as HTMLInputElement).value;

    const resumeData = {
        name,
        email,
        phone,
        edu,
        experience,
        skills,
        };
        localStorage.setItem(username, JSON.stringify(resumeData));

    const resumeHTML = `
    <h2><b>Editable Resume</b></h2>
    <h3><b>Personal Information</b></h3>
    <p><b>Name:</b><span contenteditable="true"> ${name}</span></p>
    <p><b>Email:</b><span contenteditable="true"> ${email}</span></p>
    <p><b>Phone:</b><span contenteditable="true"> ${phone}</span></p>

    <h3><b>Education</b></h3>
    <p contenteditable="true">${edu}</p>

    <h3><b>Skills</b></h3>
    <p contenteditable="true">${skills}</p>

    <h3><b>Experience</b></h3>
    <p contenteditable="true">${experience}</p>
    `;

    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML
    }

    const shareableURL =
`${window.location.origin}?username=${encodeURIComponent(username)}`;
// Display the shareable link
shareableLinkContainer.style.display = 'block';
shareableLinkElement.href = shareableURL;
shareableLinkElement.textContent = shareableURL;
});

downloadPdfButton.addEventListener('click', () => {
window.print();
});


window.addEventListener('DOMContentLoaded', () => {
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');
if (username) {

    
const savedResumeData = localStorage.getItem(username);
if (savedResumeData) {
const resumeData = JSON.parse(savedResumeData);
(document.getElementById('username') as HTMLInputElement).value =
username;
(document.getElementById('name') as HTMLInputElement).value =
resumeData.name;
(document.getElementById('email') as HTMLInputElement).value =
resumeData.email;
(document.getElementById('phone') as HTMLInputElement).value =
resumeData.phone;
(document.getElementById('education') as HTMLTextAreaElement).value =
resumeData.education;
(document.getElementById('experience') as HTMLTextAreaElement).value
= resumeData.experience;
(document.getElementById('skills') as HTMLTextAreaElement).value =
resumeData.skills;
}
}
});


