import { useEffect, useRef, useState } from "react";
import { Loader2, MessageCircle, Send } from "lucide-react";
import type { CoachMessage } from "../../types";

/* ---------------------------- COACH TMI (chat via Claude API) ---------------------------- */

const COACH_SYSTEM_PROMPT = `Tu es "Coach TMI", un formateur virtuel patient, encourageant et exigeant, spécialisé dans la préparation au Titre Professionnel Technicien(ne) de Maintenance Industrielle (niveau 4, RNCP 35191, formation AFORP démarrant en septembre 2026).
Le programme couvre : environnement industriel, mathématiques appliquées, électrotechnique industrielle, mécanique industrielle, pneumatique/hydraulique, automatismes, maintenance corrective/préventive/améliorative, diagnostic de pannes, sécurité industrielle (NF C 18-510), GMAO et communication professionnelle.
Tu t'adresses à un débutant complet. Utilise un vocabulaire simple, des exemples concrets d'usine ou d'entrepôt logistique (convoyeurs, moteurs, capteurs), et explique toujours étape par étape.
Tu peux : répondre aux questions, reformuler un cours plus simplement, poser des questions pour vérifier la compréhension, créer des exercices ou des scénarios de panne personnalisés, analyser des erreurs, préparer une séance de révision minutée, faire réciter une leçon, jouer le rôle d'un responsable maintenance en entreprise pour des mises en situation.
Reste toujours bienveillant mais rigoureux sur la sécurité : rappelle systématiquement que la sécurité passe avant la réparation dès qu'un scénario technique est abordé.
Réponds en français, de façon concise et structurée, avec des listes courtes si utile.`;

interface CoachTMIProps {
  dark: boolean;
}

export function CoachTMI({ dark }: CoachTMIProps) {
  const [messages, setMessages] = useState<CoachMessage[]>([
    { role: "assistant", content: "Bonjour ! Je suis Coach TMI 👷 Je suis là pour t'accompagner jusqu'à ta rentrée en septembre 2026. Tu peux me poser une question, me demander un exercice personnalisé, une nouvelle panne à diagnostiquer, ou une séance de révision minutée. Par quoi veux-tu commencer ?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, loading]);

  async function send(text?: string) {
    const content = text ?? input;
    if (!content.trim() || loading) return;
    const newMessages: CoachMessage[] = [...messages, { role: "user", content }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);
    try {
      const endpoint = import.meta.env.VITE_COACH_API_URL;
      let reply = "";
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ system: COACH_SYSTEM_PROMPT, messages: newMessages }),
        });
        if (!res.ok) throw new Error(`Coach API: ${res.status}`);
        const data = await res.json();
        reply = data.reply || data.text || "";
      } else {
        const lower = content.toLowerCase();
        if (lower.includes("ohm")) reply = "La loi d’Ohm relie la tension U, la résistance R et l’intensité I : U = R × I. Exemple : avec 24 V et 12 Ω, I = 24 / 12 = 2 A. À toi : avec 230 V et 50 Ω, quelle intensité obtiens-tu ?";
        else if (lower.includes("panne")) reply = "Mise en situation : un convoyeur ne démarre plus. Sécurité d’abord : sécurise la zone et vérifie l’arrêt d’urgence. Puis contrôle dans cet ordre : alimentation, protections, chaîne de sécurité, capteurs, contacteur, variateur et moteur. Donne-moi tes trois premières vérifications et je corrige ton raisonnement.";
        else if (lower.includes("20 minutes") || lower.includes("séance")) reply = "Séance de 20 minutes : 5 min de rappel sur la sécurité et la consignation, 7 min sur la loi d’Ohm, 5 min de diagnostic d’un convoyeur, puis 3 min de quiz et correction.";
        else reply = "Mode hors ligne actif. Je peux déjà t’aider sur la loi d’Ohm, la sécurité, les calculs et les diagnostics de convoyeur. Pour un coach IA complet, configure VITE_COACH_API_URL vers un serveur sécurisé : aucune clé API ne doit être placée dans le navigateur.";
      }
      setMessages((m) => [...m, { role: "assistant", content: reply || "Je n’ai pas reçu de réponse exploitable." }]);
    } catch (e) {
      setMessages((m) => [...m, { role: "assistant", content: "Une erreur est survenue lors de la connexion au Coach. Réessaie dans un instant." }]);
    } finally {
      setLoading(false);
    }
  }

  const quickActions = [
    "Explique-moi la dernière leçon plus simplement",
    "Crée-moi un exercice personnalisé sur l'électricité",
    "Donne-moi une nouvelle panne à diagnostiquer",
    "Prépare-moi une séance de révision de 20 minutes",
    "Fais-moi réciter la loi d'Ohm",
    "Joue le rôle d'un responsable maintenance qui m'accueille",
  ];

  return (
    <div className="flex flex-col h-[calc(100vh-160px)]">
      <h2 className={`text-xl font-bold flex items-center gap-2 mb-3 ${dark ? "text-white" : "text-slate-900"}`}>
        <MessageCircle className="text-amber-400" /> Coach TMI
      </h2>
      <div ref={scrollRef} className={`flex-1 overflow-y-auto space-y-3 rounded-xl p-3 border ${dark ? "bg-slate-800/40 border-slate-700" : "bg-white border-slate-200"}`}>
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm whitespace-pre-wrap ${m.role === "user" ? "bg-amber-400 text-slate-900" : dark ? "bg-slate-700 text-slate-100" : "bg-slate-100 text-slate-800"}`}>
              {m.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className={`rounded-2xl px-3.5 py-2.5 text-sm flex items-center gap-2 ${dark ? "bg-slate-700 text-slate-300" : "bg-slate-100 text-slate-600"}`}>
              <Loader2 size={14} className="animate-spin" /> Coach TMI réfléchit...
            </div>
          </div>
        )}
      </div>
      <div className="flex gap-2 overflow-x-auto py-2 no-scrollbar">
        {quickActions.map((qa, i) => (
          <button key={i} onClick={() => send(qa)} className={`shrink-0 text-xs px-3 py-1.5 rounded-full border whitespace-nowrap ${dark ? "border-slate-600 text-slate-300 hover:border-amber-400" : "border-slate-300 text-slate-600 hover:border-amber-400"}`}>
            {qa}
          </button>
        ))}
      </div>
      <div className="flex gap-2 mt-1">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Pose ta question au Coach TMI..."
          className={`flex-1 rounded-lg px-3 py-2.5 text-sm border ${dark ? "bg-slate-800 border-slate-600 text-white placeholder-slate-500" : "bg-white border-slate-300 text-slate-900"}`}
        />
        <button onClick={() => send()} disabled={loading} className="w-11 h-11 rounded-lg bg-amber-400 text-slate-900 flex items-center justify-center shrink-0 disabled:opacity-40">
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}
