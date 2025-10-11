// MongoDB initialization script
db = db.getSiblingDB('file-converter');

// Create collections
db.createCollection('users');
db.createCollection('conversions');

// Create indexes for better performance
db.users.createIndex({ "email": 1 }, { unique: true });
db.conversions.createIndex({ "userId": 1 });
db.conversions.createIndex({ "status": 1 });
db.conversions.createIndex({ "createdAt": 1 });
db.conversions.createIndex({ "expiresAt": 1 }, { expireAfterSeconds: 0 });

print('Database initialized successfully!');