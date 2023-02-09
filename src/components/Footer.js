import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';
import {
  FaTelegram,
  FaYoutube,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';
// import { SiConvertio } from 'react-icons/si';

function Footer() {
  return (
    <>
      <div className="main-part">
        <h4>ReactJS Reactstrap Layout Component</h4>
        <div className="footer">
          <Row className="bg-secondary footer-first">
            <Col xs="12" sm="12" md="4">
              <div className="logoSection"> KahrobaNet </div>
            </Col>
            <Col xs="12" sm="6" md="4" className="footer-main-links">
              <Row>صفحه اصلی</Row>
              <Row>منابع خبری</Row>
              <Row>درباره ما</Row>
              <Row>تماس با ما</Row>
            </Col>
            <Col xs="12" sm="6" md="4" className="footer-links">
              <Row>اخبار سیاسی</Row>
              <Row>اخبار اقتصادی</Row>
              <Row>اخبار ورزشی</Row>
              <Row>اخبار فناوری</Row>
              <Row>اخبار اجتماعی</Row>
            </Col>
          </Row>
          <Row>
            <div className="social-container">
              <a
                href="https://www.youtube.com/c/jamesqquick"
                className="youtube social"
              >
                <FaYoutube size="50px" />
              </a>
              <a
                href="https://www.facebook.com/learnbuildteach/"
                className="facebook social"
              >
                <FaFacebook size="50px" />
              </a>
              <a
                href="https://www.twitter.com/jamesqquick"
                className="twitter social"
              >
                <FaTwitter size="50px" />
              </a>
              <a
                href="https://www.instagram.com/learnbuildteach"
                className="instagram social"
              >
                <FaInstagram size="50px" />
              </a>
              <a
                href="https://www.TaTelegram.com/learnbuildteach"
                className="telegram social"
              >
                <FaTelegram size="50px" />
              </a>
            </div>
          </Row>
          <Row className="bg-dark">
            <Col>
              <div className="footer-about">
                تمامي خبرهای موجود در سایت به صورت خودکار و توسط نرم افزار از
                سايت های خبری گردآوري شده است و سايت کهربا در مورد محتواي اخبار
                مسئولیتی ندارد.
              </div>
            </Col>
          </Row>
          <Row className="bg-secondary footer-rights">
            <Col> @1401-2022 </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Footer;
