# Blog Application  

This is a **Next.js** blog application built as a test project. It fetches blog posts from an API, uses dynamic routing, and includes features such as dark mode, a search bar, hashtag filtering, and a responsive design with **Tailwind CSS**.  

## 🚀 Getting Started  

### 📌 Installation & Setup  
1. Clone this repository:  
   ```sh
   git clone <your-repo-url>
   cd <your-repo-folder>
   ```  
2. Install dependencies:  
   ```sh
   npm install
   ```  
3. Run the development server:  
   ```sh
   npm run dev
   ```  
4. Open your browser and go to:  
   - 📍 **Localhost:** `http://localhost:3000`  
   - 📍 **Deployed on Vercel:** [Your Vercel Link]  

---

## 📌 Features & Implementation  

### 1️⃣ Blog Posts (Fetched via `getStaticProps`)  
- Posts are fetched from [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts).  
- Static generation (`getStaticProps` & `getStaticPaths`) is used to improve performance.  
- Each post has a **title, body, author ID, and hashtags**.  

### 2️⃣ Dark Mode Toggle 🌙  
- Implemented using **React state and Tailwind CSS**.  
- Users can toggle between **light** and **dark mode** for better accessibility.  

### 3️⃣ Search Functionality (Title-Based) 🔍  
- A **search bar in the navbar** filters posts dynamically based on the title.  
- **Debounced input** ensures smooth performance.  

### 4️⃣ Hashtag Filtering #️⃣  
- Hashtags are **generated dynamically** from the post title.  
- Clicking on a hashtag filters posts containing that tag.  
- **Clear Filter Button** resets the search.  

### 5️⃣ Responsive Design 📱  
- Uses **Tailwind CSS** for styling.  
- Fully responsive on **mobile, tablet, and desktop**.  

---

## 📂 Project Structure  
```
/blog-app
 ├── /components        # Reusable UI components (Navbar, Footer, PostCard, SearchBar, etc.)
 ├── /pages             # Next.js pages (index.tsx, about.tsx, post/[id].tsx)
 ├── /styles           # Global CSS and Tailwind configurations
 ├── /utils            # Utility functions (Hashtag Generator)
 ├── /public           # Static assets
 ├── next.config.js    # Next.js configuration
 ├── tailwind.config.js # Tailwind configuration
 ├── tsconfig.json     # TypeScript configuration
 ├── README.md         # Project documentation
 └── package.json      # Project dependencies
```

---

## 📌 Deployment  
This project is **deployed on Vercel**.  
You can access the live version at: [Your Vercel Deployment Link]  

---

## 📌 Technologies Used  
- **Next.js** (Pages Router)  
- **TypeScript**  
- **Tailwind CSS**  
- **Vercel (Deployment)**  

---

## 📌 How to Contribute  
If you'd like to improve this project, follow these steps:  
1. Fork the repository.  
2. Create a new branch:  
   ```sh
   git checkout -b feature-branch
   ```  
3. Make changes and commit:  
   ```sh
   git commit -m "Added new feature"
   ```  
4. Push to GitHub and create a Pull Request.  

---

## 📌 Author & Contact  
👨‍💻 **Your Name**  
📧 **Your Email (Optional)**  
🔗 **[Your Portfolio or GitHub Link]**  

---

## 🔗 Useful Links  
- [Next.js Documentation](https://nextjs.org/docs)  
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)  

---

✅ **Now Your README is Ready!** 🎉

