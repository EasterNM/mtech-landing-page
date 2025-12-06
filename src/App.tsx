import { useState, useEffect } from 'react';
import { Phone, Facebook, MapPin, Wrench, Snowflake, ShieldCheck, Menu, X, ChevronRight, Globe } from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<'th' | 'en'>('th'); // Default language is Thai

  // Handle scroll for navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLang(prev => prev === 'th' ? 'en' : 'th');
  };

  // Translations Database
  const t = {
    th: {
      nav: {
        home: "หน้าหลัก",
        products: "สินค้าของเรา",
        features: "จุดเด่น",
        contact: "ติดต่อเรา",
        cta: "ทักแชทสอบถาม"
      },
      hero: {
        badge: "M-TECH AUTO AIR",
        title1: "ศูนย์รวมอะไหล่แอร์รถยนต์",
        title2: "ครบวงจร คุณภาพสูง",
        desc: "คอมเพรสเซอร์ ตู้แอร์ แผงรังผึ้ง อะไหล่แท้และอะไหล่ทดแทนเกรด A สำหรับรถยนต์ทุกรุ่น พร้อมบริการจัดส่งทั่วไทย ราคาช่าง",
        btn_product: "ดูสินค้า",
        btn_quote: "สอบถามราคา"
      },
      stats: {
        quality: "คุณภาพมาตรฐาน",
        fast: "จัดส่งรวดเร็ว",
        stock: "สินค้าพร้อมส่ง",
        service: "ให้คำปรึกษาฟรี"
      },
      products: {
        title: "สินค้าแนะนำ",
        subtitle: "เราคัดสรรอะไหล่แอร์คุณภาพเพื่อรถของคุณ",
        ask_model: "สอบถามรุ่นรถ",
        items: [
          { name: "คอมเพรสเซอร์", desc: "แท้ศูนย์, Denso, Sanden และงานเกรดคุณภาพ" },
          { name: "แผงคอยล์ร้อน", desc: "ระบายความร้อนดีเยี่ยม ตรงรุ่นรถทุกยี่ห้อ" },
          { name: "ตู้แอร์ (คอยล์เย็น)", desc: "เกรดพรีเมียม เย็นฉ่ำ ทนทาน" },
          { name: "ไดเออร์ & วาล์ว", desc: "อุปกรณ์ควบคุมแรงดันและกรองความชื้น" },
          { name: "พัดลม & มอเตอร์", desc: "แรงลมสม่ำเสมอ เงียบ และทนทาน" },
          { name: "อะไหล่อื่นๆ", desc: "น้ำยาแอร์, โอริง, ท่อแอร์ และอุปกรณ์ครบวงจร" }
        ]
      },
      features: {
        title: "ทำไมต้อง M-TECH?",
        desc: "เพราะเรารู้ว่าระบบแอร์รถยนต์เป็นเรื่องสำคัญ เราจึงมุ่งมั่นคัดสรรเฉพาะสินค้าคุณภาพสูง เพื่อให้ลูกค้าและช่างแอร์มั่นใจได้ในทุกการซ่อมบำรุง",
        list: [
          "สต็อกสินค้าแน่น พร้อมส่งทันที ไม่ต้องรอนาน",
          "มีสินค้าหลากหลายรุ่น รองรับรถยนต์ส่วนใหญ่ในตลาด",
          "ราคามาตรฐาน เป็นกันเอง มีเรทราคาส่งสำหรับอู่",
          "ทีมงานมีความรู้จริง ให้คำปรึกษาตรงจุด"
        ]
      },
      contact: {
        title: "ต้องการอะไหล่แอร์รถยนต์รุ่นไหน?",
        desc: "ส่งรูปรุ่นรถ หรือรูปอะไหล่ที่ต้องการมาให้เราเช็คของได้ทันที ตอบไว พร้อมแจ้งราคาพิเศษ",
        btn_fb: "ติดต่อผ่าน Facebook",
        btn_call: "โทรสอบถาม"
      },
      footer: {
        desc: "บริษัท เอ็มเทคออโตแอร์ จำกัด ผู้จัดจำหน่ายอะไหล่แอร์รถยนต์คุณภาพ มุ่งมั่นให้บริการด้วยความจริงใจ ในราคายุติธรรม",
        menu_title: "เมนู",
        contact_title: "ติดต่อเรา",
        address: "กรุงเทพมหานคร, ไทย",
        rights: "M-TECH Auto Air. สงวนลิขสิทธิ์."
      }
    },
    en: {
      nav: {
        home: "Home",
        products: "Products",
        features: "Features",
        contact: "Contact",
        cta: "Chat with us"
      },
      hero: {
        badge: "M-TECH AUTO AIR",
        title1: "Automotive Air Conditioning",
        title2: "Premium Parts Center",
        desc: "Compressors, Condensers, Evaporators. Genuine and OEM parts for all car models. Nationwide delivery with mechanic pricing.",
        btn_product: "View Products",
        btn_quote: "Get a Quote"
      },
      stats: {
        quality: "Quality Assured",
        fast: "Fast Delivery",
        stock: "Ready Stock",
        service: "Free Consultation"
      },
      products: {
        title: "Featured Products",
        subtitle: "Selecting the best cooling parts for your vehicle",
        ask_model: "Inquire Model",
        items: [
          { name: "Compressors", desc: "Genuine, Denso, Sanden, and high-quality OEM" },
          { name: "Condensers", desc: "Excellent heat dissipation, direct fit for all brands" },
          { name: "Evaporators", desc: "Premium grade, icy cool, durable" },
          { name: "Driers & Valves", desc: "Pressure control and moisture filtration" },
          { name: "Fans & Motors", desc: "Consistent airflow, quiet, and long-lasting" },
          { name: "Accessories", desc: "Refrigerant, O-rings, Hoses, and more" }
        ]
      },
      features: {
        title: "Why M-TECH?",
        desc: "Because we know car AC systems are vital. We are committed to selecting only high-quality parts so customers and mechanics can trust every repair.",
        list: [
          "Large stock ready to ship immediately, no long waits",
          "Wide variety of parts covering most market models",
          "Standard pricing, friendly service, wholesale rates for garages",
          "Experienced team providing accurate advice"
        ]
      },
      contact: {
        title: "Looking for specific car AC parts?",
        desc: "Send us a photo of your car model or the part you need. We check stock instantly and offer special prices.",
        btn_fb: "Contact via Facebook",
        btn_call: "Call Now"
      },
      footer: {
        desc: "M-TECH Auto Air Co., Ltd. Distributor of quality automotive air conditioning parts. Committed to sincere service at fair prices.",
        menu_title: "Menu",
        contact_title: "Contact Us",
        address: "Bangkok, Thailand",
        rights: "M-TECH Auto Air. All rights reserved."
      }
    }
  };

  const content = t[lang];

  const productIcons = [
    <Snowflake size={40} className="text-green-500" />,
    <Wrench size={40} className="text-green-500" />,
    <Snowflake size={40} className="text-green-500" />,
    <Wrench size={40} className="text-green-500" />,
    <Snowflake size={40} className="text-green-500" />,
    <Wrench size={40} className="text-green-500" />
  ];

  return (
    <div className="text-gray-100 bg-zinc-900 min-h-screen selection:bg-green-500 selection:text-black">
      {/* Font Import & Styles */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Kodchasan:wght@300;400;500;600;700&display=swap');
          
          body, .font-kodchasan {
            font-family: 'Kodchasan', sans-serif;
          }
        `}
      </style>

      <div className="font-kodchasan">
        {/* Navigation */}
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-lg border-b border-green-800' : 'bg-transparent py-6'}`}>
          <div className="container mx-auto px-4 flex justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center gap-2">
              <div className="font-black text-3xl tracking-tighter italic flex items-center">
                <span className="text-green-600">M</span>
                <span className="text-green-600">-TECH</span>
              </div>
              <span className="hidden md:block text-xs font-bold text-gray-400 mt-2 ml-2 tracking-widest">COOL YOUR GEAR</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6 font-medium text-lg">
              <a href="#home" className="hover:text-green-500 transition-colors">{content.nav.home}</a>
              <a href="#products" className="hover:text-green-500 transition-colors">{content.nav.products}</a>
              <a href="#features" className="hover:text-green-500 transition-colors">{content.nav.features}</a>
              <a href="#contact" className="hover:text-green-500 transition-colors">{content.nav.contact}</a>
            </div>

            <div className="hidden lg:flex items-center gap-4">
              {/* Language Switcher */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 px-3 py-1 rounded-full border border-zinc-700 hover:border-green-500 transition-colors text-sm font-bold"
              >
                <Globe size={16} />
                {lang === 'th' ? 'EN' : 'TH'}
              </button>

              {/* CTA Button */}
              <a
                href="https://www.facebook.com/share/1ALV9hy7vV/"
                target="_blank"
                rel="noreferrer"
                className="bg-green-600 hover:bg-green-500 text-black font-bold py-2 px-6 rounded-full transition-all transform hover:scale-105 flex items-center gap-2"
              >
                <Facebook size={20} />
                {content.nav.cta}
              </a>
            </div>

            {/* Mobile Actions (Lang + Menu) */}
            <div className="flex items-center gap-4 lg:hidden">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 px-2 py-1 rounded border border-zinc-700 text-xs font-bold"
              >
                {lang === 'th' ? 'EN' : 'TH'}
              </button>
              <button className="text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-zinc-900 border-t border-zinc-800 absolute w-full px-4 py-6 flex flex-col gap-4 shadow-xl">
              <a href="#home" className="block text-lg hover:text-green-500" onClick={() => setIsMobileMenuOpen(false)}>{content.nav.home}</a>
              <a href="#products" className="block text-lg hover:text-green-500" onClick={() => setIsMobileMenuOpen(false)}>{content.nav.products}</a>
              <a href="#features" className="block text-lg hover:text-green-500" onClick={() => setIsMobileMenuOpen(false)}>{content.nav.features}</a>
              <a href="#contact" className="block text-lg hover:text-green-500" onClick={() => setIsMobileMenuOpen(false)}>{content.nav.contact}</a>
              <a href="https://www.facebook.com/share/1ALV9hy7vV/" className="bg-green-600 text-black font-bold py-3 text-center rounded-lg mt-2">
                {content.nav.cta}
              </a>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <header id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 to-transparent z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Car Workshop Background"
              className="w-full h-full object-cover opacity-40 grayscale"
            />
          </div>

          <div className="container mx-auto px-4 relative z-20 text-center mt-16">
            <div className="inline-block px-4 py-1 border border-green-500 text-green-500 rounded-full mb-4 text-sm font-bold tracking-widest bg-black/50 backdrop-blur-sm">
              {content.hero.badge}
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              {content.hero.title1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-700">
                {content.hero.title2}
              </span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
              {content.hero.desc}
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="#products" className="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-all flex items-center justify-center gap-2">
                {content.hero.btn_product} <ChevronRight size={20} />
              </a>
              <a href="https://www.facebook.com/share/1ALV9hy7vV/" className="bg-green-600 text-black font-bold py-3 px-8 rounded-full hover:bg-green-500 transition-all shadow-[0_0_20px_rgba(22,163,74,0.5)]">
                {content.hero.btn_quote}
              </a>
            </div>
          </div>
        </header>

        {/* Trust Stats Bar */}
        <div className="bg-green-600 py-6 relative z-20 -mt-10 mx-4 md:mx-auto max-w-6xl rounded-xl shadow-2xl">
          <div className="flex flex-wrap justify-around text-center text-black">
            <div className="w-1/2 md:w-1/4 p-2 border-r border-black/10">
              <h3 className="text-3xl font-black">100%</h3>
              <p className="text-sm font-bold">{content.stats.quality}</p>
            </div>
            <div className="w-1/2 md:w-1/4 p-2 md:border-r border-black/10">
              <h3 className="text-3xl font-black">Fast</h3>
              <p className="text-sm font-bold">{content.stats.fast}</p>
            </div>
            <div className="w-1/2 md:w-1/4 p-2 border-r border-black/10 mt-4 md:mt-0">
              <h3 className="text-3xl font-black">Stock</h3>
              <p className="text-sm font-bold">{content.stats.stock}</p>
            </div>
            <div className="w-1/2 md:w-1/4 p-2 mt-4 md:mt-0">
              <h3 className="text-3xl font-black">Service</h3>
              <p className="text-sm font-bold">{content.stats.service}</p>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <section id="products" className="py-20 bg-zinc-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">{content.products.title}</h2>
              <div className="w-20 h-1 bg-green-600 mx-auto rounded-full"></div>
              <p className="text-gray-400 mt-4 text-lg">{content.products.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {content.products.items.map((item, index) => (
                <div key={index} className="bg-zinc-800 p-8 rounded-2xl hover:bg-zinc-750 transition-all border border-zinc-700 hover:border-green-500/50 group">
                  <div className="bg-zinc-900 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    {productIcons[index]}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-green-500 transition-colors">{item.name}</h3>
                  <p className="text-gray-400 mb-6 font-light">{item.desc}</p>
                  <span className="text-sm font-semibold text-green-500 flex items-center gap-1 cursor-pointer hover:underline">
                    {content.products.ask_model} <ChevronRight size={16} />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features / Why Choose Us */}
        <section id="features" className="py-20 bg-black relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-900/10 to-transparent"></div>
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">

            <div className="w-full md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1530046339160-711535b94d9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Car Parts Stock"
                className="rounded-2xl shadow-2xl border-2 border-zinc-800 grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-bold mb-6">{content.features.title}</h2>
              <p className="text-gray-400 mb-8 text-xl font-light">
                {content.features.desc}
              </p>

              <div className="space-y-4">
                {content.features.list.map((text, i) => (
                  <div key={i} className="flex items-center gap-4 bg-zinc-900 p-4 rounded-lg border border-zinc-800">
                    <div className="bg-green-600/20 p-2 rounded-full">
                      <ShieldCheck className="text-green-500" size={24} />
                    </div>
                    <span className="font-medium text-gray-200 text-lg">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA / Contact Section */}
        <section id="contact" className="py-20 bg-zinc-900">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-3xl p-10 md:p-16 relative overflow-hidden shadow-2xl">

              {/* Decorative background elements */}
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <Snowflake size={300} className="absolute -left-20 -top-20 animate-spin-slow" />
              </div>

              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  {content.contact.title}
                </h2>
                <p className="text-green-100 text-lg md:text-xl mb-8 max-w-3xl mx-auto font-medium">
                  {content.contact.desc}
                </p>

                <div className="flex flex-col md:flex-row justify-center gap-6">
                  <a
                    href="https://www.facebook.com/share/1ALV9hy7vV/"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white text-green-800 hover:bg-gray-100 font-bold py-4 px-10 rounded-full text-lg shadow-lg flex items-center justify-center gap-3 transition-transform hover:scale-105"
                  >
                    <Facebook size={24} /> {content.contact.btn_fb}
                  </a>

                  {/* Simulated Phone Button */}
                  <button
                    onClick={() => alert("กรุณาใส่เบอร์โทรศัพท์จริงของคุณในโค้ด")}
                    className="bg-black/30 backdrop-blur border border-white/30 text-white hover:bg-black/50 font-bold py-4 px-10 rounded-full text-lg flex items-center justify-center gap-3 transition-all"
                  >
                    <Phone size={24} /> {content.contact.btn_call}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-gray-400 py-12 border-t border-zinc-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <div className="font-black text-2xl tracking-tighter italic text-white flex items-center">
                    <span className="text-green-600">M</span>-TECH
                  </div>
                </div>
                <p className="mb-4 max-w-md font-light">
                  {content.footer.desc}
                </p>
              </div>

              <div>
                <h4 className="text-white font-bold mb-4 uppercase tracking-wider">{content.footer.menu_title}</h4>
                <ul className="space-y-2 font-light">
                  <li><a href="#home" className="hover:text-green-500 transition-colors">{content.nav.home}</a></li>
                  <li><a href="#products" className="hover:text-green-500 transition-colors">{content.nav.products}</a></li>
                  <li><a href="#contact" className="hover:text-green-500 transition-colors">{content.nav.contact}</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold mb-4 uppercase tracking-wider">{content.footer.contact_title}</h4>
                <ul className="space-y-2 font-light">
                  <li className="flex items-center gap-2"><MapPin size={18} className="text-green-500" /> {content.footer.address}</li>
                  <li className="flex items-center gap-2"><Facebook size={18} className="text-green-500" /> M-Tech Auto Air</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-zinc-800 pt-8 text-center text-sm font-light">
              <p>&copy; {new Date().getFullYear()} {content.footer.rights}</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
