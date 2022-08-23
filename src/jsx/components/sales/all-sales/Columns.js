import { format } from "date-fns";
import { ColumnFilter } from "./ColumnFilter";
export const COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
    Filter: ColumnFilter,
    //disableFilters: true,
  },
  {
    Header: "Sale Date",
    Footer: "Sale Date",
    accessor: "sale_date",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/mm/yyyy");
    },
    Filter: ColumnFilter,
  },
  {
    Header: "Showroom",
    Footer: "Showroom",
    accessor: "showroom",
    Filter: ColumnFilter,
  },
  {
    Header: "Card No",
    Footer: "Card NO",
    accessor: "card_no",
    Filter: ColumnFilter,
  },
  {
    Header: "Cust Name",
    Footer: "Cust Name",
    accessor: "cust_name",
    Filter: ColumnFilter,
  },
  {
    Header: "Phone",
    Footer: "Phone",
    accessor: "phone",
    Filter: ColumnFilter,
  },
  {
    Header: "Product",
    Footer: "Product",
    accessor: "product",
    Filter: ColumnFilter,
  },
];

export const GROUPED_COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "Showroom",
        Footer: "Showroom",
        accessor: "showroom",
      },
      {
        Header: "Cust Name",
        Footer: "Cust Name",
        accessor: "cust_name",
      },
    ],
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "Sale Date",
        Footer: "Sale Date",
        accessor: "sale_date",
      },
      {
        Header: "Country",
        Footer: "Country",
        accessor: "country",
      },
      {
        Header: "Phone",
        Footer: "Phone",
        accessor: "phone",
      },
    ],
  },
];
