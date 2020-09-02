import React from "react"
import DiscountRedditSample from "../images/discount-reddit-sample.png"
import OrgBattleGroundSample from "../images/org-battleground-sample.png"

const Portfolio: React.FC = () => {
  return (
    <div className="section portfolio" id="portfolio">
      <h2 style={{ marginBottom: "40px" }}>My Portfolio</h2>

      <div className="project">
        <div className="img-ct">
          <img
            alt="Discount Reddit"
            className="project-sample"
            src={DiscountRedditSample}
          />
        </div>
        <div className="info-ct">
          <div className="info-title">
            <h3>Discount Reddit</h3>
          </div>
          <div className="links-ct">
            <h4 className="url" style={{ marginRight: "20px" }}>
              <a href="https://discountreddit.xyz" target="_blank">
                discountreddit.xyz
              </a>
            </h4>
            <h4 className="url">
              <a href="https://github.com/marvingay/discount-reddit">
                View Code
              </a>
            </h4>
          </div>
          <p className="text">
            Message board application for posting blurbs, tidbits, and other
            witty things (It's in the name)!
          </p>
        </div>
      </div>

      <div className="project">
        <div className="img-ct">
          <img
            alt="ORG Battleground"
            className="project-sample"
            src={OrgBattleGroundSample}
          />
        </div>
        <div className="info-ct">
          <div className="info-title">
            <h3>ORG Battleground</h3>
          </div>
          <div className="links-ct">
            <h4 className="url" style={{ marginRight: "20px" }}>
              <a href="https://orgbattleground.club" target="_blank">
                orgbattleground.club
              </a>
            </h4>
            <h4 className="url">
              <a href="https://github.com/marvingay/org-battleground">
                View Code
              </a>
            </h4>
          </div>
          <p className="text">
            Dashboard for Online Reality Games played across several platforms
            (Discord, Proboards, etc.) Contains Private Messaging and Google
            OAuth to best serve the majority of users.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
