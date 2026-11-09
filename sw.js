// 最低限のService Worker（ホーム画面追加を有効にするため）
self.addEventListener('install', function(e) {
    self.skipWaiting();
});

self.addEventListener('fetch', function(e) {
    // キャッシュ処理はせず、常にネットワークから最新を取得する
});