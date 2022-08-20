import { openDatabase } from 'expo-sqlite';

/** Interface for Long Term Goals */
export interface LongTermGoal {
  /** db id */
  id: number;
  /** Long Term Goal Name */
  name: string;
  /** Long Term Goal Description */
  description: string;
}

/** expo-sqlite database object */
const db = openDatabase('db.testDb');

export function createTables() {
  db.transaction(
    (tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS LongTermGoal (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, description TEXT)',
        []
      );
    },
    (err) => {
      console.error(err);
    },
    () => console.log('LongTermGoal table success.')
  );
}
export { db };
