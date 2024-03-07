const ArrowIcon = ({ size, flip }: { size: number; flip?: boolean }) => {
  return (
    <svg
      className="with-icon_icon__MHUeb"
      data-testid="geist-icon"
      fill="none"
      height={size}
      shapeRendering="geometricPrecision"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width={size}
      transform={flip ? 'scale(-1, 1)' : ''}
    >
      <path d="M19 12H5" />
      <path d="M12 19l-7-7 7-7" />
    </svg>
  )
}

export default ArrowIcon
