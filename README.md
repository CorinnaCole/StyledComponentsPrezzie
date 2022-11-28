<h1>Styled Components</h1>

Styled components are a great way to create clean, organized CSS styling in your React project. 
Begin by installing styled components: https://www.npmjs.com/package/styled-components // npm i styled-components

At the head of your React component, make sure to import styled components: import styled from 'styled-components';

The basic syntax is to define a component and set it equal to styled. and your chosen html element, followed by backticks that encompass all the CSS styling that you would like. Ex:
const Box = styled.div`
  color: green; 
`

While you can define your styled components at the head of any jsx/js React file, it may be cleaner and more organized to store them in another file (or series of other files) that follow a clarifying naming convention, such as App.styled, and then import them into the appropriate component file. 

Styled components automatically create an unique classname that prevents accidental overlap or mispellings across your CSS components. Unfortunately, I find them somewhat difficult to read / follow within DevTools, unless you are using React Dev Tools plugin. 

In this repo, you will also also see demonstrations on how to apply global styles and a light/dark theme. 

Enjoy!


<h3>Additional Resources</h3>
Benefits of styled components: https://www.robinwieruch.de/react-styled-components/

Night/Day theme tutorial: https://www.smashingmagazine.com/2020/04/dark-mode-react-apps-styled-components/
