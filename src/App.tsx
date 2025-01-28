import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/pages/🏠';
import PrivacyPolicy from './components/pages/㊙️';
import TermsAndConditions from './components/pages/👤';
const PATH = {
  HOME: "home",
  TERMS: "terms",
  PRIVACY: "privacy-policy"
}

function App() {
  return (
    <Router>
      <nav style={{ padding: '1em', display: 'flex', gap: '1em' }}>
        <Link to={PATH.HOME}>ホーム</Link>
        <Link to={PATH.TERMS}>利用規約</Link>
        <Link to={PATH.PRIVACY}>プライバシーポリシー</Link>
      </nav>
      <Routes>
        <Route path={PATH.HOME} element={<Home />} />
        <Route path={PATH.TERMS} element={<TermsAndConditions />} />
        <Route path={PATH.PRIVACY} element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;