function handler(type, hash = '') {
    let results = {
        1: `<h1>Password</h1>
            <form action="/" method="POST">
                <label>Password not saved at session.</label><br>
                <label for="password">Password for saving to session</label>
                <input id="password" type="password" name="password" placeholder="Password to session"><br>
                <label for="salt">Salt for saving to session</label>
                <input id="salt" type="number" name="salt" placeholder="Salt to session"><br>
                <button type="submit">Save</button>
            </form>`,
        2: `<h1>Password</h1>
            <form action="/check" method="POST" >
                <label>Password saved at session.</label><br>
                <label>Hash is ${hash}.</label><br>
                <label for="password">Try to guess:</label>
                <input id="password" type="password" name="g_password" placeholder="Password to session">
                <button type="submit">Check password</button>
            </form>
            <button onclick="location.href='/logout'">Clear</button>`,
        3: `<h1>Password</h1>
            <h2 style="color:green">Hacked!</h2>
            <form action="/" method="POST">
                <label>Password not saved at session.</label><br>
                <label for="password">Password for saving to session</label>
                <input id="password" type="password" name="password" placeholder="Password to session"><br>
                <label for="salt">Salt for saving to session</label>
                <input id="salt" type="number" name="salt" placeholder="Salt to session"><br>
                <button type="submit">Save</button>
            </form>`,
        4: `<h1>Password</h1>
            <h2 style="color:red">Access denied!</h2>
            <form action="/check" method="POST" >
                <label>Password saved at session.</label><br>
                <label>Hash is ${hash}.</label><br>
                <label for="password">Try to guess:</label>
                <input id="password" type="password" name="g_password" placeholder="Password to session">
                <button type="submit">Check password</button>
            </form>
            <button onclick="location.href='/logout'">Clear</button>`
    };
    
    switch (type) {
        case 1:
            return results[1];
        case 2:
            return results[2];
        case 3:
            return results[3];
        case 4:
            return results[4];
        default:
            return null;
    }
}

module.exports = handler;