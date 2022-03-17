import { useParams } from 'react-router-dom';

function ProductScreen() {
  // React Hook to get 'slug' from url:
  const prodparams = useParams();
  const {slug} = prodparams;

  return <div>
    {slug}
    </div>;
}

export default ProductScreen;
