// Glossary Widget — shared across all pages
const glossaryDE = {
  'Vault': 'Ein Ordner auf deinem Computer, in dem alle deine Obsidian-Notizen als Textdateien (.md) leben.',
  'Markdown': 'Eine einfache Textformatierung mit Zeichen wie # (Überschrift), ** (fett), * (kursiv). Kein Code.',
  'Wikilink': 'Eine Verlinkung zwischen Notizen mit doppelten eckigen Klammern: [[Notiz Name]].',
  'Backlink': 'Das Gegenstück zu einem Link — zeigt dir welche anderen Notizen auf die aktuelle verweisen.',
  'Graph View': 'Eine visuelle Darstellung aller deiner Notizen und ihrer Verbindungen als Netzwerk.',
  'Daily Note': 'Eine automatisch erstellte Tagesnotiz (z.B. 2026-03-23.md) als täglicher Einstiegspunkt.',
  'Template': 'Eine Vorlage die du in neue Notizen einfügen kannst — spart Tipparbeit bei wiederkehrenden Formaten.',
  'Tag': 'Ein Schlagwort mit # davor (z.B. #idee, #projekt) zum Kategorisieren von Notizen.',
  'Properties': 'Strukturierte Metadaten am Anfang einer Notiz (Titel, Datum, Status) — auch YAML Frontmatter genannt.',
  'MOC': 'Map of Content — eine Übersichtsnotiz die Links zu allen Notizen eines Themas sammelt.',
  'PARA': 'Ordner-System von Tiago Forte: Projects, Areas, Resources, Archive.',
  'Canvas': 'Ein visuelles Whiteboard in Obsidian zum Anordnen von Notizen und Ideen.',
  'Plugin': 'Eine Erweiterung die Obsidian um neue Funktionen ergänzt (2000+ verfügbar).'
};

const glossaryEN = {
  'Vault': 'A folder on your computer where all your Obsidian notes live as text files (.md).',
  'Markdown': 'A simple text formatting using characters like # (heading), ** (bold), * (italic). Not code.',
  'Wikilink': 'A link between notes using double square brackets: [[Note Name]].',
  'Backlink': 'The counterpart of a link — shows which other notes reference the current one.',
  'Graph View': 'A visual representation of all your notes and their connections as a network.',
  'Daily Note': 'An automatically created daily note (e.g., 2026-03-23.md) as a daily entry point.',
  'Template': 'A pre-written structure you can insert into new notes — saves typing for recurring formats.',
  'Tag': 'A keyword with # prefix (e.g., #idea, #project) for categorizing notes.',
  'Properties': 'Structured metadata at the top of a note (title, date, status) — also called YAML frontmatter.',
  'MOC': 'Map of Content — an overview note collecting links to all notes about a topic.',
  'PARA': 'Folder system by Tiago Forte: Projects, Areas, Resources, Archive.',
  'Canvas': 'A visual whiteboard in Obsidian for arranging notes and ideas.',
  'Plugin': 'An extension that adds new features to Obsidian (2000+ available).'
};

function initGlossary() {
  const lang = document.documentElement.lang || 'de';
  const glossary = lang === 'en' ? glossaryEN : glossaryDE;
  const title = lang === 'en' ? 'Glossary' : 'Begriffe';

  const btn = document.createElement('button');
  btn.className = 'glossary-toggle';
  btn.textContent = '📖 ' + title;
  btn.onclick = () => {
    const panel = document.querySelector('.glossary-panel');
    panel.classList.toggle('open');
  };

  const panel = document.createElement('div');
  panel.className = 'glossary-panel';
  let html = '<h3>' + title + '</h3><dl>';
  for (const [term, def] of Object.entries(glossary)) {
    html += '<dt>' + term + '</dt><dd>' + def + '</dd>';
  }
  html += '</dl>';
  panel.innerHTML = html;

  document.body.appendChild(btn);
  document.body.appendChild(panel);
}

document.addEventListener('DOMContentLoaded', initGlossary);
