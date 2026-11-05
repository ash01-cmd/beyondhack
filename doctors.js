// GET /api/doctors?facility=<id>&service=<id>&day=YYYY-MM-DD
//   facility  required, facility id from /api/search
//   service   optional, limits the list to one service at that facility
//   day       optional, defaults to today in IST
// Doctor names, specialisations and rotas are synthetic sample data.
const { facilityById } = require('./lib/store');
const { json } = require('./lib/http');
const { WEEKDAYS, doctorsFor, todayIST, weekdayIdx, scheduleFor, dutyNow } = require('./lib/rota');

exports.handler = async (event) => {
  const p = event.queryStringParameters || {};
  const f = facilityById.get(p.facility);
  if (!f) return json(404, { error: 'Facility not found' });

  const today = todayIST();
  const day = p.day || today;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(day) || isNaN(Date.parse(day + 'T00:00:00Z'))) {
    return json(400, { error: 'day must be YYYY-MM-DD' });
  }
  const idx = weekdayIdx(day);

  const doctors = doctorsFor(f.id, p.service || null).map((d) => {
    const s = scheduleFor(d, idx);
    return {
      id: d.id,
      name: d.name,
      role: d.role,
      specialization: d.specialization,
      qualification: d.qualification,
      experienceYears: d.experience_years,
      languages: d.languages,
      onCall: !!d.on_call,
      dayStatus: s.status, // on_duty | not_scheduled | schedule_unknown
      shift: s.shift,      // { start, end } in IST, or null
      dutyNow: day === today ? dutyNow(d) : null,
    };
  });

  return json(200, {
    facility: { id: f.id, name: f.name },
    date: day,
    weekday: WEEKDAYS[idx],
    doctors,
  }, 60);
};
