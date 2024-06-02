# Payslip Generator

The Payslip Generator is a web application designed to generate monthly payslips for workers. This user-friendly tool streamlines the process of distributing payslips, making it ideal for small businesses and HR departments.

## Features

- Generate monthly payslips
- User authentication (login and registration)
- Contact page for support and inquiries
- Clean and intuitive user interface

## Screenshots

### Home Page
![Home Page](https://raw.githubusercontent.com/OmLandge/Payslip-Generator/master/frontend/public/home.png?token=GHSAT0AAAAAACSQVXXIAGRCOOXOWBKFMOPIZS4DLEQ)

### Dashboard
![Dashboard](https://raw.githubusercontent.com/OmLandge/Payslip-Generator/master/frontend/public/home2.png?token=GHSAT0AAAAAACSQVXXIEBINUPVJFW4QFQIKZS4DO7Q)

### Contact Page
![Contact Page](https://raw.githubusercontent.com/OmLandge/Payslip-Generator/master/frontend/public/contact.png?token=GHSAT0AAAAAACSQVXXIK7KO5R5TEEKGOHBKZS4DPWQ)

### Login Page
![Login Page](https://raw.githubusercontent.com/OmLandge/Payslip-Generator/master/frontend/public/login.png?token=GHSAT0AAAAAACSQVXXJFTGW3P7IUTDYZR6YZS4DQFA)

### Payslip Generation Page
![Payslip Generation Page](https://raw.githubusercontent.com/OmLandge/Payslip-Generator/master/frontend/public/payslipPage.png?token=GHSAT0AAAAAACSQVXXIDFSV2J3J56HL6B5YZS4DQVQ)

### Payslip Preview
![Payslip Preview](https://raw.githubusercontent.com/OmLandge/Payslip-Generator/master/frontend/public/payslip.png?token=GHSAT0AAAAAACSQVXXJJKU52YKNLDEUQSQCZS4DRFA)

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

- Node.js installed on your machine
- Git installed on your machine

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/OmLandge/Payslip-Generator.git
    ```

2. Navigate to the backend directory:

    ```bash
    cd Payslip-Generator/backend
    ```

3. Rename the `.env.example` file to `.env`:

    ```bash
    mv .env.example .env
    ```

4. Update the `.env` file with your configuration settings.

5. Install backend dependencies:

    ```bash
    npm install
    ```

6. Run Prisma migrations:

    ```bash
    npx prisma migrate dev --name init
    ```

7. Generate Prisma client:

    ```bash
    npx prisma generate
    ```

8. Start the backend server:

    ```bash
    npm run dev
    ```

9. Open a new terminal and navigate to the frontend directory:

    ```bash
    cd Payslip-Generator/frontend
    ```

10. Install frontend dependencies:

    ```bash
    npm install
    ```

11. Start the frontend server:

    ```bash
    npm run dev
    ```

## Usage

Once the servers are running, you can access the application by navigating to `http://localhost:5173` in your web browser. From here, you can log in, generate payslips, and manage your account.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Om Landge - [LinkedIn](https://www.linkedin.com/in/om-landge-615073303) - [Email](mailto:omlandge0000@gmail.com)

Project Link: [https://github.com/OmLandge/Payslip-Generator](https://github.com/OmLandge/Payslip-Generator)

---

This README file aims to provide a comprehensive overview of the Payslip Generator project. If you have any questions or feedback, feel free to reach out. Enjoy generating payslips with ease!
