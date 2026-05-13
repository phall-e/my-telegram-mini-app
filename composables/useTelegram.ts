export const useTelegram = () => {
  const tg = window.Telegram?.WebApp;

  const init = () => {
    tg?.ready();
    tg?.expand();
  }

  const user = tg?.initDataUnsafe?.user;

  return {
    tg,
    user,
    init,
  };
}
