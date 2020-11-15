import './App.css';
import HamburgerToArrow from './hamburger-to-arrow';
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
      <div style={{ height: 40, width: 40, display: 'flex', justifyContent: 'center', borderRadius: 4, backgroundColor: '#282c34', margin: 10 }}>
        <HamburgerToArrow id={1}
          tintColor="yellow"
          burgerOpen={state.sideBarVisible}
          onPress={toggleSideBar}
          size="medium"
          speed={4}
          thickness={1} />
      </div>
      <div style={{ height: 40, width: 40, display: 'flex', justifyContent: 'center', borderRadius: 4, backgroundColor: 'blue', margin: 10 }}>
        <HamburgerToArrow id={2}
          tintColor="yellow"
          burgerOpen={state.sideBarVisible}
          onPress={toggleSideBar}
          size="medium"
          speed={5}
          thickness={3} />
      </div>
      <div style={{ height: 40, width: 35, display: 'flex', justifyContent: 'center', borderRadius: 4, backgroundColor: 'green', margin: 10 }}>
        <HamburgerToArrow id={3}
          tintColor="white"
          burgerOpen={state.sideBarVisible}
          onPress={toggleSideBar}
          size="small"
          speed={3}
          thickness={4} />
      </div>
      <div style={{ height: 40, width: 40, display: 'flex', justifyContent: 'center', borderRadius: 4, backgroundColor: 'orange', margin: 10 }}>
        <HamburgerToArrow id={4}
          tintColor="blue"
          burgerOpen={state.sideBarVisible}
          onPress={toggleSideBar}
          size="medium"
          speed={4}
          thickness={3} />
      </div>
      <div style={{ height: 50, width: 55, display: 'flex', justifyContent: 'center', borderRadius: 4, backgroundColor: 'violet', margin: 10, paddingTop: 10 }}>
        <HamburgerToArrow id={5}
          tintColor="black"
          burgerOpen={state.sideBarVisible}
          onPress={toggleSideBar}
          size="large"
          speed={5}
          thickness={4} />
      </div>
    </div>
  );
}

export default App;
