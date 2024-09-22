import React from 'react';
   import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
   import { Home } from './components/Home';
   import { Committee } from './components/Committee';
   import { Blogs } from './components/Blogs';
   import { Contact } from './components/Contact';
   import { Footer } from './components/Footer';

   const App = () => {
     return (
       <Router>
         <div className="flex flex-col min-h-screen">
           <nav className="bg-blue-600 p-4">
             <ul className="flex justify-center space-x-4">
               <li><Link to="/" className="text-white hover:underline">Home</Link></li>
               <li><Link to="/committee" className="text-white hover:underline">Committee</Link></li>
               <li><Link to="/blogs" className="text-white hover:underline">Blogs</Link></li>
               <li><Link to="/contact" className="text-white hover:underline">Contact</Link></li>
             </ul>
           </nav>

           <main className="flex-grow container mx-auto px-4 py-8">
             <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/committee" element={<Committee />} />
               <Route path="/blogs" element={<Blogs />} />
               <Route path="/contact" element={<Contact />} />
             </Routes>
           </main>

           <Footer />
         </div>
       </Router>
     );
   };

   export default App;