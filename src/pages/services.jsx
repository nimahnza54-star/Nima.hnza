import React, { useState } from "react";
import ServiceCard from "../components/Servicescard";

const servicesData = [
  { id: 1, name: "پرینت رنگی", category: "پرینت", description: "پرینت با کیفیت بالا" },
  { id: 2, name: "اسکن مدارک", category: "اسکن", description: "اسکن فوری مدارک" },
  { id: 3, name: "کپی سیاه و سفید", category: "پرینت", description: "کپی سریع و مقرون به صرفه" },
  { id: 4, name: "پرینت سیاه و سفید", category: "پرینت", description: "پرینت ارزان و سریع" },
  { id: 5, name: "اسکن رنگی", category: "اسکن", description: "اسکن دقیق و رنگی" },
];

function Services() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  // فیلتر کردن بر اساس جستجو و دسته‌بندی
  const filteredServices = servicesData.filter(
    (s) =>
      s.name.includes(search) &&
      (category === "" || s.category === category)
  );

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">ویترین خدمات</h2>

      {/* بخش جستجو */}
      <div className="row mb-3">
        <div className="col-md-6 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="جستجو بر اساس نام خدمات..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="col-md-6 mb-2">
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">همه دسته‌بندی‌ها</option>
            <option value="پرینت">پرینت</option>
            <option value="اسکن">اسکن</option>
          </select>
        </div>
      </div>

      {/* کارت‌ها */}
      <div className="row">
        {filteredServices.length > 0 ? (
          filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))
        ) : (
          <p className="text-center">هیچ خدماتی پیدا نشد.</p>
        )}
      </div>
    </div>
  );
}

export default Services;
