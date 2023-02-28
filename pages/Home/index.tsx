import Image from "next/image";
import Link from "next/link";
import React from "react";
import RegisterBtn from "../../components/buttons/Register";
import Cover from "../../components/Cover";
import Layout from "../../components/layout";
import BuyMeds from "../../components/SVGs/buyMeds";
import Checksvg from "../../components/SVGs/checksvg";
import ConsultationSvg from "../../components/SVGs/consultationSvg";
import DiagnosisSvg from "../../components/SVGs/diagnosisSvg";
import HelthTips from "../../components/SVGs/helthTips";
import styles from "./styles.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import GeneralPracticeSvg from "../../components/SVGs/generalPracticeSvg";
import BabyboySvg from "../../components/SVGs/babyboySvg";
import ScalpleSvg from "../../components/SVGs/scalpleSvg";
import ViginalSvg from "../../components/SVGs/viginalSvg";
import DermatologySvg from "../../components/SVGs/dermatologySvg";
import VirusSvg from "../../components/SVGs/virusSvg";

const Homepage = () => {
  return (
    <div>
      <Layout back="">
        <Cover>
          <div className={styles.heroSection}>
            <div className={styles.heroSectionI}>
              <h1>Serving your health needs is our priority.</h1>
              <p className={styles.heroSectionIP}>
                Sanar provides a suite of digital solutions for both pharmacy
                businesses and patient care. For pharmacy businesses, our
                digital platform enables a frictionless buying and selling of
                pharmacy products. For patient care, our digital engagement
                platform provides solutions for the interactions between
                patients, doctors and providers.
              </p>
              <div>
                <div>
                  <p>Register</p>
                </div>
              </div>
              <div className={styles.regBtn}>
                <RegisterBtn />
              </div>
            </div>
            <div>
              <Image
                src="/Assets/Images/heroHeader.png"
                width={609}
                height={609}
                alt="tellidoc image"
              />
            </div>
          </div>
        </Cover>
        <div className={styles.specialisationBg}>
          <Cover>
            <div className={styles.eclipses}>
              <svg
                width="30"
                height="25"
                viewBox="0 0 30 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 24.2293C0 17.8824 3.1607 11.7955 8.78679 7.30756C14.4129 2.81964 22.0435 0.298347 30 0.29834L30 24.2293L0 24.2293Z"
                  fill="#FCD5A5"
                />
              </svg>
              <svg
                width="27"
                height="21"
                viewBox="0 0 27 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.9902 0.0297573C24.7569 2.31013 26.2746 5.37382 26.2095 8.54683C26.1444 11.7198 24.5018 14.7423 21.6431 16.9492C18.7845 19.1562 14.9438 20.3668 10.9661 20.3149C6.98837 20.263 3.19943 18.9527 0.432786 16.6723L11.2115 8.35105L21.9902 0.0297573Z"
                  fill="#B7D7F3"
                />
              </svg>
              <svg
                width="41"
                height="33"
                viewBox="0 0 41 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="18.1561"
                  cy="18.0246"
                  rx="18.1561"
                  ry="18.0246"
                  transform="matrix(-0.791559 0.611092 -0.771661 -0.636034 48.5625 16.99)"
                  fill="#CDE2BC"
                />
              </svg>
            </div>
            {/* section 1 */}
            <div className={styles.specials}>
              <div className={styles.specialisationSect}>
                <h1>Our specializations</h1>
                <p>
                  Arcu blandit sapien, pulvinar magna lorem in adipiscing
                  tristique. Ullamcorper amet sit feugiat turpis odio arcu,
                  nisl.{" "}
                </p>
              </div>
              <div className={styles.mainSpecialisations}>
                <div>
                  <div>
                    <GeneralPracticeSvg />
                  </div>
                  <h2>General Practice</h2>
                  <p>
                    Arcu blandit sapien, pulvinar magna lorem in adipiscing
                    tristique. Ullamcorper amet sit feugiat turpis odio arcu,
                    nisl. Odio faucibus gravida{" "}
                  </p>
                </div>
                <div>
                  <div>
                    <BabyboySvg />
                  </div>
                  <h2>Pediatrics</h2>
                  <p>
                    Arcu blandit sapien, pulvinar magna lorem in adipiscing
                    tristique. Ullamcorper amet sit feugiat turpis odio arcu,
                    nisl. Odio faucibus gravida{" "}
                  </p>
                </div>
                <div>
                  <div>
                    <ScalpleSvg />
                  </div>
                  <h2>Surgery</h2>
                  <p>
                    Arcu blandit sapien, pulvinar magna lorem in adipiscing
                    tristique. Ullamcorper amet sit feugiat turpis odio arcu,
                    nisl. Odio faucibus gravida{" "}
                  </p>
                </div>
              </div>
              {/* section 2 */}

              <div className={styles.mainSpecialisations}>
                <div>
                  <div>
                    <ViginalSvg />
                  </div>
                  <h2>Obstetrics & Gynecology</h2>
                  <p>
                    Arcu blandit sapien, pulvinar magna lorem in adipiscing
                    tristique. Ullamcorper amet sit feugiat turpis odio arcu,
                    nisl. Odio faucibus gravida{" "}
                  </p>
                </div>
                <div>
                  <div>
                    <DermatologySvg />
                  </div>
                  <h2>Dermatology</h2>
                  <p>
                    Arcu blandit sapien, pulvinar magna lorem in adipiscing
                    tristique. Ullamcorper amet sit feugiat turpis odio arcu,
                    nisl. Odio faucibus gravida{" "}
                  </p>
                </div>
                <div>
                  <div>
                    <VirusSvg />
                  </div>
                  <h2>Infectious disease</h2>
                  <p>
                    Arcu blandit sapien, pulvinar magna lorem in adipiscing
                    tristique. Ullamcorper amet sit feugiat turpis odio arcu,
                    nisl. Odio faucibus gravida{" "}
                  </p>
                </div>
              </div>
            </div>
          </Cover>
        </div>
        <div className={styles.joinBg}>
          <Cover>
            <div className={styles.joinSect}>
              <div className={styles.joinSectInn}>
                <h1>Are you a medical doctor?</h1>
                <p className={styles.joinsSectP}>
                  Arcu blandit sapien, pulvinar magna lorem in adipiscing
                  tristique. Ullamcorper amet sit feugiat turpis odio arcu,
                  nisl. Odio faucibus gravida{" "}
                </p>
                <div className={styles.joinbtn}>
                  <p>JOIN US</p>
                </div>
              </div>
            </div>
          </Cover>
        </div>
        <div className={styles.consultbg}>
          <Cover>
            <div className={styles.consultCover}>
              <div>
                <Image
                  src="/Assets/Images/DoctorOla.png"
                  width={478}
                  height={616}
                  alt="doctorola"
                />
              </div>
              <div className={styles.consult}>
                <h1>Consult a doctor anytime and anywhere</h1>
                <p className={styles.consultP}>
                  Save yourself time and distance by easily talking to your
                  doctor in a video consultation,The video consultation connects
                  doctors and patients.
                </p>
                <div className={styles.consultCheck}>
                  <div className={styles.checklist}>
                    <Checksvg />
                    <p>Aliquam aliquet tristique orci amet. Purus elit, </p>
                  </div>
                  <div className={styles.checklist}>
                    <Checksvg />
                    <p>Aliquam aliquet tristique orci amet. Purus elit, </p>
                  </div>
                  <div className={styles.checklist}>
                    <Checksvg />
                    <p>Aliquam aliquet tristique orci amet. Purus elit, </p>
                  </div>
                </div>
                <div className={styles.registerDiv}>
                  <RegisterBtn />
                </div>
              </div>
            </div>
          </Cover>
        </div>
        <div className={styles.servicesCover}>
          <Cover>
            <div className={styles.healthServices}>
              <h1>Health services for you</h1>
              <p>
                Telidoc provides health care services and online consultations
                through doctors from various specializtions
              </p>
            </div>
            <div className={styles.servicfesMain}>
              <div>
                <div className={styles.servicesSvg}>
                  <DiagnosisSvg />
                </div>
                <h2>Diagnosis</h2>
                <p>
                  We offer physical examinations, and tests, such as blood
                  tests, imaging tests, and biopsies, etc.
                </p>
              </div>
              <div>
                <div className={styles.servicesSvg}>
                  <ConsultationSvg />
                </div>
                <h2>Online consultation</h2>
                <p>
                  Get a licensed doctors consultation in a few minutes. The
                  doctor is waiting for you.
                </p>
              </div>
              <div>
                <div className={styles.servicesSvg}>
                  <BuyMeds />
                </div>
                <h2>Buy medicine</h2>
                <p>
                  Save Time Live Healthy Be Happy. Buy your medications easily.
                </p>
              </div>
              <div>
                <div className={styles.servicesSvg}>
                  <HelthTips />
                </div>
                <h2>Health tips</h2>
                <p>
                  Arcu blandit sapien, pulvinar magna lorem in adipiscing
                  tristique. Ullamcorper amet sit feugiat turpis odio arcu,{" "}
                </p>
              </div>
            </div>
          </Cover>
        </div>
        <div className={styles.servicesCover}>
          <Cover>
            <div className={styles.easyConsult}>
              <p>4 easy steps to consult a doctor</p>
            </div>
            <div className={styles.steps}>
              <div>
                <h2>01</h2>
                <h3>Search doctor</h3>
                <p>
                  Search for a doctor through the list of our available doctors
                  and select a doctor of your choosing.
                </p>
              </div>
              <div>
                <h2>02</h2>
                <h3>Check doctor profile</h3>
                <p>
                  Arcu blandit sapien, pulvinar magna lorem in adipiscing
                  tristique. Ullamcorper amet sit feugiat turpis odio arcu,{" "}
                </p>
              </div>
              <div>
                <h2>03</h2>
                <h3>Schedule appointment</h3>
                <p>
                  Arcu blandit sapien, pulvinar magna lorem in adipiscing
                  tristique. Ullamcorper amet sit feugiat turpis odio arcu,{" "}
                </p>
              </div>
              <div>
                <h2>04</h2>
                <h3>Meet with the doctor</h3>
                <p>
                  Arcu blandit sapien, pulvinar magna lorem in adipiscing
                  tristique. Ullamcorper amet sit feugiat turpis odio arcu,{" "}
                </p>
              </div>
            </div>
          </Cover>
        </div>
        <div className={styles.doctorsBg}>
          <Cover>
            <div className={styles.quailified}>
              <h1>Our highly qualified doctors</h1>
              <Link href="#">
                <span>
                  <p>See More</p>
                  <AiOutlineArrowRight />
                </span>
              </Link>
            </div>
            <div className={styles.doctors}>
              <div>
                <Image
                  src="/Assets/Images/Doctor1.png"
                  width={320}
                  height={371}
                  alt="Telidoc Doctors"
                />
                <h2>Dr. Femi Olaleye Dr.</h2>
                <p>GENERAL PRACTIONER</p>
              </div>
              <div>
                <Image
                  src="/Assets/Images/Doctor2.png"
                  width={320}
                  height={371}
                  alt="Telidoc Doctors"
                />
                <h2>Mohammed Isa</h2>
                <p>SURGEON</p>
              </div>
              <div>
                <Image
                  src="/Assets/Images/Doctor3.png"
                  width={320}
                  height={371}
                  alt="Telidoc Doctors"
                />
                <h2>Dr. Chinelo Ugwanyi</h2>
                <p>NEUROLOGIST</p>
              </div>
            </div>
            <div></div>
          </Cover>
        </div>
        <div className={styles.testimonialsBg}>
          <Cover>
            <div className={styles.testiomonialInnerBg}>
              <div className={styles.testiOuter}>
                <div className={styles.testInner}>
                  <h1>Testimonials</h1>
                  <p>
                    “Arcu blandit sapien, pulvinar magna lorem in adipiscing
                    tristique. Ullamcorper amet sit feugiat turpis odio arcu,
                    nisl. Odio faucibus gravida Arcu blandit sapien, pulvinar
                    magna lorem in adipiscing tristique. Ullamcorper amet sit
                    feugiat turpis odio arcu, nisl. Odio faucibus gravida Arcu
                    blandit sapien, pulvinar magna lorem in adipiscing
                    tristique. Ullamcorper amet sit feugiat”
                  </p>
                  <div className={styles.profile}>
                    <div className={styles.mainProfile}>
                      <Image
                        src="/Assets/Images/ProfileImage.png"
                        width={24}
                        height={24}
                        alt="profileImage"
                      />
                      <p>Bayo Oloyede</p>
                    </div>
                    <Link href="#">
                      <p className={styles.arrowRight}>
                        {" "}
                        <AiOutlineArrowRight />
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Cover>
        </div>
      </Layout>
    </div>
  );
};

export default Homepage;