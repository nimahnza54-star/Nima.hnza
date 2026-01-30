import React from "react";
import ServiceCard from "../components/Servicescard";
import Services from "./services";
function Home() {
 

  return (
    <div>
      {/* بخش Hero */}
      <section className="text-center py-5 bg-light">
        <h1 className="display-5 fw-bold mb-3">به NetChi خوش آمدید</h1>
        <p className="lead mb-4">
          سریع‌ترین و ساده‌ترین پلتفرم خدمات کافی‌نت برای پرینت، اسکن و کپی
        </p>
        <a href="/services" className="btn btn-primary btn-lg">
          شروع کنید
        </a>
      </section>

      {/* بخش Sample Works (نمونه کارها) */}
      <section className="container py-5">
        <h2 className="mb-4 text-center">نمونه خدمات</h2>
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">پرینت رنگی</h5>
                <p className="card-text">پرینت با کیفیت بالا و سریع.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">اسکن مدارک</h5>
                <p className="card-text">اسکن فوری مدارک با کیفیت عالی.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">کپی سیاه و سفید</h5>
                <p className="card-text">کپی سریع و مقرون به صرفه.</p>
              </div>
            </div>
          </div>
           <ServiceCard service={{name: "تست", description: "توضیحات تست", category: "پرینت"}} />
           <Services/>
        </div>
      </section>
    </div>
   

  );
}

export default Home;
