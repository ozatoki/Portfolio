window.onload = () => {
      const savedTime = localStorage.getItem(timeKey);
      const savedContent = localStorage.getItem(storageKey);

      if (savedTime && savedContent) {
        const savedDate = new Date(savedTime);
        const now = new Date();
        const diffMinutes = (now - savedDate) / 1000 / 60;

        if (diffMinutes < expireMinutes) {
          // 期限内なので内容を表示
          memo.value = savedContent;
        } else {
          // 期限切れなので消す
          localStorage.removeItem(storageKey);
          localStorage.removeItem(timeKey);
        }
      }
    };

    // 書いたら保存＆時間も更新
    memo.addEventListener('input', () => {
      localStorage.setItem(storageKey, memo.value);
      localStorage.setItem(timeKey, new Date().toISOString());
    });