interface ISpritesProps {
  sprites: string;
  alt: string;
}

export const Sprites: React.FC<ISpritesProps> = ({ sprites, alt }): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-end gap-2 w-full">
      <img src={sprites} alt={alt} className="mx-auto grow scale-100 hover:scale-150 transition-all" />
    </div>
  );
};
export default Sprites;
