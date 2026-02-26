export interface TimelineEntry {
  id: string;
  type: "work" | "education" | "project";
  title: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
  highlight?: boolean;
}

export const timelineEntries: TimelineEntry[] = [
  {
    id: "akdeniz-staj",
    type: "work",
    title: "Android Developer – Yaz Stajyeri",
    company: "Akdeniz Üniversitesi Bilgi İşlem Daire Başkanlığı",
    period: "Temmuz 2025 – Ekim 2025",
    description:
      "Akdeniz Üniversitesi için Kan Takip Sistemi ve ESTM Uygulaması olmak üzere iki kurumsal ürün geliştirdim. QA tester olarak kalite kontrol süreçlerini yürüttüm; yapay zeka entegrasyonları ve algoritmik optimizasyon çalışmalarıyla teknik birikimimi kurumsal düzeyde derinleştirdim.",
    tags: ["Flutter", "Kotlin", "PHP", "MSSQL", "Docker", "YOLOv8"],
    highlight: true,
  },
  {
    id: "gdsc",
    type: "work",
    title: "Çekirdek Ekip Üyesi",
    company: "Google Developer Student Clubs (GDSC) – Celal Bayar Üniversitesi",
    period: "Ekim 2022 – Haziran 2023",
    description:
      "Teknoloji atölyeleri ve seminer organizasyonlarında aktif rol aldım. Akran eğitimi ve etkinlik moderatörlüğü süreçlerinde yer alarak teknik sunum ve topluluk yönetimi becerilerimi geliştirdim.",
    tags: ["Community", "Leadership", "Tech Talks", "Android", "Flutter"],
    highlight: false,
  },
  {
    id: "coinpay-project",
    type: "project",
    title: "CoinPay – Blockchain Kripto Cüzdanı",
    company: "Kişisel Proje",
    period: "2024",
    description:
      "Polygon ağındaki kripto varlıkların NFC ile POS'larda harcanmasını sağlayan Android uygulaması. Web3j, Android Keystore ve Biyometrik doğrulama entegrasyonları içeriyor.",
    tags: ["Kotlin", "Web3j", "Polygon", "NFC", "Android Keystore"],
    highlight: true,
  },
  {
    id: "gamejam",
    type: "project",
    title: "Save the Elders – Game Jam 1. si 🏆",
    company: "Pagit Game Jam",
    period: "2023",
    description:
      "Unity ve C# ile Pagit Game Jam için geliştirilen stratejik 2D platform oyunu. Yarışmada birincilik ödülü kazandı.",
    tags: ["Unity", "C#", "Game Dev", "2D Platform"],
    highlight: true,
  },
  {
    id: "celal-bayar",
    type: "education",
    title: "Yazılım Mühendisliği (Lisans)",
    company: "Celal Bayar Üniversitesi",
    period: "2022 – 2026",
    description:
      "Yazılım geliştirme, veri yapıları, algoritma analizi, mobil uygulama tasarımı ve yapay zeka derslerini başarıyla sürdürüyor. GPA: 3.22/4.00.",
    tags: ["Algorithms", "Data Structures", "OOP", "Mobile Dev", "AI"],
    highlight: false,
  },
  {
    id: "lise",
    type: "education",
    title: "Bilişim Teknolojileri – Veritabanı Programcılığı",
    company: "İMKB Mesleki ve Teknik Anadolu Lisesi",
    period: "2018 – 2022",
    description:
      "Veritabanı programcılığı alanında meslek lisesi eğitimi. SQL, temel programlama ve BT altyapısı üzerine kapsamlı eğitim.",
    tags: ["SQL", "Database", "IT Infrastructure"],
    highlight: false,
  },
];
