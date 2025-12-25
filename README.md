# **ITVE – Institute of Technical and Vocational Education**
## Project Overview

This project is a modern, responsive redesign of the Institutes of Technical & Vocational Education (ITVE) landing website.
The goal of this project was to create a professional, visually engaging, and user-friendly landing experience that clearly communicates:

###What ITVE is
-The programs it offers
-Why students should choose ITVE
-Clear calls to action (Apply / Explore Courses)
-The design emphasizes clarity, hierarchy, and smooth user interaction, inspired by modern education and SaaS landing pages.

## Live Preview

Live Site: 
GitHub Repository: 

## Tech Stack Used

-HTML5 – Structure and semantic layout
-CSS3 – Custom styling, gradients, animations, and responsive layout
-Bootstrap 5 – Grid system and basic components
-JavaScript (Vanilla JS) 
-Scroll-based pagination
-Dynamic testimonial rendering
-UI interaction and animation control
-Font Awesome – Icons
-Google Fonts (Roboto Slab) – Typography

## Responsiveness

### The website is fully responsive and optimized for:
-Mobile phones
-Tablets
-Laptops & desktops
Bootstrap’s grid system and custom media queries ensure a smooth experience across all screen sizes.

## Pagination Implementation
The website includes section-based scroll pagination using interactive navigation dots on the right side of the screen.

**How it works**

Each dot represents a section of the landing page:
-Hero
-About
-Courses
-Why ITVE
-Testimonials
-Contact

**When a user:**

-Clicks a dot → The page scrolls smoothly to that section
-Scrolls the page → The active dot updates automatically

**This is implemented using:**

scrollIntoView() for smooth scrolling
window.scrollY and section offsets to detect the active section
CSS transitions for hover labels and active states
This creates a modern, app-like navigation experience without page reloads.

## Key UI & UX Design Decisions
1. Hero Section
Large typography and gradient background for strong first impression
Animated entrance for heading, text, buttons, and stats
Clear call-to-action buttons (Explore Courses & Apply Now)

2. Layout Strategy
Clean section spacing and consistent headings
Visual hierarchy using font sizes, colors, and whitespace
Cards for courses, features, and testimonials for readability

3. Color System
A consistent brand palette is used:
Blue → Trust & professionalism
Sea green → Growth & education
Orange → Calls to action and highlights
CSS variables ensure easy theme updates.

4. Dynamic Content
Testimonials are rendered dynamically using JavaScript instead of static HTML.
This makes the project:
-Scalable
-API-ready
-Easier to maintain
-The same approach can later be applied to courses and filters.

## How to Run Locally

1. Clone the repository

```bash
git clone https://github.com/your-username/itve-frontend.git
```

2. Open the project folder

```bash
cd itve-frontend
```

3. Open index.html in a browser
or
Use Live Server in VS Code for best experience

## Folder Structure

/css

   styles.css
   
/js

   script.js
   
/images

   user1.jpeg
   
   user2.jpeg
   
   logo.jpg
   
index.html
README.md

 ### Declaration

I confirm that this project is entirely my own work.
All design and technical decisions were made intentionally and can be fully explained.
