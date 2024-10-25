import React, { Fragment, useContext } from "react";
import ProductCategoryDropdown from "./ProductCategoryDropdown";
import { HomeContext } from "./index";

const IntroduceAboutShop = (props) => {
  const { data, dispatch } = useContext(HomeContext);

  return (
    <Fragment>
      <section className="">
        <div className=" about-shop">
          <h3 className="hearder-about-shop text-center">
            𝐖𝐄𝐋𝐂𝐎𝐌𝐄 𝐓𝐎 𝐎𝐔𝐑 𝐒𝐓𝐎𝐑𝐄
          </h3>
          <div className="sub-title-about-shop text-center mt-2 mb-2">
          𝓣𝓱𝓮 𝓹𝓻𝓸𝓭𝓾𝓬𝓽 𝓲𝓼 𝓬𝓻𝓪𝓯𝓽𝓮𝓭 𝓮𝓷𝓽𝓲𝓻𝓮𝓵𝔂 𝓯𝓻𝓸𝓶 𝓷𝓪𝓽𝓾𝓻𝓪𝓵 𝓶𝓪𝓽𝓮𝓻𝓲𝓪𝓵𝓼, 
          <br/>
          𝓭𝓮𝓼𝓲𝓰𝓷𝓮𝓭 𝓽𝓸 𝓫𝓮 𝓫𝓸𝓽𝓱 𝓾𝓼𝓮𝓻-𝓯𝓻𝓲𝓮𝓷𝓭𝓵𝔂 𝓪𝓷𝓭 𝓱𝓲𝓰𝓱𝓵𝔂 𝓮𝓯𝓯𝓮𝓬𝓽𝓲𝓿𝓮 𝓲𝓷 𝓹𝓻𝓸𝓿𝓲𝓭𝓲𝓷𝓰 𝓹𝓻𝓸𝓽𝓮𝓬𝓽𝓲𝓸𝓷 𝓪𝓰𝓪𝓲𝓷𝓼𝓽 𝓼𝓾𝓷 𝓪𝓷𝓭 𝓻𝓪𝓲𝓷, 
          <br/>
          𝓮𝓷𝓼𝓾𝓻𝓲𝓷𝓰 𝓪 𝓬𝓸𝓶𝓯𝓸𝓻𝓽𝓪𝓫𝓵𝓮 𝓪𝓷𝓭 𝓮𝓷𝓳𝓸𝔂𝓪𝓫𝓵𝓮 𝓸𝓾𝓽𝓭𝓸𝓸𝓻 𝓮𝔁𝓹𝓮𝓻𝓲𝓮𝓷𝓬𝓮.
          <br/>
          </div>
          {/*  */}
        </div>
      </section>
    </Fragment>
  );
};

export default IntroduceAboutShop;
