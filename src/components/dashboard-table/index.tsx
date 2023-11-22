import { ISales } from "@/shared/types";
import Row from "./row";
import StickyGrid from "./sticky-grid-context";

const DashboardTable = ({ data }: { data: ISales[] }) => {
  const headerKeys = Object.keys(data[0]);

  return (
    <StickyGrid
      headerKeys={headerKeys}
      rowHeight={30}
      stickyHeight={50}
      data={data}
    >
      {({ columnIndex, rowIndex, style }) => {
        const property = headerKeys[columnIndex] as keyof ISales;
        const isLastColumn = columnIndex === headerKeys.length - 1;

        return (
          <Row
            style={style}
            value={data[rowIndex][property]}
            isLastColumn={isLastColumn}
          />
        );
      }}
    </StickyGrid>
  );
};

export default DashboardTable;
