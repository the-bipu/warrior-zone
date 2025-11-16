# Warrior Zone 🎯

A full-stack web application built with SvelteKit where users can share their worst day experiences, confessions, and stories with the community. Warrior Zone provides a safe and supportive platform for authentic expression and community engagement.

## 📖 About the Project

Warrior Zone is a social platform designed to help people share their experiences and connect with others who may be going through similar situations. Built entirely with Svelte and SvelteKit, it combines a modern frontend with a powerful backend in a single cohesive framework.

### Key Features

- 🏠 **Home Feed** - Browse latest confessions and experiences from the community
- 📖 **About** - Learn about the Warrior Zone mission and community values
- 💭 **Confession Page** - View individual confessions with detailed interactions
- 📝 **Confess** - Share your own story anonymously or publicly
- 🔍 **Explore** - Discover trending content and popular experiences
- 📧 **Contact** - Reach out to the Warrior Zone team
- ❤️ **Like System** - Show support and empathy for posts you relate to
- 🔐 **Backend API** - Built-in SvelteKit server routes for data management
- 📱 **Responsive Design** - Seamless experience across all devices

## 🛠️ Tech Stack

### Frontend
- ⚡ **SvelteKit** - Fast, modern framework for building web applications
- 🎨 **Svelte** - Reactive component framework
- 🎯 **TypeScript** - Type-safe development
- 📱 **Responsive Design** - Mobile-first approach

### Backend
- 🚀 **SvelteKit Server Routes** - Built-in backend functionality
- 🗄️ **Database Integration** - Data persistence (specify your DB choice)
- 🔐 **Authentication** - Secure user management (if implemented)
- 📡 **API Routes** - RESTful endpoints for data operations

### Development Tools
- 🔧 **Vite** - Lightning-fast build tool
- 📦 **npm/pnpm/yarn** - Package management
- 🎯 **ESLint** - Code quality and consistency
- ✨ **Prettier** - Code formatting

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm**, **pnpm**, or **yarn** package manager
- **Git** for version control

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/the-bipu/warrior-zone.git
cd warrior-zone
```

### 2. Install Dependencies

```bash
npm install
# or
pnpm install
# or
yarn install
```

### 3. Environment Setup

Create a `.env` file in the root directory:

```env
# Database Configuration
DATABASE_URL=your_database_url_here

# API Keys (if needed)
API_SECRET=your_secret_key_here

# Application Settings
PUBLIC_APP_URL=http://localhost:5173
```

### 4. Start Development Server

```bash
npm run dev
# or
npm run dev -- --open
```

The application will be available at `http://localhost:5173`

## 📁 Project Structure

```
warrior-zone/
├── src/
│   ├── routes/                 # SvelteKit routes (pages)
│   │   ├── +page.svelte       # Home page
│   │   ├── about/             # About page
│   │   │   └── +page.svelte
│   │   ├── confession/        # Individual confession view
│   │   │   └── [id]/
│   │   │       └── +page.svelte
│   │   ├── confess/           # Create confession page
│   │   │   └── +page.svelte
│   │   ├── explore/           # Explore content page
│   │   │   └── +page.svelte
│   │   ├── contact/           # Contact page
│   │   │   └── +page.svelte
│   │   └── api/               # Backend API routes
│   │       ├── confessions/   # Confession endpoints
│   │       ├── likes/         # Like system endpoints
│   │       └── users/         # User management endpoints
│   ├── lib/                   # Shared library code
│   │   ├── components/        # Reusable Svelte components
│   │   ├── stores/            # Svelte stores for state management
│   │   ├── utils/             # Utility functions
│   │   └── types/             # TypeScript type definitions
│   ├── app.html               # HTML template
│   └── app.css                # Global styles
├── static/                    # Static assets (images, fonts, etc.)
├── tests/                     # Test files
├── svelte.config.js           # SvelteKit configuration
├── vite.config.js             # Vite configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies and scripts
```

## 🎨 Pages Overview

### Home (`/`)
The main landing page displaying a feed of recent confessions and experiences from the community. Users can browse, filter, and interact with posts.

### About (`/about`)
Information about Warrior Zone, its mission to provide a supportive community, guidelines for respectful interaction, and the story behind the platform.

### Confession (`/confession/[id]`)
Detailed view of individual confessions with full content, author information (if not anonymous), likes count, and engagement options.

### Confess (`/confess`)
A form page where users can submit their own experiences and stories. Options to post anonymously or with their profile, add tags, and categorize their confession.

### Explore (`/explore`)
Discovery page featuring trending confessions, popular tags, categories, and curated content to help users find relevant experiences.

### Contact (`/contact`)
Contact form for users to reach out to the Warrior Zone team for support, feedback, partnerships, or general inquiries.

## 🔌 API Routes

The backend is built using SvelteKit's server routes located in `src/routes/api/`:

### Confessions
- `GET /api/confessions` - Fetch all confessions
- `GET /api/confessions/[id]` - Get specific confession
- `POST /api/confessions` - Create new confession
- `PUT /api/confessions/[id]` - Update confession
- `DELETE /api/confessions/[id]` - Delete confession

### Likes
- `POST /api/likes/[id]` - Like a confession
- `DELETE /api/likes/[id]` - Unlike a confession
- `GET /api/likes/[id]` - Get like count

### Users (if implemented)
- `POST /api/users/register` - Register new user
- `POST /api/users/login` - User authentication
- `GET /api/users/profile` - Get user profile

## 🔧 Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run dev -- --open    # Start dev server and open browser

# Building
npm run build            # Build for production

# Preview
npm run preview          # Preview production build

# Testing
npm run test             # Run tests
npm run test:watch       # Run tests in watch mode

# Testing
npm run test             # Run tests
npm run test:watch       # Run tests in watch mode

# Linting & Formatting
npm run lint             # Run ESLint
npm run format           # Format code with Prettier

# Type Checking
npm run check            # Check TypeScript types
npm run check:watch      # Watch mode for type checking
```



## 🎨 Styling

The project uses [CSS/Tailwind/your styling solution]. Styles are organized as:

- **Global styles**: `src/app.css`
- **Component styles**: Scoped within `.svelte` components
- **Utility classes**: [If using Tailwind or similar]



## 📱 Responsive Design

Warrior Zone is fully responsive and optimized for:
- 📱 Mobile devices (320px and up)
- 📲 Tablets (768px and up)
- 💻 Desktops (1024px and up)
- 🖥️ Large screens (1440px and up)



## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Using Adapters

SvelteKit requires an adapter for deployment. Common options:

```bash
# For Node.js servers
npm install -D @sveltejs/adapter-node

# For static sites
npm install -D @sveltejs/adapter-static

# For Vercel
npm install -D @sveltejs/adapter-vercel
```

Update `svelte.config.js` with your chosen adapter.

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create your feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Contribution Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR

## 📝 Code Quality

This project uses ESLint and Prettier for code quality:

```bash
# Check code style
npm run lint

# Auto-fix issues
npm run lint:fix

# Format code
npm run format
```

## 🐛 Troubleshooting

### Common Issues

**Port already in use:**
```bash
# Kill process on port 5173
kill -9 $(lsof -ti:5173)
```

**Module not found:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Build errors:**
```bash
# Clear SvelteKit cache
rm -rf .svelte-kit
npm run build
```

## 🔒 Security

- Never commit sensitive information (API keys, passwords)
- Use environment variables for configuration
- Keep dependencies updated
- Follow security best practices

To report security vulnerabilities, please email: security@warriorzone.com

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **SvelteKit Team** - For the amazing framework
- **Contributors** - Thank you to all who have contributed
- **Community** - For making Warrior Zone a supportive space

## 📞 Support & Contact

- **Issues**: [GitHub Issues](https://github.com/the-bipu/warrior-zone/issues)
- **Discussions**: [GitHub Discussions](https://github.com/the-bipu/warrior-zone/discussions)
- **Email**: support@warriorzone.com

## 🔗 Related Projects

- **Warrior Zone Mobile** - React Native mobile application ([Repository](https://github.com/the-bipu/warrior-zone-mobile))





---

**Built with ❤️ using SvelteKit**

Share your story. Connect with others. You're not alone. 💪

---

*For more information about SvelteKit, visit [kit.svelte.dev](https://kit.svelte.dev/)*
