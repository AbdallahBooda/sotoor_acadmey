import React from "react";
import "../style/Ecommerce_style.css";
import { Link } from "react-router-dom";

const PDFs_Ecommerce = () => {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 col-sm-8">
          <div className="card m-5 shadow">
            <div className="card-body">
              <div className="image">
                <Link to="https://sotooracademy.com/item-detail/%D8%AE%D8%B7%D8%A9-%D8%B4%D8%A7%D9%85%D9%84%D8%A9-%D9%84%D9%84%D9%82%D8%AF%D8%B1%D8%A7%D8%AA">
                  <img
                    src="https://sotooracademy.com/public/data/items/study_plan.jpg"
                    alt=""
                    className="img_style"
                  />
                </Link>
              </div>
              <hr />
              <div className="text-center">
                <h3 className="bold"> خطة شاملة للقدرات</h3>
                <p>كمي ولفظي تأسيس وتجميعات وملخصات</p>
                <h4 className="mt-3">
                  <del className="text-danger bold">394</del> 187 ر.س
                </h4>
                <div className="text-center m-4">
                  <Link
                    to="https://sotooracademy.com/cartSession/1"
                    className="to_cart "
                  >
                    <i className="fa fa-shopping-cart"></i> | أضف للسلة{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-8">
          <div className="card m-5 shadow">
            <div className="card-body">
              <div className="image">
                <Link to="https://sotooracademy.com/item-detail/%D9%85%D9%84%D8%AE%D8%B5-%D8%A7%D9%84%D9%83%D9%85%D9%8A">
                  <img
                    src="https://sotooracademy.com/public/data/items/quantum_book_cover.jpg"
                    alt=""
                    className="img_style"
                  />
                </Link>
              </div>
              <hr />
              <div className="text-center">
                <h3 className="bold"> ملخص الكمي</h3>
                <p>ملخص لكل قوانين القسم الكمي</p>
                <h4 className="mt-3">49 ر.س</h4>
              </div>
              <div className="text-center m-4">
                <Link
                  to="https://sotooracademy.com/cartSession/1"
                  className="to_cart "
                >
                  <i className="fa fa-shopping-cart"></i> | أضف للسلة
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

        <div className="row justify-content-center mt-5 mb-3">
          <div className="col-lg-7">
            <img
              src="https://sotooracademy.com/public/sotoor_ecommerce_assets/images/bg4.png"
              className="img-fluid img_pdf_style"
            />
            <h1 className="d_h">jgjyhgbjkbh</h1>
          </div>
        </div>
    </>
  );
};

export default PDFs_Ecommerce;
