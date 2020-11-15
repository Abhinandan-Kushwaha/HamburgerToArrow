import './App.css';
import BurgerToArrow from './burger-to-arrow';
import { useState } from 'react';

function App() {
  const [state, setState] = useState({
    sideBarVisible: false
  })
  const toggleSideBar = () => {
    setState({ ...state, sideBarVisible: !state.sideBarVisible })
  }
  return (
    <div className="App">
      <BurgerToArrow id={1}
        tintColor="yellow"
        visible={state.sideBarVisible}
        onPress={toggleSideBar}
        size="medium"
        speed={4}
        thickness={3} />
    </div>
  );
}

export default App;
