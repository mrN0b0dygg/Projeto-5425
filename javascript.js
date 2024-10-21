document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project-item');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter');
  
        
        projects.forEach(project => {
          if (filter === 'all' || project.getAttribute('data-category') === filter) {
            project.style.display = 'block'; 
          } else {
            project.style.display = 'none'; 
          }
        });
  
      
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
      });
    });
  });
  