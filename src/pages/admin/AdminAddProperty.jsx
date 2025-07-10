import React from 'react';

const AdminAddProperty = () => {
    return (
        <>
            <div className='row mt-5 pt-5'>
                <div className="col-lg-8 mx-auto">
                    <h2 className='text-center fw-bold mb-3 text-color'>
        Add A Property
      </h2>
                    <form className="p-4 bg-white shadow rounded custom-card">
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label className="form-label fw-semibold">Property Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder='Enter property title'
                                />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label fw-semibold">Location</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder='Enter property location'
                                />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label className="form-label fw-semibold">Status</label>
                                <select className="form-select">
                                    <option value="rent">Rent</option>
                                    <option value="sale">Sale</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label className="form-label fw-semibold">Price</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder='Enter property price'
                                />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-12">
                                <label className="form-label fw-semibold">Description</label>
                                <textarea
                                    className="form-control"
                                    rows="4"
                                    placeholder='Enter property description'
                                ></textarea>
                            </div>
                        </div>
                        <div className='col-12 text-center mt-4'>
                <button type='submit' className='btn custom-btn px-5 py-2 shadow-sm'>
                  Add Property
                </button>
              </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AdminAddProperty;
