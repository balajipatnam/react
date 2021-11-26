import configureStore from './store/configureStore';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import { Suspense, useEffect } from 'react';

const store = configureStore();

function App() {
  useEffect(() => {
    setTheme();
  });
  function setTheme(themeColor) {
    for (let i = 0; i < document.body.classList.length; i++) {
      const className = document.body.classList[i];

      if (className.startsWith('theme-')) {
        document.body.classList.remove(className);
      }
    }
    localStorage.setItem(
      'selectedTheme',
      themeColor?.toString() || 'theme-default'
    );
    document.body.classList.add(themeColor || 'theme-default');
  }
  return (
    <Provider store={store}>
      <Suspense fallback="">
        <BrowserRouter basename="/">
          <Routes />
        </BrowserRouter>
      </Suspense>
    </Provider>
  );
}

export default App;
