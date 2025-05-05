// Preloader logic
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.classList.add('hidden');
  });
  
  // Scroll to About
  function scrollToSection() {
    const section = document.getElementById('next-section');
    section.scrollIntoView({ behavior: 'smooth' });
  }
  
  // 3D Tilt Effect
  VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.2
  });
  function openProjectModal() {
    document.getElementById('projectModal').style.display = 'block';
  }
  function closeProjectModal() {
    document.getElementById('projectModal').style.display = 'none';
  }
  
  // Optional: Close modal when clicking outside content
  window.onclick = function (e) {
    const modal = document.getElementById('projectModal');
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  };
  