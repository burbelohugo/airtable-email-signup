var Airtable = require('airtable');
var base = new Airtable({apiKey: 'key0C4CA8xtuHMDDN'}).base('app4raQKdmoN34zFV');

base('Emails').create([
  {
    "fields": {}
  },
  {
    "fields": {}
  }
], function(err, records) {
  if (err) {
    console.error(err);
    return;
  }
  records.forEach(function (record) {
    console.log(record.getId());
  });
});
