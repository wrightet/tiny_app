import { Provider } from 'react-redux';
import './App.css';

function App({ store }) {
  return (
    <Provider store={store}>
      <div className="App">
        <header>
          header
        </header>
        <div>
          test
        </div>
      </div>
    </Provider>

  );
}

export default App;
