```markdown
# Capture Moments - Photography Portfolio Website

A responsive, multi-page photography portfolio website built with HTML5, CSS3, and JavaScript.

![Website Preview](https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop
- **Multi-page Navigation**: Smooth single-page application navigation
- **Interactive Elements**: 
  - Mobile hamburger menu
  - Form validation
  - Scroll animations
  - Hover effects
- **Modern UI/UX**: Clean, professional design with smooth transitions
- **Semantic HTML5**: Accessible and SEO-friendly structure

## 📁 Project Structure

```
photography-portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
├── images/             # Image assets directory
└── README.md          # Project documentation
```

## 🚀 Pages Included

1. **Home** - Landing page with hero section and featured work
2. **Gallery** - Photo gallery with hover effects
3. **About** - Photographer bio and information
4. **Services** - Photography service offerings
5. **Contact** - Contact form with validation

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: 
  - CSS Grid and Flexbox for layouts
  - CSS Variables for consistent theming
  - Media queries for responsiveness
  - CSS animations and transitions
- **JavaScript**:
  - DOM manipulation
  - Event handling
  - Form validation
  - Intersection Observer API
- **Font Awesome**: Icons
- **Google Fonts**: Typography

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🎨 Design Features

### Color Scheme
- Primary: `#2c3e50` (Dark Blue)
- Secondary: `#e74c3c` (Red)
- Accent: `#3498db` (Blue)
- Light: `#ecf0f1` (Light Gray)
- Text: `#333` (Dark Gray)

### Typography
- Primary Font: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- Clean, readable typography scale

### Interactive Elements
- Smooth hover transitions
- Mobile-friendly navigation
- Animated gallery items
- Form validation feedback

## ⚡ JavaScript Functionality

### Core Features
- **Navigation System**: Smooth page transitions
- **Mobile Menu**: Hamburger menu toggle
- **Form Validation**: Contact form with real-time validation
- **Scroll Animations**: Gallery items animate on scroll
- **Active State Management**: Dynamic navigation highlighting

### Key Functions
- `toggleMobileMenu()` - Handles mobile navigation
- `switchPage()` - Manages page transitions
- `validateForm()` - Contact form validation
- `initScrollAnimations()` - Gallery item animations

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local server for development (optional)

### Installation
1. Clone or download the project files
2. Ensure all files are in the same directory:
   - `index.html`
   - `styles.css`
   - `script.js`

3. Open `index.html` in your web browser

### Development
For local development, you can use:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

## 📝 Customization

### Adding New Pages
1. Add new section in HTML with `page` class
2. Update navigation in header
3. Add corresponding JavaScript handling

### Modifying Colors
Update CSS variables in `:root` section:
```css
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
    /* ... */
}
```

### Adding Images
1. Place images in `images/` directory
2. Update image paths in HTML
3. Ensure proper aspect ratios

## 🔧 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📞 Contact Form

The contact form includes:
- Name validation (required)
- Email validation (format check)
- Service selection (required)
- Message validation (required)

**Note**: This is a frontend implementation. For production use, connect to a backend service.

## 🎯 Performance Features

- Optimized images from Unsplash CDN
- Minimal external dependencies
- Efficient CSS with variables and reuse
- Lazy loading ready structure

## 📈 SEO Features

- Semantic HTML5 markup
- Proper heading hierarchy
- Alt text for images
- Mobile-responsive design
- Fast loading times

## 🐛 Known Issues

- Form submissions are frontend-only (requires backend integration)
- Images are loaded from external CDN (replace with local for production)

## 🤝 Contributing

1. Fork the project
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Capture Moments Photography**
- Website: [Capture Moments](#)
- Email: contact@capturemoments.com


The README is structured to be helpful for both end-users who want to understand the website and developers who might want to modify or extend the projec
