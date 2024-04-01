interface TurnProps {
  turn: string;
  winner: string | null;
}

export const Turn = ({ turn, winner }: TurnProps) => {
  return (
    <section>
      <span>Turn: {winner ? '-' : turn}</span>
    </section>
  );
};
