/**
 * # Practice01
 * Consoleへ以下が表示されるように
 * https://www.xxx.com/user
 * https://www.xxx.com/user/profile
 * https://www.xxx.com/home/blog
 * https://www.xxx.com
 */

/* Console */

const samePaths = [
  "https://www.xxx.com/user/profile",
  "https://www.xxx.com/user/profile/edit",
  "https://www.xxx.com/home/blog",
  "https://www.xxx.com/news/",
];

const backPath = (path) => {
  /* ↓ここの間にコードを書く↓ */



  /* ↑ここの間にコードを書く↑ */
};

samePaths.forEach((path) => {
  console.log(backPath(path));
});
