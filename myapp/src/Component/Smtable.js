import React from 'react'

export default function Smtable(props) {
  return (
    <div>
      <table border={3}>
  <tr>
    <th>{props.heading1}</th>
    <th>{props.heading2}</th>
    <th>{props.heading3}</th>
  </tr>
  <tr>
    <td>{props.pera1}</td>
    <td>{props.pera2}</td>
    <td>{props.pera3}</td>
  </tr>
  <tr>
    <td>{props.p1}</td>
    <td>{props.p2}</td>
    <td>{props.p3}</td>
  </tr>
</table>
    </div>
  )
}
