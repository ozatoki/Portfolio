const memo = document.getElementById('memo');
    const contentKey = 'memoContent';
    const timeKey = 'memoTimestamp';
    const expireMinutes = 30;

    // ページ読み込み時：保存データをチェック
    window.onload = () => {
      const savedTime = localStorage.getItem(timeKey);
      const savedContent = localStorage.getItem(contentKey);

      if (savedTime && savedContent) {
        const savedDate = new Date(savedTime);
        const now = new Date();
        const diffMinutes = (now - savedDate) / 1000 / 60;

        if (diffMinutes < expireMinutes) {
          // 30分以内なら内容を復元
          memo.value = savedContent;
        } else {
          // 30分以上経過 → 削除
          localStorage.removeItem(contentKey);
          localStorage.removeItem(timeKey);
        }
      }
    };

    // 入力時に保存（＋現在時刻も）
    memo.addEventListener('input', () => {
      localStorage.setItem(contentKey, memo.value);
      localStorage.setItem(timeKey, new Date().toISOString());
    });