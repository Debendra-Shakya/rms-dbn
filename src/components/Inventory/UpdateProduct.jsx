import React from 'react'
import {Formik, Field,ErrorMessage,Form} from "formik"
import * as Yup from 'yup'
import { useProduct } from '../../context/Product';

const productValidationSchema = Yup.object().shape({
    name: Yup.string().trim().min(3).required().label("Name"),
    imageURL: Yup.string().trim().required().label("ImageURL"),
    price: Yup.number().min(5).label("price"),
    quantity: Yup.number().min(1).label("quantity"),
    description: Yup.string().trim().required().min(3).label("description"),
  });
const UpdateProduct = (id,name,imageURL,price) => {
    const {products}=useProduct()
    console.log(products,"products")
    console.log("id",id)
    const newProducts = [...products ];
    console.log("newproducts",newProducts)
    const updatedProduct = newProducts.find((p) => p.id === id);
    console.log("updatedproduct",updatedProduct)

    return (
    <Formik
    onSubmit={(data, { resetForm }) => {
    //   addProduct(data);
      resetForm();
    }}
    validationSchema={productValidationSchema}
    initialValues={{
      name: "",
      imageURL:"",
      //   "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
      price:0,
      quantity: 0,
      description: "",
    }}
  >
    {({ values, handleChange }) => (
      <>
        <Form>
          <div className="form-control w-full max-w-lg">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <Field
              name="name"
              // value={values.name}
              // onChange={handleChange}
              type="text"
              placeholder="Type name of food"
              className="input input-bordered w-full max-w-lg"
            />
            <label className="label">
              <ErrorMessage
                name="name"
                component="span"
                className="label-text-alt"
              />
            </label>
          </div>

          {/* image ko lagi */}

          <div className="form-control w-full max-w-lg">
            <label className="label">
              <span className="label-text">Product Image</span>
            </label>
            <Field
              name="imageURL"
              // value={values.imageURL}
              // onChange={handleChange}
              type="text"
              placeholder="Image of food"
              className="input input-bordered w-full max-w-lg"
            />
            <label className="label">
              <ErrorMessage
                name="imageURL"
                component="span"
                className="label-text-alt"
              />
            </label>
          </div>

          {/* description */}
          <div className="form-control w-full max-w-lg">
            <label className="label">
              <span className="label-text">Product Image</span>
            </label>
            <Field
              as="textarea"
              name="description"
              value={values.description}
              onChange={handleChange}
              className="textarea input input-bordered w-full max-w-lg h-20"
              placeholder="Bio"
              // rows={4}
            />

            <label className="label">
              <ErrorMessage
                name="description"
                component="span"
                className="label-text-alt"
              />
            </label>
          </div>

          {/* price */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Product price</span>
            </label>
            <Field
              name="price"
              // value={values.price}
              // onChange={handleChange}
              type="number"
              placeholder="Type price of food"
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              <ErrorMessage
                name="price"
                component="span"
                className="label-text-alt"
              />
            </label>
          </div>

          {/* quanitity */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Product Quantity</span>
            </label>
            <Field
              name="quantity"
              // value={values.quantity}
              // onChange={handleChange}
              type="number"
              placeholder="Type quantity of food"
              className="input input-bordered w-full max-w-lg"
            />
            <label className="label">
            <ErrorMessage name='quantity' component="span" className="label-text-alt"/>

          </label>
          </div>

          <button type="submit" className="mt-4 btn btn-primary">
            submit
          </button>
        </Form>
      </>
    )}
  </Formik>
  )
}

export default UpdateProduct