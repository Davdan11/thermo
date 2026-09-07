export const FAQ_ITEMS = [
  {
    category: "Général & Fonctionnement",
    questions: [
      {
        q: "Comment fonctionne exactement une thermopompe ?",
        a: "Contrairement à une plinthe électrique qui *crée* de la chaleur, une thermopompe *déplace* la chaleur. En hiver, elle extrait la chaleur présente dans l'air extérieur (même à -20°C, il y a de l'énergie thermique) pour la transférer à l'intérieur de votre maison grâce à un gaz réfrigérant compressé. En été, le cycle s'inverse : elle capte la chaleur de l'intérieur et l'évacue à l'extérieur, agissant comme un puissant climatiseur. Ce transfert d'énergie est la raison pour laquelle une thermopompe produit jusqu'à 3 fois plus de chaleur qu'elle ne consomme d'électricité."
      },
      {
        q: "Est-ce qu'une thermopompe remplace complètement mon système de chauffage actuel ?",
        a: "Dans la majorité des maisons québécoises, la thermopompe ne remplace pas complètement l'ancien système, elle le complète. On l'appelle un chauffage d'appoint. Par exemple, si vous avez des plinthes électriques, vous les garderez. La thermopompe chauffera la maison 85% à 90% du temps durant l'hiver. Vos plinthes ne s'allumeront que lors des jours de grand froid extrême (ex: sous les -25°C) ou dans les pièces fermées (comme les salles de bain) que l'air de la thermopompe n'atteint pas."
      },
      {
        q: "Quelle est la durée de vie moyenne de l'équipement ?",
        a: "Une thermopompe murale ou centrale bien entretenue dure en moyenne de 12 à 15 ans au Québec. Les modèles haut de gamme de marques japonaises réputées (comme Mitsubishi, Daikin, Fujitsu) installés par des experts certifiés et entretenus rigoureusement peuvent souvent atteindre les 15 à 20 ans. La longévité dépend énormément de la qualité de l'installation initiale."
      }
    ]
  },
  {
    category: "Choix de l'équipement (Mural vs Central)",
    questions: [
      {
        q: "Dois-je choisir une thermopompe murale ou centrale ?",
        a: "Le choix est souvent dicté par votre maison. Si votre résidence possède déjà un réseau de conduits d'air (gaines de ventilation dans les murs/planchers utilisées par une ancienne fournaise au mazout ou électrique), une thermopompe centrale est idéale. Elle s'y connectera pour distribuer l'air uniformément dans toutes les pièces. Si vous chauffez par plinthes électriques ou convecteurs, la thermopompe murale (ou multizone) est la seule option logique, car installer des conduits d'air dans une maison existante nécessite des rénovations majeures et coûteuses."
      },
      {
        q: "Qu'est-ce qu'un système multizone et quand le choisir ?",
        a: "Un système multizone (multi-split) se compose d'une seule unité extérieure reliée à deux, trois, ou quatre têtes intérieures murales. C'est la solution parfaite pour les maisons à étages chauffées par plinthes. Par exemple, on place une tête au rez-de-chaussée pour les aires de vie, et une ou deux têtes à l'étage pour les chambres. Cela permet de contrôler la température indépendamment dans chaque zone tout en limitant l'encombrement extérieur."
      },
      {
        q: "De quelle capacité (BTU) ai-je besoin pour ma maison ?",
        a: "La règle générale rapide est d'environ 12 000 BTU pour 1000 pieds carrés, mais cela varie énormément. Un bon dimensionnement prend en compte l'isolation de la maison, la fenestration, l'orientation au soleil, la hauteur des plafonds et la disposition des pièces. Un système trop puissant (surdimensionné) s'allumera et s'éteindra constamment, s'usant prématurément et déshumidifiant mal en été. Un système trop faible peinera à chauffer en hiver. L'outil ThermoMatch et nos partenaires experts sont là pour calculer cette charge thermique exacte."
      }
    ]
  },
  {
    category: "Performance en Hiver Québécois",
    questions: [
      {
        q: "Une thermopompe peut-elle vraiment chauffer à -25°C ou -30°C ?",
        a: "Oui, tout à fait. Les technologies ont énormément évolué. Les thermopompes dites 'Climat Froid' (Cold Climate) sont équipées de compresseurs Inverter avancés. Des modèles phares maintiennent 100% de leur capacité de chauffage jusqu'à -15°C et continuent de fournir de la chaleur jusqu'à -25°C, voire -30°C pour certains modèles 'Hyper Heat' ou 'Aurora'. Toutefois, à ces températures, leur efficacité diminue, d'où l'importance de garder vos plinthes électriques actives."
      },
      {
        q: "C'est quoi le cycle de dégivrage (defrost) en hiver ?",
        a: "En hiver, de la condensation gèle sur le serpentin de l'unité extérieure. C'est tout à fait normal. Pour éviter de se transformer en bloc de glace, la thermopompe inverse son cycle pendant quelques minutes (elle prend de la chaleur de l'intérieur pour fondre la glace extérieure). Pendant ce cycle, vous pourriez voir de la vapeur d'eau se dégager de l'unité extérieure et entendre un bruit différent, semblable à un souffle. Ne vous inquiétez pas, l'appareil n'est pas en feu, c'est simplement le dégivrage automatique."
      },
      {
        q: "Pourquoi mon unité extérieure est-elle installée en hauteur sur un support ?",
        a: "Au Québec, l'unité extérieure doit être surélevée d'au moins 12 à 18 pouces par rapport au sol (soit fixée au mur sur des équerres, soit sur un support autoportant). Cela l'empêche d'être ensevelie sous la neige en hiver et permet à l'eau issue du cycle de dégivrage de s'écouler librement sans geler et bloquer le ventilateur de l'appareil."
      }
    ]
  },
  {
    category: "Prix, Économies & Subventions",
    questions: [
      {
        q: "Combien coûte une installation complète de thermopompe ?",
        a: "Pour une thermopompe murale d'entrée de gamme (12 000 BTU), prévoyez entre 3 000 $ et 4 500 $ (installation et équipement inclus). Pour un modèle haut de gamme ou 'Climat Froid', le prix varie de 4 500 $ à 6 500 $. Un système multizone se situe entre 6 000 $ et 10 000 $ selon le nombre de têtes. Enfin, une thermopompe centrale varie de 8 000 $ à plus de 15 000 $. Ces prix sont avant l'application des subventions gouvernementales."
      },
      {
        q: "Combien d'argent vais-je économiser sur ma facture d'Hydro-Québec ?",
        a: "Une maison moyenne au Québec économise de 25% à 40% sur sa facture de chauffage annuelle en passant des plinthes électriques à une thermopompe, ce qui représente généralement entre 250 $ et 600 $ d'économies par année. L'appareil se rentabilise donc de lui-même sur le long terme, en plus d'apporter le confort essentiel de la climatisation en été."
      },
      {
        q: "Comment fonctionne la subvention LogisVert d'Hydro-Québec ?",
        a: "Le programme LogisVert offre une aide financière substantielle pour l'installation d'une thermopompe efficace. Le montant est généralement de 50 $ par millier de BTU en chauffage à -8°C (ce qui équivaut souvent à 500 $ à 1500 $ d'aide selon l'appareil). Pour y avoir droit, le modèle doit figurer sur la liste admissible d'Hydro-Québec et l'installation doit absolument être réalisée par un entrepreneur certifié détenant les licences RBQ appropriées. Nos partenaires installateurs s'occupent généralement de remplir ces formulaires pour vous."
      },
      {
        q: "Ai-je besoin de changer mon panneau électrique de 100 ampères ?",
        a: "C'est du cas par cas. Les thermopompes murales modernes consomment très peu de courant et requièrent souvent un disjoncteur de 15A ou 20A. Un panneau de 100 ampères peut suffire s'il n'est pas déjà saturé. Par contre, pour un système central puissant, un panneau de 200 ampères est très souvent nécessaire. Seul un maître électricien partenaire pourra évaluer votre charge lors de l'estimation."
      }
    ]
  },
  {
    category: "Efficacité (SEER2 et HSPF2)",
    questions: [
      {
        q: "Quelle est la différence entre SEER, SEER2, HSPF et HSPF2 ?",
        a: "Ce sont les cotes d'efficacité. Le SEER mesure l'efficacité en climatisation, et le HSPF en chauffage. Plus le chiffre est haut, plus l'appareil consomme peu d'électricité pour produire du confort. En 2023, le ministère américain de l'Énergie a introduit les normes SEER2 et HSPF2, qui utilisent des méthodes de test beaucoup plus rigoureuses et réalistes (elles simulent des conduits d'air moins parfaits). Donc, un HSPF2 de 8.5 est en réalité équivalent à un ancien HSPF de 10. Ne vous fiez qu'aux cotes finissant par '2' pour comparer les nouveaux modèles."
      },
      {
        q: "Faut-il payer plus cher pour avoir la cote SEER2 la plus élevée ?",
        a: "Pas nécessairement. Au Québec, nos étés sont relativement courts par rapport à la Floride ou au Texas. Payer des milliers de dollars supplémentaires pour passer d'un SEER2 de 18 à un SEER2 de 28 ne sera jamais rentabilisé par les économies d'électricité en climatisation. Ce qui importe vraiment pour le Québec, c'est la cote de chauffage (HSPF2) et la capacité de l'appareil à chauffer par grand froid."
      }
    ]
  },
  {
    category: "Garanties & Entretien",
    questions: [
      {
        q: "Quelles sont les garanties typiques ?",
        a: "Le standard de l'industrie pour les bonnes marques est une garantie de 10 ans sur les pièces et le compresseur. Certaines marques haut de gamme (comme Daikin, Mitsubishi ou Fujitsu) peuvent aller jusqu'à 12 ans. La garantie sur la main-d'œuvre (le temps du technicien pour réparer) est généralement de 1 an offerte par l'installateur, bien que certains manufacturiers ou installateurs proposent des extensions jusqu'à 10 ans moyennant un supplément."
      },
      {
        q: "Comment dois-je entretenir ma thermopompe ?",
        a: "Votre seule tâche est de nettoyer les filtres lavables de l'unité intérieure à l'eau tiède toutes les 3 à 4 semaines. En hiver, assurez-vous de déneiger prudemment autour de l'unité extérieure si une tempête l'ensevelit. Ensuite, tous les 3 ans environ, il est fortement recommandé de faire appel à des spécialistes pour un 'lavage de thermopompe'. Ils utiliseront un jet d'eau sous pression et des produits spécialisés pour nettoyer le serpentin intérieur encrassé par la poussière et les moisissures, et laver l'unité extérieure."
      }
    ]
  }
];
