import React from 'react';
import Link from 'next/link';

export interface GuideContent {
  slug: string;
  title: string;
  description: string;
  author: string;
  publishedAt: string;
  coverImage: string;
  readTime: string;
  content: React.ReactNode;
}

export const guidesData: Record<string, GuideContent> = {
  "quelle-thermopompe-choisir-hiver-quebecois": {
    slug: "quelle-thermopompe-choisir-hiver-quebecois",
    title: "Quelle thermopompe choisir pour l'hiver québécois?",
    description: "Un guide complet pour sélectionner le bon modèle de thermopompe selon votre maison, votre région et les défis de l'hiver au Québec.",
    author: "L'équipe ThermoMatch",
    publishedAt: "2024-02-15",
    coverImage: "/images/guides/guide-hero-bg.jpg",
    readTime: "8 min de lecture",
    content: (
      <>
        <p>
          Affronter l&apos;hiver au Québec exige un système de chauffage fiable. Avec des températures chutant régulièrement sous la barre des -20°C, le choix d&apos;une thermopompe ne doit pas se faire à la légère. Voici notre guide complet pour sélectionner la thermopompe idéale pour affronter nos hivers rigoureux.
        </p>

        <h2>1. Comprendre la certification &quot;Climat Froid&quot; (Cold Climate)</h2>
        <p>
          Au Québec, c&apos;est la caractéristique numéro un à rechercher. Une thermopompe standard perd drastiquement son efficacité lorsque le mercure descend sous -8°C. À l&apos;inverse, une <strong>thermopompe climat froid</strong> est conçue avec un compresseur Inverter à injection de vapeur, lui permettant de chauffer efficacement jusqu&apos;à -25°C, voire -30°C pour certains modèles ultra-performants.
        </p>
        <ul>
          <li><strong>Maintien de la capacité :</strong> Les meilleurs modèles conservent 100% de leur capacité de chauffage à -15°C.</li>
          <li><strong>Admissibilité aux subventions :</strong> Au Québec, le programme LogisVert exige presque systématiquement des modèles certifiés climat froid.</li>
        </ul>

        <h2>2. L&apos;importance du dégivrage intelligent</h2>
        <p>
          L&apos;hiver, l&apos;humidité de l&apos;air gèle sur l&apos;unité extérieure. La thermopompe doit alors inverser son cycle brièvement pour faire fondre cette glace. Un bon modèle de thermopompe pour le Québec possèdera un <em>capteur de dégivrage intelligent</em> (demand-defrost) plutôt qu&apos;une minuterie basique. Cela évite les arrêts inutiles et vous fait économiser de l&apos;électricité.
        </p>

        <h2>3. L&apos;installation : Surélever l&apos;unité extérieure</h2>
        <p>
          C&apos;est une erreur fréquente : installer l&apos;unité au sol. Avec les accumulations de neige que nous connaissons, votre unité extérieure doit obligatoirement être fixée sur un support mural ou un socle d&apos;au moins 12 à 18 pouces de hauteur. Cela empêche la neige de bloquer le ventilateur et permet à l&apos;eau de dégivrage de s&apos;écouler correctement.
        </p>

        <h2>4. Le chauffage d&apos;appoint est-il obligatoire?</h2>
        <p>
          Oui! Même avec la meilleure thermopompe au monde, il est crucial de conserver un chauffage d&apos;appoint (comme vos plinthes électriques ou une fournaise). Lors d&apos;une vague de froid extrême prolongée (ex: -35°C), la thermopompe seule pourrait ne pas suffire à maintenir un confort parfait dans toutes les pièces de la maison.
        </p>

        <div className="bg-[#f8f5f0] p-6 rounded-lg my-8 border-l-4 border-[#d94b12]">
          <h3 className="text-xl font-bold mb-2">Prêt à affronter l&apos;hiver?</h3>
          <p className="mb-4">Trouvez les meilleures thermopompes <em>Climat Froid</em> admissibles aux subventions à l&apos;aide de notre outil interactif.</p>
          <Link href="/trouver-ma-thermopompe" className="inline-block bg-[#0C1821] text-white px-6 py-3 font-semibold rounded hover:bg-[#d94b12] transition-colors">
            Faire le test ThermoMatch
          </Link>
        </div>
      </>
    )
  },
  "btu-quelle-capacite-choisir": {
    slug: "btu-quelle-capacite-choisir",
    title: "12 000 ou 18 000 BTU? Quelle capacité choisir?",
    description: "Découvrez comment calculer correctement les BTU de votre thermopompe pour un confort optimal en été comme en hiver.",
    author: "L'équipe ThermoMatch",
    publishedAt: "2024-01-22",
    coverImage: "/images/guides/card-interior-living-room.jpg",
    readTime: "6 min de lecture",
    content: (
      <>
        <p>
          L&apos;une des questions les plus fréquentes lors de l&apos;achat d&apos;une thermopompe est le choix de la puissance, exprimée en BTU (British Thermal Unit). Choisir la mauvaise capacité peut transformer un investissement rentable en un cauchemar d&apos;inconfort.
        </p>

        <h2>La règle du pouce : Est-elle fiable ?</h2>
        <p>
          La règle non-écrite dans l&apos;industrie est de compter environ <strong>12 000 BTU pour chaque 1000 pieds carrés</strong> de superficie habitable. Ainsi, pour une maison de 1500 pieds carrés, on vous recommandera souvent une 18 000 BTU. 
        </p>
        <p>
          Cependant, cette règle est imparfaite. Elle ne tient pas compte des variables critiques propres au climat québécois.
        </p>

        <h2>Les 4 facteurs qui changent tout</h2>
        <ul>
          <li><strong>L&apos;isolation et l&apos;âge de la maison :</strong> Une maison construite en 1970 nécessitera beaucoup plus de chauffage qu&apos;une construction neuve certifiée Novoclimat.</li>
          <li><strong>La fenestration :</strong> De grandes fenêtres orientées plein sud chauffent la maison en hiver, mais exigent une forte puissance de climatisation en été.</li>
          <li><strong>La hauteur des plafonds :</strong> Les BTU chauffent un volume (pieds cubes), et non une simple surface au sol. Les plafonds cathédrales demandent plus de BTU.</li>
          <li><strong>L&apos;étagement :</strong> L&apos;air froid descend, l&apos;air chaud monte. Climatiser un étage est différent de chauffer un sous-sol.</li>
        </ul>

        <h2>Le danger du surdimensionnement</h2>
        <p>
          On pourrait être tenté d&apos;acheter &quot;plus gros pour être sûr&quot;. C&apos;est une <strong>grave erreur</strong>. Une thermopompe trop puissante (surdimensionnée) va refroidir ou chauffer la pièce très rapidement, puis s&apos;éteindre. Ces cycles courts (short-cycling) usent le compresseur prématurément et, surtout en été, empêchent la machine de déshumidifier l&apos;air correctement. Vous aurez une maison froide, mais très humide.
        </p>

        <h2>Conclusion</h2>
        <p>
          Pour le Québec, il est toujours préférable de viser la bonne taille, et d&apos;opter pour une machine avec un compresseur de type <em>Inverter</em> qui peut ajuster sa vitesse selon la demande réelle.
        </p>
      </>
    )
  },
  "murale-ou-centrale": {
    slug: "murale-ou-centrale",
    title: "Thermopompe murale ou centrale : Que choisir?",
    description: "Avantages, différences et cas d'usage pour faire le bon choix entre un système mural et central.",
    author: "L'équipe ThermoMatch",
    publishedAt: "2024-03-05",
    coverImage: "/images/guides/card-outdoor-unit.jpg",
    readTime: "7 min de lecture",
    content: (
      <>
        <p>
          Le choix entre une thermopompe murale et une thermopompe centrale dépend presque entièrement de la structure actuelle de votre maison. Analysons les deux options.
        </p>

        <h2>La Thermopompe Centrale</h2>
        <p>
          Une thermopompe centrale distribue l&apos;air climatisé ou chauffé à travers un réseau de conduits (gaines de ventilation) cachés dans vos murs et planchers.
        </p>
        <h3>Avantages :</h3>
        <ul>
          <li><strong>Confort uniforme :</strong> Température égale dans chaque pièce.</li>
          <li><strong>Esthétique :</strong> Presque invisible (seules les grilles de plancher sont apparentes).</li>
          <li><strong>Filtration supérieure :</strong> Idéal pour l&apos;ajout de filtres HEPA ou de purificateurs UV.</li>
        </ul>
        <h3>Inconvénients :</h3>
        <ul>
          <li>Nécessite des conduits existants (ex: ancienne fournaise électrique, au mazout ou au gaz).</li>
          <li>Coût d&apos;installation beaucoup plus élevé.</li>
        </ul>

        <h2>La Thermopompe Murale (et Multizone)</h2>
        <p>
          Le système mural est installé directement sur le mur d&apos;une pièce et souffle l&apos;air directement. C&apos;est le standard pour les maisons chauffées aux plinthes électriques.
        </p>
        <h3>Avantages :</h3>
        <ul>
          <li><strong>Installation facile :</strong> Ne nécessite aucun conduit d&apos;air. S&apos;installe en moins d&apos;une journée.</li>
          <li><strong>Coût abordable :</strong> Option la plus économique sur le marché.</li>
          <li><strong>Zonage :</strong> En système multizone, vous pouvez régler des températures différentes par pièce.</li>
        </ul>
        <h3>Inconvénients :</h3>
        <ul>
          <li>Esthétique discutable pour certains (unité rectangulaire au mur).</li>
          <li>Peut laisser les pièces éloignées (ex: chambres fermées) avec un léger écart de température par rapport au salon.</li>
        </ul>
      </>
    )
  },
  "comprendre-seer2-hspf2": {
    slug: "comprendre-seer2-hspf2",
    title: "Comprendre le SEER2 et le HSPF2",
    description: "Les indices qui comptent vraiment pour votre confort et vos économies d'énergie.",
    author: "L'équipe ThermoMatch",
    publishedAt: "2024-04-12",
    coverImage: "/images/guides/card-outdoor-unit.jpg",
    readTime: "5 min de lecture",
    content: (
      <>
        <p>
          Si vous magasinez une thermopompe, vous avez assurément croisé ces acronymes. Ce sont les cotes de consommation énergétique. Depuis le 1er janvier 2023, le Ministère américain de l&apos;Énergie a mis à jour ces normes pour les rendre plus réalistes, ajoutant le chiffre &quot;2&quot; à la fin.
        </p>

        <h2>SEER2 : L'Efficacité en Climatisation</h2>
        <p>
          Le <em>Seasonal Energy Efficiency Ratio 2</em> mesure l&apos;efficacité de votre appareil en mode climatisation pendant l&apos;été. Plus le chiffre est élevé, moins l&apos;appareil consomme d&apos;électricité pour refroidir votre maison.
        </p>
        <ul>
          <li>Un bon SEER2 se situe aujourd&apos;hui entre <strong>15 et 20</strong>.</li>
          <li>Les modèles ultra haut de gamme peuvent atteindre 28 ou même 30.</li>
        </ul>
        <p><strong>Note pour le Québec :</strong> Puisque nos étés sont courts, payer 3000$ de plus pour passer d&apos;un SEER2 de 18 à 28 ne sera presque jamais rentabilisé en économies d&apos;énergie. Ne faites pas une fixation sur ce chiffre !</p>

        <h2>HSPF2 : L'Efficacité en Chauffage (La cote cruciale)</h2>
        <p>
          Le <em>Heating Seasonal Performance Factor 2</em> mesure l&apos;efficacité en mode chauffage. Au Québec, où la thermopompe fonctionnera d&apos;octobre à avril, <strong>c&apos;est le chiffre le plus important</strong>.
        </p>
        <ul>
          <li>Pour être considéré efficace, visez un HSPF2 supérieur à <strong>8.5</strong>.</li>
          <li>Les meilleurs modèles certifiés &quot;Climat Froid&quot; ont souvent un HSPF2 dépassant les 10 ou 11.</li>
        </ul>
        
        <h2>L'impact sur les subventions</h2>
        <p>
          Au Québec, Hydro-Québec exige des seuils minimaux très stricts de HSPF2 (ou son équivalent NEEP) pour accorder la subvention LogisVert. En utilisant notre catalogue, vous avez la certitude de trouver les modèles admissibles !
        </p>
      </>
    )
  },
  "gree-daikin-fujitsu-comparatif": {
    slug: "gree-daikin-fujitsu-comparatif",
    title: "Gree, Daikin ou Fujitsu : Comparatif des Marques",
    description: "Comparatif des grandes marques de thermopompes, de leurs forces et de leur positionnement sur le marché.",
    author: "L'équipe ThermoMatch",
    publishedAt: "2024-05-02",
    coverImage: "/images/guides/card-interior-living-room.jpg",
    readTime: "9 min de lecture",
    content: (
      <>
        <p>
          Le marché de la thermopompe est dominé par quelques mastodontes mondiaux. Au Québec, le débat se résume souvent au duel historique : <em>Japonaises vs Chinoises</em>. Voici un comparatif objectif des forces en présence.
        </p>

        <h2>Daikin : Le Leader Mondial (Japon)</h2>
        <p>
          Daikin est le plus grand fabricant de systèmes CVC (climatisation, ventilation, chauffage) au monde. Ils fabriquent non seulement les machines, mais aussi le réfrigérant, ce qui est unique dans l&apos;industrie.
        </p>
        <ul>
          <li><strong>La force :</strong> Innovation, silence de roulement exceptionnel, garantie prolongée inégalée de 12 ans sur presque tout (pièces et compresseur). Leurs modèles <em>Aurora</em> sont légendaires au Québec pour le chauffage hivernal.</li>
          <li><strong>La faiblesse :</strong> Le prix d&apos;achat est dans la fourchette supérieure.</li>
        </ul>

        <h2>Fujitsu : L'Expert du Froid (Japon)</h2>
        <p>
          Fujitsu (qui fabrique aussi sous la marque Halcyon) est un concurrent direct de Daikin et Mitsubishi. Ils sont réputés pour la fiabilité inébranlable de leurs compresseurs par temps très froid.
        </p>
        <ul>
          <li><strong>La force :</strong> Les séries XLTH (Extra Low Temp Heating) sont capables de performer à -26°C. L&apos;efficacité énergétique (SEER/HSPF) est souvent dans les plus hautes de l&apos;industrie.</li>
          <li><strong>La faiblesse :</strong> Un design de l&apos;unité intérieure un peu plus carré et conservateur par rapport à la concurrence, et des pièces de remplacement parfois coûteuses.</li>
        </ul>

        <h2>Gree : Le Géant de la Production (Chine)</h2>
        <p>
          Une thermopompe sur trois vendues dans le monde est fabriquée dans une usine Gree. Ils produisent même des machines pour d&apos;autres grandes marques américaines sous étiquette blanche.
        </p>
        <ul>
          <li><strong>La force :</strong> Le rapport qualité-prix. Une thermopompe Gree de la série Lomo ou Extreme offre d&apos;excellentes performances en climat froid pour un prix nettement inférieur (parfois 20 à 30% moins cher) aux marques japonaises.</li>
          <li><strong>La faiblesse :</strong> La garantie est souvent standard (10 ans compresseur, 1 an main-d'œuvre), et certains installateurs notent une plus grande variation dans la qualité du plastique des boîtiers extérieurs.</li>
        </ul>

        <h2>Verdict</h2>
        <p>
          Si vous prévoyez rester dans votre maison plus de 10 ans et recherchez la tranquillité d&apos;esprit absolue et le silence, investissez dans **Daikin** ou **Fujitsu**. Si vous avez un budget serré mais voulez quand même réduire votre facture Hydro-Québec significativement, **Gree** représente un choix extrêmement pragmatique.
        </p>
      </>
    )
  },
  "ce-qui-influence-le-prix-installe": {
    slug: "ce-qui-influence-le-prix-installe",
    title: "Ce qui influence le prix d'installation",
    description: "Les facteurs qui font varier la facture d'une thermopompe et comment mieux prévoir son budget.",
    author: "L'équipe ThermoMatch",
    publishedAt: "2024-06-18",
    coverImage: "/images/guides/guide-hero-bg.jpg",
    readTime: "7 min de lecture",
    content: (
      <>
        <p>
          Vous avez remarqué une grande différence entre le prix d&apos;une thermopompe sur un site web et la soumission finale de votre entrepreneur ? C&apos;est tout à fait normal. L&apos;installation professionnelle représente une part importante du coût total. Voici ce qui fait varier la facture.
        </p>

        <h2>1. La complexité électrique</h2>
        <p>
          Une thermopompe doit être reliée directement à votre panneau électrique sur un circuit dédié. 
        </p>
        <ul>
          <li>Si le panneau électrique est de l&apos;autre côté de la maison par rapport à l&apos;unité extérieure, l&apos;électricien devra passer des dizaines de pieds de fil de fort calibre (souvent dans les plafonds ou les murs). Ce fil est coûteux, et la main-d'œuvre augmente.</li>
          <li>Si votre panneau de 100 ampères est plein, il faudra rajouter un sous-panneau, ce qui gonfle la facture de quelques centaines de dollars.</li>
        </ul>

        <h2>2. La distance de tuyauterie (Ligne de réfrigérant)</h2>
        <p>
          La tête intérieure (au salon) et le compresseur extérieur doivent être reliés par des tuyaux de cuivre où circule le réfrigérant (le line-set). L&apos;installation standard prévoit généralement de 15 à 25 pieds. Si vous habitez au 3e étage d&apos;un condo et que le compresseur est au sol, la tuyauterie supplémentaire, l&apos;ajout de réfrigérant additionnel et les cache-tuyaux (pour l&apos;esthétisme) feront grimper la facture.
        </p>

        <h2>3. L'unité extérieure : Au sol ou au mur ?</h2>
        <p>
          Fixer l&apos;unité extérieure sur le mur (sur des équerres) demande plus d&apos;effort et nécessite l&apos;achat de supports antivibrations de haute qualité pour éviter que votre maison ne résonne. Si on l&apos;installe au sol, il faut bâtir une petite base (des dalles ou un support en plastique) solide et de niveau.
        </p>

        <h2>4. L'équipement lui-même</h2>
        <p>
          Évidemment, opter pour une machine Climat Froid de grande marque japonaise avec une garantie prolongée 12/12/12 (pièces, compresseur, main-d'œuvre) sera plus dispendieux qu&apos;une machine d&apos;entrée de gamme garantie 5 ans.
        </p>
      </>
    )
  },
  "preparer-son-projet-installation": {
    slug: "preparer-son-projet-installation",
    title: "Préparer son projet avant l'installation",
    description: "Les étapes clés à réaliser avant l'arrivée des techniciens pour une installation sans surprise.",
    author: "L'équipe ThermoMatch",
    publishedAt: "2024-07-29",
    coverImage: "/images/guides/card-interior-living-room.jpg",
    readTime: "4 min de lecture",
    content: (
      <>
        <p>
          Le jour J approche ! Les installateurs viennent de vous confirmer leur présence pour installer votre nouvelle thermopompe. Voici comment vous préparer pour que l&apos;installation se déroule de façon fluide, rapide et sécuritaire.
        </p>

        <h2>1. Dégager les espaces intérieurs</h2>
        <p>
          Les techniciens devront installer l&apos;unité au mur (souvent près du plafond). Vous devez libérer un espace de travail clair.
        </p>
        <ul>
          <li>Déplacez les meubles, divans et téléviseurs situés directement sous l&apos;emplacement prévu de l&apos;unité intérieure.</li>
          <li>Assurez un corridor de circulation dégagé depuis la porte d&apos;entrée, car les équipements sont encombrants.</li>
        </ul>

        <h2>2. L'accès au panneau électrique</h2>
        <p>
          L&apos;électricien passera une bonne partie de la journée devant votre panneau électrique (souvent au sous-sol ou dans le garage). Assurez-vous d&apos;avoir dégagé au moins 3 à 4 pieds libres d&apos;obstacles devant le panneau. S'il est dans un garde-robe, videz-le temporairement.
        </p>

        <h2>3. L'aménagement extérieur</h2>
        <p>
          Le gros compresseur extérieur nécessite de l&apos;espace. Si des arbustes, des chaises de parterre ou un cabanon bloquent l&apos;emplacement choisi, déplacez-les. Les techniciens amèneront des outils lourds et des bonbonnes de réfrigérant, l&apos;accès doit être sécuritaire.
        </p>

        <h2>4. Le bruit et les animaux</h2>
        <p>
          L&apos;installation d&apos;une thermopompe implique le perçage d&apos;un trou de 3 pouces à travers le mur extérieur de votre maison. C&apos;est une étape bruyante. Prévoyez que la maison ne sera pas un environnement propice aux réunions Zoom ce jour-là ! De plus, pour leur sécurité, il est fortement recommandé de garder vos chiens ou chats dans une pièce fermée loin des travaux, car les portes seront souvent laissées ouvertes pour les allers-retours.
        </p>
      </>
    )
  }
};
