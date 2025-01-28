import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div style={{ padding: '1em', fontFamily: 'Helvetica, Arial, sans-serif' }}>
      <h1>プライバシーポリシー</h1>
      <p>
        このプライバシーポリシーは、隠Study（以下「本アプリケーション」）に適用されます。本アプリケーションは、
        Subaru Nakano（以下「サービス提供者」）によって無料サービスとして作成されました。本サービスは「現状のまま」で提供されます。
      </p>

      <h2>情報の収集と利用</h2>
      <p>
        本アプリケーションは、ダウンロードおよび利用時に次のような情報を収集する場合があります：
      </p>
      <ul>
        <li>お使いのデバイスのインターネットプロトコルアドレス（例：IPアドレス）</li>
        <li>
          アプリケーション内で訪問したページ、訪問日時、訪問時間、およびそのページに費やした時間
        </li>
        <li>アプリケーション全体の利用時間</li>
        <li>お使いのモバイルデバイスのオペレーティングシステム</li>
      </ul>
      <p>
        本アプリケーションは、モバイルデバイスの正確な位置情報を収集することはありません。
      </p>

      <h2>第三者サービス</h2>
      <p>
        本アプリケーションでは、サービスの改善を目的として第三者のサービスを利用しています。
        以下は利用されている第三者サービスのプライバシーポリシーへのリンクです：
      </p>
      <ul>
        <li>
          <a href="https://www.google.com/policies/privacy/" target="_blank" rel="noopener noreferrer">
            Google Play Services
          </a>
        </li>
        <li>
          <a href="https://support.google.com/admob/answer/6128543?hl=ja" target="_blank" rel="noopener noreferrer">
            AdMob
          </a>
        </li>
        <li>
          <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">
            Google Analytics for Firebase
          </a>
        </li>
      </ul>

      <h2>オプトアウト（情報収集の停止）</h2>
      <p>
        本アプリケーションによる情報収集を停止するには、アプリをアンインストールすることで簡単に行えます。
        お使いのデバイスの標準的なアンインストール機能やアプリマーケットから削除してください。
      </p>

      <h2>データ保持ポリシー</h2>
      <p>
        サービス提供者は、アプリを利用している間および利用終了後の合理的な期間、提供されたデータを保持します。
        提供されたデータの削除をご希望の場合は、<a href="mailto:kakustudy932@gmail.com">kakustudy932@gmail.com</a> までご連絡ください。
      </p>

      <h2>子供のデータについて</h2>
      <p>
        本アプリケーションは13歳未満のお子様を対象としてデータを収集することはありません。
        万が一、13歳未満のお子様が個人情報を提供したことに気づいた場合は、
        <a href="mailto:kakustudy932@gmail.com">kakustudy932@gmail.com</a> までご連絡ください。
        必要な対応を迅速に行います。
      </p>

      <h2>セキュリティ</h2>
      <p>
        サービス提供者は、情報の機密性を守るために、物理的、電子的、および手続き上の保護措置を講じています。
      </p>

      <h2>変更について</h2>
      <p>
        このプライバシーポリシーは、必要に応じて更新される場合があります。変更があった場合は、本ページに新しいポリシーを掲載します。
        本アプリケーションの利用を継続することで、変更に同意したものとみなされます。
      </p>

      <h2>同意について</h2>
      <p>
        本アプリケーションを利用することにより、このプライバシーポリシーに記載された情報の取り扱いに同意したものとみなされます。
      </p>

      <h2>お問い合わせ</h2>
      <p>
        本アプリケーションの利用におけるプライバシーに関する質問がある場合は、
        <a href="mailto:kakustudy932@gmail.com">kakustudy932@gmail.com</a> までご連絡ください。
      </p>

      <hr />
    </div>
  );
};

export default PrivacyPolicy;