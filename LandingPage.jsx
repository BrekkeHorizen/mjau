import { useState } from "react";

export default function LandingPage() {
  const [language, setLanguage] = useState("no");

  const content = {
    no: {
      headline: "AI-generert tekst på sekunder",
      subheadline: "Trenger du en tekst som treffer – uten å skrive den selv? Prompto.ai gir deg ferdige innlegg, e-poster og beskrivelser på få sekunder.",
      cta: "Start gratis prøveperiode",
      getStarted: "Kom i gang",
      features: [
        "5 gratis genereringer",
        "Skreddersydde AI-maler",
        "Lagre og rediger tekster",
        "Støtte for norsk og engelsk"
      ],
      howItWorks: [
        "Velg type tekst du vil lage",
        "Fyll ut noen enkle felt",
        "Få ferdig tekst du kan bruke med én gang"
      ],
      audience: [
        "Markedsførere",
        "Gründere",
        "Jobbsøkere",
        "Nettbutikk-eiere",
        "Studenter",
        "Kreatører"
      ],
      examples: [
        {
          title: "Produktbeskrivelse",
          input: "Tannkrem for sensitivt tannkjøtt",
          output: "En mild, men effektiv tannkrem som beskytter tennene dine – uten å irritere tannkjøttet."
        },
        {
          title: "Instagram-post",
          input: "Lansering av ny økologisk hudkrem",
          output: "Vår nye økologiske hudkrem er her 🌿 Naturlig pleie for naturlig vakker hud. Finnes nå i nettbutikken."
        }
      ]
    },
    en: {
      headline: "AI-generated content in seconds",
      subheadline: "Need a well-written text without writing it yourself? Prompto.ai creates posts, emails and descriptions in seconds.",
      cta: "Start your free trial",
      getStarted: "Get Started",
      features: [
        "5 free generations",
        "Tailored AI templates",
        "Save and edit your texts",
        "Supports English and Norwegian"
      ],
      howItWorks: [
        "Choose the type of text you want to create",
        "Fill in a few simple fields",
        "Get ready-to-use text instantly"
      ],
      audience: [
        "Marketers",
        "Entrepreneurs",
        "Job seekers",
        "E-commerce owners",
        "Students",
        "Creators"
      ],
      examples: [
        {
          title: "Product description",
          input: "Toothpaste for sensitive gums",
          output: "A gentle yet effective toothpaste that protects your teeth – without irritating your gums."
        },
        {
          title: "Instagram post",
          input: "Launch of new organic skincare cream",
          output: "Our new organic cream is here 🌿 Natural care for naturally beautiful skin. Available now in our shop."
        }
      ]
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-900 px-6 py-10 flex flex-col items-center">
      <div className="w-full max-w-4xl text-center">
        <div className="flex justify-end mb-6">
          <select
            onChange={(e) => setLanguage(e.target.value)}
            value={language}
            className="border border-gray-300 p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="no">Norsk</option>
            <option value="en">English</option>
          </select>
        </div>
        <h1 className="text-5xl font-extrabold mb-6 leading-tight">{t.headline}</h1>
        <p className="text-xl mb-8 text-gray-700">{t.subheadline}</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-xl shadow-lg transition-transform hover:scale-105">
          {t.cta}
        </button>
        <ul className="mt-12 text-left grid grid-cols-1 sm:grid-cols-2 gap-6">
          {t.features.map((feature, i) => (
            <li key={i} className="bg-white border border-gray-200 p-6 rounded-xl shadow-md text-lg">
              {feature}
            </li>
          ))}
        </ul>

        {/* How it works section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-4">{language === "no" ? "Slik fungerer det" : "How it works"}</h2>
          <ol className="text-left grid grid-cols-1 sm:grid-cols-3 gap-4 text-lg">
            {t.howItWorks.map((step, i) => (
              <li key={i} className="bg-blue-100 p-4 rounded-xl shadow">{step}</li>
            ))}
          </ol>
        </div>

        {/* Audience section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-4">{language === "no" ? "Hvem passer det for?" : "Who's it for?"}</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-lg">
            {t.audience.map((group, i) => (
              <li key={i} className="bg-white border p-4 rounded-xl shadow text-center">{group}</li>
            ))}
          </ul>
        </div>

        {/* Examples section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-4">{language === "no" ? "Eksempler" : "Examples"}</h2>
          <div className="grid grid-cols-1 gap-6">
            {t.examples.map((ex, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md text-left">
                <h3 className="text-xl font-semibold mb-2">{ex.title}</h3>
                <p><strong>Input:</strong> {ex.input}</p>
                <p><strong>Output:</strong> {ex.output}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Get started button */}
        <div className="mt-20">
          <a
            href="/login"
            className="inline-block bg-blue-700 text-white text-xl px-8 py-4 rounded-full shadow-lg hover:bg-blue-800 hover:scale-105 transition-transform"
          >
            {t.getStarted}
          </a>
        </div>
      </div>
    </div>
  );
}