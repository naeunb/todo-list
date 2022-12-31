import './App.css';
import {createGlobalStyle} from 'styled-components';
import Todo from './components/Todo'

const GlobalStyle = createGlobalStyle`
  body {
    background: #eee;
    display:flex;
    justify-content:center;
    height:100vh;
    align-items:center;
  }

  ul {
    padding:0;
    margin:0;
  }
`;

function App() {
  return <>
    <GlobalStyle />
    <Todo />
    </>
}

export default App;
