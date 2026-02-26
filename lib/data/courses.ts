export type CourseProject = {
  title: string;
  description?: string;
  link?: string;
};

export type Course = {
  id: string;
  code: string;
  title: string;
  semester: string;
  grade: string;
  ects: number;
  note?: string;
  projects?: CourseProject[];
  highlight?: boolean;
};

export const generalGPA = "3.32";

export const coursesData: Course[] = [
  {
    id: "lise-csharp",
    code: "C# / .NET",
    title: "C# Windows Forms ve Console Uygulamaları",
    semester: "Lise Eğitimi",
    grade: "-",
    ects: 0,
    highlight: true,
    projects: [
      {
        title: "C# Öğrenme Serüveni (Tüm Projeler)",
        description: "Temel programlama kavramlarından, UI uygulamalarına kadar geliştirilen çeşitli Windows Forms ve Console projeleri.",
        link: "https://github.com/umutsibara/CSharp-Learning-Journey",
      },
    ],
  },
  {
    id: "yzm-1109",
    code: "YZM 1109",
    title: "Algoritma ve Programlama I",
    semester: "1. Sınıf Güz",
    grade: "BA",
    ects: 7,
    projects: [
      {
        title: "Sezar Şifreleme ile Metin Şifreleme",
        description: "Kullanıcıdan veri alarak Sezar algoritmasıyla metin şifreleme ve dosya I/O (okuma/yazma) işlemleri yapan bir C projesi.",
        link: "https://github.com/umutsibara/C-Proje-Odevleri?tab=readme-ov-file#c-programlama-projeleri",
      },
    ],
  },
  {
    id: "yzm-1110",
    code: "YZM 1110",
    title: "Algoritma ve Programlama II",
    semester: "1. Sınıf Bahar",
    grade: "AA",
    ects: 8,
    highlight: true,
    projects: [
      {
        title: "Matris Kullanımı Projesi",
        description: "İki boyutlu diziler ve iç içe döngüler kullanılarak belirli boyuttaki bir matrise döngüsel metin yerleştiren C uygulaması.",
        link: "https://github.com/umutsibara/C-Proje-Odevleri?tab=readme-ov-file#c-programlama-projeleri",
      },
    ],
  },
  {
    id: "yzm-2121",
    code: "YZM 2121",
    title: "Nesneye Yönelik Programlama",
    semester: "2. Sınıf Güz",
    grade: "AA",
    ects: 8,
    highlight: true,
    projects: [
      { 
        title: "OOP in Java Lab ve Projeleri",
        description: "Kalıtım, Polimorfizm, Encapsulation vb. temel OOP prensiplerinin uygulandığı laboratuvar çalışmaları ve bir Kalori Takip Sistemi final projesi.",
        link: "https://github.com/umutsibara/OOP-Java-Labs-and-Project"
      }
    ]
  },
  {
    id: "yzm-2124",
    code: "YZM 2124",
    title: "Veri Yapıları",
    semester: "2. Sınıf Bahar",
    grade: "BB",
    ects: 8,
    projects: [
      { 
        title: "C++ Veri Yapıları Projeleri",
        description: "Tek yönlü bağlı listeler ile indeks bazlı ekleme/silme ve Dinamik bellek yönetimiyle (Yığın/Kuyruk) Market Kasa Sistemi simülasyonu.",
        link: "https://github.com/umutsibara/cpp-data-structures-projects"
      }
    ]
  },
  {
    id: "yzm-3107",
    code: "YZM 3107",
    title: "Veritabanı Yönetim Sistemleri",
    semester: "3. Sınıf Güz",
    grade: "BB",
    ects: 5,
    projects: [
      { 
        title: "Çağrı Merkezi Veritabanı Uygulaması",
        description: "Kapsamlı SQL Server (Stored Procedure, Trigger, View vb.) destekli ve C# UI tabanlı bir Çağrı Merkezi CRM ve Prim yönetim sistemi.",
        link: "https://github.com/umutsibara/CSharp-Learning-Journey/tree/master/Veritabani_Proje"
      }
    ]
  },
  {
    id: "yzm-3215",
    code: "YZM 3215",
    title: "İleri Web Programlama",
    semester: "3. Sınıf Güz",
    grade: "AA",
    ects: 5,
    highlight: true,
  },
  {
    id: "yzm-3226",
    code: "YZM 3226",
    title: "Makine Öğrenmesi",
    semester: "3. Sınıf Güz",
    grade: "BB",
    ects: 5,
    projects: [
      { 
        title: "Emlak Tahmin Uygulaması",
        description: "Scikit-Learn (Makine Öğrenmesi Modeli) kullanılarak emlak özellikleri üzerinden gerçek zamanlı fiyat tahmini yapan bir Streamlit web arayüzü.",
        link: "https://github.com/umutsibara/AI-Learning-Projects"
      }
    ]
  },
  {
    id: "yzm-3112",
    code: "YZM 3112",
    title: "Algoritma Analizi ve Tasarımı",
    semester: "3. Sınıf Bahar",
    grade: "BB",
    ects: 5,
    projects: [
      { 
        title: "Optimizasyon Algoritmaları (WLP, TSP, Knapsack)",
        description: "WLP, TSP ve Knapsack NP-zor problemleri için Python ile kesin (Branch&Bound vb.) ve metasezgisel (Genetik Algoritma, VNS) çözüm yöntemlerinin hız/performans ölçümleri yapıldı.",
        link: "https://github.com/umutsibara/daaa-projects" 
      },
    ]
  },
  {
    id: "yzm-3214",
    code: "YZM 3214",
    title: "Mobil Uygulama Geliştirme",
    semester: "3. Sınıf Bahar",
    grade: "BA",
    ects: 5,
    projects: [
      { title: "Mobil Uygulama Projesi" }
    ]
  },
  {
    id: "yzm-3230",
    code: "YZM 3230",
    title: "Bilgi Tabanlı Sistemler",
    semester: "3. Sınıf Bahar",
    grade: "BB",
    ects: 5,
    note: "* Sektörde çalışan eski mezundan siber güvenlik dersleri alındı.",
    projects: [
      { title: "Bilgi Tabanlı Sistemler Ödevi" }
    ]
  },
  {
    id: "yzm-3231",
    code: "YZM 3231",
    title: "Derin Öğrenme",
    semester: "3. Sınıf Bahar",
    grade: "BB",
    ects: 5,
    projects: [
      { 
        title: "Chess Image to FEN Dönüştürücü",
        description: "TensorFlow/Keras derin öğrenme modelleri kullanılarak satranç tahtası görselini okuyup (FEN notasyonu), Android uygulamasında dijital oynanabilir hale getiren ve hamle/zamanlamaları takip eden bir sistem.",
        link: "https://github.com/umutsibara/AI-Learning-Projects"
      }
    ]
  },
  {
    id: "yzm-4105",
    code: "YZM 4105",
    title: "Sosyal Sorumluluk",
    semester: "4. Sınıf Güz",
    grade: "AA",
    ects: 1,
    projects: [
      { title: "Patitakip Projesi" }
    ]
  },
  {
    id: "yzm-4301",
    code: "YZM 4301",
    title: "Veri Madenciliği",
    semester: "4. Sınıf Güz",
    grade: "CB",
    ects: 5,
    projects: [
      { title: "Veri Madenciliği Projesi" }
    ]
  },
  {
    id: "yzm-4331",
    code: "YZM 4331",
    title: "Karar Destek Sistemleri",
    semester: "4. Sınıf Güz",
    grade: "AA",
    ects: 5,
    note: "* Colab üzerinden LLM eğitimi (Fine-tune ve RAG) görüldü.",
    highlight: true,
    projects: [
      { title: "Karar Destek Sistemleri Projesi" }
    ]
  },
];
