
# Vacation Gallery Project

Hey guys! I've worked on a responsive web gallery showcasing travel photos from various locations I've visited as a project for my ITN263-601 course. Via this project, I attempt to demonstrate some modern web development techniques including a responsive design, smooth animations, & interactive modals that is viewable on any device using Flexbox and media queries.

## Features

<img align="center" alt="gif" width="auto" height="auto" src="https://github.com/user-attachments/assets/9646b8e8-22fd-42f2-819d-d8c00cc85321" />

### Home Page

- **Welcome Section:** Personal introduction with photo of me
- **Call-to-Action:** Golden "Adventure Time!" button to navigate to gallery
- **Responsive Design:** Adapts to different screen sizes
- **Smooth Animations:** Fade-in effects and hover transitions

### Gallery Page

- **Interactive Image Grid:** 16 travel photos in a responsive 4x4 layout
- **Clickable Images:** Click any image to view it in a larger modal
- **Modal Lightbox:** Full-screen overlay with enlarged image viewing
- **Image Captions:** Descriptive labels for each location
- **Multiple Close Options:**
  - Click the "×" button
  - Click outside the image
  - Press the Backspace key

### Visual Design

- **Hover Effects:** Images scale and glow on hover
- **Smooth Animations:** Staggered fade-in effects for gallery images
- **Responsive Layout:** Adapts from 4 columns to 2 columns on smaller screens

## How to Use

### Getting Started

- **Open the Project:** Navigate to the project folder
- **Launch Home Page:** Open `index.html` in your web browser
- **Explore Gallery:** Click the "Adventure Time!" button to view the gallery

### Gallery Navigation

- **Browse Images:** Scroll through the 4x4 grid of travel photos
- **Larger View:** Click any image to open it in a modal lightbox
- **Close Modal:** Use any of the three methods to close a modal:
  - Click the "×" button in the top-right corner
  - Click anywhere outside the image
  - Press the Backspace key

## Project Structure

```text
Week2B/
├── index.html          # Home page with welcome section
├── gallery.html        # Gallery page with interactive 4x4 image grid
├── README.md           # Project documentation
├── css/
│   └── styles.css      # Responsive styling and animations
├── js/
│   └── modal.js        # Modal lightbox functionality
└── images/             # 19 travel photos (16 used in gallery)
    ├── Airplane.jpeg
    ├── Beach.jpeg
    ├── BottegaVeneta.jpeg
    └── ... (16 more images)
```

## Technical Implementation

### JavaScript Functionality

- **Modal System:** Lightbox functionality for larger image viewing
- **Event Listeners:** Click handlers for gallery images and modal controls
- **DOM Manipulation:** Dynamic content updates for modal display
- **Keyboard Support:** Backspace key for closing a modal

**Author:** Sa'Cairo Bonner
