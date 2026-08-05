import { Outlet } from "react-router-dom";
import { useAppStore } from './store/useAppStore';
import { Link } from "react-router-dom";
import "./App.css"

const App = () => {
  const toggleSidebar = useAppStore((s) => s.toggleSidebar); 
  return (
    <div className="App">
      <header>
        <button onClick={toggleSidebar}>=</button>
        <Link to="/">Home</Link>
      </header>
      <Outlet />
    </div>
  )
};

export default App;