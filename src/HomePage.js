import React from 'react';
import { Link } from 'react-router-dom'; // Link コンポーネントをインポート

// HomePage のスタイル定義
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    borderRadius: '8px',
    marginBottom: '20px',
    maxWidth: '800px',
    margin: '20px auto'
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
    fontWeight: 'bold'
  },
  content: {
    textAlign: 'center',
    color: '#333'
  },
  link: {
    display: 'inline-block',
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#ffffff',
    borderRadius: '5px',
    textDecoration: 'none', // 下線を消す
    fontWeight: 'bold'
  }
};

function HomePage() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>選挙情勢、選挙結果の分析サイト</h2>
      <p style={styles.content}>さまざまな選挙の情勢や結果を分析し、情報を共有するサイトです。</p>
      {/* 福山市選挙情報ページへのリンク */}
      <Link to="/politician-profile" style={{ ...styles.link, marginRight: '10px' }}>  
        福山市選挙情報へ
      </Link>
      {/* 笠岡市長選挙情報ページへのリンク */}
      <Link to="/kasaoka-mayor-election" style={styles.link}>
        笠岡市長選挙情報へ
      </Link>
    </div>
  );
}



export default HomePage;

