'use client';
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { Paper, Grid, Stack, TextField, Checkbox, FormGroup, FormControlLabel, RadioGroup, Radio, FormLabel, FormControl, Button, } from '@mui/material';
import BaseCard from '@/app/(adminaccess)/admin/dashboard/components/shared/BaseCard';
import { createTheme, styled } from '@mui/material/styles';
import { useState } from 'react';
import ProductCard from './ProductCard';
var Item = styled(Paper)(function (_a) {
    var theme = _a.theme;
    return (__assign(__assign({}, theme.typography.body1), { textAlign: 'center', color: theme.palette.text.secondary, height: 60, lineHeight: '60px' }));
});
var darkTheme = createTheme({ palette: { mode: 'dark' } });
var lightTheme = createTheme({ palette: { mode: 'light' } });


var Form = function () {
    const [products,setProducts] = useState([]);
    const [product, setProduct] = useState({"title":"",
                                        "slug":"",
                                        "description":"",
                                        "img":"",
                                        "category":"",
                                        "size":"",
                                        "color":"",
                                        "price":"",
                                        "availableQty":""});
    const handleFormChange = (e)=>{
      setProduct({...product, [e.target.name] : e.target.value})
    }

    const handlePushProduct = ()=>{
      if(product.title && product.slug && product.description && product.category && product.price && product.availableQty){
        setProducts([...products, product]);
        setProduct({"title":"",
        "slug":"",
        "description":"",
        "img":"",
        "category":"",
        "size":"",
        "color":"",
        "price":"",
        "availableQty":""})
      }
    }

    return (<Grid container spacing={3}>
        <Grid item xs={12} lg={12}>
          <BaseCard title="Add a Product">
            <>
            <form>
            <Stack spacing={3}>
              <TextField name='title' value={product.title} onChange={handleFormChange} id="name-basic" label="Title" variant="outlined" />
              <TextField name='slug' value={product.slug} onChange={handleFormChange} id="name-basic" label="Slug" variant="outlined" />
              <TextField name='description' value={product.description} onChange={handleFormChange} id="outlined-multiline-static" label="Description" multiline rows={4} />
              <TextField name='img' value={product.img} onChange={handleFormChange} id="name-basic" label="Image URL (Optional)"  variant="outlined" />
              <TextField name='category' value={product.category} onChange={handleFormChange} id="name-basic" label="Category"  variant="outlined" />
              <TextField name='size' value={product.size} onChange={handleFormChange} id="name-basic" label="Size (Optional)"  variant="outlined" />
              <TextField name='color' value={product.color} onChange={handleFormChange} id="name-basic" label="Color (Optional)"  variant="outlined" />
              <TextField type='number' name='price' value={product.price} onChange={handleFormChange} id="name-basic" label="Price"  variant="outlined" />
              <TextField type='number' name='availableQty' value={product.availableQty} onChange={handleFormChange} id="name-basic" label="Quantity"  variant="outlined" />
            </Stack>
            <br />
            <Button className='bg-blue-400 text-white hover:bg-black' onClick={handlePushProduct}>
              Add
            </Button>
            </form>
            {/* Optional chaining operator?. */}
            {products?.length>0 &&(
            <div className='container flex flex-wrap gap-2 items-center justify-start p-2'>
              {products.map((productItem)=>{
                return (
                  <div key={productItem.slug}>
                    < ProductCard title={productItem.title} slug={productItem.slug} description={productItem.description} category={productItem.category} price={productItem.price} availableQty={productItem.availableQty} size={productItem.size} color={productItem.color}/>
                  </div>
                )
              })}
            </div>
            )}

            </>
          </BaseCard>
        </Grid>
      </Grid>);
};
export default Form;
