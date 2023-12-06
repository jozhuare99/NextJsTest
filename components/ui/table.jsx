"use client";

const { CN } = require("@/lib/utils");
const { forwardRef } = require("react");

const Table = forwardRef(({ className, ...props }, ref) => (
  <div className="w-full overflow-auto">
    <table
      ref={ref}
      className={CN("w-full caption-bottom text-sm", className)}
      {...props}
    />
  </div>
));
// Table.displayName = "Table"

const TableHeader = forwardRef(({ className, ...props }, ref) => (
  <thead ref={ref} className={CN("[&_tr]:border-b", className)} {...props} />
));
// TableHeader.displayName = "TableHeader"

const TableBody = forwardRef(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={CN("[&_tr:last-child]:border-0", className)}
    {...props}
  />
));
// TableBody.displayName = "TableBody"

const TableFooter = forwardRef(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={CN("bg-primary font-medium text-primary-foreground", className)}
    {...props}
  />
));
// TableFooter.displayName = "TableFooter"

const TableRow = forwardRef(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={CN(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    )}
    {...props}
  />
));
// TableRow.displayName = "TableRow"

const TableHead = forwardRef(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={CN(
      "h-12 px-4  text-left  align-middle  font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      className
    )}
    {...props}
  />
));
// TableHead.displayName = "TableHead"

const TableCell = forwardRef(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={CN("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
    {...props}
  />
));
// TableCell.displayName = "TableCell"

const TableCaption = forwardRef(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={CN("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
));
// TableCaption.displayName = "TableCaption"

export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
};
