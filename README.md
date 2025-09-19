# Kekal - Next.js Motorcycle Ecommerce Template

A modern, responsive Next.js ecommerce template specifically designed for motorcycle dealerships and automotive businesses. Built for "Perniagaan Motor Kekal" - a leading motorcycle dealer in Johor Bahru, Malaysia.

## 🏍️ Features

### Core Functionality

- **Motorcycle Listings**: Browse and filter motorcycles by brand, price, and other criteria
- **Advanced Search & Filtering**: Multi-parameter search with sorting options
- **Individual Product Pages**: Detailed motorcycle specifications and images
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **SEO Optimized**: Built-in SEO features with proper meta tags and structured data

### Business Features

- **Featured Listings**: Highlight premium motorcycles on the homepage
- **Brand Management**: Support for multiple motorcycle brands (Yamaha, Kawasaki, etc.)
- **Price Filtering**: Filter by price ranges (Under RM2K, RM2K-5K, RM5K-10K, etc.)
- **Testimonials**: Customer review section
- **Contact & Service Pages**: Business information and service offerings
- **Loan Calculator**: Built-in financing calculator for customers

## 🚀 Quick Start

### Prerequisites

- Node.js 16.x or higher
- npm or yarn package manager
- Firebase account (for database functionality)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/kekal.git
   cd kekal
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Technologies Used

### Frontend

- **Next.js 13.4.5** - React framework with App Router
- **React 18.2.0** - UI library
- **Bootstrap 5.2.3** - CSS framework
- **Ant Design 5.11.4** - UI component library
- **SCSS/Sass** - CSS preprocessor
- **Styled Components** - CSS-in-JS styling

### Backend & Database

- **Firebase 10.1.0** - Backend-as-a-Service
- **Firestore** - NoSQL database
- **Firebase Admin** - Server-side Firebase SDK

### Development Tools

- **ESLint** - Code linting
- **Babel** - JavaScript compiler
- **ExcelJS** - Excel file processing

## 📊 Data Management

### Adding Motorcycles

Use the utility scripts in `/utils/scripts/`:

- `uploadFirebase.py` - Bulk upload motorcycle data
- `getMotorCycleData.py` - Scrape motorcycle information
- `process.js` - Process and format data

### Database Schema

Motorcycles are stored in Firestore with the following structure:

```javascript
{
  id: "unique_id",
  brand: "Yamaha",
  model: "LC135",
  price: 5000,
  year: 2023,
  mileage: "10,000 km",
  images: ["url1", "url2"],
  description: "Motorcycle description",
  // ... other fields
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- Built for Perniagaan Motor Kekal, Johor Bahru
- Inspired by modern automotive websites
- Thanks to the Next.js and React communities
