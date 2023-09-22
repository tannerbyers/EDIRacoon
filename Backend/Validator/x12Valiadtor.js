// API ENDPOINT
// POST {url}/x12/document

// Take in EDI Data
// Get 
exports.handler = async function (ediData: ediDataType) {
    // parse edidata (delimeters 
    // validate config for company, trading partner, transaction (we do this to make sure failures are caught ahead of time vs missing config data causing possibly uncaught errors later in pipeline. (this could be a form of premature optmization but I merely do what the brain commands)
    // use the validatedConfig and find the edits
   // parse ediData w/ config delimeters or try defaults to jsonifiedEdiData!(lambda made)
    //
    // take in and validate jsonifiedEdiData for edits (if ABF01 == FF && ABF02 == 55 throw error
    

    const body = event.body;
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
};
