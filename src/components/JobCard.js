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
            <div
              dangerouslySetInnerHTML={{
                __html: desc
              }}></div>
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
