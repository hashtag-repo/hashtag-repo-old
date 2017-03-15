const Vision = require('@google-cloud/vision')

exports.extractText = (filePath) => {
/* * * Google Cloud Vision * * */
  const googleCV = Vision()

  return googleCV.detectText(filePath)
  .then((response) => {
    let text = response[0][0]
    return text
  })
  .catch(error => console.log(error))
}
