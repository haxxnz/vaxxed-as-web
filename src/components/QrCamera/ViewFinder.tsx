export type ViewFinderProps = {
  className?: string;
};

const ViewFinder = ({ className }: ViewFinderProps) => (
  <svg
    className={className}
    viewBox="0 0 500 500"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <path
        d="M0 160V60C0 26.885 26.885 0 60 0h100"
        fill="none"
        id="viewFinderCorner"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
      />
    </defs>
    <g stroke="currentColor">
      <use transform="translate(12 12)" xlinkHref="#viewFinderCorner" />
      <use transform="rotate(90 238 250)" xlinkHref="#viewFinderCorner" />
      <use transform="rotate(180 244 244)" xlinkHref="#viewFinderCorner" />
      <use transform="rotate(-90 250 238)" xlinkHref="#viewFinderCorner" />
    </g>
  </svg>
);

export default ViewFinder;
