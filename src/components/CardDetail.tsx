import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  GetMovieDetailResponse,
  noIcons,
  ProductionCompanies,
} from '../store/types';
import './css/CardDetail.css';

interface CardDetailProps {
  movieDetailData: GetMovieDetailResponse;
}

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const CardDetail = ({ movieDetailData }: CardDetailProps) => {
  const {
    title,
    overview,
    runtime,
    production_companies,
    poster_path,
    genres,
    tagline,
    release_date,
  } = movieDetailData;

  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : noIcons;
  const hour = runtime && runtime > 60 ? Math.floor(runtime / 60) : 0;
  const minute = runtime ? runtime - hour * 60 : 0;
  const releaseDate = release_date
    ? new Intl.DateTimeFormat('en-US', options).format(new Date(release_date))
    : '';

  return (
    <Container fluid className="p-3">
      <Row className="my-2">
        <Col xs={4}>
          <Image src={poster} thumbnail className="detail-poster" />
        </Col>
        <Col xs={8} className="p-4">
          <div className="detail-title-container d-flex flex-column my-2">
            <p className="detail-title m-0">{title}</p>
            <p className="detail-tagline m-0\">{tagline}</p>
          </div>
          <div className="detail-overview">
            <p className="detail-overview">{overview}</p>
          </div>
          <div className="detail-misc">
            <p className="detail-item">
              {`${genres.length < 1 ? '' : 'Genre: '}${genres
                .map((genre: { id: number; name: string }) => genre.name)
                .join(', ')}`}
            </p>
            <p className="detail-item">
              {`${
                production_companies.length < 1 ? '' : `Prod Companies: `
              }${production_companies
                .map((comp: ProductionCompanies) => comp.name)
                .join(', ')}`}
            </p>
            <p className="detail-item">
              {`${!hour && !minute ? '' : 'Runtime: '} ${hour || ''}${
                hour && hour > 1 ? 'hrs' : 'hr'
              } ${minute || ''}${minute && minute > 1 ? 'mins' : 'min'}`}
            </p>
            <p className="detail-item">{`${
              releaseDate ? 'Release Date: ' : ''
            }${releaseDate}`}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CardDetail;
