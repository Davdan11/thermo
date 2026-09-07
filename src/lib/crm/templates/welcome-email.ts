export interface WelcomeEmailData {
  firstName: string;
  hasThermoMatch: boolean;
  recommendedBrand: string;
  recommendedBtu: string;
  estimatedSubvention: string;
  sqft: string;
}

export function getWelcomeEmailHTML(data: WelcomeEmailData): string {
  // Brand colors
  const primary = "#d94b12";
  const dark = "#0C1821";
  const lightBg = "#f8f9fa";
  const textDark = "#333333";

  // Dynamic ThermoMatch section
  let matchSection = "";
  if (data.hasThermoMatch) {
    matchSection = `
      <div style="background: linear-gradient(145deg, #11222e, #0C1821); padding: 30px; border-radius: 12px; margin: 30px 0; border-left: 4px solid ${primary};">
        <h3 style="color: #ffffff; margin-top: 0; font-size: 18px; font-weight: 600;">Vos Résultats ThermoMatch™</h3>
        <p style="color: #a0aec0; font-size: 14px; margin-bottom: 20px;">
          L'algorithme a analysé votre propriété de ${data.sqft || "N/D"} pi² et a généré ces données préliminaires :
        </p>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.1);">
              <span style="color: #718096; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Marque optimale</span>
              <div style="color: #ffffff; font-size: 16px; font-weight: 600; margin-top: 4px;">${data.recommendedBrand}</div>
            </td>
            <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.1);">
              <span style="color: #718096; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Puissance requise</span>
              <div style="color: #ffffff; font-size: 16px; font-weight: 600; margin-top: 4px;">${data.recommendedBtu} BTU</div>
            </td>
          </tr>
          <tr>
            <td colspan="2" style="padding-top: 15px;">
              <span style="color: #718096; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Estimation Subvention LogisVert</span>
              <div style="color: #48bb78; font-size: 20px; font-weight: bold; margin-top: 4px;">${data.estimatedSubvention} $</div>
            </td>
          </tr>
        </table>
      </div>
    `;
  }

  return `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Votre dossier ThermoMatch</title>
      <style>
        body { margin: 0; padding: 0; background-color: #f4f4f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
      </style>
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
                    Dossier reçu avec succès, ${data.firstName}.
                  </h1>
                  
                  <p style="color: ${textDark}; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
                    Nous avons bien reçu votre demande d'évaluation pour votre système de thermopompe. 
                    Un de nos experts régionaux a été assigné à votre dossier et procède actuellement à la révision de vos paramètres.
                  </p>

                  ${matchSection}

                  <p style="color: ${textDark}; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
                    <strong>Prochaine étape :</strong> Votre expert vous contactera très prochainement pour valider ces informations et vous fournir une soumission ferme, sans engagement.
                  </p>

                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td align="center">
                        <a href="https://thermopompeavendre.ca/guides" style="display: inline-block; padding: 14px 28px; background-color: ${primary}; color: #ffffff; font-weight: 600; text-decoration: none; border-radius: 8px; font-size: 16px;">
                          Lire nos guides d'achat
                        </a>
                      </td>
                    </tr>
                  </table>

                </td>
              </tr>
              
              <!-- Footer -->
              <tr>
                <td style="background-color: ${lightBg}; padding: 30px 40px; text-align: center; border-top: 1px solid #eaeaea;">
                  <p style="color: #a0aec0; font-size: 12px; line-height: 1.5; margin: 0;">
                    &copy; ${new Date().getFullYear()} ThermoMatch. Tous droits réservés.<br>
                    Estimation fournie à titre indicatif selon les données déclarées.
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
