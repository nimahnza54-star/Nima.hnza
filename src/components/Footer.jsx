import React from "react";

function Footer() {
  return (
    <footer className="bg-light border-top mt-5">
      <div className="container py-4">
        <div className="row text-center text-md-start">

          <div className="col-md-4 mb-3">
            <h5>NetChi</h5>
            <p className="text-muted">
              پلتفرم آنلاین خدمات کافی‌نت، سریع و ساده.
            </p>
          </div>

          <div className="col-md-4 mb-3">
            <h6>لینک‌های مفید</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-decoration-none text-muted">خانه</a></li>
              <li><a href="/services" className="text-decoration-none text-muted">خدمات</a></li>
              <li><a href="/about" className="text-decoration-none text-muted">درباره ما</a></li>
            </ul>
          </div>

          <div className="col-md-4 mb-3">
            <h6>تماس با ما</h6>
            <p className="text-muted mb-1">support@netchi.ir</p>
            <p className="text-muted">0912 000 0000</p>
          </div>

        </div>

        <hr />

        <p className="text-center text-muted mb-0">
          © {new Date().getFullYear()} NetChi. همه حقوق محفوظ است.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
