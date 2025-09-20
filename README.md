# 🚗 Car Rental

A modern car rental system with an intuitive interface and convenient functionality for searching, filtering, and booking vehicles.

## 📋 Brief Description

Car Rental is a web application designed to simplify the car rental process. The system provides users with the ability to browse a catalog of available cars, apply filters to search for the right vehicle, view detailed information about each car, and add favorite options to their wishlist.

## ✨ Main Features

### 🏠 Home Page

- Welcoming interface with service presentation
- Quick access to the car catalog

### 🚙 Car Catalog

- **Catalog browsing**: Display of all available cars in card format
- **Smart pagination**: Loading additional cars on demand ("Load more")
- **Detailed information**: Complete information about each car (brand, model, year, price, mileage, type)

### 🔍 Filtering System

- **Filter by brand**: Selection of specific car manufacturer
- **Price category**: Setting maximum rental price per hour
- **Mileage**: Configuring car mileage range (from/to)
- **URL synchronization**: Filters are stored in URL for easy link sharing
- **Persistence**: Filters are preserved when page is refreshed

### ❤️ Favorites System

- **Add/remove**: Ability to add a car to favorites with one click
- **Local storage**: Favorite cars are saved between sessions
- **Visual indicators**: Clear display of favorite car status

### 📱 Responsive Design

- Fully adapted for all device types
- Optimized user experience on mobile devices and tablets

### 📅 Booking System

- **Date selection**: Intuitive calendar for selecting rental date
- **Validation**: Prevents selection of past dates
- **Formatting**: Date display in convenient format (dd.mm.yyyy)

## 🛠 Technologies

**Frontend:**

- **React 18** - Modern library for building user interfaces
- **Redux Toolkit** - Application state management
- **Redux Persist** - State persistence between sessions
- **React Router** - Application routing
- **MUI X Date Pickers** - Components for working with dates
- **CSS Modules** - Modular component styling
- **Axios** - HTTP client for API requests
- **Clsx** - Utility for conditional CSS classes

**Additional Tools:**

- **Vercel** - Hosting and deployment
- **Git** - Version control

## 🚀 Installation and Setup

### System Requirements

- Node.js (version 16.0 or higher)
- npm or yarn

### Installation Steps

1. **Clone the repository**

```bash
git clone https://github.com/tymur-lykho/rental-tz.git
cd rental-tz
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Run in development mode**

```bash
npm run dev
# or
yarn run dev
```

The application will be available at `http://localhost:3000`

### 🏗 Production Build

```bash
npm run build
# or
yarn build
```

## 📖 Usage

1. **Browse catalog**: Navigate to the "Catalog" section to view all available cars

2. **Apply filters**:

   - Select car brand from dropdown list
   - Set maximum rental price
   - Specify desired mileage range
   - Click "Search" to apply filters

3. **Add to favorites**: Click the heart icon on the car card

4. **View details**: Click on the image or car name to view detailed information

5. **Share filters**: Copy the page URL with applied filters to share with others

## 🌟 Project Features

- **Optimized performance**: Lazy loading and optimized API requests
- **SEO-friendly**: Proper URL structure and metadata
- **Accessibility**: Adherence to web accessibility standards
- **Modular architecture**: Easily extensible code structure
- **Type Safety**: Using modern development practices

## 🤝 Contributing to the Project

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is distributed under the MIT License. See the `LICENSE` file for additional information.

## 👨‍💻 Author

**Tymur Lykho**

- GitHub: [@tymur-lykho](https://github.com/tymur-lykho)
- Email: tima.likho@gmail.com
- LinkedIn: [Tymur Lykho](https://linkedin.com/in/tymur-lykho)

## 🙏 Acknowledgments

- The React team for the excellent library
- The Redux community for powerful state management tools
- All contributors who helped improve the project

---

⭐ If you liked the project, please give it a star on GitHub!

## 📸 Screenshots

### Home Page

![Home Page](screenshots/home.png)

### Catalog with Filters

![Catalog with Filters](screenshots/catalog.png)

### Car Details

![Car Details](screenshots/car-details.png)

---

**Live Demo**: [https://rental-tz-git-main-tymur-lykhos-projects.vercel.app/](https://rental-tz-git-main-tymur-lykhos-projects.vercel.app/)
