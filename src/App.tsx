import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { Company } from "./components/Company";
import { PostClient } from "./components/PostClient";
import {QualityServe} from "./components/QualityServe";
import { Offers } from "./components/Offers";
import { Product } from "./components/Product";
import { Testimonial } from "./components/Testimonial";
import { Contact } from "./components/Contact";
import {Footer} from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header/>
      <Banner/>
      <Company />
      <PostClient/>
      <QualityServe/>
      <Offers/>
      <Product/>
      <Testimonial/>
      <Contact/>
      <Footer/>
      
    </>
  );
}

export { App };
