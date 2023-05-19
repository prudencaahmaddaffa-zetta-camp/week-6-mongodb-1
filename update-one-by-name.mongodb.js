db.profile.updateOne(
  { name: 'Anggit Restu Abadi' },
  { $set: { 'address.city': 'New City' } }
);

// example result
// {
//   "acknowledged": true,
//   "insertedId": null,
//   "matchedCount": 1,
//   "modifiedCount": 1,
//   "upsertedCount": 0
// }
