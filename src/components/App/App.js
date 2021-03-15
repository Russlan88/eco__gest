import { GlobalStyle } from '../../utilities';
import FetchCountries from '../Fetch-countries/Fetch-countries';

function App() {
  return (
    <div className="app">
      <GlobalStyle />
      <FetchCountries />
    </div>
  );
}

export default App;
