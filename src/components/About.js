import React from 'react';
import '../css/know-your-agency.css';

const About = () => (
  <div className="know-your-agency-about">
    <h2>Press Coverage</h2>
    <p>
      This website was covered by the South China Morning Post in <a href="https://www.scmp.com/news/hong-kong/hong-kong-law-and-crime/article/2155292/data-lays-bare-hidden-links-hong-kongs" target="_blank">this</a> article.
    </p>
    <h2>Purpose</h2>
    <p>
      We created this tool to visually illustrate the suspicious relationships between employment agencies and money lenders that should not
      exist in an ethical and competitive industry.
    </p>
    <h2>Background</h2>
    <p>
      Hong Kong is home to over <b>1,400</b> domestic worker employment agencies - more agencies
      than stores of McDonalds, 7-11, and Starbucks combined.
    </p>
    <p>
      Research has shown that over <b>70%</b> of agencies are
      known to be operating illegally <sup><a href=" http://www.scmp.com/news/hong-kong/law-crime/article/2093836/study-finds-hong-kong-domestic-helpers-subjected-employment" target="_blank">[1]</a></sup>.
    </p>
    <h2>Results</h2>
    <ul>
      <li>
        <b>22%</b> of agencies share the exact same address and room number with another agency.
        <ul>
          <li>
            Address sharing between agencies is highly suspicious because it suggests that an agency owner is trying to "spread the risk" over multiple agencies in case some get shut down due to illegal practices.
          </li>
          <li>
            In fact, there exists a cluster with <b>17</b> agencies all sharing the exact same address.
          </li>
        </ul>
      </li>
      <li>
        <b>16%</b> of agencies are located adjacent to a money lender.
        <ul>
          <li>
            An ageny located adjacent to a money lender is highly suspicious because the agency
            likely forces the domestic worker to take out a high-interest loan from the money lender.
          </li>
        </ul>
      </li>
      <li>
        <b>26%</b> of agencies do not provide a phone number
        <ul>
          <li>
            No phone number indicates that the agency is likely "dormant". In other words, the agency is a backup in case some of its sibbling agencies get shut down due to illegal practices.
          </li>
        </ul>
      </li>
    </ul>
    <p>
      Despite such obvious concerns, the number of employment agencies in Hong Kong continues to increase.
    </p>
    <h2>Agency Visualizer</h2>
    <p>
      Using publicly scraped data, the Agency Visualizer tool illustrates suspicious relationships
      between employment agencies as well as between employment agencies and money lenders.
      The visualizer displays the following relationships:
    </p>
    <p>
      <b>Exact Address:</b> Represents two entities located in the same building in the
      same room on the same floor. <br />

      <b>Bounding Address:</b> Represents two entities located
      in the same building on the same floor but in different rooms. <br />

      <b>Telephone:</b> Represents two entities sharing the same phone number. <br />

      <b>Email:</b> Represents two entities sharing the same email address. <br />

      <b>Fax:</b> Represents two entities sharing the same fax number. <br />
    </p>
    <h2>Agency Search</h2>
    <p>
      {'The Agency Search tool provides a more detailed view of each employment agency\'s information, ' +
      'including a textual view of the relationships displayed in the Agency Visualizer.'}
    </p>
  </div>
)

export default About;
