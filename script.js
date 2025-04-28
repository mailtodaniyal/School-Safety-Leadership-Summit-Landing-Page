        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mainNav = document.getElementById('mainNav');
        
        mobileMenuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            mobileMenuBtn.innerHTML = mainNav.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
        
        // Header Scroll Effect
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // Smooth Scrolling for Anchor Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                if (this.getAttribute('href') === '#') return;
                
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 70,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (mainNav.classList.contains('active')) {
                        mainNav.classList.remove('active');
                        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                    }
                }
            });
        });
        
        // Intersection Observer for Animations
        const observerOptions = {
            threshold: 0.1
        };
        
        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        };
        
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        
        // Elements to observe
        const elementsToAnimate = [
            document.getElementById('problemStatement'),
            document.getElementById('speaker1'),
            document.getElementById('speaker2'),
            document.getElementById('benefit1'),
            document.getElementById('benefit2'),
            document.getElementById('benefit3'),
            document.getElementById('benefit4')
        ];
        
        elementsToAnimate.forEach(element => {
            if (element) observer.observe(element);
        });
        
        // Pulse animation for CTA buttons
        const pulseButtons = document.querySelectorAll('.pulse');
        pulseButtons.forEach(button => {
            button.addEventListener('animationiteration', () => {
                // Reset animation to maintain smoothness
                button.style.animation = 'none';
                void button.offsetWidth; // Trigger reflow
                button.style.animation = 'pulse 2s infinite';
            });
        });
