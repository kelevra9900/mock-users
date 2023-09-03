# React Native User List App Excercise

This project is a mobile application developed in React Native using Expo, TypeScript, `@react-navigation/native`, and `@tanstack/react-query`. The primary purpose of this application is to serve as a practical exercise for fetching a list of users from an API and displaying a detailed view for the selected users from that list. Additionally, it includes unit tests using Jest to ensure code quality.

## Key Features

- Fetching a user list from an API.
- Detailed view for selected users.
- Optimized state management with `@tanstack/react-query`.
- Unit testing with Jest to maintain code quality.

## Prerequisites

Before you begin working on this project, make sure you have the following prerequisites installed:

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Git](https://git-scm.com/downloads) (optional but recommended)

## Project Setup

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/kelevra9900/mock-users
   ```

2. Navigate to the project folder:

   ```bash
   cd mock-users
   ```

3. Install project dependencies using Yarn:

   ```bash
   yarn install
   ```

## Usage

Once you have set up the project, you can start the application by running the following command:

```bash
yarn start
```

This will open the application in your web browser and generate a QR code that you can scan with the Expo Go app on your mobile device. The application will automatically reload when you make changes to the code.

## Unit Testing

This project includes unit tests to ensure code quality. You can run the tests using the following command:

```bash
yarn test
```

## Why Use React Query?

[React Query](https://react-query.tanstack.com/) is a powerful library that simplifies data fetching and state management in React applications. Here's why we chose to use React Query in this project:

- **Effortless Data Fetching:** React Query provides a declarative and efficient way to fetch data from APIs and manage the cache. It abstracts away the complexities of managing asynchronous data fetching.

- **Automatic Cache Management:** With React Query, data is automatically cached and updated as needed. This ensures that your application remains responsive and efficient, even with complex data fetching requirements.

- **Optimistic Updates:** React Query supports optimistic updates, allowing you to update the UI optimistically while fetching data in the background. This provides a smooth user experience.

- **Server State Synchronization:** React Query can automatically synchronize data with the server in the background, keeping your application's data up-to-date without manual intervention.

- **Query Invalidation and Refetching:** React Query handles query invalidation and refetching, ensuring that your data is always fresh and accurate.

In summary, React Query simplifies data management, improves the user experience, and makes it easier to maintain a consistent and efficient application. It's a valuable addition to any React Native project, especially when dealing with complex data fetching requirements.

## Check out the App

| User List | User Detail |
|-----------|----------------|
| ![](https://github.com/kelevra9900/mock-users/blob/main/assets/screenshots/users1.png) | ![](https://github.com/kelevra9900/mock-users/blob/main/assets/screenshots/user-detail.png) |

## Contributions

Contributions are welcome! If you'd like to contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch for your changes: `git checkout -b my-new-feature`.
3. Make your changes and commit them: `git commit -m "Add my new feature"`.
4. Push your changes to the remote repository: `git push origin my-new-feature`.
5. Create a Pull Request on GitHub.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Enjoy exploring and developing this React Native User List App! If you have any questions or suggestions, feel free to open an issue or get in touch with the development team. Thank you for your interest in this project!
