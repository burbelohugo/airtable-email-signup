var Airtable = require('airtable');


exports.register = function(event, context, callback) {
  const body = JSON.parse(event.body)
  const email = body.email;
  const airtableAPIKey = body.apikey;
  const airtableBase = body.base;
  const airtableTable = body.table;
  const airtableColumn = body.column;

  const base = new Airtable({apiKey: 'key0C4CA8xtuHMDDN'}).base('app4raQKdmoN34zFV');

  let entry = {
    "fields": {}
  }

  entry.fields[airtableColumn] = email

  base('Emails').create([entry], function done(err) {
    if (err) {
      callback(err)
    } else {
      const response = {
        statusCode: 200,
        body: JSON.stringify({ records: email })
      }
      callback(null, response)
    }
  });
}
