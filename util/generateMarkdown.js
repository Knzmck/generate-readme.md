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

   ...${data.motivation}..

   ...${data.description}..

   ## Installation 

   ...${data.installation}

   ## Usage

   ...${data.usage}

   ## License 

   ...This product is licensed by ${data.license}.

   ## Contributing 

   ...${data.contributing}..


   ## Tests 

   ...${data.tests}

   ## Questions

   ...${data.questions}..

   ## Developer 

   ...<img src = 'https://avatars.githubusercontent.com/<${data.user}'>..>

   `;
}

module.exports = generateMarkdown;
