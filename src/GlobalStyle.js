import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`


:root {
    --red: #b71c1c;
    --red-dark: #751212;
    --white: #f1e8e8;
    --yellow: #fdc33c;
    --yellow-background: #c7a008;
    --blue: #3c5aa6;
    --orange: #ff7861;
    --light-grey: #e5eff9;
    --dark-blue: #262864;
    --border-light: hsl(210, 15%, 89%);
    --border-dark: hsl(213, 19%, 55%); 
}

*, 
*::before, 
*::after {
    box-sizing: border-box;
}

h1 {
    @import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap');
    font-family: 'Bangers', cursive;
}
body, 
h1, 
h2, 
h3 {
    margin: 0;
}

body {

background-image: url('https://cdnb.artstation.com/p/assets/images/images/011/187/101/large/shen-yh-06052.jpg?1528285487');
background-repeat: no-repeat; 
background-attachment: fixed; 
font-family: 'Roboto', sans-serif;
}
`;
