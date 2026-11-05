// Doctor rota logic. Days are indexed Mon=0 .. Sun=6. Times are Indian Standard Time (IST).
const doctors = require('./data/doctors_rows.json');

const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const asArray = (v) => (typeof v === 'string' ? JSON.parse(v) : v || []);
const toMin = (t) => { const [h, m] = t.split(':').map(Number); return h * 60 + m; };

const byFacility = new Map();
for (const d of doctors) {
  if (!byFacility.has(d.facility_id)) byFacility.set(d.facility_id, []);
  byFacility.get(d.facility_id).push(d);
}

const doctorsFor = (facilityId, serviceId) =>
  (byFacility.get(facilityId) || []).filter((d) => !serviceId || d.service_id === serviceId);

// YYYY-MM-DD for the given instant, in IST.
const todayIST = (now = new Date()) =>
  new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit' }).format(now);

// Mon=0 .. Sun=6 for a YYYY-MM-DD date string.
const weekdayIdx = (day) => (new Date(day + 'T00:00:00Z').getUTCDay() + 6) % 7;

const nowMinutesIST = (now = new Date()) => {
  const parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).formatToParts(now);
  const get = (type) => Number(parts.find((p) => p.type === type).value);
  return get('hour') * 60 + get('minute');
};

// Status for one doctor on one weekday index.
function scheduleFor(d, idx) {
  const days = asArray(d.weekdays);
  if (!days.length || !d.shift_start || !d.shift_end) return { status: 'schedule_unknown', shift: null };
  if (!days.includes(idx)) return { status: 'not_scheduled', shift: null };
  return { status: 'on_duty', shift: { start: d.shift_start, end: d.shift_end } };
}

// Whether the doctor's shift covers the current IST time. Only meaningful for today.
function dutyNow(d, now = new Date()) {
  const s = scheduleFor(d, weekdayIdx(todayIST(now)));
  if (s.status !== 'on_duty') return false;
  const m = nowMinutesIST(now);
  return m >= toMin(s.shift.start) && m <= toMin(s.shift.end);
}

module.exports = { WEEKDAYS, doctorsFor, todayIST, weekdayIdx, scheduleFor, dutyNow };
