# Storio - Magical Bedtime Stories for Kids

A beautiful, responsive web application for creating personalized bedtime stories with AI. Features family voice narration and a calming, child-friendly design.

## Features

- **Personalized Stories**: AI generates unique stories featuring your child's name and favorite characters
- **Family Voices**: Record and use voices of family members for narration
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **PWA Ready**: Can be installed as a progressive web app
- **Authentication**: Secure user authentication with Supabase
- **Dashboard**: Personalized dashboard for authenticated users
- **Authentication Persistence**: Users stay logged in across page refreshes

## Authentication Features

### Login Persistence
- Users remain logged in when they refresh the page
- Dashboard automatically loads for authenticated users
- Secure session management with Supabase

### Dashboard
- Separate dashboard page (`dashboard.html`) for authenticated users
- Personalized welcome message with user's name
- Quick access to story creation features
- Sign out functionality
- Responsive design that works on all devices

### Routing System
- Landing page (`index.html`) for unauthenticated users
- Dashboard page (`dashboard.html`) for authenticated users
- Automatic redirects based on authentication state
- Page refresh maintains current page location

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Storio_FreshDesign
   ```

2. **Set up Supabase**
   - Create a Supabase project
   - Update `supabase-config.js` with your project credentials
   - Enable authentication in your Supabase dashboard

3. **Run the application**
   ```bash
   # Using Python (if available)
   python -m http.server 8000
   
   # Or using Node.js
   npx serve .
   
   # Or using any other local server
   ```

4. **Open in browser**
   - Navigate to `http://localhost:8000`
   - Sign up or sign in to access the dashboard

## Testing Authentication Persistence

1. **Sign in to the application**
   - Go to `http://localhost:8000` (landing page)
   - Click "Sign In" and enter your credentials
   - You should be redirected to the dashboard with your name

2. **Test page refresh**
   - Refresh the dashboard page (F5 or Ctrl+R)
   - You should remain on the dashboard
   - Your name should still be displayed

3. **Test sign out**
   - Click the "Sign Out" button on the dashboard
   - You should be redirected to the landing page
   - Refresh the landing page to confirm you're still signed out

4. **Test routing**
   - Try accessing `http://localhost:8000/dashboard.html` directly
   - If authenticated: you'll see the dashboard
   - If not authenticated: you'll be redirected to the landing page

## File Structure

```
Storio_FreshDesign/
├── index.html              # Landing page for unauthenticated users
├── dashboard.html          # Dashboard page for authenticated users
├── app.js                  # Main JavaScript with authentication logic
├── dashboard.js            # Dashboard-specific JavaScript
├── styles.css              # All CSS styles
├── supabase-config.js      # Supabase configuration
├── manifest.json           # PWA manifest
├── sw.js                  # Service worker
├── _redirects             # Netlify redirects
├── test-authentication.html # Authentication testing page
└── test-routing.html      # Routing testing page
```

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Authentication**: Supabase Auth
- **Styling**: Custom CSS with CSS Grid and Flexbox
- **Icons**: Emoji icons for simplicity
- **Fonts**: Google Fonts (Fredoka, Quicksand)

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please contact us through the app's contact form or create an issue in this repository.
