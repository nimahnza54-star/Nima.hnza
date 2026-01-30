import React from "react";

function About() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">درباره NetChi</h2>

      <p className="text-center mb-5 text-muted">
        NetChi یک پلتفرم ساده و سریع برای دسترسی به خدمات کافی‌نت به‌صورت آنلاین است.
      </p>

      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="card h-100 text-center">
            <div className="card-body">
              <h5 className="card-title">سریع</h5>
              <p className="card-text">
                ثبت درخواست خدمات در کمترین زمان ممکن بدون مراجعه حضوری.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card h-100 text-center">
            <div className="card-body">
              <h5 className="card-title">ساده</h5>
              <p className="card-text">
                رابط کاربری ساده و قابل فهم برای همه کاربران.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card h-100 text-center">
            <div className="card-body">
              <h5 className="card-title">قابل اعتماد</h5>
              <p className="card-text">
                اتصال مستقیم به کافی‌نت‌ها با خدمات استاندارد.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
