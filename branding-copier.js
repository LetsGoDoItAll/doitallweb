// Branding copy-to-clipboard - minify with https://minify-js.com/
const branding = document.getElementById('branding');
const copychar = document.getElementById('copychar');
const handle = '@LetsGoDoItAll'
branding.onclick = () => document.execCommand('copy');
branding.addEventListener('copy', (event) => {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData('text/plain', handle);
    branding.style.cursor = 'grabbing';
    branding.innerHTML = '&nbsp; &nbsp;<em>Copied!</em>&nbsp; &nbsp;'
    copychar.innerText = ' ☑︎' // Check
    setTimeout(() => {
      branding.style.cursor = 'copy';
      branding.innerHTML = handle;
      copychar.innerText = '⎘' // Copy
    }, 750)
  }
});
