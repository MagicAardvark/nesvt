import { useEffect } from "react";
import { LIVE_RESULTS_URL } from "../../constants/links";

/**
 * Immediately sends the user to the external live results site.
 */
export default function ResultsRedirect() {
  useEffect(() => {
    window.location.replace(LIVE_RESULTS_URL);
  }, []);

  return (
    <div className="results-redirect-fallback">
      <p className="lead">Redirecting to live results…</p>
      <p>
        <a href={LIVE_RESULTS_URL}>Click here if you are not redirected</a>
      </p>
    </div>
  );
}
