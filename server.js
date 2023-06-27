const express = require('express');
const app = express();
const port = 3000; 

app.get('/tasks', (req, res) => {
    const tasks = [
      {
        id: '123456',
        isCompleted: false,
        description: 'Walk the dog',
      },
    ];
  
    res.json(tasks);
  });

  app.listen(port, () => {
    console.log(`Servidor en ejecución en http://localhost:${port}`);
  });
  