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
   ${data.license}

   ## Contributing 
   ${data.contributing}
   ${data.user}

   ## Tests 
   ${data.tests}

   ## Questions
   ${data.questions}

   `;
}

module.exports = generateMarkdown;
