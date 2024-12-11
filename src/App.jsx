import MainContent from "./components/MainContent";
import logo from "./assets/images/logo.png";

//this is for owner

function App() {
  return (
    <>
      <header>
        <div id="logo-img">
          <img src={logo} />
        </div>
        <h1>Learn & Master GitHub Actions</h1>
      </header>
      <MainContent />
    </>
  );
}

export default App;
