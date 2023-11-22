import { ISales } from "@/shared/types";
import { ComponentType, ReactNode } from "react";
import { GridChildComponentProps } from "react-window";

export interface TableColumn {
  height: number;
  width: number;
  left: number;
  label: string;
}

export interface StickyHeaderProps {
  columns: TableColumn[];
}

export interface StickyGridContextProps {
  stickyHeight: number;
  columnWidth: number;
  rowHeight: number;
  headerKeys: string[];
  data: ISales[];
}

export interface InnerGridElementTypeProps {
  children: ReactNode;
  style: React.CSSProperties;
}

export interface StickyGridProps {
  stickyHeight: number;
  rowHeight: number;
  headerKeys: string[];
  children: ComponentType<GridChildComponentProps<any>>;
  data: ISales[];
}
