import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="bg-neutral-200">
      <header className="bg-blue-300 flex flex-row flex-wrap justify-between content-center" >
        <h1 className="text-emerald-900 mx-auto mt-4 text-5xl sm:p-2 sm:m-5 sm:ml-8">Zachary Davis</h1>
        <nav className="m-5 mr-7">
          <ul className="flex flex-wrap justify-evenly">
            <li className="text-emerald-900 text-xl p-2 m-2">About Me</li>
            <li className="text-emerald-900 text-xl p-2 m-2">Protfolio</li>
            <li className="text-emerald-900 text-xl p-2 m-2">Contact Me</li>
            <li className="text-emerald-900 text-xl p-2 m-2">Resume</li>
          </ul>
        </nav>
      </header>
      <main>
        components here!
      </main>
    </div>
  );
}

export default App;
