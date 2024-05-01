import React, { useEffect, useState, useRef } from "react";
import api from "../../services/productAPI";
import { NavLink } from "react-router-dom";
import { faChevronLeft, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getUser } from "../../services/authUserAPI";
import { useForm } from "react-hook-form";

import Swal from "sweetalert2";
import { marked } from 'marked';

const AddProduct = () => {
  document.title = "เพิ่มสินค้า";
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset
  } = useForm();

  const [categories, setCategories] = useState([]);
  const [user, setUser] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const uploadRef = useRef(null)
 const { onChange, ref: registerRef,...uploadImgFields } = register('uploadImg')

  const handleUploadedFile = (e) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setImgUrl(e.target.result);
    };
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      setValue('uploadImage', e.target.files)
      console.log(e.target.files[0]);
    }
  };

  const onAddFile = () => {
    uploadRef.current.click();
  };

  useEffect(() => {
    readAllCategory();
    readUserData();
  }, []);

  const readAllCategory = async () => {
    try {
      const res = await api.getAllCategory();

      setCategories(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const readUserData = async () => {
    try {
      const res = await getUser();

      setUser(res.data.id);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async(data) => {
    let myData = {}
    myData.title = data.title
    myData.slug = data.slug
    myData.description = data.description
    myData.price = data.price
    myData.qty = data.qty
    myData.category = data.category.toString()
    myData.users = user

    const formData = new FormData()
    formData.append('data',JSON.stringify(myData))

    if(data.uploadImage.length){
        formData.append('files.image', data.uploadImage[0])
    }

    try {
        const res = await api.addNewProduct(formData)
        reset()
        setImgUrl('')
        Swal.fire({
            title: "เพิ่มข้อมูลเรียบร้อยแล้ว",
            icon: "success"
          });
    } catch (error) {
        console.log(error)
    }
  };

  return (
    <>
      <div className="flex my-6">
        <h1 className="text-2xl text-black pb-6">Product</h1>
        <p className="flex-1 text-right">
          <NavLink to="/productlist" className="px-2 py-1 mb-2 text-xl">
            <FontAwesomeIcon icon={faChevronLeft} /> Back
          </NavLink>
        </p>
      </div>
      <div className="full">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <form
            className="p-5 bg-white rounded"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <div className="sm:grid sm:grid-cols-5 sm:gap-4">
                <div className="sm:col-span-4">
                  <div className="px-4 pt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <label className="text-2xl font-medium text-gray-500">
                      Title
                    </label>
                    <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      <input
                        className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                        name="title"
                        type="text"
                        {...register("title", { required: true })}
                      />
                      {errors.title && (
                        <p className="text-red-500 mt-2">
                          This field is required
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="px-4 pt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <label className="text-2xl font-medium text-gray-500">
                      Slug
                    </label>
                    <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      <input
                        className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                        name="slug"
                        type="text"
                        {...register("slug", { required: true })}
                      />
                      {errors.slug && (
                        <p className="text-red-500 mt-2">
                          This field is required
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="px-4 pt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <label className="text-2xl font-medium text-gray-500">
                      Description
                    </label>
                    <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      <textarea
                        className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                        name="description"
                        type="text"
                        rows={6}
                        {...register("description")}
                      />
                      {}
                    </div>
                  </div>

                  <div className="px-4 pt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <label className="text-2xl font-medium text-gray-500">
                      Price
                    </label>
                    <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      <input
                        className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                        name="price"
                        type="number"
                        {...register("price", { required: true })}
                      />
                      {errors.price && (
                        <p className="text-red-500 mt-2">
                          This field is required
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="px-4 pt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <label className="text-2xl font-medium text-gray-500">
                      Qty
                    </label>
                    <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      <input
                        className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                        name="qty"
                        type="number"
                        {...register("qty", { required: true })}
                      />
                      {errors.qty && (
                        <p className="text-red-500 mt-2">
                          This field is required
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="px-4 pt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <label className="text-2xl font-medium text-gray-500">
                      Category
                    </label>
                    <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      <select
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm 
                                    focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        name="category"
                        {...register("category", { required: true })}
                      >
                        <option value="">Select Category</option>
                        {categories.map((category, index) => (
                          <>
                            <option value={index+1}>
                              {category.attributes.title}
                            </option>
                          </>
                        ))}
                      </select>
                      {errors.category && (
                        <p className="text-red-500 mt-2">
                          This field is required
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-1">
                  <div className="mt-5 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      {imgUrl !== "" ? (
                        <div>
                          <button
                            type="button"
                            className="text-md mb-2 w-full text-right hover:text-red-500"
                            onClick={() => setImgUrl("")}
                          >
                            <FontAwesomeIcon icon={faTimes} /> remove
                          </button>
                          <img
                            src={imgUrl}
                            alt=""
                            className="w-full mx-auto rounded-md"
                            id="target"
                          />
                        </div>
                      ) : (
                        <span></span>
                      )}
                      <div className="text-sm text-gray-600">
                        <label
                          htmlFor="uploadimg"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 
                                        focus-within:outline-none focus-within::ring-2 focus-within::ring-offset-2 focus-within:ring-indigo-500"
                        >
                          {imgUrl === "" ? (
                            <svg
                              class="mx-auto h-12 w-12 text-gray-400"
                              viewBox="0 0 48 48"
                              stroke="currentColor"
                              fill="none"
                              aria-hidden="true"
                            >
                              <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          ) : (
                            <span></span>
                          )}
                          <input
                            type="file"
                            {...uploadImgFields}
                            onChange={handleUploadedFile}
                            ref={(e) => {
                                registerRef(e)
                                uploadRef.current = e
                            }}
                            hidden
                          />
                        </label>
                        <div className="w-full my-2 mx-auto" onClick={() => onAddFile()}>
                            Upload Image
                        </div>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 2MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-5 sm:gap-4 mt-5 mx-5">
              <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-4 text-right">
                <button
                  type="submit"
                  className="bg-green-500 rounded-md px-4 py-2 my-2 text-white hover:bg-green-600 text-xl"
                >
                  บันทึกข้อมูล
                </button>
                {}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
