import React from "react";

function Login() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="text-center mb-4">ورود / ثبت‌نام</h3>

              <form>
                <div className="mb-3">
                  <label className="form-label">شماره موبایل</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="مثلاً 09123456789"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">رمز عبور</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="********"
                  />
                </div>

                <button type="submit" className="btn btn-success w-100">
                  ورود
                </button>
              </form>

              <p className="text-center mt-3 text-muted">
                حساب کاربری ندارید؟ ثبت‌نام کنید
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
