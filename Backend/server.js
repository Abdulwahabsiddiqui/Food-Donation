const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from React build folder
app.use(express.static(path.join(__dirname, 'dist')));

// Example API (optional - in case you want to store donations server-side later)
app.use(express.json());
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
