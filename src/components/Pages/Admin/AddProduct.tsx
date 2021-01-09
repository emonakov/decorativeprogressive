import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { createProduct, generateProductId } from '../../../services/products';
import type { ItemInterface } from '../../../Interfaces/ProductItemInterface';

const AddProduct: React.FC = () => {
    const history = useHistory();
    const productId = generateProductId();

    const onSubmit = async (form: Partial<ItemInterface>) => {
        await createProduct(form, productId);
        history.push(`/admin/products/${productId}`);
    };

    useEffect(() => {
        onSubmit({});
    }, []);

    return null;
};

export default AddProduct;
