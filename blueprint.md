
# Lotto Number Generator

## Overview

This project is a simple web application that generates random lottery numbers. The application will display 6 main numbers and 1 bonus number.

## Features

*   Generates 6 unique random numbers from 1 to 45.
*   Generates 1 bonus number.
*   Displays the numbers in a visually appealing way.
*   Allows the user to generate new numbers with a button click.
*   **Dark Mode / Light Mode support:** Toggle between themes with preference persistence.
*   **Partnership Inquiry Form:** A contact form integrated with Formspree for business inquiries.

## File Structure

*   `index.html`: The main HTML file with theme toggle UI and contact form.
*   `style.css`: The CSS file using CSS variables for theming and form styling.
*   `main.js`: The JavaScript file for the application logic and theme switching.

## Plan

1.  **Create the HTML structure:**
    *   Set up the main container for the application.
    *   Add a title.
    *   Add a container for the lottery numbers.
    *   Add a button to generate new numbers.
    *   Add a theme toggle button.
    *   Add a contact form with Name, Email, and Message fields targeting Formspree.
2.  **Style the application:**
    *   Create a visually appealing layout.
    *   Style the lottery numbers to look like lottery balls.
    *   Add hover effects and animations.
    *   Implement CSS variables for background colors, text colors, and shadows.
    *   Define a `[data-theme="dark"]` selector for the dark mode palette.
    *   Style the contact form to be clean and responsive.
3.  **Implement the JavaScript logic:**
    *   Create a function to generate unique random numbers.
    *   Add an event listener to the button to call the generation function.
    *   Display the generated numbers on the screen.
    *   Implement theme switching logic using `localStorage` to remember user preference.

