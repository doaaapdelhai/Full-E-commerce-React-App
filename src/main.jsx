import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './Redux/Store'; // تأكد أن المسار صحيح
import { Provider } from 'react-redux';

const root = createRoot(document.getElementById('root')); // استخدام createRoot
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

