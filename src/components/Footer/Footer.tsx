import './footer.css';

interface FooterProps {
  clearBoard: () => void;
}

export const Footer = ({ clearBoard }: FooterProps) => {
  return (
    <footer className='footer'>
      <button onClick={clearBoard}>Clear board</button>
    </footer>
  );
};
