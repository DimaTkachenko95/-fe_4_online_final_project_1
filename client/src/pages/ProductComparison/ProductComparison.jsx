import { Container } from '@mui/material';
import BreadCrumbs from '../../components/BreadCrumbs';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectorScales,
  selectorServerErrorProducts,
  selectorPageLoading,
  selectorAllProductsComp,
} from '../../selectors';
import { useEffect, useState } from 'react';
import './ProductComparison.scss';
import Preloader from '../../components/Preloader';
import ServerError from '../../components/Notifications/ServerError';
import { actionFetchAllProductsComp } from '../../reducers/products.reducer';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { columns } from './columns';

const ProductComparisonSlice = () => {
  const dispatch = useDispatch();
  const allProd = useSelector(selectorAllProductsComp);
  const itemNoArr = useSelector(selectorScales);
  const serverError = useSelector(selectorServerErrorProducts);
  const isLoading = useSelector(selectorPageLoading);
  const [comparisonProducts, setComparisonProducts] = useState([]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    dispatch(actionFetchAllProductsComp());
  }, []);

  useEffect(() => {
    const tableProducts = allProd
      ?.filter((prod) => itemNoArr.includes(prod._id))
      .map((item) => {
        return { ...item, image: item.imageUrls[0] };
      });
    setComparisonProducts(tableProducts);
  }, [allProd]);
  return (
    <main>
      <Container className="comparison-container" maxWidth="lg">
        <BreadCrumbs linksArray={[{ link: '/comparison', text: 'Product comparison' }]} />
        <h2 className="comparison-container__wrapper-title">Compare {itemNoArr?.length}</h2>
        <h2 className="comparison-container__wrapper-title-quantity">products</h2>
        {serverError && <ServerError />}
        <div className="comparison-container__wrapper">
          <Preloader open={isLoading} />
          {comparisonProducts?.length > 0 && (
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
              <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{ minWidth: column.minWidth }}
                        >
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {comparisonProducts
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((row) => {
                        return (
                          <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                            {columns.map((column) => {
                              const value = row[column.id];
                              return (
                                <TableCell key={column.id} align={column.align}>
                                  {column.format && typeof value === 'number'
                                    ? column.format(value)
                                    : value}
                                </TableCell>
                              );
                            })}
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={comparisonProducts.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          )}
        </div>
      </Container>
    </main>
  );
};

export default ProductComparisonSlice;

// function createData(imageUrls, name, brand, category, currentPrice) {
//   const density = population / size;
//   return { imageUrls, name, brand, category, currentPrice};
// }
//
// const rows = [
//   createData('India', 'IN', 1324171354, 3287263),
//   createData('China', 'CN', 1403500365, 9596961),
//   createData('Italy', 'IT', 60483973, 301340),
//   createData('United States', 'US', 327167434, 9833520),
//   createData('Canada', 'CA', 37602103, 9984670),
//   createData('Australia', 'AU', 25475400, 7692024),
//   createData('Germany', 'DE', 83019200, 357578),
//   createData('Ireland', 'IE', 4857000, 70273),
//   createData('Mexico', 'MX', 126577691, 1972550),
//   createData('Japan', 'JP', 126317000, 377973),
//   createData('France', 'FR', 67022000, 640679),
//   createData('United Kingdom', 'GB', 67545757, 242495),
//   createData('Russia', 'RU', 146793744, 17098246),
//   createData('Nigeria', 'NG', 200962417, 923768),
//   createData('Brazil', 'BR', 210147125, 8515767),
// ];
