import { openDatabase } from 'expo-sqlite';

const db = openDatabase('db.testDb'); // returns Database object

db.transaction((tx) => {
  tx.executeSql(
    'CREATE IF NOT EXISTS Goal (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, description TEXT)'
  );
});

export { db };
