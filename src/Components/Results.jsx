import { calculateInvestmentResults, formatter} from "../util/investment"

export default function Results({ input }) {
    const results = calculateInvestmentResults(input);
    const initialInvestment = results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment;

    return (
        <table id="result">
            <thead id="thead">
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capitol</th>
                </tr>
            </thead>
            <tbody id="tbody">
                {results.map((yearData) => {

                    const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
                    const totalInvested = yearData.valueEndOfYear - totalInterest;
                    return (<tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalInvested)}</td>
                    </tr>
                    );
                })}
            </tbody>
        </table>
    )
}