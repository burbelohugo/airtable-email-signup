var Airtable = require('airtable');


exports.register = function(event, context, callback) {
  const body = JSON.parse(event.body)
  const email = body.email;
  const airtableAPIKey = body.apikey;
  const airtableBase = body.base;
  const airtableTable = body.table;
  const airtableColumn = body.column;
  console.log(airtableAPIKey)
  var base = new Airtable({apiKey: 'key0C4CA8xtuHMDDN'}).base('app4raQKdmoN34zFV');

  let entry = {
    "fields": {

    }
  }

  entry.fields[airtableColumn] = email

  base('Emails')
    .create([entry],function done(err) {
            if (err) {
              callback(err)
            } else {
              const body = JSON.stringify({ records: airtableColumn })
              const response = {
                statusCode: 200,
                body: body,
                headers: {
                  'content-type': 'application/json',
                  'cache-control': 'Cache-Control: max-age=300, public'
                }
              }
              callback(null, response)
            }
          }
  )
}
