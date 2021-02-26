import "./App.css";
import '../components/header/Header';
import Header from "../components/header/Header";
import Footer from "./footer/Footer";
import Cards from "./Cards/Cards";

function App() {
    return <div className="App">
        <Header />
        <Cards />
        <Footer />
    </div>;
}

export default App;
