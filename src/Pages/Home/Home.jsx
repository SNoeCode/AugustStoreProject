import React from "react";
import "./Home.css";
import { getProducts } from "../../config/api";
import Footer from "../../Components/Footer/Footer";
import { useState, useEffect } from "react";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useNavigate, useParams } from "react-router-dom";
import CategoriesPage from "../CategoriesPage/CategoriesPage";

// const Home = () => {
//   const navigate = useNavigate();
//   const [products, setProducts] = useState([]);

//   const navigateToNewPage = (id) => {
//     navigate(`/product-detail/${id}`);
//   };

//   useEffect(() => {
//     getProducts().then((res) => {
//       setProducts(res.data);
//     });
//   }, []);

//   return (
//     <>
//       <div className="home-page">
//         <div className="banner">
//           <h1>Welcome to Our Online Store</h1>
//           <p>Find the best products here</p>
//         </div>
//       </div>

//       <div className="container">
//         {products.map((item) => (
//           <div
//             key={item.id}
//             className="card"
//             onClick={() => {
//               navigateToNewPage(item.id);
//             }}
//           >
//             <h1>{item.title}</h1>
//             <img src={item.image} alt={item.title} className="img" />
//             <h2>Price: ${item.price}</h2>
//             <div className="rating-container">
//               <Box sx={{ "& > legend": { mt: 2 } }}>
//                 <Typography component="legend">Product Rating</Typography>
//                 <Rating
//                   name="read-only"
//                   value={item.rating.rate}
//                   size="small"
//                   readOnly
//                 />
//               </Box>
//             </div>

//             <button className="more-details-button">More Details</button>
//           </div>
//         ))}
//       </div>
//       {/* </div> */}
//       {/* </div> */}

//       {/* <Footer /> */}
//     </>
//   );
// };

// export default Home;

// const Home = () => {
//   const navigate = useNavigate();
//   const [products, setProducts] = useState([]);

//   const navigateToNewPage = (id) => {
//     navigate(`/product-detail/${id}`);
//   };

//   useEffect(() => {
//     getProducts().then((res) => {
//       setProducts(res.data);
//     });
//   }, []);

//   return (
//     <>
//       <div className="home-page">
//         <div className="banner">
//           <h1>Welcome to Our Online Store</h1>
//           <p>Find the best products here</p>
//         </div>
//       </div>

//       <div className="container">
//         {products.map((item) => (
//           <div
//             key={item.id}
//             className="card"
//             onClick={() => {
//               navigateToNewPage(item.id);
//             }}
//           >
//             <h1>{item.title}</h1>
//             <img src={item.image} alt={item.title} className="img" />
//             <h2>Price: ${item.price}</h2>
//             <div className="rating-container">
//               <Box sx={{ "& > legend": { mt: 2 } }}>
//                 <Typography component="legend">Product Rating</Typography>
//                 <Rating
//                   name="read-only"
//                   value={item.rating.rate}
//                   size="small"
//                   readOnly
//                 />
//               </Box>
//             </div>

//             <button className="more-details-button">More Details</button>
//           </div>
//         ))}
//       </div>
//       {/* </div> */}
//       {/* </div> */}

//       <Footer />
//     </>
//   );
// };

// export default Home;
const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const navigateToNewPage = (id) => {
    navigate(`/product-detail/${id}`);
  };

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <>
      <div className="home-page">
        <div className="banner">
          <h1>Welcome to Our Online Store</h1>
          <p>Find the best products here</p>
        </div>
      </div>

      <div className="container">
        {products.map((item) => (
          <div
            key={item.id}
            className="card"
            onClick={() => {
              navigateToNewPage(item.id);
            }}
          >
            <h1>{item.title}</h1>
            <img src={item.image} alt={item.title} className="img" />
            <h2>
              <b>Price: ${item.price}</b>
            </h2>
            <div className="rating-container">
              <Box sx={{ "& > legend": { mt: 2 } }}>
                <Typography component="legend">Product Rating</Typography>
                <Rating
                  name="read-only"
                  value={item.rating.rate}
                  size="small"
                  readOnly
                />
              </Box>
            </div>
            <div class="container">
              <div class="button button-1">More Details</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
