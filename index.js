const express = require('express');
const path = require('path');

const app = express();
const port = 8000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('register', {
    step: 2,
    stepTotal: 4,
    title: 'SmartAdmin',
    subtitle: 'your ultimate school management system',
  });
});

app.get('/admin', (req, res) => {
  res.render('admin', {
    step: 3,
    stepTotal: 4,
    title: 'SmartAdmin',
    subtitle: 'your ultimate school management system',
  });
});

app.post('/register', (req, res) => {
  res.redirect('/admin');
});

app.post('/admin', (req, res) => {
  const { employeeId, department, accessLevel, position } = req.body;
  res.render('admin', {
    step: 3,
    stepTotal: 4,
    title: 'SmartAdmin',
    subtitle: 'your ultimate school management system',
    form: { employeeId, department, accessLevel, position },
    message: 'Administration details saved (demo only).',
  });
});

app.get('/overview', (req, res) => {
  res.render('overview', {
    title: 'SmartAdmin',
    subtitle: 'your ultimate school management system',
  });
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});