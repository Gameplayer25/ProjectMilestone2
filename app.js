const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files

// Route to serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Route to serve about.html
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

// Route to serve contact.html
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

// Handle form submission
app.post('/submit-form', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    // HTML response
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Message Received</title>
            <link rel="stylesheet" href="/style.css"> <!-- Link to your CSS file -->
        </head>
        <body>
            <header>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <h1>Thank You, ${name}!</h1>
                <p>We received your message:</p>
                <blockquote>"${message}"</blockquote>
                <p>We'll respond to you at <strong>${email}</strong>.</p>
                <p><a href="/">Go back to Home</a></p> <!-- Link to go back to home -->
            </main>
            <footer>
                <p>&copy; 2024 Ryan Hurley</p>
            </footer>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
