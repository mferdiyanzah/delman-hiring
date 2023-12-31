import { Stack } from "@chakra-ui/react";
import { FC, createContext, forwardRef, useCallback, useState } from "react";
import { FixedSizeGrid as Grid } from "react-window";
import {
  InnerGridElementTypeProps,
  StickyGridContextProps,
  StickyGridProps,
} from "./dashboard-table.interface";
import StickyHeader from "./sticky-header";

const StickyGridContext = createContext<StickyGridContextProps>({
  stickyHeight: 0,
  columnWidth: 0,
  rowHeight: 0,
  headerKeys: [],
  data: [],
});
StickyGridContext.displayName = "StickyGridContext";

const innerGridElementType = forwardRef<
  HTMLDivElement,
  InnerGridElementTypeProps
>(({ children, ...rest }) => (
  <StickyGridContext.Consumer>
    {({ stickyHeight, headerKeys, columnWidth }) => {
      const columns = headerKeys.map((key, i) => ({
        height: stickyHeight,
        width: i === headerKeys.length - 1 ? columnWidth - 10 : columnWidth,
        left: i * columnWidth,
        label: key,
      }));

      const { width, height, ...restStyle } = rest.style;
      const containerStyle = {
        ...restStyle,
        width: `${parseFloat(width as string)}px`,
        height: `${parseFloat(height as string)}px`,
      };
      const gridDataContainerStyle = {
        top: stickyHeight,
      };

      return (
        <Stack style={containerStyle}>
          <StickyHeader columns={columns} />
          <Stack
            position="absolute"
            left="0"
            paddingRight="50"
            style={gridDataContainerStyle}
          >
            {children}
          </Stack>
        </Stack>
      );
    }}
  </StickyGridContext.Consumer>
));

innerGridElementType.displayName = "innerGridElementType";

const StickyGrid: FC<StickyGridProps> = ({
  stickyHeight,
  headerKeys,
  rowHeight,
  children,
  data,
  columnWidth,
}) => {
  const [dimenstions, setDimensions] = useState({ width: 0, height: 0 });
  const ref = useCallback((node: HTMLDivElement) => {
    if (!node) return;
    const resizeObserver = new ResizeObserver(() => {
      setDimensions({
        width: node.offsetWidth,
        height: node.offsetHeight,
      });
    });
    resizeObserver.observe(node);
  }, []);
  return (
    <StickyGridContext.Provider
      value={{
        stickyHeight,
        columnWidth,
        rowHeight,
        headerKeys,
        data,
      }}
    >
      <Stack ref={ref}>
        <Grid
          columnWidth={175}
          rowHeight={rowHeight}
          innerElementType={innerGridElementType}
          columnCount={headerKeys.length}
          rowCount={data.length}
          height={600}
          width={dimenstions.width}
        >
          {children}
        </Grid>
      </Stack>
    </StickyGridContext.Provider>
  );
};

export default StickyGrid;
