const app = "I don't do much.";
const token = '8bf7325cfe1b7abe80033a338c366448ea295ca3';

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));