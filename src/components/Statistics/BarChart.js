import React from "react"
import { Bar } from "react-chartjs-2"

const BarChart = ({ label, labels, data }) => {
  const stat = {
    labels,
    datasets: [
      {
        label,
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FF6384",
          "#36A2EB",
          "#FF6384",
          "#36A2EB",
        ],
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data,
      },
    ],
  }
  {
    return (
      <div>
        <Bar data={stat} />
      </div>
    )
  }
}
export default BarChart
