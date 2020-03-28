var Airtable = require('airtable');


module.exports.register = async event => {
  const body = JSON.parse(event.body)
  const email = body.email;
  const airtableAPIKey = body.apikey;
  const airtableBase = body.base;
  const airtableTable = body.table;
  const airtableColumn = body.column;
  console.log(email)
  Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: airtableAPIKey
  });
  var base = Airtable.base(airtableBase);
  base(airtableTable).create([
    {
      "fields": {
        "email": email
      }
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



  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: email,
      },
      null,
      2
    ),
  };
};
