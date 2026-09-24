const services = [
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
];

const steps = [
  { number: "01", title: "Tiếp nhận", text: "Tiếp nhận yêu cầu và thông tin từ khách hàng." },
  { number: "02", title: "Khảo sát", text: "Khảo sát thực tế và xác định nội dung công việc." },
  { number: "03", title: "Báo giá", text: "Tư vấn phương án và báo giá rõ ràng." },
  { number: "04", title: "Ký hợp đồng", text: "Thống nhất nội dung và tiến hành ký hợp đồng." },
  { number: "05", title: "Thực hiện", text: "Tiến hành đo đạc, khảo sát và xử lý hồ sơ." },
  { number: "06", title: "Nghiệm thu", text: "Kiểm tra kết quả và nghiệm thu công việc." },
  { number: "07", title: "Bàn giao", text: "Bàn giao kết quả và hồ sơ cho khách hàng." },
];

const ASSET_BASE = process.env.NODE_ENV === "production" ? "/websitediatinhtamquan" : "";

const assetPath = (file: string) => `${ASSET_BASE}/${file}`;

const projects = [
  ["du-an-1.jpg", "Đo đạc hiện trạng công trình", "Khảo sát và đo đạc thực tế tại khu vực công trình."],
  ["du-an-2.jpg", "Khảo sát và đo đạc địa hình", "Khảo sát, xác định vị trí và thu thập dữ liệu tại hiện trường."],
  ["du-an-3.jpg", "Đo đạc phục vụ xây dựng", "Đo đạc và hỗ trợ dữ liệu kỹ thuật phục vụ công trình."],
  ["du-an-4.jpg", "Khảo sát thực tế tại công trình", "Kiểm tra hiện trạng và thực hiện đo đạc tại công trường."],
  ["du-an-5.jpg", "Đo đạc thực tế", "Hình ảnh thực tế trong quá trình thực hiện công việc."],
  ["du-an-6.jpg", "Khảo sát công trình", "Khảo sát và thu thập dữ liệu phục vụ hồ sơ."],
  ["du-an-7.jpg", "Đo đạc khảo sát hiện trường", "Thực hiện đo đạc và kiểm tra hiện trạng thực tế."],
  ["du-an-8.jpg", "Công trình đã thực hiện", "Một số hình ảnh thực tế trong quá trình triển khai công việc."],
] as const;

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.24em] text-red-600 sm:text-base">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-red-600" />
      {description && <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">{description}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <main id="trang-chu" className="min-h-screen bg-white text-slate-900">
      <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center gap-5 px-4 py-3 sm:px-6 lg:px-8">
          <a href="#trang-chu" className="shrink-0 text-base font-extrabold tracking-tight text-slate-900 sm:text-lg">
            ĐỊA TĨNH <span className="text-red-600">TAM QUAN</span>
          </a>
          <div className="ml-auto flex max-w-full items-center gap-1 overflow-x-auto whitespace-nowrap text-sm font-semibold sm:gap-2">
            {[['gioi-thieu','Giới thiệu'],['dich-vu','Dịch vụ'],['quy-trinh','Quy trình'],['du-an','Dự án']].map(([id,label]) => (
              <a key={id} href={`#${id}`} className="rounded-lg px-3 py-2 text-slate-600 transition hover:bg-slate-100 hover:text-red-600">{label}</a>
            ))}
            <a href="#lien-he" className="rounded-lg bg-red-600 px-4 py-2 text-white shadow-sm transition hover:bg-red-700">Liên hệ</a>
          </div>
        </div>
      </nav>

      <section aria-label="Giới thiệu nhanh" className="bg-slate-50">
        <img src={assetPath("banner.jpg")} alt="Công ty Địa Tĩnh Tam Quan" className="hero-banner block h-auto w-full" />
      </section>

      <section id="gioi-thieu" className="scroll-mt-20 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Về chúng tôi" title="Giới thiệu Công ty Địa Tĩnh Tam Quan" description="Đo đạc chính xác, hồ sơ rõ ràng và hỗ trợ tận tâm cho từng nhu cầu thực tế của khách hàng." />
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <h3 className="text-2xl font-bold text-slate-900">Đo đạc chính xác – Hồ sơ chuyên nghiệp</h3>
              <p className="mt-5 text-base leading-8 text-slate-600">Công ty Địa Tĩnh Tam Quan cung cấp các dịch vụ đo đạc địa chính, khảo sát địa hình và hỗ trợ hồ sơ đất đai với phương châm chính xác, uy tín và chuyên nghiệp.</p>
              <p className="mt-4 text-base leading-8 text-slate-600">Chúng tôi hướng đến việc cung cấp giải pháp đo đạc và hồ sơ phù hợp với nhu cầu của khách hàng, góp phần giúp quá trình thực hiện thủ tục liên quan đến đất đai thuận lợi và rõ ràng.</p>
            </div>
            <div className="rounded-3xl bg-slate-900 p-7 text-white shadow-sm sm:p-9">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-400">Địa Tĩnh Tam Quan</p>
              <h3 className="mt-3 text-2xl font-bold">Những giá trị chúng tôi theo đuổi</h3>
              <ul className="mt-6 grid gap-4 text-[15px] text-slate-200 sm:grid-cols-2 lg:grid-cols-1">
                {['Đo đạc địa chính','Khảo sát địa hình','Hỗ trợ hồ sơ đất đai','Làm việc tận tâm, rõ ràng','Đề cao độ chính xác và uy tín'].map(item => <li key={item} className="flex gap-3"><span className="text-red-400">✓</span><span>{item}</span></li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="dich-vu" className="scroll-mt-20 bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Dịch vụ" title="Dịch vụ Đo Đạc & Đất Đai" description="Các dịch vụ thiết thực, tập trung vào nhu cầu đo đạc, khảo sát và hoàn thiện hồ sơ của khách hàng." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((service, index) => (
              <div key={service} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-md">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-sm font-extrabold text-red-600">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="text-base font-bold leading-6 text-slate-900 group-hover:text-red-600">{service}</h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-500">Tư vấn và thực hiện theo nhu cầu thực tế.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="quy-trinh" className="scroll-mt-20 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Quy trình" title="Quy trình thực hiện chuyên nghiệp" description="Rõ ràng từ tiếp nhận đến bàn giao, giúp khách hàng dễ theo dõi tiến độ và kết quả công việc." />
          <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(step => (
              <div key={step.number} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-600 text-sm font-extrabold text-white">{step.number}</span>
                  <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="du-an" className="scroll-mt-20 bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Dự án thực tế" title="Các công trình đã thực hiện" description="Một số hình ảnh thực tế trong quá trình đo đạc, khảo sát và triển khai công việc tại hiện trường." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map(([image, title, text]) => (
              <article key={image} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <img src={assetPath(image)} alt={title} className="h-56 w-full object-cover" />
                <div className="p-5">
                  <h3 className="text-lg font-bold leading-7 text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="lien-he" className="scroll-mt-20 bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="Liên hệ" title="Trao đổi nhu cầu của bạn" description="Cần đo đạc, khảo sát hoặc hỗ trợ hồ sơ đất đai? Hãy liên hệ trực tiếp để được tư vấn." />
          <div className="overflow-hidden rounded-3xl bg-slate-900 shadow-xl">
            <div className="grid lg:grid-cols-[1fr_0.8fr]">
              <div className="p-7 sm:p-10">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-400">Địa Tĩnh Tam Quan</p>
                <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">Liên hệ nhanh</h3>
                <p className="mt-4 max-w-xl leading-7 text-slate-300">Chúng tôi sẵn sàng tiếp nhận yêu cầu, tư vấn phương án và báo giá phù hợp với công việc thực tế.</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a href="tel:0976365597" className="rounded-xl bg-red-600 px-5 py-3.5 font-bold text-white transition hover:bg-red-700">☎ 0976 365 597</a>
                  <a href="tel:0776879333" className="rounded-xl bg-red-600 px-5 py-3.5 font-bold text-white transition hover:bg-red-700">☎ 0776 879 333</a>
                  <a href="https://zalo.me/0866745739" target="_blank" rel="noopener noreferrer" className="rounded-xl bg-blue-600 px-5 py-3.5 font-bold text-white transition hover:bg-blue-700">💬 Zalo 0866 745 739</a>
                  <a href="https://www.google.com/maps/search/?api=1&query=242+Quang+Trung%2C+Phuong+Tam+Quan%2C+Tinh+Gia+Lai%2C+Viet+Nam" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-slate-600 px-5 py-3.5 font-bold text-white transition hover:bg-slate-800">📍 Xem bản đồ</a>
                </div>
              </div>
              <div className="border-t border-slate-700 bg-slate-800 p-7 sm:p-10 lg:border-l lg:border-t-0">
                <div className="space-y-5">
                  <div><p className="text-xs font-bold uppercase tracking-wider text-slate-400">Địa chỉ</p><p className="mt-1 font-semibold text-white">242 Quang Trung, phường Tam Quan</p></div>
                  <div><p className="text-xs font-bold uppercase tracking-wider text-slate-400">Email</p><a href="mailto:Ctydodac1958@gmail.com" className="mt-1 block break-all font-semibold text-white hover:text-red-400">Ctydodac1958@gmail.com</a></div>
                  <div><p className="text-xs font-bold uppercase tracking-wider text-slate-400">Giờ hỗ trợ</p><p className="mt-1 font-semibold text-white">Liên hệ trực tiếp để được tư vấn</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 px-4 py-10 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-extrabold tracking-tight">ĐỊA TĨNH TAM QUAN</p>
            <p className="mt-1 text-sm text-slate-400">Đo đạc · Khảo sát · Hồ sơ đất đai</p>
          </div>
          <p className="text-sm text-slate-500">© 2026 Địa Tĩnh Tam Quan</p>
        </div>
      </footer>

      <div className="fixed bottom-4 right-4 z-50 flex gap-2 sm:bottom-5 sm:right-5">
        <a href="tel:0976365597" aria-label="Gọi ngay" className="rounded-full bg-red-600 px-4 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-red-700">☎ Gọi</a>
        <a href="https://zalo.me/0866745739" target="_blank" rel="noopener noreferrer" aria-label="Nhắn Zalo" className="rounded-full bg-blue-600 px-4 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-blue-700">💬 Zalo</a>
      </div>
    </main>
  );
}
