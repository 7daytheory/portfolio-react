### Setting up React project with vite instead of create-react-app 
<code>npm create vite@latest ./ -- --template react</code>

### Other Dependancies
<code>npm install -D tailwindcss</code>
Once installed, you can initialized it using :
<code>npx tailwindcss init</code>

Legacy Peer Deps
<code>npm install --legacy-peer-deps</code>
List of other dependancies that will need to be included at the end of this
<code>@react-three/fiber @react-three/drei maath react-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom</code>

## React Motion
Animation library for React that is used in this project for scrolling animations
https://github.com/chenglou/react-motion

## React Three Fiber
This was used for the 3D effects on the website. You can build your scene declaratively with re-usable, self-contained components that react to state, are readily interactive and can participate in React's ecosystem.
https://docs.pmnd.rs/react-three-fiber/getting-started

### React Three Fiber Lighting overview
Similarly when you make a 3D model on video, you need to define a light source, as well as a camera angle. 
https://docs.pmnd.rs/react-three-fiber/getting-started/your-first-scene#adding-lights

## Higher Order Functions
A higher-order component is a function that takes in a component and returns a new component. Using code, we can rewrite the above statement like so: const newComponent = higherFunction(WrappedComponent);
Currently, I'm using higher order functions to pass in Components and them get the same animations/styling done to them.

