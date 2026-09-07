export interface RdvEmailData {
  firstName: string;
}

export function getRdvEmailHTML(data: RdvEmailData): string {
  const primary = "#d94b12";
  const dark = "#0C1821";
  const lightBg = "#f8f9fa";
  const textDark = "#333333";

  return `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Votre Rendez-vous ThermoMatch</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: #f4f4f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
      
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f4f4f5; padding: 40px 20px;">
        <tr>
          <td align="center">
            
            <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.05);">
              
              <!-- Header -->
              <tr>
                <td style="background-color: ${dark}; padding: 40px 40px 30px 40px; text-align: center;">
                  <img src="https://thermopompeavendre.ca/images/logo-thermomatch-tm.png" alt="ThermoMatch" width="180" style="display: block; margin: 0 auto; filter: brightness(0) invert(1);" />
                </td>
              </tr>
              
              <!-- Content -->
              <tr>
                <td style="padding: 40px;">
                  <h1 style="color: ${dark}; font-size: 24px; font-weight: 700; margin-top: 0; margin-bottom: 20px;">
                    Votre rendez-vous est confirmé !
                  </h1>
                  
                  <p style="color: ${textDark}; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
                    Bonjour ${data.firstName},
                  </p>

                  <p style="color: ${textDark}; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
                    Votre rendez-vous d'évaluation avec notre expert en efficacité énergétique a bien été ajouté à notre calendrier. 
                    Cette rencontre est 100% gratuite et sans aucune pression de vente. 
                  </p>
                  
                  <div style="background-color: ${lightBg}; border-left: 4px solid ${primary}; padding: 20px; border-radius: 8px; margin: 30px 0;">
                    <h3 style="color: ${dark}; margin-top: 0; font-size: 16px;">Ce que nous allons valider :</h3>
                    <ul style="color: ${textDark}; font-size: 15px; padding-left: 20px; line-height: 1.6; margin-bottom: 0;">
                      <li>Vérification de votre panneau électrique</li>
                      <li>Inspection des conduits (si applicable)</li>
                      <li>Validation finale des subventions LogisVert et Maisons Plus Vertes</li>
                      <li>Mesures exactes pour l'installation</li>
                    </ul>
                  </div>

                  <p style="color: ${textDark}; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
                    Si vous devez reprogrammer, n'hésitez pas à répondre directement à ce courriel ou à contacter votre conseiller.
                  </p>

                  <p style="color: ${textDark}; font-size: 16px; line-height: 1.6; margin-bottom: 0;">
                    À très bientôt,<br>
                    <strong>L'équipe ThermoMatch</strong>
                  </p>

                </td>
              </tr>
              
              <!-- Footer -->
              <tr>
                <td style="background-color: ${lightBg}; padding: 30px 40px; text-align: center; border-top: 1px solid #eaeaea;">
                  <p style="color: #a0aec0; font-size: 12px; line-height: 1.5; margin: 0;">
                    &copy; ${new Date().getFullYear()} ThermoMatch. Tous droits réservés.
                  </p>
                </td>
              </tr>

            </table>

          </td>
        </tr>
      </table>

    </body>
    </html>
  `;
}
