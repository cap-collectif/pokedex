import Image from 'next/image';

export const LegendaryBadge: React.FC = (): JSX.Element => {
  return (
    <span className="flex flex-row items-center gap-2 border-2 px-4 py-1 rounded-full justify-self-end border-neutral-800 dark:border-neutral-200">
      <p className="uppercase font-bold">Legendary</p>
      <Image src="/img/golden-pokeball.png" alt="legendary pokemon" width={22} height={22}></Image>
    </span>
  );
};
export default LegendaryBadge;
