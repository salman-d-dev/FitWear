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
import { Paper, Grid, Stack, TextField, FormControl, Button,Select , InputLabel, MenuItem} from '@mui/material';
import BaseCard from '@/app/(adminaccess)/admin/dashboard/components/shared/BaseCard';
import { createTheme, styled } from '@mui/material/styles';
import { useEffect, useRef, useState } from 'react';
import ProductCard from './ProductCard';

import {toast } from "react-toastify";

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


    const handleFormChange = (e) => {
      const { name, value } = e.target;
      if (name === 'category' && (value === 'Mugs' || value === 'Stickers')) {
        // If the selected category is 'Mugs' or 'Stickers', clear color and size
        setProduct({ ...product, [name]: value, size: '', color: '' });
      } else {
        // For other categories, update the field as usual
        setProduct({ ...product, [name]: value });
      }
    }
    const categories = ['T-Shirts', 'Hoodies', 'Mugs', 'Stickers'];
    const sizes = ["XS", "S", "M","L","XL","C"];

    const formRef = useRef();
    const handlePushProduct = (e)=>{
      e.preventDefault();
      if(product.title && product.slug && product.description && product.category && product.price && product.availableQty){
        setProducts([...products, product]);
      }
      toast.success('Product Added!', {
        position: "bottom-center",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        formRef.current.focus()

    }

    const handleClear = ()=>{
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


    const handleRemoveProduct = (slug)=>{
      const updatedProducts = products.filter((product)=> product.slug !== slug);
      setProducts(updatedProducts);
    }

    const handleSaveProducts = async()=>{
      //disable the save button for 4 sec
      setDisableButton(true);
      setTimeout(() => {
        setDisableButton(false)
      }, 4000);
      const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/addproducts`,{
        method:"POST",
        headers:{
          "Content-Type": "application/json",
          "admin-token":localStorage.getItem("admin-token"),
        },
        body: JSON.stringify(products)
      }
      );
      if(response.status === 201){
        toast.success('Products saved successfully!', {
          position: "bottom-center",
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
          setProducts([]);

      } else {
        toast.error('Error! Could not save!', {
          position: "bottom-center",
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
    }
    const [disableButton, setDisableButton] = useState(false)
    return (<Grid container spacing={3}>
        <Grid item xs={12} lg={12}>
          <BaseCard title="Add Product" >
            <>
            <form>
            <Stack spacing={3}>
            
            {/* set tabindex and ref for non interactive elements likw like div, seciton etc */}
              <TextField tabIndex={0} ref={formRef} name='title' value={product.title} onChange={handleFormChange} id="name-basic" label="Title" variant="outlined"  />
              <TextField name='slug' value={product.slug} onChange={handleFormChange} id="name-basic" label="Slug" variant="outlined" />
              <TextField name='description' value={product.description} onChange={handleFormChange} id="outlined-multiline-static" label="Description" multiline rows={4} />
              <TextField name='img' value={product.img} onChange={handleFormChange} id="name-basic" label="Image URL (Optional)"  variant="outlined" />

              <FormControl variant="outlined">
                <InputLabel id="category-label">Category</InputLabel>
                <Select
                  labelId="category-label"
                  id="category"
                  name="category"
                  value={product.category}
                  onChange={handleFormChange}
                  label="Category"
                  defaultValue={categories[0]}
                >
                  {categories.map((category) => (
                    <MenuItem key={category} value={category}>
                      {category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

                    {/* show Size and Color only for T-Shirts and Hoodies */}
              {product.category==="T-Shirts" || product.category==="Hoodies"? (<>
              <FormControl variant="outlined" >
                <InputLabel id="size-label">Size (Optional)</InputLabel>
                <Select
                  labelId="size-label"
                  id="size"
                  name="size"
                  value={product.size}
                  onChange={handleFormChange}
                  label="Size (Optional)"
                >
                  {sizes.map((size) => (
                    <MenuItem key={size} value={size}>
                      {size}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField type='text' name='color' value={product.color.toLocaleLowerCase()} onChange={handleFormChange} id="name-basic" label="Color (Optional)"  variant="outlined" /> 
              </>) : (
                null)}
              <TextField type='text' name='price' value={product.price} onChange={handleFormChange} id="name-basic" label="Price"  variant="outlined" />
              <TextField type='text' name='availableQty' value={product.availableQty} onChange={handleFormChange} id="name-basic" label="Quantity"  variant="outlined" />
            </Stack>
            <br />
            <Button disabled={!(product.title && product.slug && product.description && product.category && product.price && product.availableQty)} className='bg-[#03c9d7] text-white hover:bg-black disabled:bg-teal-800 ' onClick={handlePushProduct}>
              Add
            </Button>
            <Button className='bg-[#03c9d7] text-white hover:bg-black ml-4' onClick={handleClear}>
              Clear
            </Button>
            </form>
            {/* Product Card */}
            {/* Optional chaining operator?. */}
            {products?.length>0 &&(<div className="flex justify-center items-center flex-col">
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2'>
              {products.map((productItem)=>{
                return (
                  <div key={productItem.slug}>
                    < ProductCard title={productItem.title} slug={productItem.slug} description={productItem.description} category={productItem.category} price={productItem.price} availableQty={productItem.availableQty} size={productItem.size} color={productItem.color} img={productItem.img} handleRemoveProduct={handleRemoveProduct}/>
                  </div>
                )
              })}
            </div>
            <div><button className='bg-cyan-300 hover:bg-cyan-400 p-3 self-center rounded-lg disabled:bg-slate-200' onClick={handleSaveProducts} disabled={disableButton}>{disableButton?"Saving.." : "Save"}</button></div>
            </div>)}

            </>
          </BaseCard>
        </Grid>
      </Grid>);
};
export default Form;
