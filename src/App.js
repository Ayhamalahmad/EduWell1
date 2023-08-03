import { Header,LandingPage,Services,Courses,Upto ,Monials} from "./Files";
import "./assets/css/homepage.css";
function App() {
  return (
    <div className="App">
        <Header />
      <div className="container">
      <LandingPage/>
      <Services/>
      <Courses/>
      </div>
      <Upto/>
      <Monials/>
      
    </div>
  );
}

export default App;
