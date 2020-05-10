// Function to generate markdown layout
function generateMarkdown(data) {
  return `#  ${data.title}

   ## Table of Contents  
   * About  
   * Installation   
   * Usage  
   * License  
   * Contributing 
   * Tests 
   * Developer  
   * Questions  
   
   ## About   

   ${data.motivation}  

   ${data.description}  

   ## Installation   

   ${data.installation}  

   ## Usage  

   ${data.usage}  

   ## License  

   [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/${data.license})  
 

   ## Contributing  

   ${data.contributing}  


   ## Tests  

   ${data.tests}  

   ## Developer  

   <img src="https://avatars.githubusercontent.com/${data.user}=100x100" style="height: 100px; width: 100px; border-radius:100%;">   

   ## Questions  

   Please direct all questions the developer at this email ${data.questions}  


   `;
}

module.exports = generateMarkdown;
