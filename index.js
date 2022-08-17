// Write your code in this file!
const currentUser = 'Grace Hopper'


// const welcomeMessage = 'Welcome to Flatbook, '

 
// const welcomeMessage = "Welcome to Flatbook, currentUser";
// const welcomeMessage = "Welcome to Flatbook, Grace Hopper!";

const welcomeMessage = "Welcome to Flatbook, {Grace Hopper}!"

const excitedWelcomeMessage = welcomeMessage.toLocaleUpperCase();

// const shortGreeting = `Welcome, {currentUser..slice (0, 1)}!`;
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;
