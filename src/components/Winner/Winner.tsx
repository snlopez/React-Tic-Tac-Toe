export const Winner = ({ winner }: { winner: string | null }) => {
  return (
    <section>
      <span>Winner: {winner || '-'}</span>
    </section>
  );
};
