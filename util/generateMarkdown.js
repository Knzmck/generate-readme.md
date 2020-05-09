function generateMarkdown(data) {
  return `#  ${data.title}

   ## Table of Contents
   * About 
   * Installation 
   * Usage
   * License
   * Contributing 
   * Tests 
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

   ## Questions  

   ${data.questions}  

   ## Developer  

   <img src="https://avatars.githubusercontent.com/${data.username}" style="height: 25px; width: 25px; border-radius: 100%;">   

   `;
   console.log(data.username)
}

module.exports = generateMarkdown;
