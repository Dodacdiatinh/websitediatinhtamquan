export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* MENU ĐIỀU HƯỚNG */}
      <nav className="sticky top-0 z-50 border-b bg-white shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

          <a
            href="#trang-chu"
            className="text-lg font-bold text-gray-900"
          >
            ĐỊA TĨNH TAM QUAN
          </a>

          <div className="flex flex-wrap items-center gap-5">
            <a href="#gioi-thieu" className="font-medium text-gray-700 hover:text-red-600">
              Giới thiệu
            </a>

            <a href="#dich-vu" className="font-medium text-gray-700 hover:text-red-600">
              Dịch vụ
            </a>

            <a href="#quy-trinh" className="font-medium text-gray-700 hover:text-red-600">
              Quy trình
            </a>

            <a href="#du-an" className="font-medium text-gray-700 hover:text-red-600">
              Dự án
            </a>

            <a
              href="#lien-he"
              className="rounded-lg bg-red-600 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              Liên hệ
            </a>
          </div>

        </div>
      </nav>
      {/* BANNER */}
      <img
        src="/banner.jpg"
        alt="Công ty Địa Tĩnh Tam Quan"
        className="w-full h-auto block"
      />

      {/* GIỚI THIỆU */}
      <section id="gioi-thieu" className="px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">

          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
              Về chúng tôi
            </p>

            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Giới thiệu Công ty Địa Tĩnh Tam Quan
            </h2>

            <div className="mx-auto mt-4 h-1 w-20 rounded bg-blue-700" />
          </div>

          <div className="grid gap-10 md:grid-cols-2 md:items-center">

            <div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Đo đạc chính xác – Hồ sơ chuyên nghiệp
              </h3>

              <p className="mb-4 leading-7 text-gray-600">
                Công ty Địa Tĩnh Tam Quan cung cấp các dịch vụ đo đạc địa chính,
                khảo sát địa hình và hỗ trợ hồ sơ đất đai với phương châm
                chính xác, uy tín và chuyên nghiệp.
              </p>

              <p className="leading-7 text-gray-600">
                Chúng tôi hướng đến việc cung cấp giải pháp đo đạc và hồ sơ
                phù hợp với nhu cầu của khách hàng, góp phần giúp quá trình
                thực hiện thủ tục liên quan đến đất đai thuận lợi và rõ ràng.
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-8 shadow-sm">
              <h3 className="mb-5 text-xl font-bold text-gray-900">
                Địa Tĩnh Tam Quan
              </h3>

              <ul className="space-y-4 text-gray-700">
                <li>✓ Đo đạc địa chính</li>
                <li>✓ Khảo sát địa hình</li>
                <li>✓ Hỗ trợ hồ sơ đất đai</li>
                <li>✓ Làm việc tận tâm, rõ ràng</li>
                <li>✓ Đặt độ chính xác và uy tín lên hàng đầu</li>
              </ul>
            </div>

          </div>
        </div>
      </section>
      {/* DỊCH VỤ */}
      <section id="dich-vu" className="bg-gray-50 px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">

          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
              Dịch vụ của chúng tôi
            </p>

            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Dịch vụ Đo Đạc & Đất Đai
            </h2>

            <div className="mx-auto mt-4 h-1 w-20 rounded bg-red-600" />

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
              Cung cấp các giải pháp đo đạc và hồ sơ đất đai chuyên nghiệp,
              chính xác, phù hợp với nhu cầu của khách hàng.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {[
              "Đo địa chính",
              "Khảo sát địa hình",
              "Trích lục",
              "Cắm mốc",
              "Tách thửa",
              "Hợp thửa",
              "Cấp sổ",
              "Chuyển mục đích",
              "Xin giấy phép xây dựng",
              "Định vị vị trí Tim Cọc",
            ].map((service, index) => (
              <div
                key={service}
                className="rounded-2xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-xl font-bold text-red-600">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="text-xl font-bold text-gray-900">
                  {service}
                </h3>

                <p className="mt-3 leading-6 text-gray-600">
                  Tư vấn và thực hiện dịch vụ chuyên nghiệp, chính xác,
                  hỗ trợ khách hàng theo nhu cầu thực tế.
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>
          {/* QUY TRÌNH LÀM VIỆC */}
      <section
        id="quy-trinh"
        className="bg-white px-6 py-16 md:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-6xl">

          <div className="mb-12 text-center">
            <p className="mb-2 text-base font-semibold uppercase tracking-[0.2em] text-red-600 sm:text-lg">
              Quy trình làm việc
            </p>

            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Quy trình thực hiện chuyên nghiệp
            </h2>

            <div className="mx-auto mt-4 h-1 w-20 rounded bg-red-600" />

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
              Quy trình rõ ràng, minh bạch giúp khách hàng dễ dàng theo dõi
              từng bước thực hiện.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Tiếp nhận",
                text: "Tiếp nhận yêu cầu và thông tin từ khách hàng.",
              },
              {
                number: "02",
                title: "Khảo sát",
                text: "Khảo sát thực tế và xác định nội dung công việc.",
              },
              {
                number: "03",
                title: "Báo giá",
                text: "Tư vấn phương án và báo giá rõ ràng.",
              },
              {
                number: "04",
                title: "Ký hợp đồng",
                text: "Thống nhất nội dung và tiến hành ký hợp đồng.",
              },
              {
                number: "05",
                title: "Thực hiện",
                text: "Tiến hành đo đạc, khảo sát và xử lý hồ sơ.",
              },
              {
                number: "06",
                title: "Nghiệm thu",
                text: "Kiểm tra kết quả và nghiệm thu công việc.",
              },
              {
                number: "07",
                title: "Bàn giao",
                text: "Bàn giao kết quả và hồ sơ cho khách hàng.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-lg font-bold text-red-600">
                  {step.number}
                </div>

                <h3 className="text-xl font-bold text-gray-900">
                  {step.title}
                </h3>

                <p className="mt-3 leading-6 text-gray-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>      {/* DỰ ÁN */}
<section id="du-an" className="bg-white px-6 py-20 md:px-12">
  <div className="mx-auto max-w-6xl">

    <div className="mb-12 text-center">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-red-600">
        Dự án thực tế
      </p>

      <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Các công trình đã thực hiện
      </h2>

      <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-red-600"></div>

      <p className="mx-auto mt-5 max-w-2xl text-gray-600">
        Một số hình ảnh thực tế trong quá trình đo đạc, khảo sát
        và triển khai công việc tại hiện trường.
      </p>
    </div>

    <div className="grid gap-8 md:grid-cols-2">

      {/* ẢNH 1 */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
        <img
          src="/du-an-1.jpg"
          alt="Đo đạc thực tế tại công trình"
          className="h-80 w-full object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900">
            Đo đạc hiện trạng công trình
          </h3>
          <p className="mt-3 leading-7 text-gray-600">
            Khảo sát và đo đạc thực tế tại khu vực công trình.
          </p>
        </div>
      </div>

      {/* ẢNH 2 */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
        <img
          src="/du-an-2.jpg"
          alt="Khảo sát đo đạc địa hình"
          className="h-80 w-full object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900">
            Khảo sát và đo đạc địa hình
          </h3>
          <p className="mt-3 leading-7 text-gray-600">
            Khảo sát, xác định vị trí và thu thập dữ liệu tại hiện trường.
          </p>
        </div>
      </div>

      {/* ẢNH 3 */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
        <img
          src="/du-an-3.jpg"
          alt="Đo đạc khu vực xây dựng"
          className="h-80 w-full object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900">
            Đo đạc phục vụ xây dựng
          </h3>
          <p className="mt-3 leading-7 text-gray-600">
            Đo đạc và hỗ trợ dữ liệu kỹ thuật phục vụ công trình.
          </p>
        </div>
      </div>

      {/* ẢNH 4 */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
        <img
          src="/du-an-4.jpg"
          alt="Khảo sát thực tế tại công trình"
          className="h-80 w-full object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900">
            Khảo sát thực tế tại công trình
          </h3>
          <p className="mt-3 leading-7 text-gray-600">
            Kiểm tra hiện trạng và thực hiện đo đạc tại công trường.
          </p>
        </div>
      </div>

      {/* ẢNH 5 */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
        <img
          src="/du-an-5.jpg"
          alt="Dự án đo đạc thực tế"
          className="h-80 w-full object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900">
            Đo đạc thực tế
          </h3>
          <p className="mt-3 leading-7 text-gray-600">
            Hình ảnh thực tế trong quá trình thực hiện công việc.
          </p>
        </div>
      </div>

      {/* ẢNH 6 */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
        <img
          src="/du-an-6.jpg"
          alt="Khảo sát công trình"
          className="h-80 w-full object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900">
            Khảo sát công trình
          </h3>
          <p className="mt-3 leading-7 text-gray-600">
            Khảo sát và thu thập dữ liệu phục vụ hồ sơ.
          </p>
        </div>
      </div>

      {/* ẢNH 7 */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
        <img
          src="/du-an-7.jpg"
          alt="Đo đạc khảo sát hiện trường"
          className="h-80 w-full object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900">
            Đo đạc khảo sát hiện trường
          </h3>
          <p className="mt-3 leading-7 text-gray-600">
            Thực hiện đo đạc và kiểm tra hiện trạng thực tế.
          </p>
        </div>
      </div>

      {/* ẢNH 8 */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
        <img
          src="/du-an-8.jpg"
          alt="Công trình đã thực hiện"
          className="h-80 w-full object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900">
            Công trình đã thực hiện
          </h3>
          <p className="mt-3 leading-7 text-gray-600">
            Một số hình ảnh thực tế trong quá trình triển khai công việc.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>      {/* LIÊN HỆ */}
<section
  id="lien-he"
  className="bg-gray-50 px-6 py-16 md:px-12"
>
  <div className="mx-auto max-w-6xl">

    {/* TIÊU ĐỀ */}
    <div className="mb-10 text-center">
      <p className="mb-3 text-base font-bold uppercase tracking-[0.2em] text-red-600 sm:text-lg">
        Liên hệ
      </p>

      <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Liên hệ Địa Tĩnh Tam Quan
      </h2>

      <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-red-600"></div>

      <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
        Hãy liên hệ với chúng tôi để được tư vấn và báo giá phù hợp
        với nhu cầu đo đạc, khảo sát và hồ sơ đất đai.
      </p>
    </div>

    {/* THÔNG TIN LIÊN HỆ */}
    <div className="grid gap-8 md:grid-cols-2">

      {/* CỘT TRÁI */}
      <div className="rounded-2xl bg-white p-8 shadow-lg">

        <h3 className="text-2xl font-bold text-gray-900">
          Liên hệ nhanh
        </h3>

        <p className="mt-3 leading-7 text-gray-600">
          Cần đo đạc hoặc tư vấn hồ sơ đất đai?
          Liên hệ trực tiếp với chúng tôi để được hỗ trợ nhanh chóng.
        </p>

        <div className="mt-6 grid gap-3">

          <a
            href="tel:0976365597"
            className="flex items-center justify-center rounded-xl bg-red-600 px-5 py-4 font-bold text-white transition hover:bg-red-700"
          >
            📞 GỌI NGAY — 0976365597
          </a>

          <a
            href="tel:0776879333"
            className="flex items-center justify-center rounded-xl bg-red-600 px-5 py-4 font-bold text-white transition hover:bg-red-700"
          >
            📞 GỌI NGAY — 0776879333
          </a>

          <a
            href="https://zalo.me/0866745739"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-xl bg-blue-600 px-5 py-4 font-bold text-white transition hover:bg-blue-700"
          >
            💬 NHẮN ZALO — 0866745739
          </a>

          <a
            href="mailto:Ctydodac1958@gmail.com"
            className="flex items-center justify-center rounded-xl bg-gray-800 px-5 py-4 font-bold text-white transition hover:bg-gray-900"
          >
            ✉️ GỬI EMAIL
          </a>

          <a
            href="https://www.google.com/maps/search/?api=1&query=242+Quang+Trung,+phường+Tam+Quan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-xl bg-green-600 px-5 py-4 font-bold text-white transition hover:bg-green-700"
          >
            📍 XEM GOOGLE MAPS
          </a>

        </div>
      </div>

      {/* CỘT PHẢI */}
      <div className="rounded-2xl bg-white p-8 shadow-lg">

        <h3 className="text-2xl font-bold text-gray-900">
          Địa Tĩnh Tam Quan
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          Đo đạc, khảo sát và hỗ trợ hồ sơ đất đai.
          Chính xác, uy tín và tận tâm.
        </p>

        <div className="mt-6 space-y-4">

          <div className="rounded-xl bg-gray-50 p-4">
            <p className="font-bold text-gray-900">
              📍 Địa chỉ
            </p>
            <p className="mt-1 text-gray-600">
              242 Quang Trung, phường Tam Quan
            </p>
          </div>

          <div className="rounded-xl bg-gray-50 p-4">
            <p className="font-bold text-gray-900">
              📞 Điện thoại
            </p>
            <p className="mt-1 text-gray-600">
              0976365597 - 0776879333
            </p>
          </div>

          <div className="rounded-xl bg-gray-50 p-4">
            <p className="font-bold text-gray-900">
              💬 Zalo
            </p>
            <p className="mt-1 text-gray-600">
              0866745739
            </p>
          </div>

          <div className="rounded-xl bg-gray-50 p-4">
            <p className="font-bold text-gray-900">
              ✉️ Email
            </p>
            <p className="mt-1 break-all text-gray-600">
              Ctydodac1958@gmail.com
            </p>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>

{/* FOOTER */}
<footer className="bg-gray-900 px-6 py-8 text-white md:px-12">
  <div className="mx-auto max-w-6xl">

    <div className="grid gap-6 md:grid-cols-3">

      <div>
        <h3 className="text-lg font-bold">
          ĐỊA TĨNH TAM QUAN
        </h3>

        <p className="mt-3 text-sm leading-6 text-gray-300">
          Đo đạc, khảo sát và hỗ trợ hồ sơ đất đai.
          Chính xác, uy tín và tận tâm.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-bold">
          THÔNG TIN
        </h3>

        <div className="mt-3 space-y-2 text-sm text-gray-300">
          <p>📍 242 Quang Trung, phường Tam Quan</p>
          <p>📞 0976365597 - 0776879333</p>
          <p>💬 Zalo: 0866745739</p>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold">
          EMAIL
        </h3>

        <p className="mt-3 break-all text-sm text-gray-300">
          ✉️ Ctydodac1958@gmail.com
        </p>
      </div>

    </div>

    <div className="mt-6 border-t border-gray-700 pt-5 text-center text-sm text-gray-400">
      © 2026 Địa Tĩnh Tam Quan. All rights reserved.
    </div>

  </div>
</footer>     {/* NÚT LIÊN HỆ NỔI */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
        <a
          href="tel:0976365597"
          className="rounded-full bg-red-600 px-5 py-3 font-bold text-white shadow-lg hover:bg-red-700"
        >
          📞 Gọi ngay
        </a>

        <a
          href="https://zalo.me/0866745739"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-blue-600 px-5 py-3 font-bold text-white shadow-lg hover:bg-blue-700"
        >
          💬 Zalo
        </a>
      </div></main>
  );
}
