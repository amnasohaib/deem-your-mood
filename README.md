# 🎭 Emotion Detection App

A beautiful, interactive web application that detects and visualizes human emotions through AI-powered analysis. Built with React and featuring stunning gradient animations, this app provides an immersive experience for understanding emotional states through color and design.

## ✨ Features

### 🎨 Visual Experience
- **Dynamic Gradient Backgrounds** - Each emotion has its unique, beautiful gradient palette
- **Smooth Animations** - Fluid transitions between emotional states and pages
- **Glassmorphic UI** - Modern design with backdrop blur and transparency effects
- **Responsive Design** - Works seamlessly across desktop, tablet, and mobile devices

### 🧠 Emotion Detection
- **7 Emotions** - Joy, Sadness, Anger, Fear, Surprise, Disgust, and Neutral
- **Real-time Analysis** - Instant emotion detection
- **Interactive Input** - Text-based emotion analysis with Enter key processing

### 📱 Multi-Page Experience
- **Landing Page** - Main emotion detection interface
- **About Page** - Information about the designer/developer (me :)) with portfolio links
- **Contact Page** - Professional contact form with validation
- **Themes Page** - Comprehensive guide to all emotions, colors, and meanings

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/amnasohaib/deem-your-mood.git
   cd deem-your-mood
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your configuration:
   ```env
   NEXT_PUBLIC_API_URL=your_api_endpoint
   NEXT_PUBLIC_EMOTION_API_KEY=your_api_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎨 Color Palette & Emotions

| Emotion | Primary Colors | Description |
|---------|---------------|-------------|
| **Joy** | Pink & Rose | Warmth, happiness, and positive energy |
| **Sadness** | Blue & Cyan | Calm, melancholy, and introspection |
| **Anger** | Red & Coral | Intensity, passion, and strong feelings |
| **Fear** | Purple & Lavender | Caution, mystery, and protection |
| **Surprise** | Yellow & Gold | Wonder, excitement, and discovery |
| **Disgust** | Green & Mint | Rejection, boundaries, and avoidance |
| **Neutral** | Rainbow Spectrum | Balance, calm, and equilibrium |

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **Next.js** - Full-stack React framework with SSR capabilities
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Lucide React** - Beautiful, customizable icons

### Fonts & Typography
- **Playfair Display** - Elegant serif font for headings
- **Cinzel** - Modern monospace font for special text
- **Inter** - Clean sans-serif for body text

### Animations & Effects
- **CSS Transitions** - Smooth state changes and hover effects
- **Transform Animations** - Scale, translate, and rotate effects
- **Gradient Animations** - Dynamic background color transitions
- **Loading Spinners** - Custom animated loading states

## 🎯 Usage

### Basic Emotion Detection
1. Type your thoughts or feelings in the input field
2. Press **Enter** to process
3. Watch the beautiful loading animation
4. See your detected emotion with confidence score
5. Explore the color-coded emotional theme

### Modifying Colors
- Edit gradient definitions in `emotionGradients.js`
- Adjust Tailwind colors in component classes
- Update CSS custom properties for global theming

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**


## 🙏 Acknowledgments

- **Emotion Model from Hugging Face** - [https://huggingface.co/j-hartmann/emotion-english-distilroberta-base](https://huggingface.co/j-hartmann/emotion-english-distilroberta-base)

## 📧 Contact

**Amna Sohaib** - amnasohaib2003@gmail.com

---

**Live Demo**: [https://deem-your-mood.vercel.app/](https://deem-your-mood.vercel.app/)
