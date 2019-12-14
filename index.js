//API IBM-Watson Tone Analyzer
var ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');
const { IamAuthenticator } = require('ibm-watson/auth');

var text = "The product looks very well finished. I just found the noise strange when the base is raised. The request took a long time to arrive.";

var toneInput = { "text": text };
var params = {
  'toneInput': toneInput,
  'content_type': 'application/json'
};

const tone_analyzer = new ToneAnalyzerV3({
  version: '2017-09-21',
  authenticator: new IamAuthenticator({
    apikey: 'HColxAttBYH9HpAJc9fsFMPq-cjptEz0B9tc7MHhiFIY'
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