import fs from 'fs';
import { config } from 'dotenv';
config({ path: '.env.local' });

const OPENAI_KEY = process.env.OPENAI_API_KEY;


const text = `Bonjour et bienvenue chez ThermopompesÀVendre.ca. Votre référence pour trouver la bonne thermopompe au Québec. Pour les ventes et les soumissions, faites le 1. Pour le service après-vente, faites le 2. Pour parler à un conseiller, faites le 3.`;

console.log('Génération audio OpenAI TTS...');
console.log('Voix: nova (féminine, chaleureuse)\n');

const res = await fetch('https://api.openai.com/v1/audio/speech', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${OPENAI_KEY}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'tts-1-hd',    // HD = meilleure qualité
    input: text,
    voice: 'nova',        // nova = féminine naturelle, onyx = masculin profond
    response_format: 'mp3',
    speed: 0.95,          // légèrement plus lent = plus naturel
  }),
});

if (!res.ok) {
  const err = await res.json();
  console.error('Erreur:', JSON.stringify(err, null, 2));
  process.exit(1);
}

const buffer = Buffer.from(await res.arrayBuffer());
fs.writeFileSync('ivr-test-nova.mp3', buffer);
console.log('Fichier créé: ivr-test-nova.mp3');
console.log('Taille:', buffer.length, 'bytes');
console.log('\nOuvre le fichier pour entendre la voix!');

// Générer aussi avec la voix "onyx" (masculin)
console.log('\nGénération voix onyx (masculin profond)...');
const res2 = await fetch('https://api.openai.com/v1/audio/speech', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${OPENAI_KEY}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'tts-1-hd',
    input: text,
    voice: 'onyx',
    response_format: 'mp3',
    speed: 0.95,
  }),
});

if (res2.ok) {
  const buf2 = Buffer.from(await res2.arrayBuffer());
  fs.writeFileSync('ivr-test-onyx.mp3', buf2);
  console.log('Fichier créé: ivr-test-onyx.mp3');
}
