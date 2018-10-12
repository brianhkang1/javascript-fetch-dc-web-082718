const app = "I don't do much.";

const token = '25f3d6210a388039a5910865086403339221322e'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
  }).then(res => res.json()).then(json => console.log(json));
