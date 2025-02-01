import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/pages/Home.tsx';
import PrivacyPolicy from './components/pages/PrivacyPolicy.tsx';
import TermsAndConditions from './components/pages/TermsAndConditions.tsx';
import Support from './components/pages/Support.tsx';

const PATH = {
  HOME: "",
  TERMS: "terms",
  PRIVACY: "privacy-policy",
  SUPPORT: "support" // サポートページのルートを追加
};

function App() {
  return (
    <Router>
      <nav style={{ padding: '1em', display: 'flex', gap: '1em' }}>
        <Link to={PATH.HOME}>ホーム</Link>
        <Link to={PATH.TERMS}>利用規約</Link>
        <Link to={PATH.PRIVACY}>プライバシーポリシー</Link>
        <Link to={PATH.SUPPORT}>サポート</Link> {/* サポートページのリンク */}
      </nav>
      <Routes>
        <Route path={PATH.HOME} element={<Home />} />
        <Route path={PATH.TERMS} element={<TermsAndConditions />} />
        <Route path={PATH.PRIVACY} element={<PrivacyPolicy />} />
        <Route path={PATH.SUPPORT} element={<Support />} /> {/* サポートページ */}
      </Routes>
    </Router>
  );
}

export default App;