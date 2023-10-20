"use client"
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

const SmallTable = () => {
    return (
      <div className="my-5">
        <Table removeWrapper aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>NAME</TableColumn>
            <TableColumn>FEATURES</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>Saturn</TableCell>
              <TableCell>Orb</TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>Earth</TableCell>
              <TableCell>Water</TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>Jupiter</TableCell>
              <TableCell>Storms</TableCell>
            </TableRow>
        
          </TableBody>
        </Table>
      </div>
    );
};

export default SmallTable;