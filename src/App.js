import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PoliticianProfile from './PoliticianProfile';
import HomePage from './HomePage'; // HomePage コンポーネントをインポート
import KasaokaMayorElection from './KasaokaMayorElection'; // 笠岡市長選挙ページコンポーネントのインポート

function App() {
  return (
    <Router>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <header style={{ marginBottom: '40px' }}>
          {/* ホーム画面へのリンク */}
          <h1 style={{ textAlign: 'center' }}>
            <Link to="/">選挙情報アプリ</Link>
          </h1>
        </header>

        {/* ルート定義 */}
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* ホーム画面 */}
          <Route path="/politician-profile" element={<PoliticianProfile />} /> {/* 選挙情報ページ */}
          <Route path="/kasaoka-mayor-election" element={<KasaokaMayorElection />} /> {/* 笠岡市長選挙ページ */}
        </Routes>

        <footer style={{ marginTop: '40px', textAlign: 'center' }}>
          <p>© 2024 選挙情報アプリ. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;


