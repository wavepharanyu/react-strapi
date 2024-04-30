import React, { useEffect, useState } from "react";
import api from "../../services/productAPI";
import { NavLink } from "react-router-dom";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddProduct = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    readAllCategory();
  }, []);

  const readAllCategory = async () => {
    try {
      const res = await api.getAllCategory();

      setCategories(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(categories);
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
          <form className="p-5 bg-white rounded">
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
                    />
                    {}
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
                    />
                    {}
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
                    />
                    {}
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
                    />
                    {}
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
                    >
                      <option value="">Select Category</option>
                      {categories.map((category, index) => (
                        <>
                          <option value={index}>
                            {category.attributes.title}
                          </option>
                        </>
                      ))}
                    </select>
                    {}
                  </div>
                </div>

                <div className="px-4 pt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <label className="text-2xl font-medium text-gray-500">
                    Create by
                  </label>
                  <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <select
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm 
                                    focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      name="users"
                    >
                      <option value="">Select Category</option>
                      <option value="1">Electronic</option>
                      <option value="2">Cloth</option>
                      <option value="3">Mom & Kid</option>
                    </select>
                    {}
                  </div>
                </div>

                <div className="px-4 pt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <label className="text-2xl font-medium text-gray-500">
                    &nbsp;
                  </label>
                  <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <button
                      type="submit"
                      className="bg-green-500 rounded-md px-4 py-2 my-2 text-white hover:bg-green-600 text-xl"
                    >
                      บันทึกข้อมูล
                    </button>
                    {}
                  </div>
                </div>
              </div>
              <div className="sm:col-span-1">
                <div className="mt-5 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <div className="text-sm text-gray-600">
                      <label
                        htmlFor="uploadimg"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 
                                        focus-within:outline-none focus-within::ring-2 focus-within::ring-offset-2 focus-within:ring-indigo-500"
                      >
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
                        <div className="w-full my-2 mx-auto">Upload Image</div>
                        <input id="uploadimg" name="uploadimg" type="file" accept='images/*' className="sr-only"/>
                      </label>
                    </div>
                    <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 2MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
