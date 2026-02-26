import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammed Umut Şıbara — Android & Flutter Developer",
  description:
    "Kotlin ve Flutter uzmanı mobil geliştirici. Blockchain, AI entegrasyonu ve kurumsal uygulamalar alanında deneyimli. Akdeniz Üniversitesi stajyeri.",
  keywords: [
    "Flutter developer",
    "Kotlin developer",
    "Android developer",
    "Mobile app developer",
    "AI integration",
    "Blockchain",
    "Firebase",
    "Supabase",
    "Muhammed Umut Şıbara",
    "umutsibara",
    "Celal Bayar Üniversitesi",
  ],
  authors: [{ name: "Muhammed Umut Şıbara" }],
  openGraph: {
    title: "Muhammed Umut Şıbara — Android & Flutter Developer",
    description:
      "Kotlin ve Flutter uzmanı mobil geliştirici. Blockchain, AI ve kurumsal uygulamalar.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="dark">
      <body className="bg-[#0B0E14] text-slate-200 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
