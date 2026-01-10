import { useState } from "react";

export default function HelmetAlert() {
  const [showHelmet, setShowHelmet] = useState(
    window.localStorage.getItem("helmetDismissed") === null
  );

  const dismiss = () => {
    window.localStorage.setItem("helmetDismissed", "true");
    setShowHelmet(false);
  };

  return (
    <>
      {showHelmet && (
        <div className="alert-bottom alert alert-danger helmet-alert" id="helmetAlert">
          <button
            type="button"
            className="close helmet-alert-close"
            aria-label="close"
            onClick={dismiss}
          >
            &times;
          </button>
          <strong>REMINDER</strong> — All helmets must be Snell M2015 / SA2015
          or newer.
        </div>
      )}
    </>
  );
}
