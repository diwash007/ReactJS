export const login = async ({ user, pass }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user === "test" && pass === "test") {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
};
