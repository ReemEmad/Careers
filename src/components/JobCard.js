import React, { useState } from "react"
import { Modal, Button, Input } from "antd"
import rect from "../assets/Group 1273.png"

function JobCard({ id, category, job_type, date, title, desc }) {
  const { TextArea } = Input

  const [visible, setvisible] = useState(false)

  const handleCancel = () => {
    setvisible(false)
  }

  const ms = new Date() - new Date(date)

  return (
    <>
      <div className="job-card">
        <section className="job-card_title">
          <div className="container_rect">
            <img src={rect} alt=""></img>
          </div>
          <p>{(ms / (1000 * 60 * 60 * 24)).toFixed(0)} days ago</p>
        </section>
        <h1>{title}</h1>
        <section className="card_tags">
          <div className="card_tag">
            <p>{job_type}</p>
          </div>
          <div className="card_tag">
            <p>{category}</p>
          </div>
        </section>
        <div className="job_btn">
          <a onClick={() => setvisible(true)} href="##">
            Apply Job
          </a>
        </div>
      </div>

      <Modal
        visible={visible}
        // width={900}
        footer={<></>}
        onCancel={handleCancel}
        className="modal"
      >
        <section className="modal-content">
          <div className="modal-left">
            <section className="job-card_title">
              <div className="container_rect">
                <img src={rect} alt=""></img>
              </div>
              <div>
                <h1>{title}</h1>
                <p>{(ms / (1000 * 60 * 60 * 24)).toFixed(0)} days ago</p>
              </div>
            </section>

            {/* {desc} */}

            <p>
              Misr is more than just a real estate development company – we are
              place-makers. With projects across the residential, retail,
              hospitality and commercial segments, our core mission is to create
              soulful places that enrich people’s lives. To deliver on the
              promise, our research-led approach explores the social behaviors,
              habits and unique characteristics of the members of our
              collaborative communities; who belong to a variety of fields
              ranging from fashion and food to design and technology. We are
              redefining the real estate development landscape by placing R&D
              insights at the core of our operations to shape better living
              environments.
            </p>
            <section className="card_tags">
              <div className="card_tag">
                <p>{job_type}</p>
              </div>
              <div className="card_tag">
                <p>{category}</p>
              </div>
            </section>
          </div>
          <div className="modal-right">
            <Input
              placeholder="Email"
              bordered={false}
              className="email_modal"
            />
            <Input
              placeholder="Name"
              bordered={false}
              className="email_modal"
            />
            <Input
              placeholder="Phone"
              bordered={false}
              className="email_modal"
            />
            <p>Write about yourself and your work history</p>
            <TextArea rows={4} />
            <Button className="modal-right__btn" type="default">
              Apply job
            </Button>
          </div>
        </section>
      </Modal>
    </>
  )
}

export default JobCard
