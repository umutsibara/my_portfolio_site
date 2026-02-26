export interface Project {
  id: string;
  title: string;
  description: string;
  type: "phone" | "terminal" | "web" | "browser";
  category: "mobile" | "ai" | "web" | "kotlin" | "fullstack";
  techStack: string[];
  glowColor: "blue" | "purple";
  githubUrl?: string;
  demoUrl?: string;
  demoData?: string[];
  videoUrl?: string;
  imageUrl?: string;
}

export const projects: Project[] = [
  {
    id: "hesap-kimde",
    title: "Hesap Kimde?",
    description: "Arkadaş grupları arasındaki ortak harcamaları yönetmek için geliştirilmiş Flutter mobil uygulaması. BLoC Pattern, Clean Architecture ve Firebase altyapısı ile detaylı harcama takibi, esnek borç yönetimi ve akıllı bildirimler sunar.",
    type: "phone",
    category: "mobile",
    techStack: ["Flutter", "Dart", "Firebase", "BLoC", "Clean Architecture"],
    glowColor: "blue",
    githubUrl: "https://github.com/umutsibara",
    demoUrl: "https://play.google.com/store",
    videoUrl: "/videos/hesapkimde.mp4"
  },
  {
    id: "estm",
    title: "ESTM Mobil Uygulama",
    description: "Akdeniz Üniversitesi Eğitim ve Sosyal Tesisler Müdürlüğü için Clean Architecture prensipleriyle geliştirilmiş spor salonu uygulaması. QR kod ile giriş, Riverpod ile state yönetimi ve kapsamlı üyelik özellikleri sunar.",
    type: "phone",
    category: "mobile",
    techStack: ["Flutter", "Riverpod", "Material 3", "QR Scanner", "Clean Architecture"],
    glowColor: "blue",
    githubUrl: "https://github.com/umutsibara",
    videoUrl: "/videos/estm.mp4"
  },
  {
    id: "coinpay",
    title: "CoinPay",
    description: "Polygon ağındaki kripto varlıkların NFC teknolojisiyle POS cihazlarında harcanmasını sağlayan Android cüzdanı. MVVM mimarisi, Android Keystore güvenliği, biyometrik doğrulama ve Marqeta API ile sanal kart emülasyonu içerir.",
    type: "phone",
    category: "kotlin",
    techStack: ["Kotlin", "Web3j", "Polygon", "NFC", "Jetpack Compose", "MVVM"],
    glowColor: "purple",
    githubUrl: "https://github.com/umutsibara",
    videoUrl: "/videos/coinpay.mp4"
  },
  {
    id: "loopin",
    title: "Loopin",
    description: "Kullanıcıların etkinlikler düzenleyip sosyalleşebildiği bir Android uygulaması. Kotlin, MVVM mimarisi ve Dagger Hilt ile geliştirilmiş olup, arka planda Node.js, Express ve MySQL kullanılmıştır.",
    type: "phone",
    category: "kotlin",
    techStack: ["Kotlin", "MVVM", "Dagger Hilt", "Node.js", "MySQL", "Google Maps"],
    glowColor: "purple",
    githubUrl: "https://github.com/IsikYildiz/Loopin",
    videoUrl: "/videos/loopin.mp4"
  },
  {
    id: "patitakip",
    title: "PatiTakip",
    description: "Sokak hayvanlarının takibi, beslenmesi ve acil müdahalelerin koordine edilmesi için geliştirilen Android ve Node.js tabanlı platform. Gamification (Puan/Rozet) sistemi, gerçek zamanlı konum takibi ve PostgreSQL JWT güvenliği içerir.",
    type: "phone",
    category: "fullstack",
    techStack: ["Kotlin", "Jetpack Compose", "Google Maps", "Node.js", "PostgreSQL"],
    glowColor: "purple",
    githubUrl: "https://github.com/umutsibara",
    videoUrl: "/videos/patitakip.mp4"
  },
  {
    id: "shot-oyunlari",
    title: "Shot Oyunları",
    description: "Arkadaşlarla, partnerle veya partilerde oynanabilen eğlenceli ve sosyal bir mobil kart oyunu. Modern animasyonlar, kaydırma (swipe) mekaniği, Riverpod state yönetimi ve GoRouter navigasyonu ile Flutter kullanarak geliştirilmiştir.",
    type: "phone",
    category: "mobile",
    techStack: ["Flutter", "Dart", "Riverpod", "GoRouter", "Supabase"],
    glowColor: "blue",
    videoUrl: "/videos/shotoyunlari.mp4"
  },
  {
    id: "chess-fen",
    title: "AI Satranç FEN Dönüştürücü",
    description: "Satranç tahtası fotoğraflarını yapay zeka ile analiz edip FEN notasyonuna dönüştüren Android uygulaması ve backend servisi. Tam fonksiyonel satranç oyunu ve süresi, YOLOv8 tespiti ve Flask içerir.",
    type: "phone",
    category: "ai",
    techStack: ["Python", "Flask", "TensorFlow/Keras", "Kotlin", "Retrofit", "Material Design"],
    glowColor: "purple",
    githubUrl: "https://github.com/umutsibara/AI-Learning-Projects",
    videoUrl: "/videos/satranc.mp4"
  },
  {
    id: "akdeniz-kan-takip",
    title: "Hasta Kan Takip Sistemi",
    description: "Akdeniz Üniversitesi Hastanesi için geliştirilen, Docker üzerinde çalışan Web SPA uygulaması. MVC mimarisi ile Vanilla JS, PHP ve MSSQL kullanarak yüksek güvenlikle hasta ve randevu süreçlerini yönetir.",
    type: "browser",
    category: "web",
    techStack: ["HTML5", "JavaScript", "PHP", "MSSQL", "Docker"],
    glowColor: "blue",
    githubUrl: "https://github.com/umutsibara",
    videoUrl: "/videos/kantakip.mp4"
  },
  {
    id: "sinav-yardimcim",
    title: "Sınav Yardımcım (Geliştirme Aşamasında)",
    description: "KPSS, ALES, YDS ve YKS sınavlarına hazırlanan öğrenciler için geliştirilmekte olan güncel eğitim platformu. Şu anda geliştirme aşamasında olduğu için aktif bir demosu veya görseli bulunmamaktadır.",
    type: "browser",
    category: "web",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    glowColor: "purple"
  }
];
