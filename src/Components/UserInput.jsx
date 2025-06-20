export default function UserInput({onChange, inputNumbers}) {

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>INITIAL INVESTMENT</label>
                    <input type="number" required value={inputNumbers.initialInvestment} onChange={(event) => onChange('initialInvestment',event.target.value)}/>
                </p>
                <p>
                    <label>ANNUAL INVESTMENT</label>
                    <input type="number" required value={inputNumbers.annualInvestment} onChange={(event) => onChange('annualInvestment',event.target.value)}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>EXPECTED RETURN</label>
                    <input type="number" required value={inputNumbers.expectedReturn} onChange={(event) => onChange('expectedReturn',event.target.value)}/>
                </p>
                <p>
                    <label>DURATION</label>
                    <input type="number" required value={inputNumbers.duration} onChange={(event) => onChange('duration',event.target.value)}/>
                </p>
            </div>
        </section>
        
        //     <div id="user-input">
        //     <table>
        //         <tr className="input-group">
        //             <td><label>INITIAL INVESTMENT</label><input type="number" /></td>
        //             <td><label>ANNUAL INVESTMENT</label><input type="number" /></td>
        //         </tr>
        //         <tr className="input-group">
        //             <td><label>EXPECTED RETURN</label><input type="number" /></td>
        //             <td><label>DURATION</label><input type="number" /></td>
        //         </tr>
        //     </table>
        // </div>
        
        
        
    );
}