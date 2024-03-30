import React from 'react';

// ここでスタイル定義を流用または調整...
const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    marginBottom: '20px'
  },
  profileHeader: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
    fontWeight: 'bold'
  },
  candidateProfile: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    marginBottom: '20px'
  },
  candidateName: {
    textAlign: 'center',
    color: '#007BFF',
    fontWeight: 'bold'
  },
  candidateDetail: {
    marginTop: '10px'
  }
};

function KasaokaMayorElection() {
  // 笠岡市長選挙の候補者データ
  const candidates = [
    { name: "小見山史子", age: 63, occupation: "翻訳・通訳業", status: "新人候補" },
    { name: "小林嘉文", age: 59, occupation: "現職", status: "再選を目指す" },
    { name: "大本益之", age: 52, occupation: "前市議会議員", status: "新人候補" }
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.profileHeader}>笠岡市長選挙候補者プロフィール</h1>
      {candidates.map((candidate, index) => (
        <div key={index} style={styles.candidateProfile}>
          <h2 style={styles.candidateName}>{candidate.name}</h2>
          <p style={styles.candidateDetail}><strong>年齢:</strong> {candidate.age}歳</p>
          <p style={styles.candidateDetail}><strong>職業:</strong> {candidate.occupation}</p>
          <p style={styles.candidateDetail}><strong>立候補状況:</strong> {candidate.status}</p>
        </div>
      ))}
    </div>
  );
}

export default KasaokaMayorElection;
