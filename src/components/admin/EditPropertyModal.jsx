import React from 'react';

export default function EditPropertyModal({ selectedProperty }) {
    return (
        <div
            className="modal fade"
            id="editModal"
            tabIndex="-1"
            aria-labelledby="editModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="editModalLabel">
                            Edit Property
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        {/* You can render property data here */}
                        {selectedProperty ? (
                            <div>
                                <form className="p-4">
                                    <div className="mb-3">
                                        <label className="form-label fw-semibold">Property Title</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            defaultValue={selectedProperty?.title}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label fw-semibold">Location</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            defaultValue={selectedProperty?.location}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label fw-semibold">Status</label>
                                        <select className="form-select" defaultValue={selectedProperty?.status}>
                                            <option value="rent">Rent</option>
                                            <option value="sale">Sale</option>
                                        </select>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label fw-semibold">Price</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            defaultValue={selectedProperty?.price}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label fw-semibold">Description</label>
                                        <textarea
                                            className="form-control"
                                            rows="4"
                                            defaultValue={selectedProperty?.description}
                                        ></textarea>
                                    </div>
                                </form>


                            </div>
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn custom-btn2" data-bs-dismiss="modal">
                            Close
                        </button>
                        <button type="button" className="btn custom-btn">
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
