import { useEffect, useRef, useState } from 'react';

/**
 * Drawer-scoped checkout overlay:
 * brand logo drops from top → spinning wheel → check → done
 */
export default function CheckoutLoader({
  open,
  logoSrc = '/kosas-logo-white.svg',
  brandLabel = 'Kosas',
  onDone,
}) {
  const [phase, setPhase] = useState('idle'); // idle | brand | spin | check
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  useEffect(() => {
    if (!open) {
      setPhase('idle');
      return undefined;
    }

    // restart sequence
    setPhase('brand');
    const t1 = setTimeout(() => setPhase('spin'), 700);
    const t2 = setTimeout(() => setPhase('check'), 2400);
    const t3 = setTimeout(() => onDoneRef.current?.(), 3800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="checkout-loader" role="status" aria-live="polite" aria-label="Processing checkout">
      <div className={`checkout-loader__brand${phase !== 'idle' ? ' is-in' : ''}`}>
        <img
          className="checkout-loader__logo"
          src={logoSrc}
          alt={brandLabel}
        />
      </div>

      <div className="checkout-loader__stage">
        {phase === 'spin' && (
          <div className="checkout-loader__spinner-wrap is-visible" aria-hidden="true">
            <svg className="checkout-loader__spinner" viewBox="0 0 48 48" width="40" height="40">
              <circle
                className="checkout-loader__spinner-track"
                cx="24"
                cy="24"
                r="20"
                fill="none"
              />
              <circle
                className="checkout-loader__spinner-arc"
                cx="24"
                cy="24"
                r="20"
                fill="none"
              />
            </svg>
          </div>
        )}
        {phase === 'check' && (
          <div className="checkout-loader__check is-in" aria-hidden="true">
            <svg className="checkout-loader__check-svg" viewBox="0 0 52 52">
              <circle className="checkout-loader__check-circle" cx="26" cy="26" r="24" fill="none" />
              <path className="checkout-loader__check-tick" fill="none" d="M14.5 27.2l7.2 7.2 15.8-16.4" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}
