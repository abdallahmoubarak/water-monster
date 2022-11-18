import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { styles } from "@/utils/styles";
import { client } from "pages/_app";
import { useMemo } from "react";
import { dateChanger } from "@/utils/time";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export default function StatisticsChart({ data }) {
  const titles = client.getQueryData(["Containers"])?.map((item) => item.name);

  const { labels, datasets } = useMemo(
    () => titles && createData({ titles, data }),
    [titles],
  );

  return <Line options={{ responsive: true }} data={{ labels, datasets }} />;
}

const createData = ({ titles, data }) => {
  const datasets = titles?.map((title) => {
    let containerData = data.filter((item) => item.container.name === title);
    let containerSize = parseInt(containerData[0].container.size);
    let mydata = new Array(containerData.length * 2).fill(0);

    return {
      label: title,
      data: mydata.map((_, i) =>
        i % 2 === 0
          ? containerSize
          : containerData[Math.floor(i / 2)].initial_state,
      ),
      fill: false,
      borderColor: styles.primaryColor,
      tension: 0.1,
    };
  });

  const labels = data.map((item) => dateChanger(item.createdAt));
  return { labels, datasets };
};
