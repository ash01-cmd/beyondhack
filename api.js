// Browser side. Include with <script src="/js/api.js"></script>.
const CareAPI = {
  async services() {
    const r = await fetch('/api/services');
    return (await r.json()).services;
  },
  async search({ service = '', district = '', language = '', q = '', open24x7 = false } = {}) {
    const params = new URLSearchParams();
    if (service) params.set('service', service);
    if (district) params.set('district', district);
    if (language) params.set('language', language);
    if (q) params.set('q', q);
    if (open24x7) params.set('open24x7', '1');
    const r = await fetch('/api/search?' + params);
    if (!r.ok) throw new Error('Search failed');
    return (await r.json()).results;
  },
  async facility(id) {
    const r = await fetch('/api/facility?id=' + encodeURIComponent(id));
    if (!r.ok) throw new Error('Not found');
    return r.json();
  },
  // Distance is computed here so the user's location is never sent to the server.
  withDistance(results, here) {
    const rad = (x) => (x * Math.PI) / 180;
    return results
      .map((f) => {
        const dLat = rad(f.lat - here.lat), dLng = rad(f.lng - here.lng);
        const a = Math.sin(dLat / 2) ** 2 + Math.cos(rad(here.lat)) * Math.cos(rad(f.lat)) * Math.sin(dLng / 2) ** 2;
        return { ...f, distanceKm: Math.round(2 * 6371 * Math.asin(Math.sqrt(a)) * 10) / 10 };
      })
      .sort((a, b) => a.distanceKm - b.distanceKm);
  },
};

// Example wiring for the search button:
//   const list = await CareAPI.search({ service: 'Dialysis' });
//   navigator.geolocation.getCurrentPosition(
//     (pos) => render(CareAPI.withDistance(list, { lat: pos.coords.latitude, lng: pos.coords.longitude })),
//     () => render(list)); // no location: show server order
