export interface Project {
  id: string;
  title: string;
  description: string;
  type: "phone" | "terminal" | "web";
  category: "mobile" | "ai" | "web" | "kotlin";
  techStack: string[];
  glowColor: "blue" | "purple";
  githubUrl?: string;
  demoUrl?: string;
  demoData?: string[];
}

export const projects: Project[] = [
  {
    id: "hesap-kimde",
    title: "Hesap Kimde?",
    description:
      "Arkadaş grupları arasındaki ortak harcamaların adilce bölüştürülmesini ve borç takibini sağlayan Flutter uygulaması. BLoC pattern ve Firebase ile gerçek zamanlı senkronizasyon.",
    type: "phone",
    category: "mobile",
    techStack: ["Flutter", "Dart", "Firebase", "BLoC"],
    glowColor: "blue",
    githubUrl: "https://github.com/umutsibara",
    demoUrl: "https://play.google.com/store",
  },
  {
    id: "estm",
    title: "ESTM",
    description:
      "Akdeniz Üniversitesi spor tesislerini mobil platforma taşıyan kurum içi uygulama. Üye girişi/kaydı, tesis görüntüleme ve QR kod ile hızlı giriş özellikli.",
    type: "phone",
    category: "mobile",
    techStack: ["Flutter", "Riverpod", "Material 3", "QR Scanner"],
    glowColor: "blue",
    githubUrl: "https://github.com/umutsibara",
  },
  {
    id: "patitakip",
    title: "PatiTakip",
    description:
      "Sokak hayvanlarının beslenme, sağlık ve ihbar süreçlerini harita üzerinden koordine eden sosyal sorumluluk platformu. Kotlin Jetpack Compose + Node.js REST API.",
    type: "terminal",
    category: "kotlin",
    techStack: ["Kotlin", "Jetpack Compose", "Google Maps", "Node.js", "PostgreSQL"],
    glowColor: "purple",
    githubUrl: "https://github.com/umutsibara",
    demoData: [
      "$ pati-takip --mode map --city izmir",
      "> Fetching animal reports from API... ✓",
      "> Loading Google Maps layer... ✓",
      "> Active reports found: 42",
      "",
      "📊 BÖLGE ÖZETİ:",
      "   Izmir/Bornova   → 12 hayvan, 3 acil ihbar",
      "   Izmir/Karşıyaka → 8 hayvan, 1 tedavi bekliyor",
      "   Izmir/Konak     → 22 hayvan, aktif",
      "",
      "🐾 EN YAKIN İSTASYON:",
      "   Konak Mama İstasyonu — 450m",
      "   Son besleme: 2 saat önce",
      "",
      "✅ Harita yüklendi. (1.2s)",
    ],
  },
  {
    id: "coinpay",
    title: "CoinPay",
    description:
      "Polygon ağındaki kripto varlıkların NFC teknolojisiyle POS cihazlarında harcanmasını sağlayan blockchain tabanlı Android cüzdanı. Biyometrik doğrulama ve Android Keystore güvenliği.",
    type: "terminal",
    category: "kotlin",
    techStack: ["Kotlin", "Web3j", "Polygon", "NFC", "Android Keystore"],
    glowColor: "purple",
    githubUrl: "https://github.com/umutsibara",
    demoData: [
      "$ coinpay --init-wallet --network polygon-amoy",
      "> Connecting to Polygon Amoy Testnet... ✓",
      "> Loading Android Keystore... ✓",
      "> Biometric auth: Parmak izi doğrulandı ✓",
      "",
      "💳 CÜZDAN DURUMU:",
      "   Adres: 0x7f52...B9FD",
      "   Bakiye: 42.18 MATIC",
      "   Network: Polygon Amoy",
      "",
      "📡 NFC TAP ALGILANDI:",
      "   Alıcı POS: merchant_0x13B9...",
      "   Tutar: 5.00 USDC",
      "   Gas: ~0.001 MATIC",
      "",
      "✅ İşlem onaylandı. TxHash: 0xa3b2...",
    ],
  },
  {
    id: "loopin",
    title: "Loopin",
    description:
      "Kullanıcıların lokasyon bazlı etkinlikler oluşturup sosyalleşebildiği tam yığın mobil uygulama. Kotlin MVVM + Dagger Hilt mimarisi ile Node.js/MySQL backend.",
    type: "phone",
    category: "kotlin",
    techStack: ["Kotlin", "MVVM", "Dagger Hilt", "Retrofit", "Node.js", "MySQL"],
    glowColor: "purple",
    githubUrl: "https://github.com/IsikYildiz/Loopin",
  },
  {
    id: "chess-fen",
    title: "AI Satranç FEN Dönüştürücü",
    description:
      "Satranç tahtası fotoğraflarını dijital FEN formatına dönüştüren bilgisayarlı görü projesi. YOLOv8 + Roboflow ile eğitilen nesne tanıma modeli, Flask API üzerinden Kotlin ile entegre.",
    type: "terminal",
    category: "ai",
    techStack: ["Python", "YOLOv8", "Roboflow", "Flask", "Kotlin", "OpenCV"],
    glowColor: "purple",
    githubUrl: "https://github.com/umutsibara/AI-Learning-Projects",
    demoData: [
      "$ chess-fen --image board.jpg --model yolov8",
      "> Loading YOLOv8 model (Roboflow)... ✓",
      "> Running object detection... ✓",
      "> Pieces detected: 32/32",
      "",
      "🤖 DETECTION RESULTS:",
      "   ♖ Rook   @ [a1, h1, a8, h8]",
      "   ♕ Queen  @ [d1] confidence: 0.97",
      "   ♙ Pawn   @ [a2-h2] × 8",
      "",
      "📌 FEN OUTPUT:",
      "   rnbqkbnr/pppppppp/8/8/",
      "   4P3/8/PPPP1PPP/RNBQKBNR",
      "   w KQkq e3 0 1",
      "",
      "✅ Dönüştürme tamamlandı. (0.8s)",
    ],
  },
];
