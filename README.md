# Full-Stack JS engineer test assessment - the Country Info App

This documentation provides detailed instructions for completing the test assessment, which involves building two small applications to provide information about countries. The application includes a Backend (BE) built with Node.js (Nest or Express) and a Frontend (FE) built with React (Next.js is a plus).

## Project Overview

### Backend:

**Tech Stack:**

- Node.js (Nest.js or Express.js)
- Typescript

**Tasks:**

1. **Endpoint: Get Available Countries**
    - Create an API endpoint, using Date Nager API `https://date.nager.at/api/v3/AvailableCountries`
    - This endpoint should return a list of available countries.
2. **Endpoint: Get Country Info**
    - Create an API endpoint to retrieve detailed information about a specific country.
    - This endpoint should provide the following data:
    a. **List of Border Countries**: A list of countries that share a border with the selected country `https://date.nager.at/api/v3/CountryInfo/UA`
    b. **Population Data**: Historical population data for the country, suitable for plotting on a chart `https://countriesnow.space/api/v0.1/countries/population`
    c. **Flag URL**: A URL to the country’s flag image `https://countriesnow.space/api/v0.1/countries/flag/images`

### Front-end:

**Tech Stack:**

- React.js
- Typescript
- Next.js (preferred but not mandatory)

**Tasks:**

1. **Country List Page**
    - Display a list of countries fetched from the endpoint.
    - Each country name should be clickable and navigate the user to the Country Info Page.
2. **Country Info Page**
    - Display detailed information about the selected country, including:
        - **Country Name**: Displayed prominently at the top.
        - **Country Flag**: Displayed alongside the country name using the URL fetched from the backend.
    - **Border Countries Widget**:
        - Show a list of countries that border the selected country.
        - Each border country name should be clickable and navigate the user to the corresponding Country Info Page.
    - **Population Chart**:
        - Implement a chart that shows the country’s population over time.
        - The X-axis should represent years, and the Y-axis should represent the population.

### Additional Requirements

1. **Styling**:
    - You can use any CSS framework or custom styles to design the components.
    - Ensure that the UI is responsive and user-friendly.
2. **Environment Variables**:
    - Create a `.env` file to store sensitive data such as API keys and base URLs.
    - Ensure that environment variables are loaded and used securely in the application.
    - Add `.env` to the repository.
3. **Code Quality**:
    - Set up ESLint and Prettier to ensure consistent code formatting and quality.
    - Ensure that all files are properly linted and formatted before submission.
4. **Documentation**:
    - Include a `README.md` file that provides instructions on how to install, run, and test the application.
    - Include any necessary setup steps, such as installing dependencies or configuring environment variables.

### API Documentation

- **Country List API**: [Nager.Date API Documentation](https://date.nager.at/swagger/index.html)
- **Country Info API**: [Postman Country Info API Documentation](https://documenter.getpostman.com/view/1134062/T1LJjU52)

### Additional Instructions

We will be testing your application locally. Please ensure the following:

- **Separate Folders**: Place the frontend (FE) and backend (BE) code in separate folders within the root directory. Do not create a monorepo structure.
- **Parallel Execution**: Ensure that both the frontend and backend can be run simultaneously on different ports. The frontend should be able to communicate with the backend without any issues.
- **Instructions for Running**: Provide clear instructions in the `README.md` file on how to start both the frontend and backend servers, including any necessary environment variables or configurations.

By following these instructions, we will be able to test your application smoothly and verify that both parts work together as expected.

## Project Configuration

This project consists of a backend and a frontend with various environment variables for configuration. Below is an explanation of each variable in the `.env` files for both the backend and frontend.

### Backend Environment Configuration

#### Server Configuration

- `PORT` (default: `3001`): The port on which the application will run.
- `API_BASE_PATH` (default: `/api/v1`): The base path for the API endpoints.
- `COUNTRY_API_BASE_URL`: https://date.nager.at/api/v3
- `POPULATION_API_BASE_URL`: https://countriesnow.space/api/v0.1/countries/population
- `FLAG_API_BASE_URL`: https://countriesnow.space/api/v0.1/countries/flag/images

### Frontend Environment Configuration

#### API URL Configuration

- `VITE_BASE_URL`: The base URL for API requests from the frontend. Default is `http://localhost:3001/api/v1`.

## Running the server

### Installation first time only!

```bash
# create .env file and define all environment variables

# install the dependencies
$ npm install

# start the application
$ npm run start dev
```

## Running the client

### Installation first time only!

```bash
# create .env file and define all environment variables

# install the dependencies
$ npm install

# start the application
$ npm run dev
```

## Shutdown

```bash
# stop the app in the terminal where it is running
$ CTRL + C