// import { jsPDF } from "jspdf"; // Import jsPDF

// const form = document.getElementById('resumeForm') as HTMLFormElement;
// const resumeContainer = document.getElementById('resumeContainer') as HTMLElement;
// const displayName = document.getElementById('displayName') as HTMLElement;
// const displayEmail = document.getElementById('displayEmail') as HTMLElement;
// const displayEducation = document.getElementById('displayEducation') as HTMLElement;
// const displayExperience = document.getElementById('displayExperience') as HTMLElement;
// const displaySkills = document.getElementById('displaySkills') as HTMLElement;
// const downloadHtmlBtn = document.getElementById('downloadHtml') as HTMLButtonElement;
// const shareLinkBtn = document.getElementById('shareLink') as HTMLButtonElement;
// const sharedLinkContainer = document.getElementById('sharedLinkContainer') as HTMLElement;
// const sharedLink = document.getElementById('sharedLink') as HTMLAnchorElement;

// form.addEventListener('submit', (event) => {
//     event.preventDefault();

    
//     const name = (document.getElementById('name') as HTMLInputElement).value;
//     const email = (document.getElementById('email') as HTMLInputElement).value;
//     const education = (document.getElementById('education') as HTMLTextAreaElement).value;
//     const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
//     const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;


//     displayName.textContent = name;
//     displayEmail.textContent = email;
//     displayEducation.textContent = education;
//     displayExperience.textContent = experience;
//     displaySkills.textContent = skills;

//     resumeContainer.style.display = 'block';
// });

// downloadHtmlBtn.addEventListener('click', () => {
//     const resumeContent = `
//         <html>
//         <head>
//             <title>Resume</title>
//         </head>
//         <body>
//             <h2>Resume</h2>
//             <p><strong>Name:</strong> ${displayName.textContent}</p>
//             <p><strong>Email:</strong> ${displayEmail.textContent}</p>
//             <p><strong>Education:</strong> ${displayEducation.textContent}</p>
//             <p><strong>Work Experience:</strong> ${displayExperience.textContent}</p>
//             <p><strong>Skills:</strong> ${displaySkills.textContent}</p>
//         </body>
//         </html>
//     `;

//     const blob = new Blob([resumeContent], { type: 'text/html' });
//     const link = document.createElement('a');
//     link.href = URL.createObjectURL(blob);
//     link.download = 'resume.html';
//     link.click();
// });


// shareLinkBtn.addEventListener('click', () => {
//     const userName = (document.getElementById('name') as HTMLInputElement).value.toLowerCase().replace(/\s+/g, '-');
//     const uniqueLink =`http://yourprojectname.verce.lapp${userName}-resume`;
//     sharedLink.href = uniqueLink;
//     sharedLink.textContent = uniqueLink;
//     sharedLinkContainer.style.display = 'block';
// });
//     const doc = new jsPDF();
    
//     // Get form values again (just in case)
//     const name = displayName.textContent || '';
//     const email = displayEmail.textContent || '';
//     const education = displayEducation.textContent || '';
//     const experience = displayExperience.textContent || '';
//     const skills = displaySkills.textContent || '';

//     // Set the PDF title and content
//     doc.setFont('helvetica', 'normal');
//     doc.setFontSize(16);
//     doc.setTextColor(0, 102, 204); // Color for Name and Email
//     doc.text('Name: ' + name, 20, 30);
//     doc.text('Email: ' + email, 20, 40);

//     // Set content for Education, Experience, and Skills
//     doc.setFontSize(14);
//     doc.setTextColor(0, 0, 0); // Black text for these sections
//     doc.text('Education:', 20, 60);
//     doc.text(education, 20, 70);
    
//     doc.text('Work Experience:', 20, 100);
//     doc.text(experience, 20, 110);
    
//     doc.text('Skills:', 20, 140);
//     doc.text(skills, 20, 150);

//     // Save the PDF with a dynamic name based on the user
//     doc.save(`${name}_resume.pdf`);











// Select form and container elements
// const resumeForm = document.getElementById("resumeForm") as HTMLFormElement;
// const resumeContainer = document.getElementById("resumeContainer") as HTMLDivElement;
// const displayName = document.getElementById("displayName") as HTMLSpanElement;
// const displayEmail = document.getElementById("displayEmail") as HTMLSpanElement;
// const displayEducation = document.getElementById("displayEducation") as HTMLSpanElement;
// const displayExperience = document.getElementById("displayExperience") as HTMLSpanElement;
// const displaySkills = document.getElementById("displaySkills") as HTMLSpanElement;
// const downloadHtmlButton = document.getElementById("downloadHtml") as HTMLButtonElement;
// const sharedLinkContainer = document.getElementById("sharedLinkContainer") as HTMLDivElement;
// const sharedLink = document.getElementById("sharedLink") as HTMLAnchorElement;

// // Handle form submission
// resumeForm.addEventListener("submit", (e: Event) => {
//   e.preventDefault();

//   // Get form values
//   const name = (document.getElementById("name") as HTMLInputElement).value;
//   const email = (document.getElementById("email") as HTMLInputElement).value;
//   const education = (document.getElementById("education") as HTMLTextAreaElement).value;
//   const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
//   const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;

//   // Populate resume fields
//   displayName.textContent = name;
//   displayEmail.textContent = email;
//   displayEducation.textContent = education;
//   displayExperience.textContent = experience;
//   displaySkills.textContent = skills;

//   // Show the resume container
//   resumeContainer.style.display = "block";

//   // Generate a shareable link (optional functionality)
//   const encodedResume = encodeURIComponent(resumeContainer.innerHTML);
//   const shareableUrl = `${window.location.origin}?resume=${encodedResume}`;
//   sharedLink.href = shareableUrl;
//   sharedLink.textContent = shareableUrl;
//   sharedLinkContainer.style.display = "block";
// });

// Handle download functionality
// downloadHtmlButton.addEventListener("click", () => {
//   const resumeHtml = resumeContainer.innerHTML;
//   const blob = new Blob([`
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//       <meta charset="UTF-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <title>Generated Resume</title>
//       <style>
//         body { font-family: Arial, sans-serif; margin: 20px; }
//         .resume { padding: 20px; border: 1px solid #ccc; border-radius: 5px; }
//       </style>
//     </head>
//     <body>
//       <div class="resume">${resumeHtml}</div>
//     </body>
//     </html>
//   `], { type: "text/html" });

//   const url = URL.createObjectURL(blob);
//   const link = document.createElement("a");
//   link.href = url;
//   link.download = "Resume.html";
//   link.click();
//   URL.revokeObjectURL(url);
// });



// Add an event listener for the "Download as HTML" button
// downloadHtmlButton.addEventListener("click", () => {
//     // HTML content for the resume with embedded CSS for styling
//     const resumeHtml = `
//       <!DOCTYPE html>
//       <html lang="en">
//       <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Generated Resume</title>
//         <style>
//           /* General body styling */
//           body {
//             font-family: Italic;
//             background-color:rgb(255, 255, 255);
//             padding: 40px;
//           }
//              header {
//     background-color: #2ba7a7; 
//     color: white;
//     padding: 25px;
//     border-radius: 12px 12px 0 0;
// }
          
//           /* Container for the resume content */
//           .container {
//             max-width: 700px;
//             margin: 0 auto;
//             padding: 70px;
//             background: #067480;
//             border-radius: 60px;
//                width: 100%;
//     padding: 7px;
//     border: 1px solid #adbfc8;
//     border-radius: 2px;
//     font-size: 16px;
//     box-sizing: border-box;
//             box-shadow: 0 0 10px rgba(167, 36, 36, 0.471);
//             text-align: left;
//           }
          
//           /* Styling for headings */
//           h1, h2 {
//             color: rgb(75, 184, 198);
//             font-size: 3em;
//             margin-bottom: 4px;
//           }
          
//           /* Button styling (shared and specific styles) */
//           .btn-generate,
//           .btn-download,
//           .btn-share {
//             display: block;
//             width: 100%;
//             padding: 10px;
//             margin: 10px 0;
//             background-color: #54779f;
//             color: rgb(43, 116, 133);
//             text-align: center;
//             border: none;
//             border-radius: 0px;
//             cursor: pointer;
//           }
  
//           .btn-share {
//             background-color: #4c75af;
//           }
  
//           /* Form inputs and text areas */
//           input, textarea {
//             width: 100%;
//             padding: 7px;
//             border: 1px solid #adbfc8;
//             border-radius: 2px;
//             font-size: 16px;
//             box-sizing: border-box;
//           }
          
//           /* Section and resume-specific styles */
//           .form-section {
//             color: #000000;
//             font-size: 21px;
//           }
          
//           .resume {
//             color: white;
//             font-size: 18px;
//             line-height: 1.5;
//           }
          
//           p {
//             margin: 8px 0;
//           }
          
//           strong {
//             color: #75d7eb;
//           }
//         </style>
//       </head>
//       <body>
//         <div class="container">
//           <!-- Resume content dynamically filled -->
//           <h2>Generated Resume</h2>
//           <p><strong>Name:</strong> ${displayName.textContent}</p>
//           <p><strong>Email:</strong> ${displayEmail.textContent}</p>
//           <p><strong>Education:</strong> ${displayEducation.textContent}</p>
//           <p><strong>Work Experience:</strong> ${displayExperience.textContent}</p>
//           <p><strong>Skills:</strong> ${displaySkills.textContent}</p>
//         </div>
//       </body>
//       </html>
//     `;
  
//     // Create a Blob from the HTML string
//     const blob = new Blob([resumeHtml], { type: "text/html" });
  
//     // Create a download link and trigger the download
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement("a");
//     link.href = url;
//     link.download = "Styled_Resume.html";
//     link.click();
  
//     // Clean up the URL object after download
//     URL.revokeObjectURL(url);
//   });
  










// import { jsPDF } from "jspdf"; // Import jsPDF

// // Select elements
// const form = document.getElementById('resumeForm') as HTMLFormElement;
// const resumeContainer = document.getElementById('resumeContainer') as HTMLElement;
// const displayName = document.getElementById('displayName') as HTMLElement;
// const displayEmail = document.getElementById('displayEmail') as HTMLElement;
// const displayEducation = document.getElementById('displayEducation') as HTMLElement;
// const displayExperience = document.getElementById('displayExperience') as HTMLElement;
// const displaySkills = document.getElementById('displaySkills') as HTMLElement;
// const downloadHtmlBtn = document.getElementById('downloadHtml') as HTMLButtonElement;
// const downloadPdfBtn = document.getElementById('downloadPdf') as HTMLButtonElement; // Add PDF button
// const shareLinkBtn = document.getElementById('shareLink') as HTMLButtonElement;
// const sharedLinkContainer = document.getElementById('sharedLinkContainer') as HTMLElement;
// const sharedLink = document.getElementById('sharedLink') as HTMLAnchorElement;

// form.addEventListener('submit', (event) => {
//     event.preventDefault();

//     // Get form values
//     const name = (document.getElementById('name') as HTMLInputElement).value;
//     const email = (document.getElementById('email') as HTMLInputElement).value;
//     const education = (document.getElementById('education') as HTMLTextAreaElement).value;
//     const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
//     const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

//     // Display values on the resume
//     displayName.textContent = name;
//     displayEmail.textContent = email;
//     displayEducation.textContent = education;
//     displayExperience.textContent = experience;
//     displaySkills.textContent = skills;

//     // Show the resume container
//     resumeContainer.style.display = 'block';
// });

// // Download HTML button
// downloadHtmlBtn.addEventListener('click', () => {
//     const resumeContent = `
//         <html>
//         <head>
//             <title>Resume</title>
//         </head>
//         <body>
//             <h2>Resume</h2>
//             <p><strong>Name:</strong> ${displayName.textContent}</p>
//             <p><strong>Email:</strong> ${displayEmail.textContent}</p>
//             <p><strong>Education:</strong> ${displayEducation.textContent}</p>
//             <p><strong>Work Experience:</strong> ${displayExperience.textContent}</p>
//             <p><strong>Skills:</strong> ${displaySkills.textContent}</p>
//         </body>
//         </html>
//     `;

//     const blob = new Blob([resumeContent], { type: 'text/html' });
//     const link = document.createElement('a');
//     link.href = URL.createObjectURL(blob);
//     link.download = 'resume.html';
//     link.click();
// });

// // Download PDF button
// downloadPdfBtn.addEventListener('click', () => {
//     const doc = new jsPDF();
    
//     // Get form values again (just in case)
//     const name = displayName.textContent || '';
//     const email = displayEmail.textContent || '';
//     const education = displayEducation.textContent || '';
//     const experience = displayExperience.textContent || '';
//     const skills = displaySkills.textContent || '';

//     // Set the PDF title and content
//     doc.setFont('helvetica', 'normal');
//     doc.setFontSize(16);
//     doc.setTextColor(0, 102, 204); // Color for Name and Email
//     doc.text('Name: ' + name, 20, 30);
//     doc.text('Email: ' + email, 20, 40);

//     // Set content for Education, Experience, and Skills
//     doc.setFontSize(14);
//     doc.setTextColor(0, 0, 0); // Black text for these sections
//     doc.text('Education:', 20, 60);
//     doc.text(education, 20, 70);
    
//     doc.text('Work Experience:', 20, 100);
//     doc.text(experience, 20, 110);
    
//     doc.text('Skills:', 20, 140);
//     doc.text(skills, 20, 150);

//     // Save the PDF with a dynamic name based on the user
//     doc.save(`${name}_resume.pdf`);
// });

// // Share Link button
// shareLinkBtn.addEventListener('click', () => {
//     const userName = (document.getElementById('name') as HTMLInputElement).value.toLowerCase().replace(/\s+/g, '-');
//     const uniqueLink = `http://yourprojectname.vercel.app/${userName}-resume`;
//     sharedLink.href = uniqueLink;
//     sharedLink.textContent = uniqueLink;
//     sharedLinkContainer.style.display = 'block';
// });







// interface ResumeBuilder{
//     name: string;
//     email: string;
//     phone: string;
//     education: string;
//     experience: string;
//     skills: string;
// }

// class ResumeBuilder {
//     private formElements: {
//         name: HTMLInputElement;
//         email: HTMLInputElement;
//         phone: HTMLInputElement;
//         education: HTMLTextAreaElement;
//         experience: HTMLTextAreaElement;
//         skills: HTMLTextAreaElement;
//     };

//     private previewElements: {
//         name: HTMLElement;
//         email: HTMLElement;
//         phone: HTMLElement;
//         education: HTMLElement;
//         experience: HTMLElement;
//         skills: HTMLElement;
//     };

//     private downloadBtn: HTMLButtonElement;
//     private shareBtn: HTMLButtonElement;

//     constructor() {
//         // Initialize form elements
//         this.formElements = {
//             name: document.getElementById('name') as HTMLInputElement,
//             email: document.getElementById('email') as HTMLInputElement,
//             phone: document.getElementById('phone') as HTMLInputElement,
//             education: document.getElementById('education') as HTMLTextAreaElement,
//             experience: document.getElementById('experience') as HTMLTextAreaElement,
//             skills: document.getElementById('skills') as HTMLTextAreaElement
//         };

//         // Initialize preview elements
//         this.previewElements = {
//             name: document.getElementById('previewName') as HTMLElement,
//             email: document.getElementById('previewEmail') as HTMLElement,
//             phone: document.getElementById('previewPhone') as HTMLElement,
//             education: document.getElementById('previewEducation') as HTMLElement,
//             experience: document.getElementById('previewExperience') as HTMLElement,
//             skills: document.getElementById('previewSkills') as HTMLElement
//         };

//         // Initialize buttons
//         this.downloadBtn = document.getElementById('downloadBtn') as HTMLButtonElement;
//         this.shareBtn = document.getElementById('shareBtn') as HTMLButtonElement;

//         this.initializeEventListeners();
//     }

//     private initializeEventListeners(): void {
//         // Add input event listeners
//         Object.keys(this.formElements).forEach(key => {
//             const element = this.formElements[key as keyof typeof this.formElements];
//             element.addEventListener('input', () => this.updatePreview());
//         });

//         // Add button event listeners
//         this.downloadBtn.addEventListener('click', () => this.downloadPDF());
//         this.shareBtn.addEventListener('click', () => this.shareResume());
//     }

//     private updatePreview(): void {
//         // Update preview elements with form values
//         this.previewElements.name.textContent = this.formElements.name.value || 'Your Name';
//         this.previewElements.email.textContent = this.formElements.email.value;
//         this.previewElements.phone.textContent = this.formElements.phone.value;
//         this.previewElements.education.textContent = this.formElements.education.value;
//         this.previewElements.experience.textContent = this.formElements.experience.value;
//         this.previewElements.skills.textContent = this.formElements.skills.value;
//     }

//     private async downloadPDF(): Promise<void> {
//         try {
//             this.downloadBtn.disabled = true;
//             const element = document.getElementById('resume-preview');
//             if (!element) return;

//             const opt = {
//                 margin: 1,
//                 filename: 'resume.pdf',
//                 image: { type: 'jpeg', quality: 0.98 },
//                 html2canvas: { scale: 2 },
//                 jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
//             };

//             await (window as any).html2pdf().set(opt).from(element).save();
//         } catch (error) {
//             console.error('Error generating PDF:', error);
//             alert('Error generating PDF. Please try again.');
//         } finally {
//             this.downloadBtn.disabled = false;
//         }
//     }

//     private async shareResume(): Promise<void> {
//         try {
//             if (!navigator.share) {
//                 throw new Error('Share API not supported');
//             }

//             await navigator.share({
//                 title: 'My Resume',
//                 text: 'Check out my resume!',
//                 url: window.location.href
//             });
//         } catch (error) {
//             console.error('Error sharing:', error);
//             alert('Sharing is not supported on this browser');
//         }
//     }
// }

// // Initialize the resume builder when the DOM is loaded
// document.addEventListener('DOMContentLoaded', () => {
//     new ResumeBuilder();
// });

















// import { jsPDF } from 'jspdf';

// // Declare jsPDF to avoid type errors


// interface ResumeData {
//     name: string;
//     title: string;
//     email: string;
//     phone: string;
//     education: string;
//     experience: string;
//     skills: string;
// }

// class ResumeBuilder {
//     // Make properties optional and add proper types
//     private form?: HTMLFormElement | null;
//     private resumeContainer?: HTMLElement | null;
//     private downloadBtn?: HTMLButtonElement | null;
//     private shareBtn?: HTMLButtonElement | null;
//     private sharedLinkContainer?: HTMLElement | null;
//     private sharedLink?: HTMLAnchorElement | null;

//     constructor() {
//         try {
//             this.initializeElements();
//             this.attachEventListeners();
//         } catch (error) {
//             console.error('Error initializing ResumeBuilder:', error);
//         }
//     }

//     private initializeElements(): void {
//         // Add null checks and error handling
//         this.form = document.getElementById('resumeForm') as HTMLFormElement;
//         if (!this.form) throw new Error('Resume form not found');

//         this.resumeContainer = document.getElementById('resumeContainer');
//         if (!this.resumeContainer) throw new Error('Resume container not found');

//         this.downloadBtn = document.getElementById('downloadPdf') as HTMLButtonElement;
//         if (!this.downloadBtn) throw new Error('Download button not found');

//         this.shareBtn = document.getElementById('shareLink') as HTMLButtonElement;
//         if (!this.shareBtn) throw new Error('Share button not found');

//         this.sharedLinkContainer = document.getElementById('sharedLinkContainer');
//         if (!this.sharedLinkContainer) throw new Error('Shared link container not found');

//         this.sharedLink = document.getElementById('sharedLink') as HTMLAnchorElement;
//         if (!this.sharedLink) throw new Error('Shared link element not found');
//     }

//     private attachEventListeners(): void {
//         // Add null checks before attaching events
//         if (this.form) {
//             this.form.addEventListener('submit', (e) => this.handleFormSubmit(e));
//         }

//         if (this.downloadBtn) {
//             this.downloadBtn.addEventListener('click', () => this.generatePDF());
//         }

//         if (this.shareBtn) {
//             this.shareBtn.addEventListener('click', () => this.shareResume());
//         }
//     }

//     private handleFormSubmit(event: Event): void {
//         event.preventDefault();
        
//         const formData = this.getFormData();
//         if (!formData) return;

//         this.updatePreview(formData);
        
//         // Add null checks before updating display
//         if (this.resumeContainer) {
//             this.resumeContainer.style.display = 'block';
//         }
//         if (this.downloadBtn) {
//             this.downloadBtn.style.display = 'block';
//         }
//         if (this.shareBtn) {
//             this.shareBtn.style.display = 'block';
//         }
//     }

//     private getFormData(): ResumeData | null {
//         try {
//             const nameInput = document.getElementById('name') as HTMLInputElement;
//             const titleInput = document.getElementById('title') as HTMLInputElement;
//             const emailInput = document.getElementById('email') as HTMLInputElement;
//             const phoneInput = document.getElementById('phone') as HTMLInputElement;
//             const educationInput = document.getElementById('education') as HTMLTextAreaElement;
//             const experienceInput = document.getElementById('experience') as HTMLTextAreaElement;
//             const skillsInput = document.getElementById('skills') as HTMLTextAreaElement;

//             if (!nameInput || !titleInput || !emailInput || !phoneInput || 
//                 !educationInput || !experienceInput || !skillsInput) {
//                 throw new Error('Required form elements not found');
//             }

//             return {
//                 name: nameInput.value,
//                 title: titleInput.value,
//                 email: emailInput.value,
//                 phone: phoneInput.value,
//                 education: educationInput.value,
//                 experience: experienceInput.value,
//                 skills: skillsInput.value
//             };
//         } catch (error) {
//             console.error('Error getting form data:', error);
//             return null;
//         }
//     }

//     private updatePreview(data: ResumeData): void {
//         try {
//             const displayElements = {
//                 name: document.getElementById('displayName'),
//                 title: document.getElementById('displayTitle'),
//                 email: document.getElementById('displayEmail'),
//                 phone: document.getElementById('displayPhone'),
//                 education: document.getElementById('displayEducation'),
//                 experience: document.getElementById('displayExperience'),
//                 skills: document.getElementById('displaySkills')
//             };

//             // Check if all elements exist
//             if (!Object.values(displayElements).every(element => element)) {
//                 throw new Error('One or more display elements not found');
//             }

//             // Update text content with null checks
//             if (displayElements.name) displayElements.name.textContent = data.name;
//             if (displayElements.title) displayElements.title.textContent = data.title;
//             if (displayElements.email) displayElements.email.textContent = data.email;
//             if (displayElements.phone) displayElements.phone.textContent = data.phone;
//             if (displayElements.education) displayElements.education.textContent = data.education;
//             if (displayElements.experience) displayElements.experience.textContent = data.experience;

//             // Update skills with tags
//             if (displayElements.skills) {
//                 displayElements.skills.innerHTML = '';
//                 data.skills.split(',').forEach(skill => {
//                     if (skill.trim()) {
//                         const skillTag = document.createElement('span');
//                         skillTag.className = 'skill-tag';
//                         skillTag.textContent = skill.trim();
//                         displayElements.skills?.appendChild(skillTag);
//                     }
//                 });
//             }
//         } catch (error) {
//             console.error('Error updating preview:', error);
//         }
//     }

//     private async generatePDF(): Promise<void> {
//         if (!this.downloadBtn) return;

//         try {
//             this.downloadBtn.disabled = true;
//             this.downloadBtn.textContent = 'Generating PDF...';

//             const formData = this.getFormData();
//             if (!formData) throw new Error('No form data available');

//             const doc = new jsPDF();
            
//             // PDF generation code...
//             // (Keep your existing PDF generation code here)

//             doc.save(`${formData.name.toLowerCase().replace(/\s+/g, '_')}_resume.pdf`);
//         } catch (error) {
//             console.error('Error generating PDF:', error);
//             alert('Error generating PDF. Please try again.');
//         } finally {
//             if (this.downloadBtn) {
//                 this.downloadBtn.disabled = false;
//                 this.downloadBtn.innerHTML = '<span class="button-icon">📥</span> Download PDF';
//             }
//         }
//     }

//     private shareResume(): void {
//         const formData = this.getFormData();
//         if (!formData || !this.sharedLink || !this.sharedLinkContainer) return;

//         try {
//             const uniqueId = btoa(formData.name + Date.now()).slice(0, 10);
//             const shareableLink = `${window.location.origin}/resume/${uniqueId}`;
            
//             this.sharedLink.href = shareableLink;
//             this.sharedLink.textContent = shareableLink;
//             this.sharedLinkContainer.style.display = 'block';

//             // If Web Share API is available
//             if (navigator.share) {
//                 navigator.share({
//                     title: `${formData.name}'s Resume`,
//                     text: 'Check out my professional resume!',
//                     url: shareableLink
//                 }).catch(console.error);
//             }
//         } catch (error) {
//             console.error('Error sharing resume:', error);
//             alert('Error sharing resume. Please try again.');
//         }
//     }
// }

// // Initialize the resume builder when the DOM is loaded
// document.addEventListener('DOMContentLoaded', () => {
//     try {
//         new ResumeBuilder();
//     } catch (error) {
//         console.error('Error initializing ResumeBuilder:', error);
//         alert('Error initializing the resume builder. Please refresh the page.');
//     }
// });
















// import { jsPDF } from 'jspdf';

// interface ResumeData {
//     name: string;
//     title: string;
//     email: string;
//     phone: string;
//     education: string;
//     experience: string;
//     skills: string;
// }

// class ResumeBuilder {
//     private form?: HTMLFormElement | null;
//     private resumeContainer?: HTMLElement | null;
//     private downloadBtn?: HTMLButtonElement | null;
//     private shareBtn?: HTMLButtonElement | null;
//     private generateBtn?: HTMLButtonElement | null;
//     private sharedLinkContainer?: HTMLElement | null;
//     private sharedLink?: HTMLAnchorElement | null;

//     constructor() {
//         try {
//             this.initializeElements();
//             this.attachEventListeners();
//         } catch (error) {
//             console.error('Error initializing ResumeBuilder:', error);
//         }
//     }

//     private initializeElements(): void {
//         this.form = document.getElementById('resumeForm') as HTMLFormElement;
//         this.resumeContainer = document.getElementById('resumeContainer');
//         this.downloadBtn = document.getElementById('downloadPdf') as HTMLButtonElement;
//         this.shareBtn = document.getElementById('shareLink') as HTMLButtonElement;
//         this.generateBtn = document.getElementById('generateResume') as HTMLButtonElement;
//         this.sharedLinkContainer = document.getElementById('sharedLinkContainer');
//         this.sharedLink = document.getElementById('sharedLink') as HTMLAnchorElement;
//     }

//     private attachEventListeners(): void {
//         if (this.form) {
//             this.form.addEventListener('submit', (e) => this.handleFormSubmit(e));
//         }
//         if (this.downloadBtn) {
//             this.downloadBtn.addEventListener('click', () => this.generatePDF());
//         }
//         if (this.shareBtn) {
//             this.shareBtn.addEventListener('click', () => this.shareResume());
//         }
//         if (this.generateBtn) {
//             this.generateBtn.addEventListener('click', () => this.handleGenerateResume());
//         }
//     }

//     private handleFormSubmit(event: Event): void {
//         event.preventDefault();
//         console.log("Form Submitted");
//         const formData = this.getFormData();
//         if (!formData) return;
//         this.updatePreview(formData);
//         if (this.resumeContainer) this.resumeContainer.style.display = 'block';
//         if (this.downloadBtn) this.downloadBtn.style.display = 'block';
//         if (this.shareBtn) this.shareBtn.style.display = 'block';
//     }

//     private handleGenerateResume(): void {
//         const formData = this.getFormData();
//         if (!formData) return;
//         this.updatePreview(formData);
//     }

//     private getFormData(): ResumeData | null {
//         try {
//             const nameInput = document.getElementById('name') as HTMLInputElement;
//             const titleInput = document.getElementById('title') as HTMLInputElement;
//             const emailInput = document.getElementById('email') as HTMLInputElement;
//             const phoneInput = document.getElementById('phone') as HTMLInputElement;
//             const educationInput = document.getElementById('education') as HTMLTextAreaElement;
//             const experienceInput = document.getElementById('experience') as HTMLTextAreaElement;
//             const skillsInput = document.getElementById('skills') as HTMLTextAreaElement;

//             return {
//                 name: nameInput.value,
//                 title: titleInput.value,
//                 email: emailInput.value,
//                 phone: phoneInput.value,
//                 education: educationInput.value,
//                 experience: experienceInput.value,
//                 skills: skillsInput.value
//             };
//         } catch (error) {
//             console.error('Error getting form data:', error);
//             return null;
//         }
//     }

//     private updatePreview(data: ResumeData): void {
//         const displayElements = {
//             name: document.getElementById('displayName'),
//             title: document.getElementById('displayTitle'),
//             email: document.getElementById('displayEmail'),
//             phone: document.getElementById('displayPhone'),
//             education: document.getElementById('displayEducation'),
//             experience: document.getElementById('displayExperience'),
//             skills: document.getElementById('displaySkills')
//         };

//         if (!Object.values(displayElements).every(element => element)) {
//             console.error('One or more display elements not found');
//             return;
//         }

//         if (displayElements.name) displayElements.name.textContent = data.name;
//         if (displayElements.title) displayElements.title.textContent = data.title;
//         if (displayElements.email) displayElements.email.textContent = data.email;
//         if (displayElements.phone) displayElements.phone.textContent = data.phone;
//         if (displayElements.education) displayElements.education.textContent = data.education;
//         if (displayElements.experience) displayElements.experience.textContent = data.experience;

//         if (displayElements.skills) {
//             displayElements.skills.innerHTML = '';
//             data.skills.split(',').forEach(skill => {
//                 if (skill.trim()) {
//                     const skillTag = document.createElement('span');
//                     skillTag.className = 'skill-tag';
//                     skillTag.textContent = skill.trim();
//                     displayElements.skills?.appendChild(skillTag);
//                 }
//             });
//         }
//     }

//     private async generatePDF(): Promise<void> {
//         if (!this.downloadBtn) return;

//         try {
//             this.downloadBtn.disabled = true;
//             this.downloadBtn.textContent = 'Generating PDF...';

//             const formData = this.getFormData();
//             if (!formData) throw new Error('No form data available');

//             const doc = new jsPDF();
//             doc.text(`Resume of ${formData.name}`, 10, 10);
//             doc.text(`Title: ${formData.title}`, 10, 20);
//             doc.text(`Email: ${formData.email}`, 10, 30);
//             doc.text(`Phone: ${formData.phone}`, 10, 40);
//             doc.text(`Education: ${formData.education}`, 10, 50);
//             doc.text(`Experience: ${formData.experience}`, 10, 60);
//             doc.text(`Skills: ${formData.skills}`, 10, 70);

//             doc.save(`${formData.name.toLowerCase().replace(/\s+/g, '_')}_resume.pdf`);
//         } catch (error) {
//             console.error('Error generating PDF:', error);
//             alert('Error generating PDF. Please try again.');
//         } finally {
//             this.downloadBtn.disabled = false;
//             this.downloadBtn.textContent = 'Download PDF';
//         }
//     }

//     private shareResume(): void {
//         const formData = this.getFormData();
//         if (!formData || !this.sharedLink || !this.sharedLinkContainer) return;

//         const uniqueId = btoa(formData.name + Date.now()).slice(0, 10);
//         const shareableLink = `${window.location.origin}/resume/${uniqueId}`;
//         console.log("Generated Link:", shareableLink); // DEBUGGING LINE
//         this.sharedLink.href = shareableLink;
//         this.sharedLink.textContent = shareableLink;
//         this.sharedLinkContainer.style.display = 'block';

//         if (navigator.share) {
//             navigator.share({
//                 title: `${formData.name}'s Resume`,
//                 text: 'Check out my professional resume!',
//                 url: shareableLink
//             }).catch(console.error);
//         }
//     }
// }

// document.addEventListener('DOMContentLoaded', () => {
//     new ResumeBuilder();
// });







// import { jsPDF } from 'jspdf';

// interface ResumeData {
//     name: string;
//     title: string;
//     email: string;
//     phone: string;
//     education: string;
//     experience: string;
//     skills: string;
// }

// class ResumeBuilder {
//     private form: HTMLFormElement | null;
//     private resumeContainer: HTMLElement | null;
//     private downloadBtn: HTMLButtonElement | null;
//     private shareBtn: HTMLButtonElement | null;
//     private sharedLinkContainer: HTMLElement | null;
//     private sharedLink: HTMLAnchorElement | null;

//     constructor() {
//         this.form = document.getElementById('resumeForm') as HTMLFormElement;
//         this.resumeContainer = document.getElementById('resumeContainer');
//         this.downloadBtn = document.getElementById('downloadPdf') as HTMLButtonElement;
//         this.shareBtn = document.getElementById('shareLink') as HTMLButtonElement;
//         this.sharedLinkContainer = document.getElementById('sharedLinkContainer');
//         this.sharedLink = document.getElementById('sharedLink') as HTMLAnchorElement;

//         if (this.form) {
//             this.form.addEventListener('submit', this.handleFormSubmit.bind(this));
//         }
//         if (this.downloadBtn) {
//             this.downloadBtn.addEventListener('click', this.generatePDF.bind(this));
//         }
//         if (this.shareBtn) {
//             this.shareBtn.addEventListener('click', this.shareResume.bind(this));
//         }
//     }

//     private handleFormSubmit(event: Event): void {
//         event.preventDefault();
//         const formData = this.getFormData();
//         if (!formData) return;

//         this.updatePreview(formData);
//         if (this.resumeContainer) {
//             this.resumeContainer.style.display = 'block';
//         }
//         if (this.downloadBtn) {
//             this.downloadBtn.style.display = 'block';
//         }
//         if (this.shareBtn) {
//             this.shareBtn.style.display = 'block';
//         }
//     }

//     private getFormData(): ResumeData | null {
//         const nameInput = document.getElementById('name') as HTMLInputElement;
//         const titleInput = document.getElementById('title') as HTMLInputElement;
//         const emailInput = document.getElementById('email') as HTMLInputElement;
//         const phoneInput = document.getElementById('phone') as HTMLInputElement;
//         const educationInput = document.getElementById('education') as HTMLTextAreaElement;
//         const experienceInput = document.getElementById('experience') as HTMLTextAreaElement;
//         const skillsInput = document.getElementById('skills') as HTMLTextAreaElement;

//         if (!nameInput || !titleInput || !emailInput || !phoneInput || 
//             !educationInput || !experienceInput || !skillsInput) {
//             console.error('One or more form elements not found');
//             return null;
//         }

//         return {
//             name: nameInput.value,
//             title: titleInput.value,
//             email: emailInput.value,
//             phone: phoneInput.value,
//             education: educationInput.value,
//             experience: experienceInput.value,
//             skills: skillsInput.value
//         };
//     }

//     private updatePreview(data: ResumeData): void {
//         const displayName = document.getElementById('displayName');
//         const displayTitle = document.getElementById('displayTitle');
//         const displayEmail = document.getElementById('displayEmail');
//         const displayPhone = document.getElementById('displayPhone');
//         const displayEducation = document.getElementById('displayEducation');
//         const displayExperience = document.getElementById('displayExperience');
//         const displaySkills = document.getElementById('displaySkills');

//         if (displayName) displayName.textContent = data.name;
//         if (displayTitle) displayTitle.textContent = data.title;
//         if (displayEmail) displayEmail.textContent = data.email;
//         if (displayPhone) displayPhone.textContent = data.phone;
//         if (displayEducation) displayEducation.textContent = data.education;
//         if (displayExperience) displayExperience.textContent = data.experience;
//         if (displaySkills) {
//             displaySkills.innerHTML = '';
//             data.skills.split(',').forEach(skill => {
//                 if (skill.trim()) {
//                     const skillTag = document.createElement('span');
//                     skillTag.className = 'skill-tag';
//                     skillTag.textContent = skill.trim();
//                     displaySkills.appendChild(skillTag);
//                 }
//             });
//         }
//     }

//     private generatePDF(): void {
//         if (!this.downloadBtn) return;

//         try {
//             this.downloadBtn.disabled = true;
//             this.downloadBtn.textContent = 'Generating PDF...';

//             const formData = this.getFormData();
//             if (!formData) throw new Error('No form data available');

//             const doc = new jsPDF();

//             // Title
//             doc.setFontSize(20);
//             doc.text('Resume', 105, 15, { align: 'center' });

//             // Personal Information
//             doc.setFontSize(14);
//             doc.text(formData.name, 20, 30);
//             doc.text(formData.title, 20, 40);
//             doc.setFontSize(12);
//             doc.text(`Email: ${formData.email}`, 20, 50);
//             doc.text(`Phone: ${formData.phone}`, 20, 60);

//             // Education
//             doc.setFontSize(14);
//             doc.text('Education', 20, 80);
//             doc.setFontSize(12);
//             doc.text(this.wrapText(formData.education), 20, 90);

//             // Experience
//             doc.setFontSize(14);
//             doc.text('Experience', 20, 120);
//             doc.setFontSize(12);
//             doc.text(this.wrapText(formData.experience), 20, 130);

//             // Skills
//             doc.setFontSize(14);
//             doc.text('Skills', 20, 160);
//             doc.setFontSize(12);
//             doc.text(this.wrapText(formData.skills), 20, 170);

//             doc.save(`${formData.name.toLowerCase().replace(/\s+/g, '_')}_resume.pdf`);
//         } catch (error) {
//             console.error('Error generating PDF:', error);
//             alert('Error generating PDF. Please try again.');
//         } finally {
//             this.downloadBtn.disabled = false;
//             this.downloadBtn.textContent = 'Download PDF';
//         }
//     }

//     private wrapText(text: string): string {
//         // Simple text wrapping for PDF
//         return text.replace(/(.{60})/g, "$1\n");
//     }

//     private shareResume(): void {
//         const formData = this.getFormData();
//         if (!formData || !this.sharedLink || !this.sharedLinkContainer) return;

//         const uniqueId = btoa(formData.name + Date.now()).slice(0, 10);
//         const shareableLink = `${window.location.origin}/resume/${uniqueId}`;

//         this.sharedLink.href = shareableLink;
//         this.sharedLink.textContent = shareableLink;
//         this.sharedLinkContainer.style.display = 'block';

//         if (navigator.share) {
//             navigator.share({
//                 title: `${formData.name}'s Resume`,
//                 text: 'Check out my professional resume!',
//                 url: shareableLink
//             }).catch(console.error);
//         }
//     }
// }

// // Initialize when DOM is loaded
// document.addEventListener('DOMContentLoaded', () => {
//     new ResumeBuilder();
// });















// import { jsPDF } from "jspdf";


// document.addEventListener("DOMContentLoaded", function () {
//     const form = document.getElementById("resumeForm") as HTMLFormElement;
//     const resumeContainer = document.getElementById("resumeContainer") as HTMLElement;
//     const downloadBtn = document.getElementById("downloadPdf") as HTMLButtonElement;
//     const shareBtn = document.getElementById("shareLink") as HTMLButtonElement;
//     const sharedLinkContainer = document.getElementById("sharedLinkContainer") as HTMLElement;
//     const sharedLink = document.getElementById("sharedLink") as HTMLAnchorElement;

//     form.addEventListener("input", updateResume);
//     // form.addEventListener("submit", function (event) {
//     //     event.preventDefault();
//     //     resumeContainer.style.display = "block";
//     //     downloadBtn.style.display = "inline-block";
//     //     shareBtn.style.display = "inline-block";
//     // });
//     form.addEventListener("submit", function (event) {
//         event.preventDefault();
//         console.log("Form submitted!"); // Debugging ke liye
//         form.addEventListener("submit", function (event) {
//             event.preventDefault();
//             console.log("Form submitted!"); // Debugging ke liye check karo
//             console.log("resumeContainer:", resumeContainer);
//             console.log("downloadBtn:", downloadBtn);
//             console.log("shareBtn:", shareBtn);
        
//             resumeContainer.style.display = "block";
//             downloadBtn.style.display = "inline-block";
//             shareBtn.style.display = "inline-block";
//         });
        
//         resumeContainer.style.display = "block";
//         downloadBtn.style.display = "inline-block";
//         shareBtn.style.display = "inline-block";
//     });
    
//     function updateResume() {
//         (document.getElementById("displayName") as HTMLElement).textContent = (document.getElementById("name") as HTMLInputElement).value;
//         (document.getElementById("displayTitle") as HTMLElement).textContent = (document.getElementById("title") as HTMLInputElement).value;
//         (document.getElementById("displayEmail") as HTMLElement).textContent = (document.getElementById("email") as HTMLInputElement).value;
//         (document.getElementById("displayPhone") as HTMLElement).textContent = (document.getElementById("phone") as HTMLInputElement).value;
//         (document.getElementById("displayEducation") as HTMLElement).textContent = (document.getElementById("education") as HTMLInputElement).value;
//         (document.getElementById("displayExperience") as HTMLElement).textContent = (document.getElementById("experience") as HTMLInputElement).value;
        
//         const skills = (document.getElementById("skills") as HTMLInputElement).value.split(",").map(skill => skill.trim()).filter(skill => skill);
//         const skillsContainer = document.getElementById("displaySkills") as HTMLElement;
//         skillsContainer.innerHTML = "";
//         skills.forEach(skill => {
//             const span = document.createElement("span");
//             span.classList.add("skill-tag");
//             span.textContent = skill;
//             skillsContainer.appendChild(span);
//         });
//     }

//     downloadBtn.addEventListener("click", function () {
//         if (!jsPDF) {
//             console.error("jsPDF is not loaded");
//             return;
//         }
       
//         const doc = new jsPDF();
//         doc.text((document.getElementById("displayName") as HTMLElement).textContent || "", 10, 10);
//         doc.text((document.getElementById("displayTitle") as HTMLElement).textContent || "", 10, 20);
//         doc.text("Email: " + ((document.getElementById("displayEmail") as HTMLElement).textContent || ""), 10, 30);
//         doc.text("Phone: " + ((document.getElementById("displayPhone") as HTMLElement).textContent || ""), 10, 40);
//         doc.text("Education:", 10, 50);
//         doc.text((document.getElementById("displayEducation") as HTMLElement).textContent || "", 10, 60);
//         doc.text("Work Experience:", 10, 80);
//         doc.text((document.getElementById("displayExperience") as HTMLElement).textContent || "", 10, 90);
//         doc.text("Skills:", 10, 110);
//         doc.text((document.getElementById("displaySkills") as HTMLElement).textContent || "", 10, 120);
//         doc.save("resume.pdf");
//     });

// //     shareBtn.addEventListener("click", function () {
// //         const resumeData = {
// //             name: (document.getElementById("displayName") as HTMLElement).textContent,
// //             title: (document.getElementById("displayTitle") as HTMLElement).textContent,
// //             email: (document.getElementById("displayEmail") as HTMLElement).textContent,
// //             phone: (document.getElementById("displayPhone") as HTMLElement).textContent,
// //             education: (document.getElementById("displayEducation") as HTMLElement).textContent,
// //             experience: (document.getElementById("displayExperience") as HTMLElement).textContent,
// //             skills: (document.getElementById("displaySkills") as HTMLElement).textContent,
// //         };
        
// //         const encodedData = encodeURIComponent(JSON.stringify(resumeData));
// //         const generatedLink = `${window.location.origin}/resume?data=${encodedData}`;
        
// //         sharedLink.textContent = generatedLink;
// //         sharedLink.href = generatedLink;
// //         sharedLinkContainer.style.display = "block";
// //     });
// // });

// shareBtn.addEventListener("click", function () {
//     console.log("Share button clicked!");

//     const resumeData = {
//         name: (document.getElementById("displayName") as HTMLElement).textContent,
//         title: (document.getElementById("displayTitle") as HTMLElement).textContent,
//         email: (document.getElementById("displayEmail") as HTMLElement).textContent,
//         phone: (document.getElementById("displayPhone") as HTMLElement).textContent,
//         education: (document.getElementById("displayEducation") as HTMLElement).textContent,
//         experience: (document.getElementById("displayExperience") as HTMLElement).textContent,
//         skills: Array.from(document.getElementById("displaySkills")?.children || []).map(skill => skill.textContent),
//     };

//     console.log("Resume Data:", resumeData);

//     const encodedData = encodeURIComponent(JSON.stringify(resumeData));
//     const generatedLink = `${window.location.origin}/resume?data=${encodedData}`;

//     console.log("Generated Link: ", generatedLink);

//     sharedLink.textContent = generatedLink;
//     sharedLink.href = generatedLink;
//     sharedLinkContainer.style.display = "block";
//     downloadBtn.style.display = "inline-block";
//     shareBtn.style.display = "inline-block";
    

//     console.log("Shared link container should now be visible.");
// })});






// interface ResumeData {
//     name: string;
//     email: string;
//     phone: string;
//     education: string;
//     skills: string;
//     workExperience: string[];
//     projects: string;
//     contact: {
//       email: string;
//       phone: string;
//       linkedin: string;
//     };
//     profilePicture?: string;
//   }
  
// // DOM Elements
// const resumeDisplay = document.getElementById("resumeDisplay") as HTMLDivElement;
// const editButton = document.getElementById("editResume") as HTMLButtonElement;
// const downloadButton = document.getElementById("downloadResume") as HTMLButtonElement;
// const shareButton = document.getElementById("shareResume") as HTMLButtonElement;
// const saveButton = document.getElementById("saveChanges") as HTMLButtonElement;
// const cancelButton = document.getElementById("cancelEdit") as HTMLButtonElement;
// const resumeContainer = document.getElementById("resumeContainer") as HTMLDivElement;
// const imageInput = document.getElementById("editImage") as HTMLInputElement;
// const profilePic = document.getElementById("profilePic") as HTMLImageElement;

// // Form Elements
// const nameInput = document.getElementById("editName") as HTMLInputElement;
// const emailInput = document.getElementById("editEmail") as HTMLInputElement;
// const phoneInput = document.getElementById("editPhone") as HTMLInputElement;
// const educationInput = document.getElementById("editEducation") as HTMLTextAreaElement;
// const skillsInput = document.getElementById("editSkills") as HTMLTextAreaElement;
// const workExperienceInput = document.getElementById("editWorkExperience") as HTMLTextAreaElement;
// const projectsInput = document.getElementById("editProjects") as HTMLTextAreaElement;
// const contactInput = document.getElementById("editContact") as HTMLTextAreaElement;

// // Shared link elements for resume sharing
// const sharedLinkElement = document.getElementById("sharedLink") as HTMLAnchorElement;
// const sharedLinkContainer = document.getElementById("sharedLinkContainer") as HTMLDivElement;

// // Initial resume data
// let resumeData: ResumeData = {
//     name: "JAVERIA FATIMA",
//     email: "example@gmail.com",
//     phone: "0000000000",
//     education: "your qualification",
//     skills: "example: JavaScript, TypeScript, HTML, CSS",
//     workExperience: [
//       "Built an interactive resume builder",
//       "Designed and deployed a personal portfolio on GitHub and Vercel.",
//     ],
//     projects: "Resume Builder - Five different versions showcasing modern UI/UX design.",
//     contact: {
//       email: "example@gmail.com",
//       phone: "0000000000",
//       linkedin: "https://www.linkedin.com/in/javeria-fatima-5414a330b",
//     },
// };

// // Class to handle resume sharing
// class ResumeShare {

//   // Method to handle sharing the resume
//   public handleShare(): void {
//     const data = this.getFormData();  // Extract data from the form or fields
//     const resumeId = this.saveResume(data);  // Function to save the resume and get an ID

//     // Generate a shareable link using the resume ID
//     const shareableLink = `${window.location.origin}${window.location.pathname}?id=${resumeId}`;

//     // Display the link
//     if (sharedLinkElement && sharedLinkContainer) {
//       sharedLinkElement.href = shareableLink;  // Set the link's href
//       sharedLinkElement.textContent = shareableLink;  // Set the text content to the shareable link
//       sharedLinkContainer.style.display = "block";  // Make the container visible to the user
//     }
//   }

//   // Collect data from the form or fields
//   private getFormData(): ResumeData {
//     return {
//       name: nameInput.value,
//       email: emailInput.value,
//       phone: phoneInput.value,
//       education: educationInput.value,
//       skills: skillsInput.value,
//       workExperience: workExperienceInput.value.split("\n").filter((item) => item.trim() !== ""),
//       projects: projectsInput.value,
//       contact: {
//         email: "",  // Placeholder, adjust as needed
//         phone: "",  // Placeholder, adjust as needed
//         linkedin: "",  // Placeholder, adjust as needed
//       },
//     };
//   }

//   // Save the resume data and return a unique resume ID
//   private saveResume(_data: ResumeData): string {
//     const resumeId = `resume-${Math.random().toString(36).slice(2, 9)}`;

//     return resumeId;
//   }
// }

// const resumeShare = new ResumeShare();

// // Trigger share functionality when the button is clicked
// shareButton.addEventListener("click", () => {
//   resumeShare.handleShare();
// });

// // Edit Mode Toggle
// editButton.addEventListener("click", () => {
//   resumeContainer.classList.remove("hidden");
//   saveButton.classList.remove("hidden");
//   cancelButton.classList.remove("hidden");
//   editButton.classList.add("hidden");

//   // Populate form fields
//   nameInput.value = resumeData.name;
//   emailInput.value = resumeData.email;
//   phoneInput.value = resumeData.phone;
//   educationInput.value = resumeData.education;
//   skillsInput.value = resumeData.skills;
//   workExperienceInput.value = resumeData.workExperience.join("\n");
//   projectsInput.value = resumeData.projects;
//   contactInput.value = `Email: ${resumeData.contact.email}\nPhone: ${resumeData.contact.phone}\nLinkedIn: ${resumeData.contact.linkedin}`;
// });

// // Save Changes
// saveButton.addEventListener("click", () => {
//   resumeData = {
//     name: nameInput.value,
//     email: emailInput.value,
//     phone: phoneInput.value,
//     education: educationInput.value,
//     skills: skillsInput.value,
//     workExperience: workExperienceInput.value.split("\n").filter((item) => item.trim() !== ""),
//     projects: projectsInput.value,
//     contact: {
//       email: resumeData.contact.email,
//       phone: resumeData.contact.phone,
//       linkedin: resumeData.contact.linkedin,
//     },
//   };

//   updateDisplay();
//   exitEditMode();
// });

// // Cancel Edit
// cancelButton.addEventListener("click", exitEditMode);

// // Helper functions
// function exitEditMode(): void {
//   resumeContainer.classList.add("hidden");
//   saveButton.classList.add("hidden");
//   cancelButton.classList.add("hidden");
//   editButton.classList.remove("hidden");
// }

// function updateDisplay(): void {
//   const nameElement = document.getElementById("name");
//   const emailElement = document.getElementById("email");
//   const phoneElement = document.getElementById("phone");
//   const educationElement = document.getElementById("education");
//   const skillsElement = document.getElementById("skills");
//   const workExperienceElement = document.getElementById("workexperience");
//   const projectsElement = document.getElementById("projects");
//   const contactElement = document.getElementById("contact");

//   if (nameElement) nameElement.textContent = resumeData.name;
//   if (emailElement) emailElement.textContent = ` Email: ${resumeData.email}`;
//   if (phoneElement) phoneElement.textContent = `📞 Phone: ${resumeData.phone}`;
//   if (educationElement) educationElement.textContent = resumeData.education;
//   if (skillsElement) skillsElement.textContent = resumeData.skills;
//   if (workExperienceElement) {
//     workExperienceElement.innerHTML = resumeData.workExperience.map((exp) => `<li>${exp}</li>`).join("");
//   }
//   if (projectsElement) projectsElement.textContent = resumeData.projects;
//   if (contactElement) {
//     contactElement.innerHTML = `
//       <li>📧 Email: ${resumeData.contact.email}</li>
//       <li>📞 Phone: ${resumeData.contact.phone}</li>
//       <li>🔗 LinkedIn: <a href="${resumeData.contact.linkedin}" target="_blank">Click here</a></li>
//     `;
//   }
// }

// // Image upload handling
// imageInput.addEventListener('change', (event) => {
//   const file = (event.target as HTMLInputElement).files?.[0];
//   if (file) {
//     const reader = new FileReader();
//     reader.onload = function () {
//       if (profilePic) {
//         profilePic.src = reader.result as string;
//       }
//     };
//     reader.readAsDataURL(file);
//   }
// });
// declare var html2pdf: any;
// // Download functionality (using html2pdf.js)
// downloadButton.addEventListener("click", () => {
//   const element = resumeDisplay;  // The element you want to convert to a PDF
//   const options = {
//     margin:       1,
//     filename:     'resume.pdf',
//     image:        { type: 'jpeg', quality: 0.98 },
//     html2canvas:  { scale: 8 },
//     jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
//   };
//   html2pdf().from(element).set(options).save('resume.pdf');
// });

// // Load the initial data
// updateDisplay();







// interface ResumeData {
//     name: string;
//     email: string;
//     phone: string;
//     education: string;
//     skills: string;
//     workExperience: string[];
//     projects: string;
//     contact: {
//       email: string;
//       phone: string;
//       linkedin: string;
//     };
//     profilePicture?: string;
//   }
  
//   // DOM Elements
//   const resumeDisplay = document.getElementById("resumeDisplay") as HTMLDivElement;
//   const editButton = document.getElementById("editResume") as HTMLButtonElement;
//   const downloadButton = document.getElementById("downloadResume") as HTMLButtonElement;
//   const shareButton = document.getElementById("shareResume") as HTMLButtonElement;
//   const saveButton = document.getElementById("saveChanges") as HTMLButtonElement;
//   const cancelButton = document.getElementById("cancelEdit") as HTMLButtonElement;
//   const resumeContainer = document.getElementById("resumeContainer") as HTMLDivElement;
//   const imageInput = document.getElementById("editImage") as HTMLInputElement;
//   const profilePic = document.getElementById("profilePic") as HTMLImageElement;
  
//   // Form Elements
//   const nameInput = document.getElementById("editName") as HTMLInputElement;
//   const emailInput = document.getElementById("editEmail") as HTMLInputElement;
//   const phoneInput = document.getElementById("editPhone") as HTMLInputElement;
//   const educationInput = document.getElementById("editEducation") as HTMLTextAreaElement;
//   const skillsInput = document.getElementById("editSkills") as HTMLTextAreaElement;
//   const workExperienceInput = document.getElementById("editWorkExperience") as HTMLTextAreaElement;
//   const projectsInput = document.getElementById("editProjects") as HTMLTextAreaElement;
//   const contactEmailInput = document.getElementById("editContactEmail") as HTMLInputElement;
//   const contactPhoneInput = document.getElementById("editContactPhone") as HTMLInputElement;
//   const contactLinkedInInput = document.getElementById("editContactLinkedIn") as HTMLInputElement;
  
//   // Shared link elements for resume sharing
//   const sharedLinkElement = document.getElementById("sharedLink") as HTMLAnchorElement;
//   const sharedLinkContainer = document.getElementById("sharedLinkContainer") as HTMLDivElement;
  
//   // Initial resume data
//   let resumeData: ResumeData = {
//     name: "JAVERIA FATIMA",
//     email: "example@gmail.com",
//     phone: "0000000000",
//     education: "Your qualification",
//     skills: "Example: JavaScript, TypeScript, HTML, CSS",
//     workExperience: [
//       "Built an interactive resume builder",
//       "Designed and deployed a personal portfolio on GitHub and Vercel.",
//     ],
//     projects: "Resume Builder - Five different versions showcasing modern UI/UX design.",
//     contact: {
//       email: "example@gmail.com",
//       phone: "0000000000",
//       linkedin: "https://www.linkedin.com/in/javeria-fatima-5414a330b",
//     },
//   };
  
//   // Class to handle resume sharing
//   class ResumeShare {
//     public handleShare(): void {
//       const data = this.getFormData();
//       const resumeId = this.saveResume(data);
  
//       // Generate a shareable link
//       const shareableLink = `${window.location.origin}${window.location.pathname}?id=${resumeId}`;
  
//       // Display the link
//       if (sharedLinkElement && sharedLinkContainer) {
//         sharedLinkElement.href = shareableLink;
//         sharedLinkElement.textContent = shareableLink;
//         sharedLinkContainer.style.display = "block";
//       }
//     }
  
//     private getFormData(): ResumeData {
//       return {
//         name: nameInput.value,
//         email: emailInput.value,
//         phone: phoneInput.value,
//         education: educationInput.value,
//         skills: skillsInput.value,
//         workExperience: workExperienceInput.value.split("\n").filter((item) => item.trim() !== ""),
//         projects: projectsInput.value,
//         contact: {
//           email: contactEmailInput.value,
//           phone: contactPhoneInput.value,
//           linkedin: contactLinkedInInput.value,
//         },
//       };
//     }
  
//     private saveResume(_data: ResumeData): string {
//       return `resume-${Math.random().toString(36).slice(2, 9)}`;
//     }
//   }
  
//   const resumeShare = new ResumeShare();
  
//   // Event Listeners
//   shareButton?.addEventListener("click", () => {
//     resumeShare.handleShare();
//   });
  
//   editButton?.addEventListener("click", () => {
//     resumeContainer.classList.remove("hidden");
//     saveButton.classList.remove("hidden");
//     cancelButton.classList.remove("hidden");
//     editButton.classList.add("hidden");
  
//     // Populate form fields
//     nameInput.value = resumeData.name;
//     emailInput.value = resumeData.email;
//     phoneInput.value = resumeData.phone;
//     educationInput.value = resumeData.education;
//     skillsInput.value = resumeData.skills;
//     workExperienceInput.value = resumeData.workExperience.join("\n");
//     projectsInput.value = resumeData.projects;
//     contactEmailInput.value = resumeData.contact.email;
//     contactPhoneInput.value = resumeData.contact.phone;
//     contactLinkedInInput.value = resumeData.contact.linkedin;
//   });
  
//   saveButton?.addEventListener("click", () => {
//     resumeData = {
//       name: nameInput.value,
//       email: emailInput.value,
//       phone: phoneInput.value,
//       education: educationInput.value,
//       skills: skillsInput.value,
//       workExperience: workExperienceInput.value.split("\n").filter((item) => item.trim() !== ""),
//       projects: projectsInput.value,
//       contact: {
//         email: contactEmailInput.value,
//         phone: contactPhoneInput.value,
//         linkedin: contactLinkedInInput.value,
//       },
//     };
  
//     updateDisplay();
//     exitEditMode();
//   });
  
//   cancelButton?.addEventListener("click", exitEditMode);
  
//   // Helper Functions
//   function exitEditMode(): void {
//     resumeContainer.classList.add("hidden");
//     saveButton.classList.add("hidden");
//     cancelButton.classList.add("hidden");
//     editButton.classList.remove("hidden");
//   }
  
//   function updateDisplay(): void {
//     const nameElement = document.getElementById("name");
//     const emailElement = document.getElementById("email");
//     const phoneElement = document.getElementById("phone");
//     const educationElement = document.getElementById("education");
//     const skillsElement = document.getElementById("skills");
//     const workExperienceElement = document.getElementById("workexperience");
//     const projectsElement = document.getElementById("projects");
//     const contactElement = document.getElementById("contact");
  
//     if (nameElement) nameElement.textContent = resumeData.name;
//     if (emailElement) emailElement.textContent = `📧 Email: ${resumeData.email}`;
//     if (phoneElement) phoneElement.textContent = `📞 Phone: ${resumeData.phone}`;
//     if (educationElement) educationElement.textContent = resumeData.education;
//     if (skillsElement) skillsElement.textContent = resumeData.skills;
//     if (workExperienceElement) {
//       workExperienceElement.innerHTML = resumeData.workExperience.map((exp) => `<li>${exp}</li>`).join("");
//     }
//     if (projectsElement) projectsElement.textContent = resumeData.projects;
//     if (contactElement) {
//       contactElement.innerHTML = `
//         <li>📧 Email: ${resumeData.contact.email}</li>
//         <li>📞 Phone: ${resumeData.contact.phone}</li>
//         <li>🔗 LinkedIn: <a href="${resumeData.contact.linkedin}" target="_blank">Click here</a></li>
//       `;
//     }
//   }
  
//   // Image Upload
//   imageInput?.addEventListener("change", (event) => {
//     const file = (event.target as HTMLInputElement).files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = function () {
//         if (profilePic) profilePic.src = reader.result as string;
//       };
//       reader.readAsDataURL(file);
//     }
//   });
  
//   // Download Resume as PDF
//   declare var html2pdf: any;
//   downloadButton?.addEventListener("click", () => {
//     const options = { filename: "resume.pdf", html2canvas: { scale: 2 }, jsPDF: { format: "letter" } };
//     html2pdf().from(resumeDisplay).set(options).save();
//   });
  
//   // Load initial data
//   updateDisplay();
  









// @ts-ignore (Ignore TypeScript error for jsPDF)
// import { jsPDF } from "jspdf";

// const generateBtn = document.getElementById("generateBtn") as HTMLButtonElement;
// const downloadBtn = document.getElementById("downloadBtn") as HTMLButtonElement;

// const nameInput = document.getElementById("nameInput") as HTMLInputElement;
// const skillsInput = document.getElementById("skillsInput") as HTMLInputElement;
// const educationInput = document.getElementById("educationInput") as HTMLInputElement;
// const experienceInput = document.getElementById("experienceInput") as HTMLInputElement;

// const resName = document.getElementById("resName") as HTMLHeadingElement;
// const resSkills = document.getElementById("resSkills") as HTMLSpanElement;
// const resEducation = document.getElementById("resEducation") as HTMLSpanElement;
// const resExperience = document.getElementById("resExperience") as HTMLSpanElement;

// // Generate Resume Function
// generateBtn.addEventListener("click", () => {
//     if (nameInput.value) resName.innerText = nameInput.value;
//     if (skillsInput.value) resSkills.innerText = skillsInput.value;
//     if (educationInput.value) resEducation.innerText = educationInput.value;
//     if (experienceInput.value) resExperience.innerText = experienceInput.value;
// });

// // Download Resume as PDF
// downloadBtn.addEventListener("click", () => {
//     const doc = new jsPDF();
    
//     doc.setFont("helvetica", "bold");
//     doc.setFontSize(16);
//     doc.text("Resume", 90, 20);
    
//     doc.setFont("helvetica", "normal");
//     doc.setFontSize(12);
    
//     doc.text(`Name: ${resName.innerText}`, 20, 40);
//     doc.text(`Skills: ${resSkills.innerText}`, 20, 60);
//     doc.text(`Education: ${resEducation.innerText}`, 20, 80);
//     doc.text(`Experience: ${resExperience.innerText}`, 20, 100);
    
//     doc.save("Resume.pdf");
// });





// function updateResume(): void {
//     const nameElement = document.getElementById('name') as HTMLElement;
//     const emailElement = document.getElementById('email') as HTMLElement;
//     const phoneElement = document.getElementById('phone') as HTMLElement;
//     const summaryElement = document.getElementById('summary') as HTMLElement;

//     const inputName = document.getElementById('inputName') as HTMLInputElement;
//     const inputEmail = document.getElementById('inputEmail') as HTMLInputElement;
//     const inputPhone = document.getElementById('inputPhone') as HTMLInputElement;
//     const inputSummary = document.getElementById('inputSummary') as HTMLTextAreaElement;

//     nameElement.innerText = inputName.value || "Your Name";
//     emailElement.innerText = inputEmail.value || "your.email@example.com";
//     phoneElement.innerText = inputPhone.value || "+123 456 7890";
//     summaryElement.innerText = inputSummary.value || "A brief summary about yourself.";
// }

// // Function to download resume as a text file
// function downloadResume(): void {
//     const resumeContent = `
//         Name: ${document.getElementById('name')?.innerText}
//         Email: ${document.getElementById('email')?.innerText}
//         Phone: ${document.getElementById('phone')?.innerText}
//         Summary: ${document.getElementById('summary')?.innerText}
//     `;

//     const blob = new Blob([resumeContent], { type: "text/plain" });
//     const link = document.createElement("a");
//     link.href = URL.createObjectURL(blob);
//     link.download = "resume.txt";
//     link.click();
// }

// // Function to share resume link
// function shareResume(): void {
//     const shareData = {
//         title: "My Resume",
//         text: "Check out my resume!",
//         url: window.location.href
//     };

//     if (navigator.share) {
//         navigator.share(shareData)
//             .then(() => console.log("Resume shared successfully!"))
//             .catch((error) => console.error("Error sharing resume:", error));
//     } else {
//         alert("Sharing is not supported on this browser.");
//     }
// }

// // Attach event listeners
// document.addEventListener("DOMContentLoaded", () => {
//     document.querySelector("button[onclick='updateResume()']")?.addEventListener("click", updateResume);
//     document.querySelector("button[onclick='downloadResume()']")?.addEventListener("click", downloadResume);
//     document.querySelector("button[onclick='shareResume()']")?.addEventListener("click", shareResume);
// });







// function updateResume(): void {
//     const nameElement = document.getElementById("name") as HTMLElement;
//     const emailElement = document.getElementById("email") as HTMLElement;
//     const phoneElement = document.getElementById("phone") as HTMLElement;
//     const summaryElement = document.getElementById("summary") as HTMLElement;
  
//     const inputName = document.getElementById("inputName") as HTMLInputElement;
//     const inputEmail = document.getElementById("inputEmail") as HTMLInputElement;
//     const inputPhone = document.getElementById("inputPhone") as HTMLInputElement;
//     const inputSummary = document.getElementById("inputSummary") as HTMLTextAreaElement;
  
//     nameElement.innerText = inputName.value || "Your Name";
//     emailElement.innerText = inputEmail.value || "your.email@example.com";
//     phoneElement.innerText = inputPhone.value || "+123 456 7890";
//     summaryElement.innerText = inputSummary.value || "A brief summary about yourself.";
//   }
  
//   // Function to download resume as a text file
//   function downloadResume(): void {
//     const resumeContent = `
//   Name: ${document.getElementById("name")?.innerText}
//   Email: ${document.getElementById("email")?.innerText}
//   Phone: ${document.getElementById("phone")?.innerText}
//   Summary: ${document.getElementById("summary")?.innerText}
//     `;
  
//     const blob = new Blob([resumeContent], { type: "text/plain" });
//     const link = document.createElement("a");
//     link.href = URL.createObjectURL(blob);
//     link.download = "resume.txt";
//     link.click();
//   }
  
//   // Function to share resume link
//   function shareResume(): void {
//     const shareData = {
//       title: "My Resume",
//       text: "Check out my resume!",
//       url: window.location.href,
//     };
  
//     if (navigator.share) {
//       navigator
//         .share(shareData)
//         .then(() => console.log("Resume shared successfully!"))
//         .catch((error) => console.error("Error sharing resume:", error));
//     } else {
//       alert("Sharing is not supported on this browser.");
//     }
//   }
  
//   // Attach event listeners after DOM content is loaded
//   document.addEventListener("DOMContentLoaded", () => {
//     document
//       .querySelector("button[onclick='updateResume()']")
//       ?.addEventListener("click", updateResume);
//     document
//       .querySelector("button[onclick='downloadResume()']")
//       ?.addEventListener("click", downloadResume);
//     document
//       .querySelector("button[onclick='shareResume()']")
//       ?.addEventListener("click", shareResume);
//   });
  





// function updateResume(): void {
//     const nameElement = document.getElementById("name") as HTMLElement;
//     const emailElement = document.getElementById("email") as HTMLElement;
//     const phoneElement = document.getElementById("phone") as HTMLElement;
//     const summaryElement = document.getElementById("summary") as HTMLElement;
  
//     const inputName = document.getElementById("inputName") as HTMLInputElement;
//     const inputEmail = document.getElementById("inputEmail") as HTMLInputElement;
//     const inputPhone = document.getElementById("inputPhone") as HTMLInputElement;
//     const inputSummary = document.getElementById("inputSummary") as HTMLTextAreaElement;
  
//     nameElement.innerText = inputName.value || "Your Name";
//     emailElement.innerText = inputEmail.value || "your.email@example.com";
//     phoneElement.innerText = inputPhone.value || "+123 456 7890";
//     summaryElement.innerText = inputSummary.value || "A brief summary about yourself.";
//   }
  
//   // Updated download function: Downloads the resume as a complete HTML file with styling.
//   function downloadResume(): void {
//     const resumeElement = document.getElementById("resume");
//     if (!resumeElement) return;
    
//     // Get the resume's HTML (including its container)
//     const resumeHTML = resumeElement.outerHTML;
    
//     // Build a full HTML document wrapping the resume content
//     const fullHTML = `<!DOCTYPE html>
//   <html lang="en">
//   <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>My Downloaded Resume</title>
//    <link rel="stylesheet" href="styles.css" />
//     <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
//   </head>
//   <body>
//     ${resumeHTML}
//   </body>
//   </html>`;
    
//     const blob = new Blob([fullHTML], { type: "text/html" });
//     const link = document.createElement("a");
//     link.href = URL.createObjectURL(blob);
//     link.download = "resume.html";
//     link.click();
//   }
  
//   // Function to share resume link
//   function shareResume(): void {
//     const shareData = {
//       title: "My Resume",
//       text: "Check out my resume!",
//       url: window.location.href,
//     };
  
//     if (navigator.share) {
//       navigator
//         .share(shareData)
//         .then(() => console.log("Resume shared successfully!"))
//         .catch((error) => console.error("Error sharing resume:", error));
//     } else {
//       alert("Sharing is not supported on this browser.");
//     }
//   }
  
//   // Attach event listeners after DOM content is loaded
//   document.addEventListener("DOMContentLoaded", () => {
//     document
//       .querySelector("button[onclick='updateResume()']")
//       ?.addEventListener("click", updateResume);
//     document
//       .querySelector("button[onclick='downloadResume()']")
//       ?.addEventListener("click", downloadResume);
//     document
//       .querySelector("button[onclick='shareResume()']")
//       ?.addEventListener("click", shareResume);
//   });
  



















interface ResumeData {
  name: string;
  email: string;
  phone: string;
  education: string;
  skills: string;
  workExperience: string[];
  projects: string;
  contact: {
    email: string;
    phone: string;
    linkedin: string;
  };
  profilePicture?: string;
}

// DOM Elements
const resumeDisplay = document.getElementById("resumeDisplay") as HTMLDivElement;
const editButton = document.getElementById("editResume") as HTMLButtonElement;
const downloadButton = document.getElementById("downloadResume") as HTMLButtonElement;
const shareButton = document.getElementById("shareResume") as HTMLButtonElement;
const saveButton = document.getElementById("saveChanges") as HTMLButtonElement;
const cancelButton = document.getElementById("cancelEdit") as HTMLButtonElement;
const resumeContainer = document.getElementById("resumeContainer") as HTMLDivElement;
const imageInput = document.getElementById("editImage") as HTMLInputElement;
const profilePic = document.getElementById("profilePic") as HTMLImageElement;

// Form Elements
const nameInput = document.getElementById("editName") as HTMLInputElement;
const emailInput = document.getElementById("editEmail") as HTMLInputElement;
const phoneInput = document.getElementById("editPhone") as HTMLInputElement;
const educationInput = document.getElementById("editEducation") as HTMLTextAreaElement;
const skillsInput = document.getElementById("editSkills") as HTMLTextAreaElement;
const workExperienceInput = document.getElementById("editWorkExperience") as HTMLTextAreaElement;
const projectsInput = document.getElementById("editProjects") as HTMLTextAreaElement;
const contactInput = document.getElementById("editContact") as HTMLTextAreaElement;

// Shared link elements for resume sharing
const sharedLinkElement = document.getElementById("sharedLink") as HTMLAnchorElement;
const sharedLinkContainer = document.getElementById("sharedLinkContainer") as HTMLDivElement;

// Initial resume data
let resumeData: ResumeData = {
  name: "seerat fatima",
  email: "example@gmail.com",
  phone: "0000000000",
  education: "your qualification",
  skills: "example: JavaScript, TypeScript, HTML, CSS",
  workExperience: [
    "Built an interactive resume builder",
    "Designed and deployed a personal portfolio on GitHub and Vercel.",
  ],
  projects: "Resume Builder - Five different versions showcasing modern UI/UX design.",
  contact: {
    email: "example@gmail.com",
    phone: "0000000000",
    linkedin: "www.linkedin.com/in/seerat-fatima-9281892b6",
  },
};

// Class to handle resume sharing
class ResumeShare {

// Method to handle sharing the resume
public handleShare(): void {
  const data = this.getFormData();  // Extract data from the form or fields
  const resumeId = this.saveResume(data);  // Function to save the resume and get an ID

  // Generate a shareable link using the resume ID
  const shareableLink = `${window.location.origin}${window.location.pathname}?id=${resumeId}`;

  // Display the link
  if (sharedLinkElement && sharedLinkContainer) {
    sharedLinkElement.href = shareableLink;  // Set the link's href
    sharedLinkElement.textContent = shareableLink;  // Set the text content to the shareable link
    sharedLinkContainer.style.display = "block";  // Make the container visible to the user
  }
}

// Collect data from the form or fields
private getFormData(): ResumeData {
  return {
    name: nameInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    education: educationInput.value,
    skills: skillsInput.value,
    workExperience: workExperienceInput.value.split("\n").filter((item) => item.trim() !== ""),
    projects: projectsInput.value,
    contact: {
      email: "",  // Placeholder, adjust as needed
      phone: "",  // Placeholder, adjust as needed
      linkedin: "",  // Placeholder, adjust as needed
    },
  };
}

// Save the resume data and return a unique resume ID
private saveResume(data: ResumeData): string {
  const resumeId = `resume-${Math.random().toString(36).slice(2, 9)}`;

  return resumeId;
}
}

const resumeShare = new ResumeShare();

// Trigger share functionality when the button is clicked
shareButton.addEventListener("click", () => {
resumeShare.handleShare();
});

// Edit Mode Toggle
editButton.addEventListener("click", () => {
resumeContainer.classList.remove("hidden");
saveButton.classList.remove("hidden");
cancelButton.classList.remove("hidden");
editButton.classList.add("hidden");

// Populate form fields
nameInput.value = resumeData.name;
emailInput.value = resumeData.email;
phoneInput.value = resumeData.phone;
educationInput.value = resumeData.education;
skillsInput.value = resumeData.skills;
workExperienceInput.value = resumeData.workExperience.join("\n");
projectsInput.value = resumeData.projects;
contactInput.value = `Email: ${resumeData.contact.email}\nPhone: ${resumeData.contact.phone}\nLinkedIn: ${resumeData.contact.linkedin}`;
});

// Save Changes
saveButton.addEventListener("click", () => {
resumeData = {
  name: nameInput.value,
  email: emailInput.value,
  phone: phoneInput.value,
  education: educationInput.value,
  skills: skillsInput.value,
  workExperience: workExperienceInput.value.split("\n").filter((item) => item.trim() !== ""),
  projects: projectsInput.value,
  contact: {
    email: resumeData.contact.email,
    phone: resumeData.contact.phone,
    linkedin: resumeData.contact.linkedin,
  },
};

updateDisplay();
exitEditMode();
});

// Cancel Edit
cancelButton.addEventListener("click", exitEditMode);

// Helper functions
function exitEditMode(): void {
resumeContainer.classList.add("hidden");
saveButton.classList.add("hidden");
cancelButton.classList.add("hidden");
editButton.classList.remove("hidden");
}

function updateDisplay(): void {
const nameElement = document.getElementById("name");
const emailElement = document.getElementById("email");
const phoneElement = document.getElementById("phone");
const educationElement = document.getElementById("education");
const skillsElement = document.getElementById("skills");
const workExperienceElement = document.getElementById("workexperience");
const projectsElement = document.getElementById("projects");
const contactElement = document.getElementById("contact");

if (nameElement) nameElement.textContent = resumeData.name;
if (emailElement) emailElement.textContent = `Email: ${resumeData.email}`;
if (phoneElement) phoneElement.textContent = ` Phone: ${resumeData.phone}`;
if (educationElement) educationElement.textContent = resumeData.education;
if (skillsElement) skillsElement.textContent = resumeData.skills;
if (workExperienceElement) {
  workExperienceElement.innerHTML = resumeData.workExperience.map((exp) => `<li>${exp}</li>`).join("");
}
if (projectsElement) projectsElement.textContent = resumeData.projects;
if (contactElement) {
  contactElement.innerHTML = `
    <li> Email: ${resumeData.contact.email}</li>
    <li> Phone: ${resumeData.contact.phone}</li>
    <li> LinkedIn: <a href="${resumeData.contact.linkedin}" target="_blank">Click here</a></li>
  `;
}
}

// Image upload handling
imageInput.addEventListener('change', (event) => {
const file = (event.target as HTMLInputElement).files?.[0];
if (file) {
  const reader = new FileReader();
  reader.onload = function () {
    if (profilePic) {
      profilePic.src = reader.result as string;
    }
  };
  reader.readAsDataURL(file);
}
});
declare var html2pdf: any;
// Download functionality (using html2pdf.js)
downloadButton.addEventListener("click", () => {
const element = resumeDisplay;  // The element you want to convert to a PDF
const options = {
  margin:       1,
  filename:     'resume.pdf',
  image:        { type: 'jpeg', quality: 0.98 },
  html2canvas:  { scale: 8 },
  jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
};
html2pdf().from(element).set(options).save('resume.pdf');
});

// Load the initial data
updateDisplay();
