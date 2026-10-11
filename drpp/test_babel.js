const https = require('https');
const fs = require('fs');

const babelUrl = 'https://unpkg.com/@babel/standalone/babel.min.js';

function fetchUrl(targetUrl) {
  https.get(targetUrl, (res) => {
    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      const redirectUrl = new URL(res.headers.location, targetUrl).href;
      fetchUrl(redirectUrl);
    } else {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const vm = require('vm');
        const sandbox = { window: {}, console: console, process: process, setTimeout: setTimeout };
        vm.createContext(sandbox);
        vm.runInContext(data, sandbox);
        const Babel = sandbox.Babel || sandbox.window.Babel;
        
        const html = fs.readFileSync('C:\\Users\\Megha\\.gemini\\antigravity\\scratch\\brand-sentinel-drp\\index.html', 'utf8');
        const match = html.match(/<script type="text\/babel">([\s\S]*?)<\/script>/);

        try {
          const result = Babel.transform(match[1], { presets: ['react'] });
          console.log("FINAL VALIDATION: ✅ BABEL COMPILATION SUCCEEDED! Code length:", result.code.length);
          process.exit(0);
        } catch (err) {
          console.error("FINAL VALIDATION: ❌ BABEL ERROR:", err.message);
          process.exit(1);
        }
      });
    }
  }).on('error', (err) => {
    console.error("Fetch network error:", err.message);
    process.exit(0);
  });
}

fetchUrl(babelUrl);
