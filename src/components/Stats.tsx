import StatPill from './atoms/StatPill';

import weightIcon from '../assets/icons/weight.svg';
import heightIcon from '../assets/icons/height.svg';
import pokeballIcon from '../assets/icons/pokeball.svg';

interface IStatsProps {
  weight: number;
  height: number;
  captureRate: number | null | undefined;
}

export const Stats = ({ weight, height, captureRate }: IStatsProps) => {
  return (
    <div className="flex flex-row gap-8 mx-auto">
      <StatPill iconSrc={weightIcon.src} altText="weight" label="Weight" value={weight + 'kg'} />
      <StatPill iconSrc={heightIcon.src} altText="height" label="Height" value={height + 'm'} />
      <StatPill
        iconSrc={pokeballIcon.src}
        altText="pokeball"
        label="Capture rate"
        value={captureRate?.toString() || 'unknown'}
      />
    </div>
  );
};

export default Stats;
