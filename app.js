// PWA Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.feature-card, .testimonial-card');
    animateElements.forEach(el => {
        observer.observe(el);
    });

    // FAQ Accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            
            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});

// Button Click Handlers
document.addEventListener('DOMContentLoaded', function() {
    // Download buttons
    const downloadButtons = document.querySelectorAll('.btn-primary');
    downloadButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add download animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Simulate download (replace with actual app store links)
            console.log('Download button clicked:', this.textContent.trim());
        });
    });
    
    // Sample story button
    const sampleButton = document.querySelector('.btn-secondary');
    if (sampleButton) {
        sampleButton.addEventListener('click', function() {
            // Add sample story functionality
            console.log('Sample story button clicked');
            // You can add audio playback or story preview here
        });
    }
});

// Add CSS for mobile navigation
const mobileNavStyles = `
    @media (max-width: 768px) {
        .nav-menu {
            position: fixed;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(10px);
            flex-direction: column;
            padding: 2rem;
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            border-top: 1px solid rgba(255, 107, 53, 0.1);
            position: absolute;
            left: 0;
            transform: translateY(-100%);
        }
        
        .nav-menu.active {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
        }
        
        .nav-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .nav-toggle.active span:nth-child(2) {
            opacity: 0;
        }
        
        .nav-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
    }
    
    .animate-in {
        animation: fadeInUp 0.6s ease forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

// Inject mobile navigation styles
const styleSheet = document.createElement('style');
styleSheet.textContent = mobileNavStyles;
document.head.appendChild(styleSheet);

// PWA Install Prompt
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later
    deferredPrompt = e;
    
    // Show install button if you have one
    const installButton = document.querySelector('.install-button');
    if (installButton) {
        installButton.style.display = 'block';
        installButton.addEventListener('click', () => {
            // Show the install prompt
            deferredPrompt.prompt();
            // Wait for the user to respond to the prompt
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the install prompt');
                } else {
                    console.log('User dismissed the install prompt');
                }
                deferredPrompt = null;
            });
        });
    }
});

// Add to Home Screen functionality
window.addEventListener('appinstalled', (evt) => {
    console.log('App was installed');
});

// Performance optimization - Lazy load images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// Add some interactive animations to the story scene
document.addEventListener('DOMContentLoaded', function() {
    const animals = document.querySelectorAll('.animal');
    const stars = document.querySelectorAll('.star');
    
    // Add click interactions to animals
    animals.forEach(animal => {
        animal.addEventListener('click', function() {
            this.style.transform = 'scale(1.2) rotate(10deg)';
            setTimeout(() => {
                this.style.transform = '';
            }, 300);
        });
    });
    
    // Add click interactions to stars
    stars.forEach(star => {
        star.addEventListener('click', function() {
            this.style.transform = 'scale(1.5)';
            this.style.filter = 'brightness(2)';
            setTimeout(() => {
                this.style.transform = '';
                this.style.filter = '';
            }, 500);
        });
    });
});

// Add scroll-based parallax effect to the hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.story-scene, .moon, .stars');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Supabase Authentication Functions
const auth = {
    // Sign In
    async signIn(email, password) {
        try {
            const { data, error } = await window.supabaseClient.auth.signInWithPassword({
                email: email,
                password: password
            });
            
            if (error) throw error;
            
            return { success: true, data };
        } catch (error) {
            console.error('Sign in error:', error.message);
            return { success: false, error: error.message };
        }
    },

    // Sign Up
    async signUp(email, password, fullName) {
        try {
            const { data, error } = await window.supabaseClient.auth.signUp({
                email: email,
                password: password,
                options: {
                    data: {
                        full_name: fullName
                    }
                }
            });
            
            if (error) throw error;
            
            return { success: true, data };
        } catch (error) {
            console.error('Sign up error:', error.message);
            return { success: false, error: error.message };
        }
    },

    // Password Reset
    async resetPassword(email) {
        try {
            const { data, error } = await window.supabaseClient.auth.resetPasswordForEmail(email, {
                redirectTo: window.location.origin + '/reset-password'
            });
            
            if (error) throw error;
            
            return { success: true, data };
        } catch (error) {
            console.error('Password reset error:', error.message);
            return { success: false, error: error.message };
        }
    },

    // Sign Out
    async signOut() {
        try {
            const { error } = await window.supabaseClient.auth.signOut();
            if (error) throw error;
            return { success: true };
        } catch (error) {
            console.error('Sign out error:', error.message);
            return { success: false, error: error.message };
        }
    },

    // Get current user
    getCurrentUser() {
        return window.supabaseClient.auth.getUser();
    },

    // Listen to auth state changes
    onAuthStateChange(callback) {
        return window.supabaseClient.auth.onAuthStateChange(callback);
    }
};

// Popup Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    const popupOverlay = document.getElementById('popup-overlay');
    const popupTitle = document.getElementById('popup-title');
    const popupContent = document.getElementById('popup-content');
    const popupClose = document.getElementById('popup-close');
    const popupTriggers = document.querySelectorAll('.popup-trigger');

    // Popup content data
    const popupData = {
        signin: {
            title: 'Sign In',
            content: `
                <div class="auth-form">
                    <div class="auth-separator"></div>
                    <form class="login-form">
                        <div class="form-group">
                            <label for="email">Email Address</label>
                            <input type="email" id="email" placeholder="Enter your email" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" id="password" placeholder="Enter your password" required>
                        </div>
                        
                        <div class="form-options">
                            <label class="checkbox-label">
                                <input type="checkbox" id="remember">
                                <span>Remember me</span>
                            </label>
                            <a href="#" class="forgot-password popup-trigger" data-popup="forgotpassword">Forgot Password?</a>
                        </div>
                        
                        <button type="submit" class="btn btn-primary btn-fit-content">Sign In</button>
                    </form>
                    
                    <p class="auth-footer">
                        Don't have an account? <a href="#" class="popup-trigger" data-popup="signup">Sign Up</a>
                    </p>
                </div>
            `
        },
        signup: {
            title: 'Sign Up',
            content: `
                <div class="auth-form">
                    <div class="auth-separator"></div>
                    <form class="signup-form">
                        <div class="form-group">
                            <label for="fullname">Full Name</label>
                            <input type="text" id="fullname" placeholder="Enter your full name" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="signup-email">Email Address</label>
                            <input type="email" id="signup-email" placeholder="Enter your email" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="signup-password">Password</label>
                            <input type="password" id="signup-password" placeholder="Create a password" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="confirm-password">Confirm Password</label>
                            <input type="password" id="confirm-password" placeholder="Confirm your password" required>
                        </div>
                        
                        <div class="form-options">
                            <label class="checkbox-label">
                                <input type="checkbox" id="agree-terms" required>
                                <span>I agree to the <a href="#" class="popup-trigger" data-popup="terms">Terms of Service</a> and <a href="#" class="popup-trigger" data-popup="privacy">Privacy Policy</a></span>
                            </label>
                        </div>
                        
                        <button type="submit" class="btn btn-primary btn-fit-content">Create Account</button>
                    </form>
                    
                    <p class="auth-footer">
                        Already have an account? <a href="#" class="popup-trigger" data-popup="signin">Sign In</a>
                    </p>
                </div>
            `
        },
        privacy: {
            title: 'Privacy Policy',
            content: `
                <h4>Your Privacy Matters</h4>
                <p>At Storio, we are committed to protecting your family's privacy and ensuring a safe experience for your children.</p>
                
                <h4>Information We Collect</h4>
                <ul>
                    <li>Child's name and age for story personalization</li>
                    <li>Voice recordings for story narration</li>
                    <li>App usage data to improve our service</li>
                    <li>Device information for app functionality</li>
                </ul>
                
                <h4>How We Use Your Information</h4>
                <ul>
                    <li>Create personalized bedtime stories</li>
                    <li>Generate AI-powered content</li>
                    <li>Improve app performance and features</li>
                    <li>Provide customer support</li>
                </ul>
                
                <h4>Data Security</h4>
                <p>We use industry-standard encryption to protect all personal information and voice recordings. Your data is stored securely and never shared with third parties without your explicit consent.</p>
                
                <h4>Children's Privacy</h4>
                <p>We comply with COPPA (Children's Online Privacy Protection Act) and never collect personal information from children under 13 without parental consent.</p>
                
                <p><strong>Last updated:</strong> January 2024</p>
            `
        },
        terms: {
            title: 'Terms of Service',
            content: `
                <h4>Welcome to Storio</h4>
                <p>By using our app, you agree to these terms of service and our commitment to providing a safe, magical experience for your family.</p>
                
                <h4>Acceptable Use</h4>
                <ul>
                    <li>Use the app for personal, non-commercial purposes</li>
                    <li>Respect the rights of other users</li>
                    <li>Do not attempt to reverse engineer the app</li>
                    <li>Do not share inappropriate content</li>
                </ul>
                
                <h4>Content Guidelines</h4>
                <p>All stories generated by our AI are designed to be age-appropriate and family-friendly. We reserve the right to remove any content that violates our guidelines.</p>
                
                <h4>Subscription & Payments</h4>
                <ul>
                    <li>Free trial available for new users</li>
                    <li>Subscription automatically renews unless cancelled</li>
                    <li>Refunds available within 30 days of purchase</li>
                    <li>Prices may change with 30 days notice</li>
                </ul>
                
                <h4>Limitation of Liability</h4>
                <p>Storio is provided "as is" without warranties. We are not liable for any damages arising from the use of our service.</p>
                
                <h4>Changes to Terms</h4>
                <p>We may update these terms from time to time. Continued use of the app constitutes acceptance of any changes.</p>
                
                <p><strong>Last updated:</strong> January 2024</p>
            `
        },
        contact: {
            title: 'Contact Us',
            content: `
                <h4>Get in Touch</h4>
                <p>We'd love to hear from you! Whether you have questions, feedback, or need support, our team is here to help.</p>
                
                <div class="contact-info">
                    <h4>📧 Email Support</h4>
                    <p><strong>General Inquiries:</strong> hello@storio.app</p>
                    <p><strong>Technical Support:</strong> support@storio.app</p>
                    <p><strong>Privacy Concerns:</strong> privacy@storio.app</p>
                </div>
                
                <div class="contact-info">
                    <h4>⏰ Response Times</h4>
                    <p><strong>Email Support:</strong> Within 24 hours</p>
                    <p><strong>Urgent Issues:</strong> Within 4 hours</p>
                    <p><strong>Weekend Support:</strong> Available</p>
                </div>
                
                <h4>Before You Contact Us</h4>
                <ul>
                    <li>Check our FAQ section for quick answers</li>
                    <li>Include your device type and app version</li>
                    <li>Describe the issue in detail</li>
                    <li>Attach screenshots if relevant</li>
                </ul>
                
                <h4>Feedback & Suggestions</h4>
                <p>We're constantly improving Storio based on user feedback. Share your ideas for new features, story themes, or improvements!</p>
                
                <div class="contact-info">
                    <h4>🌟 Join Our Community</h4>
                    <p>Follow us on social media for updates, tips, and magical bedtime story ideas!</p>
                </div>
            `
        },
        forgotpassword: {
            title: 'Forgot Password',
            content: `
                <div class="auth-form">
                    <div class="auth-separator"></div>
                    <h4>Reset Your Password</h4>
                    <p>Enter your email address and we'll send you a link to reset your password.</p>
                    
                    <form class="forgot-password-form">
                        <div class="form-group">
                            <label for="reset-email">Email Address</label>
                            <input type="email" id="reset-email" placeholder="Enter your email address" required>
                        </div>
                        
                        <button type="submit" class="btn btn-primary btn-fit-content">Send Reset Link</button>
                    </form>
                    
                    <p class="auth-footer">
                        Remember your password? <a href="#" class="popup-trigger" data-popup="signin">Sign In</a>
                    </p>
                </div>
            `
        }
    };

    // Open popup function
    function openPopup(type) {
        const data = popupData[type];
        if (data) {
            popupTitle.textContent = data.title;
            popupContent.innerHTML = data.content;
            popupOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    // Close popup function
    function closePopup() {
        popupOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Event listeners
    popupTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            const popupType = this.getAttribute('data-popup');
            openPopup(popupType);
        });
    });

    // Handle cross-linking between auth popups
    popupContent.addEventListener('click', function(e) {
        if (e.target.classList.contains('popup-trigger')) {
            e.preventDefault();
            const popupType = e.target.getAttribute('data-popup');
            openPopup(popupType);
        }
    });

    // Form validation for Sign In
    popupContent.addEventListener('input', function(e) {
        if (e.target.closest('.login-form')) {
            const form = e.target.closest('.login-form');
            const email = form.querySelector('#email');
            const password = form.querySelector('#password');
            const submitBtn = form.querySelector('button[type="submit"]');
            
            if (email && password && submitBtn) {
                const isFormValid = email.value.trim() !== '' && password.value.trim() !== '';
                submitBtn.disabled = !isFormValid;
                submitBtn.style.opacity = isFormValid ? '1' : '0.6';
                submitBtn.style.cursor = isFormValid ? 'pointer' : 'not-allowed';
            }
        }
    });

    // Form validation for Sign Up
    popupContent.addEventListener('input', function(e) {
        if (e.target.closest('.signup-form')) {
            const form = e.target.closest('.signup-form');
            const fullname = form.querySelector('#fullname');
            const email = form.querySelector('#signup-email');
            const password = form.querySelector('#signup-password');
            const confirmPassword = form.querySelector('#confirm-password');
            const agreeTerms = form.querySelector('#agree-terms');
            const submitBtn = form.querySelector('button[type="submit"]');
            
            if (fullname && email && password && confirmPassword && agreeTerms && submitBtn) {
                const isFormValid = 
                    fullname.value.trim() !== '' && 
                    email.value.trim() !== '' && 
                    password.value.trim() !== '' && 
                    confirmPassword.value.trim() !== '' && 
                    agreeTerms.checked;
                submitBtn.disabled = !isFormValid;
                submitBtn.style.opacity = isFormValid ? '1' : '0.6';
                submitBtn.style.cursor = isFormValid ? 'pointer' : 'not-allowed';
            }
        }
    });

    // Handle checkbox change for Sign Up
    popupContent.addEventListener('change', function(e) {
        if (e.target.id === 'agree-terms') {
            const form = e.target.closest('.signup-form');
            const fullname = form.querySelector('#fullname');
            const email = form.querySelector('#signup-email');
            const password = form.querySelector('#signup-password');
            const confirmPassword = form.querySelector('#confirm-password');
            const submitBtn = form.querySelector('button[type="submit"]');
            
            if (fullname && email && password && confirmPassword && submitBtn) {
                const isFormValid = 
                    fullname.value.trim() !== '' && 
                    email.value.trim() !== '' && 
                    password.value.trim() !== '' && 
                    confirmPassword.value.trim() !== '' && 
                    e.target.checked;
                submitBtn.disabled = !isFormValid;
                submitBtn.style.opacity = isFormValid ? '1' : '0.6';
                submitBtn.style.cursor = isFormValid ? 'pointer' : 'not-allowed';
            }
        }
    });

    // Handle form submissions
    popupContent.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Sign In form
        if (e.target.classList.contains('login-form')) {
            const email = e.target.querySelector('#email').value;
            const password = e.target.querySelector('#password').value;
            const submitBtn = e.target.querySelector('button[type="submit"]');
            
            // Disable button and show loading
            submitBtn.disabled = true;
            submitBtn.textContent = 'Signing In...';
            
            const result = await auth.signIn(email, password);
            
            if (result.success) {
                closePopup();
                showNotification('Successfully signed in!', 'success');
                // Update UI for signed-in state
                updateAuthUI();
            } else {
                showNotification(result.error, 'error');
                submitBtn.disabled = false;
                submitBtn.textContent = 'Sign In';
            }
        }
        
        // Sign Up form
        if (e.target.classList.contains('signup-form')) {
            const fullname = e.target.querySelector('#fullname').value;
            const email = e.target.querySelector('#signup-email').value;
            const password = e.target.querySelector('#signup-password').value;
            const confirmPassword = e.target.querySelector('#confirm-password').value;
            const submitBtn = e.target.querySelector('button[type="submit"]');
            
            if (password !== confirmPassword) {
                showNotification('Passwords do not match', 'error');
                return;
            }
            
            // Disable button and show loading
            submitBtn.disabled = true;
            submitBtn.textContent = 'Creating Account...';
            
            const result = await auth.signUp(email, password, fullname);
            
            if (result.success) {
                closePopup();
                showNotification('Account created! Please check your email to verify your account.', 'success');
            } else {
                showNotification(result.error, 'error');
                submitBtn.disabled = false;
                submitBtn.textContent = 'Create Account';
            }
        }
        
        // Forgot Password form
        if (e.target.classList.contains('forgot-password-form')) {
            const email = e.target.querySelector('#reset-email').value;
            const submitBtn = e.target.querySelector('button[type="submit"]');
            
            // Disable button and show loading
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            
            const result = await auth.resetPassword(email);
            
            if (result.success) {
                closePopup();
                showNotification('Password reset link sent to your email!', 'success');
            } else {
                showNotification(result.error, 'error');
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Reset Link';
            }
        }
    });

    popupClose.addEventListener('click', closePopup);
    popupOverlay.addEventListener('click', function(e) {
        if (e.target === popupOverlay) {
            closePopup();
        }
    });

    // Close popup with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && popupOverlay.classList.contains('active')) {
            closePopup();
        }
    });
});

// Add CSS for loading animation
const loadingStyles = `
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    
    body.loaded {
        opacity: 1;
    }
    
    .story-scene {
        opacity: 0;
        animation: fadeIn 1s ease 0.5s forwards;
    }
    
    @keyframes fadeIn {
        to {
            opacity: 1;
        }
    }
`;

const loadingStyleSheet = document.createElement('style');
loadingStyleSheet.textContent = loadingStyles;
document.head.appendChild(loadingStyleSheet);

// Notification function
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">×</button>
        </div>
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Auto hide after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
    
    // Close button functionality
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    });
}

// Update UI based on authentication state
async function updateAuthUI() {
    const { data: { user } } = await auth.getCurrentUser();
    const signInBtn = document.querySelector('.btn-primary[data-popup="signin"]');
    const signUpBtn = document.querySelector('.btn-secondary[data-popup="signup"]');
    
    if (user) {
        // User is signed in
        if (signInBtn) signInBtn.textContent = `Welcome, ${user.user_metadata?.full_name || user.email}`;
        if (signUpBtn) signUpBtn.textContent = 'Dashboard';
        
        // Update sign up button to go to dashboard
        if (signUpBtn) {
            signUpBtn.removeAttribute('data-popup');
            signUpBtn.onclick = () => {
                router.navigate('/dashboard');
            };
        }
        
        // Only redirect to dashboard if we're on the home page and not already on a protected route
        if (window.location.pathname === '/' && router.currentRoute === '/') {
            router.navigate('/dashboard');
        }
    } else {
        // User is signed out
        if (signInBtn) signInBtn.innerHTML = '<span class="btn-icon">🔑</span>Sign In';
        if (signUpBtn) {
            signUpBtn.innerHTML = '<span class="btn-icon">✨</span>Sign Up';
            signUpBtn.setAttribute('data-popup', 'signup');
            signUpBtn.onclick = null; // Remove dashboard handler
        }
        
        // If we're on a protected route and user is logged out, redirect to home
        if (window.location.pathname !== '/') {
            router.navigate('/');
        }
    }
}

// Helper functions for story creation and profile updates
function createStory() {
    const childName = document.getElementById('child-name').value;
    const childAge = document.getElementById('child-age').value;
    const favoriteCharacter = document.getElementById('favorite-character').value;
    const storyTheme = document.getElementById('story-theme').value;
    
    if (!childName || !childAge || !favoriteCharacter) {
        showNotification('Please fill in all required fields', 'error');
        return;
    }
    
    showNotification('Creating your story...', 'success');
    // TODO: Implement story creation logic
    setTimeout(() => {
        showNotification('Story created successfully!', 'success');
        router.navigate('/my-stories');
    }, 2000);
}

function updateProfile() {
    const name = document.getElementById('profile-name').value;
    if (!name) {
        showNotification('Please enter your name', 'error');
        return;
    }
    
    showNotification('Profile updated successfully!', 'success');
    // TODO: Implement profile update logic
}

// Listen to authentication state changes
auth.onAuthStateChange((event, session) => {
    console.log('Auth state changed:', event, session);
    if (router) {
        updateAuthUI();
    }
});

// Initialize UI on page load
document.addEventListener('DOMContentLoaded', async function() {
    // Initialize router first
    router = new Router();
    
    // Wait a bit for router to initialize, then update auth UI
    setTimeout(() => {
        updateAuthUI();
    }, 100);
});

// Client-side Router
class Router {
    constructor() {
        this.routes = {
            '/': { title: 'Home', public: true },
            '/dashboard': { title: 'Dashboard', public: false },
            '/create-story': { title: 'Create Story', public: false },
            '/my-stories': { title: 'My Stories', public: false },
            '/profile': { title: 'Profile', public: false },
            '/settings': { title: 'Settings', public: false }
        };
        
        this.currentRoute = '/';
        this.init();
    }
    
    init() {
        // Handle browser back/forward buttons
        window.addEventListener('popstate', (e) => {
            this.navigate(window.location.pathname, false);
        });
        
        // Handle initial page load
        this.navigate(window.location.pathname, false);
    }
    
    async navigate(path, updateHistory = true) {
        const route = this.routes[path] || this.routes['/'];
        
        // Check authentication for protected routes
        if (!route.public) {
            const { data: { user } } = await auth.getCurrentUser();
            if (!user) {
                this.navigate('/', updateHistory);
                return;
            }
        }
        
        this.currentRoute = path;
        
        if (updateHistory) {
            window.history.pushState({}, route.title, path);
        }
        
        this.renderPage(path);
        
        // Update page title
        document.title = `${route.title} - Storio`;
    }
    
    renderPage(path) {
        // Hide all sections first
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            section.style.display = 'none';
        });
        
        // Hide blank page if exists
        const blankPage = document.getElementById('blank-page');
        if (blankPage) {
            blankPage.remove();
        }
        
        // Show/hide navigation based on route
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu) {
            if (path === '/') {
                navMenu.style.display = 'flex';
            } else {
                navMenu.style.display = 'none';
            }
        }
        
        // Show/hide footer sections
        const quickLinksSection = document.querySelector('.footer-section:nth-child(2)');
        const supportSection = document.querySelector('.footer-section:nth-child(3)');
        if (path === '/') {
            if (quickLinksSection) quickLinksSection.style.display = 'block';
            if (supportSection) supportSection.style.display = 'block';
        } else {
            if (quickLinksSection) quickLinksSection.style.display = 'none';
            if (supportSection) supportSection.style.display = 'none';
        }
        
        if (path === '/') {
            // Show home page sections
            sections.forEach(section => {
                section.style.display = 'block';
            });
        } else {
            // Show app content for other routes
            this.showAppContent(path);
        }
        
        // Update page title
        document.title = `${route.title} - Storio`;
    }
    
    showAppContent(path) {
        // Remove existing app content
        const existingApp = document.getElementById('app-content');
        if (existingApp) {
            existingApp.remove();
        }
        
        // Create app container
        const appContent = document.createElement('div');
        appContent.id = 'app-content';
        appContent.className = 'app-content';
        
        // Add navigation for app pages
        const appNav = document.createElement('nav');
        appNav.className = 'app-nav';
        appNav.innerHTML = `
            <div class="app-nav-container">
                <div class="app-logo">
                    <div class="logo-icon">🌟</div>
                    <span class="logo-text">Storio</span>
                </div>
                <ul class="app-nav-menu">
                    <li><a href="#" data-route="/dashboard" class="${path === '/dashboard' ? 'active' : ''}">Dashboard</a></li>
                    <li><a href="#" data-route="/create-story" class="${path === '/create-story' ? 'active' : ''}">Create Story</a></li>
                    <li><a href="#" data-route="/my-stories" class="${path === '/my-stories' ? 'active' : ''}">My Stories</a></li>
                    <li><a href="#" data-route="/profile" class="${path === '/profile' ? 'active' : ''}">Profile</a></li>
                </ul>
                <button class="btn btn-secondary sign-out-btn">
                    <span class="btn-icon">🚪</span>Sign Out
                </button>
            </div>
        `;
        
        // Add app navigation event listeners
        appNav.querySelectorAll('[data-route]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const route = link.getAttribute('data-route');
                this.navigate(route);
            });
        });
        
        // Add sign out functionality
        appNav.querySelector('.sign-out-btn').addEventListener('click', async () => {
            const result = await auth.signOut();
            if (result.success) {
                showNotification('Successfully signed out!', 'success');
                this.navigate('/');
            }
        });
        
        appContent.appendChild(appNav);
        
        // Add page content based on route
        const pageContent = document.createElement('div');
        pageContent.className = 'page-content';
        
        switch (path) {
            case '/dashboard':
                pageContent.innerHTML = this.getDashboardContent();
                break;
            case '/create-story':
                pageContent.innerHTML = this.getCreateStoryContent();
                break;
            case '/my-stories':
                pageContent.innerHTML = this.getMyStoriesContent();
                break;
            case '/profile':
                pageContent.innerHTML = this.getProfileContent();
                break;
            default:
                pageContent.innerHTML = this.getDashboardContent();
        }
        
        appContent.appendChild(pageContent);
        
        // Insert after header
        const header = document.querySelector('header');
        header.parentNode.insertBefore(appContent, header.nextSibling);
    }
    
    getDashboardContent() {
        return `
            <div class="dashboard-container">
                <h1>Welcome to Storio</h1>
                <div class="dashboard-grid">
                    <div class="dashboard-card">
                        <h3>Quick Actions</h3>
                        <button class="btn btn-primary" onclick="router.navigate('/create-story')">
                            <span class="btn-icon">✨</span>Create New Story
                        </button>
                        <button class="btn btn-secondary" onclick="router.navigate('/my-stories')">
                            <span class="btn-icon">📚</span>View My Stories
                        </button>
                    </div>
                    <div class="dashboard-card">
                        <h3>Recent Stories</h3>
                        <p>No stories created yet. Start your first story!</p>
                    </div>
                </div>
            </div>
        `;
    }
    
    getCreateStoryContent() {
        return `
            <div class="create-story-container">
                <h1>Create a New Story</h1>
                <div class="story-form">
                    <div class="form-group">
                        <label>Child's Name</label>
                        <input type="text" placeholder="Enter child's name" id="child-name">
                    </div>
                    <div class="form-group">
                        <label>Age</label>
                        <input type="number" placeholder="Age" id="child-age" min="1" max="12">
                    </div>
                    <div class="form-group">
                        <label>Favorite Character</label>
                        <input type="text" placeholder="e.g., dinosaurs, princesses, superheroes" id="favorite-character">
                    </div>
                    <div class="form-group">
                        <label>Story Theme</label>
                        <select id="story-theme">
                            <option value="adventure">Adventure</option>
                            <option value="fantasy">Fantasy</option>
                            <option value="educational">Educational</option>
                            <option value="bedtime">Bedtime</option>
                        </select>
                    </div>
                    <button class="btn btn-primary" onclick="createStory()">
                        <span class="btn-icon">✨</span>Generate Story
                    </button>
                </div>
            </div>
        `;
    }
    
    getMyStoriesContent() {
        return `
            <div class="my-stories-container">
                <h1>My Stories</h1>
                <div class="stories-grid">
                    <div class="no-stories">
                        <p>No stories created yet.</p>
                        <button class="btn btn-primary" onclick="router.navigate('/create-story')">
                            <span class="btn-icon">✨</span>Create Your First Story
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
    
    getProfileContent() {
        return `
            <div class="profile-container">
                <h1>Profile Settings</h1>
                <div class="profile-form">
                    <div class="form-group">
                        <label>Full Name</label>
                        <input type="text" placeholder="Your full name" id="profile-name">
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="Your email" id="profile-email" readonly>
                    </div>
                    <button class="btn btn-primary" onclick="updateProfile()">
                        <span class="btn-icon">💾</span>Save Changes
                    </button>
                </div>
            </div>
        `;
    }
}

// Initialize router
let router;
