import { defaultMembership } from "../../data/events";

export default function MembershipCard() {
  const msrLink: string = defaultMembership().detailuri;
  const currentYear = new Date().getFullYear();

  return (
    <>
      <li>
        <time dateTime={currentYear.toString()}>
          <span className="year">{currentYear}</span>
        </time>
        <div className="info">
          <h2 className="title">
            NE-SVT {currentYear} Annual Membership
          </h2>
          <p className="desc">Required for all events</p>

          <ul>
            <li className="signup-link-item">
              <a href={msrLink}>
                <span className="fa fa-globe"></span> MotorsportReg Signup
              </a>
            </li>
          </ul>
        </div>
      </li>
    </>
  );
}
