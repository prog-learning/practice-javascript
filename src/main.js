const fileList =
  /* ↓ここに貼り付け↓ */
  [
    'ex01.js',
    'practice-00 copy.js',
    'practice-00.js',
    'practice-02.js',
    'practice-03 copy 2.js',
    'practice-03 copy.js',
    'practice-03.js',
  ];
/* ↑ここに貼り付け↑ */

let current = 'test-script.js';

const changePath = (e) => {
  const fileName = e.target.id;
  current = 'practice/' + fileName;
  document.getElementsByClassName('selected')[0]?.classList.remove('selected');
  document.getElementById(fileName).classList.add('selected');
};

for (const fileName of fileList) {
  const list = document.createElement('li');
  // const label = fileName.slice(0, fileName.length - 3)
  list.innerHTML = `
  <span>${fileName.slice(0, fileName.length - 3)}</span>
  <button 
    id="${fileName}"
    type="button"
    onclick="changePath(event)"
  >
    select
  </button>
  `;
  const target = document.getElementById('file_list');
  target.appendChild(list);
}

const runScript = () => {
  const script = document.createElement('script');
  script.src = './src/' + current;
  const target = document.getElementById('run_script');
  target.appendChild(script);
};
