// Dashboard JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Check authentication on page load
    checkAuthentication();
    
    // Set up sign out button
    document.getElementById('sign-out-btn').addEventListener('click', signOut);
    
    // Set up logo click to go back to landing page
    document.querySelector('.logo').addEventListener('click', function() {
        window.location.href = 'index.html';
    });
    
    // Initialize story cards
    setTimeout(() => {
        initializeStoryCards();
    }, 1000);
    
    // Add hover events to pause/resume autoplay
    const storiesContainer = document.querySelector('.animated-stories-container');
    if (storiesContainer) {
        storiesContainer.addEventListener('mouseenter', pauseAutoplay);
        storiesContainer.addEventListener('mouseleave', resumeAutoplay);
    }
});

// Check if user is authenticated
async function checkAuthentication() {
    try {
        const { data: { user }, error } = await window.supabaseClient.auth.getUser();
        
        if (error) {
            console.error('Error checking authentication:', error);
            redirectToLanding();
            return;
        }
        
        if (!user) {
            console.log('No user found, redirecting to landing page');
            redirectToLanding();
            return;
        }
        
        // User is authenticated, update dashboard
        console.log('User authenticated:', user.email);
        updateDashboard(user);
        
    } catch (error) {
        console.error('Error during authentication check:', error);
        redirectToLanding();
    }
}

// Update dashboard with user information
function updateDashboard(user) {
    const userName = user.user_metadata?.full_name || user.email || 'User';
    const userWelcome = document.getElementById('user-welcome');
    const dashboardTitle = document.getElementById('dashboard-title');
    
    userWelcome.textContent = `Welcome, ${userName}!`;
    dashboardTitle.textContent = `Welcome, ${userName}`;
}

// Sign out function
async function signOut() {
    try {
        const { error } = await window.supabaseClient.auth.signOut();
        
        if (error) {
            showNotification('Error signing out: ' + error.message, 'error');
            return;
        }
        
        showNotification('Successfully signed out!', 'success');
        redirectToLanding();
        
    } catch (error) {
        console.error('Error signing out:', error);
        showNotification('Error signing out', 'error');
    }
}

// Redirect to landing page
function redirectToLanding() {
    window.location.href = 'index.html';
}

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

// Support functions
function showPrivacy() {
    showNotification('Privacy Policy - Coming Soon', 'info');
}

function showTerms() {
    showNotification('Terms of Service - Coming Soon', 'info');
}

function showContact() {
    showNotification('Contact Us - Coming Soon', 'info');
}

// Animated Story Cards Functionality
let currentStoryIndex = 0;
const totalStories = 5;
let autoplayInterval;

// Initialize story cards
function initializeStoryCards() {
    updateStoryDisplay();
    startAutoplay();
    
    // Add click handlers for indicators
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            goToStory(index);
        });
    });
}

// Update story display
function updateStoryDisplay() {
    const storyCards = document.querySelectorAll('.story-card');
    const indicators = document.querySelectorAll('.indicator');
    
    // Hide all story cards
    storyCards.forEach(card => {
        card.classList.remove('active');
    });
    
    // Remove active class from all indicators
    indicators.forEach(indicator => {
        indicator.classList.remove('active');
    });
    
    // Show current story card
    storyCards[currentStoryIndex].classList.add('active');
    indicators[currentStoryIndex].classList.add('active');
}

// Next story
function nextStory() {
    currentStoryIndex = (currentStoryIndex + 1) % totalStories;
    updateStoryDisplay();
    resetAutoplay();
}

// Previous story
function previousStory() {
    currentStoryIndex = (currentStoryIndex - 1 + totalStories) % totalStories;
    updateStoryDisplay();
    resetAutoplay();
}

// Go to specific story
function goToStory(index) {
    currentStoryIndex = index;
    updateStoryDisplay();
    resetAutoplay();
}

// Start autoplay
function startAutoplay() {
    autoplayInterval = setInterval(() => {
        nextStory();
    }, 5000); // Change story every 5 seconds
}

// Reset autoplay
function resetAutoplay() {
    clearInterval(autoplayInterval);
    startAutoplay();
}

// Pause autoplay on hover
function pauseAutoplay() {
    clearInterval(autoplayInterval);
}

// Resume autoplay when mouse leaves
function resumeAutoplay() {
    startAutoplay();
}

// Listen to authentication state changes
window.supabaseClient.auth.onAuthStateChange((event, session) => {
    console.log('Auth state changed:', event, session);
    
    if (event === 'SIGNED_OUT') {
        redirectToLanding();
    }
});


