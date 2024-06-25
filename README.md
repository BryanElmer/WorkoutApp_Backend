# Workout App Backend

This is the backend service for the Workout App, responsible for handling connections to the database and providing API endpoints for workout and user management.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Contributing](#contributing)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/BryanElmer/WorkoutApp_Backend.git
    cd WorkoutApp_Backend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up environment variables. Create a `.env` file in the root of your project and add the following:
    ```env
    PORT=your_port_number
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    ```

## Usage

1. Run the server:
    ```sh
    npm start
    ```

2. The backend will be available at `http://localhost:PORT`.

## API Endpoints

### Workout Routes `/api/workouts/` (Protected and requires authentication)

- **GET** all workouts
    ```http
    GET /api/workouts/
    ```

- **GET** a single workout
    ```http
    GET /api/workouts/:id
    ```

- **POST** a new workout
    ```http
    POST /api/workouts/
    ```

- **DELETE** a workout
    ```http
    DELETE /api/workouts/:id
    ```

- **PATCH** (update) a workout
    ```http
    PATCH /api/workouts/:id
    ```

### User Routes `/api/user`

- **POST** login route
    ```http
    POST /api/user/login
    ```

- **POST** signup route
    ```http
    POST /api/user/signup
    ```

## Environment Variables

- `PORT`: Port number.
- `MONGO_URI`: Connection string for MongoDB.
- `JWT_SECRET`: Secret key for JWT authentication.

## Deployment

The backend is deployed on Vercel. To deploy your own version, follow these steps:

1. Install the Vercel CLI:
    ```sh
    npm install -g vercel
    ```

2. Deploy the project:
    ```sh
    vercel
    ```

Follow the prompts to complete the deployment.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a Pull Request.

