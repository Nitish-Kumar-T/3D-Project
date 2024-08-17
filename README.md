# 3D Rotating Dodecahedron

This project demonstrates a 3D rotating dodecahedron using the Three.js library. The dodecahedron is textured with an Earth map and rendered on an HTML canvas. The scene includes basic lighting and is fully responsive to window resizing.

## Features

- **3D Dodecahedron**: A 12-faced geometric shape (dodecahedron) is rendered with a texture map.
- **Texture Mapping**: The dodecahedron is wrapped with an Earth texture.
- **Rotation Animation**: The dodecahedron rotates continuously along the X and Y axes.
- **Responsive Design**: The canvas and 3D rendering adjust automatically when the browser window is resized.
- **Basic Lighting**: Ambient and point lighting are used to illuminate the dodecahedron.

## Live Demo

Check out the live demo of the project [here](https://nitish-kumar-t.github.io/3D-Project/).
![Screenshot from 2024-07-27 20-42-26](https://github.com/user-attachments/assets/a24eb6ed-7cd1-4021-8f25-629210a93be6)
[Screencast from 2024-08-17 07-40-24.webm](https://github.com/user-attachments/assets/13991e15-8d80-4c77-819d-96d2752de722)

## Getting Started

### Prerequisites

To view and interact with the project, you need a modern web browser that supports WebGL.

### Installation

1. **Download or Clone the Repository:**
    ```bash
    git clone https://github.com/yourusername/3d-rotating-dodecahedron.git
    ```

2. **Open the Project:**
   - Open the `index.html` file in your preferred web browser.

### Files

- **index.html**: The main HTML file that contains the structure of the page and links to the necessary JavaScript and CSS files.
- **styles.css**: Contains the CSS styles for the page, including the canvas element and the background color.
- **script.js**: Contains the JavaScript code that creates the 3D scene, adds the dodecahedron, and handles the animation and responsiveness.

### Usage

Simply open the `index.html` file in a web browser. You will see a 3D rotating dodecahedron textured with an Earth map. The dodecahedron will rotate continuously, and the view will adjust if you resize your browser window.

## Customization

### Change the Texture

To use a different texture on the dodecahedron:

1. Replace the URL in the following line in `script.js`:
    ```javascript
    const texture = textureLoader.load('https://three.miniprogramming.com/images/earthmap1k.jpg');
    ```
2. Use the URL of your desired texture image.

### Adjust Rotation Speed

To change the speed of rotation, modify the rotation increments in the `animate()` function in `script.js`:
```javascript
dodecahedron.rotation.y += 0.02;  
dodecahedron.rotation.x += 0.02;
