import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Resume = () => {
  const data = useStaticQuery(graphql`
    query {
      dataJson {
        personalInfo {
          name
          title
          email
          phone
        }
        experience {
          title
          company
          startDate
          endDate
          description
        }
        education {
          degree
          institution
          graduationDate
        }
      }
    } 
  `)
  const { personalInfo, experience, education } = data.dataJson

  return (
    <div>
      <h1>{personalInfo.name}</h1>
      <p>{personalInfo.title}</p>
      <p>Email: {personalInfo.email}</p>
      <p>Phone: {personalInfo.phone}</p>

      <h2>Experience</h2>
      {experience.map((job, index) => (
        <div key={index}>
          <h3>{job.title} at {job.company}</h3>
          <p>{job.startDate} - {job.endDate}</p>
          <p>{job.description}</p>
        </div>
      ))}

      <h2>Education</h2>
      {education.map((edu, index) => (
        <div key={index}>
          <h3>{edu.degree}</h3>
          <p>{edu.institution}</p>
          <p>Graduated: {edu.graduationDate}</p>
        </div>
      ))}
    </div>
  )
}

export default Resume

