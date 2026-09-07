fetch("http://localhost:8080/api/thermomatch/recommend", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ answers: { postalCode: "G1A 1A1", propertyType: "maison", area: "<1000", floors: "2", currentSystem: "electrique", heatPumpType: "multizone", priority: ["qualite"], budget: "ne-sais-pas", financing: "non"} })
}).then(res => res.json()).then(data => {
  console.log("Total Results:", data.results.length);
  console.log("Brands:", data.results.map(r => r.product.brand));
  console.log("Models:", data.results.map(r => r.product.outdoorModel));
}).catch(console.error);
