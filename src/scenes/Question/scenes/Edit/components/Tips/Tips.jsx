import React from 'react'

import { default as TipsComponent } from 'components/Tips'

const Tips = props => (
  <TipsComponent {...props} uid="tips_question">
    <h3>Tips to write great questions on the FAQ</h3>
    <div style={{ textAlign: 'center' }}>
      <ul style={{ textAlign: 'left' }}>
        <li>
          Do some searches before you can be sure your question has not already
          been asked.
        </li>
        <li>Be concise and precise in your wording.</li>
        <li>
          <span>
            Privilege questions responding to the <b>how</b> rather than the{' '}
            <b>why</b>.
          </span>
        </li>
        <li>If the wording is not perfect, someone else can improve it.</li>
        <li>Stay objective and factual.</li>
      </ul>
    </div>
    <div className="row-on-mobile">
      <div>
        <h3>
          <i className="material-icons" style={{ color: 'green' }}>
            check
          </i>
          Great questions
        </h3>
        <ul>
          <li>Where can I get the ElasticSearch training documents?</li>
          <li>How can I use Alibeez API?</li>
          <li>How to reach the Nantes office from the train station?</li>
          <li>
            What&#39;s the difference between pay with and without variable?
          </li>
        </ul>
      </div>
      <div>
        <h3>
          <i className="material-icons" style={{ color: 'red' }}>
            close
          </i>
          Misplaced questions
        </h3>
        <table className="misplaced-questions">
          <tbody>
            <tr>
              <td>▸</td>
              <td>
                <b>Technical:</b>
              </td>
              <td>What are the differences between mock and stub?</td>
            </tr>
            <tr>
              <td>▸</td>
              <td>
                <b>Debating:</b>
              </td>
              <td>Shouldn&#39;t we change the collective agreement?</td>
            </tr>
            <tr>
              <td>▸</td>
              <td>
                <b>Open:</b>
              </td>
              <td>What are the books to read when you are an architect?</td>
            </tr>
            <tr>
              <td>▸</td>
              <td>
                <b>Temporal:</b>
              </td>
              <td>What are the 2018 results for the Nantes offices?</td>
            </tr>
            <tr>
              <td>▸</td>
              <td>
                <b>Vague:</b>
              </td>
              <td>How does recruitment works?</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </TipsComponent>
)

export default Tips
