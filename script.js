// DOM Elements
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');
        const pages = document.querySelectorAll('.page');
        const contactForm = document.getElementById('contactForm');

        // Toggle Mobile Menu
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.innerHTML = navMenu.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });

        // Navigation - Switch Pages
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Get the target page
                const targetPage = link.getAttribute('data-page');
                
                // Hide all pages
                pages.forEach(page => page.classList.remove('active'));
                
                // Show the target page
                document.getElementById(targetPage).classList.add('active');
                
                // Update active nav link
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                link.classList.add('active');
                
                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
                }
                
                // Scroll to top
                window.scrollTo(0, 0);
            });
        });

        // Form Validation and Submission
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Basic validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !service || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // In a real application, you would send the form data to a server here
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });

        // Add animation to gallery items on scroll
        const galleryItems = document.querySelectorAll('.gallery-item');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        // Set initial state for animation
        galleryItems.forEach(item => {
            item.style.opacity = 0;
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(item);
        });