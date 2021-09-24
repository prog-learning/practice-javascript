/**
 * Practice.0999
 * それぞれの支持に従った内容をConsoleに表示してください
 */

(() => {
  console.log('===== 1 =====');
  // 以下のfruitsをアルファベット順（昇順）に並び替えて出力してください
  const url = 'https://www.xxx.com/user/profile';
  /* ↓ここより下にコードを書く↓ */
  /* ↑ここより上にコードを書く↑ */
  console.log(fruits);
})();

/* 以下のproductsに関して次の指示に従ってください */
const samePaths = [
  'https://www.xxx.com/user/profile',
  'https://www.xxx.com/user/profile/edit',
  'https://www.xxx.com/home/blog',
  'https://www.xxx.com/news/',
];

(() => {
  console.log('===== 2 =====');
  // 値段の安い順に並び替えて出力してください
  /* ↓ここより下にコードを書く↓ */
  /* ↑ここより上にコードを書く↑ */
  console.log(products);
})();

(() => {
  console.log('===== 3 =====');
  // 以下の2つの項目に従って並び替えて出力してください
  const sortType = Math.random() > 0.5 ? 'asc' : 'desc'; // 昇順か降順かランダムで決定
  const sortProperty = Math.random() > 0.5 ? 'price' : 'name'; // 値段か名前かランダムで決定
  /* ↓ここより下にコードを書く↓ */
  /* ↑ここより上にコードを書く↑ */
  console.log(products);
})();
