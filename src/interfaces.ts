export interface StoredData {
  winner: string | null;
  tie: boolean;
  turn: string;
  board: (string | null)[];
}
