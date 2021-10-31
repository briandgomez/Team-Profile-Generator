module.exports = templateData => {

    const inputArray = templateData;

    let HTML = ''
    for (var i = 0; i < inputArray.length; i++) {
        const { name, id, email, role, ...rest } = inputArray[i];
        //console.log(rest);
        let lastProp = Object.entries(rest).map(function (array) {
            if (array[0] == 'github') {
                return `<a href="https://github.com/${array[1]}">${array[1]}</a>`;
            }
            return array[1];
        });

        HTML +=
            `
        <div class="card d-flex m-3 rounded shadow-lg" style="width: 15rem;">
            <div class="card-body bg-primary text-white">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">${role}</p>
            </div>
            <div class="border border-dark rounded m-4">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${id}</li>
                    <li class="list-group-item"><a href="mailto:${email}">${email}</a></li>
                    <li class="list-group-item">${lastProp}</li>
                </ul>
            </div>
        </div>
        `
    }

    return Promise.resolve(`
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Generator</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="./style.css">
    </head>
    
    <body>
        <h1 class="text-center text-light bg-danger py-4">
            My Team
        </h1>
    
        <div class="container">
            <div class="row">${HTML}</div>
        </div>
    </body>
    
    </html>
`
    )
}