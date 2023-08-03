import { Header,LandingPage,Services,Courses,Upto ,Monials,ContactUsAndFooter,ContactUs,Footer} from "./Files";
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
      <ContactUsAndFooter>
      <ContactUs/>
      <Footer/>
      </ContactUsAndFooter>
    </div>
  );
}

export default App;
