import './App.css';
import HelloMyFriends from './components/HelloMyFriends';
import LogoReact from './components/LogoReact';
import React from 'react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LogoReact />
        <HelloMyFriends turma='12'/>
      </header>
      <footer>
      <LogoReact />
      </footer>
    </div>
  );
}

// class App extends React.Component { método antigo
//   render(){
//     return (
//       <div className="App">
//         <header className="App-header">
//           <LogoReact />
//           <HelloMyFriends turma='12'/>
//         </header>
//         <footer>
//         <LogoReact />
//         </footer>
//       </div>
//     );
//   }
// }

export default App;
