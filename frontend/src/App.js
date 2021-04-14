import { Provider } from 'react-redux';
import Form from './components/form';
import './App.css';

function App({ store }) {
  return (
    <Provider store={store}>
      <div className="App">
        <header>
          header
        </header>
        <div>
          <Form/>
        </div>
      </div>
    </Provider>

  );
}

export default App;
