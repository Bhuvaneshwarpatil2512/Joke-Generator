// App.js
 
import Joke from "./components/Joke";
import Example from "./components/Example";
import Footer from "./components/Footer";
function App() {
    return (
        <div className="App">
            <Example/>
            <Joke/>
            <Footer/>
        </div>
    );
}
 
export default App;