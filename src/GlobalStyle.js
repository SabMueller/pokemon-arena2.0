import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`


:root {
    --red: #b71c1c;
    --white: #f1e8e8;
    --yellow: #fdc33c;
    --blue: #35b5c2;
    --orange: #ff7861;
    --light-grey: #e5eff9;
    --color-line: #262864;
    --border-light: hsl(210, 15%, 89%);
    --border-dark: hsl(213, 19%, 55%); 
}

*, 
*::before, 
*::after {
    box-sizing: border-box;
}

body, 
h1, 
h2, 
h3 {
    margin: 0;
}
`;
