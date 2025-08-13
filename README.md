# 🌟 Storio - Magical Bedtime Stories

A Progressive Web App (PWA) that creates hyper-personalized, AI-generated bedtime stories narrated by family voices.

## ✨ Features

### 🎨 Design
- **Warm Orange Color Palette**: Vibrant oranges, corals, and ambers with white backgrounds inspired by the [Dribbble bedtime stories design](https://dribbble.com/shots/25936041--Bedtime-Stories-App-Fun-Magical-Storytime-for-Kids?utm_source=openai)
- **Cartoon Animals & Characters**: Interactive emoji-based animals (bunny, bear, owl, fox) with smooth animations
- **Magical Visual Elements**: Floating moon, twinkling stars, drifting clouds, and animated story scenes
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices

### 🔐 Authentication
- **Supabase Integration**: Secure user authentication with email/password
- **User Registration**: Sign up with email verification
- **Password Reset**: Email-based password recovery
- **Session Management**: Automatic login state management

### 📱 PWA Features
- **Installable**: Add to home screen on mobile and desktop
- **Offline Support**: Service worker caches content for offline use
- **Push Notifications**: Background sync and notification support
- **App-like Experience**: Full-screen mode and native app feel

### 🎭 Interactive Elements
- **Animated Characters**: Floating animals with hover effects
- **Smooth Scrolling**: Parallax effects and smooth navigation
- **Testimonial Carousel**: Auto-scrolling testimonials with pause on hover
- **FAQ Accordion**: Expandable FAQ sections with smooth animations
- **Modal Popups**: Authentication and support popups with backdrop blur

## 🚀 Getting Started

### Prerequisites
- Modern web browser
- Supabase account (for authentication)
- Local development server (optional)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ThalmanThilak/Storio_FreshDesign.git
   cd Storio_FreshDesign
   ```

2. **Set up Supabase**
   - Create a new project at [supabase.com](https://supabase.com)
   - Get your project URL and anon key from Settings > API
   - Update `supabase-config.js` with your credentials:
   ```javascript
   const SUPABASE_URL = 'your-project-url';
   const SUPABASE_ANON_KEY = 'your-anon-key';
   ```

3. **Configure Authentication**
   - Go to Authentication > Providers in Supabase dashboard
   - Enable Email provider
   - Configure email templates (optional)
   - Add your site URL to allowed origins

4. **Run locally**
   ```bash
   # Using Python (if installed)
   python -m http.server 8000
   
   # Using Node.js (if installed)
   npx serve .
   
   # Or simply open index.html in a browser
   ```

5. **Access the app**
   - Open `http://localhost:8000` in your browser
   - Or open `index.html` directly

## 📁 Project Structure

```
Storio_FreshDesign/
├── index.html              # Main HTML file
├── styles.css              # All CSS styles
├── app.js                  # JavaScript functionality
├── supabase-config.js      # Supabase configuration
├── manifest.json           # PWA manifest
├── sw.js                   # Service worker
├── .gitignore             # Git ignore rules
└── README.md              # This file
```

## 🎨 Design System

### Color Palette
```css
/* Primary Colors */
--primary-orange: #FF6B35
--primary-light: #FF8A65
--secondary-coral: #FF5252
--secondary-light: #FF7B7B

/* Accent Colors */
--accent-amber: #FFB300
--accent-light: #FFC107
--warm-peach: #FFAB91
--warm-salmon: #FF8A80

/* Neutral Colors */
--white: #FFFFFF
--off-white: #FAFAFA
--light-gray: #F5F5F5
--dark: #212121
```

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Responsive**: Scales appropriately on all devices

## 🔧 Customization

### Adding New Features
1. **New Sections**: Add HTML structure in `index.html`
2. **Styling**: Add CSS in `styles.css`
3. **Functionality**: Add JavaScript in `app.js`

### Modifying Colors
Update the CSS custom properties in `:root` section of `styles.css`

### Adding Authentication Features
Extend the `auth` object in `app.js` with new Supabase functions

## 📱 PWA Installation

### Desktop
1. Open the website in Chrome/Edge
2. Click the install icon in the address bar
3. Follow the prompts to install

### Mobile
1. Open the website in Safari/Chrome
2. Tap the share button
3. Select "Add to Home Screen"

## 🌐 Browser Support

- ✅ Chrome 67+
- ✅ Firefox 67+
- ✅ Safari 11.1+
- ✅ Edge 79+
- ✅ Mobile browsers

## 🔒 Security

- **HTTPS Required**: PWA features require secure connection
- **Supabase Security**: Industry-standard authentication
- **No Sensitive Data**: Credentials stored securely in Supabase
- **CORS Protection**: Proper origin validation

## 📈 Performance

- **Lazy Loading**: Images and content load on demand
- **Service Worker**: Efficient caching strategy
- **Optimized Assets**: Compressed images and minified code
- **Fast Loading**: Optimized for quick initial load

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Credits

- **Design Inspiration**: [Dribbble Bedtime Stories App](https://dribbble.com/shots/25936041--Bedtime-Stories-App-Fun-Magical-Storytime-for-Kids?utm_source=openai)
- **Icons**: Emoji characters and custom CSS
- **Fonts**: Google Fonts (Inter)
- **Authentication**: Supabase

## 🔮 Future Enhancements

- [ ] Voice recording feature
- [ ] AI story generation
- [ ] Multiple language support
- [ ] Advanced animations
- [ ] Social sharing
- [ ] Story library
- [ ] Parent dashboard
- [ ] Child profiles
- [ ] Story templates
- [ ] Export stories

---

**Made with ❤️ for magical bedtime moments**
