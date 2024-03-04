import Image from 'next/image';

interface IStatProps {
  iconSrc: string;
  altText: string;
  label: string;
  value: string;
}

export const StatPill: React.FC<IStatProps> = ({ iconSrc, altText, label, value }): JSX.Element | null => {
  return (
    <span className="flex flex-row items-center gap-2">
      <Image
        className="rounded-full font-neutral-800 dark:bg-neutral-200"
        src={iconSrc}
        alt={altText}
        width={20}
        height={20}
        style={{ borderRadius: '50%', overflow: 'hidden', width: 18, height: 18 }}
      />
      <p className="capitalize">
        {label}: {value}
      </p>
    </span>
  );
};
export default StatPill;
