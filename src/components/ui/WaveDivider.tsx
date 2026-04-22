type WaveDividerProps = {
  invert?: boolean;
  tone?: 'editorial';
};

export function WaveDivider({ invert = false, tone = 'editorial' }: WaveDividerProps) {
  return (
    <div className={`wave-divider wave-divider-${tone}${invert ? ' is-invert' : ''}`} aria-hidden="true">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path d="M0,72C120,92,240,96,360,88C480,80,600,60,720,56C840,52,960,70,1080,76C1200,82,1320,76,1440,64V120H0Z" />
      </svg>
    </div>
  );
}
