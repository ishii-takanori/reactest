import React from 'react';

// スタイル定義
const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between', // 要素間に均等なスペースを確保
  },
  profileHeader: {
    width: '100%', // ヘッダーをコンテナの全幅にする
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
    fontWeight: 'bold',
    fontSize: '16px',
  },
  candidateProfile: {
    backgroundColor: '#ffffff',
    padding: '10px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    marginBottom: '10px',
    width: 'calc(50% - 10px)', // 二列表示を実現
  },
  candidateName: {
    textAlign: 'center',
    color: '#007BFF',
    fontWeight: 'bold',
    fontSize: '14px',
  },
  candidateDetail: {
    marginTop: '5px',
    fontSize: '12px',
  },
  reason: {
    marginTop: '15px',
    padding: '10px',
    backgroundColor: '#e8f4f8',
    borderRadius: '5px',
    borderLeft: '5px solid #007BFF',
    fontSize: '14px',
    color: '#333',
    textAlign: 'justify',
  },
};

function PoliticianProfile() {
  const candidates = [
    { name: "羽田 俊介", status: "現職", age: "45歳" },
    { name: "石岡 久彌", status: "現職", age: "75歳", reason: "柔道着を着て熱心に活動されています。防衛大学卒業し、陸将補を歴任するなど素晴らしい経歴を持った候補者です。前回の選挙では下位での当選ですが、今回はどれくらい票を伸ばすか注目です。" },
    { name: "淺田 健次", status: "新人", age: "59歳" },
    { name: "阿部 直文", status: "新人", age: "61歳" },
    // その他の例...
  ];

  const highlightedCandidate = candidates.find(candidate => candidate.name === "石岡 久彌");

  return (
    <div>
      <h2 style={styles.profileHeader}>注目の候補者</h2>
      <div style={styles.candidateProfile}>
        <h3 style={styles.candidateName}>{highlightedCandidate.name}</h3>
        <p style={styles.candidateDetail}><strong>立候補状況:</strong> {highlightedCandidate.status}</p>
        <p style={styles.candidateDetail}><strong>年齢:</strong> {highlightedCandidate.age}</p>
        <p style={styles.reason}>{highlightedCandidate.reason}</p>
      </div>

      <h2 style={styles.profileHeader}>福山市市議会議員選挙候補者一覧</h2>
      <div style={styles.container}>
        {candidates.filter(candidate => candidate.name !== "石岡 久彌").map((candidate, index) => (
          <div key={index} style={styles.candidateProfile}>
            <h3 style={styles.candidateName}>{candidate.name}</h3>
            <p style={styles.candidateDetail}><strong>立候補状況:</strong> {candidate.status}</p>
            <p style={styles.candidateDetail}><strong>年齢:</strong> {candidate.age}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PoliticianProfile;

