var form = document.getElementById('resumeForm');
var resumeContainer = document.getElementById('resumeContainer');
var displayName = document.getElementById('displayName');
var displayEmail = document.getElementById('displayEmail');
var displayEducation = document.getElementById('displayEducation');
var displayExperience = document.getElementById('displayExperience');
var displaySkills = document.getElementById('displaySkills');
var downloadHtmlBtn = document.getElementById('downloadHtml');
var shareLinkBtn = document.getElementById('shareLink');
var sharedLinkContainer = document.getElementById('sharedLinkContainer');
var sharedLink = document.getElementById('sharedLink');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    displayName.textContent = name;
    displayEmail.textContent = email;
    displayEducation.textContent = education;
    displayExperience.textContent = experience;
    displaySkills.textContent = skills;
    resumeContainer.style.display = 'block';
});
downloadHtmlBtn.addEventListener('click', function () {
    var resumeContent = "\n        <html>\n        <head>\n            <title>Resume</title>\n        </head>\n        <body>\n            <h2>Resume</h2>\n            <p><strong>Name:</strong> ".concat(displayName.textContent, "</p>\n            <p><strong>Email:</strong> ").concat(displayEmail.textContent, "</p>\n            <p><strong>Education:</strong> ").concat(displayEducation.textContent, "</p>\n            <p><strong>Work Experience:</strong> ").concat(displayExperience.textContent, "</p>\n            <p><strong>Skills:</strong> ").concat(displaySkills.textContent, "</p>\n        </body>\n        </html>\n    ");
    var blob = new Blob([resumeContent], { type: 'text/html' });
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'resume.html';
    link.click();
});
shareLinkBtn.addEventListener('click', function () {
    var userName = document.getElementById('name').value.toLowerCase().replace(/\s+/g, '-');
    var uniqueLink = "http://yourprojectname.verce.lapp".concat(userName, "-resume");
    sharedLink.href = uniqueLink;
    sharedLink.textContent = uniqueLink;
    sharedLinkContainer.style.display = 'block';
});
