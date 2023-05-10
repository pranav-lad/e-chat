import './App.css';
import Main from './main'
import Navbar from './navbar'
import Sidebar from './sidebar'
import './css/Main.css'
import './css/Navbar.css'
import './css/Sidebar.css'
const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
};


export default App;
