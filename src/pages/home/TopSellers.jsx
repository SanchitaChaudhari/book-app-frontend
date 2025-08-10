// import React, { useEffect, useState } from 'react'
// import BookCard from '../books/BookCard';
// import { Swiper, SwiperSlide } from 'swiper/react';

// // import required modules
// import { Navigation, Pagination } from 'swiper/modules';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { useFetchALlBooksQuery } from '../../redux/features/books/bookApi';

// const categories =["Choose a genre","Business","Fiction","Horror","Adventure"]

// const TopSellers = () => {
  
//   const[selectedCategory, setSelectedCategory] = useState("Choose a genre");

//   const {data: books = []} = useFetchALlBooksQuery();

//   // useEffect(()=>{
//   //   fetch("books.json")//Sends a request to get the books.json file from the public folder 
//   //   .then(res=>res.json())//Converts the response to JSON format.
//   //   .then((data)=>setBooks(data))//Stores the fetched data in a React state variable called books using a setter function setBooks.
//   // }, [])
//   // The empty [] is the dependency array which tells React not to re-run this effect on updates.

//   const filteredBooks = selectedCategory === "Choose a genre" //Checks if the user has not selected a specific genre yet. This is likely the default option in a dropdown menu.
//   ? books //If the condition is true (i.e., no genre selected), show all books.
//   : books.filter(book => book.category === selectedCategory.toLowerCase());//If a genre is selected, filter the list of books by that genre.

//   return (
//     <div className='py-10'>
//       <h2 className='text-3xl font-semibold mb-6'>Top Sellers</h2>
//       <div className='mb-8 flex items-center'>
//         <select
//         onChange={(e)=> // //event handler. Triggeres whenevre the user changes the value
//           setSelectedCategory(e.target.value)} //Sets the selected value in state when user chooses an option
//         name='category' id='category' className='border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none'>
//           {
//             categories.map((category, index)=>(  //Loops through the array categories and creates one <option> for each item
//               <option key={index} value={category}>{category}</option>
//             ))
//           }
//         </select>
//       </div>
//       <Swiper
//         slidesPerView={1} //Shows 1 slide by default (on very small screens).
//         spaceBetween={30} //Adds 30px space between slides by default.
//        navigation={true} //Enables next/previous arrows.
//         breakpoints={{ //Makes the slider responsive to screen width
//           640: {
//             slidesPerView: 1,
//             spaceBetween: 20,
//           },
//           768: {
//             slidesPerView: 2,
//             spaceBetween: 40,
//           },
//           1024: {
//             slidesPerView: 2,
//             spaceBetween: 50,
//           },
//           1180: {
//             slidesPerView: 3,
//             spaceBetween: 50,
//           }
//         }}
//         modules={[Pagination, Navigation]}
//         className="mySwiper"
//       >
//         {
//         filteredBooks.length > 0 && filteredBooks.map((book, index) =>(
//           <SwiperSlide key={index}>
//             <BookCard  book={book}/></SwiperSlide>
          
//         ))
//       }
        
//       </Swiper>

      
//     </div>
//   )
// }

// export default TopSellers



import React, { useEffect, useState } from 'react'
import BookCard from '../books/BookCard';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useFetchAllBooksQuery } from '../../redux/features/books/bookApi';

const categories = ["Choose a genre", "Business", "Fiction", "Horror", "Adventure"]

const TopSellers = () => {
    
    const [selectedCategory, setSelectedCategory] = useState("Choose a genre");

   const {data: books = []} = useFetchAllBooksQuery();
  
    const filteredBooks = selectedCategory === "Choose a genre" ? books : books.filter(book => book.category === selectedCategory.toLowerCase())

    return (
        <div className='py-10'>
            <h2 className='text-3xl font-semibold mb-6'>Top Sellers</h2>
            {/* category filtering */}
            <div className='mb-8 flex items-center'>
                <select
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    name="category" id="category" className='border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none'>
                    {
                        categories.map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))
                    }
                </select>
            </div>

            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                navigation={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                    1180: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    }
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                {
                   filteredBooks.length > 0 && filteredBooks.map((book, index) => (
                        <SwiperSlide key={index}>
                            <BookCard  book={book} />
                        </SwiperSlide>
                    ))
                }



            </Swiper>


        </div>
    )
}

export default TopSellers