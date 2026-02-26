"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function AIResumeButton() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: "user" | "ai"; text: string }[]>([
    {
      role: "ai",
      text: "Merhaba! Ben Umut'un AI asistanıyım 🤖 Deneyimi, projeleri veya yetenekleri hakkında ne öğrenmek istersiniz?",
    },
  ]);

  const demoResponses: Record<string, string> = {
    default:
      "Umut mobile-first geliştirme yaklaşımıyla Flutter ve Kotlin kullanarak hem Android hem iOS uygulamaları geliştiriyor. Firebase, Supabase ve Gemini API entegrasyonları konusunda güçlü deneyime sahip.",
    flutter: "Flutter konusunda 2+ yıl deneyimi var. Riverpod, go_router, Freezed gibi modern paketleri aktif kullanıyor. Yayınlanmış uygulamaları Play Store'da mevcut.",
    ai: "Gemini Pro API ile doğal dil işleme ve içerik analizi projeleri geliştirdi. YouTube video özetleme ve akıllı quiz uygulamaları bunların en güzel örnekleri.",
    deneyim: "Yazılım geliştirme stajları ve üniversite bitirme projesi dahil 3+ yıl aktif geliştirme deneyimi. Clean Architecture ve SOLID prensiplerine bağlı.",
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setInput("");

    const lower = userMsg.toLowerCase();
    const key = Object.keys(demoResponses).find((k) =>
      lower.includes(k)
    ) ?? "default";

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: demoResponses[key] },
      ]);
    }, 800);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setOpen(true)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 z-50 flex items-center gap-3 px-5 py-3 rounded-full font-medium text-sm text-white shadow-2xl"
        style={{
          background: "linear-gradient(135deg, #13B9FD 0%, #7F52FF 100%)",
          boxShadow: "0 0 30px rgba(127,82,255,0.4), 0 4px 20px rgba(0,0,0,0.3)",
        }}
      >
        <span className="text-lg">🤖</span>
        <span>AI CV&apos;im</span>
        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-400 animate-pulse" />
      </motion.button>

      {/* Chat Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-8 z-50 w-[340px] rounded-2xl overflow-hidden shadow-2xl"
            style={{ boxShadow: "0 0 60px rgba(19,185,253,0.2), 0 20px 60px rgba(0,0,0,0.5)" }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-4 py-3"
              style={{ background: "linear-gradient(135deg, #13B9FD20 0%, #7F52FF20 100%)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm"
                  style={{ background: "linear-gradient(135deg, #13B9FD, #7F52FF)" }}>
                  🤖
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">AI CV Asistanı</p>
                  <p className="text-xs text-[#13B9FD]">Powered by Gemini</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="text-slate-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="bg-[#0D1117] h-64 overflow-y-auto p-4 flex flex-col gap-3">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.role === "user" ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "text-white"
                        : "bg-[#1A1F2E] text-slate-300 border border-white/5"
                    }`}
                    style={
                      msg.role === "user"
                        ? { background: "linear-gradient(135deg, #13B9FD, #7F52FF)" }
                        : {}
                    }
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="bg-[#0D1117] border-t border-white/5 px-3 py-3 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Flutter, AI projeleri..."
                className="flex-1 bg-[#1A1F2E] border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#13B9FD]/50 transition-colors font-mono"
              />
              <button
                onClick={handleSend}
                className="px-3 py-2 rounded-lg text-white transition-all hover:scale-105"
                style={{ background: "linear-gradient(135deg, #13B9FD, #7F52FF)" }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
