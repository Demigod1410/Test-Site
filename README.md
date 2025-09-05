# <div align="center" size="48px"><img src="./src/app/favicon.ico" alt="713 Cybersecurity Logo" width="58"/> 713 Cybersecurity</div>
<div align="center">
<p>Leading provider of comprehensive cybersecurity solutions and SOC services</p>

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen.svg)](https://test-site-psi-blond.vercel.app/)
[![Next.js](https://img.shields.io/badge/built%20with-Next.js%2015-blue.svg)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38B2AC.svg)](https://tailwindcss.com/)
</div>


## 🌟 Overview

713 Cybersecurity is a leading cybersecurity solutions provider delivering impactful security experiences powered by 130+ years of combined industry expertise, qualitative research, and deep domain knowledge. We specialize in comprehensive SOC solutions, security operations excellence, and enterprise-wide cybersecurity frameworks.

**Our Mission:** Navigate each case through risk discovery, threat intelligence, and transparency to enable stronger cybersecurity resilience and digital safety in today's cyberworld.

**Our Vision:** Built on trust, delivery excellence, innovation, and commitment to deliver impactful cybersecurity experiences.

Visit our platform: [https://test-site-psi-blond.vercel.app/](https://test-site-psi-blond.vercel.app/)

## ✨ Key Features

- 🛡️ **SOC Solutions** - Complete Security Operations Center setup and management
- 🎯 **Risk Management** - Comprehensive risk assessment and remediation frameworks
- 🔍 **Security Audits** - Compliance audits (ISO27001, PCI DSS, SOC2, GDPR)
- 🤖 **SOAR Implementation** - Security Orchestration, Automation & Response
- 👥 **Expert Team** - 130+ years combined industry experience
- 🌓 **Modern Interface** - Beautiful dark/light theme with responsive design
- 🎠 **Interactive Carousel** - Dynamic SOC solutions showcase with autoplay and drag functionality
- 🎬 **Motion Animations** - Sophisticated Framer Motion animations throughout the site
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- 🧹 **Clean Design** - Professional card layouts without numbered overlays

## 🛠️ Technology Stack

### Core Technologies
- **Next.js 15** - React framework with App Router
- **TypeScript** - For type-safe code
- **Tailwind CSS 4** - For styling with Typography plugin
- **Vercel AI SDK** - For AI chat integration

### UI Components & Libraries
- **Shadcn UI** - Accessible UI components with clean design
- **Framer Motion** - Advanced animations and transitions with staggered reveals
- **TSParticles** - Interactive background particle effects
- **VanillaTilt** - Interactive tilt effects on cards
- **Custom Carousel** - Interactive carousel with drag, autoplay, and loop functionality
- **React Icons** - Comprehensive icon library for enhanced visual elements

### AI Integration
- **Google Gemini AI** - Powers the intelligent chat assistant
- **@ai-sdk/google** - Integration of the Gemini model
- **@ai-sdk/react** - React hooks for AI interaction

## 🚀 Recent Updates & Enhancements

### ✨ New Features
- **Interactive Carousel Component**: Dynamic showcase of SOC solutions with autoplay, drag functionality, and smooth transitions
- **Enhanced Animations**: Sophisticated Framer Motion animations with staggered reveals and 3D effects
- **Clean Design Improvements**: Removed numbered overlays from all card components for a professional appearance
- **Improved Icon Integration**: Updated carousel icons to match the consistent design system

### 🎨 UI/UX Improvements
- **Motion Animations**: Added section-level animations with progressive reveals
- **Card Design**: Streamlined card layouts across all components (Services, About Us, Why Choose Us, Core Team)
- **Carousel Experience**: Configurable autoplay delay, pause on hover, and loop functionality
- **Responsive Design**: Enhanced mobile and tablet experiences

### 🛠️ Technical Enhancements
- **React Hooks Compliance**: Fixed all React hooks rule violations for clean builds
- **Performance Optimization**: Improved build times and bundle optimization
- **Type Safety**: Enhanced TypeScript implementation across components
- **Build Process**: Streamlined development and production builds

## 🏢 Our Services

### 1. **Cyber Security Risk Management**
- Risk Management Framework Development
- Risk Assessment & Remediation Consulting
- Management & Technical Team Training

### 2. **Cyber Security Audits**
- Compliance Audits (ISO27001, PCI DSS, SOC2, GDPR)
- Vulnerability Assessment & Penetration Testing
- Cloud Security & Application Testing
- Supply Chain & Regulatory Compliance

### 3. **Security Operations Center**
- SOC Setup & Implementation
- Solution Mapping & Deployment
- Security Automation & Response (SOAR)

### 4. **Cyber Security Tools Consulting**
- Next-Gen Security Management Tools
- AI/ML-based Cyber Security Solutions
- Security Monitoring & Incident Response
- Cyber Defense Platform Integration

### 5. **Managed Security Services**
- Virtual CISO Services
- Managed SOC Operations
- Regulatory Compliance Management

## 🎠 SOC Solutions Carousel

The interactive carousel showcases our comprehensive SOC business challenges and solutions:

1. **Security Controls Alignment** - SOC monitoring integration
2. **Security Controls Mapping** - Risk assessment and infrastructure coverage
3. **Risk-based Monitoring** - Real-time security monitoring and remediation
4. **Solution Deployment** - Standardized security controls configuration
5. **Tooling Evaluation** - Security tool assessment and licensing
6. **Incident Management** - Corrective and preventive security actions
7. **Compliance Management** - Regulatory compliance (GDPR, FFIEC, HIPAA)
8. **SOAR Implementation** - Security orchestration and automated response

## 👥 Leadership Team

### Core Team Members
- **Mr. Varun Mallapur** - Chief Information Security Officer (20+ Years)
- **Mr. Praveen P Kadle** - Chief Financial Officer & Strategic Advisor (20+ Years)
- **Mr. Uday Gurkar** - Chief Governance & Compliance Officer (28+ Years)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- PNPM package manager
- Google Gemini AI API key (for chat functionality)

### Installation

```bash
# Clone the repository
git clone https://github.com/Demigod1410/Test-Site.git
cd Test-Site

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local
# Add your Google Gemini AI API key

# Run development server
pnpm dev
```

### Build for Production

```bash
# Create optimized production build
pnpm build

# Start production server
pnpm start
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx          # Main homepage
│   └── api/gemini/       # AI chat API endpoint
├── components/           # React components
│   ├── ui/              # Shadcn UI components
│   ├── Carousel.tsx     # Interactive carousel component
│   ├── hero-section.tsx # Landing section with stats
│   ├── about-us.tsx     # Company vision and mission
│   ├── services.tsx     # Service offerings
│   ├── why-choose-us.tsx # Value propositions
│   ├── whatwedo.tsx     # SOC solutions carousel
│   ├── core-team.tsx    # Leadership profiles
│   └── contact-form.tsx # Contact and footer
├── config/              # Configuration files
│   └── particles-config.ts # Particle effects config
└── lib/                 # Utilities and data
    ├── utils.ts         # Helper functions
    └── data.ts          # Static data
```

## 🎨 Design System

### Color Scheme
- **Primary**: Cybersecurity blue gradient
- **Background**: Dynamic dark/light themes
- **Cards**: Semi-transparent with backdrop blur
- **Text**: High contrast for accessibility

### Typography
- **Headings**: Geist font with gradient text effects
- **Body**: Clean, readable typography
- **Code**: Monospace for technical content

### Animations
- **Page Transitions**: Smooth fade and slide effects
- **Card Interactions**: Hover and tilt animations
- **Carousel**: Drag, autoplay, and transition animations
- **Staggered Reveals**: Progressive content loading

## 🌐 Deployment

The site is deployed on Vercel with automatic deployments from the main branch:
- **Production**: [https://test-site-psi-blond.vercel.app/](https://test-site-psi-blond.vercel.app/)
- **Preview**: Automatic preview deployments for pull requests

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**713 Cybersecurity**
- Website: [https://test-site-psi-blond.vercel.app/](https://test-site-psi-blond.vercel.app/)
- Repository: [https://github.com/Demigod1410/Test-Site](https://github.com/Demigod1410/Test-Site)

---

<div align="center">
<p><strong>Building stronger cybersecurity resilience through innovation and expertise</strong></p>
</div>

## 🎯 What We Do

Our comprehensive SOC solutions address key business challenges:

- **Security Controls Alignment** - Seamless alignment with SOC monitoring
- **Risk-Based Monitoring** - Custom rules and dashboards for effective security monitoring
- **Incident Management** - Expert handling of security incidents and remediation
- **Compliance Management** - GDPR, FFIEC, HIPAA compliance support
- **Security Automation** - SOAR implementation for automated threat response

## 👥 Leadership Team

### Mr. Varun Mallapur - Chief Information Security Officer
*20+ Years Experience*
- Former Global Internal Auditor at IBM India
- Expert in security policy implementation and SOC management

### Mr. Praveen P Kadle - Chief Financial Officer & Strategic Advisor
*20+ Years Leadership*
- Former Founding CFO of IBM-Tata joint venture
- Expert in corporate finance and strategic planning

### Mr. Uday Gurkar - Chief Governance & Compliance Officer
*28+ Years Experience*
- Fellow Member of ICAI (FCA) and Associate Member of ICSI (ACS)
- Expert in corporate governance and financial audits

## 📐 Architecture

713 Cybersecurity website follows a modern web architecture:

- **App Router** - Next.js app directory structure for optimal performance
- **Server Components** - Enhanced performance and SEO optimization
- **Client Components** - Interactive UI elements with smooth animations
- **Responsive Design** - Mobile-first approach using Tailwind CSS
- **TypeScript** - Type-safe development environment
- **Component-Based** - Modular and reusable UI components

## 🎨 Design System

### **7:13 Method**
Our structured approach harnesses 7 layers of security and its 13 principles, delivered by top industry leaders with strength, agility, and technical expertise.

### **Standards-Based Framework**
Methodological approach using ISO 27001, NIST, GDPR, SOC 2 frameworks to drive cybersecurity delivery excellence.

## 📝 Website Components

- **Hero Section** - Engaging landing with company vision and animated statistics
- **About Us** - Company vision, mission, and 7:13 methodology
- **What We Do** - Comprehensive SOC solutions and business challenges
- **Services** - Detailed cybersecurity service offerings
- **Why Choose Us** - Key differentiators and competitive advantages
- **Core Team** - Leadership profiles and expertise
- **Contact Form** - Professional contact information and inquiry form
- **Navigation** - Responsive navbar with theme toggle and smooth scrolling

## � Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Demigod1410/Test-Site.git
cd Test-Site

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Build for Production

```bash
# Build the application
pnpm build

# Start production server
pnpm start
```

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file with the following variables:

```env
# Google Gemini AI (for chat functionality)
GOOGLE_GENERATIVE_AI_API_KEY=your_api_key_here
```

### Customization
- **Theme**: Modify colors and styling in `tailwind.config.js`
- **Content**: Update company information in respective component files
- **Particles**: Customize background effects in `src/config/particles-config.ts`

## �📄 License

Copyright © 2025 713 Cyber Security Services Pvt Ltd. All rights reserved.

## 📞 Contact

**713 Cyber Security**
- **Email**: varun.mallapur@713cybersec.com
- **Phone**: +91 9902000979
- **Location**: Mangaluru, Karnataka, India
- **Website**: www.713cybersec.com

---

<p align="center">
  <a href="https://test-site-psi-blond.vercel.app/">Visit 713 Cybersecurity</a> •
  <a href="mailto:varun.mallapur@713cybersec.com">Contact Us</a> •
  <a href="https://www.713cybersec.com">Learn More</a>
</p>
