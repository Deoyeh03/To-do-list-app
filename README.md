# To-do-list-app

# To-Do List App

A simple To-Do List web application built with Node.js, Express, MongoDB, and EJS.

## Features

- Add new tasks
- Edit tasks (inline modal)
- Delete tasks
- Mark tasks as completed with a checkbox
- Responsive UI with EJS templates

## Technologies Used

- Node.js
- Express.js
- MongoDB & Mongoose
- EJS (Embedded JavaScript templates)
- express-ejs-layouts
- method-override

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/todo-list.git
   cd todo-list
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up your `.env` file:
   ```
   MONGODB_URI=mongodb://localhost:27017/todo
   PORT=1994
   ```

4. Start MongoDB locally or use your MongoDB Atlas URI.

5. Run the app:
   ```
   npm start
   ```
   Or with nodemon for development:
   ```
   npx nodemon app.js
   ```

6. Open [http://localhost:1994](http://localhost:1994) in your browser.

## Project Structure

```
├── app.js
├── server
│   ├── config
│   │   └── db.js
│   ├── models
│   │   └── todo.js
│   ├── routes
│   │   └── main.js
│   └── controller.js
├── views
│   ├── index.ejs
│   ├── layouts
│   │   └── main.ejs
│   └── partials
│       ├── tasks.ejs
│       ├── add-task.ejs
│       ├── edit-task.ejs
│       ├── delete-task.ejs
│       └── button.ejs
├── public
│   └── js
│       └── script.js
├── .env
└── package.json
```

## License

This project is licensed under
