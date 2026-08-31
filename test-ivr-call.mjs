// Credentials lus depuis les variables d'environnement
import { config } from 'dotenv';
config({ path: '.env.local' });
const SID = process.env.TWILIO_ACCOUNT_SID;
const TOKEN = process.env.TWILIO_AUTH_TOKEN;
const auth = Buffer.from(SID + ':' + TOKEN).toString('base64');
const headers = { Authorization: 'Basic ' + auth, 'Content-Type': 'application/x-www-form-urlencoded' };

// TwiML avec Lea-Neural + SSML — beaucoup plus naturelle
const twiml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<Response>',
  '  <Say language="fr-FR" voice="Polly.Lea-Neural">',
  '    <prosody rate="88%" pitch="-2st">',
  '      Bonjour et bienvenue chez Thermopompes À Vendre.',
  '      <break time="700ms"/>',
  '      Pour les ventes et les soumissions, faites le <say-as interpret-as="cardinal">1</say-as>.',
  '      <break time="500ms"/>',
  '      Pour le service après-vente, faites le <say-as interpret-as="cardinal">2</say-as>.',
  '      <break time="500ms"/>',
  '      Pour parler à un conseiller, faites le <say-as interpret-as="cardinal">3</say-as>.',
  '    </prosody>',
  '  </Say>',
  '  <Pause length="1"/>',
  '  <Say language="fr-FR" voice="Polly.Lea-Neural">',
  '    <prosody rate="88%" pitch="-2st">',
  '      Nous n avons pas reçu votre sélection. Merci et bonne journée.',
  '    </prosody>',
  '  </Say>',
  '</Response>',
].join('\n');

async function call() {
  console.log('Appel avec voix Lea-Neural + SSML...');
  console.log('Vers: 438-833-1000 (ton cell)\n');

  const res = await fetch(
    'https://api.twilio.com/2010-04-01/Accounts/' + SID + '/Calls.json',
    {
      method: 'POST',
      headers,
      body: new URLSearchParams({
        From: '+14389003224',
        To: '+14388331000',
        Twiml: twiml,
      }).toString(),
    }
  );

  const data = await res.json();
  if (data.sid) {
    console.log('Appel lance! SID:', data.sid);
    console.log('Ton cell sonne dans quelques secondes...');
    console.log('Compare cette voix avec la precedente — dis-moi ce que tu en penses!');
  } else {
    console.error('Erreur:', JSON.stringify(data));
  }
}

call().catch(console.error);
