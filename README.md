
# ⛑️ Pharmasia :  A Fronend-Focused Nextjs Pharmaceutical E-commerce platform

Pharmasia  is a responsive e-commerce website that showcases my frontend development skills while also incorporating some backend functionality. This project demonstrates my ability to create intuitive user interfaces, implement responsive designs, and integrate with backend services.

## ✨ Key Features

- Responsive design for seamless shopping on all devices
- Interactive product catalog with dynamic filtering and sorting
- User-friendly shopping cart with real-time updates
- Streamlined checkout process with form validation
- User authentication and profile management
- Dynamic notifications  and alerts for wisthlist, cart and orders

## Technologies Used

- **Frontend:** Next.js, TypeScript, ReactJs
- **Styling:** Tailwind CSS, ShadCn, React Icons, React Hot Toast, React Loader Spinner
- **State Management:** Redux Toolkit
- **Data Fetching:** RTK Query
- **Authentication:** Firebase Auth
- **Ui Components:** ShadCn 
- **Hosting:** Vercel 
- **Backend:** Node.js, Express, MongoDB 

## Features & Functionalities
### Admin role
- **Product Management:** Add, edit, delete products with dynamic filtering and sorting
- **User Management:** Delete user, block, unblock or change their role
- **Order Management:** View, cancel, and update orders for every user with dynamic filtering and sorting

### User role
- User can add new product to cart, also user can remove and edit their cart
- User can view their orders, also user can cancel and update their orders with dynamic filtering and sorting
- user can view their wishlist, also user can add and remove items from their wishlist



## Installation

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Rename `env.example` to `.env`.
4. Run the server using `npm run dev`.

## Configuration

### Environment Variables

- `NEXT_PUBLIC_GITHUB_ID`: GitHub client ID.
- `NEXT_PUBLIC_GITHUB_SECRET`: GitHub client secret.
- `NEXT_PUBLIC_GOOGLE_ID`: Google client ID.
- `NEXT_PUBLIC_GOOGLE_SECRET`: Google client secret.
- `NEXT_PUBLIC_SECRET`: Any secret key for enabling popup login page for Google/GitHub authentication.
- `NEXT_PUBLIC_CLIENT_SITE_URL`: Callback URL for automatic redirecting after login with Google/GitHub or email.
- `NEXT_PUBLIC_BACKEND_URL`: Backend URL to access MongoDB data with Express.js.

## Dependencies

- `cors`: Express middleware for enabling CORS.
- `dotenv`: Loads environment variables from `.env` file for the backened code .
- `express`: Web framework for Node.js.
- `mongodb`: MongoDB driver for Node.js.
- `nodemon`: Utility for automatically restarting the server during development.

### Live Site

Live site: [here](https://pharmasia.vercel.app/).

### GitHub Repository

- Client: [here](https://github.com/rasel-gannicus/Pharmasia).
- Server: [here](https://github.com/rasel-gannicus/server-for-pharmasia).

## 💻 Usage

After starting the development server, open your browser and visit `http://localhost:3000`. You can browse products, add items to your cart, and go through the checkout process.

To test the payment functionality, use Stripe's test card numbers or you don't have to use any method. Just click 'Pay Now' or 'Pay Later' button.
- Card number: 4242 4242 4242 4242
- Expiry date: Any future date
- CVC: Any 3 digits

## 🔮 Future Improvements

- Implement advanced search functionality with autocomplete
- Enhance accessibility features
- Implement lazy loading for improved performance
- Add more interactive animations and transitions

## 🌱 Developer's Note

As a junior frontend developer, this project represents my journey in learning and applying modern web development techniques. While the project includes some backend functionality, my primary focus and strengths lie in frontend development. I'm continuously working on improving my skills and would welcome any feedback or suggestions for enhancing the user interface and experience of this application.

## 📬 Contact

If you have any questions or would like to discuss this project, please feel free to reach out to me at [shafikrasel5@gmail.com](mailto:shafikrasel5@gmail.com).

Thank you for checking out Pharmasia! 🚀

### Previews 


*Manage orders from Admin panel*
![Manage orders from Admin panel](https://github.com/rasel-gannicus/Pharmasia/blob/main/src/assets/for%20hosting/admin%20manage%20orders.png?raw=true)

*Manage Products from Admin panel*
![Manage Products from Admin panel](https://github.com/rasel-gannicus/Pharmasia/blob/main/src/assets/for%20hosting/admin%20manage%20products.png?raw=true)

*Manage Users from Admin panel*
![Manage Users from Admin panel](https://github.com/rasel-gannicus/Pharmasia/blob/main/src/assets/for%20hosting/admin%20manage%20users.png?raw=true)


*Home Page*
![Home Page](https://github.com/rasel-gannicus/Pharmasia/blob/main/src/assets/for%20hosting/Home%20page%20main.png?raw=true)

*User Profile Dashboard*
![user dashboard](https://i.ibb.co.com/sHN6fqH/user-dashboard.png)

*User Cart*
![user cart](https://raw.githubusercontent.com/rasel-gannicus/Pharmasia/refs/heads/main/src/assets/for%20hosting/user%20cart.png)

*User Order Inventory*
![user order inventory](https://raw.githubusercontent.com/rasel-gannicus/Pharmasia/refs/heads/main/src/assets/for%20hosting/user%20order%20inventory.png)

*User Wishlist Page*
![User Wishlist Page](https://github.com/rasel-gannicus/Pharmasia/blob/main/src/assets/for%20hosting/user%20wishlist.png?raw=true)

*Checkout & Billing Page*
![Checkout & Billing Page](https://github.com/rasel-gannicus/Pharmasia/blob/main/src/assets/for%20hosting/user%20billing%20&%20shipping%20address%20page.png?raw=true)

*Flash Sale Page*
![Flash Sale Page](https://github.com/rasel-gannicus/Pharmasia/blob/main/src/assets/for%20hosting/flash%20sale%20page.png?raw=true)

