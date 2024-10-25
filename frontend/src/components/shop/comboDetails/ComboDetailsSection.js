import React, { Fragment, useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getComboById, getPaymentLink } from "../../admin/combos/FecthApi";
import { LayoutContext } from "../layout";

const ComboDetailsSection = () => {
  let { id } = useParams();
  const [detailCombo, setDetailCombo] = useState();
  const [quantity, setQuantity] = useState(1);
  const { data: layoutData, dispatch: layoutDispatch } = useContext(LayoutContext);

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    try {
      const res = await getComboById(id);
      setDetailCombo(res);
    } catch (error) {
      console.error("Error fetching combo data:", error);
    }
  };

  const handleCheckout = async () => {
    const orderData = {
      amountTotal: detailCombo.comboPrice * quantity, // Total amount
      address: "User Address", // You can get this from form/input
      phone: "User Phone", // Get from form/input
    };

    try {
      // Call the backend to generate the payment link
      const paymentUrl = await getPaymentLink(orderData);
      // Redirect to the payment page
      window.location.href = paymentUrl;
    } catch (error) {
      console.error("Checkout failed:", error);
    }
  };

  return (
    <Fragment>
      <section className="p-20 m-4 md:mx-12 md:my-6 bg-product-detail">
        <div className="grid grid-cols-2 md:grid-cols-12">
          <div className="col-span-2 mt-8 md:mt-0 md:col-span-4 md:ml-6 lg:ml-12">
            <div className="flex flex-col leading-8">
              <div className="text-2xl tracking-wider">
                {detailCombo?.comboName}
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xl tracking-wider text-yellow-700">
                  {detailCombo?.comboPrice * quantity}₫
                </span>
              </div>
            </div>
            <div className="my-4 md:my-6 text-gray-600">
              {detailCombo?.comboDescription}
            </div>
            <div className="my-4 md:my-6">
              <div className="flex justify-between items-center px-4 py-2 border">
                <div>Quantity</div>
                <div className="flex items-center">
                  <button
                    className="px-2 py-1 border border-gray-300"
                    onClick={() =>
                      setQuantity(quantity > 1 ? quantity - 1 : 1)
                    }
                  >
                    -
                  </button>
                  <span className="px-4">{quantity}</span>
                  <button
                    className="px-2 py-1 border border-gray-300"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <Fragment>
                <div
                  onClick={handleCheckout} // Call the checkout handler
                  style={{ background: "#303031" }}
                  className="px-4 py-2 text-white text-center cursor-pointer uppercase"
                >
                  Check out
                </div>
              </Fragment>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ComboDetailsSection;
