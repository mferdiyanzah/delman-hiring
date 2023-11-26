import { ISales, IUsers } from "@/shared/types";
import StickyGrid from "./sticky-grid-context";
import Row from "./row";

const DashboardTable = ({ data }: { data: IUsers[] }) => {
  const headerKeys = Object.keys(data[0]);

  return (
    <StickyGrid
      columnWidth={175}
      headerKeys={headerKeys}
      rowHeight={30}
      stickyHeight={50}
      data={data}
    >
      {({ columnIndex, rowIndex, style }) => {
        const property = headerKeys[columnIndex] as keyof IUsers;
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
