import Header from "../components/Header";
import MainContent from "../components/MainContent";
import About from "../components/About";
import Footer from "../components/Footer";
function App(){
  return (
    <div className="whole">
       <Header />
      <div className="image-style">
        <MainContent />
        <About />
      </div>
      <Footer />
    </div>
  )
}


export default App