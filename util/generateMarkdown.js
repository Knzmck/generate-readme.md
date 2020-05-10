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

   ![Image description](${data.tests})  

   ## Developer  

   <div class="CircleBadge CircleBadge--medium bg-gray-dark">
   <img src="https://avatars.githubusercontent.com/${data.user}" height="90" width="90">   
   </div>  
   ${data.user}  

   ## Questions  

   Please direct all questions the developer at this email ${data.questions}  


   `;
}

module.exports = generateMarkdown;
