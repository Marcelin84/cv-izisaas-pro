import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Download,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Award,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Sparkles,
  Send,
  Copy,
  Check,
  ArrowUpRight,
  Calculator,
  Globe,
  Bot,
  Eye,
  Printer,
  X,
  Menu
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const compRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showCvModal, setShowCvModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Experience Data
  const experiences = [
    {
      period: "2016 — PRÉSENT",
      role: "Comptable & Gestionnaire Financier",
      company: "ONG Partenaire de Compassion Internationale",
      location: "Lomé, Togo",
      type: "Poste Permanent",
      description: "Recruté sur concours sélectif en juin 2016. Pilotage intégral de la gestion financière et comptable d'une organisation partenaire chrétienne en stricte conformité avec les standards internationaux de Compassion Internationale.",
      bullets: [
        "Exécution et ordonnancement des paiements dans le respect absolu des procédures administratives et financières.",
        "Tenue rigoureuse de la comptabilité générale, analytique et rapprochements bancaires exhaustifs.",
        "Élaboration et traitement mensuel de la paie du personnel, déclarations sociales et fiscales.",
        "Préparation minutieuse des clôtures d'exercice et audit de conformité avec les auditeurs internationaux."
      ],
      tags: ["SAGE Comptabilité", "Safina", "Gestion de la Paie", "Contrôle Budgétaire", "Audit International"]
    },
    {
      period: "2024 — PRÉSENT",
      role: "Spécialiste Sourcing International & Commerce Digital",
      company: "Activités Indépendantes & E-Commerce",
      location: "International / Togo",
      type: "Initiative Entrepreneuriale",
      description: "Développement d'une chaîne logistique et d'approvisionnement en ligne depuis la Chine avec sécurisation totale des flux transactionnels ('zéro risque').",
      bullets: [
        "Sourcing direct auprès de fabricants chinois qualifiés et optimisation des coûts d'importation.",
        "Sécurisation des transferts de fonds et maîtrise des process de dédouanement et fret.",
        "Création de contenus vidéos UGC assistés par Intelligence Artificielle (IA) pour promouvoir des produits à fort potentiel."
      ],
      tags: ["Sourcing Chine", "Zéro Risque", "Logistique Fret", "Vidéos UGC", "IA Générative"]
    },
    {
      period: "2014 — 2016",
      role: "Enseignant / Formateur Académique",
      company: "Établissement Scolaire « MEKA »",
      location: "Lomé, Togo",
      type: "Enseignement Général",
      description: "Enseignement au Collège d'Enseignement Général (CEG) en parallèle des études universitaires en sciences de gestion.",
      bullets: [
        "Transmission de méthodes de travail rigoureuses et animation des classes d'élèves.",
        "Gestion administrative des dossiers d'évaluation, bulletins scolaires et relation pédagogique.",
        "Développement d'une forte discipline personnelle et de qualités d'écoute et d'organisation."
      ],
      tags: ["Pédagogie", "Gestion Administrative", "Rigueur d'Organisation", "Transmission"]
    }
  ];

  // Skills Data for Grid Mastery pattern
  const skills = [
    {
      name: "Comptabilité & Contrôle de Gestion",
      level: 96,
      category: "Finance & Normes",
      desc: "Tenue des grands livres, balances, écritures de clôture, respect des procédures administratives et financières.",
      tools: ["SAGE", "Safina", "SYSCOHADA", "Reporting"]
    },
    {
      name: "Gestion de la Paie & Déclarations",
      level: 94,
      category: "Ressources & Fiscalité",
      desc: "Traitement complet des salaires, calculs des charges sociales, impôts sur salaires et conformité légale.",
      tools: ["Bulletins de paie", "CNSS", "Fiscalité togolaise"]
    },
    {
      name: "Expertise Tableurs & Analyse",
      level: 92,
      category: "Outils Bureautiques",
      desc: "Conception de matrices automatisées, formules financières avancées, tableaux croisés dynamiques et reporting.",
      tools: ["Microsoft Excel Expert", "Word", "Bureautique Pro"]
    },
    {
      name: "Gouvernance & Audit ONG",
      level: 95,
      category: "Conformité & Partenariats",
      desc: "Exécution des budgets selon les directives de Compassion Internationale, justifications des dépenses et reporting transparent.",
      tools: ["Compassion Int.", "Normes Bailleurs", "Audit Interne"]
    },
    {
      name: "Sourcing International Chine",
      level: 89,
      category: "Logistique & E-commerce",
      desc: "Commande sécurisée en ligne depuis la Chine, gestion des fournisseurs, sécurisation des flux 'zéro risque' et logistique.",
      tools: ["Plateformes B2B Chine", "Paiements Sécurisés", "Supply Chain"]
    },
    {
      name: "Création Digitale & Outils IA",
      level: 85,
      category: "Innovation & Créativité",
      desc: "Production de vidéos de type UGC à forte conversion assistée par l'intelligence artificielle pour marques et e-boutiques.",
      tools: ["Vidéos UGC", "Outils IA Vidéo", "Prompt Engineering"]
    }
  ];

  // Education Data
  const education = [
    {
      year: "2019",
      degree: "Licence Professionnelle en Comptabilité Contrôle Audit (CCA)",
      school: "Université de Lomé — Faculté des Sciences de Gestion",
      description: "Formation approfondie en comptabilité approfondie, contrôle interne, audit financier, droit des affaires et analyse financière d'entreprise."
    },
    {
      year: "2025",
      degree: "Certification en Création de Vidéos UGC avec l'Intelligence Artificielle",
      school: "Formation Spécialisée en Ligne",
      description: "Maîtrise des workflows de génération de scripts, avatars synthétiques, montage dynamique et formats à fort engagement."
    },
    {
      year: "2024",
      degree: "Certificat Pratique — Achats & Sourcing en Chine en Ligne",
      school: "Formation Internationale E-Commerce",
      description: "Méthodologie complète pour identifier des fournisseurs fiables, négocier les volumes, contrôler la conformité et éliminer tout risque financier."
    },
    {
      year: "2009",
      degree: "Baccalauréat de l'Enseignement du Second Degré",
      school: "Enseignement Secondaire Général, Lomé",
      description: "Obtention du diplôme ouvrant l'accès aux études universitaires en sciences de gestion et comptabilité."
    }
  ];

  // Stats for Hero
  const stats = [
    { label: "Années d'expérience", value: "10+" },
    { label: "Budget & audit", value: "100%" },
    { label: "Localisation", value: "Lomé, Togo" }
  ];

  useEffect(() => {
    // Scroll detection for Navbar morphing
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // GSAP Animations Context
    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;

      // Hero Entrance Stagger
      gsap.from(".hero-anim", {
        opacity: 0,
        y: isMobile ? 25 : 40,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out"
      });

      // About Section ScrollTrigger
      gsap.from(".about-fade", {
        scrollTrigger: {
          trigger: "#about",
          start: "top 85%",
        },
        opacity: 0,
        y: isMobile ? 20 : 35,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out"
      });

      // Experience Cards Slide In - responsive X displacement
      gsap.utils.toArray(".timeline-card-left").forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
          opacity: 0,
          x: isMobile ? -20 : -50,
          duration: 0.8,
          ease: "power3.out"
        });
      });

      gsap.utils.toArray(".timeline-card-right").forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
          opacity: 0,
          x: isMobile ? 20 : 50,
          duration: 0.8,
          ease: "power3.out"
        });
      });

      // Timeline Pulse Dots
      gsap.utils.toArray(".timeline-dot").forEach((dot) => {
        gsap.fromTo(dot,
          { scale: 0.5, boxShadow: "0 0 0px #7B61FF" },
          {
            scrollTrigger: {
              trigger: dot,
              start: "top 85%",
            },
            scale: 1,
            boxShadow: "0 0 16px #7B61FF",
            duration: 0.6,
            ease: "back.out(2)"
          }
        );
      });

      // Skills Circular Progress & Numbers
      gsap.utils.toArray(".skill-card").forEach((card) => {
        const circle = card.querySelector(".skill-circle-progress");
        const countSpan = card.querySelector(".skill-count");
        const targetPercent = parseInt(card.getAttribute("data-percent") || "0", 10);
        const radius = 38;
        const circumference = 2 * Math.PI * radius;

        if (circle) {
          const targetOffset = circumference - (targetPercent / 100) * circumference;
          gsap.fromTo(circle,
            { strokeDashoffset: circumference },
            {
              strokeDashoffset: targetOffset,
              duration: 1.4,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
              }
            }
          );
        }

        if (countSpan) {
          const counterObj = { val: 0 };
          gsap.to(counterObj, {
            val: targetPercent,
            duration: 1.4,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
            onUpdate: () => {
              countSpan.innerText = Math.round(counterObj.val) + "%";
            }
          });
        }
      });

      // Education Cards Fade Up Stagger
      gsap.from(".edu-card", {
        scrollTrigger: {
          trigger: "#formation",
          start: "top 85%",
        },
        opacity: 0,
        y: 25,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out"
      });

      // Contact Section Stagger
      gsap.from(".contact-anim", {
        scrollTrigger: {
          trigger: "#contact",
          start: "top 85%",
        },
        opacity: 0,
        y: 25,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out"
      });

    }, compRef);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      ctx.revert();
    };
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("marcelin.ayissou@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  return (
    <div ref={compRef} className="min-h-screen bg-vide text-fantome font-sans selection:bg-accent selection:text-white relative overflow-x-hidden max-w-full">

      {/* ========================================================
          A. NAVBAR — "La Signature Flottante"
      ======================================================== */}
      <header className="fixed top-3 sm:top-5 inset-x-0 z-40 flex justify-center px-3 sm:px-4 pointer-events-none no-print">
        <nav
          className={`pointer-events-auto flex items-center justify-between gap-2 sm:gap-6 px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-full transition-all duration-300 max-w-4xl w-full ${scrolled
              ? 'bg-vide/90 backdrop-blur-xl border border-white/10 shadow-neon shadow-accent/20'
              : 'bg-vide/40 backdrop-blur-md border border-white/5'
            }`}
        >
          {/* Brand Initials / Name */}
          <a href="#" className="flex items-center gap-2 group link-lift shrink-0">
            <span className="w-8 h-8 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-xs font-mono font-bold text-accent group-hover:bg-accent group-hover:text-vide transition-colors">
              MA
            </span>
            <span className="font-semibold text-xs sm:text-sm tracking-tight inline-block">
              Marcelin <span className="text-accent">Ayissou</span>
            </span>
          </a>

          {/* Anchor Links (Desktop) */}
          <div className="hidden md:flex items-center gap-5 lg:gap-6 text-xs uppercase tracking-wider font-medium text-fantome/70">
            <a href="#about" className="hover:text-accent link-lift transition-colors">À propos</a>
            <a href="#experience" className="hover:text-accent link-lift transition-colors">Expérience</a>
            <a href="#competences" className="hover:text-accent link-lift transition-colors">Compétences</a>
            <a href="#formation" className="hover:text-accent link-lift transition-colors">Formation</a>
            <a href="#contact" className="hover:text-accent link-lift transition-colors">Contact</a>
          </div>

          {/* Action CTAs in Nav */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              onClick={() => setShowCvModal(true)}
              className="p-1.5 sm:px-3 sm:py-1.5 text-xs font-medium rounded-full bg-white/5 hover:bg-white/10 text-fantome border border-white/10 flex items-center gap-1.5 transition-colors"
              title="Aperçu interactif du CV"
            >
              <Eye className="w-3.5 h-3.5 text-accent" />
              <span className="hidden sm:inline">Aperçu</span>
            </button>

            <a
              href="/cv-marcelin-ayissou.pdf"
              download="CV_Marcelin_Ayissou_Comptable.pdf"
              className="btn-magnetic flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 text-xs font-medium rounded-full bg-accent text-vide hover:bg-accent-light shadow-sm shadow-accent/30 font-sans"
            >
              <Download className="w-3.5 h-3.5 stroke-[2.5]" />
              <span className="font-semibold">CV PDF</span>
            </a>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-fantome transition-colors ml-0.5"
              aria-label="Ouvrir le menu mobile"
            >
              {mobileMenuOpen ? <X className="w-4 h-4 text-accent" /> : <Menu className="w-4 h-4 text-accent" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-16 inset-x-3 z-40 md:hidden bg-vide/95 backdrop-blur-2xl border border-white/15 rounded-3xl p-4 shadow-2xl flex flex-col gap-2.5 no-print animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col gap-1 font-mono text-xs tracking-wider uppercase text-fantome/85">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-white/5 hover:text-accent transition-colors flex items-center justify-between"
            >
              <span>01 • À propos</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-white/5 hover:text-accent transition-colors flex items-center justify-between"
            >
              <span>02 • Expérience</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
            </a>
            <a
              href="#competences"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-white/5 hover:text-accent transition-colors flex items-center justify-between"
            >
              <span>03 • Compétences</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
            </a>
            <a
              href="#formation"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-white/5 hover:text-accent transition-colors flex items-center justify-between"
            >
              <span>04 • Formation</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-white/5 hover:text-accent transition-colors flex items-center justify-between"
            >
              <span>05 • Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
            </a>
          </div>

          <div className="pt-2.5 border-t border-white/10 flex items-center gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setShowCvModal(true);
              }}
              className="flex-1 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
            >
              <Eye className="w-3.5 h-3.5 text-accent" />
              <span>Aperçu</span>
            </button>
            <a
              href="/cv-marcelin-ayissou.pdf"
              download="CV_Marcelin_Ayissou_Comptable.pdf"
              className="flex-1 py-2 rounded-full bg-accent text-vide text-xs font-bold flex items-center justify-center gap-1.5 shadow-neon transition-colors"
            >
              <Download className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>CV PDF</span>
            </a>
          </div>
        </div>
      )}


      {/* ========================================================
          B. SECTION HERO — "La Première Impression"
      ======================================================== */}
      <section className="relative min-h-[100dvh] flex flex-col justify-center items-center px-4 sm:px-6 pt-20 sm:pt-24 pb-12 overflow-hidden">
        {/* Ambient Dark Neon Background Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[22rem] sm:w-[38rem] md:w-[50rem] h-[22rem] sm:h-[38rem] md:h-[50rem] bg-accent/15 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none -z-10" />
        <div className="absolute bottom-10 right-10 w-[14rem] sm:w-[20rem] h-[14rem] sm:h-[20rem] bg-[#53389E]/20 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none -z-10" />

        {/* Hero Content Wrapper */}
        <div className="max-w-4xl w-full mx-auto flex flex-col items-center text-center z-10">

          {/* Profile Photo Placeholder with Neon Ring & Status Badge */}
          <div className="hero-anim relative mb-5 sm:mb-6">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full p-[3px] bg-gradient-to-tr from-accent via-accent-light to-transparent shadow-neon">
              <div className="w-full h-full rounded-full bg-surface-dark border-2 border-vide flex flex-col items-center justify-center text-fantome relative overflow-hidden group">
                <span className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white/90">
                  MA
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase font-mono tracking-widest text-accent mt-0.5">
                  Lomé • Togo
                </span>
                {/* Subtle digital aura grid overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(#7B61FF_1px,transparent_1px)] [background-size:12px_12px] opacity-25" />
              </div>
            </div>
            {/* Live Indicator Pill */}
            <div className="absolute -bottom-2 inset-x-0 flex justify-center">
              <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono font-medium bg-vide/90 border border-emerald-500/30 text-emerald-400 backdrop-blur-md shadow-lg">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-pulse" />
                En activité
              </span>
            </div>
          </div>

          {/* Full Name in Massive Sans Bold with Neon Glow */}
          <h1 className="hero-anim text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-2 sm:mb-3 text-glow leading-tight break-words max-w-full">
            Marcelin Amèvi <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-light to-white">Ayissou</span>
          </h1>

          {/* Professional Title in Serif Italic */}
          <p className="hero-anim font-serif italic text-lg sm:text-2xl md:text-3xl lg:text-4xl text-accent-light/95 max-w-2xl font-normal mb-6 sm:mb-8 px-2">
            Comptable & Spécialiste de la Gestion Financière
          </p>

          {/* Stats Bar in Monospace */}
          <div className="hero-anim w-full max-w-xl mx-auto mb-8 sm:mb-10 py-2.5 sm:py-3 px-2 sm:px-4 rounded-2xl bg-surface-dark/70 border border-white/10 backdrop-blur-md shadow-lg">
            <div className="grid grid-cols-3 divide-x divide-white/10 text-center">
              {stats.map((stat, i) => (
                <div key={i} className="px-1 sm:px-2">
                  <div className="font-mono text-sm sm:text-lg font-bold text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="font-mono text-[9px] sm:text-xs text-fantome/60 uppercase tracking-wider mt-0.5 leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons - Full width on mobile, inline on desktop */}
          <div className="hero-anim flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-4 w-full sm:w-auto max-w-xs sm:max-w-none px-2 sm:px-0">
            <a
              href="/cv-marcelin-ayissou.pdf"
              download="CV_Marcelin_Ayissou_Comptable.pdf"
              className="btn-magnetic flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-accent text-vide font-bold text-xs sm:text-sm tracking-wide shadow-neon hover:bg-accent-light transition-all"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>Télécharger le CV complet</span>
            </a>

            <button
              onClick={() => setShowCvModal(true)}
              className="btn-magnetic flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-fantome font-medium text-xs sm:text-sm transition-all"
            >
              <Eye className="w-4 h-4 text-accent" />
              <span>Aperçu du CV</span>
            </button>

            <a
              href="#contact"
              className="btn-magnetic flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-fantome font-medium text-xs sm:text-sm transition-all"
            >
              <Mail className="w-4 h-4 text-accent" />
              <span>Me contacter</span>
            </a>
          </div>

        </div>

        {/* Scroll Down Indicator */}
        <div className="hero-anim hidden sm:flex absolute bottom-5 inset-x-0 flex-col items-center gap-1 text-fantome/40 text-[10px] font-mono tracking-widest uppercase pointer-events-none">
          <span>Découvrir</span>
          <div className="w-4 h-7 rounded-full border border-white/20 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-accent animate-bounce" />
          </div>
        </div>
      </section>


      {/* ========================================================
          C. À PROPOS — "Le Manifeste Personnel"
      ======================================================== */}
      <section id="about" className="py-16 sm:py-28 px-4 sm:px-8 relative bg-fantome text-graphite rounded-[2rem] sm:rounded-[3.5rem] my-4 sm:my-8 shadow-2xl overflow-hidden">

        {/* Subtle background graphic */}
        <div className="absolute top-0 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">

            {/* Left Column: Dramatic Serif Italic Title */}
            <div className="about-fade lg:col-span-5">
              <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-accent font-semibold block mb-2">
                01 • Manifeste
              </span>
              <h2 className="font-serif italic text-3xl sm:text-5xl md:text-6xl text-graphite leading-tight mb-3 sm:mb-4">
                La rigueur des chiffres, la vision de l’innovation.
              </h2>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-graphite/60 font-mono">
                <span className="w-6 sm:w-8 h-[2px] bg-accent" />
                <span>Comptabilité • Audit • Projets Digitaux</span>
              </div>
            </div>

            {/* Separator Accent Line for Desktop */}
            <div className="hidden lg:block lg:col-span-1 flex justify-center">
              <div className="w-[2px] h-64 bg-gradient-to-b from-accent/20 via-accent to-accent/20 rounded-full" />
            </div>

            {/* Right Column: Narrative Presentation */}
            <div className="about-fade lg:col-span-6 space-y-4 sm:space-y-5 text-graphite/85 text-sm sm:text-lg leading-relaxed font-sans">
              <p>
                Titulaire d’une <strong className="text-graphite font-bold">Licence Professionnelle en Comptabilité Contrôle Audit (CCA)</strong> de la Faculté des Sciences de Gestion de l’Université de Lomé, je consacre mon quotidien professionnel à la précision, à la transparence et à la conformité financière.
              </p>
              <p>
                Depuis juin 2016, j’exerce les responsabilités de <strong className="text-graphite font-bold">Comptable au sein d’une ONG chrétienne partenaire de Compassion Internationale</strong>. J’y pilote l'ensemble des opérations financières : de la gestion intégrale de la paie à l'exécution rigoureuse des procédures budgétaires et aux audits périodiques.
              </p>
              <p>
                Passionné par l'efficacité opérationnelle et les nouveaux horizons économiques, j'ai également étendu mes compétences au <strong className="text-accent font-bold">sourcing e-commerce international en ligne depuis la Chine</strong> avec une gestion éprouvée du « zéro risque », ainsi qu'à la <strong className="text-accent font-bold">création de contenus vidéos UGC boostés par l'Intelligence Artificielle</strong>.
              </p>

              {/* Highlights pills */}
              <div className="pt-2 flex flex-wrap gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-mono">
                <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-graphite/5 border border-graphite/10 text-graphite">
                  ✓ Maîtrise SAGE & Safina
                </span>
                <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-graphite/5 border border-graphite/10 text-graphite">
                  ✓ Procédures Compassion Internationale
                </span>
                <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-graphite/5 border border-graphite/10 text-graphite">
                  ✓ Démarche Zéro Risque
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ========================================================
          D. EXPÉRIENCE — "La Timeline Vivante"
      ======================================================== */}
      <section id="experience" className="py-16 sm:py-32 px-3 sm:px-6 relative">
        <div className="max-w-5xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-20">
            <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-accent font-semibold block mb-2">
              02 • Trajectoire
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Expériences & Responsabilités
            </h2>
            <p className="font-serif italic text-base sm:text-xl text-accent-light mt-1.5 px-2">
              Une décennie d'engagement, de rigueur fiduciaire et de réalisations concrètes
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Center Vertical Line on Desktop */}
            <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2 bg-gradient-to-b from-accent/10 via-accent/50 to-accent/10 pointer-events-none" />
            {/* Left Vertical Line on Mobile */}
            <div className="md:hidden absolute left-4 sm:left-5 top-4 bottom-4 w-[2px] bg-gradient-to-b from-accent/20 via-accent/60 to-accent/20 pointer-events-none" />

            <div className="space-y-8 sm:space-y-16">
              {experiences.map((exp, index) => {
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''
                      }`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-4 sm:left-5 md:left-1/2 -translate-x-1/2 top-5 sm:top-6 z-20">
                      <div className="timeline-dot w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-vide border-2 border-accent flex items-center justify-center">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent" />
                      </div>
                    </div>

                    {/* Empty Space for the alternate side on desktop */}
                    <div className="hidden md:block md:w-1/2" />

                    {/* Card Container */}
                    <div className={`w-full md:w-1/2 pl-8 sm:pl-12 md:pl-0 ${isEven ? 'md:pr-12' : 'md:pl-12'
                      }`}>
                      <div
                        className={`${isEven ? 'timeline-card-left' : 'timeline-card-right'
                          } card-hover card-glow bg-surface-card/90 border border-white/10 rounded-[1.5rem] sm:rounded-[2rem] p-4 sm:p-7 backdrop-blur-md relative overflow-hidden group`}
                      >
                        {/* Top Meta info */}
                        <div className="flex flex-wrap items-center justify-between gap-1.5 mb-2.5">
                          <span className="font-mono text-[10px] sm:text-xs font-bold text-accent tracking-wider px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/20">
                            {exp.period}
                          </span>
                          <span className="text-[10px] sm:text-[11px] font-mono text-fantome/50 uppercase tracking-widest">
                            {exp.location}
                          </span>
                        </div>

                        {/* Job Title & Company */}
                        <h3 className="text-lg sm:text-2xl font-bold text-white group-hover:text-accent-light transition-colors mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-xs sm:text-sm font-medium text-accent-light/90 mb-3 flex items-center gap-1.5">
                          <Briefcase className="w-3.5 h-3.5 text-accent shrink-0" />
                          <span className="truncate">{exp.company}</span>
                        </p>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-fantome/80 leading-relaxed mb-3.5">
                          {exp.description}
                        </p>

                        {/* Detailed Key Bullets */}
                        <ul className="space-y-1.5 mb-4">
                          {exp.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="text-xs sm:text-sm text-fantome/75 flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                              <span className="leading-snug">{bullet}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 pt-2.5 border-t border-white/5">
                          {exp.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded-lg bg-surface-dark border border-white/10 text-fantome/70"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>


      {/* ========================================================
          E. COMPÉTENCES — "Le Tableau de Bord" (Grille de Maîtrise)
      ======================================================== */}
      <section id="competences" className="py-16 sm:py-32 px-4 sm:px-6 relative bg-surface-dark/50 border-y border-white/5">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-accent font-semibold block mb-2">
              03 • Expertise & Dashboard
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Grille de Maîtrise Opérationnelle
            </h2>
            <p className="font-serif italic text-base sm:text-xl text-accent-light mt-1.5 max-w-xl mx-auto px-2">
              Mesure chiffrée et indicateurs clés des compétences financières et digitales
            </p>
          </div>

          {/* 6 Grid Cards with animated Circular SVGs and counters */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {skills.map((skill, index) => {
              const radius = 38;
              const circumference = 2 * Math.PI * radius;

              return (
                <div
                  key={index}
                  data-percent={skill.level}
                  className="skill-card card-hover card-glow bg-surface-card border border-white/10 rounded-[1.5rem] sm:rounded-[2rem] p-4 sm:p-6 flex flex-col justify-between backdrop-blur-md relative overflow-hidden"
                >
                  {/* Top: Category & Circle Progress */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex-1">
                      <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-accent font-bold px-2 py-0.5 rounded-full bg-accent/15 border border-accent/25 inline-block mb-1.5">
                        {skill.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                        {skill.name}
                      </h3>
                    </div>

                    {/* Circular Progress Gauge */}
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 flex items-center justify-center">
                      <svg className="w-16 h-16 sm:w-20 sm:h-20 -rotate-90 transform" viewBox="0 0 96 96">
                        {/* Background track */}
                        <circle
                          cx="48"
                          cy="48"
                          r={radius}
                          stroke="currentColor"
                          strokeWidth="7"
                          className="text-white/10 fill-none"
                        />
                        {/* Animated fill circle */}
                        <circle
                          cx="48"
                          cy="48"
                          r={radius}
                          stroke="#7B61FF"
                          strokeWidth="7"
                          strokeLinecap="round"
                          strokeDasharray={circumference}
                          strokeDashoffset={circumference}
                          className="skill-circle-progress fill-none transition-all duration-300"
                        />
                      </svg>
                      {/* Numeric Percentage in Center */}
                      <span className="skill-count absolute font-mono text-xs sm:text-sm font-bold text-white">
                        0%
                      </span>
                    </div>
                  </div>

                  {/* Middle Description */}
                  <p className="text-xs text-fantome/70 leading-relaxed mb-3.5">
                    {skill.desc}
                  </p>

                  {/* Bottom Tool Badges */}
                  <div className="pt-2.5 border-t border-white/5 flex flex-wrap gap-1">
                    {skill.tools.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-vide/80 text-fantome/60 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* ========================================================
          F. FORMATION — "Les Fondations"
      ======================================================== */}
      <section id="formation" className="py-16 sm:py-32 px-4 sm:px-6 relative">
        <div className="max-w-4xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-accent font-semibold block mb-2">
              04 • Cursus Académique
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Formation & Certifications
            </h2>
            <p className="font-serif italic text-base sm:text-xl text-accent-light mt-1.5 px-2">
              Les bases théoriques solides et les spécialisations continues
            </p>
          </div>

          {/* Education Stack */}
          <div className="space-y-3.5 sm:space-y-4">
            {education.map((edu, index) => (
              <div
                key={index}
                className="edu-card card-hover bg-surface-card/80 border border-white/10 rounded-[1.5rem] sm:rounded-[2rem] p-4 sm:p-7 backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 transition-all"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-accent/15 border border-accent/30 flex items-center justify-center shrink-0 text-accent mt-0.5 sm:mt-0">
                    <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <span className="font-mono text-xs font-bold text-accent">
                      {edu.year}
                    </span>
                    <h3 className="text-sm sm:text-lg font-bold text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-xs sm:text-sm text-accent-light/80 font-medium">
                      {edu.school}
                    </p>
                    <p className="text-xs text-fantome/60 mt-1 max-w-xl">
                      {edu.description}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 self-start sm:self-center pl-13 sm:pl-0">
                  <span className="text-[10px] sm:text-[11px] font-mono px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/5 border border-white/10 text-fantome/70">
                    Validé
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ========================================================
          G. CONTACT — "Le Pont"
      ======================================================== */}
      <section id="contact" className="py-16 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
        {/* Neon Backdrop Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/10 to-transparent pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">

          <div className="contact-anim text-center mb-12 sm:mb-16">
            <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-accent font-semibold block mb-2">
              05 • Échange & Partenariat
            </span>
            <h2 className="font-serif italic text-3xl sm:text-5xl md:text-7xl text-white mb-3 sm:mb-4">
              Travaillons ensemble.
            </h2>
            <p className="text-xs sm:text-base md:text-lg text-fantome/80 max-w-xl mx-auto px-2">
              Disponible pour opportunités de gestion comptable, missions d’audit financier, consultations en logistique Chine ou projets d’innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">

            {/* Contact Channels Card */}
            <div className="contact-anim lg:col-span-5 bg-surface-card border border-white/10 rounded-[1.75rem] sm:rounded-[2.5rem] p-5 sm:p-8 backdrop-blur-md shadow-2xl">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-5 sm:mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-accent" />
                <span>Canaux Directs</span>
              </h3>

              <div className="space-y-3.5 text-sm">

                {/* Email with copy button */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-vide/70 border border-white/5 flex items-center justify-between gap-2 sm:gap-3">
                  <div className="flex items-center gap-2.5 sm:gap-3 overflow-hidden">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-accent/15 flex items-center justify-center text-accent shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-[9px] sm:text-[10px] font-mono uppercase text-fantome/50">Email professionnel</div>
                      <a href="mailto:marcelin.ayissou@gmail.com" className="font-semibold text-xs sm:text-sm text-white hover:text-accent truncate block">
                        marcelin.ayissou@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 sm:p-2 rounded-lg bg-white/5 hover:bg-white/15 text-fantome transition-colors shrink-0"
                    title="Copier l'email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Location */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-vide/70 border border-white/5 flex items-center gap-2.5 sm:gap-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-accent/15 flex items-center justify-center text-accent shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[9px] sm:text-[10px] font-mono uppercase text-fantome/50">Localisation</div>
                    <div className="font-semibold text-xs sm:text-sm text-white">Lomé, Togo</div>
                  </div>
                </div>

                {/* Phone & WhatsApp Updated */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-vide/70 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-accent/15 flex items-center justify-center text-accent shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[9px] sm:text-[10px] font-mono uppercase text-fantome/50">Téléphone & WhatsApp</div>
                      <a href="tel:+22891119243" className="font-semibold text-xs sm:text-sm text-white hover:text-accent transition-colors block">
                        +228 91 11 92 43
                      </a>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/22891119243"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start sm:self-center px-3 py-1.5 rounded-lg bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500/25 text-[11px] sm:text-xs font-mono font-medium border border-emerald-500/30 transition-colors flex items-center gap-1 shrink-0"
                    title="Discuter sur WhatsApp"
                  >
                    <span>WhatsApp</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>

              </div>

              {/* Download CV CTA Box */}
              <div className="mt-6 pt-5 border-t border-white/10 space-y-2.5">
                <a
                  href="/cv-marcelin-ayissou.pdf"
                  download="CV_Marcelin_Ayissou_Comptable.pdf"
                  className="btn-magnetic w-full flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-accent text-vide font-bold text-xs sm:text-sm shadow-neon hover:bg-accent-light transition-all"
                >
                  <Download className="w-4 h-4 stroke-[2.5]" />
                  <span>Télécharger le CV complet (PDF)</span>
                </a>

                <button
                  onClick={() => setShowCvModal(true)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-fantome text-xs font-medium transition-colors"
                >
                  <Eye className="w-3.5 h-3.5 text-accent" />
                  <span>Aperçu interactif & Impression</span>
                </button>
              </div>
            </div>

            {/* Quick Interactive Contact Form */}
            <div className="contact-anim lg:col-span-7 bg-surface-card border border-white/10 rounded-[1.75rem] sm:rounded-[2.5rem] p-5 sm:p-8 backdrop-blur-md shadow-2xl">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5">
                Envoyer un message direct
              </h3>
              <p className="text-xs text-fantome/60 mb-5 sm:mb-6">
                Remplissez ce formulaire pour planifier un entretien ou poser une question.
              </p>

              {formSubmitted ? (
                <div className="p-5 sm:p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
                  <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-400 mx-auto" />
                  <h4 className="text-sm sm:text-base font-bold text-white">Message bien transmis !</h4>
                  <p className="text-xs text-emerald-200">
                    Merci pour votre message. Je vous répondrai dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3.5 sm:space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-[11px] font-mono text-fantome/70 mb-1 uppercase tracking-wider">
                        Votre Nom
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex. Jean Koffi"
                        className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-vide/80 border border-white/10 text-white placeholder-white/30 text-base sm:text-sm focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-fantome/70 mb-1 uppercase tracking-wider">
                        Votre Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="jean@organisation.org"
                        className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-vide/80 border border-white/10 text-white placeholder-white/30 text-base sm:text-sm focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-fantome/70 mb-1 uppercase tracking-wider">
                      Objet du message
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Collaboration comptable, mission d'audit, logistique..."
                      className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-vide/80 border border-white/10 text-white placeholder-white/30 text-base sm:text-sm focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-fantome/70 mb-1 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      rows="4"
                      required
                      placeholder="Décrivez votre besoin ou proposition..."
                      className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-vide/80 border border-white/10 text-white placeholder-white/30 text-base sm:text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn-magnetic w-full py-3 sm:py-3.5 px-6 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
                  >
                    <Send className="w-4 h-4 text-accent" />
                    <span>Transmettre le message</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>


      {/* ========================================================
          H. PIED DE PAGE — "La Signature"
      ======================================================== */}
      <footer className="mt-8 sm:mt-12 bg-surface-dark border-t border-white/10 rounded-t-[2rem] sm:rounded-t-[4rem] px-5 sm:px-6 py-8 sm:py-12 text-center text-xs text-fantome/60 no-print">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">

          {/* Copyright & Identity */}
          <div className="text-center sm:text-left">
            <p className="font-semibold text-fantome text-sm">
              Marcelin Amèvi Ayissou
            </p>
            <p className="font-mono text-[10px] sm:text-[11px] text-fantome/50 mt-0.5">
              Fait avec le vibe coding • © 2026 Tous droits réservés.
            </p>
          </div>

          {/* Status Live */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-vide border border-white/10 font-mono text-[10px] sm:text-[11px] text-emerald-400">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>DISPONIBLE : +228 91 11 92 43</span>
          </div>

        </div>
      </footer>


      {/* ========================================================
          I. MODAL APERÇU ET IMPRESSION DU CV COMPLET
      ======================================================== */}
      {showCvModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-4xl bg-white text-[#1c1c1e] rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">

            {/* Modal Header Toolbar (no-print) */}
            <div className="bg-[#12121e] text-white px-3.5 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-2 border-b border-white/10 no-print shrink-0">
              <div className="flex items-center gap-2 truncate">
                <span className="w-2.5 h-2.5 rounded-full bg-accent shrink-0" />
                <h3 className="font-bold text-xs sm:text-base truncate">Aperçu du CV Complet</h3>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <button
                  onClick={() => window.print()}
                  className="px-2.5 sm:px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-[11px] sm:text-xs font-medium flex items-center gap-1.5 transition-colors"
                  title="Imprimer ou enregistrer en PDF via le navigateur"
                >
                  <Printer className="w-3.5 h-3.5 text-accent" />
                  <span className="hidden sm:inline">Imprimer</span>
                </button>

                <a
                  href="/cv-marcelin-ayissou.pdf"
                  download="CV_Marcelin_Ayissou_Comptable.pdf"
                  className="px-3 sm:px-3.5 py-1.5 rounded-full bg-accent hover:bg-accent-light text-vide text-[11px] sm:text-xs font-bold flex items-center gap-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>PDF</span>
                </a>

                <button
                  onClick={() => setShowCvModal(false)}
                  className="p-1 sm:p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Scrollable Content: The Full Executive CV Sheet */}
            <div className="p-4 sm:p-10 overflow-y-auto print-sheet font-sans text-xs sm:text-sm leading-relaxed space-y-5 sm:space-y-6">

              {/* Header Box */}
              <div className="border-b-2 border-accent pb-3 sm:pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-4">
                <div>
                  <h1 className="text-xl sm:text-3xl font-extrabold text-[#0f0f1a] tracking-tight">
                    Marcelin Amèvi AYISSOU
                  </h1>
                  <p className="text-accent font-bold text-xs sm:text-sm tracking-wide uppercase mt-0.5 sm:mt-1">
                    Comptable & Spécialiste de la Gestion Financière
                  </p>
                </div>
                <div className="text-left sm:text-right text-[11px] sm:text-xs font-mono text-gray-600 space-y-0.5">
                  <div><strong>Tél / WhatsApp :</strong> +228 91 11 92 43</div>
                  <div><strong>Email :</strong> marcelin.ayissou@gmail.com</div>
                  <div><strong>Ville :</strong> Lomé, Togo</div>
                </div>
              </div>

              {/* Résumé Professionnel */}
              <div>
                <h2 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-accent border-l-4 border-accent pl-2 mb-1.5 sm:mb-2">
                  Profil Professionnel
                </h2>
                <p className="text-gray-700 text-justify">
                  Comptable rigoureux et gestionnaire financier cumulant plus de 10 ans d'expérience, dont plus de 8 années au sein d'une ONG partenaire de Compassion Internationale. Titulaire d'une Licence en Comptabilité Contrôle Audit (CCA) de l'Université de Lomé, je maîtrise l'ensemble des opérations comptables, la gestion de la paie du personnel, l'exécution budgétaire sous contraintes de procédures strictes et les audits internationaux. Polyvalent et tourné vers l'innovation, je combine cette expertise fiduciaire avec la maîtrise du sourcing international e-commerce (Chine « zéro risque ») et la production de contenus digitaux assistés par IA.
                </p>
              </div>

              {/* Expériences */}
              <div>
                <h2 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-accent border-l-4 border-accent pl-2 mb-2 sm:mb-3">
                  Expériences Professionnelles
                </h2>
                <div className="space-y-3.5 sm:space-y-4">
                  {/* Exp 1 */}
                  <div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline font-bold text-gray-900 gap-0.5">
                      <span className="text-xs sm:text-sm">Comptable & Gestionnaire Financier</span>
                      <span className="text-[11px] sm:text-xs text-accent font-mono">Juin 2016 — Présent</span>
                    </div>
                    <div className="text-[11px] sm:text-xs italic text-gray-600 mb-1">
                      ONG Partenaire de Compassion Internationale — Lomé, Togo
                    </div>
                    <ul className="list-disc list-inside text-gray-700 text-[11px] sm:text-xs space-y-1 pl-1">
                      <li>Gestion et ordonnancement de tous les paiements conformément aux procédures administratives et financières établies.</li>
                      <li>Tenue rigoureuse de la comptabilité générale, analytique, écritures de clôture et rapprochements bancaires réguliers.</li>
                      <li>Élaboration, traitement et contrôle mensuel de la paie du personnel, des charges sociales (CNSS) et des obligations fiscales.</li>
                      <li>Préparation des états financiers et budgets prévisionnels dans le respect strict des normes des bailleurs de fonds.</li>
                      <li>Interface directe et préparation documentaire lors des missions annuelles d'audit interne et externe international.</li>
                      <li>Utilisation quotidienne des progiciels de gestion financière SAGE Comptabilité et Safina.</li>
                    </ul>
                  </div>

                  {/* Exp 2 */}
                  <div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline font-bold text-gray-900 gap-0.5">
                      <span className="text-xs sm:text-sm">Spécialiste Sourcing International Chine & Commerce Digital</span>
                      <span className="text-[11px] sm:text-xs text-accent font-mono">2024 — Présent</span>
                    </div>
                    <div className="text-[11px] sm:text-xs italic text-gray-600 mb-1">
                      Activités E-commerce & Prestations Indépendantes — International / Togo
                    </div>
                    <ul className="list-disc list-inside text-gray-700 text-[11px] sm:text-xs space-y-1 pl-1">
                      <li>Sourcing direct auprès des fournisseurs et fabricants qualifiés en Chine avec négociation des prix et volumes.</li>
                      <li>Sécurisation intégrale des flux de paiements et de la logistique d'expédition pour une démarche garantie « zéro risque ».</li>
                      <li>Création et montage de vidéos promotionnelles de type UGC (User Generated Content) assistées par l'Intelligence Artificielle.</li>
                    </ul>
                  </div>

                  {/* Exp 3 */}
                  <div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline font-bold text-gray-900 gap-0.5">
                      <span className="text-xs sm:text-sm">Enseignant & Encadrant Académique (CEG)</span>
                      <span className="text-[11px] sm:text-xs text-accent font-mono">2014 — 2016</span>
                    </div>
                    <div className="text-[11px] sm:text-xs italic text-gray-600 mb-1">
                      Établissement Scolaire « MEKA » — Lomé, Togo
                    </div>
                    <ul className="list-disc list-inside text-gray-700 text-[11px] sm:text-xs space-y-1 pl-1">
                      <li>Enseignement général au niveau collège en parallèle du cursus universitaire en sciences de gestion.</li>
                      <li>Conception des évaluations, suivi individuel des élèves et tenue des registres administratifs et des notes.</li>
                      <li>Développement de compétences en pédagogie, communication, rigueur d'organisation et sens du devoir.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Compétences Clés & Outils */}
              <div>
                <h2 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-accent border-l-4 border-accent pl-2 mb-2">
                  Compétences Clés & Outils
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-[11px] sm:text-xs text-gray-700">
                  <div className="bg-gray-50 p-2.5 sm:p-3 rounded-xl border border-gray-200">
                    <span className="font-bold text-gray-900 block mb-1">Comptabilité, Finance & Audit :</span>
                    <ul className="space-y-0.5">
                      <li>• Comptabilité générale & analytique (SYSCOHADA)</li>
                      <li>• Gestion de la paie & déclarations sociales (CNSS)</li>
                      <li>• Rapprochements bancaires & écritures de clôture</li>
                      <li>• Procédures Compassion Int. & audit bailleurs</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-2.5 sm:p-3 rounded-xl border border-gray-200">
                    <span className="font-bold text-gray-900 block mb-1">Logiciels & Technologies :</span>
                    <ul className="space-y-0.5">
                      <li>• SAGE Comptabilité & Safina</li>
                      <li>• Microsoft Excel Avancé (TCD, formules) & Word</li>
                      <li>• Sourcing en Chine en ligne sécurisé (zéro risque)</li>
                      <li>• Création de vidéos UGC assistées par IA</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Formations & Diplômes */}
              <div>
                <h2 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-accent border-l-4 border-accent pl-2 mb-2">
                  Formations & Diplômes
                </h2>
                <div className="space-y-2 text-[11px] sm:text-xs">
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-0.5">
                    <div>
                      <strong>Formation Certifiante — Création de Vidéos UGC avec l'IA</strong>
                      <div className="text-gray-500">Scénarisation, montage dynamique et génération d'avatars IA</div>
                    </div>
                    <span className="font-mono text-accent font-bold">2025</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-0.5">
                    <div>
                      <strong>Formation Pratique — Achats & Sourcing en Chine en Ligne</strong>
                      <div className="text-gray-500">Approvisionnement sécurisé direct fabricants, dédouanement et logistique fret</div>
                    </div>
                    <span className="font-mono text-accent font-bold">2024</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-0.5">
                    <div>
                      <strong>Licence Professionnelle en Comptabilité Contrôle Audit (CCA)</strong>
                      <div className="text-gray-500">Université de Lomé — Faculté des Sciences de Gestion (Lomé, Togo)</div>
                    </div>
                    <span className="font-mono text-accent font-bold">2019</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-0.5">
                    <div>
                      <strong>Baccalauréat de l'Enseignement du Second Degré</strong>
                      <div className="text-gray-500">Enseignement Secondaire Général (Lomé, Togo)</div>
                    </div>
                    <span className="font-mono text-accent font-bold">2009</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
