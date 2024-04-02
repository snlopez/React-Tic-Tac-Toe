import './winner.css';

interface WinnerProps {
  winner: string | null;
  isTie: boolean;
  clearBoard: () => void;
}
export const Winner = ({ winner, isTie, clearBoard }: WinnerProps) => {
  return (
    <>
      {(winner || isTie) && (
        <section className='winner'>
          <div className='winner-text'>
            <h3>{winner ? `Winner: ${winner}` : 'TIE'}</h3>
            <button onClick={clearBoard}>Restart</button>
          </div>
        </section>
      )}
    </>
  );
};
