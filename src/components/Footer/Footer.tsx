interface FooterProps {
  clearBoard: () => void;
}

export const Footer = ({ clearBoard }: FooterProps) => {
  return (
    <footer>
      <button onClick={clearBoard}>Clear board</button>
    </footer>
  );
};
