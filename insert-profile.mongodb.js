// Try insert your profile
db.profile.insertOne({
  name: 'Anggit Restu Abadi',
  address: {
    street: 'Jalan Nilam No 12, Pugeran, Depok',
    city: 'Sleman',
    country: 'Indonesia',
  },
  hobbies: ['Coding', 'Gaming', 'Reading', 'Music', 'Cooking'],
});

// example result
// {
//   "acknowledged": true,
//   "insertedId": {
//     "$oid": "64674c29a82b74a07172e89d"
//   }
// }
