# 🌟 Form Builder – No-Code Dynamic Form Creation App

A powerful **MERN Stack** application that allows admins to create, customize, and manage dynamic forms **without writing any code**.  
Users can fill and submit forms easily, while admins can view and manage responses from a centralized dashboard.

---

## 🚀 Features

### 🔧 Admin Features
- Build customizable forms visually
- Add multiple field types:
  - Text fields
  - Dropdowns
  - Checkboxes
  - Radio buttons
  - Date & time inputs
- Edit, delete, or duplicate forms
- Customize themes, layout, and styling
- Manage multiple forms efficiently

### 📝 User Features
- User-friendly form filling experience
- Fully responsive UI (mobile/tablet/desktop)
- Clean, distraction-free interface

### 📊 Data Management
- Stores all responses securely in MongoDB
- Admin can view submitted data
- Export or analyze responses

---

## 🏗️ Tech Stack

### **Frontend**
- React.js  
- TailwindCSS / Mantine UI  
- Axios  
- @react-oauth/google  
- React Router DOM  

### **Backend**
- Node.js  
- Express.js  
- MongoDB & Mongoose  
- JWT Authentication  
- dotenv  
- Multer (optional for image uploads)

---


---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository


---

## 🔧 Frontend Setup


Create `frontend/.env`:


Restart the frontend after creating `.env`.

---

## 🔧 Backend Setup


Create `backend/.env`:


Start backend server:


---

## 🔐 Authentication Flow

- Google Login is implemented using `@react-oauth/google`
- The frontend decodes Google Credential to:
- Backend generates a **JWT token** and returns it
- Token is stored in browser `localStorage` for authentication

---

3. Commit changes  
4. Push to your fork  
5. Open a pull request  

---

## ⭐ Author

**Vedant Singh**  
MERN Stack Developer  
Email: **vedant9672@gmail.com**




