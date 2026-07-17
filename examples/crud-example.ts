// HIKARI CRUD operations with Base44 SDK

import { base44 } from '@/api/base44Client';

// CREATE
const lead = await base44.entities.Lead.create({
  first_name: 'Jean', last_name: 'Dupont', email: 'jean@example.com',
  profile: 'investisseur_particulier', city: 'Lyon', budget: 250000,
});

// READ (list with filter + sort + limit)
const hotLeads = await base44.entities.Lead.filter(
  { score_tier: 'prioritaire' }, '-score', 20
);

// READ (single by ID)
const leadDetail = await base44.entities.Lead.get(lead.id);

// UPDATE
await base44.entities.Lead.update(lead.id, { status: 'qualifie', score: 75 });

// BULK UPDATE
await base44.entities.Lead.updateMany(
  { status: 'nouveau' }, { $set: { status: 'a_qualifier' } }
);

// DELETE
await base44.entities.Lead.delete(lead.id);

// BULK CREATE
await base44.entities.Lead.bulkCreate([
  { email: 'a@example.com', first_name: 'A' },
  { email: 'b@example.com', first_name: 'B' },
]);

// REALTIME SUBSCRIPTION
useEffect(() => {
  const unsubscribe = base44.entities.Lead.subscribe((event) => {
    console.log('Lead changed:', event.type, event.data);
  });
  return unsubscribe;
}, []);
