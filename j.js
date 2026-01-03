document.getElementById('scrollToAboutUs').addEventListener('click', function() {
    scrollToSection('about-us');
  });
  
  document.getElementById('scrollToSkills').addEventListener('click', function() {
    scrollToSection('skills');
  });
  
  document.getElementById('scrollToGallery').addEventListener('click', function() {
    scrollToSection('gallery');
  });
  
  document.getElementById('scrollToTimeline').addEventListener('click', function() {
    scrollToSection('timeline');
  });
  
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}