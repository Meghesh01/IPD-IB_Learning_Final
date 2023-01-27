import React from 'react'
import Navbarmainpage from './Navbarmainpage'
import './Viewpassbook1.scss'


export default function Viewpassbook() {
  return (
    <>
    <div id="view-passbook">
    <Navbarmainpage/>
    <div className="container">
    <h2 className = "transac">Transactions : </h2>
    <table>
        <tr>
            <th>Sr.no.</th>
            <th>Date</th>
            <th>Particulars</th>
            <th>Credit</th>
            <th>Debit</th>
            <th>Balance</th>
        </tr>
        <tr>
            <td>1</td>
            <td>14/08/22</td>
            <td>Cash Deposit Self</td>
            <td>1000</td>
            <td>-</td>
            <td>21000</td>
        </tr>
        <tr>
            <td>2</td>
            <td>15/08/22</td>
            <td>Cash withdrawal Self</td>
            <td>-</td>
            <td>5000</td>
            <td>16000</td>
        </tr>
        <tr>
            <td>3</td>
            <td>16/08/22</td>
            <td>Reward</td>
            <td>500</td>
            <td>-</td>
            <td>16500</td>
        </tr>
        <tr>
            <td>4</td>
            <td>16/08/22</td>
            <td>Penalty</td>
            <td>-</td>
            <td>500</td>
            <td>16000</td>
            
        </tr>
        <tr>
            <td>5</td>
            <td>17/08/22</td>
            <td>Mr. Rakesh Seth</td>
            <td>200</td>
            <td>-</td>
            <td>16200</td>
        </tr>
        <tr>
            <td>6</td>
            <td>10/08/22</td>
            <td>Main Account</td>
            <td>-</td>
            <td>3000</td>
            <td>13200</td>
        </tr>
    </table>
    </div>
    </div>
    </>
  )
}
