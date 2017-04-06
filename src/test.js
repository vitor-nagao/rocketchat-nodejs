const Client = require('../build/Client.compiled.js').Client;
console.log(Client);

const client = new Client({
  host: '13.113.160.227',
  port: 8080,
  username: 'nagao_vitor',
  password: 'Cacete1324',
});

client.login().then((result) => {
  const channels = client.Miscellaneous();

  channels.info()
  .then((data) => { console.log('rename'); console.log(data); })
  .catch((error) => { console.log('rename'); console.log(error); });

}).catch((err) => {
  console.log(err);
});
