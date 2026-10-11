"use client";

import { useState } from "react";

const templates = [
{ name: "Site vitrine", category: "Entreprise", icon: "🏢", description: "Présente une entreprise avec élégance." },
{ name: "Boutique en ligne", category: "Commerce", icon: "🛍️", description: "Présente tes produits et ton activité." },
{ name: "Portfolio créatif", category: "Créativité", icon: "🎨", description: "Mets tes projets et tes réalisations en valeur." },
{ name: "Agence digitale", category: "Entreprise", icon: "🚀", description: "Présente tes services numériques." },
{ name: "Formation en ligne", category: "Éducation", icon: "📚", description: "Organise et présente tes formations." },
{ name: "Application SaaS", category: "Technologie", icon: "💻", description: "Présente ton logiciel et ses avantages." },
];

const categories = ["Tout", "Entreprise", "Commerce", "Créativité", "Éducation", "Technologie"];

export default function Home() {
const [category, setCategory] = useState("Tout");
const [search, setSearch] = useState("");
const [selected, setSelected] = useState<string | null>(null);
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");

const filtered = templates.filter((template) => {
const matchesCategory = category === "Tout" || template.category === category;
const matchesSearch = "${template.name} ${template.description}".toLowerCase().includes(search.toLowerCase());
return matchesCategory && matchesSearch;
});

return (
<main className="min-h-screen bg-[#080b14] text-white">
<header className="border-b border-white/10">
<nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
<a href="#" className="text-xl font-black tracking-tight">
LaunchCraft<span className="text-violet-400">.</span>
</a>
<div className="hidden items-center gap-7 text-sm text-gray-300 sm:flex">
<a href="#modeles" className="hover:text-white">Modèles</a>
<a href="#services" className="hover:text-white">Services</a>
<a href="#contact" className="hover:text-white">Contact</a>
</div>
<a href="#modeles" className="rounded-full bg-violet-600 px-5 py-2.5 text-sm font-semibold hover:bg-violet-500">
Découvrir
</a>
</nav>
</header>

  <section className="relative overflow-hidden px-5 py-24 text-center sm:py-32">
    <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[100px]" />
    <div className="relative mx-auto max-w-4xl">
      <span className="inline-block rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-2 text-sm text-violet-300">
        ✨ Ton prochain projet commence ici
      </span>
      <h1 className="mt-8 text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
        Construis tes idées.
        <span className="block bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
          Lance ton avenir.
        </span>
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
        Découvre des modèles de sites web pour présenter ton entreprise,
        tes créations et tes projets numériques.
      </p>
      <div className="mt-9 flex flex-wrap justify-center gap-4">
        <a href="#modeles" className="rounded-xl bg-violet-600 px-7 py-4 font-bold shadow-lg shadow-violet-900/30 hover:bg-violet-500">
          Explorer les modèles ↗
        </a>
        <a href="#services" className="rounded-xl border border-white/15 px-7 py-4 font-semibold hover:bg-white/5">
          Nos services
        </a>
      </div>
      <div className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-400">
        <span>✓ Design moderne</span>
        <span>✓ Adapté au mobile</span>
        <span>✓ Plusieurs catégories</span>
      </div>
    </div>
  </section>

  <section id="modeles" className="mx-auto max-w-7xl px-5 py-16 sm:py-20">
    <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-400">Bibliothèque</p>
        <h2 className="mt-3 text-3xl font-black sm:text-4xl">Explore les modèles</h2>
        <p className="mt-3 text-gray-400">Trouve une idée adaptée à ton prochain projet.</p>
      </div>
      <div className="w-full sm:max-w-xs">
        <label htmlFor="search" className="sr-only">Rechercher un modèle</label>
        <input id="search" value={search} onChange={(event) => setSearch(event.target.value)}
          placeholder="Rechercher un modèle..." className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-violet-400" />
      </div>
    </div>

    <div className="mt-8 flex flex-wrap gap-2">
      {categories.map((item) => (
        <button key={item} onClick={() => setCategory(item)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition ${category === item ? "bg-violet-600 text-white" : "border border-white/10 text-gray-400 hover:bg-white/5"}`}>
          {item}
        </button>
      ))}
    </div>

    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {filtered.map((template) => (
        <article key={template.name} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-violet-400/40 hover:bg-white/[0.06]">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/15 text-3xl">
            {template.icon}
          </div>
          <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-violet-300">{template.category}</p>
          <h3 className="mt-2 text-xl font-bold">{template.name}</h3>
          <p className="mt-3 min-h-12 leading-6 text-gray-400">{template.description}</p>
          <button onClick={() => { setSelected(template.name); setMessage(""); }}
            className="mt-5 w-full rounded-xl border border-white/10 px-4 py-3 text-sm font-semibold transition hover:border-violet-400 hover:bg-violet-500/10">
            Choisir ce modèle →
          </button>
        </article>
      ))}
    </div>

    {filtered.length === 0 && (
      <p className="mt-10 text-center text-gray-400">Aucun modèle trouvé. Essaie une autre recherche.</p>
    )}

    {selected && (
      <div className="mt-8 rounded-2xl border border-violet-400/30 bg-violet-500/10 p-6">
        <h3 className="text-xl font-bold">Modèle sélectionné : {selected}</h3>
        <p className="mt-2 text-gray-300">Cette sélection est une démonstration locale. Aucun site n’a encore été généré ou publié.</p>
        <button onClick={() => setSelected(null)} className="mt-4 rounded-lg border border-white/20 px-4 py-2 text-sm hover:bg-white/5">
          Fermer
        </button>
      </div>
    )}
  </section>

  <section id="services" className="border-y border-white/10 bg-white/[0.02] px-5 py-20">
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-400">Ce que nous proposons</p>
        <h2 className="mt-3 text-3xl font-black sm:text-4xl">Des idées aux projets</h2>
        <p className="mt-4 leading-7 text-gray-400">Une interface simple pour découvrir des concepts web et préparer tes prochaines créations.</p>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {[
          { icon: "🧭", title: "Découverte", description: "Explore des concepts de sites selon ton activité." },
          { icon: "🧩", title: "Inspiration", description: "Compare plusieurs styles et imagine ton projet." },
          { icon: "📱", title: "Interface responsive", description: "Profite d'une mise en page pensée pour mobile et ordinateur." },
        ].map((service) => (
          <div key={service.title} className="rounded-2xl border border-white/10 p-6">
            <span className="text-3xl">{service.icon}</span>
            <h3 className="mt-4 text-lg font-bold">{service.title}</h3>
            <p className="mt-2 leading-7 text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  <section id="contact" className="px-5 py-20">
    <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/5 p-7 text-center sm:p-12">
      <h2 className="text-3xl font-black">Reste informé</h2>
      <p className="mx-auto mt-3 max-w-xl leading-7 text-gray-400">Inscris une adresse e-mail pour tester l’interface de contact. Ce formulaire ne transmet pas encore les données à un serveur.</p>
      <form onSubmit={(event) => { event.preventDefault(); setMessage(email.trim() ? "Merci ! L’interface fonctionne, mais l’inscription n’est pas enregistrée sur un serveur." : "Saisis une adresse e-mail."); }}
        className="mx-auto mt-7 flex max-w-lg flex-col gap-3 sm:flex-row">
        <input type="email" required value={email} onChange={(event) => setEmail(event.target.value)}
          placeholder="Ton adresse e-mail" className="min-w-0 flex-1 rounded-xl border border-white/10 bg-[#080b14] px-4 py-3 outline-none focus:border-violet-400" />
        <button type="submit" className="rounded-xl bg-violet-600 px-6 py-3 font-bold hover:bg-violet-500">Tester</button>
      </form>
      {message && <p role="status" className="mt-4 text-sm text-violet-200">{message}</p>}
    </div>
  </section>

  <footer className="border-t border-white/10 px-5 py-7">
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-sm text-gray-500 sm:flex-row">
      <p>© {new Date().getFullYear()} LaunchCraft Studio</p>
      <p>Un point de départ pour tes idées numériques.</p>
    </div>
  </footer>
</main>

);
}
