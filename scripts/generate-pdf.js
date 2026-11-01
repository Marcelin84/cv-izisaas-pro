import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

const outputPath = path.resolve('public', 'cv-marcelin-ayissou.pdf');

// Create document with standard margins
const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 36, bottom: 36, left: 40, right: 40 },
  info: {
    Title: 'CV - Marcelin Amèvi AYISSOU - Comptable & Gestionnaire Financier',
    Author: 'Marcelin Amèvi AYISSOU',
    Subject: 'Curriculum Vitae Professionnel',
    Keywords: 'Comptable, Finance, SAGE, Safina, Audit, Paie, Sourcing Chine, IA, Lomé, Togo',
  }
});

const writeStream = fs.createWriteStream(outputPath);
doc.pipe(writeStream);

// Colors
const primaryColor = '#0F0F1A';     // Deep dark
const accentColor = '#6042E8';      // Professional Purple / Violet Accent
const textDark = '#1E1E28';         // Main text
const textMuted = '#5A5A6E';        // Subtitles and muted text
const lightBg = '#F6F5F9';          // Light pill / container background
const borderLight = '#E3E0EE';

const pageWidth = doc.page.width;
const contentWidth = pageWidth - 80;

// ==========================================
// HEADER SECTION
// ==========================================
// Top accent bar
doc.rect(40, 36, contentWidth, 4).fill(accentColor);

doc.moveDown(0.8);
doc.fillColor(primaryColor)
   .font('Helvetica-Bold')
   .fontSize(22)
   .text('Marcelin Amèvi AYISSOU', 40, 48, { characterSpacing: 0.5 });

doc.fillColor(accentColor)
   .font('Helvetica-Bold')
   .fontSize(12)
   .text('COMPTABLE & SPÉCIALISTE DE LA GESTION FINANCIÈRE', 40, 75, { characterSpacing: 1 });

// Contact Info Bar
const contactY = 94;
doc.rect(40, contactY, contentWidth, 24).fill(lightBg);

doc.fillColor(textDark)
   .font('Helvetica')
   .fontSize(9);

doc.text('Tél / WhatsApp : +228 91 11 92 43', 48, contactY + 7);
doc.text('Email : marcelin.ayissou@gmail.com', 220, contactY + 7);
doc.text('Localisation : Lomé, Togo', 415, contactY + 7);

// ==========================================
// RESUME / PROFIL
// ==========================================
let currentY = 130;

function drawSectionTitle(title, y) {
  doc.rect(40, y, 4, 14).fill(accentColor);
  doc.fillColor(primaryColor)
     .font('Helvetica-Bold')
     .fontSize(11)
     .text(title.toUpperCase(), 50, y + 2, { characterSpacing: 0.8 });
  doc.moveTo(40, y + 18).lineTo(40 + contentWidth, y + 18).strokeColor(borderLight).stroke();
  return y + 25;
}

currentY = drawSectionTitle('Profil Professionnel', currentY);

doc.fillColor(textDark)
   .font('Helvetica')
   .fontSize(9.2)
   .text(
     "Comptable rigoureux et gestionnaire financier cumulant plus de 10 ans d'expérience, dont plus de 8 années au sein d'une ONG partenaire de Compassion Internationale. Titulaire d'une Licence en Comptabilité Contrôle Audit (CCA) de l'Université de Lomé, je maîtrise l'ensemble des opérations comptables, la gestion de la paie du personnel, l'exécution budgétaire sous contraintes de procédures strictes et les audits internationaux. Polyvalent et tourné vers l'innovation, je combine cette expertise fiduciaire avec la maîtrise du sourcing international e-commerce (Chine 'zéro risque') et la production de contenus digitaux assistés par IA.",
     40, currentY, { width: contentWidth, align: 'justify', lineGap: 3 }
   );

currentY += 58;

// ==========================================
// EXPÉRIENCES PROFESSIONNELLES
// ==========================================
currentY = drawSectionTitle('Expériences Professionnelles', currentY);

// Exp 1: ONG Compassion
doc.fillColor(primaryColor)
   .font('Helvetica-Bold')
   .fontSize(10.5)
   .text('Comptable & Gestionnaire Financier', 40, currentY);

doc.fillColor(accentColor)
   .font('Helvetica-Bold')
   .fontSize(9)
   .text('Juin 2016 — Présent', 40 + contentWidth - 110, currentY, { align: 'right', width: 110 });

currentY += 13;
doc.fillColor(textMuted)
   .font('Helvetica-Oblique')
   .fontSize(9)
   .text('ONG Partenaire de Compassion Internationale — Lomé, Togo', 40, currentY);

currentY += 14;
const bulletsExp1 = [
  "Gestion et ordonnancement de tous les paiements conformément aux procédures administratives et financières établies.",
  "Tenue rigoureuse de la comptabilité générale, analytique, écritures de clôture et rapprochements bancaires réguliers.",
  "Élaboration, traitement et contrôle mensuel de la paie du personnel, des charges sociales (CNSS) et des obligations fiscales.",
  "Préparation des états financiers et budgets prévisionnels dans le respect strict des normes des bailleurs de fonds.",
  "Interface directe et préparation documentaire lors des missions annuelles d'audit interne et externe international.",
  "Utilisation quotidienne des progiciels de gestion financière SAGE Comptabilité et Safina."
];

bulletsExp1.forEach(bullet => {
  doc.circle(46, currentY + 4, 2).fill(accentColor);
  doc.fillColor(textDark)
     .font('Helvetica')
     .fontSize(8.8)
     .text(bullet, 55, currentY, { width: contentWidth - 15, lineGap: 1.5 });
  currentY += 14;
});

currentY += 4;

// Exp 2: Sourcing Chine & Digital
doc.fillColor(primaryColor)
   .font('Helvetica-Bold')
   .fontSize(10.5)
   .text('Spécialiste Sourcing International Chine & Commerce Digital', 40, currentY);

doc.fillColor(accentColor)
   .font('Helvetica-Bold')
   .fontSize(9)
   .text('2024 — Présent', 40 + contentWidth - 110, currentY, { align: 'right', width: 110 });

currentY += 13;
doc.fillColor(textMuted)
   .font('Helvetica-Oblique')
   .fontSize(9)
   .text('Activités E-commerce & Prestations Indépendantes — International / Togo', 40, currentY);

currentY += 14;
const bulletsExp2 = [
  "Sourcing direct auprès des fournisseurs et fabricants qualifiés en Chine avec négociation des prix et des volumes.",
  "Sécurisation intégrale des flux de paiements et de la logistique d'expédition pour une démarche garantie 'zéro risque'.",
  "Création et montage de vidéos promotionnelles de type UGC (User Generated Content) assistées par l'Intelligence Artificielle."
];

bulletsExp2.forEach(bullet => {
  doc.circle(46, currentY + 4, 2).fill(accentColor);
  doc.fillColor(textDark)
     .font('Helvetica')
     .fontSize(8.8)
     .text(bullet, 55, currentY, { width: contentWidth - 15, lineGap: 1.5 });
  currentY += 14;
});

currentY += 4;

// Exp 3: Enseignement MEKA
doc.fillColor(primaryColor)
   .font('Helvetica-Bold')
   .fontSize(10.5)
   .text('Enseignant & Encadrant Académique (CEG)', 40, currentY);

doc.fillColor(accentColor)
   .font('Helvetica-Bold')
   .fontSize(9)
   .text('2014 — 2016', 40 + contentWidth - 110, currentY, { align: 'right', width: 110 });

currentY += 13;
doc.fillColor(textMuted)
   .font('Helvetica-Oblique')
   .fontSize(9)
   .text('Établissement Scolaire « MEKA » — Lomé, Togo', 40, currentY);

currentY += 14;
const bulletsExp3 = [
  "Enseignement général au niveau collège en parallèle du cursus universitaire en sciences de gestion.",
  "Conception des évaluations, suivi individuel des élèves et tenue des registres administratifs et des notes.",
  "Développement de fortes compétences en pédagogie, communication, rigueur d'organisation et sens du devoir."
];

bulletsExp3.forEach(bullet => {
  doc.circle(46, currentY + 4, 2).fill(accentColor);
  doc.fillColor(textDark)
     .font('Helvetica')
     .fontSize(8.8)
     .text(bullet, 55, currentY, { width: contentWidth - 15, lineGap: 1.5 });
  currentY += 14;
});

currentY += 8;

// ==========================================
// COMPETENCES TECHNIQUES ET MANAGERIALES (2 Colonnes)
// ==========================================
currentY = drawSectionTitle('Compétences Clés & Outils', currentY);

const colWidth = (contentWidth - 15) / 2;
const col1X = 40;
const col2X = 40 + colWidth + 15;

// Column 1
let y1 = currentY;
doc.fillColor(primaryColor).font('Helvetica-Bold').fontSize(9).text('Comptabilité, Finance & Audit', col1X, y1);
y1 += 12;
const compCol1 = [
  "• Comptabilité générale & analytique (SYSCOHADA)",
  "• Gestion de la paie & déclarations sociales (CNSS)",
  "• Rapprochements bancaires & écritures de clôture",
  "• Exécution budgétaire & conformité Compassion Int.",
  "• Préparation aux audits internes et externes"
];
compCol1.forEach(c => {
  doc.fillColor(textDark).font('Helvetica').fontSize(8.5).text(c, col1X, y1);
  y1 += 11.5;
});

// Column 2
let y2 = currentY;
doc.fillColor(primaryColor).font('Helvetica-Bold').fontSize(9).text('Logiciels, Sourcing & Nouvelles Technologies', col2X, y2);
y2 += 12;
const compCol2 = [
  "• Logiciels métiers : SAGE Comptabilité, Safina",
  "• Bureautique : Microsoft Excel Avancé (TCD, formules), Word",
  "• Sourcing Chine en ligne sécurisé (zéro risque)",
  "• Création vidéo UGC & Génération par IA",
  "• Rigueur éthique, précision chiffrée & intégrité"
];
compCol2.forEach(c => {
  doc.fillColor(textDark).font('Helvetica').fontSize(8.5).text(c, col2X, y2);
  y2 += 11.5;
});

currentY = Math.max(y1, y2) + 8;

// ==========================================
// FORMATION & DIPLOMES
// ==========================================
currentY = drawSectionTitle('Formations & Diplômes', currentY);

const formations = [
  {
    year: '2025',
    title: "Formation Certifiante — Création de Vidéos UGC avec l'IA",
    school: "Formation spécialisée en ligne (Scénarisation, montage dynamique, avatars & prompts IA)"
  },
  {
    year: '2024',
    title: "Formation Pratique — Achats & Sourcing en Chine en Ligne",
    school: "Approvisionnement sécurisé direct fabricants, dédouanement et logistique fret"
  },
  {
    year: '2019',
    title: "Licence Professionnelle en Comptabilité Contrôle Audit (CCA)",
    school: "Université de Lomé — Faculté des Sciences de Gestion (Lomé, Togo)"
  },
  {
    year: '2009',
    title: "Baccalauréat de l'Enseignement du Second Degré",
    school: "Enseignement Général (Lomé, Togo)"
  }
];

formations.forEach(f => {
  doc.fillColor(accentColor)
     .font('Helvetica-Bold')
     .fontSize(8.8)
     .text(f.year, 40, currentY, { width: 35 });

  doc.fillColor(primaryColor)
     .font('Helvetica-Bold')
     .fontSize(8.8)
     .text(f.title, 80, currentY);

  currentY += 11;
  doc.fillColor(textMuted)
     .font('Helvetica')
     .fontSize(8)
     .text(f.school, 80, currentY);

  currentY += 13;
});

// Footer of page
doc.rect(40, doc.page.height - 28, contentWidth, 0.5).strokeColor(borderLight).stroke();
doc.fillColor(textMuted)
   .font('Helvetica')
   .fontSize(7.5)
   .text('Curriculum Vitae — Marcelin Amèvi AYISSOU • Tél : +228 91 11 92 43 • Email : marcelin.ayissou@gmail.com', 40, doc.page.height - 22, { align: 'center', width: contentWidth });

doc.end();

writeStream.on('finish', () => {
  console.log('PDF Generated successfully at: ' + outputPath);
});

