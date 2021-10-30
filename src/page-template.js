module.exports = templateData => {

    const inputArray = [...employees] = templateData;
    //console.log(inputArray)
    const getNameArray = inputArray.map(prop => prop.name);
    const getIdArray = inputArray.map(prop => prop.id);
    const getEmailArray = inputArray.map(prop => prop.email);
    const getRole = inputArray.map(prop => prop.email);

    console.log(getNameArray, getIdArray, getEmailArray, getRole);
    
    function generateHTML() {

    };

    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Generator</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    </head>
    
    <body>
        <h1 class="text-center text-light bg-danger py-4">
            My Team
        </h1>

        <div class="container">
            <div class="row"></div>
        </div>

        <script src="https://code.jquery.com/jquery.js"></script>
    </body>
    
    </html>`
}