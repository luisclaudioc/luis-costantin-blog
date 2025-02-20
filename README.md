# Blog Application  

This is a **Next.js** blog application built as a test project. It fetches blog posts from an API, uses dynamic routing, and includes features such as dark mode, a search bar, hashtag filtering, and a responsive design with **Tailwind CSS**.  

## 🚀 Getting Started  

### 📌 Installation & Setup  
1. Clone this repository:  
   ```sh
   git clone https://github.com/luisclaudioc/luis-costantin-blog.git
   cd luis-costantin-blog
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
   - 📍 **Deployed on Vercel:** [Vercel Link](https://luis-costantin-blog.vercel.app).

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
 ├── /src               # Source code folder
 │   ├── /components    # Reusable UI components (Navbar, Footer, PostCard, SearchBar, etc.)
 │   ├── /context       # React Context (SearchContext, etc.)
 │   ├── /pages         # Next.js pages (index.tsx, about.tsx, post/[id].tsx)
 │   ├── /styles        # Global CSS and Tailwind configurations
 │   ├── /utils         # Utility functions (Hashtag Generator, Capitalize Title)
 │   ├── /types         # TypeScript types (Post.types.ts, Navbar.types.ts, Search.types.ts.)
 ├── /public            # Static assets
 ├── next.config.js     # Next.js configuration
 ├── tailwind.config.js # Tailwind configuration
 ├── tsconfig.json      # TypeScript configuration
 ├── README.md          # Project documentation
 └── package.json       # Project dependencies
```

---

## 📌 Deployment  
This project is **deployed on Vercel**.  
You can access the live version at: [Vercel Link](https://luis-costantin-blog.vercel.app).

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
👨‍💻 **Luis Costantin**  
📧 **luisclaudioc@hotmail.com**  
🔗 **https://www.luiscostantin.com**  

---

## 🔗 Useful Links  
- [Next.js Documentation](https://nextjs.org/docs)  
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)  

