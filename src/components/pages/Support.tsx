import React from 'react';

const Support: React.FC = () => {
  return (
    <div style={{ padding: '2em', fontFamily: 'Arial, sans-serif' }}>
      <h1>サポート</h1>
      <p>何かお困りですか？以下の情報をご確認ください。</p>

      <h2>📧 お問い合わせ</h2>
      <p>サポートが必要な場合は、以下のメールアドレスまでご連絡ください。</p>
      <p><strong>Email:</strong>  kakustudy932@gmail.com</p>

      <h2>❓ よくある質問</h2>
      <ul>
        <li><strong>アプリがクラッシュする場合</strong> - 最新バージョンにアップデートしてください。</li>
        <li><strong>その他の問題</strong> - お問い合わせフォームをご利用ください。</li>
      </ul>

      <h2>🔗 関連リンク</h2>
      <ul>
        <li><a href="/privacy-policy">プライバシーポリシー</a></li>
        <li><a href="/terms">利用規約</a></li>
      </ul>
    </div>
  );
};

export default Support;