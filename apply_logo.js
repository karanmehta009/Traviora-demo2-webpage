const fs = require('fs');

const source = 'C:\\Users\\KARAN MEHTA\\.gemini\\antigravity\\brain\\3e336254-ac1a-4961-bb67-0893fd0da95e\\media__1786950612465.png';
const destination = 'd:\\ETraviora\\traviora-2oririri\\visa-prototype\\traviora_logo.png';

try {
    fs.copyFileSync(source, destination);
    console.log('✅ Logo copied successfully! Please refresh your browser.');
} catch (err) {
    console.error('❌ Error copying logo:', err.message);
}
