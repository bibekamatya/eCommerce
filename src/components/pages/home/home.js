import { useContext } from "react";
import { ProductContext } from "../../Global/productContext";
import Footer from "../../footer/footer";
import Navbar from "../../navbar/navbar";
import HomeChild from "./home-child";
import { useState } from "react";

const Home = (props) => {
  const data = useContext(ProductContext);

  const [slider, setslider] = useState(false);

  return (
    <>
      <Navbar />
      <div
        className='container page-body product'
        style={{ minHeight: "70vh" }}
      >
        {/* ****************************switch-start******************************** */}

        <div className='home-page-slider'>
          <input
            id='switch-flat'
            className='switch switch--flat'
            type='checkbox'
            onChange={() => {
              setslider(!slider);
            }}
          />
          <label htmlFor='switch-flat'></label>
        </div>

        {/* *******************************switch-end******************************* */}
        <div className='row pt-3'>
          {data.Products.map((product, index) => {
            return (
              <HomeChild
                title={product.title}
                id={product.id}
                image={product.image}
                category={product.category}
                price={product.price}
                description={product.description}
                product={product}
                slider={slider}
                key={index}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
