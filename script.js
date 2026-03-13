         (function() {
            
            const roles = [
                "Software Engineer",
                "Java Developer",
                "C programmer",
                "frontend enthusiast",
                "problem solver"
            ];
            let i = 0, j = 0, isDeleting = false;
            const typingSpan = document.getElementById('typing');
            
            function typeEffect() {
                if (!typingSpan) return;
                const current = roles[i];
                if (isDeleting) {
                    typingSpan.textContent = current.substring(0, j-1);
                    j--;
                } else {
                    typingSpan.textContent = current.substring(0, j+1);
                    j++;
                }
                if (!isDeleting && j === current.length) {
                    isDeleting = true;
                    setTimeout(typeEffect, 2000);
                } else if (isDeleting && j === 0) {
                    isDeleting = false;
                    i = (i+1) % roles.length;
                    setTimeout(typeEffect, 300);
                } else {
                    setTimeout(typeEffect, isDeleting ? 60 : 100);
                }
            }
            window.addEventListener('load', typeEffect);
            const sections = document.querySelectorAll('.section');
            const navLinks = document.querySelectorAll('.nav-links a');

            window.addEventListener('scroll', () => {
                let currentId = '';
                sections.forEach(sec => {
                    const top = sec.offsetTop - 90;
                    const bottom = top + sec.offsetHeight;
                    if (window.scrollY >= top && window.scrollY < bottom) {
                        currentId = sec.getAttribute('id');
                    }
                });
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${currentId}`) {
                        link.classList.add('active');
                    }
                });
            });
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.2 });
            sections.forEach(s => observer.observe(s));
            document.getElementById('contactForm')?.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Thanks for reaching out! I will reply soon 😊');
                e.target.reset();
            });
        })();
  