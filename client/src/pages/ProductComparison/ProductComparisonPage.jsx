import './ProductComparisonPage.scss';
import ComparisonTable from './ComparisonTableComponent';
import { Container } from '@mui/material';
import BreadCrumbs from '../../components/BreadCrumbs';
import { useSelector } from 'react-redux';
import { selectorScales } from '../../selectors';

const ProductComparisonPage = () => {
  const itemNoArr = useSelector(selectorScales);
  return (
    <main>
      <Container className="comparison-container" maxWidth="lg">
        <BreadCrumbs linksArray={[{ link: '/comparison', text: 'Product comparison' }]} />
        <h2 className="comparison-container__wrapper-title">Compare {itemNoArr?.length}</h2>
        <h2 className="comparison-container__wrapper-title-quantity">products</h2>
        <ComparisonTable />
      </Container>
    </main>
  );
};

export default ProductComparisonPage;
