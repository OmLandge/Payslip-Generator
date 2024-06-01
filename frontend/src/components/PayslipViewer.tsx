
import axios from 'axios';
import { useEffect, useState } from 'react';
import choiceLogo from "../assets/choicelogo.png"

interface UserData {
  name: string;
  uan_no: string;
  esi_no: string;
}

interface PaymentSlipData {
  basicDa: number;
  pf: number;
  hra: number;
  ptax: number;
  otAmount: number;
  UniformPurchaseReimbursement: number;
  advance: number;
  UniformWashingReimbursement: number;
  mlwf: number;
  ChildEducationCess: number;
  MediclaimPolicy: number;
  cca: number;
  tds: number;
  arrears: number;
  otherDeduction: number;
  gross: number;
  totalDeduction: number;
  netAmount: number;
}

interface input{
    month: string;
}

export const PayslipViewer = ({ month }: input) => {
  const [user, setUser] = useState<UserData | null>(null);
  const [paymentSlip, setPaymentSlip] = useState<PaymentSlipData | null>(null);

  async function userDetails() {
    try{
        const response = await axios.get('http://localhost:3000/user', {
        headers: {
            "Authorization": localStorage.getItem("token") || ""
        }
        })
        const data = response.data
        setUser(data)
    } catch (e){
        console.log(e);
    }
  }

  async function paymentDetails() {
    try{
        const response = await axios.get('http://localhost:3000/paymentSlip', {
            headers: {
                "Authorization": localStorage.getItem("token") || "",
                "month": month.toLowerCase()
            },
            data: ''
        })
        const data = response.data
        setPaymentSlip(data)
    } catch (e){
        console.log(e);
    }
  }


  useEffect(() => {
    userDetails();
    paymentDetails();
  }, []);

  return (
    <div className='captureForPDF'>
      <div className="logo">
        <img className="img" src={choiceLogo} alt="Logo" style={{width:"200px", marginLeft:"-10px",marginBottom:"5px"}} /><br />
        <hr />
      </div>        

      <div className="txt" style={{margin:"0 12px"}}>
        <p style={{fontSize:"10px"}}>Sai Dham Commercial Mall, Office No. 16, 17 &amp; 18, 1st floor, 
        Landewadi, Bhosari, Pune - 411039</p>
        <h3 id="name" style={{margin:"10px 0", fontSize:"11px"}}>NAME: {user?.name}</h3>
        <h5 id="uan">UAN NO. : {user?.uan_no}</h5>
        <h5 id="esi">ESI NO. : {user?.esi_no}</h5>
        <h5 id="monthly-gross">MONTHLY GROSS: 43367</h5>
        <h5 id="p-days">P. DAYS: 31</h5>
        <h5 id="ot-hrs">O.T. HRS. : 0</h5>
        <center style={{margin:"10px 0"}}><h4 style={{fontSize:"10px"}}>FORM XIX (Rule 78 (1) (b))</h4></center>
        <div className="mainTable">
          <center>
            <table id="maintable" style={{fontSize:"9px"}}>
              <tbody>
                <tr><th colSpan={6}>PAYMENT SLIP OF DECEMBER 2023</th></tr>
                <tr>
                  <th colSpan={2}>EARNINGS</th>
                  <th colSpan={2}>DEDUCTION</th>
                  <th colSpan={2}>NET AMOUNT</th>
                </tr>
                <tr>
                  <td>Basic+D.A.</td>
                  <td id="basic-da">{paymentSlip?.basicDa}</td>
                  <td>PF</td>
                  <td id="pf">{paymentSlip?.pf}</td>
                  <td colSpan={2} rowSpan={8}></td>
                </tr>
                <tr>
                  <td>H R A</td>
                  <td id="hra">{paymentSlip?.hra}</td>
                  <td>P. Tax</td>
                  <td id="p-tax">{paymentSlip?.ptax}</td>
                </tr>
                <tr>
                  <td>O T Amt.</td>
                  <td id="ot-amt">{paymentSlip?.otAmount}</td>
                  <td>ESI</td>
                  <td id="esi-deduction"></td>
                  {/* <td id="esi-deduction">{paymentSlip?.esiDeduction}</td> */}
                </tr>
                <tr>
                  <td>Uniform Purchase Reimbursement</td>
                  <td id="uniform-purchase">{paymentSlip?.UniformPurchaseReimbursement}</td>
                  <td>ADVANCE</td>
                  <td id="advance">{paymentSlip?.advance}</td>
                </tr>
                <tr>
                  <td>Uniform Washing Reimbursement</td>
                  <td id="uniform-washing">{paymentSlip?.UniformWashingReimbursement}</td>
                  <td>MLWF</td>
                  <td id="mlwf">{paymentSlip?.mlwf}</td>
                </tr>
                <tr>
                  <td>CHILD EDUCATION CESS</td>
                  <td id="child-education-cess">{paymentSlip?.ChildEducationCess}</td>
                  <td>Mediclaim Policy</td>
                  <td id="mediclaim">{paymentSlip?.MediclaimPolicy}</td>
                </tr>
                <tr>
                  <td>CCA</td>
                  <td id="cca">{paymentSlip?.cca}</td>
                  <td>TDS</td>
                  <td id="tds">{paymentSlip?.tds}</td>
                </tr>
                <tr>
                  <td>ARREARS</td>
                  <td id="arrears">{paymentSlip?.arrears}</td>
                  <td>OTHER DEDUCTION</td>
                  <td id="other-deduction">{paymentSlip?.otherDeduction}</td>
                </tr>
                <tr>
                  <td>GROSS TOTAL</td>
                  <td id="gross-total">{paymentSlip?.gross}</td>
                  <td>TOTAL DEDUCTION</td>
                  <td id="total-deduction">{paymentSlip?.totalDeduction}</td>
                  <td>NET AMT.</td>
                  <td id="net-amt">{paymentSlip?.netAmount}</td>
                </tr>
              </tbody>
            </table>
          </center>
        </div>
      </div>
    </div>
  );
};

