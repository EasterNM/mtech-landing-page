# M-TECH AUTO AIR Landing Page

เว็บเพจสำหรับโปรโมทธุรกิจ M-TECH AUTO AIR ศูนย์รวมอะไหล่แอร์รถยนต์ครบวงจร พัฒนาด้วย React และ TypeScript เน้นความสวยงาม ทันสมัย และรองรับการใช้งานผ่านมือถือ (Responsive)

## 🌟 ฟีเจอร์หลัก (Features)

*   **Modern Design**: ดีไซน์ทันสมัย โทนสีดำ-เขียว (Dark Theme) ให้ความรู้สึกพรีเมียมและน่าเชื่อถือ
*   **Responsive Layout**: รองรับการแสดงผลทุกหน้าจอ ทั้งคอมพิวเตอร์ แท็บเล็ต และมือถือ
*   **Bilingual Support**: รองรับ 2 ภาษา (ไทย / อังกฤษ) สามารถสลับภาษาได้ทันที
*   **Smooth Navigation**: ระบบเมนูเลื่อนไปยังส่วนต่างๆ ของหน้าเว็บอย่างนุ่มนวล (Smooth Scroll)
*   **Interactive UI**: มีลูกเล่น Effect ต่างๆ เมื่อเอาเมาส์ไปชี้ (Hover Effects) และ Navbar ที่โปร่งแสงเมื่ออยู่ที่ด้านบนสุด
*   **Icons**: ใช้งานไอคอนสื่อความหมายชัดเจนจาก library `lucide-react`

## 🛠️ เทคโนโลยีที่ใช้ (Tech Stack)

*   **Frontend Framework**: [React](https://react.dev/)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Font**: [Kodchasan](https://fonts.google.com/specimen/Kodchasan) (Google Fonts)

## 🚀 การติดตั้งและเริ่มต้นใช้งาน (Getting Started)

1.  **Clone โปรเจกต์**
    ```bash
    git clone <repository_url>
    cd mtech-landing-page
    ```

2.  **ติดตั้ง Dependencies**
    ```bash
    npm install
    ```

3.  **รันเซิร์ฟเวอร์สำหรับพัฒนา (Development Server)**
    ```bash
    npm run dev
    ```
    หน้าเว็บจะเปิดขึ้นที่ `http://localhost:5173` (หรือพอร์ตอื่นตามที่กำหนด)

4.  **Build สำหรับ Production**
    ```bash
    npm run build
    ```
    ไฟล์ที่ได้จะอยู่ในโฟลเดอร์ `dist` พร้อมสำหรับนำไป Deploy

## 📂 โครงสร้างโปรเจกต์ (Project Structure)

```
mtech-landing-page/
├── public/              # ไฟล์ Static ต่างๆ
├── src/
│   ├── App.tsx          # ไฟล์หลักของหน้าเว็บ (Landing Page Logic & Content)
│   ├── main.tsx         # Entry point ของ React
│   ├── index.css        # Global Styles และ Tailwind directives
│   └── ...
├── index.html           # HTML template หลัก
├── package.json         # รายชื่อ Dependencies และ Scripts
├── tailwind.config.js   # การตั้งค่า Tailwind CSS
├── tsconfig.json        # การตั้งค่า TypeScript
└── vite.config.ts       # การตั้งค่า Vite
```

## 📝 การปรับแต่งเนื้อหา (Customization)

เนื้อหาข้อความทั้งหมด (ภาษาไทยและอังกฤษ) จะถูกเก็บอยู่ในตัวแปร `t` (translations database) ภายในไฟล์ `src/App.tsx` คุณสามารถเข้าไปแก้ไขข้อความ ราคา หรือรายละเอียดสินค้าได้ที่จุดนี้โดยตรง

---
Developed for **M-TECH AUTO AIR**
