import React, { useState, useEffect } from "react"
import "antd/dist/antd.css"
import "./App.css"
import {
  PageHeader,
  Button,
  Menu,
  Dropdown,
  message,
  Input,
  Select,
  Carousel,
} from "antd"

import { DownOutlined, MenuOutlined, SearchOutlined } from "@ant-design/icons"
import src from "./assets/Logo-02.png"
import flower from "./assets/Illustrations2.png"
import bird from "./assets/Illustrations.png"
import right from "./assets/Group 1269.png"
import left from "./assets/Group 1270.png"
import slider1 from "./assets/DJI_-1.png"
import slider2 from "./assets/DJI_0177-0.png"
import JobCard from "./components/JobCard"

import { CarouselProvider, Slider, Slide } from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"
import Footer from "./components/Footer"
import { filterJobs, getAllJobs, searchJobs } from "./Apis"
import CustomDotGroup from "./components/CustomDotGroup"

function App() {
  const { Option } = Select

  const [loading, setloading] = useState(false)
  const [jobs, setjobs] = useState([])
  const [jobsCount, setjobsCount] = useState(8)
  const [category, setcategory] = useState()
  const [searchKey, setsearchKey] = useState()
  const [selected, setselected] = useState(0)

  const getData = async () => {
    setloading(true)
    const { data } = await getAllJobs(jobsCount)
    setjobs(data.jobs)
    setloading(false)
    setselected(0)
  }

  const loadMore = () => {
    setjobsCount((prev) => prev + 8)
    if (category) {
      handleJobsFilter(category)
    } else {
      getData()
    }
  }

  const handleJobsFilter = async (key, key2) => {
    const { data } = await filterJobs(key, jobsCount)
    setcategory(key)
    setjobs(data.jobs)
    setselected(key2)
  }

  useEffect(() => {
    getData()
  }, [])

  function handleMenuClick(e) {
    message.info("Click on menu item.")
    console.log("click", e)
  }

  const searchPlz = async () => {
    console.log(searchKey)
    const { data } = await searchJobs(searchKey, jobsCount)
    setjobs(data.jobs)
    console.log(data)
  }

  function onChange(a, b, c) {
    console.log(a, b, c)
  }

  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">Human Resources</Menu.Item>
      <Menu.Item key="2">Customer Support</Menu.Item>
      <Menu.Item key="3">Web & Mobile Development</Menu.Item>
      <Menu.Item key="4">Business Development</Menu.Item>
      <Menu.Item key="5">Marketing</Menu.Item>
    </Menu>
  )
  return (
    <>
      <div className="App">
        <PageHeader
          className="site-page-header-responsive"
          title={<img src={src} alt="logo" />}
          extra={[
            <span className="language">
              <a className="languange--active" href="##">
                EN
              </a>{" "}
              | <a href="##">Ar</a>
            </span>,
            <span className="burger">
              <MenuOutlined />
            </span>,
          ]}
        ></PageHeader>
        <section className="careers-main">
          <div className="careers-main__links">
            <h3 className="careers-main--header">CAREERS</h3>
            <a href="##">Home</a>
            <span> - </span>
            <a href="##">Careers</a>
          </div>
          {/* <span className="careers-main--search"> */}
          <h1>Search Among Our Jobs And Start Your Career</h1>
          {/* </span> */}
          {/* <Space wrap> */}
          <Input.Group compact>
            <Input
              defaultValue="Find Your Job"
              prefix={<SearchOutlined />}
              onChange={(e) => setsearchKey(e.target.value)}
              onKeyUp={searchPlz}
            />

            {/* <button onClick={searchPlz}> ok</button> */}
            <Select placeholder="All Jobs" className="careers-main_selector">
              <Option value="Option1">Human Resources</Option>
              <Option value="Option2">Customer Support</Option>
              <Option value="Option3">Web & Mobile Development</Option>
              <Option value="Option4">Business Development</Option>
              <Option value="Option4">Marketing</Option>
            </Select>
          </Input.Group>
          {/* </Space> */}
        </section>

        <section className="careers-cards">
          <div className="careers-cards__filter">
            <a
              href="##"
              className={selected === 0 ? "careers-cards__filter_active" : ""}
              onClick={getData}
            >
              All Jobs
            </a>
            <a
              href="##"
              className={selected === 1 ? "careers-cards__filter_active" : ""}
              onClick={() => handleJobsFilter("hr", 1)}
            >
              Human Resources
            </a>
            <a
              href="##"
              className={selected === 2 ? "careers-cards__filter_active" : ""}
              onClick={() => handleJobsFilter("customer-support", 2)}
            >
              Customer Support
            </a>
            <a
              href="##"
              className={selected === 3 ? "careers-cards__filter_active" : ""}
              onClick={() => handleJobsFilter("software-dev", 3)}
            >
              Web & Movile Development
            </a>
            <a
              href="##"
              className={selected === 4 ? "careers-cards__filter_active" : ""}
              onClick={() => handleJobsFilter("business", 4)}
            >
              Business Development
            </a>
            <a
              className={selected === 5 ? "careers-cards__filter_active" : ""}
              href="#marketing"
              onClick={() => handleJobsFilter("marketing", 5)}
            >
              Marketing
            </a>
          </div>

          <div className="job_card_flex">
            {jobs.map((item) => (
              <JobCard
                key={item.id}
                id={item.id}
                category={item.category}
                job_type={item.job_type}
                title={item.title}
                date={item.publication_date}
                desc={item.description}
              />
            ))}
          </div>
          <div className="careers-cards__btn-container">
            <Button
              type="default"
              size="large"
              onClick={loadMore}
              loading={loading}
            >
              Load More
            </Button>
          </div>
        </section>

        <section className="partners">
          <img src={flower} alt="" className="partners_flower"></img>
          <div className="partners_text">
            <h1>OUR PARTNERS</h1>
            <p>
              With quality at the heart of every decision they take, IMKAN Misr
              has partnered with the leading developments to develop and manage
              state-of-the-art facilities within Alburouj Community.
            </p>
          </div>
          <div className="partners_companies">
            <img src={left} alt="" className="partners_left"></img>
            <img src={bird} alt="" className="partners_middle"></img>
            <img src={right} alt="" className="partners_right"></img>
          </div>
        </section>

        <section className="construction">
          <div className="construction_dropdown">
            <Dropdown overlay={menu}>
              <Button size="large">
                February 2020 <DownOutlined />
              </Button>
            </Dropdown>
            <Dropdown overlay={menu}>
              <Button size="large">
                Unit Type <DownOutlined />
              </Button>
            </Dropdown>
          </div>
          <div className="construction_container">
            <div className="construction_text">
              <h1>CONSTRUCTION </h1>
              <h1>UPDATES</h1>
            </div>
            <div className="construction_slider">
              <CarouselProvider
                totalSlides={3}
                naturalSlideWidth={100}
                naturalSlideHeight={125}
                // visibleSlides={1}
                currentSlide={0}
              >
                <Slider className="slider">
                  <Slide index={0}>
                    <img src={slider1} alt="" />
                  </Slide>
                  <Slide index={1}>
                    <img src={slider2} alt="" />
                  </Slide>
                  <Slide index={2}>
                    <img src={slider2} alt="" />
                  </Slide>
                </Slider>
                <div className="slider_control">
                  <CustomDotGroup slides={3} />
                </div>
              </CarouselProvider>
            </div>
            <div className="slider_mobile">
              <Carousel afterChange={onChange}>
                <div>
                  <img src={slider1} alt="" />
                </div>
                <div>
                  <img src={slider2} alt="" />
                </div>
                <div>
                  <img src={slider2} alt="" />
                </div>
              </Carousel>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default App
