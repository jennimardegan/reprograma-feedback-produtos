var ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');
const { IamAuthenticator } = require('ibm-watson/auth');
var text = "In my younger and more vulnerable years my father gave me some advice that I’ve been" 
+ "turning over in my mind ever since. \“Whenever you feel like criticizing any one,\” he told me," 
+ "\“just remember that all the people in this world haven’t had the advantages that you’ve had.\"";

var toneInput = { "text": text };
var params = {
  'toneInput': toneInput,
  'content_type': 'application/json'
};

const tone_analyzer = new ToneAnalyzerV3({
  version: 'YYYY-MM-DD',
  authenticator: new IamAuthenticator({
    apikey: 'xxxxxxxxxxxxxxx'
  })
});

tone_analyzer.tone(params, function(error, response) {
  if (error) {
    console.log('Error:', error);
  } else {
    var tone = JSON.stringify(response, null, 2)
    console.log("The tone analysis for \'" + text + "\' is:\n");
    console.log(tone);
  }
});