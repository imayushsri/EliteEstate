import { MdLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function ListingItem({ listing }) {
  return (
    <div className="card h-100 custom-card shadow border-0">
      <Link to='#' className="text-decoration-none text-dark">
        <img
          src={
            listing.imageUrls[0]
          }
          className="card-img-top"
          alt="listing cover"
          style={{ height: '220px', objectFit: 'cover' }}
        />
        <div className="card-body d-flex flex-column gap-2">
          <h5 className="card-title text-truncate">{listing.name}</h5>
          <div className="d-flex align-items-center gap-1">
            <MdLocationOn className="text-success" />
            <p className="card-text text-muted text-truncate mb-0">
              {listing.location}
            </p>
          </div>
          <p className="card-text text-muted" style={{ maxHeight: '3rem', overflow: 'hidden' }}>
            {listing.description || 'No description available.'}
          </p>
          <p className="card-rent fw-semibold mt-2 mb-0">
            ${listing.price.toLocaleString('en-US')}
            {listing.type === 'rent' && ' / month'}
          </p>
          <div className="d-flex gap-3 text-muted small mt-2">
            <span className="fw-bold">{listing.bedrooms ? `${listing.bedrooms} bed${listing.bedrooms > 1 ? 's' : ''}` : ''}</span>
            <span className="fw-bold">{listing.bathrooms ? `${listing.bathrooms} bath${listing.bathrooms > 1 ? 's' : ''}` : ''}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
